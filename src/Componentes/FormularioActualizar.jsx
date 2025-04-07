import React from 'react';
import '../Estilos/paneles.css';
import '../Estilos/botones.css';
import '../Estilos/formularios.css';

export default function FormularioActualizar() {
  const formularios = ['Formulario de contacto', 'Encuesta de satisfacción'];

  return (
    <div className="panel">
      <h1 className="panel-titulo">ACTUALIZAR FORMULARIO</h1>

      {formularios.map((nombre, i) => (
        <div key={i} className={`formulario-linea ${i === 0 ? 'seleccionado' : ''}`}>
          <span>{nombre}</span>
          <button className="boton editar">✏️ Editar</button>
          <button className="boton borde-verde" onClick={() => window.location.href = '/admin'}>
            Volver a Admin
          </button>
        </div>
      ))}
    </div>
  );
}
