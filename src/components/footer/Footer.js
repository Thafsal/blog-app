import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>THOUGHTSPIRE</div>
      <div className={styles.copyright}>© 2024 Thoughtspire. All rights reserved.</div>
    </div>
  )
}

export default Footer