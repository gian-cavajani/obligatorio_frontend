import fetchs from '../utils/fetchs';
// import Select from './Select';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from './InputField';

const Registro = ({ sendMessage }) => {
  const [ciudades, setCiudades] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  useEffect(() => {
    fetchs.departamentos().then((r) => {
      setDepartamentos(r.departamentos);
    });
  }, []);

  const user = useRef(null);
  const pass = useRef(null);
  const depar = useRef(null);
  const ciud = useRef(null);

  const handleDepartamento = async (val) => {
    const ciudads = await fetchs.ciudad(val.target.value);
    setCiudades(ciudads.ciudades);
  };

  const handleRegistro = async () => {
    let usuario = user.current.value;
    let password = pass.current.value;
    let idDepartamento = depar.current.value;
    let idCiudad = ciud.current.value;
    if (
      usuario === '' ||
      password === '' ||
      idDepartamento === '' ||
      idCiudad === ''
    ) {
      sendMessage('error', 'Los campos no pueden estar vacios');
    } else {
      try {
        const user = await fetchs.registro({
          usuario,
          password,
          idDepartamento,
          idCiudad,
        });
        localStorage.setItem('usuarioKey', user.apiKey);
        console.log(user);
        sendMessage('ok', 'Registro exitoso');
      } catch (error) {
        sendMessage('error', error.response.data.mensaje);
      }
    }
  };

  return (
    <div>
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

      <label>
        Departamento:
        {/* <Select lista={departamentos} handle={handleDepartamento} ref={depar}/> */}
        <select onChange={handleDepartamento} ref={depar} defaultValue="">
          <option disabled value="">
            Elija un departamento
          </option>
          {departamentos.map((d) => (
            <option key={d.id} value={d.id}>
              {d.nombre}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label>
        Ciudad
        {/* <Select ref={ciud} lista={ciudades} /> */}
        <select ref={ciud} defaultValue="">
          <option disabled={true} value="">
            Elija una ciudad
          </option>
          {ciudades.map((d) => (
            <option key={d.id} value={d.id}>
              {d.nombre}
            </option>
          ))}
        </select>
      </label>
      <br />

      <input type="button" value="Registrarse" onClick={handleRegistro} />
      <p>
        Ya tiene una cuenta?
        <Link to="/login">Login!</Link>
      </p>
    </div>
  );
};

export default Registro;
