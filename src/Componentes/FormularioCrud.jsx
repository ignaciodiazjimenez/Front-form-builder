import React from 'react';
import estilos from './FormularioCrud.module.css';

export default function FormularioCrud() {
  return (
    <div className={estilos.panel}>
      <h1 className={estilos.titulo}>GESTIÓN DE FORMULARIOS</h1>

      <div className={estilos.botones}>
        <button className={estilos.boton}>CREAR FORMULARIO</button>
        <button className={estilos.boton}>ELIMINAR FORMULARIO</button>
        <button className={estilos.boton}>ACTUALIZAR FORMULARIO</button>
        <button className={estilos.boton}>ENVIAR FORMULARIO</button>
      </div>
    </div>
  );
}
