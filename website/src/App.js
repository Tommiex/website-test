import { BrowserRouter } from "react-router-dom";
import { Route , Routes } from "react-router-dom";
import SiteR from "./SiteRestaurant";
import SiteMain from "./compMainsite/siteMain";
import Test from "./test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<SiteMain />}></Route>
        <Route path="/rest" element={<SiteR />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
