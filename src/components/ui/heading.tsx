import { cn, type BaseProps } from "@/lib/utils";
import "react";

export function H1({ children, className }: BaseProps): React.ReactNode {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
