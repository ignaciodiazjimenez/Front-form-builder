import React from 'react';
import '../Estilos/paneles.css';

export default function PanelEncuestas() {
  return (
    <div className="panel">
      <h1 className="panel-titulo">PANEL DE ENCUESTAS</h1>

      <div className="botones">
        <button className="boton verde">📝 Crear Encuesta</button>
        <button className="boton rojo">🗑️ Eliminar Encuesta</button>
        <button className="boton naranja">✏️ Actualizar Encuesta</button>
        <button className="boton azul">📤 Enviar Encuesta</button>
      </div>
    </div>
  );
}
