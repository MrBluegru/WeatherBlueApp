import { currentLanguage } from "./currentLanguaje";
import processCitiesResponse from "./processCitiesRes";
const { API_KEY } = process.env;

const searchCitiesByName = async (value) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value},&appid=${API_KEY}&units=metric&lang=${currentLanguage}`
    );
    const data = await response.json();
    const citie = processCitiesResponse(data);
    return citie;
  } catch (error) {
    return `Error getting data: ${error.message}`;
  }
};

export default searchCitiesByName;
