const axios = require('axios')

const params = {
  'scraper': 'google_shopping_pricing',
  'q':'5772940798935434781', //product id
  'domain':'com',
  'parse':'true',
  'device':'desktop_chrome',
  'geo':'Boston,Massachusetts,United States',
  'locale':'en-us',
  'access_token': 'ACCESS_TOKEN' //Your access token from SERPMaster
}

axios.get('https://rt.serpmaster.com/', {
  params: params
})
  .then(response => console.log(response))
  .catch(error => console.log(error))
