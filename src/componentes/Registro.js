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
        sendMessage('ok', 'Registro exitoso');
      } catch (error) {
        sendMessage('error', error.response.data.mensaje);
      }
    }
  };

  return (
    <div className="form-row col-6">
      <h3 className="mt-3">Ingrese sus datos </h3>
      <label className="form-group mt-4 col-12">
        Usuario:
        <input
          placeholder="Ingrese su nombre"
          className="form-control "
          ref={user}
          type="text"
        />
      </label>
      <label className="form-group col-12">
        Password:
        <input
          placeholder="Ingrese su password"
          className="form-control"
          ref={pass}
          type="password"
        />
      </label>
      <br />

      <label className="form-group  col-12">
        Departamento:
        <select
          onChange={handleDepartamento}
          ref={depar}
          defaultValue=""
          className="form-control ">
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

      <label className="form-group col-12">
        Ciudad
        <select ref={ciud} defaultValue="" className="form-control">
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

      <input
        className="btn btn-primary mt-4"
        type="button"
        value="Registrarse"
        onClick={handleRegistro}
      />
      <p>
        Ya tiene una cuenta?
        <Link to="/">Login!</Link>
      </p>
    </div>
  );
};

export default Registro;
