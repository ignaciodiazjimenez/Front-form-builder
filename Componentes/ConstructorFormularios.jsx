import React from 'react';
import estilos from './estilos.module.css';

export default function ConstructorFormularios() {
  return (
    <div className={estilos.contenedor}>
      <h2 className={estilos.titulo}>🛠️ Constructor de Formularios</h2>
      <p className={estilos.descripcion}>Este es tu componente React corriendo dentro de Astro.</p>
    </div>
  );
}
