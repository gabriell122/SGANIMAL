import { useEffect } from "react";
import { useState } from "react";
import Deletar from "../../../img/svg/delet.svg";
import Donete from "../../../img/svg/donate.svg";
import Edit from "../../../img/svg/edit.svg";
import ConnApi from "../../../service/conn/connApi";
import DeletarAnimal from "../../forms/animal/deletar";
import DoarAnimal from "../../forms/animal/doar";
import EditarAnimal from "../../forms/editar/animal";
import CalcularIdade from "../../../service/idade/calcularIdade"

const SeusAnimais = () => {

    const [animal, setAnimal] = useState([])
    const [request, setRequest] = useState(true)
    const [data, setData] = useState(null)

    const OpenModal = (animal, id) => {
        const dModal = document.getElementById(`${id}`)
        dModal.showModal()
        setData(animal)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await ConnApi.get(`/seusAnimais/1`);
                setAnimal(res.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [request])

    const Animal = () => {

        return (
            animal.map(
                animal => {
                    return (
                        <tr className="SAtLine" key={animal.id}>
                            <td className="SAtItem">
                                {animal.ani_nome}
                            </td>

                            <td className="SAtItem">
                                {animal.ani_especie}
                            </td>
                            <td className="SAtItem">
                                {animal.ani_raca}
                            </td>
                            <td className="SAtItem">
                                {
                                    animal.ani_sexo.data == 0
                                        ? "Fêmea"
                                        : "Macho"
                                }
                            </td>
                            <td className="SAtItem">
                                {CalcularIdade(new Date(animal.ani_nasc))} Anos
                            </td>
                            <td className="SAtItem icons">
                                <img src={Edit} className="SAtIcon"
                                    onClick={() => {
                                        OpenModal(animal, "dEditarAnimal")
                                    }}
                                />
                                <img src={Deletar} className="SAtIcon"
                                    onClick={() => {
                                        OpenModal(animal, "dDeletarAnimal")
                                    }}
                                />
                                <img src={Donete} className="SAtIcon"
                                    onClick={() => {
                                        OpenModal(animal, "dDoarAnimal")
                                    }}
                                />
                            </td>
                        </tr>
                    )
                }
            )
        )
    }


    return (
        <>
            <table className="SAtable">

                <thead className="SAtHead">
                    <tr className="SAtLine">
                        <th className="SAtItem w3" >
                            Nome
                        </th>
                        <th className="SAtItem w2" >
                            Éspecie
                        </th>
                        <th className="SAtItem w2" >
                            Raça
                        </th>
                        <th className="SAtItem w1" >
                            Sexo
                        </th>
                        <th className="SAtItem w1" >
                            Idade
                        </th>
                        <th className="SAtItem w2">
                        </th>
                    </tr>
                </thead>
                <tbody className="SAtBody">
                    {
                        animal
                            ? Animal()
                            : ""
                    }
                </tbody>

            </table>
            <dialog id="dEditarAnimal">
                {   
                    data&&<EditarAnimal id="EditarAnimal" data={data} set={setRequest} />
                }
            </dialog>
            <dialog id="dDeletarAnimal">
                {
                    data&&<DeletarAnimal id="DeletarAnimal" data={data} set={setRequest} />
                }
            </dialog>
            <dialog id="dDoarAnimal">
                {
                    data&&<DoarAnimal id="DoarAnimal" data={data} set={setRequest} />
                }
            </dialog>

        </>
    )



}
export default SeusAnimais