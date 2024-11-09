import Notifications from "./notifications";
import SearchBar from "./search-bar";
import UserProfile from "./user-profile";

export default function Navbar() {
  return (
    <nav className="sticky flex h-24 items-center justify-between bg-white px-10 py-5 shadow">
      <div className="text-3xl">Dashboard</div>
      <div className="flex items-center gap-4">
        <SearchBar />
        <Notifications />
        <UserProfile />
      </div>
    </nav>
  );
}
