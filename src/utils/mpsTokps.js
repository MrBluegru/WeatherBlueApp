const mpsToKph = (metersPerSecond) => {
  return `${(metersPerSecond * 3.6).toFixed(1)} Km/h`;
};
export default mpsToKph;
