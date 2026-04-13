import React from 'react';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    desc: 'Built with Vite, ensuring instant loading and a smooth development experience.'
  },
  {
    icon: '💎',
    title: 'Premium Design',
    desc: 'Modern craft with glassmorphism, fluid animations, and a sleek dark theme.'
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    desc: 'Looks stunning on every device, from mobile phones to high-res desktops.'
  }
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Core Features</h2>
        <div className="features-grid">
          {features.map((f, idx) => (
            <div key={idx} className="feature-card glass">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', marginTop: '0.5rem' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
