const mtsToKm = (mts) => {
  if (mts < 1000) {
    return `${mts} Mts.`;
  }
  if (mts > 1000) {
    return `${mts / 1000} Km.`;
  }
};

export default mtsToKm;
