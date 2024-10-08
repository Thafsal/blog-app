"use client";

import styles from "./NavLinks.module.css"
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;