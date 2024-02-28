import BasicButton from "../../Buttons/Basic";
import BasicInput from "../../Inputs/basicInput";
import "./style.css";
const CadastroUsuario2 = () => {

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
                        />
                    </div>
                    <div className="CU2d2">      
                        <BasicInput 
                            name="Número"
                        />
                    </div>
                </div>
                <div className="CU2dLine">
                    <div className="CU2d2">      
                        <BasicInput 
                            name="Bairro"
                        />
                    </div>
                    <div className="CU2d2">      
                        <BasicInput 
                            name="Cidade"
                        />
                    </div>
                    <div className="CU2d15">
                        <BasicInput 
                            name="Estado"
                        />
                    </div>
                </div>
                <div className="CU2dLine">
                    <div className="CU2d35">
                        <BasicInput 
                            name="Telefone"
                        />
                    </div>
                    <div className="CU2d2">      
                        <BasicInput 
                            name="Data Nasc."
                        />
                    </div>
                </div>
                <div className="CU2dButton">
                    <BasicButton
                        name="Concluir"

                    />
                </div>
            </div>
        </div>
    )
}
export default CadastroUsuario2;