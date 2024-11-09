import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="flex h-screen w-full">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-10">{children}</div>
      </div>
    </main>
  );
}
