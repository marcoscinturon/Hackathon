import "./estilos/Dashboard.css"
import Logo from "./assets/logo.png"
import { useState } from 'react'
import {getDatos} from "../api/Datos"
import "bootstrap/dist/css/bootstrap.min.css"
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap"

const Dashboard = () =>{

    const [dropdown1, setdropdown1] = useState(false);

    const abrirCerrar1 = () =>{
        setdropdown1(!dropdown1)
    }


    const [dropdown2, setdropdown2] = useState(false);

    const abrirCerrar2 = () =>{
        setdropdown2(!dropdown2)
    }

    const [dropdown3, setdropdown3] = useState(false);

    const abrirCerrar3 = () =>{
        setdropdown3(!dropdown3)
    }

    const [dropdown4, setdropdown4] = useState(false);

    const abrirCerrar4 = () =>{
        setdropdown4(!dropdown4)
    }

    

    const mostrarImagen = () =>{
        getDatos().then(({data}) => {
            
            const {url} = data.images.original
            //console.log(url)
    
            const img = document.createElement("img")
            img.src = url
            img.className = "image_x"
            
            const src = document.getElementById("prueba");
            src.appendChild(img)
            //document.body.append(img)
            
        })
    }

    return (
        <div>
            <nav>

            <div class="navbar">
                <img src={Logo} alt="website logo" />
                <a href="/dashboard"> Dashboard</a>
                <a href="/crear_senal"> Crear Señal</a>
                <a href="/"> Home</a>

            </div>

            </nav>
            


        
        <div id="menu">

            <Dropdown isOpen={dropdown1} toggle={abrirCerrar1} size='lg'>
                <DropdownToggle caret>Ecosistemas</DropdownToggle>

                <DropdownMenu>
                    <DropdownItem onClick={()=> mostrarImagen()}>Superficie de humedales bajo la convención de Ramsar</DropdownItem>
                </DropdownMenu>

            </Dropdown>


            <Dropdown isOpen={dropdown2} toggle={abrirCerrar2} size='lg'>

                <DropdownToggle caret>Cobertura terrestre</DropdownToggle>

                <DropdownMenu>
                    <DropdownItem onClick={()=> mostrarImagen()}>Superficie de las áreas terrestres protegidas</DropdownItem>
                    <DropdownItem onClick={()=> mostrarImagen()}>Superficie de manglares</DropdownItem>
                    <DropdownItem onClick={()=> mostrarImagen()}>Superficie de las áreas marinas protegidas</DropdownItem>
                </DropdownMenu>

            </Dropdown>


            <Dropdown isOpen={dropdown3} toggle={abrirCerrar3} size='lg'>

                <DropdownToggle caret>Bosques</DropdownToggle>

                <DropdownMenu>
                    <DropdownItem onClick={()=> mostrarImagen()}>Superficie boscosa</DropdownItem>
                    <DropdownItem onClick={()=> mostrarImagen()}>Proporción de la superficie cubierta por bosque</DropdownItem>
                    <DropdownItem onClick={()=> mostrarImagen()}>Proporción de la superficie de plantaciones forestales sobre la superficie de bosque total</DropdownItem>
                </DropdownMenu>

            </Dropdown>


            <Dropdown isOpen={dropdown4} toggle={abrirCerrar4} size='lg'>

                <DropdownToggle caret>Clima</DropdownToggle>

                <DropdownMenu>
                    <DropdownItem onClick={()=> mostrarImagen()}>Variación de temperatura media</DropdownItem>
                </DropdownMenu>

            </Dropdown>

        <div id="prueba">

        </div>
    
        </div>
        </div>
    )
}

export default Dashboard