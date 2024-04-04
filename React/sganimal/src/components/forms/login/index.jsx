const Login = ({set})=>{
    return(
        <div className="Login">
            <div className="LdTitle">
                <div className="LpTitle">
                    Entrar no SGA
                </div>
            </div>
            <div className="LdInputs">
                <input type="email" className="LInput" placeholder="Email" />
                <input type="password" className="LInput" placeholder="Senha" />
            </div>
            <div className="LdButton">
                <input type="button" value="Entrar" className="LButton entrar" />
                <input type="button" value="Registrar-se" className="LButton registrar" onClick={()=>{set("Cadastrar")}} />
            </div>
        </div>
    )
}
export default Login