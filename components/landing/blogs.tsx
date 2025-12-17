import { Link } from "next-view-transitions";
import BlogCard from "../blogs/blog-card";
import { Button } from "../ui/button";
import { Card, CardFooter } from "../ui/card";
import { allMyBlogs } from "contentlayer/generated";
import { ArrowUpRight } from "lucide-react";

export const Blogs = () => {
  return (
    <Card className="relative w-full h-full flex flex-col gap-3">
      {allMyBlogs.map((blog, idx) => {
        return (
          <BlogCard
            key={idx}
            landing={true}
            {...blog}
            slug={blog._raw.flattenedPath}
          />
        );
      })}

      <CardFooter className="text-center">
        <Button asChild>
          <Link href="/blogs">
            <span>View All</span>
            <ArrowUpRight size={18} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
