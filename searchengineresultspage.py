import requests
from pprint import pprint
# Specify content type and form the request body
headers = {'Content-Type': 'application/json'}
job_params = {
    'scraper': 'google_search',
    'q': 'restaurants near me',
    'domain': 'com',
    'parse': 'true',
    'device': 'mobile',
    'geo': 'Boston,Massachusetts,United States',
    'locale': 'en-us',
    'page': '1'
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
