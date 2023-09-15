import styles from './Billboard.module.css';

function Billboard() {
    return (
        <section className={styles.billboard}>
            <ul className={styles.text}>
                <li>Editorials</li>
                <li>Fashion</li>
                <li>Lifestyle</li>
            </ul>

            <h2 className={styles.cta}>TOP CREATORS OF THE WEEK</h2>
            <p className={styles.paragraph}>“Everything always looked better in black and white. Everything always as 
                if it were the first time; there’s always more people in a black and white 
                photograph. It just makes it seem that there were more people at a gig, more 
                people at a football match, than with colour photography. Everything looks more 
                exciting.”– Jack Lowden
            </p>
            
            <div className={styles['text--2']}>
                <h1>CIRCA</h1>
                <h1> <s> 1985 </s> </h1>
            </div>

            <img src="/billboard-1.png" alt="Maybe Models" className={styles.image}/>
        </section>
    )
}

export default Billboard;
