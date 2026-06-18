import { Code2, Layout, Database, Zap, Shield, Smartphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code2 size={24} />,
      title: 'Full-Stack Web Dev',
      description: 'Building robust, modern, and scalable web applications utilizing React, TypeScript, and modern backend stacks.',
    },
    {
      icon: <Layout size={24} />,
      title: 'UI/UX Design',
      description: 'Crafting pixel-perfect interface mockups and interactive user experiences designed to convert visitors.',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile-First Design',
      description: 'Ensuring responsive page layouts and optimized mobile viewports that function perfectly on all screen sizes.',
    },
    {
      icon: <Database size={24} />,
      title: 'Database & API Design',
      description: 'Architecting fast, secure RESTful and GraphQL APIs with well-structured SQL/NoSQL databases.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Tuning',
      description: 'Optimizing load speeds, bundle sizes, Core Web Vitals, and accessibility (a11y) standards.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Security & DevOps',
      description: 'Setting up robust auth protocols (JWT, OAuth), Docker containers, CI/CD pipelines, and cloud hosting.',
    },
  ];

  return (
    <section id="services" className="container reveal">
      <div className="section-header">
        <h2 className="section-title">What I Offer</h2>
        <p className="section-subtitle">
          Highly specialized design and engineering services customized to solve real business challenges.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card glass glass-interactive">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
