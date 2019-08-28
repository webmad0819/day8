function createReportOfStars(stars, reportType) {
  function createReportFn(starData) {
    console.log(starData);
  }

  function createReportFnAsTable(starData) {
    console.table(`****** ${starData} ******`);
  }

  function reportStarData(star, reporter) {
    if (star.size < 500) {
      star.sizeStr = "small";
    } else {
      star.sizeStr = "big";
    }

    let output = `The star ${star.name} is ${star.sizeStr}`;

    reporter(output);
  }

  switch (reportType) {
    case 1:
      stars.forEach(star => reportStarData(star, createReportFn));
      break;
    case 2:
      stars.forEach(star => reportStarData(star, createReportFnAsTable));
      break;
  }
}

const stars = [
  {
    name: "syrius",
    size: 300,
    type: "blue"
  },
  {
    name: "cylyon",
    size: 10,
    type: "red"
  },
  {
    name: "gemini",
    size: 2300,
    type: "yellow"
  }
];

createReportOfStars(stars, 2);
