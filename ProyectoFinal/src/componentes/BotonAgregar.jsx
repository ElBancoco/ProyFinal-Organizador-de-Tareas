import { useState, useEffect } from 'react';

export const BotonAgregar = () => {
  // Estado para el valor del input
  const [valorInput, setValorInput] = useState('');
  // Estado para la lista de tareas
  const [tareas, setTareas] = useState([]);
  // Estado para contar las tareas
  const [contadorTareas, setContadorTareas] = useState(0);
  const [contadorPendientes, setContadorPendientes] = useState(0);

  // Maneja el cambio en el input
  const handleInputChange = (event) => {
    setValorInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAgregarTarea();
    }
  };

  // Maneja el clic del botón para agregar la tarea
  const handleAgregarTarea = () => {
    const tareaNormalizada = valorInput.trim();
    if (tareaNormalizada === '') {
      alert('No puedes agregar una tarea vacía');
      return;
    }
    if (tareas.some(tarea => tarea.texto === tareaNormalizada)) {
      alert('La tarea ya existe');
      return;
    }
    const nuevaTarea = { texto: tareaNormalizada, completada: false };
    setTareas([...tareas, nuevaTarea]);
    setValorInput(''); // Limpia el input
  };

  // Maneja el clic del botón de borrar
  const handleBorrarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  // Maneja el clic del botón de editar
  const handleEditarTarea = (index) => {
    const nuevoTexto = prompt('Edita la tarea:', tareas[index].texto);
    if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
      const tareasActualizadas = tareas.map((tarea, i) =>
        i === index ? { ...tarea, texto: nuevoTexto } : tarea
      );
      setTareas(tareasActualizadas);
    }
  };

  // Maneja el cambio de estado de la checkbox
  const handleCheckboxChange = (index) => {
    const tareasActualizadas = tareas.map((tarea, i) =>
      i === index ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(tareasActualizadas);
  };

  // Contadores de tareas y tareas pendientes
  useEffect(() => {
    setContadorTareas(tareas.length);
    setContadorPendientes(tareas.filter(tarea => !tarea.completada).length);
  }, [tareas]);

  return (
    <div className="container">
      <h1>Gestor de Tareas</h1>
      
      {/* Sección de input y botón siempre visibles */}
      <div className="input-section">
        <input
          type="text"
          value={valorInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Introduce una tarea"
        />
        <button className="btn-agregar" onClick={handleAgregarTarea}>
          Agregar tarea
        </button>
      </div>

      {/* Contadores */}
      <div>
        <p>Total de tareas: {contadorTareas}</p>
        <p>Tareas pendientes: {contadorPendientes}</p>
      </div>

      {/* Lista de tareas con scroll */}
      <ul className="lista-tareas">
  {tareas.map((tarea, index) => (
    <li key={index} className="tarea">
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => handleCheckboxChange(index)}
      />
      <span>{tarea.texto}</span>
      <div className="botones-tarea">
        <button onClick={() => handleEditarTarea(index)}>Editar</button>
        <button onClick={() => handleBorrarTarea(index)}>Borrar</button>
      </div>
    </li>
  ))}
</ul>
    </div>
  );
};
