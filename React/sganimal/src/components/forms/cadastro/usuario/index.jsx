const CadastroUsuario = ({set})=>{
    return(
        <div className="CadastrarUsuario">
            <div className="CudTitle">
                <p className="CupTitle">
                    Cadastre-se no SGA
                </p>
            </div>
            <div className="CudInputs">
                <input type="text" className="CuInput" placeholder="Nome" />
                <input type="email" className="CuInput" placeholder="Email" />
                <input type="password" className="CuInput" placeholder="Senha" />
            </div>
            <div className="CudButtons">
                <input type="button" value="Cadastrar" className="CuButton cadastrar" />
                <div className="CudLine"></div>
                <div className="CudPLogin" >
                    <p className="CupRegistrar" onClick={()=>{set("Login")}}>já tenho uma conta</p>
                </div>

            </div>
        </div>
    )
}
export default CadastroUsuario