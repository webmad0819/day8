var Cheese = function(typeOfCheese) {
  var cheeseType = typeOfCheese;
  return cheeseType;
}

Cheese.prototype.eat = function () {
    console.log(this)
	console.log("i am eating this cheese!")
}

cheddar = new Cheese("cheddar");
parsemano = new Cheese("parmesano")