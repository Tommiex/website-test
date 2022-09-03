import { BrowserRouter } from "react-router-dom";
import { Route , Routes } from "react-router-dom";
import SiteR from "./SiteRestaurant";
// import SiteMain from "./compMainsite/siteMain";
import Test from "./test";
import Radiobtn from "./radiobutton";
import SiteMain2 from "./compMainsite2/siteMain2";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/main" element={<SiteMain />}></Route> */}
        <Route path="/rest" element={<SiteR />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/testrad" element={<Radiobtn />}></Route>
        <Route path="/main2" element={<SiteMain2/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
