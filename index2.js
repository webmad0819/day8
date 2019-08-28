// const sum = (a, b) => a + b;

// const sum = function(a, b) {
//   return a + b;
// };

function createReportFn(starData) {
    console.log(starData)
}

function createReportFnAsTable(starData) {
    console.table(`****** ${starData} ******`)
}

function reportStarData (star, reporter) {
    if (star.size < 500) {
        star.sizeStr = "small"
    }   else {
        star.sizeStr = "big"
    }

    let output = `The star ${star.name} is ${star.sizeStr}`

    reporter(output)
}

const starData = {
    name: "syrius",
    size: 300,
    type: "blue"
}

reportStarData(starData, createReportFn)