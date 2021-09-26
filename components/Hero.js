import React from 'react';
import Image from 'next/image';
import logo from '../public/images/frederick-medina-z0PQ3Ee3m5Y-unsplash.jpg';
import styles from '../styles/Hero.module.css';

const Hero = () => {
    return(
       <div>
         <div className={styles.wrapperHero}>
            <Image 
                src={logo} 
                alt="logo of the company"
                layout="responsive"
                className={styles.image}
            />
         </div>
       </div>
    );
};

export default Hero;