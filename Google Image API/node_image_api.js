const axios = require('axios')

const params = {
  'scraper': 'google_search',
  'tbm': 'isch',
  'q': 'restaurants near me',
  'domain': 'com',
  'parse': 'true',
  'device': 'mobile',
  'geo': 'Boston,Massachusetts,United States',
  'locale': 'en-us',
  'page': '1',
  'access_token': '2db49b6ad018e93e23f6b6904575ae71e1e6ef5b' //Your access token from SERPMaster
}

axios.get('https://rt.serpmaster.com/', {
  params: params
})
  .then(response => console.log(response))
  .catch(error => console.log(error))
