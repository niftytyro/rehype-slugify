import { visit } from "unist-util-visit";
import { heading } from "hast-util-heading";
import { hasProperty } from "hast-util-has-property";
import { toString } from "hast-util-to-string";

export default function rehypeSlugify({ slugify } = {}) {
  if (typeof slugify !== "function") {
    throw Error("Expected function to slugify.");
  }

  return (tree, file) => {
    visit(tree, "element", (node) => {
      if (heading(node) && !!node.properties && !hasProperty(node, "id")) {
        node.properties.id = slugify(toString(node));
      }
    });
  };
}
