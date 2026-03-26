import styles from './SkillsSection.module.css';

export default function SkillsSection() {
  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'C++', icon: '⚙️' },
    { name: 'Java', icon: '☕' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Next.js', icon: '▲' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Power BI', icon: '📊' },
    { name: 'Data Analysis', icon: '📈' },
    { name: 'Git/GitHub', icon: '🐙' }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <h2 className="section-title">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" className={styles.titleIcon}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          <span className="gradient-text">Skills</span>
        </h2>
        
        <div className={styles.skillsGrid}>
          {skills.map((skill, idx) => (
            <div key={idx} className={styles.skillCard}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
