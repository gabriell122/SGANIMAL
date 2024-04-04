const Nav = ({set}) => {


    return (
        <nav class="Nav">
            <div class="NdAll">
                <div class="NdLeft">
                    <div class="NdTitle">
                        <p class="NpTitle">
                            SGA
                        </p>
                    </div>
                    <div class="NdName">
                        <p class="NpName">
                            Sistema de Gerenciamento Animal
                        </p>
                    </div>
                </div>
                <div class="NdRight">
                    <div class="NdButton Registrar">
                        <input 
                            type="button" 
                            value="Registrar-se" 
                            class="NiButton" 
                            onClick={()=>{set("Cadastrar")}}
                        />
                    </div>
                    <div class="NdButton Entrar">
                        <input 
                            type="button" 
                            value="Entrar" 
                            class="NiButton" 
                            onClick={()=>{set("Login")}}
                        />
                    </div>
                    <div class="NdButton Sobre">
                        <input type="button" value="Sobre" class="NiButton" />
                    </div>
                </div>
                <div class="NdRLast">
                    <i class="fas fa-envelope"></i>
                </div>
            </div>
        </nav>
    )
}
export default Nav