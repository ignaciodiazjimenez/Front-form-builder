import React from 'react';
import '../Estilos/tablas.css';

const clientesData = [
  { nombre: 'IGNACIO', encuesta: false },
  { nombre: 'PABLO', encuesta: true },
  { nombre: 'GEMA', encuesta: false },
  { nombre: 'ALVARO', encuesta: true },
  { nombre: 'MAMEN', encuesta: true },
];

export default function Clientes() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <table className="tabla">
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
                <button>📝 VER/EDITAR</button>
              </td>
              <td>
                {cliente.encuesta ? (
                  <button>📊 VER/EDITAR</button>
                ) : (
                  <span className="noDisponible">❌ NO DISPONIBLE</span>
                )}
              </td>
              <td>
                <button>
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
