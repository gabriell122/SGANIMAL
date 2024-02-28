import { useState } from "react";
import Api from "../../../service/api/index";
import "./style.css";

const CadastroUsuario = ( {setForm} ,)=>{

    const [ email, setEmail ] = useState("");
    const [ pass , setPass ] = useState("");
    const [ nome, setNome ] = useState("");

    const Cadastrar = async () => {
        const data = {
            email: email,
            pass: pass,
            nome: nome
        }
        console.log(data);
        // const res = await Api.post( "/cadastrar", data )
        // console.log(res.data);
    }

    return(
        <div className = "CadastroUsuario">
            <div className="CUdName">
                <p className="CUpName">
                    Cadastre-se no SGA
                </p>
            </div>
            <div className="CUdInput">
                <input 
                type="text" 
                placeholder="Nome" 
                className="CUinput"
                onChange={(e)=>{setNome(e.target.value)}}
            />
            </div>
            <div className="CUdInput">
                <input 
                type="text" 
                placeholder="Email" 
                className="CUinput"
                onChange={(e)=>{setEmail(e.target.value)}}
            />
            </div>
            <div className="CUdInput">
                <input 
                type="text" 
                placeholder="Senha" 
                className="CUinput"
                onChange={(e)=>{setPass(e.target.value)}}
            />
            </div>
            <div className="CUdButton">
                <input 
                type="button" 
                value="Cadastrar" 
                className="CUbutton"
                onClick={()=>{Cadastrar()}}
            />
            </div>
            <div className="CUddLine">
                    <div className = "CUdLine"/>
            </div>
            <div className="CUdLogin">
                <a href="#">
                    <p className="CUpLogin" onClick={()=>{setForm("Login")}}>
                        Já tenho uma conta
                    </p>
                </a>
            </div>
        </div>
    )
}
export default CadastroUsuario;