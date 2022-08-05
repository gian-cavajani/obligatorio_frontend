import CerrarSesion from './CerrarSesion';

const Nav = ({ brand, onClick }) => {
  return (
    <nav className="navbar bg-light border">
      {onClick ? (
        <button className="btn " onClick={onClick}>
          Recargar valores de monedas
        </button>
      ) : (
        <div></div>
      )}
      <p className="navbar-brand px-3">{brand}</p>
      <CerrarSesion />
    </nav>
  );
};

export default Nav;
