import { API_KEY } from "@env";
import { currentLanguage } from "./currentLanguaje";

const searchCurrentCity = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=${currentLanguage}`
  );
  const data = await response.json();
  try {
    if (data.main !== undefined) {
      const city = {
        id: data.id,
        name: data.name,
        country: data.sys.country,
        weather: data.weather[0].description,
        feelsLike: data.main.feels_like,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        img: data.weather[0].icon,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        seaLevel: data.main.sea_level,
        grndLevel: data.main.grnd_level,
        visibility: data.visibility,
        windSpeed: data.wind.speed,
        windDeg: data.wind.deg,
        windGust: data.wind.gust,
        clouds: data.clouds.all,
        timeDataUnix: data.dt,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        lat: data.coord.lat,
        lon: data.coord.lon,
      };
      return city;
    } else {
      console.log("Error getting data");
    }
  } catch (error) {
    console.log(error);
  }
};

export default searchCurrentCity;
