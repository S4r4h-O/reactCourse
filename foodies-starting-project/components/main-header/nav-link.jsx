"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import cssClasses from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      className={
        path.startsWith(href)
          ? `${cssClasses.link} ${cssClasses.active}`
          : cssClasses.link
      }
      href={href}
    >
      {children}
    </Link>
  );
}
