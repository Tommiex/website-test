import "./nav.css";

const NavbarM1 = () => {
  function onClick() {
    document.getElementById("sidebarMenu");
  }
  return (
    <>
      <div>
        <div class="navBar">
          <div id="nav-container">
            <div class="bg"></div>
            <div class="button" tabindex="0">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
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
                <li class="small">
                  <a href="#0">Facebook</a>
                  <a href="#0">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavbarM1;
