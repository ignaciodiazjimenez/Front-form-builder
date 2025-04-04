import React, { useState } from 'react';
import estilos from './FormularioEnviar.module.css'; // ← CAMBIO

export default function FormularioEnviar() {
  const [formularios, setFormularios] = useState([
    { id: 1, nombre: 'Encuesta Cliente A' },
    { id: 2, nombre: 'Formulario Feedback' },
  ]);
  const [destinatario, setDestinatario] = useState('');
  const [formularioSeleccionado, setFormularioSeleccionado] = useState(null);

  const enviar = () => {
    if (!destinatario || !formularioSeleccionado) {
      alert('Debes completar todos los campos.');
      return;
    }

    console.log(`📤 Enviando ${formularioSeleccionado.nombre} a ${destinatario}`);
    alert(`Formulario "${formularioSeleccionado.nombre}" enviado a ${destinatario}`);
    setDestinatario('');
    setFormularioSeleccionado(null);
  };

  return (
    <div className={estilos.panel}>
      <h2 className={estilos.titulo}>ENVIAR FORMULARIO</h2>

      <div className={estilos.fila}>
        <label>Selecciona el formulario:</label>
        <select
          className={estilos.input}
          value={formularioSeleccionado?.id || ''}
          onChange={(e) =>
            setFormularioSeleccionado(
              formularios.find(f => f.id === Number(e.target.value))
            )
          }
        >
          <option value="">-- Selecciona uno --</option>
          {formularios.map(f => (
            <option key={f.id} value={f.id}>{f.nombre}</option>
          ))}
        </select>
      </div>

      <div className={estilos.fila}>
        <label>Correo destinatario:</label>
        <input
          className={estilos.input}
          type="email"
          placeholder="ejemplo@correo.com"
          value={destinatario}
          onChange={(e) => setDestinatario(e.target.value)}
        />
      </div>

      <button className={estilos.boton} onClick={enviar}>📩 ENVIAR</button>
    </div>
  );
}
