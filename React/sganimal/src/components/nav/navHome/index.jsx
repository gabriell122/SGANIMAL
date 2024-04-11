const NavHome = ({set}) => {

    return (
        <nav className="Navbar">
            <div className="NhdLeft">
                <div className="NhdLogo">
                    <p className="NhpLogo">
                        SGA
                    </p>
                </div>
            </div>
            <div className="NhdRight">
                <div className="NhdDrop">
                    <div className="NhdDropText">
                        Animais
                    </div>
                    <ul className="NhdDropItens">
                        <li className="NhdDropItem" 
                            onClick={()=>{
                                set("Seus")
                            }}
                        >Seus Animais</li>
                        <li className="NhdDropItem"
                            onClick={()=>{
                                set("Novo")
                            }}
                        >Novo Animal</li>
                    </ul>
                </div>
                <div className="NhdDrop">
                    <div className="NhdDropText"
                        onClick={()=>{
                            set("Adotar")
                        }}
                    >
                        Adoção
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavHome