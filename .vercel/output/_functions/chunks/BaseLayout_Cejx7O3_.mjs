import { b as createAstro, c as createComponent, a as renderTemplate, d as addAttribute, r as renderComponent, m as maybeRenderHead, u as unescapeHTML, F as Fragment, A as AstroError, w as UnknownContentCollectionError, x as RenderUndefinedEntryError, y as renderUniqueStylesheet, z as renderScriptElement, B as createHeadAndContent, C as renderSlot, G as renderHead } from './astro/server_B3WVSdIw.mjs';
import 'piccolore';
import 'clsx';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from './path_tbLlI_c1.mjs';
import { b as VALID_INPUT_FORMATS } from './consts_BLFvATRa.mjs';
import * as devalue from 'devalue';
/* empty css                          */

const languages = {
  fr: { flag: '\u{1F1EB}\u{1F1F7}', label: 'Fran\u00e7ais', short: 'FR' },
  en: { flag: '\u{1F1EC}\u{1F1E7}', label: 'English', short: 'EN' },
  de: { flag: '\u{1F1E9}\u{1F1EA}', label: 'Deutsch', short: 'DE' },
};

const t = {
  fr: {
    nav: {
      home: 'Accueil',
      product: 'Produit',
      features: 'Fonctionnalit\u00e9s',
      articles: 'Articles',
      blog: 'Blog',
      guides: 'Guides',
      forum: 'Forum',
      exercises: "Biblioth\u00e8que d'exercices",

      changelog: 'Nouveautés',
      more: 'Plus',
      reviews: 'Avis',
      help: 'Aide',
      support: 'Support',
      pricing: 'Tarifs',
      faq: 'FAQ',
      login: 'Connexion',
      download: 'T\u00e9l\u00e9charger',
      close: 'Fermer',
      menu: 'Menu',
      about: '\u00c0 propos',
    },
    footer: {
      tagline: 'Votre coach fitness personnel propuls\u00e9 par l\'intelligence artificielle.',
      product: 'Produit',
      support: 'Support',
      legal: 'L\u00e9gal',
      privacy: 'Confidentialit\u00e9',
      terms: 'CGU',
      copyright: '\u00a9 2026 AS Corporation. Tous droits r\u00e9serv\u00e9s.',
    },
    newsletter: {
      title: 'Conseils fitness gratuits chaque semaine',
      subtitle: 'Rejoins notre communaut\u00e9. Pas de spam, promis.',
      placeholder: 'Votre adresse email',
      button: "S'abonner",
      success: 'Merci ! Vous \u00eates inscrit.',
      error: 'Une erreur est survenue. R\u00e9essayez.',
      duplicate: 'Vous \u00eates d\u00e9j\u00e0 inscrit.',
      articleTitle: 'Cet article t\u2019a plu ?',
      articleText: 'Re\u00e7ois nos meilleurs conseils fitness chaque semaine, directement dans ta bo\u00eete mail.',
    },
    cookie: {
      text: 'Ce site utilise des cookies pour améliorer votre expérience.',
      accept: 'Accepter',
      reject: 'Refuser',
    },
    exitIntent: {
      title: 'Avant de partir...',
      text: 'Téléchargez AIVancePro gratuitement et commencez à progresser dès aujourd\'hui.',
      btn: 'Télécharger gratuitement',
      dismiss: 'Non merci',
    },
    search: {
      placeholder: 'Rechercher...',
      noResults: 'Aucun résultat trouvé.',
    },
    breadcrumb: {
      home: 'Accueil',
      blog: 'Blog',
      guides: 'Guides',
    },
    share: {
      title: 'Partager cet article',
    },
    notFound: {
      title: 'Page non trouvée',
      description: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
      back: 'Retour à l\'accueil',
    },
    links: {
      home: '/',
      features: '/fonctionnalites/',
      reviews: '/avis/',
      pricing: '/pricing/',
      faq: '/faq/',
      changelog: '/nouveautes/',
      blog: '/blog/',
      guides: '/guides/',
      exercises: '/exercices/',
      forum: '/forum/',

      login: '/login/',
      privacy: '/privacy/',
      terms: '/terms/',
      support: '/support/',
      about: '/about/',
      account: '/compte/',
      appStore: 'https://apps.apple.com/fr/app/aivancepro/id6756116760',
      playStore: 'https://play.google.com/store/apps/details?id=com.aivancepro.app',
    },
  },
  en: {
    nav: {
      home: 'Home',
      product: 'Product',
      features: 'Features',
      articles: 'Articles',
      blog: 'Blog',
      guides: 'Guides',
      exercises: 'Exercise Library',

      changelog: 'Changelog',
      more: 'More',
      reviews: 'Reviews',
      help: 'Help',
      support: 'Support',
      pricing: 'Pricing',
      faq: 'FAQ',
      login: 'Login',
      download: 'Download',
      close: 'Close',
      menu: 'Menu',
      about: 'About',
    },
    footer: {
      tagline: 'Your personal AI-powered fitness coach.',
      product: 'Product',
      support: 'Support',
      legal: 'Legal',
      privacy: 'Privacy',
      terms: 'Terms',
      copyright: '\u00a9 2026 AS Corporation. All rights reserved.',
    },
    newsletter: {
      title: 'Free weekly fitness tips',
      subtitle: 'Join our community. No spam, promise.',
      placeholder: 'Your email address',
      button: 'Subscribe',
      success: 'Thank you! You are subscribed.',
      error: 'Something went wrong. Try again.',
      duplicate: 'You are already subscribed.',
      articleTitle: 'Enjoyed this article?',
      articleText: 'Get our best fitness tips every week, straight to your inbox.',
    },
    cookie: {
      text: 'This site uses cookies to improve your experience.',
      accept: 'Accept',
      reject: 'Reject',
    },
    exitIntent: {
      title: 'Before you go...',
      text: 'Download AIVancePro for free and start progressing today.',
      btn: 'Download for free',
      dismiss: 'No thanks',
    },
    search: {
      placeholder: 'Search...',
      noResults: 'No results found.',
    },
    breadcrumb: {
      home: 'Home',
      blog: 'Blog',
      guides: 'Guides',
    },
    share: {
      title: 'Share this article',
    },
    notFound: {
      title: 'Page not found',
      description: 'The page you are looking for does not exist or has been moved.',
      back: 'Back to home',
    },
    links: {
      home: '/en/',
      features: '/en/features/',
      reviews: '/en/reviews/',
      pricing: '/en/pricing/',
      faq: '/en/faq/',
      changelog: '/en/changelog/',
      blog: '/en/blog/',
      guides: '/en/guides/',
      exercises: '/en/exercises/',

      login: '/en/login/',
      privacy: '/en/privacy/',
      terms: '/en/terms/',
      support: '/en/support/',
      about: '/en/about/',
      account: '/en/account/',
      appStore: 'https://apps.apple.com/app/aivancepro/id6756116760',
      playStore: 'https://play.google.com/store/apps/details?id=com.aivancepro.app',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      product: 'Produkt',
      features: 'Funktionen',
      articles: 'Artikel',
      blog: 'Blog',
      guides: 'Ratgeber',
      exercises: '\u00dcbungsbibliothek',

      changelog: 'Neuigkeiten',
      more: 'Mehr',
      reviews: 'Bewertungen',
      help: 'Hilfe',
      support: 'Hilfe & Kontakt',
      pricing: 'Preise',
      faq: 'H\u00e4ufige Fragen',
      login: 'Anmelden',
      download: 'Herunterladen',
      close: 'Schlie\u00dfen',
      menu: 'Men\u00fc',
      about: '\u00dcber uns',
    },
    footer: {
      tagline: 'Ihr pers\u00f6nlicher KI-gest\u00fctzter Fitness-Coach.',
      product: 'Produkt',
      support: 'Support',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'AGB',
      copyright: '\u00a9 2026 AS Corporation. Alle Rechte vorbehalten.',
    },
    newsletter: {
      title: 'Kostenlose Fitness-Tipps jede Woche',
      subtitle: 'Tritt unserer Community bei. Kein Spam, versprochen.',
      placeholder: 'Ihre E-Mail-Adresse',
      button: 'Abonnieren',
      success: 'Danke! Sie sind angemeldet.',
      error: 'Ein Fehler ist aufgetreten. Versuchen Sie es erneut.',
      duplicate: 'Sie sind bereits angemeldet.',
      articleTitle: 'Hat dir dieser Artikel gefallen?',
      articleText: 'Erhalte unsere besten Fitness-Tipps jede Woche direkt in dein Postfach.',
    },
    cookie: {
      text: 'Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern.',
      accept: 'Akzeptieren',
      reject: 'Ablehnen',
    },
    exitIntent: {
      title: 'Bevor Sie gehen...',
      text: 'Laden Sie AIVancePro kostenlos herunter und starten Sie noch heute.',
      btn: 'Kostenlos herunterladen',
      dismiss: 'Nein danke',
    },
    search: {
      placeholder: 'Suchen...',
      noResults: 'Keine Ergebnisse gefunden.',
    },
    breadcrumb: {
      home: 'Startseite',
      blog: 'Blog',
      guides: 'Ratgeber',
    },
    share: {
      title: 'Artikel teilen',
    },
    notFound: {
      title: 'Seite nicht gefunden',
      description: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
      back: 'Zurück zur Startseite',
    },
    links: {
      home: '/de/',
      features: '/de/funktionen/',
      reviews: '/de/bewertungen/',
      pricing: '/de/preise/',
      faq: '/de/faq/',
      changelog: '/de/neuigkeiten/',
      blog: '/de/blog/',
      guides: '/de/ratgeber/',
      exercises: '/de/uebungen/',

      login: '/de/login/',
      privacy: '/de/datenschutz/',
      terms: '/de/agb/',
      support: '/de/support/',
      about: '/de/about/',
      account: '/de/konto/',
      appStore: 'https://apps.apple.com/de/app/aivancepro/id6756116760',
      playStore: 'https://play.google.com/store/apps/details?id=com.aivancepro.app',
    },
  },
};

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://aivancepro.fr");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Nav;
  const { lang = "fr" } = Astro2.props;
  const i = t[lang];
  const chevronSvg = `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>`;
  const currentLang = languages[lang];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<nav> <div class="nav-inner"> <a', ' class="logo"> <img src="/assets/logo.png" alt="AIVancePro"> <span class="logo-text">AIVancePro</span> </a> <ul class="nav-center"> <li><a', ">", '</a></li> <li class="dropdown"> <button class="dropdown-toggle"> ', " ", ' </button> <div class="dropdown-menu"> <a', ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", "</a> </div> </li> <li><a", ">", '</a></li> <li class="dropdown"> <button class="dropdown-toggle"> ', " ", ' </button> <div class="dropdown-menu"> <a', ">", "</a> <a", ">", "</a> ", ' </div> </li> <li class="dropdown"> <button class="dropdown-toggle"> ', " ", ' </button> <div class="dropdown-menu"> <a', ">", "</a> <a", ">", "</a> <a", ">", `</a> </div> </li> </ul> <div class="nav-right"> <button class="theme-toggle" id="searchBtn" aria-label="Search" onclick="document.getElementById('searchOverlay').classList.add('open');document.getElementById('searchInput').focus()"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> </button> <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme"> <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> </button> <span class="nav-divider"></span> <div class="lang-dropdown"> <button class="lang-dropdown-toggle"> <span class="flag">`, "</span> ", ' <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg> </button> <div class="lang-dropdown-menu"> ', " </div> </div> <a", ' class="nav-login" id="nav-login-link"', ">", "</a> <a", ' class="nav-cta" target="_blank" rel="noopener">', `</a> <button class="mobile-menu-btn" onclick="document.getElementById('mobileMenu').classList.add('open');document.body.style.overflow='hidden'"`, `> <span></span><span></span><span></span> </button> </div> </div> </nav> <!-- Mobile Menu --> <div id="mobileMenu" class="mobile-menu"> <button class="mobile-menu-close" onclick="document.getElementById('mobileMenu').classList.remove('open');document.body.style.overflow=''"`, ">&times;</button> <a", ">", '</a> <span class="mobile-section-label">', '</span> <div class="mobile-sub"> <a', ">", "</a> <a", ">", "</a> <a", ">", "</a> <a", ">", "</a> </div> <a", ">", '</a> <span class="mobile-section-label">', '</span> <div class="mobile-sub"> <a', ">", "</a> <a", ">", "</a> ", ' </div> <span class="mobile-section-label">', '</span> <div class="mobile-sub"> <a', ">", "</a> <a", ">", "</a> <a", ">", "</a> </div> <a", ' id="mobile-login-link"', ">", "</a> ", " </div> <script>\n(function() {\n  // Touch support for dropdowns (tablets showing desktop nav)\n  document.querySelectorAll('.lang-dropdown-toggle, .dropdown-toggle').forEach(function(btn) {\n    btn.addEventListener('click', function(e) {\n      e.stopPropagation();\n      var parent = btn.closest('.lang-dropdown, .dropdown');\n      if (!parent) return;\n      var isOpen = parent.classList.contains('touch-open');\n      document.querySelectorAll('.touch-open').forEach(function(el) { el.classList.remove('touch-open'); });\n      if (!isOpen) parent.classList.add('touch-open');\n    });\n  });\n  document.addEventListener('click', function() {\n    document.querySelectorAll('.touch-open').forEach(function(el) { el.classList.remove('touch-open'); });\n  });\n\n  // Theme toggle\n  var themeBtn = document.getElementById('themeToggle');\n  if (themeBtn) {\n    var saved = localStorage.getItem('theme');\n    if (saved) document.documentElement.setAttribute('data-theme', saved);\n    themeBtn.addEventListener('click', function() {\n      var current = document.documentElement.getAttribute('data-theme');\n      var next = current === 'light' ? 'dark' : 'light';\n      document.documentElement.setAttribute('data-theme', next);\n      localStorage.setItem('theme', next);\n    });\n  }\n\n  // Search modal JS is in BaseLayout.astro (runs after overlay is in DOM)\n\n  // Auth state check\n  var storageKey = 'sb-vzmtvhcvyqzkmestdbko-auth-token';\n  try {\n    var raw = localStorage.getItem(storageKey);\n    if (!raw) return;\n    var parsed = JSON.parse(raw);\n    if (!parsed || !parsed.access_token) return;\n    var exp = parsed.expires_at;\n    if (exp && exp * 1000 < Date.now()) return;\n    var labels = { fr: 'Mon compte', en: 'My Account', de: 'Mein Konto' };\n    var lang = document.documentElement.lang || 'fr';\n    var label = labels[lang] || labels.fr;\n    var navLink = document.getElementById('nav-login-link');\n    var mobileLink = document.getElementById('mobile-login-link');\n    if (navLink) {\n      navLink.href = navLink.dataset.accountUrl;\n      navLink.textContent = label;\n    }\n    if (mobileLink) {\n      mobileLink.href = mobileLink.dataset.accountUrl;\n      mobileLink.textContent = label;\n    }\n  } catch(e) {}\n})();\n<\/script>"])), maybeRenderHead(), addAttribute(i.links.home, "href"), addAttribute(i.links.home, "href"), i.nav.home, i.nav.product, renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(chevronSvg)}` }), addAttribute(i.links.features, "href"), i.nav.features, addAttribute(i.links.exercises, "href"), i.nav.exercises, addAttribute(i.links.reviews, "href"), i.nav.reviews, addAttribute(i.links.changelog, "href"), i.nav.changelog, addAttribute(i.links.pricing, "href"), i.nav.pricing, i.nav.articles, renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(chevronSvg)}` }), addAttribute(i.links.blog, "href"), i.nav.blog, addAttribute(i.links.guides, "href"), i.nav.guides, i.links.forum && renderTemplate`<a${addAttribute(i.links.forum, "href")}>${i.nav.forum}</a>`, i.nav.help, renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(chevronSvg)}` }), addAttribute(i.links.faq, "href"), i.nav.faq, addAttribute(i.links.support, "href"), i.nav.support, addAttribute(i.links.about, "href"), i.nav.about, currentLang.flag, currentLang.short, Object.entries(languages).map(([code, l]) => renderTemplate`<a${addAttribute(t[code].links.home, "href")}${addAttribute(code === lang ? "active" : "", "class")}> <span class="flag">${l.flag}</span> ${l.label} </a>`), addAttribute(i.links.login, "href"), addAttribute(i.links.account, "data-account-url"), i.nav.login, addAttribute(i.links.appStore, "href"), i.nav.download, addAttribute(i.nav.menu, "aria-label"), addAttribute(i.nav.close, "aria-label"), addAttribute(i.links.home, "href"), i.nav.home, i.nav.product, addAttribute(i.links.features, "href"), i.nav.features, addAttribute(i.links.exercises, "href"), i.nav.exercises, addAttribute(i.links.reviews, "href"), i.nav.reviews, addAttribute(i.links.changelog, "href"), i.nav.changelog, addAttribute(i.links.pricing, "href"), i.nav.pricing, i.nav.articles, addAttribute(i.links.blog, "href"), i.nav.blog, addAttribute(i.links.guides, "href"), i.nav.guides, i.links.forum && renderTemplate`<a${addAttribute(i.links.forum, "href")}>${i.nav.forum}</a>`, i.nav.help, addAttribute(i.links.faq, "href"), i.nav.faq, addAttribute(i.links.support, "href"), i.nav.support, addAttribute(i.links.about, "href"), i.nav.about, addAttribute(i.links.login, "href"), addAttribute(i.links.account, "data-account-url"), i.nav.login, Object.entries(languages).filter(([code]) => code !== lang).map(([code, l]) => renderTemplate`<a${addAttribute(t[code].links.home, "href")}>${l.flag} ${l.label}</a>`));
}, "/Users/alexandre/Documents/aivancepro-website/src/components/Nav.astro", void 0);

const $$Astro$1 = createAstro("https://aivancepro.fr");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang = "fr" } = Astro2.props;
  const i = t[lang];
  return renderTemplate`${maybeRenderHead()}<footer> <div class="footer-inner"> <div class="footer-grid"> <div class="footer-brand"> <a${addAttribute(i.links.home, "href")} class="logo"> <img src="/assets/logo.png" alt="AIVancePro"> <span class="logo-text">AIVancePro</span> </a> <p>${i.footer.tagline}</p> <div class="newsletter-form"> <h4>${i.newsletter.title}</h4> <p class="newsletter-subtitle">${i.newsletter.subtitle}</p> <form id="newsletterForm"${addAttribute(lang, "data-lang")}${addAttribute(i.newsletter.success, "data-success")}${addAttribute(i.newsletter.error, "data-error")}${addAttribute(i.newsletter.duplicate, "data-duplicate")}> <div class="newsletter-input-wrap"> <input type="email" id="newsletterEmail"${addAttribute(i.newsletter.placeholder, "placeholder")} required> <button type="submit">${i.newsletter.button}</button> </div> <p class="newsletter-msg" id="newsletterMsg"></p> </form> </div> </div> <div class="footer-col"> <h4>${i.footer.product}</h4> <ul> <li><a${addAttribute(i.links.features, "href")}>${i.nav.features}</a></li> <li><a${addAttribute(i.links.exercises, "href")}>${i.nav.exercises}</a></li> <li><a${addAttribute(i.links.reviews, "href")}>${i.nav.reviews}</a></li> <li><a${addAttribute(i.links.pricing, "href")}>${i.nav.pricing}</a></li> <li><a${addAttribute(i.links.changelog, "href")}>${i.nav.changelog}</a></li> </ul> </div> <div class="footer-col"> <h4>${i.nav.articles}</h4> <ul> <li><a${addAttribute(i.links.blog, "href")}>${i.nav.blog}</a></li> <li><a${addAttribute(i.links.guides, "href")}>${i.nav.guides}</a></li> </ul> </div> <div class="footer-col"> <h4>${i.nav.help}</h4> <ul> <li><a${addAttribute(i.links.faq, "href")}>${i.nav.faq}</a></li> <li><a${addAttribute(i.links.support, "href")}>${i.footer.support}</a></li> <li><a${addAttribute(i.links.about, "href")}>${i.nav.about}</a></li> </ul> </div> <div class="footer-col"> <h4>${i.footer.legal}</h4> <ul> <li><a${addAttribute(i.links.privacy, "href")}>${i.footer.privacy}</a></li> <li><a${addAttribute(i.links.terms, "href")}>${i.footer.terms}</a></li> </ul> </div> </div> <div class="footer-bottom"> <p>${i.footer.copyright}</p> <div class="footer-social"> <a href="https://www.instagram.com/aivancepro/" target="_blank" rel="noopener" aria-label="Instagram"> <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg> </a> <a href="https://www.tiktok.com/@aivancepro" target="_blank" rel="noopener" aria-label="TikTok"> <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.17V12a4.83 4.83 0 01-3.77-1.54V6.69h3.77z"></path></svg> </a> <a href="https://x.com/AIVancePro" target="_blank" rel="noopener" aria-label="X"> <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg> </a> <a href="https://www.youtube.com/channel/UC8MGuOS22H-jXfe8Haqw8LA" target="_blank" rel="noopener" aria-label="YouTube"> <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg> </a> <a href="https://www.linkedin.com/company/aivancepro" target="_blank" rel="noopener" aria-label="LinkedIn"> <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg> </a> <a href="https://www.reddit.com/user/AIVancePro" target="_blank" rel="noopener" aria-label="Reddit"> <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 01.042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 014.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 01.14-.197.35.35 0 01.238-.042l2.906.617a1.214 1.214 0 011.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 00-.231.094.33.33 0 000 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 000-.462.342.342 0 00-.462 0c-.545.533-1.684.73-2.512.73-.828 0-1.953-.21-2.498-.73a.327.327 0 00-.219-.095z"></path></svg> </a> </div> </div> </div> </footer>`;
}, "/Users/alexandre/Documents/aivancepro-website/src/components/Footer.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_eTAI0PNE.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://aivancepro.fr", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_DISDY2J1.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: isRemotePath(link) ? link : prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c;
const $$Astro = createAstro("https://aivancepro.fr");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    lang = "fr",
    title,
    description,
    canonical,
    ogType = "website",
    ogImage = "https://aivancepro.fr/assets/og-image.png",
    alternates = {},
    jsonLd,
    noFooter = false,
    articleDate,
    articleModified,
    articleAuthor,
    articleSection,
    articleTag
  } = Astro2.props;
  const absoluteOgImage = ogImage?.startsWith("/") ? "https://aivancepro.fr" + ogImage : ogImage;
  const i = t[lang];
  const localeMap = { fr: "fr_FR", en: "en_GB", de: "de_DE" };
  const blogPrefixes = { fr: "/blog/", en: "/en/blog/", de: "/de/blog/" };
  const guidePrefixes = { fr: "/guides/", en: "/en/guides/", de: "/de/ratgeber/" };
  const blogPosts = (await getCollection("blog", ({ data }) => data.lang === lang)).map((p) => ({ title: p.data.title, desc: p.data.description, tag: p.data.tag, url: blogPrefixes[lang] + p.data.slug + "/" }));
  const guidePosts = (await getCollection("guides", ({ data }) => data.lang === lang)).map((p) => ({ title: p.data.title, desc: p.data.description, tag: p.data.tag, url: guidePrefixes[lang] + p.data.slug + "/" }));
  return renderTemplate(_c || (_c = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" sizes="64x64" href="/assets/favicon-64.png"><link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48.png"><link rel="apple-touch-icon" sizes="128x128" href="/assets/apple-touch-icon.png"><meta name="apple-itunes-app" content="app-id=6756116760"><title>', "</title>", "", "", "", "", "", '<meta property="og:type"', ">", '<meta property="og:title"', ">", '<meta property="og:site_name" content="AIVancePro"><meta property="og:image"', '><meta property="og:locale"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', ">", '<meta name="twitter:image"', ">", "", "", "", "", "", "", "<script>\n      (function(){var t=localStorage.getItem('theme');if(!t&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)t='light';if(t)document.documentElement.setAttribute('data-theme',t);})();\n    <\/script>", "</head> <body> ", " ", " ", ' <!-- Search Modal --> <div class="search-overlay" id="searchOverlay"> <div class="search-box"> <div class="search-input-wrap"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> <input type="text" id="searchInput"', ' autocomplete="off"> <kbd class="search-kbd">Esc</kbd> </div> <div class="search-results" id="searchResults"> <a', "", ' data-desc="AIVancePro"><div class="result-title">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> ", " ", ' <div class="no-results" style="display:none">', '</div> </div> </div> </div> <!-- Exit Intent Popup --> <div class="exit-popup-overlay" id="exitPopup"> <div class="exit-popup"> <button class="exit-popup-close" id="exitPopupClose">&times;</button> <h3>', "</h3> <p>", "</p> <a", ' class="btn-primary" target="_blank" rel="noopener">', '</a> <button class="dismiss-link" id="exitPopupDismiss">', '</button> </div> </div> <!-- Newsletter Popup (2 min timer) --> <div class="nl-popup-overlay" id="nlPopup"> <div class="nl-popup"> <button class="nl-popup-close" id="nlPopupClose">&times;</button> <div class="nl-popup-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="40" height="40"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> </div> <h3>', "</h3> <p>", '</p> <form class="newsletter-form-el nl-popup-form"', "", "", "", '> <div class="newsletter-input-wrap"> <input type="email"', ' required> <button type="submit">', '</button> </div> <p class="newsletter-msg"></p> </form> </div> </div> <!-- Cookie Banner --> <div id="cookieBanner" class="cookie-banner"> <div class="cookie-inner"> <p>', " <a", ">", '</a></p> <div class="cookie-buttons"> <button class="cookie-btn reject" id="cookieReject">', '</button> <button class="cookie-btn accept" id="cookieAccept">', `</button> </div> </div> </div> <!-- Back to Top --> <button class="back-to-top" id="backToTop" aria-label="Back to top"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg> </button> <script>
    (function(){
      // Search modal
      var searchOverlay = document.getElementById('searchOverlay');
      var searchInput = document.getElementById('searchInput');
      if (searchOverlay) {
        document.addEventListener('keydown', function(e) {
          if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchOverlay.classList.toggle('open');
            if (searchOverlay.classList.contains('open') && searchInput) searchInput.focus();
          }
          if (e.key === 'Escape') searchOverlay.classList.remove('open');
        });
        searchOverlay.addEventListener('click', function(e) {
          if (e.target === searchOverlay) searchOverlay.classList.remove('open');
        });
        if (searchInput) {
          searchInput.addEventListener('input', function() {
            var q = this.value.toLowerCase().trim();
            var results = document.getElementById('searchResults');
            if (!results) return;
            var items = results.querySelectorAll('a');
            var noRes = results.querySelector('.no-results');
            var visible = 0;
            items.forEach(function(a) {
              var text = ((a.dataset.title || '') + ' ' + (a.dataset.desc || '')).toLowerCase();
              var show = !q || text.indexOf(q) !== -1;
              a.style.display = show ? '' : 'none';
              if (show) visible++;
            });
            if (noRes) noRes.style.display = (q && visible === 0) ? '' : 'none';
          });
        }
      }

      // Reveal animations
      var els = document.querySelectorAll('.reveal');
      if (els.length) {
        var obs = new IntersectionObserver(function(entries) {
          entries.forEach(function(e) {
            if (e.isIntersecting) {
              e.target.classList.add('visible');
              obs.unobserve(e.target);
            }
          });
        }, { threshold: 0.15 });
        els.forEach(function(el) { obs.observe(el); });
      }

      // Animated counters
      var numbers = document.querySelectorAll('.proof-item .number .gradient');
      if (numbers.length) {
        var counterObs = new IntersectionObserver(function(entries) {
          entries.forEach(function(e) {
            if (!e.isIntersecting) return;
            var el = e.target;
            var text = el.textContent.trim();
            var match = text.match(/^(\\d+)/);
            if (!match) return;
            var target = parseInt(match[1]);
            var suffix = text.replace(match[1], '');
            var duration = 1500;
            var start = performance.now();
            function step(now) {
              var progress = Math.min((now - start) / duration, 1);
              var eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.round(target * eased) + suffix;
              if (progress < 1) requestAnimationFrame(step);
            }
            el.textContent = '0' + suffix;
            requestAnimationFrame(step);
            counterObs.unobserve(el);
          });
        }, { threshold: 0.5 });
        numbers.forEach(function(el) { counterObs.observe(el); });
      }

      // Back to top (throttled)
      var btn = document.getElementById('backToTop');
      if (btn) {
        var btTicking = false;
        window.addEventListener('scroll', function() {
          if (!btTicking) {
            requestAnimationFrame(function() {
              btn.classList.toggle('visible', window.scrollY > 500);
              btTicking = false;
            });
            btTicking = true;
          }
        }, { passive: true });
        btn.addEventListener('click', function() {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      // Cookie banner
      var banner = document.getElementById('cookieBanner');
      if (banner && !localStorage.getItem('cookie_consent')) {
        banner.classList.add('show');
      }
      var acceptBtn = document.getElementById('cookieAccept');
      var rejectBtn = document.getElementById('cookieReject');
      if (acceptBtn) acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'accepted');
        banner.classList.remove('show');
      });
      if (rejectBtn) rejectBtn.addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'rejected');
        banner.classList.remove('show');
      });
      // Exit intent popup
      var exitPopup = document.getElementById('exitPopup');
      if (exitPopup && !localStorage.getItem('exit_popup_dismissed')) {
        var exitShown = false;
        document.addEventListener('mouseleave', function(e) {
          if (e.clientY < 0 && !exitShown) {
            exitShown = true;
            exitPopup.classList.add('show');
          }
        });
        var closeExit = function() {
          exitPopup.classList.remove('show');
          localStorage.setItem('exit_popup_dismissed', '1');
        };
        var exitClose = document.getElementById('exitPopupClose');
        var exitDismiss = document.getElementById('exitPopupDismiss');
        if (exitClose) exitClose.addEventListener('click', closeExit);
        if (exitDismiss) exitDismiss.addEventListener('click', closeExit);
        exitPopup.addEventListener('click', function(e) { if (e.target === exitPopup) closeExit(); });
      }

      // Testimonials carousel (mobile)
      var track = document.querySelector('.testimonials-track');
      if (track) {
        var slider = track.querySelector('.testimonials-slider');
        var cards = slider ? slider.querySelectorAll('.testimonial-card') : [];
        var dots = document.querySelectorAll('.testimonials-dot');
        if (cards.length > 1) {
          var currentSlide = 0;
          var autoInterval;
          function goToSlide(n) {
            currentSlide = n;
            if (slider) slider.style.transform = 'translateX(-' + (n * 100) + '%)';
            dots.forEach(function(d, i) { d.classList.toggle('active', i === n); });
          }
          dots.forEach(function(d, i) {
            d.addEventListener('click', function() { goToSlide(i); resetAuto(); });
          });
          function resetAuto() {
            clearInterval(autoInterval);
            autoInterval = setInterval(function() { goToSlide((currentSlide + 1) % cards.length); }, 5000);
          }
          resetAuto();
        }
      }

      // Newsletter popup (2 min timer on reading pages)
      var nlPopup = document.getElementById('nlPopup');
      if (nlPopup && !localStorage.getItem('nl_popup_subscribed')) {
        var nlDismissed = localStorage.getItem('nl_popup_dismissed');
        var canShow = !nlDismissed || (Date.now() - parseInt(nlDismissed)) > 7 * 24 * 60 * 60 * 1000;
        if (canShow) {
          var isReadingPage = document.querySelector('.article-content') || window.location.pathname.match(/\\/(blog|guides|ratgeber|exercices|exercises|uebungen)\\//);
          if (isReadingPage) {
            setTimeout(function() {
              if (!localStorage.getItem('nl_popup_subscribed')) {
                nlPopup.classList.add('show');
              }
            }, 120000);
          }
        }
        var closeNlPopup = function() {
          nlPopup.classList.remove('show');
          localStorage.setItem('nl_popup_dismissed', Date.now().toString());
        };
        var nlClose = document.getElementById('nlPopupClose');
        if (nlClose) nlClose.addEventListener('click', closeNlPopup);
        nlPopup.addEventListener('click', function(e) { if (e.target === nlPopup) closeNlPopup(); });
        // Mark as subscribed on successful submission
        var nlPopupForm = nlPopup.querySelector('.nl-popup-form');
        if (nlPopupForm) {
          var origSubmit = nlPopupForm.addEventListener;
          var observer = new MutationObserver(function() {
            var msg = nlPopupForm.querySelector('.newsletter-msg');
            if (msg && msg.classList.contains('success')) {
              localStorage.setItem('nl_popup_subscribed', '1');
              setTimeout(closeNlPopup, 2000);
            }
          });
          observer.observe(nlPopupForm, { subtree: true, attributes: true, attributeFilter: ['class'] });
        }
      }

      // Newsletter forms (footer + article)
      document.querySelectorAll('#newsletterForm, .newsletter-form-el').forEach(function(nlForm) {
        nlForm.addEventListener('submit', function(e) {
          e.preventDefault();
          var emailInput = nlForm.querySelector('input[type="email"]');
          var email = emailInput.value.trim();
          var msg = nlForm.querySelector('.newsletter-msg');
          var btn = nlForm.querySelector('button[type="submit"]');
          var lang = nlForm.dataset.lang || 'fr';
          if (!email) return;
          btn.disabled = true;
          msg.textContent = '';
          msg.className = 'newsletter-msg';

          fetch('https://vzmtvhcvyqzkmestdbko.supabase.co/rest/v1/newsletter_subscribers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bXR2aGN2eXF6a21lc3RkYmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5OTgyOTQsImV4cCI6MjA1MTU3NDI5NH0.kGFORJqHey9OKMfaKJ95qr6PxPmJdQIpN8BkS0j8MNQ',
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bXR2aGN2eXF6a21lc3RkYmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5OTgyOTQsImV4cCI6MjA1MTU3NDI5NH0.kGFORJqHey9OKMfaKJ95qr6PxPmJdQIpN8BkS0j8MNQ',
              'Prefer': 'return=minimal'
            },
            body: JSON.stringify({ email: email, lang: lang })
          }).then(function(res) {
            if (res.ok) {
              msg.textContent = nlForm.dataset.success;
              msg.className = 'newsletter-msg success';
              emailInput.value = '';
            } else if (res.status === 409) {
              msg.textContent = nlForm.dataset.duplicate;
              msg.className = 'newsletter-msg error';
            } else {
              msg.textContent = nlForm.dataset.error;
              msg.className = 'newsletter-msg error';
            }
            btn.disabled = false;
          }).catch(function() {
            msg.textContent = nlForm.dataset.error;
            msg.className = 'newsletter-msg error';
            btn.disabled = false;
          });
        });
      });
    })();
    <\/script> </body> </html>`], ["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" sizes="64x64" href="/assets/favicon-64.png"><link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48.png"><link rel="apple-touch-icon" sizes="128x128" href="/assets/apple-touch-icon.png"><meta name="apple-itunes-app" content="app-id=6756116760"><title>', "</title>", "", "", "", "", "", '<meta property="og:type"', ">", '<meta property="og:title"', ">", '<meta property="og:site_name" content="AIVancePro"><meta property="og:image"', '><meta property="og:locale"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', ">", '<meta name="twitter:image"', ">", "", "", "", "", "", "", "<script>\n      (function(){var t=localStorage.getItem('theme');if(!t&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)t='light';if(t)document.documentElement.setAttribute('data-theme',t);})();\n    <\/script>", "</head> <body> ", " ", " ", ' <!-- Search Modal --> <div class="search-overlay" id="searchOverlay"> <div class="search-box"> <div class="search-input-wrap"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> <input type="text" id="searchInput"', ' autocomplete="off"> <kbd class="search-kbd">Esc</kbd> </div> <div class="search-results" id="searchResults"> <a', "", ' data-desc="AIVancePro"><div class="result-title">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> <a", "", "", '><div class="result-title">', '</div><div class="result-desc">', "</div></a> ", " ", ' <div class="no-results" style="display:none">', '</div> </div> </div> </div> <!-- Exit Intent Popup --> <div class="exit-popup-overlay" id="exitPopup"> <div class="exit-popup"> <button class="exit-popup-close" id="exitPopupClose">&times;</button> <h3>', "</h3> <p>", "</p> <a", ' class="btn-primary" target="_blank" rel="noopener">', '</a> <button class="dismiss-link" id="exitPopupDismiss">', '</button> </div> </div> <!-- Newsletter Popup (2 min timer) --> <div class="nl-popup-overlay" id="nlPopup"> <div class="nl-popup"> <button class="nl-popup-close" id="nlPopupClose">&times;</button> <div class="nl-popup-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="40" height="40"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> </div> <h3>', "</h3> <p>", '</p> <form class="newsletter-form-el nl-popup-form"', "", "", "", '> <div class="newsletter-input-wrap"> <input type="email"', ' required> <button type="submit">', '</button> </div> <p class="newsletter-msg"></p> </form> </div> </div> <!-- Cookie Banner --> <div id="cookieBanner" class="cookie-banner"> <div class="cookie-inner"> <p>', " <a", ">", '</a></p> <div class="cookie-buttons"> <button class="cookie-btn reject" id="cookieReject">', '</button> <button class="cookie-btn accept" id="cookieAccept">', `</button> </div> </div> </div> <!-- Back to Top --> <button class="back-to-top" id="backToTop" aria-label="Back to top"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg> </button> <script>
    (function(){
      // Search modal
      var searchOverlay = document.getElementById('searchOverlay');
      var searchInput = document.getElementById('searchInput');
      if (searchOverlay) {
        document.addEventListener('keydown', function(e) {
          if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchOverlay.classList.toggle('open');
            if (searchOverlay.classList.contains('open') && searchInput) searchInput.focus();
          }
          if (e.key === 'Escape') searchOverlay.classList.remove('open');
        });
        searchOverlay.addEventListener('click', function(e) {
          if (e.target === searchOverlay) searchOverlay.classList.remove('open');
        });
        if (searchInput) {
          searchInput.addEventListener('input', function() {
            var q = this.value.toLowerCase().trim();
            var results = document.getElementById('searchResults');
            if (!results) return;
            var items = results.querySelectorAll('a');
            var noRes = results.querySelector('.no-results');
            var visible = 0;
            items.forEach(function(a) {
              var text = ((a.dataset.title || '') + ' ' + (a.dataset.desc || '')).toLowerCase();
              var show = !q || text.indexOf(q) !== -1;
              a.style.display = show ? '' : 'none';
              if (show) visible++;
            });
            if (noRes) noRes.style.display = (q && visible === 0) ? '' : 'none';
          });
        }
      }

      // Reveal animations
      var els = document.querySelectorAll('.reveal');
      if (els.length) {
        var obs = new IntersectionObserver(function(entries) {
          entries.forEach(function(e) {
            if (e.isIntersecting) {
              e.target.classList.add('visible');
              obs.unobserve(e.target);
            }
          });
        }, { threshold: 0.15 });
        els.forEach(function(el) { obs.observe(el); });
      }

      // Animated counters
      var numbers = document.querySelectorAll('.proof-item .number .gradient');
      if (numbers.length) {
        var counterObs = new IntersectionObserver(function(entries) {
          entries.forEach(function(e) {
            if (!e.isIntersecting) return;
            var el = e.target;
            var text = el.textContent.trim();
            var match = text.match(/^(\\\\d+)/);
            if (!match) return;
            var target = parseInt(match[1]);
            var suffix = text.replace(match[1], '');
            var duration = 1500;
            var start = performance.now();
            function step(now) {
              var progress = Math.min((now - start) / duration, 1);
              var eased = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.round(target * eased) + suffix;
              if (progress < 1) requestAnimationFrame(step);
            }
            el.textContent = '0' + suffix;
            requestAnimationFrame(step);
            counterObs.unobserve(el);
          });
        }, { threshold: 0.5 });
        numbers.forEach(function(el) { counterObs.observe(el); });
      }

      // Back to top (throttled)
      var btn = document.getElementById('backToTop');
      if (btn) {
        var btTicking = false;
        window.addEventListener('scroll', function() {
          if (!btTicking) {
            requestAnimationFrame(function() {
              btn.classList.toggle('visible', window.scrollY > 500);
              btTicking = false;
            });
            btTicking = true;
          }
        }, { passive: true });
        btn.addEventListener('click', function() {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      // Cookie banner
      var banner = document.getElementById('cookieBanner');
      if (banner && !localStorage.getItem('cookie_consent')) {
        banner.classList.add('show');
      }
      var acceptBtn = document.getElementById('cookieAccept');
      var rejectBtn = document.getElementById('cookieReject');
      if (acceptBtn) acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'accepted');
        banner.classList.remove('show');
      });
      if (rejectBtn) rejectBtn.addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'rejected');
        banner.classList.remove('show');
      });
      // Exit intent popup
      var exitPopup = document.getElementById('exitPopup');
      if (exitPopup && !localStorage.getItem('exit_popup_dismissed')) {
        var exitShown = false;
        document.addEventListener('mouseleave', function(e) {
          if (e.clientY < 0 && !exitShown) {
            exitShown = true;
            exitPopup.classList.add('show');
          }
        });
        var closeExit = function() {
          exitPopup.classList.remove('show');
          localStorage.setItem('exit_popup_dismissed', '1');
        };
        var exitClose = document.getElementById('exitPopupClose');
        var exitDismiss = document.getElementById('exitPopupDismiss');
        if (exitClose) exitClose.addEventListener('click', closeExit);
        if (exitDismiss) exitDismiss.addEventListener('click', closeExit);
        exitPopup.addEventListener('click', function(e) { if (e.target === exitPopup) closeExit(); });
      }

      // Testimonials carousel (mobile)
      var track = document.querySelector('.testimonials-track');
      if (track) {
        var slider = track.querySelector('.testimonials-slider');
        var cards = slider ? slider.querySelectorAll('.testimonial-card') : [];
        var dots = document.querySelectorAll('.testimonials-dot');
        if (cards.length > 1) {
          var currentSlide = 0;
          var autoInterval;
          function goToSlide(n) {
            currentSlide = n;
            if (slider) slider.style.transform = 'translateX(-' + (n * 100) + '%)';
            dots.forEach(function(d, i) { d.classList.toggle('active', i === n); });
          }
          dots.forEach(function(d, i) {
            d.addEventListener('click', function() { goToSlide(i); resetAuto(); });
          });
          function resetAuto() {
            clearInterval(autoInterval);
            autoInterval = setInterval(function() { goToSlide((currentSlide + 1) % cards.length); }, 5000);
          }
          resetAuto();
        }
      }

      // Newsletter popup (2 min timer on reading pages)
      var nlPopup = document.getElementById('nlPopup');
      if (nlPopup && !localStorage.getItem('nl_popup_subscribed')) {
        var nlDismissed = localStorage.getItem('nl_popup_dismissed');
        var canShow = !nlDismissed || (Date.now() - parseInt(nlDismissed)) > 7 * 24 * 60 * 60 * 1000;
        if (canShow) {
          var isReadingPage = document.querySelector('.article-content') || window.location.pathname.match(/\\\\/(blog|guides|ratgeber|exercices|exercises|uebungen)\\\\//);
          if (isReadingPage) {
            setTimeout(function() {
              if (!localStorage.getItem('nl_popup_subscribed')) {
                nlPopup.classList.add('show');
              }
            }, 120000);
          }
        }
        var closeNlPopup = function() {
          nlPopup.classList.remove('show');
          localStorage.setItem('nl_popup_dismissed', Date.now().toString());
        };
        var nlClose = document.getElementById('nlPopupClose');
        if (nlClose) nlClose.addEventListener('click', closeNlPopup);
        nlPopup.addEventListener('click', function(e) { if (e.target === nlPopup) closeNlPopup(); });
        // Mark as subscribed on successful submission
        var nlPopupForm = nlPopup.querySelector('.nl-popup-form');
        if (nlPopupForm) {
          var origSubmit = nlPopupForm.addEventListener;
          var observer = new MutationObserver(function() {
            var msg = nlPopupForm.querySelector('.newsletter-msg');
            if (msg && msg.classList.contains('success')) {
              localStorage.setItem('nl_popup_subscribed', '1');
              setTimeout(closeNlPopup, 2000);
            }
          });
          observer.observe(nlPopupForm, { subtree: true, attributes: true, attributeFilter: ['class'] });
        }
      }

      // Newsletter forms (footer + article)
      document.querySelectorAll('#newsletterForm, .newsletter-form-el').forEach(function(nlForm) {
        nlForm.addEventListener('submit', function(e) {
          e.preventDefault();
          var emailInput = nlForm.querySelector('input[type="email"]');
          var email = emailInput.value.trim();
          var msg = nlForm.querySelector('.newsletter-msg');
          var btn = nlForm.querySelector('button[type="submit"]');
          var lang = nlForm.dataset.lang || 'fr';
          if (!email) return;
          btn.disabled = true;
          msg.textContent = '';
          msg.className = 'newsletter-msg';

          fetch('https://vzmtvhcvyqzkmestdbko.supabase.co/rest/v1/newsletter_subscribers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bXR2aGN2eXF6a21lc3RkYmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5OTgyOTQsImV4cCI6MjA1MTU3NDI5NH0.kGFORJqHey9OKMfaKJ95qr6PxPmJdQIpN8BkS0j8MNQ',
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bXR2aGN2eXF6a21lc3RkYmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5OTgyOTQsImV4cCI6MjA1MTU3NDI5NH0.kGFORJqHey9OKMfaKJ95qr6PxPmJdQIpN8BkS0j8MNQ',
              'Prefer': 'return=minimal'
            },
            body: JSON.stringify({ email: email, lang: lang })
          }).then(function(res) {
            if (res.ok) {
              msg.textContent = nlForm.dataset.success;
              msg.className = 'newsletter-msg success';
              emailInput.value = '';
            } else if (res.status === 409) {
              msg.textContent = nlForm.dataset.duplicate;
              msg.className = 'newsletter-msg error';
            } else {
              msg.textContent = nlForm.dataset.error;
              msg.className = 'newsletter-msg error';
            }
            btn.disabled = false;
          }).catch(function() {
            msg.textContent = nlForm.dataset.error;
            msg.className = 'newsletter-msg error';
            btn.disabled = false;
          });
        });
      });
    })();
    <\/script> </body> </html>`])), addAttribute(lang, "lang"), title, description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`, canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")}>`, alternates.fr && renderTemplate`<link rel="alternate" hreflang="fr"${addAttribute(alternates.fr, "href")}>`, alternates.en && renderTemplate`<link rel="alternate" hreflang="en"${addAttribute(alternates.en, "href")}>`, alternates.de && renderTemplate`<link rel="alternate" hreflang="de"${addAttribute(alternates.de, "href")}>`, alternates.fr && renderTemplate`<link rel="alternate" hreflang="x-default"${addAttribute(alternates.fr, "href")}>`, addAttribute(ogType, "content"), canonical && renderTemplate`<meta property="og:url"${addAttribute(canonical, "content")}>`, addAttribute(title, "content"), description && renderTemplate`<meta property="og:description"${addAttribute(description, "content")}>`, addAttribute(absoluteOgImage, "content"), addAttribute(localeMap[lang] || "fr_FR", "content"), addAttribute(title, "content"), description && renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>`, addAttribute(absoluteOgImage, "content"), ogType === "article" && articleDate && renderTemplate`<meta property="article:published_time"${addAttribute(articleDate, "content")}>`, ogType === "article" && articleModified && renderTemplate`<meta property="article:modified_time"${addAttribute(articleModified, "content")}>`, ogType === "article" && articleAuthor && renderTemplate`<meta property="article:author"${addAttribute(articleAuthor, "content")}>`, ogType === "article" && articleSection && renderTemplate`<meta property="article:section"${addAttribute(articleSection, "content")}>`, ogType === "article" && articleTag && renderTemplate`<meta property="article:tag"${addAttribute(articleTag, "content")}>`, jsonLd && (Array.isArray(jsonLd) ? jsonLd.map((block) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(block)))) : renderTemplate(_b || (_b = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(jsonLd)))), renderSlot($$result, $$slots["head"]), renderHead(), renderComponent($$result, "Nav", $$Nav, { "lang": lang }), renderSlot($$result, $$slots["default"]), !noFooter && renderTemplate`${renderComponent($$result, "Footer", $$Footer, { "lang": lang })}`, addAttribute(i.search.placeholder, "placeholder"), addAttribute(i.links.home, "href"), addAttribute(i.nav.home, "data-title"), i.nav.home, addAttribute(i.links.features, "href"), addAttribute(i.nav.features, "data-title"), addAttribute(i.nav.product, "data-desc"), i.nav.features, i.nav.product, addAttribute(i.links.exercises, "href"), addAttribute(i.nav.exercises, "data-title"), addAttribute(i.nav.product, "data-desc"), i.nav.exercises, i.nav.product, addAttribute(i.links.reviews, "href"), addAttribute(i.nav.reviews, "data-title"), addAttribute(i.nav.product, "data-desc"), i.nav.reviews, i.nav.product, addAttribute(i.links.pricing, "href"), addAttribute(i.nav.pricing, "data-title"), addAttribute(i.nav.pricing, "data-desc"), i.nav.pricing, addAttribute(i.links.changelog, "href"), addAttribute(i.nav.changelog, "data-title"), addAttribute(i.nav.product, "data-desc"), i.nav.changelog, i.nav.product, addAttribute(i.links.blog, "href"), addAttribute(i.nav.blog, "data-title"), addAttribute(i.nav.articles, "data-desc"), i.nav.blog, i.nav.articles, addAttribute(i.links.guides, "href"), addAttribute(i.nav.guides, "data-title"), addAttribute(i.nav.articles, "data-desc"), i.nav.guides, i.nav.articles, addAttribute(i.links.faq, "href"), addAttribute(i.nav.faq, "data-title"), addAttribute(i.nav.help, "data-desc"), i.nav.faq, i.nav.help, addAttribute(i.links.support, "href"), addAttribute(i.nav.support, "data-title"), addAttribute(i.nav.help, "data-desc"), i.nav.support, i.nav.help, addAttribute(i.links.about, "href"), addAttribute(i.nav.about, "data-title"), addAttribute(i.nav.help, "data-desc"), i.nav.about, i.nav.help, blogPosts.map((p) => renderTemplate`<a${addAttribute(p.url, "href")}${addAttribute(p.title, "data-title")}${addAttribute(p.desc + (p.tag ? " " + p.tag : ""), "data-desc")}><div class="result-title">${p.title}</div><div class="result-desc">${p.desc}</div></a>`), guidePosts.map((p) => renderTemplate`<a${addAttribute(p.url, "href")}${addAttribute(p.title, "data-title")}${addAttribute(p.desc + (p.tag ? " " + p.tag : ""), "data-desc")}><div class="result-title">${p.title}</div><div class="result-desc">${p.desc}</div></a>`), i.search.noResults, i.exitIntent.title, i.exitIntent.text, addAttribute(i.links.appStore, "href"), i.exitIntent.btn, i.exitIntent.dismiss, i.newsletter.articleTitle, i.newsletter.articleText, addAttribute(lang, "data-lang"), addAttribute(i.newsletter.success, "data-success"), addAttribute(i.newsletter.error, "data-error"), addAttribute(i.newsletter.duplicate, "data-duplicate"), addAttribute(i.newsletter.placeholder, "placeholder"), i.newsletter.button, i.cookie.text, addAttribute(i.links.privacy, "href"), i.footer.privacy, i.cookie.reject, i.cookie.accept);
}, "/Users/alexandre/Documents/aivancepro-website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, getCollection as g, renderEntry as r, t };
