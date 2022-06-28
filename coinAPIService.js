import axios from 'axios';

const BASE_URL = 'https://rest-sandbox.coinapi.io/v1/exchangerate';

const getExchangeRate = async (cryptoSymbol) => {
  const response = await axios.get(`${BASE_URL}/${cryptoSymbol}/USD`, {
    headers: { 
      'X-CoinAPI-Key': '3EE86FE8-A6DC-4BC5-9695-BFEF37D128E3',
      'Accept': 'application/json',
      'Accept-Encoding': 'deflate, gzip',
    }
  });

  return response.data.rate;
};

export default getExchangeRate;