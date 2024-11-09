import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="flex-none w-72 bg-white border-r">
      <div className="flex h-24 items-center justify-center">
        <Link href="/">
          <div className="max-w-48">
            <Image
              className="rounded"
              src="/next-dashboard-logo.png"
              width={786}
              height={165}
              alt="Site Logo"
            />
          </div>
        </Link>
      </div>
      <menu className="px-8 py-10">
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard">Expenses</Link>
        </li>
        <li>
          <Link href="/dashboard">Reports</Link>
        </li>
        <li>
          <Link href="/dashboard">Settings</Link>
        </li>
      </menu>
    </aside>
  );
}
