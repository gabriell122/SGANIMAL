import { useState } from "react";
import BasicButton from "../../Buttons/Basic";
import BasicInput from "../../Inputs/basicInput";
import "./style.css";
const CadastroUsuario2 = () => {
    const [ rua, setRua] = useState("");
    const [ numero, setNumero] = useState("");
    const [ bairro, setBairro] = useState("");
    const [ cidade, setCidade] = useState("");
    const [ estado, setEstado] = useState("");
    const [ telefone, setTelefone] = useState("");
    const [ nasc, setNasc] = useState("");

    const Concluir = ()=>{
        
        const data = {
            telefone: telefone, 
            nascimento: nasc, 
            rua: rua, 
            num: numero, 
            bairo: bairro, 
            cidade: cidade, 
            estado: estado, 
        }
        console.log(data);
    }
    return (
        <div className="CadastroUsuario2">
            <div className="CU2dTitle">
                <p className="CU2p">
                    Concluindo Cadastro
                </p>
            </div>
            <div className="CU2dForm">
                <div className="CU2dLine">
                    <div className="CU2d35">
                        <BasicInput 
                            name="Rua"
                            set= {setRua}
                        />
                    </div>
                    <div className="CU2d2">      
                        <BasicInput 
                            name="Número"
                            set= {setNumero}

                        />
                    </div>
                </div>
                <div className="CU2dLine">
                    <div className="CU2d2">      
                        <BasicInput 
                            name="Bairro"
                            set= {setBairro}
                        />
                    </div>
                    <div className="CU2d2 p2">      
                        <BasicInput 
                            name="Cidade"
                            set= {setCidade}
                        />
                    </div>
                    <div className="CU2d15">
                        <BasicInput 
                            name="Estado"
                            set= {setEstado}
                        />
                    </div>
                </div>
                <div className="CU2dLine">
                    <div className="CU2d35">
                        <BasicInput 
                            name="Telefone"
                            set= {setTelefone}
                        />
                    </div>
                    <div className="CU2d2">      
                        <BasicInput 
                            type= "date"
                            name="Data Nasc."
                            set= {setNasc}
                        />
                    </div>
                </div>
                <div className="CU2dButton">
                    <BasicButton
                        name="Concluir"
                        action={Concluir}

                    />
                </div>
            </div>
        </div>
    )
}
export default CadastroUsuario2;