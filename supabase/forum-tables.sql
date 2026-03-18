-- ══════════════════════════════════════════════════════════════
-- AIVancePro Forum — Supabase Tables & RLS
-- Run this in Supabase SQL Editor
-- ══════════════════════════════════════════════════════════════

-- 1. Forum posts
CREATE TABLE IF NOT EXISTS forum_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL DEFAULT 'Utilisateur',
  category TEXT NOT NULL DEFAULT 'general',
  article_slug TEXT,          -- nullable: set when linked to a blog/guide
  article_type TEXT,          -- 'blog' or 'guide' (nullable)
  upvotes INT NOT NULL DEFAULT 0,
  reply_count INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Forum replies
CREATE TABLE IF NOT EXISTS forum_replies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES forum_posts(id) ON DELETE CASCADE,
  parent_reply_id UUID REFERENCES forum_replies(id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL DEFAULT 'Utilisateur',
  upvotes INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Forum votes (one vote per user per target)
CREATE TABLE IF NOT EXISTS forum_votes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  target_id UUID NOT NULL,
  target_type TEXT NOT NULL CHECK (target_type IN ('post', 'reply')),
  value INT NOT NULL CHECK (value IN (-1, 1)),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, target_id, target_type)
);

-- 4. Forum reports (flagging)
CREATE TABLE IF NOT EXISTS forum_reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  reporter_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  target_id UUID NOT NULL,
  target_type TEXT NOT NULL CHECK (target_type IN ('post', 'reply')),
  reason TEXT NOT NULL DEFAULT 'inappropriate',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(reporter_id, target_id, target_type)
);

-- ── Indexes ──────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_forum_posts_category ON forum_posts(category);
CREATE INDEX IF NOT EXISTS idx_forum_posts_article ON forum_posts(article_slug);
CREATE INDEX IF NOT EXISTS idx_forum_posts_created ON forum_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_forum_replies_post ON forum_replies(post_id);
CREATE INDEX IF NOT EXISTS idx_forum_votes_target ON forum_votes(target_id, target_type);

-- ── RLS Policies ─────────────────────────────────────────────
ALTER TABLE forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_reports ENABLE ROW LEVEL SECURITY;

-- Posts: public read, auth insert, author update/delete
CREATE POLICY "Posts are publicly readable" ON forum_posts FOR SELECT USING (true);
CREATE POLICY "Auth users can create posts" ON forum_posts FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Authors can update their posts" ON forum_posts FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Authors can delete their posts" ON forum_posts FOR DELETE USING (auth.uid() = author_id);

-- Replies: public read, auth insert, author update/delete
CREATE POLICY "Replies are publicly readable" ON forum_replies FOR SELECT USING (true);
CREATE POLICY "Auth users can create replies" ON forum_replies FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Authors can update their replies" ON forum_replies FOR UPDATE USING (auth.uid() = author_id);
CREATE POLICY "Authors can delete their replies" ON forum_replies FOR DELETE USING (auth.uid() = author_id);

-- Votes: user can read own, insert own, delete own
CREATE POLICY "Users can read own votes" ON forum_votes FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can vote" ON forum_votes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can remove vote" ON forum_votes FOR DELETE USING (auth.uid() = user_id);

-- Reports: auth insert only (no read for normal users)
CREATE POLICY "Users can report" ON forum_reports FOR INSERT WITH CHECK (auth.uid() = reporter_id);

-- Admin: aivancepro@gmail.com can delete any post or reply
CREATE POLICY "Admin can delete any post" ON forum_posts FOR DELETE
  USING (auth.jwt() ->> 'email' = 'aivancepro@gmail.com');
CREATE POLICY "Admin can delete any reply" ON forum_replies FOR DELETE
  USING (auth.jwt() ->> 'email' = 'aivancepro@gmail.com');
-- Admin can also read all reports
CREATE POLICY "Admin can read reports" ON forum_reports FOR SELECT
  USING (auth.jwt() ->> 'email' = 'aivancepro@gmail.com');

-- ── Function to increment reply_count ────────────────────────
CREATE OR REPLACE FUNCTION increment_reply_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE forum_posts SET reply_count = reply_count + 1 WHERE id = NEW.post_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_reply_insert
  AFTER INSERT ON forum_replies
  FOR EACH ROW EXECUTE FUNCTION increment_reply_count();

-- ── Function to decrement reply_count on delete ────────────────
CREATE OR REPLACE FUNCTION decrement_reply_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE forum_posts SET reply_count = GREATEST(reply_count - 1, 0) WHERE id = OLD.post_id;
  RETURN OLD;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_reply_delete
  AFTER DELETE ON forum_replies
  FOR EACH ROW EXECUTE FUNCTION decrement_reply_count();

-- ── Function to update upvote counts ─────────────────────────
CREATE OR REPLACE FUNCTION update_vote_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF NEW.target_type = 'post' THEN
      UPDATE forum_posts SET upvotes = upvotes + NEW.value WHERE id = NEW.target_id;
    ELSE
      UPDATE forum_replies SET upvotes = upvotes + NEW.value WHERE id = NEW.target_id;
    END IF;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    IF OLD.target_type = 'post' THEN
      UPDATE forum_posts SET upvotes = upvotes - OLD.value WHERE id = OLD.target_id;
    ELSE
      UPDATE forum_replies SET upvotes = upvotes - OLD.value WHERE id = OLD.target_id;
    END IF;
    RETURN OLD;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_vote_change
  AFTER INSERT OR DELETE ON forum_votes
  FOR EACH ROW EXECUTE FUNCTION update_vote_count();
