"use client";
import { useState } from 'react';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText('vijayendrasai04@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          // Add your Web3Forms Access Key right below!
          access_key: "738fae81-aeb5-45d2-a0fd-d7a38038f7a9", 
          name: data.name,
          email: data.email,
          message: data.message,
          subject: `Portfolio Contact from ${data.name}`
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.contact}>
          <h2 className="section-title" style={{ width: '100%', textAlign: 'center' }}>
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className={styles.contactDesc} style={{ margin: '2rem auto', maxWidth: '600px' }}>
            I&apos;m currently open to new opportunities. Whether you have a question, 
            a project idea, or just want to say hi, feel free to use the form below or copy my email!
          </p>

          <div className={styles.contactInfoCard}>
            <div className={styles.infoRow}>
              <p><strong>Email:</strong> vijayendrasai04@gmail.com</p>
              <button onClick={copyEmail} className={styles.copyBtn} disabled={copied}>
                {copied ? 'Copied! ✓' : 'Copy'}
              </button>
            </div>
            <div className={styles.infoRow}>
              <p><strong>Phone:</strong> +91 8688201231</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input type="text" name="name" placeholder="Your Name" required className={styles.inputField} disabled={status === 'submitting'} />
              <input type="email" name="email" placeholder="Your Email" required className={styles.inputField} disabled={status === 'submitting'} />
            </div>
            <textarea name="message" placeholder="Your Message" required className={styles.textArea} rows={5} disabled={status === 'submitting'}></textarea>
            
            <button type="submit" className={styles.submitBtn} disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : (
                <>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  Send Message
                </>
              )}
            </button>
            
            {status === 'success' && <p style={{ color: '#10b981', fontWeight: 600, marginTop: '1rem' }}>Message sent successfully! I will get back to you soon.</p>}
            {status === 'error' && <p style={{ color: '#ef4444', fontWeight: 600, marginTop: '1rem' }}>Wait! You need to add an Access Key in ContactSection.tsx first.</p>}
          </form>
        </div>
        
        <footer className={styles.footer}>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/vijayendrasai02/" target="_blank" rel="noreferrer" className={styles.socialLink}>GitHub & LinkedIn</a>
            <a href="mailto:vijayendrasai04@gmail.com" className={styles.socialLink}>Email</a>
          </div>
          <div className={styles.copyright}>
            Designed & Built by Vijayendra Sai &copy; {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </section>
  );
}
