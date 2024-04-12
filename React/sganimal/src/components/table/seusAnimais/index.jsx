import { useState } from "react";
import Deletar from "../../../img/svg/delet.svg";
import Donete from "../../../img/svg/donate.svg";
import Edit from "../../../img/svg/edit.svg";
import EditarAnimal from "../../forms/editar/animal";

const SeusAnimais = () => {
    const animal = [
        {
            id: 0,
            nome: "Mel",
            especie: "Gato",
            raca: "Siamês",
            data: "2000-01-01",
            sexo: 0
        },
        {
            id: 1,
            nome: "Amarelinho",
            especie: "Gato",
            raca: "Amarelo",
            data: "2000-01-01",
            sexo: 1
        },
        {
            id: 2,
            nome: "Preta",
            especie: "Gato",
            raca: "Carijo",
            data: "2010-01-01",
            sexo: 0
        },
        {
            id: 3,
            nome: "Betove",
            especie: "Cachorro",
            raca: "Vira-Lata",
            data: "2000-01-02",
            sexo: 1
        },
    ]
    const [modal , setModal] = useState("")
    const [data , setData]= useState({})
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

    const ModalEditar = (animal)=>{
        setData(animal)
        setModal("Editar")
    }


    const Animal = () => {

        return (
            animal.map(
                animal => {
                    return (
                        <tr className="SAtLine">
                            <td className="SAtItem">
                                {animal.nome}
                            </td>

                            <td className="SAtItem">
                                {animal.especie}
                            </td>
                            <td className="SAtItem">
                                {animal.raca}
                            </td>
                            <td className="SAtItem">
                                {
                                    animal.sexo == 0
                                        ? "Fêmea"
                                        : "Macho"
                                }
                            </td>
                            <td className="SAtItem">
                                {calcularIdade(new Date(animal.data))} Anos
                            </td>
                            <td className="SAtItem">
                                <img src={Edit} className="SAtIcon"
                                    onClick={() => {
                                        ModalEditar(animal)
                                    }}
                                />
                                <img src={Deletar} className="SAtIcon"
                                    onClick={() => {
                                        console.log(animal.id)
                                    }}
                                />
                                <img src={Donete} className="SAtIcon"
                                    onClick={() => {
                                        console.log(animal.id)
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
                {Animal()}
            </tbody>
            {
            modal == "Editar"
            ?<EditarAnimal data={data}/>
            :""
            }
        </table>
    )
}
export default SeusAnimais