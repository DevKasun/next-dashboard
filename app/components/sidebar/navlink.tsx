import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function NavLink({ href, icon, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center gap-2 px-8 py-4 ${
          isActive ? "text-kBlue font-medium" : "font-normal"
        }`}
      >
        <span>{icon}</span>
        {label}
      </Link>
    </li>
  );
}
