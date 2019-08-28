function operation() {
	if (arguments.length === 2) {
        return arguments[0] + arguments[1]
    }  

    if (arguments.length === 3) {
        if (arguments[2] === "sum") {
            return arguments[0] + arguments[1]
        } 

        if (arguments[2] === "sub") {
            return arguments[0] - arguments[1]
        }
    }
}

console.log(operation(5, 10))
console.log(operation(5, 10, "sub"))
