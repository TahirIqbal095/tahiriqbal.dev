import { MapPin } from "lucide-react";
import { Badge } from "./badge";

type TimelineProps = {
  title: string;
  period: string;
  location: string;
  workType: string;
  description: string;
};

const Timeline = ({ experience }: { experience: TimelineProps[] }) => {
  return (
    <div className="relative pl-4">
      <div
        className="
          absolute top-0 bottom-0 left-2 w-0.5 bg-linear-to-b from-primary/80 to-transparent
        "
      />

      {experience.map((item, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <div className="flex gap-2 relative">
            <div className="size-3 bg-primary/90 rounded-full absolute -left-3 top-0" />
            <div className="ml-3">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <Badge>{item.workType}</Badge>
              </div>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{item.period}</span>
                <span className="flex items-center gap-px">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </span>
              </p>
              <p className="mt-2 text-sm">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export { Timeline };
