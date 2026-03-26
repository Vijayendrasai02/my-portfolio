import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Intensive DSA in C++',
      organization: 'Board Infinity',
      date: "Jun '25 - Jul '25",
      description: 'Completed extensive training in Data Structures and Algorithms focusing on problem-solving, logical thinking, and core DSA implementations. I developed an intuitive understanding of algorithm optimization, time-space complexity, and OOP paradigms through practical coding tasks and mini projects.',
      tech: ['C++', 'OOP', 'Data Structures', 'Algorithms']
    },
    {
      title: 'Adobe India Hackathon',
      organization: 'Participant',
      date: "Aug '25",
      description: 'Qualified and actively participated in Round 1 (Online Coding & MCQ) of the Adobe India Hackathon. The experience heavily tested my competitive programming, analytical, and rapid problem-solving skills against top developers across the country.',
      tech: ['Competitive Programming', 'Problem Solving']
    },
    {
      title: 'Certifications',
      organization: 'Google & IBM (Coursera)',
      date: "Sep '24",
      description: 'Earned foundational certifications in Computer Networking (Google) and Hardware & Operating Systems (IBM), building a strong base in systems architecture and network protocols.',
      tech: ['Networking', 'Operating Systems']
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience & Training</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div>
                    <h3 className={styles.title}>{exp.title}</h3>
                    <div className={styles.organization}>{exp.organization}</div>
                  </div>
                  <span className={styles.date}>{exp.date}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.techList}>
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className={styles.techItem}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
