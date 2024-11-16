import { cx } from "@/app/lib/util";

interface iconProps {
  classNames?: string;
  iconColor?: string;
}

export default function ChevronDownIcon({ classNames, iconColor }: iconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cx("w-5 h-5", iconColor || "text-kBlack", classNames)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
