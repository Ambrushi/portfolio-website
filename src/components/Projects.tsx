import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import filmynationImg from '../assets/filmynation.png';
import gullakgoImg from '../assets/gullakgo.png';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'GullakGo: Goal-Based Saving & Expense Tracker',
      category: 'fullstack',
      description: 'A comprehensive goal-based financial web application featuring automated expense tracking, target saving management, and AI financial guidance.',
      tags: ['React.js', 'Node.js', 'Financial AI', 'MongoDB'],
      image: gullakgoImg,
      liveLink: 'https://github.com/Ambrushi/Gullakgo---A-Goal-Based-saving-web-application-',
      githubLink: 'https://github.com/Ambrushi/Gullakgo---A-Goal-Based-saving-web-application-',
    },
    {
      title: 'Filmynation: AI Movie Recommendation Platform',
      category: 'fullstack',
      description: 'An AI-driven movie recommendation application that intelligently suggests personalized movies, trending titles, and tailored cinema picks.',
      tags: ['React.js', 'AI Integration', 'Tailwind / CSS', 'Vercel'],
      image: filmynationImg,
      liveLink: 'https://filmynation.vercel.app/',
      githubLink: 'https://github.com/Ambrushi/AI---Based-Movie-Recommendation-Website',
    },
    {
      title: 'ConstroPlus: Construction Platform',
      category: 'fullstack',
      description: 'Designed a "floating" tender notification logic that triggers push notifications via Expo to all relevant contractors, managing real-time data sync.',
      tags: ['Node.js', 'TypeScript', 'MongoDB', 'Expo'],
      image: project1,
      liveLink: 'https://github.com/Ambrushi',
      githubLink: 'https://github.com/Ambrushi',
    },
    {
      title: 'SkillLink: Home Services Platform',
      category: 'fullstack',
      description: 'Developed a full-stack web application with role-based access control and booking administration, linking consumers with service providers.',
      tags: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
      image: project2,
      liveLink: 'https://github.com/Ambrushi',
      githubLink: 'https://github.com/Ambrushi',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="container reveal">
      <div className="section-header">
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">
          A collection of digital solutions built with precision, optimization, and premium user experiences.
        </p>
      </div>

      <div className="filter-tabs">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
          onClick={() => setFilter('frontend')}
        >
          Frontend
        </button>
        <button 
          className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
          onClick={() => setFilter('fullstack')}
        >
          Fullstack
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card glass">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem' }}>
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '0.5rem' }}>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
