import { defineDocumentType, makeSource } from "contentlayer/source-files";

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

export default makeSource({
  contentDirPath: "data/blogs",
  documentTypes: [blogs],
});
