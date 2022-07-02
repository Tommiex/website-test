import logo from "./logo.svg";
import "./App.css";
import Navbar from "./compRestaurant/navbar/navbar";
import Category from "./compRestaurant/category/category";
import Maincontain from "./compRestaurant/review/maincontain";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Category />
        <Maincontain />
      </div>
    </>
  );
}

export default App;
