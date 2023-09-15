import ArtsyText from '../components/ArtsyText'
import CloseX from '../components/CloseX'
import Chatbox from '../components/chatbox'
import styles from './MobileDrawer.module.css'

function MobileDrawer() {
    return (
        <main className={styles.navContainer}>
            <nav className={styles.navTitle}> <ArtsyText /> <CloseX /> </nav>
            <nav className={styles.navItems}>
                <ul>
                    <li>Home</li>
                    <li>Auctions</li>
                    <li>Marketplace</li>
                    <li>Drops</li>
                </ul>
            </nav>
            <Chatbox />
        </main>
    )
}

export default MobileDrawer;
