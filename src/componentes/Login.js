import fetchs from '../utils/fetchs';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from './InputField';
import funciones from '../utils/funciones';
const Login = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState({ usuario: '', password: '' });
  const { usuario, password } = inputValue;

  let navigate = useNavigate();

  const handleLogin = async () => {
    console.log(inputValue);
    try {
      const user = await fetchs.login({ usuario, password });
      funciones.setStorage(user.id, user.apiKey);
      navigate('/dash');
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
    <div className="form-row col-6">
      <h3 className="mt-3">Inicie sesion</h3>
      <div className="mt-4">
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

        <input
          className="btn btn-primary mt-4"
          type="button"
          value="Login"
          onClick={handleLogin}
        />
      </div>
      <p>
        Aun no tiene una cuenta?
        <Link to="/registro">Registrese!</Link>
      </p>
    </div>
  );
};

export default Login;
