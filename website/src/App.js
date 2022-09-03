import { BrowserRouter } from "react-router-dom";
import { Route , Routes } from "react-router-dom";
import SiteR from "./SiteRestaurant";
// import SiteMain from "./compMainsite/siteMain";
import Test from "./test";
import Radiobtn from "./radiobutton";
<<<<<<< HEAD
import SiteMain2 from "./compMainsite2/siteMain2";
=======
import TestUpload from "./testUpload";
import Upload from "./upload";

>>>>>>> 4e8fac37d1383eb971676249d177675e897f4684
function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        {/* <Route path="/main" element={<SiteMain />}></Route> */}
        <Route path="/rest" element={<SiteR />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/testrad" element={<Radiobtn />}></Route>
        <Route path="/main2" element={<SiteMain2/>}></Route>
=======
      <Route path="/upload" element={<Upload/>}></Route>
        <Route path="/main" element={<SiteMain />}></Route>
        <Route path="/rest" element={<SiteR />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/testrad" element={<Radiobtn />}></Route>
        <Route path="/testupload" element={<TestUpload/>}></Route>
>>>>>>> 4e8fac37d1383eb971676249d177675e897f4684
      </Routes>
    </BrowserRouter>
  );
}

export default App;
