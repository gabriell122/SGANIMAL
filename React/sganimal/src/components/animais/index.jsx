import { useEffect, useState } from "react";
import Api from "../../service/api";
import "./style.css";
const Animais = () => {
    const [animais, setAnimais] = useState("");
    useEffect(
        () => {
            const data = async () => {
                try {
                    const res = await Api.get("/listar");
                    setAnimais(res.data.data);
                } catch (err) {
                    console.log(err);
                }
            }
            data()
        }, []
    )

    return (
        <div className="Animais">
            <table className="Atabela">
                <thead className="AtBodyT"  >
                    <tr className="AttLine">
                        <th className="Attlc1">
                            Animais
                        </th>
                    </tr>
                    <tr className="AttLine2">
                        <th className="Attlc">
                            Nome
                        </th>
                        <th className="Attlc">
                            Espécie
                        </th>
                        <th className="Attlc">
                            Nascimento
                        </th>
                    </tr>

                </thead>
                <tbody className="AtBody">
                    {
                        animais
                            ?
                            animais.map((e, i) => {
                                return (
                                    <tr className="AttLine"
                                        style={i % 2
                                            ? { "background-color": "#E9E9E9" }
                                            : { "background-color": "#fff" }
                                        }
                                    >
                                        <td className="Attlc">
                                            {e.ani_nome}
                                        </td>
                                        <td className="Attlc">
                                            {e.ani_especie}
                                        </td>
                                        <td className="Attlc">
                                            {
                                                (() => {
                                                    const parte = e.ani_nasc.split("T");
                                                    const partes = parte[0].split("-");
                                                    return  partes[2] + "-" + partes[1] + "-" + partes[0];

                                                    
                                                })() // Chama a função imediatamente
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            null
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Animais;