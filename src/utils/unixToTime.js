const unixToTime = (unix) => {
  const timeUnix = unix * 1000;
  const date = new Date(timeUnix);
  return `${date.getHours()}:${date.getMinutes()}`;
};

export default unixToTime;
