var apiUrl = "https://api.weather.gov/gridpoints/TOP/31,80/forecast";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    displayForecast(data);
    visualizeForecast(data);
    console.log(data,properties,periods[0],temperature);
  });

console.log("data");

