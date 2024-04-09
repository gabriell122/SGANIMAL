import { useState } from "react"
import AdotarAnimal from "../../components/forms/adotarAnimal"
import CadastroAnimal from "../../components/forms/cadastro/animal"
import EditarAnimal from "../../components/forms/editar/animal"
import NavHome from "../../components/nav/navHome"

const HomeUser = () => {
    const [ form , setForm] = useState("Cadastrar")
    return (
        <div className="Body">
            <NavHome
                set = {setForm}
            />
            <div className="Main user">
                {
                    form == "Editar" 
                    ?<EditarAnimal/>
                    :form == "Cadastrar" 
                    ?<CadastroAnimal/>
                    :form == "Adotar"
                    ?<AdotarAnimal/>
                    :""
                }


            </div>
        </div>
    )
}
export default HomeUser