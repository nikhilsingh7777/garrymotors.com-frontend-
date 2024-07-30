import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    if (window.innerWidth <= 550) {
      setMenuOpen(!menuOpen);
    }
  };

  const closeMenu = () => {
    if (window.innerWidth <= 550) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.topc}>
        <div className={styles.tcont}>
          <div className={styles.topdiv}>
            <img src="https://img.icons8.com/?size=100&id=9659&format=png&color=22ABC3" alt="phone" width={18} />
            <p>Call Us 24/7! <span className={styles.topopt}><a href="tel:+1 (253) 886-4485">+1(253)886-4485 </a></span></p>
          </div>
          <div className={styles.topdiv}>
            <img src="https://img.icons8.com/?size=100&id=12580&format=png&color=22ABC3" alt="email" width={18} />
            <p>Email <span className={styles.topopt}><a href="mailto:Garrymotors.LLC@gmail.com"></a>Garrymotors.LLC@gmail.com</span></p>
          </div>
          <div className={styles.topdiv}>
            <img src="https://img.icons8.com/?size=100&id=19100&format=png&color=22ABC3" alt="time" width={18} />
            <p>Opening Hours <span className={styles.topopt}>All days: 10am - 6pm</span></p>
          </div>
        </div>
      </div>
      <hr className={styles.thr} />

      <div className={`${scrolled ? styles.navbars : styles.navbar}`}>
        <div className={styles.container}>
          <Link href="/" className={`${styles.link} ${styles.mainhead}`}>
            <img src="logo.png" alt="logo" width={180} /> 
            <div className={styles.logo}>Garry Motors.LLC</div>
          </Link>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <div className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
            <div className={styles.closeIcon} onClick={closeMenu}>&times;</div>
            <Link href="/" className={styles.link}><span className={`${styles.option} ${router.pathname === '/' ? styles.activeLink : ''}`} onClick={closeMenu}>Home</span></Link>
            <Link href="/cars" className={styles.link}><span className={`${styles.option} ${router.pathname === '/cars' ? styles.activeLink : ''}`} onClick={closeMenu}>Garage</span></Link>
            <Link href="/about" className={styles.link}><span className={`${styles.option} ${router.pathname === '/about' ? styles.activeLink : ''}`} onClick={closeMenu}>About Us</span></Link>
            <Link href="/Contact" className={styles.link}><span className={`${styles.option} ${router.pathname === '/contact' ? styles.activeLink : ''}`} onClick={closeMenu}>Contact Us</span></Link>
            <Link href="/Login" className={styles.link}><span className={`${styles.option} ${router.pathname === '/homeadmin' ? styles.activeLink : ''}`} onClick={closeMenu}> <img src="https://img.icons8.com/?size=35&id=114317&format=png&color=000000" alt="" />  </span></Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
