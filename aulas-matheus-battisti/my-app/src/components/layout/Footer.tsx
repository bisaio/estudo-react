import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
    const FacebookIcon = FaFacebook as any;
    const InstagramIcon = FaInstagram as any;
    const LinkedinIcon = FaLinkedin as any;
    return (
        <footer>
            <ul className={styles.social_list}>
                <li><FacebookIcon /></li>
                <li><InstagramIcon /></li>
                <li><LinkedinIcon /></li>
            </ul>
        </footer>
    )
}