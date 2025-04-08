import React, { useState, useEffect } from 'react';
import estilos from './formularioCliente.module.css';
import { useParams } from 'react-router-dom';  // Usamos useParams para obtener el ID de la URL

export default function FormularioCliente() {
  const { id } = useParams(); // Esto obtiene el ID del formulario desde la URL
  const [formulario, setFormulario] = useState(null);

  useEffect(() => {
    // Simulamos la carga de datos (En un proyecto real, deberías hacer una llamada a tu API aquí)
    // Suponemos que "id" es el id del formulario
    const formularioData = {
      id: id,
      nombre: `Formulario ${id}`,
      progreso: 50, // Progreso simulado
      preguntas: [
        { id: 1, pregunta: '¿Cómo te sientes?', respuesta: '' },
        { id: 2, pregunta: '¿Por qué elegiste este producto?', respuesta: '' },
        { id: 3, pregunta: '¿Qué mejorarías?', respuesta: '' }
      ]
    };
    setFormulario(formularioData);
  }, [id]);

  const manejarRespuesta = (e, preguntaId) => {
    setFormulario(prevForm => ({
      ...prevForm,
      preguntas: prevForm.preguntas.map(pregunta => 
        pregunta.id === preguntaId ? { ...pregunta, respuesta: e.target.value } : pregunta
      )
    }));
  };

  const avanzarPregunta = () => {
    // Lógica para avanzar a la siguiente pregunta
  };

  const volverPregunta = () => {
    // Lógica para volver a la pregunta anterior
  };

  return (
    <div className={estilos.wrapper}>
      {formulario ? (
        <>
          <h1>{formulario.nombre}</h1>
          <div className={estilos.progreso}>
            <div className={estilos.bar} style={{ width: `${formulario.progreso}%` }}></div>
            <span>{formulario.progreso}% completado</span>
          </div>
          <div className={estilos.preguntas}>
            {formulario.preguntas.map(pregunta => (
              <div key={pregunta.id} className={estilos.pregunta}>
                <p>{pregunta.pregunta}</p>
                <input
                  type="text"
                  value={pregunta.respuesta}
                  onChange={(e) => manejarRespuesta(e, pregunta.id)}
                />
              </div>
            ))}
          </div>
          <div className={estilos.botones}>
            <button className={estilos.boton} onClick={volverPregunta}>Volver</button>
            <button className={estilos.boton} onClick={avanzarPregunta}>Siguiente</button>
          </div>
        </>
      ) : (
        <p>Cargando formulario...</p>
      )}
    </div>
  );
}
