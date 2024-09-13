import Link from "next/link"
import styles from "./Navbar.module.css"
import Links from "./links/Links"
import { auth } from "@/lib/auth";
import Image from "next/image";

const Navbar = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <Image className={styles.rotate} src="/hexagon.png" width={30} height={30} alt="logo" />
          <h4>THOUGHTSPIRE</h4>
        </Link>
      </div>
      <div>
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar
