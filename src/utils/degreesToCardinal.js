import { currentLanguage } from "./currentLanguaje";

const degreesToCardinal = (degrees) => {
  const cardinalDirectionsEn = [
    "North",
    "Northeast",
    "East",
    "Southeast",
    "South",
    "Southwest",
    "West",
    "Northwest",
  ];
  const cardinalDirectionsEs = [
    "Norte",
    "Noreste",
    "Este",
    "Sureste",
    "Sur",
    "Suroeste",
    "Oeste",
    "Noroeste",
  ];
  const index = Math.floor(degrees / 45 + 0.5) % 8;

  if (currentLanguage === "es") {
    return cardinalDirectionsEs[index];
  } else {
    return cardinalDirectionsEn[index];
  }
};

export default degreesToCardinal;
