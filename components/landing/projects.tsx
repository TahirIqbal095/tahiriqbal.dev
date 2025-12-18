import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";
import ProjectCard from "../projects/project-card";
import { projects } from "@/config/projects";

export const Projects = () => {
  return (
    <Card className="relative w-full h-full">
      <CardHeader>
        <CardTitle className="mb-1">Projects</CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </CardContent>
    </Card>
  );
};
