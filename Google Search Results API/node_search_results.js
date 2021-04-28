const axios = require('axios')

const params = {
  'scraper': 'google_search',
  'q': 'restaurants near me',
  'domain': 'com',
  'parse': 'true',
  'device': 'mobile',
  'geo': 'Boston,Massachusetts,United States',
  'locale': 'en-us',
  'page': '1',
  'access_token': 'ACCESS_TOKEN' //Your access token from SERPMaster
}

axios.get('https://rt.serpmaster.com/', {
  params: params
})
  .then(response => console.log(response))
  .catch(error => console.log(error))
