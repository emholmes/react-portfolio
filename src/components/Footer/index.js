import ghIcon from "../../icons/icon-github.png";
import liIcon from "../../icons/icon-linkedin.png";

const Footer = () => {
  return (
    <footer>
      <section id="contact-me" class="contact-me">
        <ul class="contact-me-links">
          <li>
              <a href="https://www.linkedin.com/in/erin-holmes-26861945/" target="_blank"><img src={liIcon} /></a>
          </li>
          <li>
              <a href="https://github.com/emholmes" target="_blank"><img src={ghIcon} /></a>
          </li>
        </ul>
      </section>
      <p>Made by Erin Holmes.</p>
    </footer>
  )
}

export default Footer;
