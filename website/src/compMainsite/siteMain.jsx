import NavbarM1 from "./navbar/navbar";
import Slider from "./slider/slider";
import "./site.css";

const SiteMain = () => {
  return (
    <>
      <div id="Navbar">
        <NavbarM1></NavbarM1>
      </div>

      <div className="grid">
        <div className="grid-slide">
          <Slider></Slider>
        </div>
      </div>
    </>
  );
};
export default SiteMain;
