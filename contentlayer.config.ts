import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

const blogs = defineDocumentType(() => ({
  name: "MyBlogs",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
      required: true,
    },
  },
}));

const prettyCodeOptions = {
  theme: "github-dark", // Shiki theme to use
  onVisitLine(node: any) {
    // Ensure blank lines are preserved
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("line--highlighted");
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className.push("word--highlighted");
  },
};

export default makeSource({
  contentDirPath: "data/blogs",
  documentTypes: [blogs],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, prettyCodeOptions],
      [
        rehypeAutolinkHeadings,
        {
          properties: { className: ["anchor"] },
        },
      ],
    ],
  },
});
