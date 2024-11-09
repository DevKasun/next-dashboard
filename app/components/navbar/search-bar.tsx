import SearchIcon from "../icons/search-icon";

export default function SearchBar() {
  return (
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
  );
}
