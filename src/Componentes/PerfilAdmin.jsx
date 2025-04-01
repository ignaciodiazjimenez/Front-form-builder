import React, { useState } from 'react';
import estilos from './perfilAdmin.module.css';

export default function PerfilAdmin() {
  const [nombre, setNombre] = useState('GUILLERMO FERSOFT');
  const [correo, setCorreo] = useState('correo@fersoft.es');
  const [contrasena, setContrasena] = useState('********');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const [editandoCampo, setEditandoCampo] = useState(null);
  const [inputTemporal, setInputTemporal] = useState('');

  const activarEdicion = (campo, valorActual) => {
    setEditandoCampo(campo);
    setInputTemporal(valorActual === '********' ? '' : valorActual);
  };

  const actualizarCampo = (campo) => {
    if (!inputTemporal.trim()) {
      setEditandoCampo(null); // simplemente cerramos la edición sin guardar
      setInputTemporal('');
      return;
    }
  
    if (campo === 'nombre') setNombre(inputTemporal);
    if (campo === 'correo') setCorreo(inputTemporal);
    if (campo === 'contrasena') setContrasena(inputTemporal);
  
    setEditandoCampo(null);
    setInputTemporal('');
  };
  

  return (
    <div className={estilos.contenedor}>
      <aside className={estilos.sidebar}>
        <div className={estilos.perfil}>
          <span className={estilos.perfilLabel}>PERFIL ADMIN</span>
          <strong className={estilos.nombreUsuario}>{nombre}</strong>
        </div>
        <nav className={estilos.menu}>
          <ul>
            <li><button>Clientes</button></li>
            <li><button>Formularios</button></li>
            <li><button>Encuestas</button></li>
            <li><button>Configuración</button></li>
          </ul>
        </nav>
      </aside>

      <main className={estilos.zonaPrincipal}>
        <div className={estilos.perfilBox}>
          <h2>{nombre.toUpperCase()}</h2>
          <div className={estilos.datos}>
            {/* Nombre */}
            <div>
              {editandoCampo === 'nombre' ? (
                <input
                  type="text"
                  className={estilos.inputEditable}
                  value={inputTemporal}
                  onChange={(e) => setInputTemporal(e.target.value)}
                />
              ) : (
                <span onClick={() => activarEdicion('nombre', nombre)}>{nombre}</span>
              )}
              <button onClick={() => actualizarCampo('nombre')}>ACTUALIZAR</button>
            </div>

            {/* Contraseña */}
            <div className={estilos.filaConContrasena}>
              {editandoCampo === 'contrasena' ? (
                <div className={estilos.contrasenaInput}>
                  <input
                    type={mostrarContrasena ? 'text' : 'password'}
                    className={estilos.inputEditable}
                    value={inputTemporal}
                    onChange={(e) => setInputTemporal(e.target.value)}
                  />
                  <button
                    type="button"
                    className={estilos.ojo}
                    onClick={() => setMostrarContrasena(!mostrarContrasena)}
                    title={mostrarContrasena ? 'Ocultar' : 'Mostrar'}
                  >
                    {mostrarContrasena ? '🙈' : '👁️'}
                  </button>
                </div>
              ) : (
                <span onClick={() => activarEdicion('contrasena', contrasena)}>{contrasena}</span>
              )}
              <button onClick={() => actualizarCampo('contrasena')}>ACTUALIZAR</button>
            </div>

            {/* Correo */}
            <div>
              {editandoCampo === 'correo' ? (
                <input
                  type="email"
                  className={estilos.inputEditable}
                  value={inputTemporal}
                  onChange={(e) => setInputTemporal(e.target.value)}
                />
              ) : (
                <span onClick={() => activarEdicion('correo', correo)}>{correo}</span>
              )}
              <button onClick={() => actualizarCampo('correo')}>ACTUALIZAR</button>
            </div>

            {/* Eliminar */}
            <div>
              <button className={estilos.eliminar}>ELIMINAR CUENTA</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
