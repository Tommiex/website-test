import "./siteMain2.css"
import Main2Nav from "./nav/Main2Nav";
import { Main2image } from "./carousel/imagedata2";
import SliderMain2 from "./carousel/carousel";
function SiteMain2(){
    return (
      <div>
        <Main2Nav/>
        <SliderMain2 carouselIMage={Main2image}/>
      </div>
    );
  };
  export default SiteMain2;
  