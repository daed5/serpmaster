import requests
from pprint import pprint

# Specify content type and form the request body
headers = {'Content-Type': 'application/json'}
job_params = {
  'scraper': 'google_search',
  'tbm': 'isch'
  'q': 'restaurants near me',
  'domain': 'com',
  'parse': 'true',
  'device': 'mobile',
  'geo': 'Boston,Massachusetts,United States',
  'locale': 'en-us',
  'page': '1'
}

# Post job with your credentials from SERPMaster and get the response
response = requests.request(
  'POST',
  'https://rt.serpmaster.com/',
  headers=headers,
  json=job_params,
  auth=('username', 'password')
)

#Print the response body
pprint(response.json())
