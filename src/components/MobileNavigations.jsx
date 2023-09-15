import styles from './MobileNavigations.module.css'

import ArtsyText from './ArtsyText'
import Cart from './Cart'
import HamburgerMenu from './HamburgerMenu'
import Search from './Search'

function MobileNavigations() {
    return (
        <nav className={styles.navigations}>
            <HamburgerMenu />
            <ArtsyText />

            <div>
                <Search />
                <Cart />
            </div>
        </nav>
    )
}

export default MobileNavigations
