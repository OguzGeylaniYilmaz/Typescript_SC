const apiKey: string = "1c07e7d355904fddedf4c43969ba9956";

const output = document.querySelector(".content") as HTMLDivElement;
const country = document.querySelector(".country") as HTMLDivElement;
const forecastContainer = document.querySelector(".forecast") as HTMLDivElement;
const searchBar = document.getElementById("searchBar") as HTMLInputElement;
const searchButton = document.getElementById("searchBtn") as HTMLInputElement;
let timezoneOffset: number | null = null;

async function fetchCoordinates(cityName: string) {
  try {
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
    const res = await fetch(geoUrl);
    const data = await res.json();

    if (data.lenghth === 0) {
      throw new Error("City not found");
    }

    return { lat: data[0].lat, lon: data[0].lon };
  } catch (error) {
    console.log("Location error");
    output.innerHTML = "<p>City not found. Please try again </p>0";
    return null;
  }
}

async function fetchWeather(cityName: string) {
  const coordinates = await fetchCoordinates(cityName);
  if (!coordinates) return;

  const { lat, lon } = coordinates;

  try {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=en`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=en`;

    const [weatherRes, forecastRes] = await Promise.all([
      fetch(weatherUrl),
      fetch(forecastUrl),
    ]);

    const weatherData = await weatherRes.json();
    const forecastData = await forecastRes.json();

    timezoneOffset = weatherData.timezone;

    displayWeather(weatherData);
    displayForecast(forecastData);
  } catch (error) {
    console.log("Weather retrieval error", error);
  }
}

function displayForecast(data: any) {
  const dailyForecast: {
    [key: string]: { tempMax: number; description: string; icon: string };
  } = {};

  data.list.forEach((item: any) => {
    const date = new Date(item.dt * 1000).toLocaleDateString("en-EN", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
    });

    if (!dailyForecast[date]) {
      dailyForecast[date] = {
        tempMax: item.main.temp,
        description: item.weather[0].description,
        icon: item.weather[0].icon,
      };
    } else {
      dailyForecast[date].tempMax = Math.max(
        dailyForecast[date].tempMax,
        item.main.temp
      );
    }
  });

  forecastContainer.innerHTML = "<h3>📅 5 Day Weather Forecast</h3>";

  Object.entries(dailyForecast).forEach(([date, forecast]) => {
    forecastContainer.innerHTML += `
      <div class="forecast-day">
        <p><strong>${date}</strong></p>
        <img src="https://openweathermap.org/img/wn/${
          forecast.icon
        }.png" alt="${forecast.description}">
        <p>🌡️ ${forecast.tempMax.toFixed(1)}°C</p>
        <p>🌤️ ${forecast.description}</p>
      </div>
    `;
  });
}

function updateLocalTime() {
  if (timezoneOffset !== null) {
    const nowUTC = new Date();
    const localtime = new Date(nowUTC.getTime() + timezoneOffset * 1000);

    let formattedTime = new Intl.DateTimeFormat("en-EN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "UTC",
    }).format(localtime);

    return formattedTime;
  }
}

function displayWeather(data: any) {
  timezoneOffset = data.timezone;

  console.log(data);
  const sunriseTime = new Date((data.sys.sunrise + timezoneOffset) * 1000);
  const sunsetTime = new Date((data.sys.sunset + timezoneOffset) * 1000);

  const formattedSunrise = new Intl.DateTimeFormat("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "UTC",
  }).format(sunriseTime);

  const formattedSunset = new Intl.DateTimeFormat("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "UTC",
  }).format(sunsetTime);

  country.classList.add("country");
  country.innerHTML = `<h2>Weather in ${data.name}, ${data.sys.country}</h2>
                        <h3> ${data.main.temp} °C`;

  output.classList.add("desc");
  output.innerHTML = ` <p>Local Time : ${updateLocalTime()} 🕒 </p>
                       <p>Wind Speed : ${data.wind.speed} 💨 (${
    data.wind.deg
  }) </p>
                       <p>Cloudiness : ${data.weather[0].description} 🌤️</p>
                       <p>Pressure : ${data.main.pressure} hpa</p>
                       <p>Humidity : ${data.main.humidity}%</p>
                       <p>Sunrise : ${formattedSunrise} 🌄 </p>
                       <p>Sunset : ${formattedSunset} 🌇</p>
                       <p>Geo Coords : ${
                         Math.round(data.coord.lat * 100) / 100
                       }  ${Math.round(data.coord.lon * 100) / 100}  </p>`;

  clearInterval((window as any).timeInternal);
  (window as any).timeInternal = setInterval(updateLocalTime, 1000);
}

searchButton.addEventListener("click", () => {
  const cityName = searchBar.value.trim();
  if (cityName) fetchWeather(cityName);
  else output.innerHTML = "<p >Please enter a city name.</p>";
});
