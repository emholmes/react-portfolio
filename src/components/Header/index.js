import Navigation from "../Navigation";

const Header = (props) => {
  return (
    <header>
      <div className="h1-block">
        <h1>Erin Holmes</h1>
            <h2>Web Developer</h2>
      </div>
      <Navigation 
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />
    </header>
  )
}

export default Header;
