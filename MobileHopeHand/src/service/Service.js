import axios from "axios";

// Declarar a porta da API
const portaApi = "5082";

// Declarar o ip da máquina

const ipHenrique = "192.168.21.128";
const ip1 = "192.168.21.115";
const ip2 = "192.168.21.101";
const ipLucas = "172.16.39.100";
const ipSampaio = "172.16.7.104";
const ipMikael = "172.16.39.92";

const ipLucasCasa = "192.168.0.234";

// Definir URL padrão

// const apiUrllocal = `http://${ipLucas}:${portaApiLucas}/api`;
const apiUrllocal = `http://${ipSampaio}:${portaApi}/api`;
// const apiUrllocal = `http://${ipHenrique}:${portaApi}/api`;

// Trazer a configuração do axios
const api = axios.create({
  baseURL: apiUrllocal,
});

export default api;
