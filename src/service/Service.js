import axios from "axios";

// Declarar a porta da API
const portaApi = "5082";

// Declarar o ip da máquina

const ip = "192.168.21.99";

// Definir URL padrão
const apiUrllocal = `http://${ip}:${portaApi}/api`;

// Trazer a configuração do axios
const api = axios.create({
    baseURL: apiUrllocal,
});

export default api;