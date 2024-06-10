import axios from "axios";

// Declarar a porta da API
const portaApi = "4466";
const portaApiLucas = "5082";

// Declarar o ip da máquina

const ip = "192.168.21.101";
const ipLucas = "192.168.21.97";

// Definir URL padrão
const apiUrllocal = `http://${ipLucas}:${portaApiLucas}/api`;

// Trazer a configuração do axios
const api = axios.create({
    baseURL: apiUrllocal,
});

export default api;