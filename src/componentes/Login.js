import fetchs from '../utils/fetchs';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from './InputField';
import funciones from '../utils/funciones';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

const Login = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState({ usuario: '', password: '' });
  const { usuario, password } = inputValue;

  let navigate = useNavigate();

  const handleLogin = async () => {
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
    <section className="card col-6 shadow rounded offset-3 mt-5">
      <CardHeader title="Inicie sesion:" />
      <article className="card-body">
        <InputField
          type="text"
          placeholder="Ingrese su nombre de usuario"
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
      </article>
      <CardFooter
        title="Aun no tiene una cuenta?"
        subtitle={<Link to="/registro">Registrese!</Link>}
      />
    </section>
  );
};

export default Login;
