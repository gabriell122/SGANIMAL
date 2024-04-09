import { useState } from "react"
import ConnApi from "../../../service/conn/connApi"
import handleChange from "../../../service/change/handleChange"
const Login = ({set})=>{

    const [ user , setUser] = useState({
        email:"",
        pass:""
    })
    const Login = async ()=>{
        console.log(user);
        try {
            const res = await ConnApi.post("login", user)
            if (res.data.confirma) {
                console.log("Logado com sus");
            }else{
                console.log(res.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="Login">
            <div className="LdTitle">
                <div className="LpTitle">
                    Entrar no SGA
                </div>
            </div>
            <div className="LdInputs">
                <input type="email" className="LInput" placeholder="Email" 
                    onChange={(e)=>{
                        handleChange(user , setUser, "email" , e.target.value)
                    }}
                    value = {user.email}
                />
                <input type="password" className="LInput" placeholder="Senha" 
                    onChange={(e)=>{
                        handleChange(user , setUser, "pass" , e.target.value)
                    }}
                    value = {user.pass}
                />
            </div>
            <div className="LdButton">
                <input type="button" value="Entrar" className="LButton entrar" 
                    onClick={()=>{
                        Login()
                    }}
                />
                <input type="button" value="Registrar-se" className="LButton registrar" onClick={()=>{set("Cadastrar")}} />
            </div>
        </div>
    )
}
export default Login