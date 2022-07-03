
import "./siteRes.css";
import Navbar1R from "./compRestaurant/navbar/navbar";
import Category from "./compRestaurant/category/category";
import Maincontain from "./compRestaurant/review/maincontain";

function SiteR() {
  return (
    <div className="All">
      <Navbar1R/>
      <div className="main">
        <Category />
        <Maincontain />
      </div>
    </div>
  );
}

export default SiteR;
