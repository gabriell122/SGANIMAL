import { useState } from "react";
import Api from "../../service/api/index";
import "./style.css";

const CadastroAnimal = ( {user}) => {
    const [aniNome, setAniNome] = useState("");
    const [aniEspecie, setAniEspecie] = useState("");
    const [aniNasc, setAniNasc] = useState("");

    const CadastrarAnimal = async ()=>{
        const data = {
            "dono": user.usu_id, 
            "nome": aniNome, 
            "nasc": aniNasc, 
            "especie": aniEspecie
        }
        console.log(data);
        // try {
        //     const res = await Api.post("/cadastrarAnimal",data);
        //     console.log(res);
        // } catch (error) {
        //     console.log(error);
        // }
    }
    return(
        <div className="CadastroAnimal">
            <div className="CAdtitulo">
                <p className="CAtitulo">
                    Cadastrar Animal
                </p>
            </div>
            <div className="CAdnome">
                <input 
                    type="text" 
                    className="CAinput" 
                    placeholder="Nome"
                    onChange={(e)=>{setAniNome(e.target.value)}}
                />
            </div>
            <div className="CAden">
                <div className="CAdespecie">
                    <input 
                        type="text" 
                        className="CAinput" 
                        placeholder="Espécie"
                        onChange={(e)=>{setAniEspecie(e.target.value)}}
                    />
                </div>
                <div className="CAdnasc">
                    <input 
                        type="date" 
                        className="CAinput" 
                        placeholder="Data de Nasc."
                        onChange={(e)=>{setAniNasc(e.target.value)}}
                        value={aniNasc}
                    />
                </div>
            </div>
            <div className="CAdbutton">
                <input 
                    type="button" 
                    value="Cadastrar" 
                    className="CAbutton"
                    onClick={()=>{CadastrarAnimal()}}
                />
            </div>
        </div>
    )
}
export default CadastroAnimal;