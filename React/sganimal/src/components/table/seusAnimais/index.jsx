import { useEffect } from "react";
import { useState } from "react";
import Deletar from "../../../img/svg/delet.svg";
import Donete from "../../../img/svg/donate.svg";
import Edit from "../../../img/svg/edit.svg";
import ConnApi from "../../../service/conn/connApi";
import DeletarAnimal from "../../forms/animal/deletar";
import DoarAnimal from "../../forms/animal/doar";
import EditarAnimal from "../../forms/editar/animal";

const SeusAnimais = () => {



    // const animal = [
    //     {
    //         id: 0,
    //         nome: "Mel",
    //         especie: "Gato",
    //         raca: "Siamês",
    //         data: "2000-01-01",
    //         sexo: 0
    //     },
    //     {
    //         id: 1,
    //         nome: "Amarelinho",
    //         especie: "Gato",
    //         raca: "Amarelo",
    //         data: "2000-01-01",
    //         sexo: 1
    //     },
    //     {
    //         id: 2,
    //         nome: "Preta",
    //         especie: "Gato",
    //         raca: "Carijo",
    //         data: "2010-01-01",
    //         sexo: 0
    //     },
    //     {
    //         id: 3,
    //         nome: "Betove",
    //         especie: "Cachorro",
    //         raca: "Vira-Lata",
    //         data: "2000-01-02",
    //         sexo: 1
    //     },
    // ]
    const [animal, setAnimal] = useState([])
    const [request, setRequest] = useState(true)
    const [data, setData] = useState({})
    const calcularIdade = (dataNascimento) => {
        // Obtendo a data atual
        var dataAtual = new Date();

        // Obtendo a data de nascimento do usuário
        var anoNascimento = dataNascimento.getFullYear();
        var mesNascimento = dataNascimento.getMonth();
        var diaNascimento = dataNascimento.getDate();

        // Obtendo a data atual
        var anoAtual = dataAtual.getFullYear();
        var mesAtual = dataAtual.getMonth();
        var diaAtual = dataAtual.getDate();

        // Calculando a idade
        var idade = anoAtual - anoNascimento;

        // Verificando se o aniversário já ocorreu este ano
        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }

        return idade;
    }

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
                                {calcularIdade(new Date(animal.ani_nasc))} Anos
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
                {/* <EditarAnimal id="EditarAnimal" data={data} set={setRequest} /> */}
            </dialog>
            <dialog id="dDeletarAnimal">
                <DeletarAnimal id="DeletarAnimal" data={data} set={setRequest} />
            </dialog>
            <dialog id="dDoarAnimal">
                <DoarAnimal id="DoarAnimal" data={data} set={setRequest} />
            </dialog>

        </>
    )



}
export default SeusAnimais