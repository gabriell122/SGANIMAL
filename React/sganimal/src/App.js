import {BrowserRouter , Routes, Route} from "react-router-dom";
import { useState } from "react";

import Home from "./page/home/index.jsx";
import Animal from "./page/animal/index.jsx"
import "./reset.css"
function App() {
  const [ user , setUser] = useState("oi")
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home user={ user } setUser = { setUser } />} />
        <Route path = "/animal" element = {<Animal user = { user } setUser = { setUser }  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
