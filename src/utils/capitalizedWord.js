const capitalizedWord = (word) => {
  if (word !== undefined) {
    return word.replace(/^\w/, (c) => c.toUpperCase());
  } else {
    return "N/A";
  }
};

export default capitalizedWord;
