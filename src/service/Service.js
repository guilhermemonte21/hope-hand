import axios from "axios";

// Declarar a porta da API
const portaApi = "5082";

// Declarar o ip da máquina

const ip = "172.16.39.92";

// Definir URL padrão
const apiUrllocal = `http://${ip}:${portaApi}/api`;

// Trazer a configuração do axios
const api = axios.create({
  baseURL: apiUrllocal,
});

export default api;
