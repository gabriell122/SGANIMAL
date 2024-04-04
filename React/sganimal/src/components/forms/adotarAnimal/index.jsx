const AdotarAnimal = () => {
    
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
                            <input type="text" className="AAAInput" value="Mel" disabled />
                        </div>
                        <div className="AAdAInput">
                            <p className="AAdAName">Idade</p>
                            <input type="date" className="AAAInput" value="2010-01-10" disabled />
                        </div>
                    </div>
                    <div className="AAdALine l3">
                        <div className="AAdAInput ms">
                            <p className="AAdAName">Éspecie</p>
                            <input type="text" className="AAAInput" value="Gato" disabled />
                        </div>
                        <div className="AAdAInput ms">
                            <p className="AAdAName">Raça</p>
                            <input type="text" className="AAAInput" value="Siâmes" disabled />
                        </div>
                        <div className="AAdAInput ws">
                            <p className="AAdAName">Sexo</p>
                            <input type="text" className="AAAInput" value="Fêmea" disabled />
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
                            <input type="text" className="AAAInput" value="Gabriell" disabled />
                        </div>
                        <div className="AAdAInput wm">
                            <p className="AAdAName">Telefone</p>
                            <input type="text" className="AAAInput" value="(18)99783-7196" disabled />
                        </div>
                    </div>
                </div>
            </div>
            <div className="AAdButtons">
                <input type="button" value="Adotar" className="AAbunttom mr" />
                <input type="button" value="Voltar" className="AAbunttom" />
            </div>
        </div>
    )
}
export default AdotarAnimal