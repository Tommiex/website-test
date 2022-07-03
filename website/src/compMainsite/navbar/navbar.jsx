import "./nav.css";

const NavbarM1 = () => {
  return (
    <>
      <div className="navBar">
        <div id="nav-container">
          <div className="bg"></div>
          <div className="button" tabindex="0">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </div>
          <div id="nav-content" tabindex="0">
            <ul>
              <li>
                <a href="#0">Home</a>
              </li>
              <li>
                <a href="#0">Services</a>
              </li>
              <li>
                <a href="#0">Blog</a>
              </li>
              <li>
                <a href="#0">About</a>
              </li>
              <li>
                <a href="#0">Contact</a>
              </li>
              <li className="small">
                <a href="#0">Facebook</a>
                <a href="#0">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavbarM1;
