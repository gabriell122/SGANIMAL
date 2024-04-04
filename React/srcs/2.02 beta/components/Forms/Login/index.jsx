import BasicButton from "../../Buttons/Basic"
import BasicInput from "../../Inputs/Basic"
import "./style.css"
const Login = () => {
    return (
        <div className="Login" >
            <div className="LdTitle">
                <p className="Ltitle">
                    Entrar no SGA
                </p>
            </div>
            <form className="LdForm">
                <div className="LdInputs">
                    <BasicInput name="Email" type="Email" />
                </div>
                <div className="LdInputs t36">
                    <BasicInput name="Senha" type="password" />
                </div>
                <div className="LdButtonEntrar">
                    <BasicButton name="Entrar" />
                </div>
            </form>
            <div className="LdButtonCadastrar">
                <BasicButton name="Registrar-Se" />
            </div>
        </div>
    )
}
export default Login