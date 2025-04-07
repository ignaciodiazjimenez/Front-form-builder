import React, { useState } from 'react';
import '../Estilos/formularios.css';
import '../Estilos/botones.css';

const formulariosMock = [
  'Formulario de contacto',
  'Encuesta de satisfacción',
  'Registro de usuarios',
];

export default function FormularioEnviar() {
  const [seleccionado, setSeleccionado] = useState('');

  const enviarFormulario = () => {
    if (!seleccionado) {
      alert('Selecciona un formulario para enviar.');
      return;
    }
    alert(`Formulario "${seleccionado}" enviado correctamente.`);
  };

  return (
    <div className="formulario-contenedor">
      <h2 className="formulario-titulo">ENVIAR FORMULARIO</h2>

      <select
        className="form-input"
        value={seleccionado}
        onChange={(e) => setSeleccionado(e.target.value)}
      >
        <option value="">-- Selecciona un formulario --</option>
        {formulariosMock.map((form, idx) => (
          <option key={idx} value={form}>
            {form}
          </option>
        ))}
      </select>

      <button className="boton enviar" onClick={enviarFormulario}>
        📤 Enviar
      </button>
      <button className="boton borde-verde" onClick={() => window.location.href = '/admin'}>
        Volver a Admin
      </button>
    </div>
  );
}
