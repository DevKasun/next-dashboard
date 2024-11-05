import SearchIcon from "../icons/search-icon";

export default function Navbar() {
  return (
    <nav className="sticky flex h-24 items-center justify-between bg-white px-10 py-5 shadow">
      <div>Dashboard</div>
      <div className="flex items-center gap-8">
        <form className="relative">
          <div className="relative">
            <SearchIcon classNames="absolute l-4" />
            <input
              type="search"
              placeholder="Search..."
              className="p-4 py-2 pl-10 rounded-full overflow-hidden"
            />
          </div>
        </form>
      </div>
    </nav>
  );
}
