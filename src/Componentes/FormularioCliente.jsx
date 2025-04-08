import React, { useState, useEffect } from 'react';
import estilos from './FormularioCliente.module.css';

export default function FormularioCliente() {
  const [formularios, setFormularios] = useState([]);
  const [respuesta, setRespuesta] = useState({});
  const [progreso, setProgreso] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    // Simular carga de formularios
    setFormularios([
      { id: 1, pregunta: '¿Cómo calificarías nuestro servicio?' },
      { id: 2, pregunta: '¿Qué mejorarías?' },
      { id: 3, pregunta: '¿Estás satisfecho con el tiempo de respuesta?' },
    ]);
  }, []);

  const handleRespuestaChange = (id, valor) => {
    setRespuesta({ ...respuesta, [id]: valor });
  };

  const siguientePregunta = () => {
    setPaginaActual(paginaActual + 1);
    setProgreso(((paginaActual + 1) / formularios.length) * 100);
  };

  const anteriorPregunta = () => {
    setPaginaActual(paginaActual - 1);
    setProgreso(((paginaActual - 1) / formularios.length) * 100);
  };

  return (
    <div className={estilos.wrapper}>
      <h1 className={estilos.titulo}>Formulario de Encuesta</h1>

      <div className={estilos.barraProgreso}>
        <div className={estilos.progreso} style={{ width: `${progreso}%` }}></div>
      </div>

      <div className={estilos.pregunta}>
        <p>{formularios[paginaActual - 1]?.pregunta}</p>
        <input
          type="text"
          value={respuesta[formularios[paginaActual - 1]?.id] || ''}
          onChange={(e) => handleRespuestaChange(formularios[paginaActual - 1]?.id, e.target.value)}
        />
      </div>

      <div className={estilos.botones}>
        {paginaActual > 1 && <button onClick={anteriorPregunta}>Anterior</button>}
        {paginaActual < formularios.length ? (
          <button onClick={siguientePregunta}>Siguiente</button>
        ) : (
          <button>Enviar Formulario</button>
        )}
      </div>
    </div>
  );
}
