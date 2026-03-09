import { visit } from 'unist-util-visit';

export function rehypeSanitizeRawHtml() {
  return (tree) => {
    visit(tree, 'raw', (node, index, parent) => {
      parent.children.splice(index, 1);
      return index;
    });
  };
}
