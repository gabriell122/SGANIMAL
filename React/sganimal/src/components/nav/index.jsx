import { useState, useEffect } from "react";
import "./style.css";


const Nav = ( { setForm, user } ) => {
    
    const [ on, setOn ] = useState(false) 
    useEffect(()=>{
        if (!user) {
            setOn(true)
        }
    },[user])
    
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
                            {!on
                                ? "Área Animal" 
                                : "Sistema de Gerenciamento Animal"
                            }

                        </p>
                    </div>
                </div>
                {
                    !on
                    ?<div className="Nd2">
                        <div className="NRegistrar">
                            <input
                                type="button"
                                value="Meus Animais"
                                className="Nbutton"
                                onClick={() => { setForm("Animais") }}
                            />
                        </div>
                        <div className="NLogin">
                            <input
                                type="button"
                                value="Novo Animal"
                                className="Nbutton"
                                onClick={() => { setForm("Cadastrar") }}
                            />
                        </div>
                        <div className="NSobre">
                            <input 
                                type="button" 
                                value="Sair" 
                                className="Nbutton" 
                                onClick={() => { setForm("Sair") }}
                            />
                        </div>
                    </div>
                    :<div className="Nd2">
                        <div className="NRegistrar">
                            <input
                                type="button"
                                value="Resgistrar-se"
                                className="Nbutton"
                                onClick={() => { setForm("Cadastrar") }}
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
                }
            </div>
            <div className="Nborder" />
        </div>
    )
}
export default Nav;