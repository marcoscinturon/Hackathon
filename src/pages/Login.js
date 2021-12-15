import "./estilos/Login.css"
import vector_login from "./assets/pngegg.png"

const Login = () => {
    return (
        <div>
            <nav id="landing_navbar"></nav>
            <div>
                <div id="landing_navbar">
                    <nav id="nav_drawer" ><img src={vector_login} alt="three branches" id="navbar_logo" />
                    </nav>
                    <div id="registro">
                        <div class="registro">
                            <h2 id="subb">bienvenido de nuevo</h2>
                            <h1 id="titulo">Iniciar sesión en tu cuenta</h1>
                            <h3>Correo</h3>
                            <input id="la" type="text" placeholder="Correo" />
                            <h3>Contraseña</h3>
                            <input id="la" type="password" placeholder="Contraseña" />
                            <button id="btn_iniciar">
                                <a href="iniciar" >Iniciar</a>
                            </button>
                            <button id="btn_volver">
                                <a href="/" id="link_volver">Volver</a>
                            </button>

                            <a href="/register" id="link_volver1">¿No tiene una cuenta? Registrarse</a>
                        </div>
                        <h2 id="grupo">Proyecto Amazonas Grupo18</h2>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login