import React from "react";
import { useState } from "react";
import CadastroUsuario from "../../components/cadastroUsuario/parte1";
import CadastroUsuario2 from "../../components/cadastroUsuario/parte2";
import Login from "../../components/Login";
import Nav from "../../components/nav";
import "./style.css"


const Home = ( {setUser , user} ) =>{

    const [Form , setForm] = useState("Login");

    return(
        <div className = "Home">
            <Nav 
                setForm = { setForm } 
            />
            <div  className="Hhome">
                <section id="Top">
                {
                    Form == "Login"
                    ?<Login setForm = { setForm } setUser = { setUser }/>
                    :<CadastroUsuario setForm = { setForm }/>
                }
                </section>
                <section id="Bot">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti,     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti,     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quaerat vero iusto mollitia ab nobis, sapiente amet quidem. Delectus, vel? Debitis deleniti, velit eveniet voluptatibus harum dolore ut magni minus?
                </section>
            </div>            
        </div>
    )
}
export default Home;
