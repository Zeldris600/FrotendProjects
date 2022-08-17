let arrSplice = ["cat", "pussy", "meow", "chat"];
//Remove 0 (zero) elements before index 2, and insert "drum"
let one = arrSplice.splice(2, 0, "drum");
console.log(arrSplice);
console.log(one);
//Remove 0 (zero) elements before index 2, and insert "drum"
let two = arrSplice.splice(2, 0, "drum", "guitar");

console.log(arrSplice);

console.log(two);
//Remove 1 element at index 3
let three = arrSplice.splice(3, 1);
console.log(three);

console.log(arrSplice);

//Remove 1 element at index 2, and insert "trumpet"
let four = arrSplice.splice(2, 1, "trumpet");
console.log(four);

console.log(arrSplice);
//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
let five = arrSplice.splice(0, 2, "parrot", "anemone", "blue");
console.log(five);
console.log(arrSplice);
//Remove 2 elements, starting from index 2
let six = arrSplice.splice(2, 2);
console.log(six);

console.log(arrSplice);

//Remove 1 element from index -2
let seven = arrSplice.splice(-2, 1);
console.log(seven);
console.log(arrSplice);
//Remove all elements, starting from index 2
let eight = arrSplice.splice(2);

let eightB = arrSplice.splice(2, 5);
console.log(eight);
console.log(eightB);
