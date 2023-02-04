const degreesToCardinal = (degrees) => {
  const cardinalDirections = [
    "North",
    "Northeast",
    "East",
    "Southeast",
    "South",
    "Southwest",
    "West",
    "Northwest",
  ];
  const index = Math.floor(degrees / 45 + 0.5) % 8;
  return cardinalDirections[index];
};

export default degreesToCardinal;
