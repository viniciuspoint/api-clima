async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "SUA_CHAVE_API"; // Substitua com sua chave da OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === "404") {
        alert("Cidade não encontrada!");
        return;
      }
  
      const cityName = data.name;
      const temperature = `${data.main.temp}°C`;
      const description = data.weather[0].description;
      const humidity = `Humidade: ${data.main.humidity}%`;
      const windspeed = `Vento: ${data.wind.speed} m/s`;
  
      document.getElementById("city-name").innerText = cityName;
      document.getElementById("temperature").innerText = temperature;
      document.getElementById("description").innerText = description;
      document.getElementById("humidity").innerText = humidity;
      document.getElementById("windspeed").innerText = windspeed;
  
      document.getElementById("weather-result").style.display = "block";
    } catch (error) {
      console.error("Erro ao obter dados do clima:", error);
      alert("Erro ao obter dados do clima.");
    }
  }
  
