import { Link } from "next-view-transitions";
import BlogCard from "../blogs/blog-card";
import { Button } from "../ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { allMyBlogs } from "contentlayer/generated";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "../ui/separator";

export const Blogs = () => {
  return (
    <Card className="relative flex h-full w-full flex-col gap-3 overflow-hidden pb-4">
      <CardHeader>
        <CardTitle className="mb-1">Blogs</CardTitle>
        <Separator />
      </CardHeader>
      <div className="border-border/50 relative my-2 ml-4 space-y-6 border-l border-dashed pl-6">
        {allMyBlogs.slice(0, 3).map((blog, idx) => {
          return (
            <BlogCard key={idx} {...blog} slug={blog._raw.flattenedPath} />
          );
        })}
      </div>

      <div className="from-card absolute right-0 bottom-0 left-0 h-30 bg-linear-to-t to-transparent" />
      <CardFooter className="absolute bottom-2 left-1/2 z-10 -translate-x-1/2 text-center">
        <Button asChild size={"sm"}>
          <Link href="/blogs">
            <span className="text-xs">View All</span>
            <ArrowUpRight size={12} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
