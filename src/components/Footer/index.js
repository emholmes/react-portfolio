import ghIcon from "../../assets/icons/icon-github-min.png";
import liIcon from "../../assets/icons/icon-linkedin-min.png";

const Footer = () => {
  return (
    <footer>
      <section id="contact-me" className="contact-me">
        <ul className="contact-me-links">
          <li>
              <a href="https://www.linkedin.com/in/erin-holmes-26861945/" target="_blank" rel="noreferrer"><img src={liIcon} alt="LinkedIn icon"/></a>
          </li>
          <li>
              <a href="https://github.com/emholmes" target="_blank" rel="noreferrer"><img src={ghIcon} alt="GitHub icon" /></a>
          </li>
        </ul>
        <p>Made by Erin Holmes.</p>
      </section>
    </footer>
  )
}

export default Footer;
