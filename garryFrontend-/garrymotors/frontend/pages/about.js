import React from 'react';
import Image from 'next/image';
import styles from '@/styles/About.module.css';

const about = () => {
  return (
    <div className={styles.container}>
      <Image src="/abouthead.png" alt="About Head" className={styles.imgi} width={800} height={400} />
      <Image src="/about.png" alt="About" className={styles.img} width={800} height={400} />
      <Image src="/abouts.png" alt="Abouts" className={styles.imgs} width={800} height={400} />
    </div>
  );
}

export default about;
