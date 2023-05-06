export const sum = (numbers) => {
  let total = 0;

  numbers.forEach((number) => {
    total += number;
  });

  return total;
};

export const sumWithCallback = (numbers, callback) => {
  let total = 0;

  numbers.forEach((number) => {
    total += number;
  });

  return callback(total);
};
