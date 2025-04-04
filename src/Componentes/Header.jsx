import React from 'react';
import '../Estilos/header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logoContainer">
        <img
          src="/logo-SVG-fersoft-completo.svg"
          alt="Logo Fersoft"
          className="logo"
        />
        <h1 className="titulo">Constructor de Formularios de Fersoft</h1>
      </div>
    </header>
  );
}
