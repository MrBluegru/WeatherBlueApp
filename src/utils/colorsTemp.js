const colorByTemp = (temp) => {
  if (temp <= -20) {
    return "#383061";
  } else if (temp <= -10) {
    return "#407071";
  } else if (temp < 1) {
    return "#3b5878";
  } else if (temp >= 1 && temp < 10) {
    return "#44664c";
  } else if (temp >= 10 && temp < 20) {
    return "#5b6e2e";
  } else if (temp >= 20 && temp < 30) {
    return "#9d8422";
  } else if (temp >= 30 && temp < 40) {
    return "#a45723";
  } else if (temp >= 40) {
    return "#612b19";
  }
};

export default colorByTemp;
