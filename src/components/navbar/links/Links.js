import styles from "./links.module.css";
import { NavLinks } from "./navLinks/NavLinks";

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
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blogs",
    path: "/blog",
  },
];

const Links = () => {
  return <div className={styles.links}>
    {link_name.map((link) => (
      <NavLinks item={link} key={link.title} />
    ))}
  </div>;
};

export default Links;
