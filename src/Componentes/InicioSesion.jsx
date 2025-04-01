import React, { useState } from 'react';
import estilos from './inicioSesion.module.css';

export default function InicioSesion() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === 'root' && contrasena === 'root') {
      window.location.href = '/admin'; // redirección directa
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className={estilos.fondo}>
      <h1 className={estilos.titulo}>Constructor de Formularios Fersoft</h1>
      <div className={estilos.contenedor}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Introduce tu usuario"
            required
          />

          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="Introduce tu contraseña"
            required
          />

          {error && <p className={estilos.error}>{error}</p>}

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
