import styles from './Beta.module.css'

export default function Beta() {
  return (
      <>
      <div>
            <h2 className={styles.title}>COMING SOON</h2>
            <p className={styles.text}>Our website is under construction.</p>
            <p className={styles.text}>To see beta version, <a href='https://beta.zo.glass/' target="noreferrer" className={styles.link}>clik here</a>.</p>
      </div>
      </>
  )
}
