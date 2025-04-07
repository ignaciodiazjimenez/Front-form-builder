// src/Componentes/FormularioActualizar.jsx
import React, { useState } from 'react';
import estilos from './FormularioActualizar.module.css';

export default function FormularioActualizar() {
  const [formularios, setFormularios] = useState([
    { id: 1, nombre: 'Formulario de contacto' },
    { id: 2, nombre: 'Encuesta de satisfacción' },
  ]);
  const [formularioActivo, setFormularioActivo] = useState(null);
  const [nuevoNombre, setNuevoNombre] = useState('');

  const seleccionarFormulario = (formulario) => {
    setFormularioActivo(formulario);
    setNuevoNombre(formulario.nombre);
  };

  const actualizarFormulario = () => {
    if (!formularioActivo) return;

    const actualizados = formularios.map(f =>
      f.id === formularioActivo.id ? { ...f, nombre: nuevoNombre } : f
    );
    setFormularios(actualizados);
    setFormularioActivo(null);
    console.log('Formulario actualizado:', nuevoNombre);
    alert('Formulario actualizado (simulado)');
  };

  const volverAAdmin = () => {
    window.location.href = '/admin';
  };

  return (
    <div className={estilos.panel}>
      <h2 className={estilos.titulo}>ACTUALIZAR FORMULARIO</h2>

      {!formularioActivo ? (
        <ul className={estilos.lista}>
          {formularios.map(f => (
            <li key={f.id} className={estilos.item}>
              <span>{f.nombre}</span>
              <button className={estilos.boton} onClick={() => seleccionarFormulario(f)}>✏️ Editar</button>
            </li>
          ))}
        </ul>
      ) : (
        <div className={estilos.fila}>
          <input
            className={estilos.input}
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
          />
          <button className={estilos.boton} onClick={actualizarFormulario}>💾 Guardar</button>
        </div>
      )}
      <button className={estilos.botonVolver} onClick={volverAAdmin}>Volver a Admin</button>
    </div>
  );
}
