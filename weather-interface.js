//



$(document).ready(function() {
    $('#weatherLocation').click(function() {
      const city = $('#location').val();
      $('#location').val("");
  
      let request = new XMLHttpRequest();
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f68015cb4910abf208ca4d742ad9298f`;
  
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      }
  
      request.open("GET", url, true);
      request.send();
  
     const getElements = function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
        $('.tempMax').text(`The maximum temperature of ${city} is ${response.main.temp_max} degrees.`);
        $('.tempMin').text(`The minimum temperature of ${city} is ${response.main.temp_min} degrees.`)

      }
    });
  });