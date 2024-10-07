//  var vs let
console.log(a);
var a = 10;

let b = 20;
console.log(b);

// re-declarations
let x = 21;
// let x = 22; // will throw syntax error
var y = 32;
var y = 100;


// let in global scope
let test = "Testing let in global scope";
function testLet() {
    let localTest = "I am in function local scope";
     console.log(test);
     console.log(localTest);
     console.log(this);
}
testLet();