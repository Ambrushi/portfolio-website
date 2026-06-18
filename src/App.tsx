import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    // Check elements immediately on mount in case they're already in viewport
    const checkReveals = () => {
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', checkReveals);
    // Initial run
    checkReveals();

    return () => window.removeEventListener('scroll', checkReveals);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Dynamic Background Effects */}
      <div className="background-grid"></div>
      <div className="ambient-light"></div>
      <div className="ambient-light-2"></div>

      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main>
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer container">
        <div className="footer-socials">
          <a href="https://github.com/Ambrushi" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://linkedin.com/in/ambrushi-pawar-47ba8322b" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Ambrushi Pawar. All rights reserved.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
          Built with React, TypeScript & Vanilla CSS
        </p>
      </footer>

      {/* Back to top button */}
      <button 
        onClick={scrollToTop} 
        className="btn btn-primary float-animation" 
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          padding: '0.75rem',
          borderRadius: '50%',
          zIndex: 90,
          boxShadow: 'var(--shadow-glow)'
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;
