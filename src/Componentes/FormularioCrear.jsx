import React, { useState } from 'react';
import '../Estilos/formularios.css';

export default function FormularioCrear() {
  const [cliente, setCliente] = useState('');
  const [nombreFormulario, setNombreFormulario] = useState('');
  const [campos, setCampos] = useState([{ nombre: '', tipo: 'texto' }]);

  const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3'];

  const añadirCampo = () => setCampos([...campos, { nombre: '', tipo: 'texto' }]);
  const eliminarCampo = (index) => setCampos(campos.filter((_, i) => i !== index));

  return (
    <div className="panel">
      <h1 className="panel-titulo">CREAR FORMULARIO</h1>

      <select
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
        className="form-input"
      >
        <option value="">Selecciona un cliente</option>
        {clientes.map((cliente, index) => (
          <option key={index} value={cliente}>
            {cliente}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Nombre del formulario"
        value={nombreFormulario}
        onChange={(e) => setNombreFormulario(e.target.value)}
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
          <button onClick={() => eliminarCampo(i)} className="boton rojo">❌</button>
        </div>
      ))}

      <div className="formulario-acciones">
        <button onClick={añadirCampo} className="boton verde">+ Añadir Campo</button>
        <button className="boton borde-verde">💾 Guardar Formulario</button>
        <button className="boton borde-verde" onClick={() => window.location.href = '/admin'}>
          Volver a Admin
        </button>
      </div>
    </div>
  );
}
