import Link from "next/link";
import Links from "./links/Links";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <Image className={styles.rotate} src="/hexagon.png" width={30} height={30} alt="logo" />
          <h4>THOUGHTSPIRE</h4>
        </Link>
      </div>
      <div>
        <Links /> 
      </div>
    </div>
  );
};

export default Navbar;
