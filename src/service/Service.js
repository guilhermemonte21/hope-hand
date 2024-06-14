import axios from "axios";

// Declarar a porta da API
const portaApi = "5082";

// Declarar o ip da máquina

const ip = "192.168.21.128";
const ip1 = "192.168.21.115";
const ip2 = "192.168.21.101";
const ipLucas = "172.16.39.100";
const ipSampaio = "192.168.21.115";
const ipMikael = "172.16.39.92"

// Definir URL padrão
// const apiUrllocal = `http://${ipLucas}:${portaApiLucas}/api`;
const apiUrllocal = `http://${ipSampaio}:${portaApi}/api`;

// Trazer a configuração do axios
const api = axios.create({
  baseURL: apiUrllocal,
});

export default api;
