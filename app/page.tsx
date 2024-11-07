import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";

export default function Home() {
  return (
    <main className="flex h-screen w-full">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-10">content</div>
      </div>
    </main>
  );
}
