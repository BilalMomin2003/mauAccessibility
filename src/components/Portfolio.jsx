function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <p>Take a look at sample accessibility work we've completed:</p>

      <div className="portfolio-grid">
        <a
          className="portfolio-card"
          href="/Binder1.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="pdf-badge">PDF</span>
          <span>Sample Accessible Pdf</span>
        </a>

        <a
          className="portfolio-card"
          href="/sample%20report.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="pdf-badge">PDF</span>
          <span>Tagging and Remediation Process</span>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;