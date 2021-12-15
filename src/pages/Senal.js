import "./estilos/Senal.css"
import Logo from "./assets/logo.png"

const Senal = () => {
    return(

        <div>
            <nav>

            <div class="navbar">
                <img src={Logo} alt="website logo" />
                <a href="/dashboard"> Dashboard</a>
                <a href="/crear_senal"> Crear Señal</a>
                <a href="/"> Home</a>
            </div>
        
            </nav>

            <div id="senal" > 

                <form>
                    <ul id="formulario">

                        <li> <select name="señal">
                            <option value="0">¿Qué tipo de señal crearás?--</option> 
                            <option value="1">Mala disposición de desechos sólidos</option> 
                            <option value="2">Contaminación del agua</option>
                            <option value="3">Contaminación del aire</option> 
                            <option value="4">Tala indiscriminada</option> 
                        </select> </li>
                        <br/>
                        <li> <input type="text" name="departamento" placeholder="Departamento" size="30"/> </li>
                        <br/>
                        <li> <input type="text" name="municipio" placeholder="Municipio" size="30"/> </li>
                        <br/>
                        <li> <input type="text" name="descripción" maxLength="300" placeholder="Breve descripción (300 caracteres)" size="30"/> </li>
                        <br/>
                        <li> <label> Registrar ubicación </label> <button className="botonMapa" type="button"> Mapa</button> </li>
                    <br/>

                        <li><button className="botonEnviar" type="submit">Enviar</button></li>
                    </ul>
                </form>

                

            </div>
        </div>
    )

}

export default Senal