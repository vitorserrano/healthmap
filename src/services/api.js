import axios from 'axios';

const api = axios.create({
  baseURL: "http://mobile-aceite.tcu.gov.br/mapa-da-saude"
});

export default api;