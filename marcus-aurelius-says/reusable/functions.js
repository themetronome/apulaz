const average = function () {
  const values = Object.values(arguments);
  let sum = 0;

  for (let i = 0; i < values.length; i += 1) {
    sum += values[i];
  }

  return sum / values.length;
};

const square = (x) => x * x;

const cube = (x) => Math.pow(x, 3);

const calculate = () => {
  const result = [];

  for (let i = 0; i < 10; i += 1) {
    result.push(square(i));
    result.push(cube(i));
    result.push(average(square(i), cube(i)));
  }

  return result;
};
