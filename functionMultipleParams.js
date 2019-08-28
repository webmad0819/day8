function sumAny() {
  let sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

console.log(sumAny(2, 2, 2, 2, 2, 10));
console.log(sumAny(2, 2, 2, 2, 2, 10, 20, 30));