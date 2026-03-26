import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <h2 className="section-title">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" className={styles.titleIcon}>
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          <span className="gradient-text">About Me</span>
        </h2>
        
        <div className={styles.aboutContent}>
          <h3 className={styles.greeting}>I&apos;m Vijayendra Sai</h3>
          <h4 className={styles.role}>Aspiring Software Engineer & Data Enthusiast</h4>
          
          <div className={styles.bio}>
            <p>
              Hi there! I&apos;ve always been fascinated by how complex problems can be 
              broken down and solved logically. That curiosity naturally led me to programming, 
              where I discovered my core passion for Data Structures and Algorithms.
            </p>
            <p>
              Currently, I&apos;m pursuing my Bachelor of Technology in Computer Science
              at Lovely Professional University. My journey is driven by a constant desire to learn how 
              things work under the hood. Whether it&apos;s optimizing a search tree or designing a data model, 
              I enjoy the challenge of building elegant systems.
            </p>
            <p>
              I recently completed an intensive DSA training program at Board Infinity, sharpening
              my problem-solving skills in C++. When I&apos;m not studying or coding, 
              I like to explore data analytics and create insightful dashboards.
            </p>
          </div>

          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email : </span>
              <span className={styles.contactValue}>vijayendrasai04@gmail.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Phone : </span>
              <span className={styles.contactValue}>+91 8688201231</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Place : </span>
              <span className={styles.contactValue}>India</span>
            </div>
          </div>

          <div className={styles.resumeContainer}>
            <a href="https://docs.google.com/document/d/1dn3axRNha3o3xzGqTclAYajs2Gmivrks/edit?usp=drive_link&ouid=112033650759794486462&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
              Resume 
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
