import { useEffect } from "react";
import { useState } from "react";
import ConnApi from "../../../service/conn/connApi";
import formatDate from "../../../service/date/formatDate";
import { ErrorApi, ErrorDados } from "../../../service/swalAlert/swal";
const DoarAnimal = ({ data, set }) => {
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

    const DoarAnimal = async() => {
        try {
            const res = await ConnApi.patch("/animaisDoacao", animal)
            if (res.data.confirma) {
                console.log("Animal enviado para doação");
                CloseModal()
                set(prev => !prev)
            } else {
                if(res.status == 201){
                    ErrorDados()
                }
                ErrorApi()
            }
        } catch (error) {
            ErrorApi()
            console.log(error);
        }
    }

    const CloseModal = ()=>{
        const dialog = document.getElementById("dDoarAnimal")
        dialog.close()
    }


    return (
        <>
            <div className="EditarAnimal" id="EditarAnimal">
                <div className="EAdTitle">
                    <p className="EApTitle">
                        Doar Animal
                    </p>
                </div>
                <div className="EAdInputs">
                    <div className="EAdLine DN">
                        <input type="text" readOnly className="EAinput DN b"
                            value={animal.nome}
                        />
                        <div className="EAdDataInput">
                            <p className="EApDN">Data de nascimento</p>
                            <input type="date" readOnly className="EAinput DN n"
                                value={formatDate(animal.nasc)}
                            />
                        </div>
                    </div>
                    <div className="EAdLine">
                        <input type="text" readOnly className="EAinput n prs"
                            value={animal.especie}
                        />
                        <input type="text" readOnly className="EAinput n prs"
                            value={animal.raca}
                        />
                        <select readOnly  className="EAselect s" defaultValue="0">
                            <option value="0">
                                {
                                    animal.sexo == 0
                                        ? "Fêmea"
                                        : "Macho"
                                    
                                }
                            </option>
                        </select>
                    </div>
                </div>
                <div className="EAdButtons">
                    <input type="button" value="Doar Animal" className="EAbutton r"
                        onClick={() => { DoarAnimal() }}
                    />
                    <input type="button" value="Calcelar" className="EAbutton"
                        onClick={() => { CloseModal() }}
                    />
                </div>
            </div>
        </>
    )
}
export default DoarAnimal