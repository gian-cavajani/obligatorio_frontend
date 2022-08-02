import fetchs from '../utils/fetchs';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from './InputField';
const Login = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState({ usuario: '', password: '' });
  const { usuario, password } = inputValue;

  let navigate = useNavigate();

  const handleLogin = async () => {
    console.log(inputValue);
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <div>
        <InputField
          type="text"
          placeholder="Ingrese su nombre"
          label="Usuario"
          onChange={handleChange}
          value={usuario}
          name="usuario"
        />
        <InputField
          type="password"
          placeholder="Ingrese su password"
          label="Password"
          onChange={handleChange}
          value={password}
          name="password"
        />

        <input type="button" value="Login" onClick={handleLogin} />
      </div>
      <p>
        Aun no tiene una cuenta?
        <Link to="/registro">Registrese!</Link>
      </p>
    </div>
  );
};

export default Login;
