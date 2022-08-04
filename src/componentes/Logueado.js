import { Outlet, NavLink } from 'react-router-dom';

const Logueado = ({ cerrarSesion }) => {
  return (
    <div>
      <div className="menu">
        <NavLink to="/">Login</NavLink>
        <NavLink to="/registro">Registro</NavLink>
        <NavLink to="/dash">Dashboard</NavLink>
        <button onClick={cerrarSesion}>Cerrar Sesion</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Logueado;
