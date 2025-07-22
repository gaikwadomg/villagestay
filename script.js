  const apiKey = "f16a733ec659567bad81490f104a0b17"; // Replace with your actual key

  function getWeather() {
    const place = document.getElementById("placeInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;

        document.getElementById("weatherResult").innerHTML = `
          <p><strong>Temperature:</strong> ${temp}°C</p>
          <p><strong>Condition:</strong> ${description}</p>
          <p><strong>Humidity:</strong> ${humidity}%</p>
        `;
      })
      .catch(err => {
        document.getElementById("weatherResult").innerHTML = "⚠️ Unable to fetch weather.";
        console.error(err);
      });
  }
