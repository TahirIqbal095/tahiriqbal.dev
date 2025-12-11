import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardLabel,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { Timeline } from "./ui/timeline";
import { experienceConfig } from "@/config/experience";

function ExperienceAndEdu() {
  return (
    <Card className="p-2 h-full">
      <CardHeader>
        <div className="flex flex-col mb-1 gap-3 sm:flex-row sm:items-end sm:justify-between">
          <CardTitle>{experienceConfig.title}</CardTitle>
          <CardLabel className="text-xs text-muted-foreground/70">
            {experienceConfig.label}
          </CardLabel>
        </div>
      </CardHeader>
      <Separator className="mb-6" />
      <CardContent className="px-0 pb-0">
        <Timeline experience={experienceConfig.experiences} />
      </CardContent>
      <CardFooter className="mt-6 text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground/80 text-center">
        {experienceConfig.footer}
      </CardFooter>
    </Card>
  );
}

export { ExperienceAndEdu };
