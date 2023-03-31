import styles from './Footer.module.css';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';

const pages = [
    {
        title: 'About',
        url: '/about',
    },
    {
        title: 'Privacy Policy',
        url: '/privacy',
    },
    {
        title: 'Terms & Conditions',
        url: '/terms',
    },
]

const links = [
    {
        type: <FaYoutube />,
        url: 'https://www.youtube.com/c/JOYURI_offcl/',
    },
    {
        type: <FaTiktok />,
        url: 'https://www.tiktok.com/@joyuri.offcl',
    },
    {
        type: <FaTwitter />,
        url: 'https://mobile.twitter.com/joyuri_offcl/',
    },
    {
        type: <FaInstagram />,
        url: 'https://www.instagram.com/zo__glasss/',
    },
    {
        type: <FaFacebook />,
        url: 'https://web.facebook.com/JOYURI.offcl/',
    },
]

function Footer() {
    return(
        <>
            <footer className={styles.footer}>
                <section className={styles.bar}>
                    <div className={styles.barItems}>
                        <nav className={styles.menu}>
                            <ul className={styles.menuItems}>
                                <li>
                                    <a href="https://wake-one.com/" target='_blank' rel='noopener noreferrer'>
                                        <p className={styles.menuItem}>Wake One Entertainment</p>
                                    </a>
                                </li>
                                { pages?.map( (i, index) => {
                                    return (
                                        <li className={styles.menuItem} key={index}>
                                            <Link href={i.url}>
                                                {i.title}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                        <nav className={styles.menu}>
                            <ul className={styles.menuItems2}>
                                {links?.map( (i, index) => {
                                    return (
                                        <li className={styles.menuItem2} key={index}>
                                            <a href={i.url} target='_blank' rel='noopener noreferrer'>
                                                {i.type}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer