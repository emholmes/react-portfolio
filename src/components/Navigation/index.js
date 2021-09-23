const Navigation = ({currentPage, handlePageChange}) => {
  const navLinks = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <nav>
      <ul className="nav nav-tabs">
        {navLinks.map((link) => (
          <li className="nav-item" key={link}>
            <a href={"#" + link.toLowerCase()} 
            onClick={() => {
              handlePageChange(link); 
            }}
              className={currentPage === link ? "nav-link navActive active" : "nav-link"}>
                {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation;
