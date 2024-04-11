import { useState } from "react"
import AdotarAnimal from "../../components/forms/adotarAnimal"
import CadastroAnimal from "../../components/forms/cadastro/animal"
import NavHome from "../../components/nav/navHome"
import SeusAnimais from "../../components/table/seusAnimais"

const HomeUser = () => {
    const [ form , setForm] = useState("Seus")
    return (
        <div className="Body">
            <NavHome
                set = {setForm}
            />
            <div className="Main user">
            
                {
                    form == "Seus"
                    ?<SeusAnimais/>
                    :form == "Novo"
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