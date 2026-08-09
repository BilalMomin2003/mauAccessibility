function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>MauAccessibility</h1>
        <p className="tagline">Making your PDFs accessible to everyone.</p>
        <p>
          We test and fix PDF documents so they meet WCAG accessibility
          standards and can be used by everyone, including people who rely
          on screen readers.
        </p>
        <a href="#contact" className="cta-button">Get in touch</a>
      </div>

      {/* Real accessibility photo from the public folder */}
      <img
  className="hero-icon"
  src="accessibility.png"
  alt="Accessibility illustration"
/>
    </section>
  );
}

export default Hero;