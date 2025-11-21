"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib";

interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  indicatorProps?: React.ComponentProps<typeof ProgressPrimitive.Indicator>;
}

function Progress({
  className,
  value,
  indicatorProps,
  ...props
}: ProgressProps) {
  const {
    className: indicatorClassName,
    style: indicatorStyle,
    ...restIndicatorProps
  } = indicatorProps || {};

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "bg-primary h-full w-full flex-1 transition-all",
          indicatorClassName,
        )}
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
          ...indicatorStyle,
        }}
        {...restIndicatorProps}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
