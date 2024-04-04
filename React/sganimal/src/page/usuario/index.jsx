import AdotarAnimal from "../../components/forms/adotarAnimal"
import CadastroAnimal from "../../components/forms/cadastro/animal"
import EditarAnimal from "../../components/forms/editar/animal"

const HomeUser = ()=>{
    
    return(
        <div className="Body">
            <div className="Main user">
                <CadastroAnimal
                
                />
                <EditarAnimal
                
                />
                <AdotarAnimal
                
                />


            </div>
        </div>
    )
}
export default HomeUser