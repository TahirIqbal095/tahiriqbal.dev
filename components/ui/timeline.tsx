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
          absolute top-0 bottom-0 left-2 w-0.5 bg-linear-to-b from-primary/90 to-transparent
        "
      />

      {experience.map((item, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <div className="flex gap-2 relative">
            <div className="size-3 bg-primary rounded-full absolute -left-3 top-0" />
            <div className="ml-3">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.period} | {item.location} | {item.workType}
              </p>
              <p className="mt-2 text-base">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export { Timeline };
