import React, { useState } from 'react';
import { emailService } from '../../services/emailService';
import './Footer.css';

const Footer = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailService.sendContactEmail(contactForm);
      
      setSubmitStatus('success');
      setContactForm({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <button 
            className="footer-link" 
            onClick={() => setShowAbout(!showAbout)}
          >
            About
          </button>
          <button 
            className="footer-link" 
            onClick={() => setShowContact(!showContact)}
          >
            Contact Us
          </button>
        </div>
        
        <div className="footer-text">
          <p>&copy; 2024 Daily Topics. Made with ❤️ for teachers everywhere.</p>
        </div>
      </div>

      {/* About Modal */}
      {showAbout && (
        <div className="modal-overlay" onClick={() => setShowAbout(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>About Daily Topics</h2>
              <button 
                className="modal-close" 
                onClick={() => setShowAbout(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <h3>What We Do</h3>
              <p>
                Daily Topics is a free educational tool designed specifically for elementary school teachers 
                and students. We provide daily educational content including:
              </p>
              <ul>
                <li>📚 Educational paragraphs at 4th-grade reading level</li>
                <li>🎥 Educational videos related to each topic</li>
                <li>✏️ Grammar exercises with intentional mistakes for students to find</li>
                <li>🔍 Answer keys for teachers</li>
              </ul>
              
              <h3>Why We Built This</h3>
              <p>
                My wife was using a similar educational tool last year that her school was paying for. 
                When the school stopped funding it, she lost access to this valuable resource that helped 
                her create engaging daily lessons for her students.
              </p>
              <p>
                Rather than see teachers and students lose access to quality educational content, 
                I decided to build a free version that anyone can use. This tool is designed to help 
                teachers save time while providing students with engaging, age-appropriate educational content.
              </p>
              
              <h3>Our Mission</h3>
              <p>
                To provide free, high-quality educational resources that help teachers create engaging 
                lessons and support student learning. We believe that quality education should be 
                accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContact && (
        <div className="modal-overlay" onClick={() => setShowContact(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Contact Us</h2>
              <button 
                className="modal-close" 
                onClick={() => setShowContact(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>
                Have questions, suggestions, or feedback? We'd love to hear from you! 
                Send us a message and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us what you think..."
                    rows="5"
                  ></textarea>
                </div>
                
                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="success-message">
                    ✅ Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="error-message">
                    ❌ Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer; 