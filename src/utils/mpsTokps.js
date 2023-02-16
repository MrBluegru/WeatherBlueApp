const mpsToKph = (metersPerSecond) => {
  return metersPerSecond !== undefined
    ? `${(metersPerSecond * 3.6).toFixed(1)} Km/h`
    : `0 km/h`;
};
export default mpsToKph;
