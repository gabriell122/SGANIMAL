import { useState } from "react"
import handleChange from "../../../../service/change/handleChange";
import ConnApi from "../../../../service/conn/connApi";
const CadastroAnimal = () => {

    const [animal, setAnimal] = useState({
        nome: "",
        data: "",
        especie: "",
        raca: "",
        sexo: ""
    })
    const CadastrarAnimal = async () => {
        try {
            const res = await ConnApi.post("/cadastrarAnimal", animal)
            if (res.data.confirma) {
                console.log("Animal cadastrado com susceso");
            } else {
                console.log(res.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="CadastroAninal">
            <div className="CAdTitle">
                <p className="CApTitle">
                    Cadastrar novo animal
                </p>
            </div>
            <div className="CAdInputs">
                <div className="CAdLine DN">
                    <input
                        type="text"
                        placeholder="Nome"
                        className="CAinput DN b"
                        onChange={
                            (e) => { handleChange(animal, setAnimal, "nome", e.target.value) }
                        }
                        value={animal.nome}
                    />
                    <div className="CAdDataInput">
                        <p className="CApDN">Data de nascimento</p>
                        <input
                            type="date"
                            className="CAinput DN n"
                            onChange={
                                (e) => { handleChange(animal, setAnimal, "data", e.target.value) }
                            }
                            value={animal.data}
                        />
                    </div>
                </div>
                <div className="CAdLine">
                    <input
                        type="text"
                        placeholder="Éspecie"
                        className="CAinput n prs"
                        onChange={
                            (e) => { handleChange(animal, setAnimal, "especie", e.target.value) }
                        }
                        value={animal.especie}
                    />
                    <input
                        type="text"
                        placeholder="Raça"
                        className="CAinput n prs"
                        onChange={
                            (e) => { handleChange(animal, setAnimal, "raca", e.target.value) }
                        }
                        value={animal.raca}
                    />
                    <select
                        className="CAselect s"
                        onChange={
                            (e) => { handleChange(animal, setAnimal, "sexo", e.target.value) }
                        }
                        value={animal.sexo ?? "0"}
                    >
                        <option value="0" hidden>Sexo</option>
                        <option value="1">Macho</option>
                        <option value="2">Fêmea</option>
                    </select>
                </div>
            </div>
            <div className="CAdButtons">
                <input
                    type="button"
                    value="Cadastrar"
                    className="CAbutton"
                    onClick={() => { 
                        CadastrarAnimal() 
                    }}
                />
            </div>
        </div>
    )
}
export default CadastroAnimal