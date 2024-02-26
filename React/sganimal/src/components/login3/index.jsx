import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../service/api/index";
//import "./style.css";
const Login = ( {setForm , setUser} ) => {
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
    
    return (
        <div className="Login">
            <div className="LdTop">
                <div className="LdEmail">
                    <input 
                        type="text" 
                        placeholder="Email" 
                        className="Linput" 
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </div>
                <div className="LdSenha">
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        className="Linput" 
                        onChange={(e)=>{setPass(e.target.value)}}
                    />
                </div>
                <div className = "LdEntrar">
                    <input 
                        type="button" 
                        value="Entrar" 
                        className="Lbutton"
                        onClick={()=>{Logar()}}
                    />
                </div>
            </div>
            <div className = "LdBot">
                <div className = "LdEsqueceuSenha">
                    <a href="#">
                        <p className="LpEsqueceuSenha">Esqueceu a Senha?</p>
                    </a>
                </div>
                <div className="LddLine">
                    <div className = "LdLine"/>
                </div>
                <div className = "LdRegistrar">
                    <input 
                        type="button" 
                        value="Registrar" 
                        className="Lbutton" 
                        onClick={()=>{setForm("Cadastrar")}}
                    />
                </div>
            </div>
        </div>
    )
}
export default Login;