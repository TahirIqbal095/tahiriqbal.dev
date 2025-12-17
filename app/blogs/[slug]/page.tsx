import { allMyBlogs, MyBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () => {
  return allMyBlogs.map((post) => ({ slug: post._raw.flattenedPath }));
};

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params;
  const post = allMyBlogs.find((post) => post._raw.flattenedPath === slug);
  if (!post) {
    notFound();
  }
  return { title: post.title, description: post.description };
};

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = allMyBlogs.find(
    (blog: MyBlogs) => blog._raw.flattenedPath === slug
  );

  if (!blog) {
    return notFound();
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <p>{blog.date}</p>
      <p>{blog.tags.join(", ")}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.body.raw }} />
    </div>
  );
}
