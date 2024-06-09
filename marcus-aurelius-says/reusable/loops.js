const range = (start, end) => {
  const result = [];

  for (let i = start; i <= end; i += 1) {
    result.push(i);
  }

  return result;
};

const rangeOdd = (start, end) => {
  const result = [];

  for (let i = start; i <= end; i++) {
    i % 2 !== 0 && result.push(i);
  }

  return result;
};
