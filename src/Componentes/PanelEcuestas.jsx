import React from 'react';
import '../Estilos/paneles.css';
import '../Estilos/botones.css';

export default function PanelEcuestas() {
  return (
    <div className="panel">
      <h1 className="panel-titulo">PANEL DE ENCUESTAS</h1>

      <div className="botones">
        <button className="boton">📝 CREAR ENCUESTA</button>
        <button className="boton">🗑️ ELIMINAR ENCUESTA</button>
        <button className="boton">✏️ ACTUALIZAR ENCUESTA</button>
        <button className="boton">📤 ENVIAR ENCUESTA</button>
      </div>
    </div>
  );
}
