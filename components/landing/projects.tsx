import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";

export const Projects = () => {
  return (
    <Card className="relative w-full h-full">
      <CardHeader>
        <CardTitle className="mb-1">Projects</CardTitle>
        <Separator />
      </CardHeader>
    </Card>
  );
};
