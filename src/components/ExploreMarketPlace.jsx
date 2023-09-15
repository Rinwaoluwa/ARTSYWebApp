import styles from './ExploreMarketPlace.module.css'

function ExploreMarketPlace() {
    return (
        <section className={styles.marketPlace}>
            <div className={styles.explore}>
                <h3>Explore Marketplace</h3>
                <button>&rarr;</button>
            </div>

            <div className={styles.auction}>
                <h3>See Auctions</h3>
                <button>&rarr;</button>
            </div>
        </section>
    )
}

export default ExploreMarketPlace
