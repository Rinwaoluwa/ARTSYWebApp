/* eslint-disable react/prop-types */
import styles from './FeaturedProducts.module.css';

const featuredProductsImages = ['/Frame58.png','/Frame59.png', '/Frame60.png'];

function FeaturedProducts () {
    return (
        <section className={styles.featuredProducts}> 
                <h2 className={styles.text}>Featured products</h2>
                <ul>
                    {featuredProductsImages.map((img, i) => {
                        return <FeaturedProduct key={i} img={img} />
                    })}
                </ul>
            </section>
    )
}

function FeaturedProduct({ img }) {
    return (
        <li>
            <figure>
                <img src={img} alt="Product Image" className={styles.featuredImg} />
                <figcaption>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit 
                    ut aliquam, purus sit amet luctus venenatis, lectus magna 
                    fringilla urna, porttitor rhoncus dolor pur
                    </p>
                    <div className={styles.featuredCreators}>
                        <Creators />
                    </div>
                </figcaption>
            </figure>
        </li>
    )
}


function Creators() {
    return (
        <>
        <div className={styles.creators}>
            <img src="/picocito.JPG" alt="Creator Image" />
            <img src="/picocito.JPG" alt="Creator Image" />
            <img src="/picocito.JPG" alt="Creator Image" />
        </div>
        <h4 className={styles.numCreators}>64 major creators</h4>
        </>
    )
}

export default FeaturedProducts;