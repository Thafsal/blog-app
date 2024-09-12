import Image from "next/image"
import styles from "./PostCard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    day: 'numeric',  
    month: 'short',
    year: 'numeric' 
  });
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img}/>
        </div>}
        <span className={styles.date}>{formattedDate}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard