import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'Services', target: 'services' },
    { label: 'Projects', target: 'projects' },
    { label: 'Experience', target: 'experience' },
    { label: 'Contact', target: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of navItems) {
        const el = document.getElementById(item.target);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.target);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    setIsOpen(false);
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar glass">
      <a href="#home" className="nav-brand" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
        DevFlow
      </a>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.target}>
            <a
              className={`nav-link ${activeSection === item.target ? 'active' : ''}`}
              onClick={() => handleNavClick(item.target)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-controls">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </nav>
  );
}
