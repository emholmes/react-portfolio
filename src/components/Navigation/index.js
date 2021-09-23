import { useState } from "react";

const Navigation = () => {
  const [navLinks] = useState([
    { name: "About me" },
    { name: "My work"},
    { name: "Contact me"},
    { name: "Resume" }
  ]);

  const [currentNavLink, setcurrentNavLink] = useState(navLinks[0]);

  return (
    <nav>
      <ul>
        {navLinks.map((link) => (
          <li className={`${currentNavLink.name === link.name && "navActive"}`} key={link.name}>
            <span onClick={() => {
              setcurrentNavLink(link); 
            }}>
                {link.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation;
