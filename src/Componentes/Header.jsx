import React from 'react';
import estilos from './header.module.css';

export default function Header() {
  return (
    <header className={estilos.header}>
      <div className={estilos.logoContainer}>
        <img
          src="/logo-SVG-fersoft-completo.svg"
          alt="Logo Fersoft"
          className={estilos.logo}
        />
        <h1 className={estilos.titulo}>Constructor de Formularios de Fersoft</h1>
      </div>
    </header>
  );
}
