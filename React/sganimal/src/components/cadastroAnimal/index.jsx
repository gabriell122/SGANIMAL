import "./style.css";
const CadastroAnimal = ( ) => {
    return(
        <div className="CadastroAnimal">
            <div className="CAdtitulo">
                <p className="CAtitulo">
                    Cadastrar Animal
                </p>
            </div>
            <div className="CAdnome">
                <input type="text" className="CAinput" placeholder="Nome" />
            </div>
            <div className="CAden">
                <div className="CAdespecie">
                    <input type="text" className="CAinput" placeholder="Espécie"/>
                </div>
                <div className="CAdnasc">
                    <input type="text" className="CAinput" placeholder="Data de Nasc."/>
                </div>
            </div>
            <div className="CAdbutton">
                <input type="button" value="Cadastrar" className="CAbutton"/>
            </div>
        </div>
    )
}
export default CadastroAnimal;