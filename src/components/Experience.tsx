export default function Experience() {
  const experiences = [
    {
      date: '06/2025 - Present',
      role: 'Backend Developer',
      company: 'Bugbattlers Technology Pvt Ltd, Pune',
      description: 'Developed and maintained backend systems and RESTful APIs using Node.js, TypeScript and Java Spring Boot. Implemented JWT authorization and optimized databases.',
    },
    {
      date: '2024',
      role: 'PG Diploma in Advanced Computing',
      company: 'CDAC, Pune',
      description: 'Acquired hands-on expertise in advanced computing, backend software design patterns, enterprise database programming, and data structure architectures.',
    },
    {
      date: 'Graduated 2024',
      role: 'Bachelor of Engineering (Sinhgad College)',
      company: 'Sinhgad College of Engineering, Pune',
      description: 'Built a strong foundation in computer engineering principles. Graduated with an academic cumulative CGPA score of 7.91.',
    },
  ];

  return (
    <section id="experience" className="container reveal">
      <div className="section-header">
        <h2 className="section-title">Career Journey</h2>
        <p className="section-subtitle">
          My professional timeline detailing full-time roles and key freelancing milestones.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card glass glass-interactive">
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-role">{exp.role}</h3>
              <div className="timeline-company">{exp.company}</div>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
