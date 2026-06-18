import { useState, useEffect } from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import avatarImg from '../assets/avatar.png';

export default function Hero() {
  const roles = [
    'Backend Developer',
    'Node.js & TypeScript Expert',
    'Java Spring Boot Developer',
    'API Design Specialist',
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    let timer: number;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else {
      timer = window.setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentRole) {
      timer = window.setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-wrapper container">
      <div className="hero-content">
        <div className="hero-left">
          <div className="badge">
            <Briefcase size={14} /> Open to Backend Developer Roles
          </div>
          <h1 className="hero-title">
            Hi, I'm Ambrushi Pawar <br />
            <span>Building Scalable Backend Systems</span>
          </h1>
          <div className="hero-subtitle">
            I'm a <span style={{ color: 'var(--color-secondary)', borderRight: '2px solid var(--text-primary)', paddingRight: '4px' }}>{displayText}</span>
          </div>
          <p className="hero-description">
            Backend Developer specializing in Node.js, TypeScript, and Java Spring Boot. Passionate about building robust RESTful APIs, managing multi-user ecosystems, and optimizing database performance.
          </p>
          <div className="hero-actions">
            <button onClick={() => handleScrollTo('contact')} className="btn btn-primary">
              Let's Talk <ArrowRight size={16} />
            </button>
            <button onClick={() => handleScrollTo('projects')} className="btn btn-secondary">
              View Projects
            </button>
          </div>
        </div>
        <div className="hero-right">
          <div className="profile-container float-animation">
            <img src={avatarImg} alt="Developer Avatar" />
          </div>
        </div>
      </div>
    </section>
  );
}
