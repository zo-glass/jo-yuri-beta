import styles from './Header.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineMinus } from "react-icons/ai"

const pages = [
    {
        title: 'Profile',
        url: '/profile',
    },
    {
        title: 'Store',
        url: '/store'
    },
    {
        title: 'Music',
        url: '/discography/1',
    },
    {
        title: 'Gallery',
        url: '/gallery/1',
    },
    {
        title: 'Video',
        url: '/video',
    },
    {
        title: 'News',
        url: '/news',
    },
    {
        title: 'Schedule',
        url: '/schedule',
    }
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

export default function Header() {
    
    const [clicked, setClicked] = useState(false);

    function click() {
        setClicked(!clicked);
        clicked ? document.body.style.overflow = 'unset' : document.body.style.overflow = 'hidden'
    }

    return (
        <>
            <aside className={clicked ? `${styles.aHeader} ${styles.activate}` : styles.aHeader}>
                <div className={styles.bg} onClick={click} />
                <div className={styles.barMobile}>
                    <nav className={styles.menuMobile}>
                        <ul className={styles.menuItemsMobile}>
                            { pages?.map( (i, index) => {
                                return (
                                    <Link href={i.url} key={index} className={styles.menuItemMobile} onClick={click}>
                                        {i.title}
                                    </Link>
                                )
                            })}
                        </ul>
                    </nav>
                    <nav className={styles.menuMobile}>
                        <ul className={styles.menuItemsMobile2}>
                            {links?.map( (i, index) => {
                                return (
                                    <li className={styles.menuItemMobile} key={index}>
                                        <a href={i.url} target='_blank' rel='noopener noreferrer'>
                                            {i.type}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </aside>
            <header className={styles.header}>
                <section className={styles.bar}>
                    <div className={styles.barItems}>
                        <nav className={styles.menuIcon}>
                            <div onClick={click}>
                                {clicked ? (<AiOutlineMinus className={styles.logo} />) : (<AiOutlineMenu className={styles.logo} />)}
                            </div>
                        </nav>
                        <div className={styles.logo}>
                            <Link href='/'>
                                <span>Jo Yuri</span>
                            </Link>
                        </div>
                        <nav className={styles.menu}>
                            <ul className={styles.menuItems}>
                                { pages?.map( (i, index) => {
                                    return (
                                        <Link href={i.url} key={index} className={styles.menuItem}>
                                            {i.title}
                                        </Link>
                                    )
                                })}
                            </ul>
                        </nav>
                        <nav className={styles.menu}>
                            <ul className={styles.menuItems}>
                                {links?.map( (i, index) => {
                                    return (
                                        <li className={styles.menuItem} key={index}>
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
            </header>
        </>
    )
}