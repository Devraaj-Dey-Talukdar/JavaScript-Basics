//TODO : Iphone properties
var iPhone = {
    model: "iPhone 13-pro-max",
    manufacturer: "Apple",
    year: "2022",
    color: "forest green",
    price: "$1500",
    screen: "liquid-retina , XDR",
}

console.log(iPhone.model);//Output: iPhone 13-pro-max
console.log(iPhone.manufacturer);//Output: Apple
console.log(iPhone.year);//Output: 2022
console.log(iPhone.color);//Output: forest green
console.log(iPhone.price);//Output: $1500
console.log(iPhone.screen);//Output: liquid-retina , XDR

console.log(iPhone["model"]);//Output: iPhone 13-pro-max
//this is one of the ways to access the properties of an object

console.table(iPhone); // Check this output :)))