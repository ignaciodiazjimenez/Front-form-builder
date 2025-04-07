// src/Componentes/VerFormularios.jsx
import React, { useState, useEffect } from 'react';
import estilos from './verformularios.module.css';

export default function VerFormularios() {
  const [formularios, setFormularios] = useState([]);

  useEffect(() => {
    // Simulamos la carga de los formularios (en un escenario real esto vendría de la base de datos)
    setFormularios([
      { id: 1, nombre: 'Formulario de contacto' },
      { id: 2, nombre: 'Encuesta de satisfacción' },
      { id: 3, nombre: 'Formulario de registro' },
    ]);
  }, []);

  const volverAAdmin = () => {
    window.location.href = '/admin';
  };

  return (
    <div className={estilos.wrapper}>
      <h1 className={estilos.titulo}>Ver Formularios</h1>
      <table className={estilos.tabla}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {formularios.map((formulario) => (
            <tr key={formulario.id}>
              <td>{formulario.id}</td>
              <td>{formulario.nombre}</td>
              <td>
                <button className={estilos.botonVer}>Ver</button>
                <button className={estilos.botonEditar}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className={estilos.botonVolver} onClick={volverAAdmin}>Volver a Admin</button>
    </div>
  );
}
