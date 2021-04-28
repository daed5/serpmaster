const axios = require('axios')

const params = {
  'scraper': 'google_shopping_search',
  'q':'oneplus',
  'domain':'com',
  'parse':'true',
  'device':'desktop_chrome',
  'geo':'Boston,Massachusetts,United States',
  'locale':'en-us',
  'page':'1',
  'nfpr':'true',
  'access_token': 'ACCESS_TOKEN' //Your access token from SERPMaster
}

axios.get('https://rt.serpmaster.com/', {
  params: params
})
  .then(response => console.log(response))
  .catch(error => console.log(error))
