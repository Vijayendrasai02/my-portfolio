"use client";
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link href="#hero">Vijayendra.</Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="#hero" className={styles.navLink}>Home</Link></li>
          <li><Link href="#about" className={styles.navLink}>About</Link></li>
          <li><Link href="#skills" className={styles.navLink}>Skills</Link></li>
          <li><Link href="#projects" className={styles.navLink}>Projects</Link></li>
          <li><Link href="#certificates" className={styles.navLink}>Certificates</Link></li>
          <li><Link href="#contact" className={styles.navLink}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
