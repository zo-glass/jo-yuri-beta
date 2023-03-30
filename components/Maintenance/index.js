import styles from './Maintenance.module.css'

export default function Maintenance() {
  return (
      <>
      <div>
            <h2 className={styles.title}>We'll be back.</h2>
            <p className={styles.text}>The requested page is not available.</p>
            <p className={styles.text}>We are performing scheduled maintenance. Please try again <span className={styles.orange}>later</span>.</p>
      </div>
      </>
  )  
}
