import { useEffect } from "react";
import { useState } from "react";
const DoarAnimal = (data) => {
    const [animal, setAnimal] = useState({
        nome: "",
        data: "",
        especie: "",
        raca: "",
        sexo: ""
    })


    useEffect(() => {
        setAnimal({
            "nome": data.data.nome,
            "data": data.data.data,
            "especie": data.data.especie,
            "raca": data.data.raca,
            "sexo": data.data.sexo
        })
    }, [data])


    const DoarAnimal = () => {
        console.log("Animal colocado para doação")
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