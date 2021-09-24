const ContactForm = () => {
  return (
    <section className="contact">
      <h3>Contact</h3>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email address:</label>
        <input type="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea name="message" rows="5" />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;