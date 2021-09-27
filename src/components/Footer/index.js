const Footer = () => {
  return (
    <footer>
      <section className="footer-section">
        <ul className="footer-links">
          <li>
              <a href="https://www.linkedin.com/in/erin-holmes-26861945/" target="_blank" rel="noreferrer">
                <span className="icon icon-linkedin" aria-label="linkedin profile link"></span>
              </a>
          </li>
          <li>
              <a href="https://github.com/emholmes" target="_blank" rel="noreferrer">
                <span className="icon icon-github" aria-label="github profile link"></span>
              </a>
          </li>
          <li>
              <a href="https://www.hackerrank.com/em_holmes" target="_blank" rel="noreferrer">
                <span className="icon icon-hackerrank" aria-label="hackerrank profile link"></span>
              </a>
          </li>
        </ul>
        <p>Made by Erin Holmes.</p>
      </section>
    </footer>
  )
}

export default Footer;
