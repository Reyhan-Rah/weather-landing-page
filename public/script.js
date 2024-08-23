document.getElementById('loadWeatherApp').addEventListener('click', function() {
    const weatherAppContainer = document.getElementById('weatherAppContainer');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://rayka-weather-app.web.app/'; // URL to the weather app
    iframe.id = 'weatherIframe';
    iframe.allow = 'geolocation';
    weatherAppContainer.innerHTML = '';
    weatherAppContainer.appendChild(iframe);
});

window.addEventListener('message', function(event) {
    if (event.origin !== 'https://rayka-weather-app.web.app') {
        // Ignore messages from other origins for security
        return;
    }

    if (event.data.action === 'hideIframe') {
        // Hide the iframe
        const iframe = document.getElementById('weatherIframe');
        if (iframe) {
            iframe.style.display = 'none';
        }
    } else if (event.data.action === 'navigateAway') {
        // Navigate the iframe to a blank page or another URL
        const iframe = document.getElementById('weatherIframe');
        if (iframe) {
            iframe.src = 'about:blank';
        }
    } else if (event.data && event.data.temperature) {
        // Save weather data to localStorage
        localStorage.setItem('weatherData', JSON.stringify(event.data));
        displayWeather(event.data);
    }
});

function displayWeather(weather) {
    const updatedTime = new Date(weather.lastUpdated).toLocaleString();

    document.getElementById('weatherAppContainer').innerHTML = `
        <p><strong>Location:</strong> ${weather.city}, ${weather.country}</p>
        <p><strong>Temperature:</strong> ${weather.temperature}°C</p>
        <p><strong>Weather:</strong> ${weather.description}</p>
        <p><strong>Last Updated:</strong> ${updatedTime}</p>
      `;
}

// Load the last weather data if available
window.addEventListener('load', function() {
    const storedData = localStorage.getItem('weatherData');
    if (storedData) {
        const weatherData = JSON.parse(storedData);
        displayWeather(weatherData);
    }
});
