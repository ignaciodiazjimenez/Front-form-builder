import React, { useState } from 'react';
import '../Estilos/paneles.css';

export default function PerfilAdmin() {
  const [nombre, setNombre] = useState('root');
  const [password, setPassword] = useState('********');
  const [correo, setCorreo] = useState('correo@fersoft.es');

  return (
    <div className="panel">
      <h2 className="panel-titulo">ROOT</h2>

      <div className="panel-campo">
        <input
          className="panel-input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button className="panel-boton verde">ACTUALIZAR</button>
      </div>

      <div className="panel-campo">
        <input
          className="panel-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="panel-boton verde">ACTUALIZAR</button>
      </div>

      <div className="panel-campo">
        <input
          className="panel-input"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <button className="panel-boton verde">ACTUALIZAR</button>
      </div>

      <button className="panel-boton rojo">ELIMINAR CUENTA</button>
    </div>
  );
}
