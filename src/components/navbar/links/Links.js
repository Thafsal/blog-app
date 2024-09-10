"use client";
import { useState } from "react";
import styles from "./links.module.css";
import { NavLinks } from "./navLinks/NavLinks";
import Image from "next/image";

const link_name = [
  {
    title: "Home",
    path: "/",
  },

  {
    title: "About",
    path: "/about",
  },

  {
    title: "Blogs",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const session = true;
const isAdmin = true;

const Links = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {link_name.map((link) => (
          <NavLinks item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout_btn}>Logout</button>
          </>
        ) : (
          <NavLinks item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        alt="menu"
        width={25}
        height={25}
        className={styles.menutoggle}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {link_name.map((link) => (
            <NavLinks item={link} key={link.title} />
          ))}
          {session ? (
            <>
              {isAdmin && (
                <NavLinks item={{ title: "Admin", path: "/admin" }} />
              )}
              <button className={styles.logout_btn}>Logout</button>
            </>
          ) : (
            <NavLinks item={{ title: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
