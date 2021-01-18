import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function getHistory() {
  return api.get('/conversion');
}

function create(conversion: ConversionEntry) {
  return api.post('/conversion', conversion);
}

const CoinConversionService = {
  create,
  getHistory,
};

export default CoinConversionService;
