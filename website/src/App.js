import { BrowserRouter } from "react-router-dom";
import { Route , Routes } from "react-router-dom";
import SiteR from "./SiteRestaurant";
import SiteMain from "./compMainsite/siteMain";
import Test from "./test";
import Radiobtn from "./radiobutton";
import TestUpload from "./testUpload";
import Upload from "./upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/upload" element={<Upload/>}></Route>
        <Route path="/main" element={<SiteMain />}></Route>
        <Route path="/rest" element={<SiteR />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/testrad" element={<Radiobtn />}></Route>
        <Route path="/testupload" element={<TestUpload/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
