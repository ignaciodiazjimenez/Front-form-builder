// src/Componentes/FormularioCrear.jsx
import React, { useState } from 'react';
import estilos from './FormularioCrear.module.css';

export default function FormularioCrear() {
  const [nombre, setNombre] = useState('');
  const [campos, setCampos] = useState([{ id: Date.now(), label: '', tipo: 'text' }]);

  const agregarCampo = () => {
    setCampos([...campos, { id: Date.now(), label: '', tipo: 'text' }]);
  };

  const actualizarCampo = (id, campo, valor) => {
    setCampos(campos.map(c => (c.id === id ? { ...c, [campo]: valor } : c)));
  };

  const eliminarCampo = (id) => {
    setCampos(campos.filter(c => c.id !== id));
  };

  const guardarFormulario = () => {
    const datos = {
      nombre,
      campos,
    };
    console.log('Formulario creado:', datos);
    alert('Formulario guardado (simulado en consola)');
  };

  const volverAAdmin = () => {
    window.location.href = '/admin';
  };

  return (
    <div className={estilos.panel}>
      <h2 className={estilos.titulo}>CREAR FORMULARIO</h2>

      <input
        className={estilos.input}
        type="text"
        placeholder="Nombre del formulario"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      {campos.map((campo, index) => (
        <div key={campo.id} className={estilos.fila}>
          <input
            className={estilos.input}
            type="text"
            placeholder={`Campo ${index + 1}`}
            value={campo.label}
            onChange={(e) => actualizarCampo(campo.id, 'label', e.target.value)}
          />
          <select
            className={estilos.input}
            value={campo.tipo}
            onChange={(e) => actualizarCampo(campo.id, 'tipo', e.target.value)}
          >
            <option value="text">Texto</option>
            <option value="email">Email</option>
            <option value="number">Número</option>
            <option value="date">Fecha</option>
          </select>
          <button onClick={() => eliminarCampo(campo.id)} className={estilos.botonEliminar}>❌</button>
        </div>
      ))}

      <button onClick={agregarCampo} className={estilos.boton}>+ Añadir Campo</button>
      <button onClick={guardarFormulario} className={estilos.boton}>💾 Guardar Formulario</button>
      <button className={estilos.botonVolver} onClick={volverAAdmin}>Volver a Admin</button>
    </div>
  );
}
