import React from 'react';
import estilos from './sidebar.module.css';

export default function Sidebar({ usuario }) {
  return (
    <div className={estilos.sidebar}>
      <button
        className={estilos.botonUsuario}
        onClick={() => (window.location.href = '/admin')}
      >
        {usuario}
      </button>

      <button onClick={() => (window.location.href = '/clientes')} className={estilos.boton}>
        Clientes
      </button>
      <button onClick={() => (window.location.href = '/panelformularios')} className={estilos.boton}>
        Formularios
      </button>
      <button onClick={() => (window.location.href = '/PanelEcuestas')} className={estilos.boton}>
        Encuestas
      </button>
      <button onClick={() => (window.location.href = '/configuracion')} className={estilos.boton}>
        Configuración
      </button>
    </div>
  );
}
