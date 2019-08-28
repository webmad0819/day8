var salary = 70000

let employee1 = {
  name: "test",
  surname: "garcia",
  salary: 40000
};

let freelance2 = {
  name: "test",
  surname: "garcia",
  freelanceType: "developer",
  date: "2019-01-10",
  salary: 10000
};

function reportSalary(currency, taxes) {
  console.log(this);

  if (taxes) {
    console.log(this.salary * taxes + ` ${currency}`);
  } else {
    console.log(this.salary + ` ${currency}`);
  }
}

let boundEmployee1 = reportSalary.bind(employee1);
boundEmployee1("eur")

// reportSalary.apply(employee1, ["eur"]);
// console.log("*".repeat(100))
// reportSalary.apply(freelance2, ["$", 1.3]);
// console.log("*".repeat(100))
// reportSalary();
// console.log("*".repeat(100))
