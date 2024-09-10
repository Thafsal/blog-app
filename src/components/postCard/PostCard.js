import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  // Dummy data
  const dummyPost = {
    img: "/dummy-image.png", 
    createdAt: "Mon, 01 Jan 2024 12:00:00 GMT",
    title: "Sample Blog Post Title",
    body: "This is a short description for the sample blog post. It's here just to show some placeholder text.",
    slug: "sample-blog-post"
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {dummyPost.img && (
          <div className={styles.imgContainer}>
            <Image src="/about.png" alt="Sample image" fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>{dummyPost.createdAt.slice(5, 16)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{dummyPost.title}</h1>
        <p className={styles.desc}>{dummyPost.body}</p>
        <Link className={styles.link} href={`/blog/${dummyPost.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
