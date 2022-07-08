// EX 1. Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set comparing rule.
let myArr = [90, 26, 80, 50, 5000, 20, 95, 10000, 2000000, 41, 60];
function minMax() {
  return myArr.sort(function (a, b) {
    return a - b;
  });
}
// EX 2. Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
function checkArr(num) {
  return num < 20;
}
let predicate = myArr.every(checkArr);

// EX 3. Write a JavaScript program to split values of two given arrays into two groups. If an element in filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
function splitArray(arr3, val) {
  let newArr = [];
  for (let i = 0; i < arr3.length; i += val) {
    newArr.push(arr3.slice(i, val + i));
  }
  return newArr;
}
// Method 1
let program = (arr4, filter) =>
  arr4.reduce((acc, val, i) => acc[filter[i] ? 0 : 1].push(val));
// Method 2
function split(arr, filter) {
  let newArr = [[], []];
  for (let i = 0; i < arr.length; i++) {
    if (filter[i]) {
      newArr[0].push(arr[i]);
    } else {
      newArr[1].push(arr[i]);
    }
  }
  return newArr;
}
// method 3
let classify = (arr1, filter) => [
  [...arr1.filter((item, i) => filter[i])],
  [...arr1.filter((item, i) => !filter[i])],
];

//EX 4. Write a JavaScript program to remove specified elements from the left of a given array of elements.
let array = ["apple", "mango", "beans", "tomato"];
let x = array.slice(-1);
let removeRight = (myArr, y) => {
  return myArr.splice(y);
};

//EX 5. Write a JavaScript program to remove specified elements from the right of a given array of elements.

let removeLeft = (myArr, x) => {
  return myArr.splice(x); // x wil be -ve to start removing from left
};
//EX 6. Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.

//EX 7. Write a JavaScript program to get every nth element in a given array.
let getNth = (arr, n) => arr.filter((elt, i) => i % n === n - 1);

//EX 8. Write a JavaScript program to filter out the non-unique values in an array.
let nums = [1, 2, 2, 3, 3, 5, 5, 5, 8, 9, 1, 4, 4, 4];
let uniqueVal = (array) => [...new Set(array)];

// Or Using filter()
let uniqueVal2 = nums.filter((val, i) => nums.indexOf(val) === i); // indexOf returns only the first instance of the element in the array

//EX (Also using reduce()) 9. Write a JavaScript program to filter out the non-unique values in an array, based on a provided comparator function.
let array2 = [1, 2, 2, 3, 3, 5, 5, 5, 8, 9, 1, 4, 4, 4];
let uniqueVal3 = (array) =>
  array.reduce(
    (acc, currentVal) =>
      acc.includes(currentVal) ? acc : [...acc, currentVal],
    []
  );

//EX 10. Write a JavaScript program to dcapitalize the first letter of a string.
function dcapFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

let arr6 = [
  {
    item: "milk",
    price: 500,
  },
  {
    item: "oil",
    price: 600,
  },
  {
    item: "bread",
    price: 400,
  },
  {
    item: "egg",
    price: 300,
  },
  {
    item: "sugar",
    price: 200,
  },
  {
    item: "tomato",
    price: 100,
  },
];
let itemsLessThan500 = arr6.filter((item) => item.price < 500);

//EX 18. Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.
let arr7 = [20, 30, 100, 400, 600];
let sum = arr7.reduce((acc, cv) => acc + cv, 0);

//EX 19. Write a JavaScript program to get a random number in the specified range. 


//EX 20. Write a JavaScript program to get a random integer in the specified range. 
let arr8 = [10,40,200,5,10000,25,80,90]
let randomInt = arr8[Math.floor(Math.random() * arr8.length)]