import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithubSquare, faTwitterSquare, faDev, faSnapchatSquare } from '@fortawesome/free-brands-svg-icons';

export default function Footer(home) {

    
    return (
        <footer className={styles.footer}>
            <a href="https://instagram.com/ncolesummers" >
                <FontAwesomeIcon className={styles.faIcon} size="4x" icon={faInstagram} />
            </a>
            <a href='https://www.snapchat.com/add/ncolesummers?share_id=RjEwMDlCRDYtRjQyOS00ODcyLTk4NkMtRjlBOTU0MDU4N0JC&locale=en_US'>
                <FontAwesomeIcon className={styles.faIcon} size="4x" icon={faSnapchatSquare} />
            </a>
            <a href="https://github.com/ncolesummers" >
                <FontAwesomeIcon className={styles.faIcon} size="4x" icon={faGithubSquare} />
            </a>
            <a href="https://twitter.com/ncolesummers" >
                <FontAwesomeIcon className={styles.faIcon} size="4x" icon={faTwitterSquare} />
            </a>
            <a href="https://dev.to/ncolesummers">
                <FontAwesomeIcon className={styles.faIcon} size="4x" icon={faDev} />
            </a>
        </footer>
    )
}