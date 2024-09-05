import Tarea  from "./Tarea"
import { BotonAgregar } from "./Btn-Agregar"
//import { BotonAgregar } from "./Lista-Tareas"
export const Lista = () => {

        // hay una cuestion aca, pude hacer lo que ven que hace la pagina,
        // pero no pude hacer que a esas tareas se les apliquen los botones
        // de borrar y editar, pero si lo logre hacer con chat gpt, queda bien y 
        // sirve pero la verdad es que no entiendo mucho el codigo la verdad, 
        // pero si lo queres ver o probar tenes que comentar el "import {Boton-Agregar}"
        // que esta en funcionamiento y descomentar el otro, la verdad me sirve como
        // esta hecho pero me gustaria entenderlo por eso si les parece podemos 
        // hablarlo con el profe el lunes o la clase que podamos
    
    return <>
        <BotonAgregar/>
        <ul className="lista-tareas">
           <Tarea/>
        </ul>
    </>
}