import requests
from pprint import pprint

# Specify content type and form the request body
headers = {'Content-Type': 'application/json'}

job_params = {
    'scraper': 'google_shopping_search',
    'q':'oneplus',
    'domain':'com',
    'parse':'true',
    'device':'desktop_chrome',
    'geo':'Boston,Massachusetts,United States',
    'locale':'en-us',
    'page':'1',
    'nfpr':'true',
}

# Post job and get response
response = requests.request(
    'POST',
    'https://rt.serpmaster.com/',
    headers=headers,
    json=job_params,
    auth=('username', 'password')
)

#Print the response body
pprint(response.json())
