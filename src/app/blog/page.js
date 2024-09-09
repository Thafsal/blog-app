import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";

const blogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post} key={post.id}>
        <PostCard />
      </div>
    </div>
  );
};

export default blogPost;
