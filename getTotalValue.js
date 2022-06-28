import getExchangeRate from "./coinAPIService.js";

const args = process.argv;
const [ cryptoSymbol, amount ] = [args[args.length - 2], args[args.length - 1]];

const getDollarAmount = async (cryptoSymbol, amount) => {
  const exchangeRate = await getExchangeRate(cryptoSymbol);
  return Number(exchangeRate) * Number(amount);
}

const dollarAmount = await getDollarAmount(cryptoSymbol, amount);
console.log(dollarAmount);

export default getDollarAmount;