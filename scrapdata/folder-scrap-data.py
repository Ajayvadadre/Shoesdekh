import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin, urlparse

def create_folder(image_name):
    # Remove invalid characters from folder name
    valid_characters = set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_ ")
    folder_name = ''.join(char for char in image_name if char in valid_characters)
    return folder_name.strip()

# Replace the URL with the target website
url = 'https://www.superkicks.in/collections/accessories'

# Send a GET request to the URL
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the HTML content of the page
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find all image tags on the page
    images = soup.find_all('img')

    # Create a directory to save the images
    os.makedirs('images', exist_ok=True)

    # Download and save each image
    for i, image in enumerate(images):
        src = image.get('src')
        alt = image.get('alt')

        # If the image has a source URL and alt text
        if src and alt:
            # Prepend the base URL if the src is a relative URL
            full_src = urljoin(url, src)

            # Create a unique filename for each image
            filename = f'image_{i + 1}_{alt}.jpg'

            # Create a folder for each image based on the alt text
            folder_name = create_folder(alt)
            folder_path = os.path.join('images', folder_name)

            # Create the folder if it doesn't exist
            os.makedirs(folder_path, exist_ok=True)

            # Adjust the filename path to avoid errors
            filename_path = os.path.join(folder_path, filename)

            # Download the image
            img_data = requests.get(full_src).content

            # Save the image to the created folder
            with open(filename_path, 'wb') as img_file:
                img_file.write(img_data)

            print(f"Image {i + 1} saved in folder: {folder_name}")
else:
    print(f"Failed to retrieve content. Status Code: {response.status_code}")
