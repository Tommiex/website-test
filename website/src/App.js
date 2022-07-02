import { BrowserRouter } from "react-router-dom";
import { Route , Routes } from "react-router-dom";
import SiteR from "./SiteRestaurant";
import SiteMain from "./compMainsite/siteMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<SiteMain />}></Route>
        <Route path="/rest" element={<SiteR />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
