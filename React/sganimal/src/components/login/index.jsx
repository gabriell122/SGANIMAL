import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../service/api/index.js";
import BasicButton from "../Buttons/Basic";
const Login = ({setForm , setUser})=>{ 
    
    const [ email, setEmail ] = useState("");
    const [ pass , setPass ] = useState("");
    const navigate = useNavigate()
    
    const Logar = async ( ) =>{
        
        const data = {
            email: email,
            pass: pass
        }
        const res = await Api.post( "/login", data );
        console.log(res.data);    
        if (res.data.confirma) {
            setUser(res.data.data);
            navigate("/animal");    
        }    
    }

    return(
        <div className="Login">
            <div className="LdMain">
                <div className="LdTitle">
                    <p className="LpTitle">
                        Entrar no SGA
                    </p>
                </div>
                <div className="LdForm">
                    <div className="LdInput">
                        <input type="text" className="Linput" placeholder="Email" />
                    </div>
                    <div className="LdInput">
                        <input type="password" className="Linput" placeholder="Senha"/>
                    </div>
                    <div className="LdButton Entrar">
                        <BasicButton name="Entrar"/>
                    </div>
                </div>
                <div className="LdButton Registrar ">
                    <BasicButton name="Registrar-se"/>
                </div>
            </div>
        </div>
    )
}
export default Login;
