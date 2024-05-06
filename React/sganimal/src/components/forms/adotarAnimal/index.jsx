import { useEffect, useState } from "react"
import CalcularIdade from "../../../service/idade/calcularIdade";
import ConnApi from "../../../service/conn/connApi"
const AdotarAnimal = ({ data, set ,user}) => {

    const [animal, setAnimal] = useState({
        nome: "",
        data: "",
        especie: "",
        raca: "",
        sexo: "",
        dono: "",
        dNome: "",
        dTelefone: "",
        newDono: ""
    })
    useEffect(() => {
        setAnimal({
            "ani": data.ani_id,
            "nome": data.ani_nome,
            "nasc": data.ani_nasc,
            "especie": data.ani_especie,
            "raca": data.ani_raca,
            "sexo": data.ani_sexo.data,
            "dono": data.usu_id,
            "dNome": data.usu_nome,
            "dTelefone": data.usu_telefone,
            "newDono": user.usu_id
        });
    }, [data])
    


    const CloseModal = () => {
        const dialog = document.getElementById("dAdotarAnimal")
        dialog.close()
    }

    const Adotar = async () => {
        try {
            const res = await ConnApi.patch("/animaisAdotar", animal)
            if (res.data.confirma) {
                console.log("Animal adotado");
                CloseModal()
                set(prev => !prev)
            } else {
                console.log(res.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="AdotarAnimal">
            <div className="AAdTile">
                <p className="AApTitle">
                    Adotar Animal
                </p>
            </div>
            <div className="AAdAnimal mb">
                <div className="AAdATitle">
                    <p className="AApATitle">
                        Dados do Animal
                    </p>
                </div>
                <div className="AAdAInputs">
                    <div className="AAdALine">
                        <div className="AAdAInput wb mb">
                            <p className="AAdAName">Nome</p>
                            <input type="text" className="AAAInput" value={animal.nome} disabled />
                        </div>
                        <div className="AAdAInput">
                            <p className="AAdAName">Idade</p>
                            <input type="text" className="AAAInput" value={CalcularIdade(new Date(animal.nasc))+" Anos"} disabled />
                        </div>
                    </div>
                    <div className="AAdALine l3">
                        <div className="AAdAInput ms">
                            <p className="AAdAName">Éspecie</p>
                            <input type="text" className="AAAInput" value={animal.especie} disabled />
                        </div>
                        <div className="AAdAInput ms">
                            <p className="AAdAName">Raça</p>
                            <input type="text" className="AAAInput" value={animal.raca} disabled />
                        </div>
                        <div className="AAdAInput ws">
                            <p className="AAdAName">Sexo</p>
                            <input type="text" className="AAAInput" value={
                                animal.sexo == 0
                                    ? "Fêmea"
                                    : "Macho"
                            } disabled />
                        </div>
                    </div>
                </div>
                <div className="AAdDono">
                    <div className="AAdATitle">
                        <p className="AApATitle">
                            Dados do Dono
                        </p>
                    </div>
                    <div className="AAdALine">
                        <div className="AAdAInput wm mbb">
                            <p className="AAdAName">Nome</p>
                            <input type="text" className="AAAInput" value={animal.dNome}  disabled />
                        </div>
                        <div className="AAdAInput wm">
                            <p className="AAdAName">Telefone</p>
                            <input type="text" className="AAAInput" value={animal.dTelefone} disabled />
                        </div>
                    </div>
                </div>
            </div>
            <div className="AAdButtons">
                <input type="button" value="Adotar" className="AAbunttom mr" onClick={()=>{Adotar()}}/>
                <input type="button" value="Voltar" className="AAbunttom" onClick={() => { CloseModal() }} />
            </div>
        </div>
    )
}
export default AdotarAnimal