import requests
from pprint import pprint

# Specify content type and form the request body
headers = {'Content-Type': 'application/json'}

job_params = {
    'scraper': 'google',
    'url':'https://scholar.google.com/scholar?hl=en&q=einstein&btnG=&as_sdt=1%2C5&as_sdtp=', #Scholar URL
    'device':'desktop_chrome',
    'locale':'en-us',
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
