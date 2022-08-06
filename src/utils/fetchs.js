import axios from 'axios';
const baseUrl = 'https://crypto.develotion.com';

const getApiKey = () => {
  const apiKey = localStorage.getItem('usuarioKey');
  const config = {
    headers: {
      apikey: apiKey,
    },
  };
  return config;
};

//POST
const registro = async (obj) => {
  const res = await axios.post(`${baseUrl}/usuarios.php`, obj);
  return res.data;
};

const login = async (obj) => {
  const res = await axios.post(`${baseUrl}/login.php`, obj);
  return res.data;
};

const nuevaTrans = async (obj) => {
  const config = getApiKey();
  const res = await axios.post(`${baseUrl}/transacciones.php`, obj, config);
  return res.data;
};
//GET
const ciudad = async (idDep) => {
  const res = await axios.get(
    `${baseUrl}/ciudades.php?idDepartamento=${idDep}`
  );
  return res.data;
};
const departamentos = async () => {
  const res = await axios.get(`${baseUrl}/departamentos.php`);
  return res.data;
};

const monedas = async () => {
  const config = getApiKey();
  const res = await axios.get(`${baseUrl}/monedas.php`, config);
  return res.data;
};
const transacciones = async (num) => {
  const config = getApiKey();
  const res = await axios.get(
    `${baseUrl}/transacciones.php?idUsuario=${num}`,
    config
  );
  return res.data;
};


export default {
  registro,
  ciudad,
  departamentos,
  login,
  nuevaTrans,
  monedas,
  transacciones,
};
