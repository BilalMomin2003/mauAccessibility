function ContactForm() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>

      {/* Your contact details shown above the form */}
      <div className="contact-info">
        <p>📞 Phone: <strong>+91 8149959132</strong></p>
        <p>✉️ Email: <strong>mominbilal58@gmail.com</strong></p>
        <p>
          🔗 LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/bilal-momin-a72880286"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/bilal-momin-a72880286
          </a>
        </p>
      </div>

      {/*
        IMPORTANT: replace YOUR_FORM_ID below with the ID Formspree gives you.
        See the setup steps in the chat message for how to get this.
      */}
      <form
        className="contact-form"
        action="https://formspree.io/f/xbgrdzqn"
        method="POST"
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;