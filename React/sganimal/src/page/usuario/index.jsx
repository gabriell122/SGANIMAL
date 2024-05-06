import { useState } from "react"
import CadastroAnimal from "../../components/forms/cadastro/animal"
import NavHome from "../../components/nav/navHome"
import SeusAnimais from "../../components/table/seusAnimais"
import AnimalAdocao from "../../components/table/animalAdocao"
import { useEffect } from "react"
import { useNavigate, useRouteError } from "react-router-dom"
const HomeUser = ({user}) => {
    const navigate = useNavigate()
    const [ form , setForm] = useState("Seus")
    useEffect(()=>{
        if (!user) {
            navigate("/")
        }
    },[])
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
                    ?<CadastroAnimal user={user}/>
                    :form == "Adotar"
                    ?<AnimalAdocao user={user}/>
                    :""
                }
            </div>
        </div>
    )
}
export default HomeUser