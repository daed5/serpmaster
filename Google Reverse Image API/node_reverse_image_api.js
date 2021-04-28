const axios = require('axios')

const params = {
  'scraper': 'google_images',
  'q': 'https://i.picsum.photos/id/502/200/200.jpg?hmac=c6mcZ5mcmjadIeDKaJClpvPz9R9-X9q6c0Un-n73Kv4',
  'domain': 'com',
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
