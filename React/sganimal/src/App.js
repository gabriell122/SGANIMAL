import { useEffect, useState } from "react";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "./page/home/index.jsx";
import HomeUser from "./page/usuario/index.jsx";
import "./reset.css"
import "./global.css"
function App() {
  const [user, setUser] = useState()
  return (
    <BrowserRouter>
      <Routes>

        <Route path = "/" element = {<Home setUser={setUser}/>} />
        <Route path = "/Home" element = {<HomeUser user={user}/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
