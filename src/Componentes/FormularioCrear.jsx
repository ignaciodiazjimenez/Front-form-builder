import React, { useState } from 'react';
import '../Estilos/paneles.css';
import '../Estilos/botones.css';
import '../Estilos/formularios.css';

export default function FormularioCrear() {
  const [nombre, setNombre] = useState('');
  const [campos, setCampos] = useState([{ nombre: '', tipo: 'texto' }]);

  const añadirCampo = () =>
    setCampos([...campos, { nombre: '', tipo: 'texto' }]);

  const eliminarCampo = (index) =>
    setCampos(campos.filter((_, i) => i !== index));

  const actualizarCampo = (index, campo, valor) => {
    const nuevosCampos = [...campos];
    nuevosCampos[index][campo] = valor;
    setCampos(nuevosCampos);
  };

  const guardarFormulario = () => {
    console.log({ nombre, campos });
    alert('Formulario guardado (simulado)');
  };

  return (
    <div className="panel">
      <h1 className="panel-titulo">CREAR FORMULARIO</h1>

      <input
        type="text"
        placeholder="Nombre del formulario"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="form-input"
      />

      {campos.map((campo, i) => (
        <div key={i} className="formulario-linea">
          <input
            type="text"
            placeholder={`Campo ${i + 1}`}
            value={campo.nombre}
            onChange={(e) => actualizarCampo(i, 'nombre', e.target.value)}
            className="form-input"
          />

          <select
            value={campo.tipo}
            onChange={(e) => actualizarCampo(i, 'tipo', e.target.value)}
            className="form-input"
          >
            <option value="texto">Texto</option>
            <option value="numero">Número</option>
            <option value="fecha">Fecha</option>
          </select>

          <button
            onClick={() => eliminarCampo(i)}
            className="boton rojo"
            title="Eliminar"
          >
            ❌
          </button>
        </div>
      ))}

      <div className="formulario-acciones">
        <button onClick={añadirCampo} className="boton verde">+ Añadir Campo</button>
        <button onClick={guardarFormulario} className="boton borde-verde">💾 Guardar Formulario</button>
      </div>
    </div>
  );
}
