import { ReactNode } from "react";
import { cn } from "../../util";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

export default function MaxWidthWrapper({
  className,
  children,
}: MaxWidthWrapperProps) {
  return (
    <div className={cn("h-screen max-w-screen-2xl mx-auto", className)}>
      {children}
    </div>
  );
}
