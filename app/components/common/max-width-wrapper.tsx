import { ReactNode } from "react";
import { cx } from "../../lib/util";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

export default function MaxWidthWrapper({
  className,
  children,
}: MaxWidthWrapperProps) {
  return (
    <div className={cx("h-screen max-w-screen-2xl mx-auto", className)}>
      {children}
    </div>
  );
}
