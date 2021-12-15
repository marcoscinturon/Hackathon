import "./estilos/Home.css"
import Logo from "./assets/logo.png"
import image_presentation from "./assets/image_presentation.png"
console.log("hola mundo")
const Home = () => {
    return(
        <div>
            <nav>

                <div class="navbar">
                    <img src={Logo} alt="website logo" />
                    <a href="/login"> Iniciar sesión</a>
                    <a href="/dashboard"> Dashboard</a>
                    <a href="/crear_senal"> Crear Señal</a>
                    <a href="/"> Home</a>

                </div>
                
            </nav>

            <section class="presentation-wrapper">
                <div class="block1-presentation">
                    <ul id="list_intro">
                    <p class="bold-22px"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quish nibh sed sem
                        imperdiet.
                    </p>
                    <p class="light-14px"> Praesent quish nibh sed sem lorem ipsum
                        imperdiet.
                    </p>
                    </ul>
                    <button class="login" type="button">
                        <a href="/login" id="link_volver">Iniciar sesión</a>
                    </button>
                    <button class="sign_on" type="button">
                        <a href="/register" id="link_volver">Registrarse</a>
                    </button>
                </div>

                <div class="block2-presentation">
                    <img src={ image_presentation } alt="three for presentation" />
                </div>
            </section>
        </div>
    )

}

export default Home