import axios from "axios";

// Declarar a porta da API
const portaApi = "4466";

// Declarar o ip da máquina

const ip = "192.168.21.101";

// Definir URL padrão
const apiUrllocal = `http://${ip}:${portaApi}/api`;

// Trazer a configuração do axios
const api = axios.create({
  baseURL: apiUrllocal,
});

export default api;