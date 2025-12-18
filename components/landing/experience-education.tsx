import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardLabel,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Timeline } from "@/components/ui/timeline";
import { experienceConfig } from "@/config/experience";

function ExperienceAndEdu() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex mb-1 gap-3 flex-row items-end justify-between">
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
