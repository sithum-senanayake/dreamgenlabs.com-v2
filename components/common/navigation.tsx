"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="relative z-20 flex items-center justify-between
      px-4 py-4 sm:px-6 sm:py-5 md:px-10 md:py-6 lg:px-16 lg:py-8 xl:px-20 xl:py-10 2xl:px-24 2xl:py-12"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center select-none">
          <Image src="/logo_icon.png" alt="DreamGen Labs Logo" width={32} height={32} className="w-10 h-10" priority />
        </div>
        <div>
          <h1 className="text-blue-400 font-bold text-lg select-none">DreamGen Labs</h1>
          <p className="text-white text-xs select-none">&lt;Dream Beyond Limits&gt;</p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`transition-colors font-bold ${
                isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
