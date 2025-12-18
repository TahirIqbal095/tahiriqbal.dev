"use client";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "./badge";
import { motion } from "motion/react";

type TimelineProps = {
  title: string;
  period: string;
  location: string;
  workType: string;
  description: string;
};

const Timeline = ({ experience }: { experience: TimelineProps[] }) => {
  return (
    <div className="relative pl-6 ml-2 border-l border-dashed border-primary/30 space-y-8 my-4">
      {experience.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="relative"
        >
          {/* Custom Dot */}
          <span className="absolute -left-[32px] top-0 flex size-4 items-center justify-center rounded-full bg-background ring-2 ring-primary/20">
            <span className="size-2 rounded-full bg-primary" />
          </span>

          <div className="flex flex-col gap-1.5">
            {/* Header: Title & WorkType */}
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium text-sm md:text-[15px] leading-none tracking-tight">
                {item.title}
              </h3>
              <Badge
                variant="default"
                className="text-[10px] px-1.5 py-0 h-5 font-normal text-muted-foreground"
              >
                {item.workType}
              </Badge>
            </div>

            {/* Meta: Period & Location */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground/80">
              <span className="flex items-center gap-1">
                <Calendar className="size-3" />
                {item.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="size-3" />
                {item.location}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
export { Timeline };
