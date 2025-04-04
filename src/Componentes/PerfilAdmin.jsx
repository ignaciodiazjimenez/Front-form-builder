import React, { useState, useEffect } from 'react';
import estilos from './perfilAdmin.module.css';

export default function PerfilAdmin() {
  const [nombre, setNombre] = useState('Usuario');
  const [correo, setCorreo] = useState('correo@fersoft.es');
  const [contrasena, setContrasena] = useState('');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [editando, setEditando] = useState(null);
  const [temp, setTemp] = useState('');

  // ✅ Leer localStorage solo en el cliente
  useEffect(() => {
    const guardado = localStorage.getItem('usuario');
    if (guardado) {
      setNombre(guardado);
    }
  }, []);

  const iniciarEdicion = (campo, valor) => {
    setEditando(campo);
    setTemp(valor);
  };

  const guardar = () => {
    if (editando === 'nombre') {
      setNombre(temp);
      localStorage.setItem('usuario', temp); // ✅ actualiza globalmente
    }
    if (editando === 'correo') setCorreo(temp);
    if (editando === 'contrasena') setContrasena(temp);
    setEditando(null);
    setTemp('');
  };

  return (
    <div className={estilos.panel}>
      <h2 className={estilos.titulo}>{nombre.toUpperCase()}</h2>

      {/* Nombre */}
      <div className={estilos.fila}>
        {editando === 'nombre' ? (
          <input className={estilos.input} value={temp} onChange={(e) => setTemp(e.target.value)} />
        ) : (
          <span className={estilos.valor}>{nombre}</span>
        )}
        <button className={estilos.boton} onClick={() => editando === 'nombre' ? guardar() : iniciarEdicion('nombre', nombre)}>ACTUALIZAR</button>
      </div>

      {/* Contraseña */}
      <div className={estilos.fila}>
        {editando === 'contrasena' ? (
          <div className={estilos.inputPassword}>
            <input
              type={mostrarContrasena ? 'text' : 'password'}
              className={estilos.input}
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
            />
            <button className={estilos.ojo} onClick={() => setMostrarContrasena(!mostrarContrasena)}>
              {mostrarContrasena ? '🙈' : '👁️'}
            </button>
          </div>
        ) : (
          <span className={estilos.valor}>********</span>
        )}
        <button className={estilos.boton} onClick={() => editando === 'contrasena' ? guardar() : iniciarEdicion('contrasena', contrasena)}>ACTUALIZAR</button>
      </div>

      {/* Correo */}
      <div className={estilos.fila}>
        {editando === 'correo' ? (
          <input className={estilos.input} value={temp} onChange={(e) => setTemp(e.target.value)} />
        ) : (
          <span className={estilos.valor}>{correo}</span>
        )}
        <button className={estilos.boton} onClick={() => editando === 'correo' ? guardar() : iniciarEdicion('correo', correo)}>ACTUALIZAR</button>
      </div>

      <button className={estilos.botonEliminar}>ELIMINAR CUENTA</button>
    </div>
  );
}
