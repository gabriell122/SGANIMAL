import { useEffect } from "react"
import { useState } from "react"
import handleChange from "../../../../service/change/handleChange"

const EditarAnimal = (data) => {
    const [animal , setAnimal] = useState({
        nome:"",
        data:"",
        especie:"",
        raca:"",
        sexo:""
    })
    useEffect(()=>{
        console.log(data);
        setAnimal({
                "nome": data.data.nome,
                "data": data.data.data,
                "especie": data.data.especie,
                "raca": data.data.raca,
                "sexo": data.data.sexo
          })
    }
    ,[])


    const EditarAnimal = ()=>{
        console.log(animal)
    }

    const ExcluirAnimal = ()=>{
        console.log("Animal excluido com susceso")
    }


    return (
        <div className="EditarAnimal">
            <div className="EAdTitle">
                <p className="EApTitle">
                    Editar Animal
                </p>
            </div>
            <div className="EAdInputs">
                <div className="EAdLine DN">
                    <input type="text" placeholder="Nome" className="EAinput DN b" 
                        onChange={
                            (e)=>{  handleChange( animal, setAnimal, "nome", e.target.value)}
                        }
                        value = {animal.nome}
                    />
                    <div className="EAdDataInput">
                        <p className="EApDN">Data de nascimento</p>
                        <input type="date" className="EAinput DN n" 
                            onChange={
                                (e)=>{  handleChange( animal, setAnimal, "data", e.target.value)}
                            }
                            value = {animal.data}
                        />
                    </div>
                </div>
                <div className="EAdLine">
                    <input type="text" placeholder="Éspecie" className="EAinput n prs" 
                        onChange={
                            (e)=>{  handleChange( animal, setAnimal, "especie", e.target.value)}
                        }
                        value = {animal.especie}
                    />
                    <input type="text" placeholder="Raça" className="EAinput n prs" 
                        onChange={
                            (e)=>{  handleChange( animal, setAnimal, "raca", e.target.value)}
                        }
                        value = {animal.raca}
                    />
                    <select className="EAselect s" defaultValue="0"
                        onChange={
                            (e)=>{  handleChange( animal, setAnimal, "sexo", e.target.value)}
                        }
                        value = {
                            animal.sexo == 0 
                            ?2
                            :1
                        }
                    >
                        <option value="0" hidden>Sexo</option>
                        <option value="1">Macho</option>
                        <option value="2">Fêmea</option>
                    </select>
                </div>
            </div>
            <div className="EAdButtons">
                <input type="button" value="Editar" className="EAbutton r" 
                    onClick={()=>{EditarAnimal()}}
                />
                <input type="button" value="Excluir Animal" className="EAbutton" 
                    onClick={()=>{ExcluirAnimal()}}
                />
            </div>
        </div>
    )
}
export default EditarAnimal