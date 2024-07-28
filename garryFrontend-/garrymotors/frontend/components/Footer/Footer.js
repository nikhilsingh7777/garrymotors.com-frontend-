import React from 'react'
import styles from "./Footer.module.css"
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.item}>
            <h2 className={styles.h2}>Our Address</h2>
            <div className={styles.options}>
              <img className={styles.imgs} src="https://img.icons8.com/?size=100&id=7880&format=png&color=22ABC3" alt="location" />
              <span className={styles.spans}>2712 Auburn Way N, Auburn, WA 98002, USA</span>
            </div>
          </div>
          <div className={styles.item}>
            <h2 className={styles.h2}>Contact Us Today</h2>
            <div className={styles.options}>
              <img className={styles.imgs} src="https://img.icons8.com/?size=100&id=9730&format=png&color=22ABC3" alt="phone" />
              <a href="tel:+91 7839219042"><span className={styles.spans}>+91 78392 19042</span></a>
            </div>
            <div className={styles.options}>
              <img className={styles.imgs} src="https://img.icons8.com/?size=100&id=53435&format=png&color=22ABC3" alt="email" />
              <a href="mailto: garrymotors72@gmail.com"><span className={styles.spans}>garrymotors72@gmail.com</span></a>
            </div>
          </div>
          <div className={styles.item}>
            <h2 className={styles.h2}>Store Hours</h2>
            <span className={styles.span}>All days: 9am - 8pm</span>
          </div>
          <div className={styles.item}>
            <h2 className={styles.h2}>Community</h2>
            <span className={styles.span}>Privacy Policy</span>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.bottom}>
          <div className={styles.left}>
            <Link href='/'>
              <img src="logo.png" alt="" width={140} className={styles.invimg} />
            </Link>
            <span className={styles.lspan}>© Garry Motors International Ltd. 2024</span>
          </div>
          <div className={styles.right}>
            <div className={styles.social}>
              <img className={styles.img} src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="insta" />
              <img className={styles.img} src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="twitter" />
              <img className={styles.img} src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="facebook" />
              <img className={styles.img} src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="linkedin" />
            </div>
            <div className={styles.link}>
              <img src="https://cdn-icons-png.flaticon.com/128/10867/10867773.png" alt="language" height={24} />
              <span>English</span>
            </div>
            <div className={styles.link}>
              <img src="https://img.icons8.com/?size=100&id=85843&format=png&color=22ABC3" alt="coin" height={17} />
              <span>USD</span>
            </div>
          </div>
        </div>
        <hr className={styles.hrx} />
        <div className={styles.bottomest}>
          <span>Website by:</span>
          <Link className={styles.link} href="https://linkedin.com/in/ayushdangwal" target="_blank"><span className={styles.dev}>Ayush Dangwal</span></Link>
          <Link className={styles.link} href="https://linkedin.com/in/nikhilsinghiitr" target="_blank"><span className={styles.dev}>Nikhil Singh</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer