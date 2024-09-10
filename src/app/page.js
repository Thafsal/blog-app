import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Welcome to <span className={styles.highlight}>THOUGHT</span>SPIRE</h1>
        <p className={styles.desc}>
          Ignite your mind with inspiring content, insightful thoughts, and
          diverse ideas from across the globe. Dive into a world where knowledge
          meets creativity.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Get Started</button>
          <button className={styles.button}>Explore</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandsImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/flying.gif" width={450} height={450} alt="logo"  className={styles.img}/>
      </div>
    </div>
  );
}
