import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c7c48b63-d088-45bb-acc6-72adc3661e96",
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="container reveal">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have an exciting project or career opportunity? Let's build something amazing together.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-info-title">Let's connect</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="contact-methods">
            <div className="contact-method-card glass glass-interactive">
              <div className="contact-method-icon">
                <Mail size={20} />
              </div>
              <div>
                <div className="contact-method-label">Email me at</div>
                <div className="contact-method-value">pawarambrushi5102@gmail.com</div>
              </div>
            </div>

            <div className="contact-method-card glass glass-interactive">
              <div className="contact-method-icon">
                <Phone size={20} />
              </div>
              <div>
                <div className="contact-method-label">Call or WhatsApp</div>
                <div className="contact-method-value">+91-9049983659</div>
              </div>
            </div>

            <div className="contact-method-card glass glass-interactive">
              <div className="contact-method-icon">
                <MapPin size={20} />
              </div>
              <div>
                <div className="contact-method-label">Location</div>
                <div className="contact-method-value">Pune, India</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form glass">
          {isSubmitted && (
            <div className="submit-success">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              rows={5}
              className="form-input"
              style={{ resize: 'vertical' }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
            style={{ alignSelf: 'flex-start' }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
