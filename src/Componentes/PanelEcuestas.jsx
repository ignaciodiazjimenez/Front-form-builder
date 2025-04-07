// src/Componentes/PanelEcuestas.jsx
import React, { useState } from 'react';
import estilos from './PanelEcuestas.module.css';

export default function PanelEcuestas() {
  // Datos del cliente ficticio
  const clienteFicticio = {
    id: 1021,
    nombre: 'Guillermo',
    encuestas: [
      { preguntaId: 3, pregunta: '¿Por qué no completaste la pregunta?', detalle: 'Responde por favor.' },
      { preguntaId: 8, pregunta: '¿Te gustaría dar más detalles?', detalle: 'Danos más información.' },
      { preguntaId: 6, pregunta: '¿Por qué dejaste esta pregunta incompleta?', detalle: 'Por favor completa todos los campos.' },
    ],
  };

  const [clienteId, setClienteId] = useState('');
  const [encuestas, setEncuestas] = useState([]);
  const [cliente, setCliente] = useState(null);

  // Función para buscar el cliente
  const buscarCliente = () => {
    if (parseInt(clienteId) === clienteFicticio.id) {
      setCliente(clienteFicticio);
      setEncuestas(clienteFicticio.encuestas);
    } else {
      alert('Cliente no encontrado');
    }
  };

  return (
    <div className={estilos.wrapper}>
      <h1 className={estilos.titulo}>Panel de Encuestas</h1>
      
      <div className={estilos.buscador}>
        <label htmlFor="clienteId">Buscar Cliente por ID:</label>
        <input
          type="text"
          id="clienteId"
          value={clienteId}
          onChange={(e) => setClienteId(e.target.value)}
          placeholder="Introduce el ID del cliente"
        />
        <button onClick={buscarCliente} className={estilos.botonBuscar}>Buscar</button>
      </div>

      {cliente && (
        <div className={estilos.resultados}>
          <h2>Encuestas asociadas a {cliente.nombre}</h2>
          <table className={estilos.tablaEncuestas}>
            <thead>
              <tr>
                <th>ID de Pregunta</th>
                <th>Pregunta</th>
                <th>Detalles</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {encuestas.map((encuesta, index) => (
                <tr key={index}>
                  <td>{encuesta.preguntaId}</td>
                  <td>{encuesta.pregunta}</td>
                  <td>{encuesta.detalle}</td>
                  <td>
                    <button className={estilos.botonVerEncuesta}>Ver Encuesta</button>
                    <button className={estilos.botonVerFormulario}>Ir al Formulario</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
