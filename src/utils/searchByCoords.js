import { currentLanguage } from "./currentLanguaje";
import processCitiesResponse from "./processCitiesRes";
const { API_KEY } = process.env;

const searchCurrentCity = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=${currentLanguage}`
    );
    const data = await response.json();
    const citie = processCitiesResponse(data);
    return citie;
  } catch (error) {
    return `Error getting data: ${error.message}`;
  }
};

export default searchCurrentCity;
