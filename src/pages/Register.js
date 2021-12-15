import "./estilos/Register.css"
import image_register from "./assets/Daco_6009829.png"

const Register = () => {
    return (
        <body>
            <nav id="landing_navbar">
                <nav id="nav_drawer" ><img src={ image_register } alt="three image register" id="navbar_logo"/>
                </nav>
                <nav id="registro">
                    <div class="registro">
                        <h1 id="titulo">REGISTRATE</h1>
                        <h2 id="sub">Diligencir los siguientes campos</h2>
                        <h3>Nombre de usuario</h3>
                        <input id="la" type="text" placeholder="Minimo 5 caracteres"/>
                            <h3>Nombre</h3>
                            <input id="lo" type="text" placeholder="Nombre"/>
                                <h3 id="apellido">Apellidos</h3>
                                <input id="Apellidos" type="text" placeholder="Apellidos"/>
                                    <h3>Correo</h3>
                                    <input id="la" type="text" placeholder="Correo"/>
                                        <h3>Contraseña</h3>
                                        <input id="la" type="password" placeholder="Contraseña"/>
                                            <h3>Verificar contraseña</h3>
                                            <input id="la" type="password" placeholder="Vericar contraseña"/>
                                                <button id="btn_enviar_registro">registrar</button>
                                                <div class="volver">
                                                    <button id="btn_volver">
                                                        <a href="/" id="link_volver">volver</a>
                                                    </button>
                                                </div>
                                                <h2 id="grupo">Proyecto Amazonas Grupo18</h2>
                    </div>
                </nav>
            </nav>
        </body>
        )
        
}

export default Register