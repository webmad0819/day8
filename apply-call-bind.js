// let employee1 = {
//   name: "test",
//   surname: "garcia",
//   salary: 40000
// };

// let freelance2 = {
//   name: "test",
//   surname: "garcia",
//   freelanceType: "developer",
//   date: "2019-01-10",
//   salary: 10000
// };

// function reportSalary(currency, taxes) {
//   if (taxes) {
//     console.log(this.salary * taxes + ` ${currency}`);
//   } else {
//     console.log(this.salary + ` ${currency}`);
//   }
// }

// reportSalary.apply(
//   employee1,
//   Array(100)
//     .fill()
//     .map()
// );
// reportSalary.apply(freelance2, ["$", 1.3]);

// reportSalary.call(employee1, "eur", test2, test3);
// reportSalary.call(freelance2, "$", test2, test3);

function sumAllNumbers() {
  const totalArguments = arguments.length;
  let acum = 0;

  for (var i = 0; i < totalArguments; i++) {
    acum += arguments[i];
  }

  return acum;
}

console.log(
  sumAllNumbers.apply(
    this,
    Array(1000)
      .fill()
      .map((x, idx) => idx + 1)
      .filter(x => x % 2 === 0)
      .filter(x => x > 50)
  )
);
