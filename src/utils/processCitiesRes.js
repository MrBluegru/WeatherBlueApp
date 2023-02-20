const processCitiesResponse = (data) => {
  if (data.cod === "404") {
    return { cod: 404, message: "notFound" };
  }
  if (data.cod === 401) {
    return { cod: 401, message: "unauthorizedRequest" };
  }
  if (data.cod === 200) {
    const city = {
      id: data.id,
      name: data.name,
      country: data.sys.country,
      weather:
        data.weather[0] !== undefined ? data.weather[0].description : "n/a",
      feelsLike: data.main.feels_like,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      img: data.weather[0] !== undefined ? data.weather[0].icon : "n/a",
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
  }
};

export default processCitiesResponse;
