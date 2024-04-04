import {BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "./page/home/index.jsx";
import HomeUser from "./page/usuario/index.jsx";
import "./reset.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/Home" element = {<HomeUser />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
