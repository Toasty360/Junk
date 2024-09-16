from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# Path to ChromeDriver executable
chromedriver_path = '/path/to/chromedriver'

# Create a new instance of Chrome WebDriver
driver = webdriver.Chrome(executable_path=chromedriver_path)

# Navigate to a URL (HTTP or HTTPS)
driver.get('http://example.com')

# Wait for a moment
time.sleep(2)  # Adjust the sleep time as needed

# Reload the page
driver.refresh()

# Wait for a moment
time.sleep(2)  # Adjust the sleep time as needed

# Close the browser
driver.quit()
