const capitalize =
  string => string.charAt(0).toUpperCase() + string.slice(1);

const pluralize = (numberOfBottles) => {
  if (numberOfBottles === 1) {
    return '';
  }
  return 's';
};

const nullableText = (numberOfBottles, originalText, textIfZeroOrLess) => {
  if (numberOfBottles <= 0) {
    return textIfZeroOrLess;
  }
  return originalText;
};

const downTo = (max, min) => {
  const numbers = [];
  for (let n = max; n >= min; n--) {
    numbers.push(n);
  }
  return numbers;
};

export { capitalize, downTo, pluralize, nullableText };
