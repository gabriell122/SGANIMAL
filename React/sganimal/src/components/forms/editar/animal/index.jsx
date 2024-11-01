import { useEffect } from "react";
import { useState } from "react";
import handleChange from "../../../../service/change/handleChange";
import ConnApi from "../../../../service/conn/connApi"
import formatDate from "../../../../service/date/formatDate"
import { ErrorApi, ErrorDados } from "../../../../service/swalAlert/swal";
const EditarAnimal = ({ data, set }) => {


    const [animal, setAnimal] = useState({
        nome: "",
        data: "",
        especie: "",
        raca: "",
        sexo: ""
    })

    useEffect(() => {
            setAnimal({
              "ani": data.ani_id,
              "nome": data.ani_nome,
              "nasc": data.ani_nasc,
              "especie": data.ani_especie,
              "raca": data.ani_raca,
              "sexo": data.ani_sexo.data
            });
    }, [data])

    const EditarAnimal = async () => {
        try {
            const res = await ConnApi.put("/editarAnimais", animal)
            if (res.data.confirma) {
                console.log("Animal alterado com susceso");
                CloseModal()
                set(prev => !prev)
            } else {
                if(res.status == 201){
                    ErrorDados()
                }
                ErrorApi()
            }
        } catch (error) {
            ErrorApi();
            console.log(error);
        }
    }

    const CloseModal = () => {
        const dialog = document.getElementById("dEditarAnimal")
        dialog.close()
    }

    return (
        <div className="EditarAnimal" id="EditarAnimal">
            <div className="EAdTitle">
                <p className="EApTitle">
                    Editar Animal
                </p>
            </div>
            <div className="EAdInputs">
                <div className="EAdLine DN">
                    <input type="text" placeholder="Nome" className="EAinput DN b"
                        onChange={
                            (e) => { handleChange(animal, setAnimal, "nome", e.target.value) }
                        }
                        value={animal.nome}
                    />
                    <div className="EAdDataInput">
                        <p className="EApDN">Data de nascimento</p>
                        <input type="date" className="EAinput DN n"
                            onChange={
                                (e) => { handleChange(animal, setAnimal, "nasc", e.target.value) }
                            }
                        value={formatDate(animal.nasc)}

                        />
                    </div>
                </div>
                <div className="EAdLine">
                    <input type="text" placeholder="Éspecie" className="EAinput n prs"
                        onChange={
                            (e) => { handleChange(animal, setAnimal, "especie", e.target.value) }
                        }
                        value={animal.especie}
                    />
                    <input type="text" placeholder="Raça" className="EAinput n prs"
                        onChange={
                            (e) => { handleChange(animal, setAnimal, "raca", e.target.value) }
                        }
                        value={animal.raca}
                    />
                    <select className="EAselect s" defaultValue="0"
                        onChange={
                            (e) => { handleChange(animal, setAnimal, "sexo", e.target.value) }
                        }
                        value={
                            animal.sexo == 0
                                ? 0
                                : 1
                        }
                    >
                        <option value="2" hidden>Sexo</option>
                        <option value="1">Macho</option>
                        <option value="0">Fêmea</option>
                    </select>
                </div>
            </div>
            <div className="EAdButtons">
                <input type="button" value="Editar" className="EAbutton r"
                    onClick={() => { EditarAnimal() }}
                />
                <input type="button" value="Calcelar" className="EAbutton"
                    onClick={() => { CloseModal() }}
                />
            </div>
        </div>
    )
}
export default EditarAnimal