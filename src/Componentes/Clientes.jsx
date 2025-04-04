import React from 'react';
import estilos from './clientes.module.css';

const clientesData = [
  { nombre: 'IGNACIO', encuesta: false },
  { nombre: 'PABLO', encuesta: true },
  { nombre: 'GEMA', encuesta: false },
  { nombre: 'ALVARO', encuesta: true },
  { nombre: 'MAMEN', encuesta: true },
];

export default function Clientes() {
  return (
    <div className={estilos.contenedor}>
      <table className={estilos.tabla}>
        <thead>
          <tr>
            <th>👤 CLIENTES</th>
            <th>📝 FORMULARIOS</th>
            <th>📊 ENCUESTAS</th>
            <th>📄 DESCARGAR</th>
          </tr>
        </thead>
        <tbody>
          {clientesData.map((cliente, index) => (
            <tr key={index}>
              <td>{cliente.nombre}</td>
              <td>
                <button className={estilos.boton}>
                  📝 VER/EDITAR
                </button>
              </td>
              <td>
                {cliente.encuesta ? (
                  <button className={estilos.boton}>
                    📊 VER/EDITAR
                  </button>
                ) : (
                  <span className={estilos.noDisponible}>❌ NO DISPONIBLE</span>
                )}
              </td>
              <td>
                <button className={estilos.boton}>
                  📄 {cliente.encuesta ? 'FORM/ENCUESTA' : 'FORMULARIO'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
