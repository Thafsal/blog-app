"use client";

import Link from "next/link";
import styles from "./NavLinks.module.css";
import { usePathname } from "next/navigation";

export const NavLinks = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${pathname === item.path && styles.active}`}
    >
      {item.title}
    </Link>
  );
};
