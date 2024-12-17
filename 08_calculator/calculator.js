const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let total = 0;
  for ( let num of numbers) {
    total += num;
  }
  return total;
};

const multiply = function(numbers) {
  let total = 1;
  for ( let num of numbers) {
    total *= num;
  }
  return total;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++){
    result *= i
  }
	return result;
};

// честно говоря, я уже устал
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
