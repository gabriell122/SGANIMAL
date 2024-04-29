import { useEffect } from "react";
import { useState } from "react";
import formatDate from "../../../service/date/formatDate";

const DeletarAnimal = (data) => {
    const [animal, setAnimal] = useState({
        id: "",
        nome: "",
        data: "",
        especie: "",
        raca: "",
        sexo: ""
    })


    
    useEffect(() => {
        setAnimal({
            "id": data.data.ani_id,
            "nome": data.data.ani_nome,
            "data": data.data.ani_nasc,
            "especie": data.data.ani_especie,
            "raca": data.data.ani_raca,
            "sexo": data.data.ani_sexo.data
        })
        console.log(animal);
    }, [animal])

    const DeletarAnimal = () => {
        console.log(animal);
        console.log("Animal Excluido")
    }

    const CloseModal = ()=>{
        const dialog = document.getElementById("dDeletarAnimal")
        dialog.close()
    }


    return (
        <>
            {/* <div className="EditarAnimal" id="EditarAnimal">
                <div className="EAdTitle">
                    <p className="EApTitle">
                        Apagar Animal
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
                                value={animal.data}
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
                    <input type="button" value="Apagar" className="EAbutton r"
                        onClick={() => { DeletarAnimal() }}
                    />
                    <input type="button" value="Calcelar" className="EAbutton"
                        onClick={() => { CloseModal() }}
                    />
                </div>
            </div> */}
        </>
    )
}
export default DeletarAnimal