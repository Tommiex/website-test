




import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SiteR from "./SiteRestaurant";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<siteMain/>}></Route>
        <Route path="/rest" element={<SiteR/>}></Route>
       
      </Routes>

      {/* <LoginWithGoogle></LoginWithGoogle> */}
    </BrowserRouter>
  );
}

export default App;
