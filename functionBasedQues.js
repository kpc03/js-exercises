// 1️⃣ Write a function that takes any number of arguments and returns the product of all numbers.
function productOfNumbers(...params){
    console.log(params);
    let product;
    if(params.length > 0){
        product = params.reduce((acc, curr) => acc * curr); //here used 1 because multiplying it with 0 gives 0 and one more point to remember if I leave it empty or nothing it will take the array[0] position value. Either I can give it 1 or else nothing.
    }else{
        console.error('Please provide values in an array');
        return 1;
    }
    return product;
}
console.log(productOfNumbers(2,3));
console.log(productOfNumbers(1097, 3938, 3));
console.log(productOfNumbers(9, 10, 9));
console.log(productOfNumbers()); // gives a typeError because we are using .reduce on empty array.

// 2️⃣ Write a function that returns the maximum and minimum number from any number of arguments.
function findOutMax(...params){
    return params.reduce((acc, curr) =>  curr > acc ? curr : acc);
}
console.log(findOutMax(23,98,90,999,87,45,90,100));

function findOutMin(...params){
    return params.reduce((acc, curr) =>  curr > acc ? acc : curr);
}
console.log(findOutMin(23,98,90,-1,87,45,90,100,0));

// 3️⃣ Create a function that reverses a string without using .reverse().
function stringReverse(str){
    console.log(str);
    let reversed = "";
    for(let i = str.length - 1; i >= 0 ; i--){
        reversed = reversed + str[i];
    }
    return reversed;
}
console.log(stringReverse('Javascript'));

// 4️⃣ Write a function to check if a word is a palindrome.
function palindrome(str){
    let reversedString = "";
    for(let i = str.length - 1; i >= 0 ; i--){
        reversedString = reversedString + str[i];
    }
    return str === reversedString;
}
console.log(palindrome('kanak'));
console.log(palindrome('test'));
console.log(palindrome(''));
console.log(palindrome('a'));
console.log(palindrome('madam'));

// 5️⃣ Create a function that flattens a nested array (e.g., [[1, 2], [3, 4]] → [1, 2, 3, 4]).
function flattenArray(param){
    return param.flat(Infinity);
}
console.log(flattenArray([[1, 2], [3, 4], [3, [1, 2]]]));

// 6️⃣ Write a function that removes duplicate values from an array.
function removeDuplicate(arr){
    let duplicate = [];
    let prevValue = 0;
    for(let i = 0; i < arr.length; i++){
        if(prevValue === arr[i]){
            duplicate.push(arr[i]);
        }
    }
    return duplicate;
}
console.log(removeDuplicate([1,2,2,3,3,4,4,5,6,7,7,8,9,10]));
