import { useState } from 'react';

export const BotonAgregar = () => {
  // Estado para el valor del input
  const [valorInput, setValorInput] = useState('');
  // Estado para la lista de tareas
  const [tareas, setTareas] = useState([]);

  // Maneja el cambio en el input
  const handleInputChange = (event) => {
    setValorInput(event.target.value);
  };

  // Maneja el clic del botón para agregar la tarea
  const handleAgregarTarea = () => {
    if (valorInput.trim() !== '') {
      // Agrega una nueva tarea a la lista
      setTareas([...tareas, valorInput]);
      setValorInput(''); // Limpia el input
    }
  };

  // Maneja el clic del botón de borrar
  const handleBorrarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  // Maneja el clic del botón de editar
  const handleEditarTarea = (index) => {
    const nuevoTexto = prompt('Edita la tarea:', tareas[index]);
    if (nuevoTexto !== null) {
      setTareas(tareas.map((tarea, i) => (i === index ? nuevoTexto : tarea)));
    }
  };

  return (
    <>
      <input
        type="text"
        value={valorInput}
        onChange={handleInputChange}
        placeholder="Introduce una tarea"
      />
      <button className="btn-agregar" onClick={handleAgregarTarea}>
        Agregar tarea
      </button>
      <ul className="lista-tareas">
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => handleEditarTarea(index)}>Editar</button>
            <button onClick={() => handleBorrarTarea(index)}>Borrar</button>
          </li>
        ))}
      </ul>
    </>
  );
};