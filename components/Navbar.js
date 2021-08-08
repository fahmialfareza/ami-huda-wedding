function Navbar() {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-light nav-color fixed-top mb-4 mt-4"
    >
      <div id="navbar-list" className="mx-auto mt-2 mb-2">
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav text-center">
            <li className="nav-item  mr-4 ml-4">
              <a className="nav-link black-color" href="#">
                Home
              </a>
            </li>
            <li className="nav-item  mr-4 ml-4">
              <a className="nav-link black-color" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item  mr-4 ml-4">
              <a className="nav-link black-color" href="#wedding">
                Wedding
              </a>
            </li>
            <li className="nav-item mr-4 ml-4">
              <a className="nav-link black-color" href="#rsvp">
                RSVP
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link black-color" href="#ourstory">
                Our Story
              </a>
            </li>
          </ul>
        </div>
      </div>

      <button
        className="custom-toggler navbar-toggler dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className=" navbar-toggler-icon"></span>
      </button>
    </nav>
  );
}

export default Navbar;
