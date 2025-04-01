// src/Componentes/PanelEcuestas.jsx
import React from 'react';
import estilos from './PanelEcuestas.module.css';

export default function PanelEcuestas() {
  return (
    <div className={estilos.wrapper}>
      <h1 className={estilos.titulo}>Panel de Encuestas</h1>
      
      <div className={estilos.botones}>
        <button className={estilos.boton}>CREAR ENCUESTA</button>
        <button className={estilos.boton}>ELIMINAR ENCUESTA</button>
        <button className={estilos.boton}>ACTUALIZAR ENCUESTA</button>
        <button className={estilos.boton}>ENVIAR ENCUESTA</button>
      </div>
    </div>
  );
}
