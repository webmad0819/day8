// function sum (s1, s2) {
//     return s1 + s2;
// }

// this is a curry
function currySum (s1, s2) {
    let theSum = s1 + s2;

    return function (param) {
        return param + theSum;
    }
}

let sum = currySum(Math.PI, 10);

// console.log(sum6(10))
// console.log(currySum(1, 5)(10))
console.log(sum(10))
console.log(sum(100))
