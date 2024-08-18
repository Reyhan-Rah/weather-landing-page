document.getElementById('loadWeatherApp').addEventListener('click', function() {
    const weatherAppContainer = document.getElementById('weatherAppContainer');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://your-weather-app-url.com'; // Replace with your actual weather app URL
    weatherAppContainer.innerHTML = '';
    weatherAppContainer.appendChild(iframe);
});
