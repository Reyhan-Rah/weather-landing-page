document.getElementById('loadWeatherApp').addEventListener('click', function() {
    const weatherAppContainer = document.getElementById('weatherAppContainer');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://rayka-weather-app.web.app/';
    iframe.allow = 'geolocation';
    weatherAppContainer.innerHTML = '';
    weatherAppContainer.appendChild(iframe);
});
