import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Auto Complete Engine',
      description: 'An efficient word suggestion system in C++ providing real-time autocomplete results based on user input prefixes. Implemented a Trie data structure for fast operations.',
      tech: ['C++', 'Data Structures', 'Trie'],
      link: 'https://github.com/Vijayendrasai02', // GitHub mapping
      isDashboard: false
    },
    {
      title: 'String Compression Tool',
      description: 'A dedicated C++ application to compress text data using the Run-Length Encoding (RLE) technique. It significantly improves memory efficiency and reduces overall storage size.',
      tech: ['C++', 'Algorithms', 'RLE'],
      link: 'https://github.com/Vijayendrasai02', // GitHub mapping
      isDashboard: false
    },
    {
      title: 'Bank Customer Analytics Dashboard',
      description: 'An interactive analytical dashboard using Power BI to analyze customer demographics, account balances, and behavioral patterns. Identified high-value customers through trends.',
      tech: ['Power BI', 'DAX', 'Data Modeling'],
      link: 'https://www.linkedin.com/in/vijayendrasai02/', // LinkedIn mapping
      isDashboard: true
    }
  ];

  const renderProjectAnimation = (idx: number) => {
    switch(idx) {
      case 0:
        return (
          <div className={styles.animContainer}>
             <div className={styles.trieNetwork}>
               <div className={`${styles.node} ${styles.n1}`}></div>
               <div className={`${styles.path} ${styles.p1}`}></div>
               <div className={`${styles.node} ${styles.n2}`}></div>
               <div className={`${styles.path} ${styles.p2}`}></div>
               <div className={`${styles.node} ${styles.n3}`}></div>
             </div>
             <div className={styles.typing}>A-U-T-O</div>
          </div>
        );
      case 1:
        return (
          <div className={styles.animContainer}>
             <div className={styles.compressWrapper}>
               <div className={styles.letterBlock}>A</div>
               <div className={styles.letterBlock}>A</div>
               <div className={styles.letterBlock}>A</div>
             </div>
             <div className={styles.resultBlock}>3A</div>
          </div>
        );
      case 2:
        return (
          <div className={styles.animContainer}>
             <div className={styles.chartWrapper}>
               <div className={styles.chartBar}></div>
               <div className={styles.chartBar}></div>
               <div className={styles.chartBar}></div>
               <div className={styles.chartBar}></div>
             </div>
          </div>
        );
      default:
        return (
          <div className={styles.placeholderBg}>
            <span>{projects[idx].tech[0]}</span>
          </div>
        );
    }
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <h2 className="section-title">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" className={styles.titleIcon}>
            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z" />
          </svg>
          <span className="gradient-text">Projects Made</span>
        </h2>
        
        <div className={styles.projectGrid}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.projectCard}>
              <div className={styles.projectImage}>
                {/* Placeholder Image using CSS pattern or text */}
                {renderProjectAnimation(idx)}
              </div>
              
              <div className={styles.projectTitleBand}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
              
              <div className={styles.projectBody}>
                <p className={styles.projectDesc}>{project.description}</p>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.codeBtn}
                >
                  {project.isDashboard ? 'View on LinkedIn' : 'Code </>'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
