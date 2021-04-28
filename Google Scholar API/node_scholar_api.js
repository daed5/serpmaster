const axios = require('axios')

const params = {
  'scraper': 'google',
  'url':'https://scholar.google.com/scholar?hl=en&q=einstein&btnG=&as_sdt=1%2C5&as_sdtp=', //Scholar URL
  'device':'desktop_chrome',
  'locale':'en-us',
  'access_token': 'ACCESS_TOKEN' //Your access token from SERPMaster
}

axios.get('https://rt.serpmaster.com/', {
  params: params
})
  .then(response => console.log(response))
  .catch(error => console.log(error))
