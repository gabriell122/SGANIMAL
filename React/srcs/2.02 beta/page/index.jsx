import BasicButton from "../../components/Buttons/Basic"
import BasicInput from "../../components/Inputs/Basic"

import Login from "../../components/Forms/Login"

import "./style.css"
const Home = () => {

    return (
        <div className="Home">
            <Login />
            <div className="CadastroUsuario">
                <div className="CUsu1">
                    <div className="CUsu1dTitle">
                        <p className="CUsu1title">
                            Cadastre-se no SGA
                        </p>
                    </div>
                    <form className="CUsu1dForm">
                        <div className="CUsu1dInput">
                            <BasicInput name="Nome" />
                        </div>
                        <div className="CUsu1dInput">
                            <BasicInput name="Email" />
                        </div>
                        <div className="CUsu1dInput">
                            <BasicInput name="Senha" />
                        </div>
                        <div className="CUsu1dButtonCadastrar">
                            <BasicButton name="Cadastrar"/>
                        </div>
                    </form>
                    <div className="CUsu1Linhazinha"/>                        
                    <div className="CUsu1dButtonLogin">
                        
                        <a href="#">
                            <p className="CUsu1pLogin">
                                Já tenho uma conta
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home