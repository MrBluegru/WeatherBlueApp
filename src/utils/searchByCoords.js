import { API_KEY } from "@env";

export const searchCurrentCity = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  const data = await response.json();
  try {
    if (data.main !== undefined) {
      const city = {
        min: data.main.temp_min,
        max: data.main.temp_max,
        img: data.weather[0].icon,
        id: data.id,
        wind: data.wind.speed,
        temp: data.main.temp,
        name: data.name,
        weather: data.weather[0].main,
        clouds: data.clouds.all,
        logitude: data.coord.lon,
        latitude: data.coord.lat,
      };
      return city;
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};
