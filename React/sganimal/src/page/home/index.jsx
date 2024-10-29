//dependencias
import { useState } from "react";
//componentes
import Login from "../../components/forms/login";
import Nav from "../../components/nav";
import CadastroUsuario from "../../components/forms/cadastro/usuario"

const Home = ({setUser})=>{
    const [form , setForm] = useState("Login")
    return(
        <div className="Body">
            <Nav set = {setForm}  />
            <div className="Main">
                {
                    form == "Login"
                    ?<Login set = {setForm} setUsuario={setUser}/>
                    :<CadastroUsuario set = {setForm}/>
                }
            </div>
        </div>
    )
}

export default Home;