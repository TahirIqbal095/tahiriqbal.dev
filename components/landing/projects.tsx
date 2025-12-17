import { Card, CardHeader, CardLabel, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";

export const Projects = () => {
  return (
    <Card className="relative p-2 w-full h-full">
      <CardHeader>
        <CardTitle className="mb-1">Projects</CardTitle>
        <Separator />
      </CardHeader>
    </Card>
  );
};
