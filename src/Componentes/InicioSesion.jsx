import React, { useState } from 'react';
import '../Estilos/global.css'; // Asegúrate de tener la paleta de colores en este archivo

export default function InicioSesion() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === 'root' && contrasena === 'root') {
      localStorage.setItem('usuario', usuario);
      window.location.href = '/admin';
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="inicio-sesion-container">
      <div className="logo-container">
        <img 
          src="/logo-SVG-fersoft-completo.svg" 
          alt="Logo Fersoft" 
          className="logo" 
        />
      </div>
      <h1 className="titulo">Constructor de Formularios Fersoft</h1>
      <div className="formulario-contenedor">
        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="usuario" className="formulario-label">Usuario</label>
          <input
            type="text"
            id="usuario"
            className="formulario-input"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Introduce tu usuario"
            required
          />

          <label htmlFor="contrasena" className="formulario-label">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            className="formulario-input"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="Introduce tu contraseña"
            required
          />

          {error && <p className="formulario-error">{error}</p>}

          <button type="submit" className="boton verde">Entrar</button>
        </form>
      </div>
    </div>
  );
}
