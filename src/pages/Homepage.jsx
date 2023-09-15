/* eslint-disable react/prop-types */
import styles from './Homepage.module.css'
import MobileNavigations from '../components/MobileNavigations'
import FeaturedProducts from '../components/FeaturedProducts';
import SectionBids from '../components/SectionBids';
import ExploreMarketPlace from '../components/ExploreMarketPlace';
import Billboard from '../components/Billboard';
import Footer from '../components/Footer';
import Intro from '../components/intro';

function Homepage() {
    return (
        <main>
            <MobileNavigations />

            <Intro />

            <section className={styles.artImages}>
                <span className={`${styles.blurPaint} ${styles['blurPaint--1']}`}></span>
                <figure className={styles['images']}>
                    <img src="/mobile/mobile-1.png" alt="Maybe a Person on a Chair" />
                    <img src="/mobile/mobile-2.png" alt="Maybe Red Flowers" />
                    <img src="/mobile/mobile-3.png" alt="Maybe a perosn with a flower" />
                </figure>
                <span className={`${styles.blurPaint} ${styles['blurPaint--2']}`}></span>
                <span className={`${styles.blurPaint} ${styles['blurPaint--3']}`}></span>
            </section>

            <FeaturedProducts />

            <SectionBids />

            <ExploreMarketPlace />

            <Billboard />

            <Footer />
        </main>
    )
}


export default Homepage;
