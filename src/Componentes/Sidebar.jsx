import React, { useEffect, useState } from 'react';
import estilos from './sidebar.module.css';

export default function Sidebar({ usuario: usuarioProp = 'Usuario' }) {
  const [usuario, setUsuario] = useState(usuarioProp);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const guardado = localStorage.getItem('usuario');
    if (guardado) setUsuario(guardado);
  }, []);

  const toggleFormularios = () => setMenuAbierto(!menuAbierto);

  const navegar = (ruta) => {
    window.location.href = ruta;
  };

  return (
    <div className={estilos.sidebar}>
      <button
        className={estilos.botonUsuario}
        onClick={() => navegar('/admin')}
      >
        {usuario}
      </button>

      <button className={estilos.boton} onClick={() => navegar('/clientes')}>
        👥 Clientes
      </button>

      <div className={estilos.menuGrupo}>
        <button className={estilos.boton} onClick={toggleFormularios}>
          📄 Formularios {menuAbierto ? '▼' : '▶'}
        </button>
        {menuAbierto && (
          <div className={estilos.submenu}>
            <button onClick={() => navegar('/formularios/verformularios')}>👁️ Ver Formularios</button> {/* Nueva opción */}
            <button onClick={() => navegar('/formularios/crear')}>📝 Crear</button>
            <button onClick={() => navegar('/formularios/eliminar')}>🗑️ Eliminar</button>
            <button onClick={() => navegar('/formularios/actualizar')}>✏️ Actualizar</button>
            <button onClick={() => navegar('/formularios/enviar')}>📤 Enviar</button>
          </div>
        )}
      </div>

      <button onClick={() => navegar('/encuestas')} className={estilos.boton}>
        📊 Encuestas
      </button>

      <button onClick={() => navegar('/configuracion')} className={estilos.boton}>
        ⚙️ Configuración
      </button>
    </div>
  );
}
