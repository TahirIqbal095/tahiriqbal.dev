import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";
import ProjectCard from "../projects/project-card";
import { projects } from "@/config/projects";

export const Projects = () => {
  return (
    <Card className="relative w-full h-full flex flex-col">
      <CardHeader>
        <CardTitle className="mb-1">Projects</CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 mt-4">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </CardContent>
    </Card>
  );
};
