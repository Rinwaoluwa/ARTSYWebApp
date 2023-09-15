import styles from './SectionBids.module.css'

function SectionBids() {
    return (
        <section className={styles.bids}>
            <figure>
                <img src="/sectionbids.jpg" alt="Maybe an Image of people" />
                <figcaption className={styles.bidsContent}>
                    <h3 className={styles.mainText}>MONALISA REDEFINED IN STYLE.</h3>
                    <h4 className={styles.subText}>Start on : 08:00 GTS . Monday</h4>
                    <p className={styles.subParagraph}>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND 
                        AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.
                    </p>
                    <div className={styles.bidBtns}>
                        <button className={styles['bidBtn--1']}>See more</button>
                        <button className={styles['bidBtn--2']}>Set a reminder</button>
                    </div>
                </figcaption>
            </figure>
        </section>
    )
}

export default SectionBids;
