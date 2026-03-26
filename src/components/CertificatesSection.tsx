import styles from './CertificatesSection.module.css';

export default function CertificatesSection() {
  const certificates = [
    {
      title: 'Mastering Data Structures and Algorithms',
      issuer: 'Board Infinity',
      link: 'https://drive.google.com/file/d/1yUdT4Is0YDaFQka7LbyWyExqvUKLHSTf/view?usp=drive_link'
    },
    {
      title: 'Computer Networking',
      issuer: 'Google-Coursera',
      link: 'https://drive.google.com/file/d/1afj6Jp_okQMK7OFFWTNMm2XC5mNaw8Rj/view?usp=drive_link'
    },
    {
      title: 'Hardware and Operating Systems',
      issuer: 'IBM-Coursera',
      link: 'https://drive.google.com/file/d/15f6r2mgYnNbntgaMY7IquJcnRJL2L2C8/view?usp=drive_link'
    }
  ];

  return (
    <section id="certificates" className={styles.certificatesSection}>
      <div className="container">
        <h2 className="section-title">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" className={styles.titleIcon}>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
          <span className="gradient-text">Certificates</span>
        </h2>
        
        <div className={styles.certGrid}>
          {certificates.map((cert, idx) => (
            <div key={idx} className={styles.certCard}>
              <div className={styles.certBody}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
              </div>
              
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.viewBtn}
              >
                View Certificate
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
