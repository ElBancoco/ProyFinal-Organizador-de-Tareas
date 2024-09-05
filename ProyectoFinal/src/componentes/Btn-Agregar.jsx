import { useRef, useState } from "react"

export const BotonAgregar = () => {

    const [valorImput, setValorInput] = useState('') // Este useState maneja el valor del contenido del input

    const listaRef = useRef(null) // Este useRef conecta con la lista desordenada

    const AccionCambioInput = (event) => {  // esta funcion basicamente mete el valor del productor del evento, que seria del input dentro de la variable del useState
        setValorInput(event.target.value)
    }

    const AccionAgregarTarea = () => {      // esta funcion toma la señal del onClick del boton
        if (valorImput.trim() !== '') {        // esta condicion le saca los espacios al contenido del input
            let nuevoLi = document.createElement('li')  // Aca se crea el item de la lista (el listItem -li-)
            nuevoLi.textContent = valorImput       // Aca le introduce el valor del input al item de la lista
            listaRef.current.appendChild(nuevoLi)   // y Aca se agreaga el item a la lista mediante la referencia del UseRef
            setValorInput('')     // aca se limpia la variable de estado para que lo siguiente que pongamos no este junto a lo anteriormente ingresado
        }
    }

    return <>
        <input type="text"
            value={valorImput}      // aca definimos que el valor del input sera la variable de estado del useState
            onChange={AccionCambioInput}    // Aca indicamos que si hay algo en el input este Active la funcion que rellena la variable de estado con su contenido
            placeholder="introduce una tarea"  // no hace falta que explique que hace esto
        />
        <button className="btn-agregar" onClick={AccionAgregarTarea}>Agregar tarea</button>
        <ul className="lista-tareas" ref={listaRef}></ul>
    </>
}