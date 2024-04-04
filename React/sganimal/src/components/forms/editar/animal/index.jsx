const EditarAnimal = () => {
    return (
        <div className="EditarAnimal">
            <div className="EAdTitle">
                <p className="EApTitle">
                    Editar Animal
                </p>
            </div>
            <div className="EAdInputs">
                <div className="EAdLine DN">
                    <input type="text" placeholder="Nome" className="EAinput DN b" />
                    <div className="EAdDataInput">
                        <p className="EApDN">Data de nascimento</p>
                        <input type="date" className="EAinput DN n" />
                    </div>
                </div>
                <div className="EAdLine">
                    <input type="text" placeholder="Éspecie" className="EAinput n prs" />
                    <input type="text" placeholder="Raça" className="EAinput n prs" />
                    <select className="EAselect s" defaultValue="0">
                        <option value="0" hidden>Sexo</option>
                        <option value="1">Macho</option>
                        <option value="2">Fêmea</option>
                    </select>
                </div>
            </div>
            <div className="EAdButtons">
                <input type="button" value="Editar" className="EAbutton r" />
                <input type="button" value="Excluir Animal" className="EAbutton" />
            </div>
        </div>
    )
}
export default EditarAnimal