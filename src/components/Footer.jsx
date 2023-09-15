import styles from './Footer.module.css';
import LocationIcon from './LocationIcon';
import MailIcon from './MailIcon';

function Footer() {
    return (
        <section className={styles.footer}>
            <h1>NewsLetter</h1>
            <h3>SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS</h3>
            <form action="" method="post">
                <input type="email" placeholder="ENTER YOUR EMAIL HERE" id="" name='email'/>
                <button>SUBMT</button>
            </form>

            <ul>
                <h4>REACH US</h4>
                <li> <MailIcon /><a href="mailto:peterodejobi9@gmail.com">peterodejobi9@gmail.com</a></li>
                <li> <LocationIcon /> Lagos, Nigeria.</li>
            </ul>
        </section>
    )
}

export default Footer
