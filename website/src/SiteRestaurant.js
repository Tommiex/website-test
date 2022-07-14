
import "./siteRes.css";
import Navbar1R from "./compRestaurant/navbar/navbar";
import Category from "./compRestaurant/category/category";
import Carouseltest from "./compRestaurant/review/carouseltest";

function SiteR() {
  return (
    <div className="All">
      <Navbar1R/>
      <div className="main">
        <Category />
        <Carouseltest/>
      </div>
    </div>
  );
}

export default SiteR;
