import { useState, useEffect } from "react";
import "./style.css";


const Nav = ( { setForm ,scrollToSection } ) => {
    return (
        <div className="Nav">
            <div className="NdFlex">
                <div className="Nd1">
                    <div className="Nname">
                        <p className="NpName">
                            SGA
                        </p>
                    </div>
                    <div className="NnameFull">
                        <p className="NpNameFull">
                            Sistema de Gerenciamento Animal
                        </p>
                    </div>
                </div> 
                <div className="Nd2">
                    <div className="NRegistrar">
                        <input
                            type="button"
                            value="Resgistrar-se"
                            className="Nbutton"
                            onClick={() => { setForm("Cadastrar")}}

                        />
                    </div>
                    <div className="NLogin">
                        <input
                            type="button"
                            value="Login"
                            className="Nbutton"
                            onClick={() => { setForm("Login") }}


                        />
                    </div>
                    <div className="NSobre">
                        <input type="button" value="Sobre" className="Nbutton" />
                    </div>
                </div>   
            </div>
            <div className="Nborder" />
        </div>
    )
}
export default Nav;