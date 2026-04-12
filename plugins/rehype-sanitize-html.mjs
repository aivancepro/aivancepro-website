import { visit } from 'unist-util-visit';

const DANGEROUS_TAGS = /<\s*(script|iframe|object|embed|form|input|button)\b/i;

export function rehypeSanitizeRawHtml() {
  return (tree) => {
    visit(tree, 'raw', (node, index, parent) => {
      // Only remove dangerous HTML (scripts, iframes, forms) — keep tables, divs, spans
      if (DANGEROUS_TAGS.test(node.value)) {
        parent.children.splice(index, 1);
        return index;
      }
    });
  };
}
