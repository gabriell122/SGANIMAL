import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Animais from "../../components/animais";
import CadastroAnimal from "../../components/cadastroAnimal";
import Nav from "../../components/nav";
import "./style.css";
const Animal = ({ user, setUser }) => {
    const [from, setForm] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [])

    useEffect(() => {
        if (from == "Sair") {
            setUser("");
            navigate("/")
        }
    }, [from])

    return (
        <div className="Animal">
            <Nav
                setForm={setForm}
                user={user}
            />
            <div className="AnimalBody">
                <div className="AAnimal">
                    {
                        from == "Cadastrar"
                            ? <CadastroAnimal user = { user }/>
                            : <Animais />
                    }
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor, eveniet officiis asperiores eius ea iure similique alias hic, reprehenderit ad voluptatem nulla pariatur nisi, distinctio tenetur ullam? Adipisci, commodi.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsam enim nam quasi iure distinctio molestias, illo necessitatibus reprehenderit minus voluptatibus consequatur? Beatae consectetur, pariatur vel perferendis eos ipsa quidem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam impedit fugit, eum maiores labore soluta quam maxime nostrum sapiente modi, ea pariatur sequi laudantium assumenda qui ducimus. Tempore, quod.lore
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor, eveniet officiis asperiores eius ea iure similique alias hic, reprehenderit ad voluptatem nulla pariatur nisi, distinctio tenetur ullam? Adipisci, commodi.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsam enim nam quasi iure distinctio molestias, illo necessitatibus reprehenderit minus voluptatibus consequatur? Beatae consectetur, pariatur vel perferendis eos ipsa quidem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam impedit fugit, eum maiores labore soluta quam maxime nostrum sapiente modi, ea pariatur sequi laudantium assumenda qui ducimus. Tempore, quod.lore
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor, eveniet officiis asperiores eius ea iure similique alias hic, reprehenderit ad voluptatem nulla pariatur nisi, distinctio tenetur ullam? Adipisci, commodi.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsam enim nam quasi iure distinctio molestias, illo necessitatibus reprehenderit minus voluptatibus consequatur? Beatae consectetur, pariatur vel perferendis eos ipsa quidem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam impedit fugit, eum maiores labore soluta quam maxime nostrum sapiente modi, ea pariatur sequi laudantium assumenda qui ducimus. Tempore, quod.lore
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor, eveniet officiis asperiores eius ea iure similique alias hic, reprehenderit ad voluptatem nulla pariatur nisi, distinctio tenetur ullam? Adipisci, commodi.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsam enim nam quasi iure distinctio molestias, illo necessitatibus reprehenderit minus voluptatibus consequatur? Beatae consectetur, pariatur vel perferendis eos ipsa quidem?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam impedit fugit, eum maiores labore soluta quam maxime nostrum sapiente modi, ea pariatur sequi laudantium assumenda qui ducimus. Tempore, quod.lore
                </div>
            </div>
        </div>
    )
}
export default Animal;