import { Outlet, NavLink } from 'react-router-dom';

const NoLogueado = () => {
  return (
    <div>
      <div className="menu">
        <NavLink to="/">Login</NavLink>
        <NavLink to="/registro">Registro</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default NoLogueado;
