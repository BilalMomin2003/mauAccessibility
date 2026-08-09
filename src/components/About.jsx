function About() {
  return (
    <section id="about" className="about">
      <svg
        className="about-icon"
        viewBox="0 0 100 100"
        role="img"
        aria-label="Accessible document icon"
      >
        <rect x="20" y="10" width="50" height="70" rx="4" fill="#e2e8f0" stroke="#2563eb" strokeWidth="3" />
        <line x1="30" y1="28" x2="60" y2="28" stroke="#2563eb" strokeWidth="3" />
        <line x1="30" y1="40" x2="60" y2="40" stroke="#2563eb" strokeWidth="3" />
        <line x1="30" y1="52" x2="50" y2="52" stroke="#2563eb" strokeWidth="3" />
        <circle cx="65" cy="65" r="18" fill="#16a34a" />
        <path d="M57 65 l6 6 12 -12" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="about-text">
        <h2>About Us</h2>
        <p className="credentials">
          Document Accessibility Specialist | DHS Trusted Tester Certified |
          Accessibility QA | WCAG 2.2, PDF/UA | Section 508 | ADA | AODA
        </p>
        <p>
          mauAccessibility Solutions specializes in PDF and document
          accessibility. We have a team of experienced document specialists
          who have worked with reputed organizations and bring strong,
          hands-on knowledge of Section 508 compliance. We test and fix
          documents against WCAG and other accessibility standards so they
          work for everyone, including people who rely on screen readers.
        </p>
      </div>
    </section>
  );
}

export default About;