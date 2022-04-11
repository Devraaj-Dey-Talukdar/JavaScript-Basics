// var num1 = 7;
// var num2 = num1+2;
// console.log(num2);
// console.log(num1 / num2) // some aleanatic value will be displayed as output LMAO :)
// A Discount finding program ---
// algorithm = Discount = (ListPrice - SellingPrice)/ListPrice * 100;

var sellingPrice = 1800;
var listPrice = 2500;

var discount = ((listPrice - sellingPrice)/listPrice) * 100;

console.log(`
     The selling price of the item is : ${sellingPrice}
     The listing price of the item is : ${listPrice}

     The discount is : ${discount}
`)
//this will give  28.000000000000004% so to round it up 
 displayPrcentage = Math.round(discount);

 console.log("Rounded of discount percent is :"+displayPrcentage);
 //the new output is : 28%
 // Yeah this is more readable by homosapiens :}

 var result = listPrice > sellingPrice;
 console.log(result);
 //the output will be : true

 var newResult = listPrice > sellingPrice;
 console.log(typeof result);
 // the output will be : boolean . "typof returns the variable type"

 // Operators follow the 'BODMAS' rule i.e. -- B - (){}[] O - off D -/ M - * A - * S '-'
 //Braces > Off > Divison > Multiplication > Addition > Substraction
 //eventually they follow there precedence :)}] XD!
 // JavaScript operator precedence --
 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence