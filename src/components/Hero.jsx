import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="gradient-text">Build the Future of Web Experiences</h1>
          <p className="hero-description">
            A premium, high-performance static landing page built with React and Vite. 
            Optimized for speed, SEO, and visual excellence.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">Get Started</button>
            <button style={{ marginLeft: '1rem', background: 'transparent', border: '1px solid var(--glass-border)' }} className="btn-primary">View GitHub</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
