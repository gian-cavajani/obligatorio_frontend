import fetchs from '../utils/fetchs';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddProductForm from './AddProductForm';
import InputField from './InputField';
const Login = ({ sendMessage }) => {
  const user = useRef(null);
  const pass = useRef(null);
  let navigate = useNavigate();

  const handleLogin = async () => {
    const usuario = user.current.value;
    const password = pass.current.value;

    try {
      const user = await fetchs.login({ usuario, password });
      console.log(user);
      localStorage.setItem('usuarioKey', user.apiKey);
      localStorage.setItem('usuarioId', user.id);
      navigate('/dash');
      //redirect
    } catch (error) {
      sendMessage('error', error.response.data.mensaje);
    }
  };
  return (
    <div>
      <AddProductForm />
      <InputField 
        


      />
      <label>
        Usuario:
        <input ref={user} type="text" />
      </label>
      <br />
      <label>
        Password:
        <input ref={pass} type="password" />
      </label>
      <br />
      <input type="button" value="Login" onClick={handleLogin} />
      <p>
        Aun no tiene una cuenta?
        <Link to="/registro">Registrese!</Link>
      </p>
    </div>
  );
};

export default Login;
