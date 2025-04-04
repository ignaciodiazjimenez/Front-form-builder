import React, { useState } from 'react';
import '../Estilos/formularios.css';

const formulariosMock = [
  'Formulario de contacto',
  'Encuesta de satisfacción',
  'Registro de usuarios',
];

export default function FormularioEliminar() {
  const [formularios, setFormularios] = useState(formulariosMock);

  const eliminarFormulario = (nombre) => {
    const confirmado = window.confirm(`¿Eliminar "${nombre}"?`);
    if (confirmado) {
      setFormularios((prev) => prev.filter((f) => f !== nombre));
    }
  };

  return (
    <div className="formulario-contenedor">
      <h2 className="formulario-titulo">ELIMINAR FORMULARIO</h2>
      <div className="formulario-lista">
        {formularios.map((nombre, index) => (
          <div key={index} className="formulario-item">
            <span>{nombre}</span>
            <button className="btn btn-eliminar" onClick={() => eliminarFormulario(nombre)}>
              ❌ Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
