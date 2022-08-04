import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import funciones from '../utils/funciones';
import Logueado from './Logueado';
import NoLogueado from './NoLogueado';

const Menu = () => {
  let navigate = useNavigate();
  const [storage, setStorage] = useState({});

  useEffect(() => {
    setStorage(funciones.getStorage());
  }, [document.onclick]);

  const cerrarSesion = () => {
    localStorage.clear();
    setStorage({});
    navigate('/');
  };

  return storage.id ? <Logueado cerrarSesion={cerrarSesion} /> : <NoLogueado />;
};

export default Menu;
