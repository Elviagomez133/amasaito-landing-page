import React from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles  from '../styles/Footer.module.css';

const Footer = () => {
    return(
        <div className={styles.containerFooter}>
            <div className={styles.content}>
                <div className={styles.firstColumn}>
                    <h1 className={styles.columnTitle}> Realiza tus pedidos!</h1>
                    <ul className={styles.innerColumn}>
                        <li className={styles.social}>
                            <Link href="https://web.whatsapp.com/send?phone=+573002251225&text=">
                                <a>
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </a>
                            </Link>
                        </li>
                        <li className={styles.social}>
                            <Link href="https://www.instagram.com/amasaito.bog/">
                                <a>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </Link>
                        </li>
                        <li className={styles.social}>
                            <Link href="https://www.rappi.com.co/">
                                <a>Rappi</a>
                            </Link>
                        </li>
                    </ul>
                </div> 
                <div >
                    <h1 className={styles.columnTitle}>Nuestro Horario</h1>
                    <ul className={styles.innerSecondColumn}>
                        <li>Lun - Sa: 8am a 6pm</li>
                        <li>Domingo: 8am a 12pm</li>
                    </ul>
                </div>
                <div className={styles.thirdColumn}>
                    <h1 className={styles.columnTitle}>Visitanos!</h1>
                    <div className={styles.adresse}>
                        <p>Calle 128 #45a - 13</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;