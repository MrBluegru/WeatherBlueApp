const API_KEY = process.env.REACT_APP_API_KEY;

export const onSearch = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  try {
    if (data.cod === "404") {
      console.log({
        title: `City ${city} not found`,
        icon: "error",
        button: "Ok",
      });
    } else {
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
    }
  } catch (error) {
    console.log(error);
  }
};
