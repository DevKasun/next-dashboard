"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
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
      <menu className=" py-6">
        <li>
          <Link
            href="/dashboard"
            className={`block px-8 py-4 ${pathname === "/dashboard" ? "bg-kBlue font-bold" : ""}`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/expenses"
            className={`block px-8 py-4 ${pathname === "/dashboard/expenses" ? "bg-kBlue font-bold" : ""}`}
          >
            Expenses
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/reports"
            className={`block px-8 py-4 ${pathname === "/dashboard/reports" ? "bg-kBlue font-bold" : ""}`}
          >
            Reports
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/settings"
            className={`block px-8 py-4 ${pathname === "/dashboard/settings" ? "bg-kBlue font-bold" : ""}`}
          >
            Settings
          </Link>
        </li>
      </menu>
    </aside>
  );
}
