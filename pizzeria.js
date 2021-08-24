
//Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]

var pizza = {
    crustType: "deep dish",
    sauceType: "traditional",
    cheeses: ["mozzarella"],
    toppings: ["pepperoni", "sausage"]
}

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven(pizza.crustType, pizza.sauceType, pizza.cheeses, pizza.toppings);
console.log(p1);

//Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

var pizza = {
    crustType: "hand tossed",
    sauceType: "marinara",
    cheeses: ["mozzarella", "feta"],
    toppings: ["mushrooms", "olives", "onions"]
}

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven(pizza.crustType, pizza.sauceType, pizza.cheeses, pizza.toppings);
console.log(p1);

//Create 2 more pizzas with any toppings we like!

var pizza = {
    crustType: "deep dish",
    sauceType: "traditional",
    cheeses: ["parmesan", "feta"],
    toppings: ["sausage", "tomatoes", "onions"]
}

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
console.log(pizza);

//Create 2 more pizzas with any toppings we like!


var pizza = {
    crustType: "hand tossed",
    sauceType: "traditional",
    cheeses: ["swiss", "gorgonzola"],
    toppings: ["anchovies", "arugula", "pepperoni"]
}

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

console.log(pizza);





///////////////////////////////////////////////////
var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor);
console.log(ceiling);
console.log(random);


var pizza = {
    crustType: ["hand tossed","traditional", "stuffed crust"],
    sauceType: ["traditional", "marinara", "ranch"],
    cheeses: ["swiss", "gorgonzola", "mozzarella"],
    toppings: ["anchovies", "arugula", "pepperoni"]
}

function randomPizza("crustType", "sauceType", "cheeses", "toppings"){
    var pizza = Math.floor(Math.random() * arr.length);
    return arr[pizza]
}

console.log(randomPizza(pizza))
