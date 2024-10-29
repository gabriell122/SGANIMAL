import { useEffect } from "react";
import { useState } from "react";
import adotar from "../../../img/svg/animal.svg"
import ConnApi from "../../../service/conn/connApi";
import AdotarAnimal from "../../../components/forms/adotarAnimal"
import CalcularIdade from "../../../service/idade/calcularIdade"
import { ErrorApi } from "../../../service/swalAlert/swal";

const AnimalAdocao = ({user}) => {
    const [animal, setAnimal] = useState([])
    const [data, setData] = useState(null)
    const [request, setRequest] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await ConnApi.get("/animaisAdocao")
                setAnimal(res.data.data)
            } catch (error) {
                ErrorApi();
                console.log(error);
            }
        }
        fetchData()
    }, [request])


    const OpenModal = (e, id) => {
        console.log(e);
        const dModal = document.getElementById(`${id}`)
        dModal.showModal()
        e = { ...e, newDono: "1" }
        setData(e)
    }

    const Animais = () => {
        return (
            animal.map((animal) => {
                return (
                    <tr className="SAtLine" key={animal.ani_id}>
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
                        <td className="SAtItem">
                            <img
                                src={adotar}
                                alt="Adotar Animal"
                                className="SAtIcon"
                                onClick={
                                    () => OpenModal(animal, "dAdotarAnimal")
                                }
                            />
                        </td>
                    </tr>
                )
            })
        )
    }

    return (
        <>
            <table className="SAtable">
                <thead className="SAtHead">
                    <tr className="SAtLine">
                        <th className="SAtItem w3">
                            Nome
                        </th>
                        <th className="SAtItem w2">
                            Éspecie
                        </th>
                        <th className="SAtItem w2">
                            Raça
                        </th>
                        <th className="SAtItem w1">
                            Sexo
                        </th>
                        <th className="SAtItem w1">
                            Idade
                        </th>
                        <th className="SAtItem w2">
                            Adotar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Animais()}
                </tbody>
            </table>
            <dialog id="dAdotarAnimal">
                {data&&<AdotarAnimal id="AdotarAnimal" data={data} set={setRequest} user={user}/>}
            </dialog>
        </>
    )
}
export default AnimalAdocao