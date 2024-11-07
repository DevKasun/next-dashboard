import SearchIcon from "../icons/search-icon";
import BellIcon from "../icons/bell-icon";
import ChevronDownIcon from "../icons/chevron-down";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky flex h-24 items-center justify-between bg-white px-10 py-5 shadow">
      <div className="text-2xl">Dashboard</div>
      <div className="flex items-center gap-4">
        <form className="relative">
          <div className="relative">
            <SearchIcon classNames="absolute left-3 top-0 bottom-0 my-auto" />
            <input
              type="search"
              placeholder="Search..."
              className="min-w-72 p-4 py-2 pl-10 rounded-full overflow-hidden bg-kBackgroundWhite placeholder:text-kBlacke outline-none transition-all duration-300 ease-in-out"
            />
          </div>
        </form>
        <div className="relative w-10 h-10 bg-kBackgroundWhite grid place-items-center rounded-full">
          <BellIcon classNames="w-7 h-7" />
        </div>
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
      </div>
    </nav>
  );
}
