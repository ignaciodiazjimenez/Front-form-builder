// src/Componentes/FormularioEliminar.jsx
import React, { useState } from 'react';
import estilos from './FormularioEliminar.module.css';

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

  const volverAAdmin = () => {
    window.location.href = '/admin';
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
      <button className={estilos.botonVolver} onClick={volverAAdmin}>Volver a Admin</button>
    </div>
  );
}
