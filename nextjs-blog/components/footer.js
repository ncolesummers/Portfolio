import styles from './layout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <FontAwesomeIcon className={styles.faIcon} icon={faInstagram} />
            <FontAwesomeIcon className={styles.faIcon} icon={faGithubSquare} />
            <FontAwesomeIcon className={styles.faIcon} icon={faTwitterSquare} />
        </footer>
    )
}