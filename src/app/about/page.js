import Image from "next/image"
import styles from "./about.module.css"


const page = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>about</h1>
      </div>
      <div>
      <Image  src="/sun.gif" width={450} height={450} alt="logo" />
      </div>
    </div>
  )
}

export default page