import { useState } from "react"
import handleChange from "../../../../service/change/handleChange"
import ConnApi from "../../../../service/conn/connApi"
const CadastroUsuario = ({ set }) => {
    const [form, setForm] = useState("0")
    const [user, setUser] = useState({
        email: "",
        pass: "",
        nome: "",
        telefone: "",
        nascimento: "",
        rua: "",
        num: "",
        bairo: "",
        cidade: "",
        estado: ""
    })
    const CadastrarUsuario = async ()=>{
        try {
            console.log(user);
            const res = await ConnApi.post("/cadastrarUsuario", user);
            if (res.data.confirma) {
                console.log("cadastro realizado com sus");
                set("Login")
            }else{
                console.log(res.data.data)
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        form == "0"
            ?
            <div className="CadastrarUsuario" >
                <div className="CudTitle">
                    <p className="CupTitle">
                        Cadastre-se no SGA
                    </p>
                </div>
                <div className="CudInputs">
                    <input type="text" className="CuInput" placeholder="Nome"
                        onChange={(e) => {
                            handleChange(user, setUser, "nome", e.target.value)
                        }}
                        value={user.nome}
                    />
                    <input type="email" className="CuInput" placeholder="Email"
                        onChange={(e) => {
                            handleChange(user, setUser, "email", e.target.value)
                        }}
                        value={user.email}
                    />
                    <input type="password" className="CuInput" placeholder="Senha"
                        onChange={(e) => {
                            handleChange(user, setUser, "pass", e.target.value)
                        }}
                        value={user.pass}
                    />
                </div>
                <div className="CudButtons">
                    <input type="button" value="Cadastrar" className="CuButton cadastrar"
                        onClick={() => {
                            setForm("1")
                        }}
                    />
                    <div className="CudLine"></div>
                    <div className="CudPLogin" >
                        <p className="CupRegistrar" onClick={() => { set("Login") }}>já tenho uma conta</p>
                    </div>
                </div>
            </div>
            :
            <div className="ConcluindoCadastro">
                <div className="CCdTitle">
                    <p className="CCpTitle">
                        Concluindo Cadastro
                    </p>
                </div>
                <div className="CCdInputs">
                    <div className="CCdLine top d">
                        <input type="text" className="CCinput b lb" placeholder="Rua"
                            onChange={(e) => {
                                handleChange(user, setUser, "rua", e.target.value)
                            }}
                            value={user.rua} />
                        <input type="text" className="CCinput" placeholder="Número"
                            onChange={(e) => {
                                handleChange(user, setUser, "num", e.target.value)
                            }}
                            value={user.num}
                        />
                    </div>
                    <div className="CCdLine top t">
                        <input type="text" className="CCinput ls" placeholder="Bairro"
                            onChange={(e) => {
                                handleChange(user, setUser, "bairo", e.target.value)
                            }}
                            value={user.bairo}
                        />
                        <input type="text" className="CCinput ls" placeholder="Cidade"
                            onChange={(e) => {
                                handleChange(user, setUser, "cidade", e.target.value)
                            }}
                            value={user.cidade}
                        />
                        <input type="text" className="CCinput s" placeholder="Estado"
                            onChange={(e) => {
                                handleChange(user, setUser, "estado", e.target.value)
                            }}
                            value={user.estado}
                        />
                    </div>
                    <div className="CCdLine dn">
                        <input type="text" className="CCinput b lb" placeholder="Telefone"

                            onChange={(e) => {
                                handleChange(user, setUser, "telefone", e.target.value)
                            }}
                            value={user.telefone}
                        />

                        <div className="CCdDN">
                            <p className="CCpDN">
                                Data de Nascimento
                            </p>
                            <input type="date" className="CCinput dn" placeholder="Data de Nasc."
                                onChange={(e) => {
                                    handleChange(user, setUser, "nascimento", e.target.value)
                                }}
                                value={user.nascimento}
                            />
                        </div>

                    </div>
                </div>
                <div className="CCdButtons">
                    <input type="button" value="Concluir" className="CCbuttom"
                        onClick={() => {
                            CadastrarUsuario()
                        }}
                    />
                </div>
            </div>
    )
}
export default CadastroUsuario