import React, { useState } from 'react';
import estilos from './FormularioEliminar.module.css'; // ← CAMBIO

export default function FormularioEliminar() {
  const [formularios, setFormularios] = useState([
    { id: 1, nombre: 'Formulario de contacto' },
    { id: 2, nombre: 'Encuesta de satisfacción' },
    { id: 3, nombre: 'Registro de usuarios' },
  ]);

  const eliminarFormulario = (id) => {
    const confirmado = confirm('¿Estás seguro de que quieres eliminar este formulario?');
    if (confirmado) {
      const actualizados = formularios.filter(f => f.id !== id);
      setFormularios(actualizados);
      console.log('Formulario eliminado:', id);
    }
  };

  return (
    <div className={estilos.panel}>
      <h2 className={estilos.titulo}>ELIMINAR FORMULARIO</h2>

      {formularios.length === 0 ? (
        <p>No hay formularios disponibles.</p>
      ) : (
        <ul className={estilos.lista}>
          {formularios.map(f => (
            <li key={f.id} className={estilos.item}>
              <span>{f.nombre}</span>
              <button className={estilos.botonEliminar} onClick={() => eliminarFormulario(f.id)}>❌ Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
