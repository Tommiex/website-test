import NavbarM1 from "./navbar/navbar";
import SliderSmenu from "./slider/slider1";
import "./site.css";


const SiteMain = () => {
  return (
    <>
      <div id="Navbar">
        <NavbarM1></NavbarM1>
      </div>

      <div className="grid">
        <div className="grid-slide">
          <SliderSmenu></SliderSmenu>
        </div>
      </div>
      
    </>
  );
};
export default SiteMain;
