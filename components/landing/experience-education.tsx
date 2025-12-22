import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardLabel,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { experienceConfig } from "@/config/experience";

function ExperienceAndEdu() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="mb-1 flex flex-row items-end justify-between gap-3">
          <CardTitle>{experienceConfig.title}</CardTitle>
          <CardLabel className="text-muted-foreground/70 text-xs">
            {experienceConfig.label}
          </CardLabel>
        </div>
      </CardHeader>
      <Separator className="mb-6" />
      <CardContent className="px-0 pb-0">
        <ExperienceTimeline experience={experienceConfig.experiences} />
      </CardContent>
      <CardFooter className="text-muted-foreground/80 mt-6 text-center text-[0.65rem] tracking-[0.32em] uppercase">
        {experienceConfig.footer}
      </CardFooter>
    </Card>
  );
}

export { ExperienceAndEdu };
