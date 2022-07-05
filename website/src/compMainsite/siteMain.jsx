import NavbarM1 from "./navbar/navbar";
import SliderEx from "./slider/slider2";
import SliderSmenu from "./slider/slider1";
import "./site.css";

const SiteMain = () => {
  return (
    <>
      <div className="grid">
        <div id="Navbar">
          <NavbarM1></NavbarM1>
        </div>
        <div className="grid-slide">
          <SliderSmenu></SliderSmenu>
        </div>
        <div>
          <SliderEx></SliderEx>
        </div>
        <div className="box">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          facere fugiat culpa sit, nemo, nobis voluptates dolores veritatis
          earum laboriosam deleniti non laudantium et aperiam accusamus optio,
          eligendi suscipit officia.
        </div>
      </div>
    </>
  );
};
export default SiteMain;
