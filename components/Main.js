import React from 'react';
import Image from 'next/image';
import firstPhoto from '../public/images/amasaitotwo.jpeg';
import secondPhoto from '../public/images/amasaitotres.jpeg';
import thirdPhoto from '../public/images/amasaitocinco.jpeg';
import fourthPhoto from '../public/images/amasaitoseis.jpeg';
import fifthPhoto from '../public/images/amasaitocuatro.jpeg';
import sixPhoto from '../public/images/amasaitoone.jpeg';
import styles from '../styles/Main.module.css';

const Main = () => {
    return(
        <div>
            <h1 className={styles.mainTitle}>Nuestros Amasaitos</h1>
           <div className={styles.wrapper}>
                <Image 
                    src={firstPhoto}
                    alt="first photo"
                    layout="responsive"
                    className={styles.photo}
                />
                <Image 
                    src={secondPhoto}
                    alt="first photo"
                    layout="responsive"
                    className={styles.photo}
                />
           </div>
            <div className={styles.wrapper}>
                <Image 
                    src={thirdPhoto}
                    alt="first photo"
                    layout="responsive"
                    className={styles.photo}
                />
                <Image 
                    src={sixPhoto}
                    alt="first photo"
                    layout="responsive"
                    className={styles.photo}
                />
            </div>
           <div className={styles.wrapper}>
                <Image 
                    src={fourthPhoto}
                    alt="first photo"
                    layout="responsive"
                    className={styles.photo}
                />
                <Image 
                    src={fifthPhoto}
                    alt="first photo"
                    layout="responsive"
                    className={styles.photo}
                />
           </div>
           <div>
               <button>Ver Menu Completo</button>
           </div>
        </div>
    );
}

export default Main;