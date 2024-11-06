import SearchIcon from "../icons/search-icon";
import BellIcon from "../icons/bell-icon";

export default function Navbar() {
  return (
    <nav className="sticky flex h-24 items-center justify-between bg-white px-10 py-5 shadow">
      <div>Dashboard</div>
      <div className="flex items-center gap-8">
        <form className="relative">
          <div className="relative">
            <SearchIcon classNames="absolute left-3 top-0 bottom-0 my-auto" />
            <input
              type="search"
              placeholder="Search..."
              className="p-4 py-2 pl-10 rounded-full overflow-hidden bg-kBackgroundWhite placeholder:text-kBlack shadow"
            />
          </div>
        </form>
        <div className="relative">
          <BellIcon classNames="w-7 h-7" />
        </div>
      </div>
    </nav>
  );
}
