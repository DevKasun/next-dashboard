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
      <menu>
        <li></li>
      </menu>
    </aside>
  );
}
