import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [tareas, setTareas] = useState([]); // Estado para almacenar la lista de tareas
  const [nuevaTarea, setNuevaTarea] = useState(''); // Estado para la nueva tarea que se está escribiendo

  // Manejar el cambio del input
  const manejarCambioInput = (e) => {
    setNuevaTarea(e.target.value);
  };

  // Agregar una nueva tarea a la lista
  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]); // Añade la nueva tarea al array de tareas
      setNuevaTarea(''); // Limpia el input después de agregar la tarea
    }
  };

  // Eliminar una tarea de la lista
  const eliminarTarea = (indice) => {
    const tareasActualizadas = tareas.filter((tarea, i) => i !== indice); // Filtra las tareas eliminando la que corresponde al índice
    setTareas(tareasActualizadas);
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={manejarCambioInput}
          placeholder="Escribe una tarea"
        />
        <button onClick={agregarTarea}>Agregar Tarea</button>
      </div>
      <ul>
        {tareas.map((tarea, indice) => (
          <li key={indice}>
            {tarea} 
            <button onClick={() => eliminarTarea(indice)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
