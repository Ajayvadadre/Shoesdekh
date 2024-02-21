import requests
from bs4 import BeautifulSoup
import os

url = 'https://www.superkicks.in/collections/accessories'

r = requests.get(url)

soup = BeautifulSoup(r.text, 'html.parser')

images = soup.find_all('img')

for image in images:
    # Check if 'alt' and 'src' attributes exist and 'src' is not an empty string
    if 'alt' in image.attrs and 'src' in image.attrs and image['src'].strip():
        names = image['alt']
        links = image['src']
        with open(names + '.jpg', 'wb') as f:
            im = requests.get(links)
            f.write(im.content)
    else:
        print("Alt or Src attribute not found or 'src' is an empty string for this image.")
