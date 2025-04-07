import React, { useEffect, useState } from 'react';
import '../Estilos/sidebar.css';  // Asegúrate de tener la ruta correcta de los estilos

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
    <div className="sidebar">
      <button className="botonUsuario" onClick={() => navegar('/admin')}>
        {usuario}
      </button>

      <button className="boton" onClick={() => navegar('/clientes')}>
        👥 Clientes
      </button>

      <div className="menuGrupo">
        <button className="boton" onClick={toggleFormularios}>
          📄 Formularios {menuAbierto ? '▼' : '▶'}
        </button>
        {menuAbierto && (
          <div className="submenu">
            <button onClick={() => navegar('/formularios/crear')}>📝 Crear</button>
            <button onClick={() => navegar('/formularios/eliminar')}>🗑️ Eliminar</button>
            <button onClick={() => navegar('/formularios/actualizar')}>✏️ Actualizar</button>
            <button onClick={() => navegar('/formularios/enviar')}>📤 Enviar</button>
          </div>
        )}
      </div>

      <button onClick={() => navegar('/encuestas')} className="boton">
        📊 Encuestas
      </button>

      <button onClick={() => navegar('/configuracion')} className="boton">
        ⚙️ Configuración
      </button>
    </div>
  );
}
