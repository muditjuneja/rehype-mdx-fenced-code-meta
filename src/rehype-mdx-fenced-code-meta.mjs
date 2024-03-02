import * as Utils from 'unist-util-visit';

export default function rehypeAddCodeMetaData() {
  return (tree) => {
    Utils.visit(tree, 'element', (node) => {
      if (node.tagName === 'code') {
        try {
          if (node.data && node.data.meta) {
            node.properties.metaData = node.data.meta;
          }
        } catch (E) {
          console.log("Error :: ", E);
        }
      }
    });
  };
}
