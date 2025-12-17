import { Link } from "next-view-transitions";
import BlogCard from "../blogs/blog-card";
import { Button } from "../ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { allMyBlogs } from "contentlayer/generated";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "../ui/separator";

export const Blogs = () => {
  return (
    <Card className="relative overflow-hidden w-full h-full pb-4 flex flex-col gap-3">
      <CardHeader>
        <CardTitle className="mb-1">Blogs</CardTitle>
        <Separator />
      </CardHeader>
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

      <div className="absolute bottom-0 left-0 right-0 h-30 bg-linear-to-t from-card to-transparent" />
      <CardFooter className="absolute left-1/2 -translate-x-1/2 bottom-2 text-center z-10">
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
