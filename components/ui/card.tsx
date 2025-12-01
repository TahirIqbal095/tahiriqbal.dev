import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const Card = ({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      data-slot="card"
      className={cn(
        "bg-card p-4 rounded-lg shadow-md border text-sm",
        className
      )}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-header"
      className={cn("text-foreground", className)}
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props }: React.ComponentProps<"h3">) => (
  <h3 data-slot="card-title" className={cn("", className)} {...props} />
);

const CardLabel = ({ className, ...props }: React.ComponentProps<"p">) => (
  <p
    data-slot="card-label"
    className={cn("text-muted-foreground", className)}
    {...props}
  />
);

const CardContent = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div data-slot="card-content" className={cn("mt-2", className)} {...props} />
);

const CardFooter = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div data-slot="card-footer" className={cn("", className)} {...props} />
);

export { Card, CardHeader, CardTitle, CardLabel, CardContent, CardFooter };
