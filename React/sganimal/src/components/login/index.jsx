import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../service/api/index.js";
import BasicButton from "../Buttons/Basic";
import BasicInput from "../Inputs/basicInput";
const Login = ({setForm , setUser})=>{ 
    
    const [ email, setEmail ] = useState("");
    const [ pass , setPass ] = useState("");
    const navigate = useNavigate()
    
    const Logar = async ( ) =>{
        
        const data = {
            email: email,
            pass: pass
        }
        console.log(data);
        // const res = await Api.post( "/login", data );
        // console.log(res.data);    
        // if (res.data.confirma) {
        //     setUser(res.data.data);
        //     navigate("/animal");    
        // }    
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
                        <BasicInput 
                            name= "Email" 
                            type= "email" 
                            set= {setEmail}
                        />
                    </div>
                    <div className="LdInput">
                        <BasicInput 
                            name= "Senha" 
                            type= "password" 
                            set= {setPass}
                        />
                    </div>
                    <div className="LdButton Entrar">
                        <BasicButton 
                            name="Entrar" 
                            action = {Logar}
                        />
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
