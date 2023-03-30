import styles from './MainContainer.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function MainContainer({ children }){
    return (
        <>
            <Header/>
            <div className={styles.page}>
                {children}
            </div>
            <Footer/>
        </>
    )
}
