"use client";
import { BriefcaseBusiness, Calendar } from "lucide-react";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";

type TimelineProps = {
  title: string;
  period: string;
  location: string;
  workType: string;
  description: string;
};

const ExperienceTimeline = ({
  experience,
}: {
  experience: TimelineProps[];
}) => {
  return (
    <div className="border-primary/30 relative my-4 ml-2 space-y-8 border-l border-dashed pl-6">
      {experience.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="relative"
        >
          {/* Custom Dot */}
          <span className="bg-background ring-primary/20 absolute top-0 -left-8 flex size-4 items-center justify-center rounded-full ring-2">
            <span className="bg-primary size-2 rounded-full" />
          </span>

          <div className="flex flex-col gap-1.5">
            {/* Header: Title & WorkType */}
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm leading-none font-medium tracking-tight md:text-[15px]">
                {item.title}
              </h3>
              <Badge
                variant="default"
                className="text-muted-foreground h-5 px-1.5 py-0 text-[10px] font-normal"
              >
                {item.workType}
              </Badge>
            </div>

            {/* Meta: Period & Location */}
            <div className="text-muted-foreground/80 flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1">
                <Calendar className="size-3" />
                {item.period}
              </span>
              <span className="flex items-center gap-1">
                <BriefcaseBusiness className="size-3" />
                {item.location}
              </span>
            </div>

            {/* Description */}
            <p className="text-foreground text-xs leading-relaxed md:text-sm">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
export { ExperienceTimeline };
