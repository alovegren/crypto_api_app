## Functionality
1. Execute app with two command line arguments
  - first should be a symbol for the cryptocurrency name
  - second should be amount of the cryptocurrency
  - parse the command line arguments
    - coerce the crypto amount to an integer

2. Within a coinAPIService script,
  - import axios
  - expose a method getDollarAmount
    - to send the API request that takes a string
    - form an API request 
    - gets the response
    - parse the exchange rate from the response and return it as an integer
  - export the one method

3. within getTotalValue.js (main app file)
  - import method from coinAPIService
  - with the parsed/coerced command line arguments, invoke the method to get the exchange rate
  - multiply the exchange rate by the amount that the user has and return it
  - maybe interpolated in a string idk

## Authorization

We'll need one of two methods:
  Custom authorization header named X-CoinAPI-Key
  Query string parameter named apikey