import NavbarM1 from "./navbar/navbar";
import Slider from "./slider/slider";
import SeachBoxM from "./searchBox/searchBox";
const SiteMain = () => {
  return (
    <>
      <NavbarM1></NavbarM1>
      <SeachBoxM></SeachBoxM>
      <div className="grid">
        <Slider></Slider>
      </div>
    </>
  );
};
export default SiteMain;
