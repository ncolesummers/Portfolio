import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="https://instagram.com/ncolesummers" >
                <FontAwesomeIcon className={styles.faIcon} icon={faInstagram} />
            </a>
            <a href="https://github.com/ncolesummers" >
                <FontAwesomeIcon className={styles.faIcon} icon={faGithubSquare} />
            </a>
            <a href="https://twitter.com/ncolesummers" >
                <FontAwesomeIcon className={styles.faIcon} icon={faTwitterSquare} />
            </a>
        </footer>
    )
}