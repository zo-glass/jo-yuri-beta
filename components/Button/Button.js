import styles from './Button.module.css';
import Link from 'next/link';

function Button({to, link, click, text}) {
    return (
        <>
            <div className={styles.container}>
                {to ?
                    <Link href={to}>
                        <button className={styles.btn}>{text}</button>
                    </Link>
                : link ?
                    <a href={link}>
                        <button className={styles.btn}>{text}</button>
                    </a>
                : click ?
                    <button className={styles.btn} onClick={click}>
                        {text}
                    </button>
                : <button className={styles.btn}>{text}</button>
                }
            </div>
        </>
    )
};

export default Button;