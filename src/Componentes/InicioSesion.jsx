import React, { useState } from 'react';
import estilos from './inicioSesion.module.css';

export default function InicioSesion() {
  const [iluminado, setIluminado] = useState(false);

  return (
    <div className={estilos.fondo}>
      <div className={estilos.tituloGeneral}>
        <h1>Constructor de Formularios Fersoft</h1>
      </div>

      <div
        className={`${estilos.contenedor} ${iluminado ? estilos.iluminado : ''}`}
        onMouseEnter={() => setIluminado(true)}
        onMouseLeave={() => setIluminado(false)}
      >
        <h2 className={estilos.titulo}>Iniciar Sesión</h2>
        <form className={estilos.formulario}>
          <label>
            Correo electrónico:
            <input type="email" name="email" required />
          </label>

          <label>
            Contraseña:
            <input type="password" name="password" required />
          </label>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
