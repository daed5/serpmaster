const axios = require('axios')

const params = {
  'scraper': 'google_suggest',
  'q': 'restaurants near me',
  'device': 'mobile',
  'locale': 'en-us',
  'access_token': 'ACCESS_TOKEN' //Your access token from SERPMaster
}

axios.get('https://rt.serpmaster.com/', {
  params: params
})
  .then(response => console.log(response))
  .catch(error => console.log(error))
