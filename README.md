Project Report: Weather Panel
Project Name: Weather Panel
Subject: Fundamentals of Web Technologies
_________________________________________________________________________________________________________________________________________________________________________
Project Overview
The Weather Panel project is a web application that allows users to input a city name and retrieve current weather information. It utilizes the OpenWeather API to fetch weather data, such as temperature, humidity, wind speed, and weather description, and displays the results in a user-friendly format. The interface is responsive and styled using Bootstrap for easy adaptation across devices.
_________________________________________________________________________________________________________________________________________________________________________
Objectives:

1)Provide users with the ability to check the weather of a city by entering its name.
2)Fetch real-time weather data from the OpenWeather API based on user input.
3)Display key weather information, including:
    -City name
    -Weather description
    -Temperature in Celsius
    -Humidity percentage
    -Wind speed in km/h
4)Display weather alerts, if applicable (e.g., heavy rain).
5)Create a visually appealing and user-friendly interface with dynamic interactions.
_________________________________________________________________________________________________________________________________________________________________________
Features:

1.Weather Data Retrieval:
-Users can enter the name of any city to receive up-to-date weather information.
-Data such as city name, weather description, temperature, humidity, and wind speed is fetched from the OpenWeather API.
2.Weather Alerts:
-If the weather in the city involves heavy rain, a warning alert will be shown on the screen to inform the user.
3.Responsive Design:
-The interface is designed to adapt to various screen sizes using the Bootstrap framework.
4.Smooth User Interaction:
-The form for city input is easy to use and updates the weather information dynamically upon form submission.
5.Error Handling:
-If the user enters an invalid city name, the application will show an alert informing the user to try again.
6.Background Image:
-The background image of the page changes smoothly with a transition effect, creating a visually pleasant environment.
_________________________________________________________________________________________________________________________________________________________________________
JavaScript Usage:
The JavaScript code in this project handles the logic for fetching and displaying weather data as well as user interaction. Below is a breakdown of its usage:

1)Fetching Weather Data:
  -Upon submitting the form, an event listener is triggered. The city name entered by the user is extracted and used to make an API request to OpenWeather.
  -The fetch method is used to make an asynchronous HTTP request to the OpenWeather API. The city name and API key are passed as query parameters.
  -The response is processed as JSON, and the relevant weather data is extracted and displayed on the page.
2)Displaying Data:
  -The JavaScript code dynamically updates the HTML content in the weather result section (e.g., city name, temperature, humidity, etc.).
  -The data is inserted into HTML elements with corresponding IDs using textContent properties.
3)Error Handling:
  -If the city name is empty or the API returns an error (e.g., city not found), an alert message is shown to the user.
4)Weather Alerts:
  -If the weather in the city includes heavy rain, a weather alert is displayed using the weatherAlert div.
5)Form Handling:
  -The form submission is intercepted using event.preventDefault(), ensuring the page does not reload when the form is submitted. This helps maintain the dynamic nature
  of the user interface.
_________________________________________________________________________________________________________________________________________________________________________
User Guide
1. How to Use:
-Open the webpage in a web browser.
-In the input field labeled "Enter City," type the name of a city (e.g., "New York").
-Click the "Get Weather" button.
-The weather information for the entered city will be displayed on the page, including:
            -City name
            -Weather description
            -Temperature in Celsius
            -Humidity percentage
            -Wind speed in km/h
-If there are any weather alerts (e.g., heavy rain), a warning message will appear.

2. Sample Use Cases:
-Use Case 1: Valid City Input

Input: "Paris"
Expected Output:
City: Paris, FR
Weather: Clear sky
Temperature: 15°C
Humidity: 78%
Wind Speed: 14 km/h

-Use Case 2: Invalid City Input

Input: "InvalidCity"
Expected Output:
An alert message "City not found. Please try again."

-Use Case 3: Weather Alert (Rainy Day)

Input: "London"
Expected Output:
Weather alert: "Weather Alert: Heavy rain expected. Stay safe!"
Weather details:
City: London, GB
Weather: Rain
Temperature: 12°C
Humidity: 85%
Wind Speed: 10 km/h

3. Error Handling:
-If the user submits an empty city name, an alert will prompt them to enter a valid city name.
-If the entered city is not found, an error message will notify the user that the city does not exist.
_________________________________________________________________________________________________________________________________________________________________________
Conclusion:
This Weather Panel project provides users with a simple, interactive way to check weather information. It utilizes the OpenWeather API to fetch real-time weather data, and JavaScript handles dynamic content updates, error handling, and weather alerts. The application is built with responsive design principles, ensuring it works well across a variety of devices.