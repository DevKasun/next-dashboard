import ChevronDownIcon from "../icons/chevron-down";
import Image from "next/image";

export default function UserProfile() {
  return (
    <div className="relative px-1 h-10 bg-kBackgroundWhite flex items-center justify-center rounded-full gap-2">
      <div className="grid place-items-center w-8 h-8 rounded-full bg-white">
        <Image
          src="/avatar.svg"
          alt="profile"
          width={24}
          height={24}
          className="rounded-full"
        />
      </div>
      <div>
        <p className="truncate w-18 text-base">John Doe</p>
      </div>
      <div className="mr-2">
        <ChevronDownIcon classNames="w-4 h-4" />
      </div>
    </div>
  );
}
