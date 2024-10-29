const Nav = ({set}) => {


    return (
        <nav className="Nav">
            <div className="NdAll">
                <div className="NdLeft">
                    <div className="NdTitle">
                        <p className="NpTitle">
                            SGA
                        </p>
                    </div>
                    <div className="NdName">
                        <p className="NpName">
                            Sistema de Gerenciamento Animal
                        </p>
                    </div>
                </div>
                <div className="NdRight">
                    <div className="NdButton Registrar">
                        <input 
                            type="button" 
                            value="Registrar-se" 
                            className="NiButton" 
                            onClick={()=>{set("Cadastrar")}}
                        />
                    </div>
                    <div className="NdButton Entrar">
                        <input 
                            type="button" 
                            value="Entrar" 
                            className="NiButton" 
                            onClick={()=>{set("Login")}}
                        />
                    </div>
                    <div className="NdButton Sobre">
                        <input type="button" value="Sobre" className="NiButton" />
                    </div>
                </div>
                <div className="NdRLast">
                    <i className="fas fa-envelope"></i>
                </div>
            </div>
        </nav>
    )
}
export default Nav