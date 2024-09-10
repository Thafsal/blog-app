import Image from "next/image";
import styles from "./singlePostPage.module.css";

const singlePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about.png" fill alt="logo" className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Sample Blog Post</h1>
        <div className={styles.detail}>
          <Image src="/noavatar.png" width={30} height={30} alt="avatar-logo" className={styles.avatar} />
          <div className={styles.detailText}>
            <span className={styles.detailTittle}>Author</span>
            <span className={styles.Date}>Date</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTittle}>Published</span>
            <span className={styles.Date}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
};

export default singlePostPage;
