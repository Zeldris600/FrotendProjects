// EX1
let myArr =[90,26,80,50,5000,20,95,10000,2000000,41,60]
function minMax() {
  return  myArr.sort(function(a, b){return a - b})
}
// EX2
function checkArr(num) {
    return num < 20;
}
let predicate = myArr.every(checkArr)

// EX3
function splitArray(arr3,val) {
  let newArr =[];
  for(let i = 0; i<arr3.length; i += val) {
    newArr.push(arr3.slice(i, val + i))
  }
  return newArr
}
// Method 1
let program = (arr4,filter) => arr4.reduce((acc, val, i) =>(acc[filter[i]?0:1].push(val)))
// Method 2 
function split(arr,filter) {
  let newArr = [[],[]]
  for(let i = 0; i <arr.length; i ++){
    if(filter[i]){
      newArr[0].push(arr[i])
    }else {
      newArr[1].push(arr[i])
    }
  }
  return newArr
}
// method 3
let classify=(arr1,filter)=>[[...arr1.filter((item,i) => filter[i])],[...arr1.filter((item,i)=>!filter[i])]]

//EX4 
let array = ['apple','mango','beans','tomato']
let x = array.slice(-1);
let removeRight =(myArr,y)=>{
  return myArr.splice(y)
}

//EX5 
let removeLeft =(myArr,x)=>{
  return myArr.splice(x)// x wil be -ve to start removing from left
}
//EX6

//EX7 
let getNth = (arr,n) => arr.filter((elt,i) => i % n === n -1)

//EX8 
let nums = [1,2,2,3,3,5,5,5,8,9,1,4,4,4,];
let uniqueVal = (array) => ([... new Set(array)]);

// Or Using filter()
let uniqueVal2 = nums.filter((val,i) => nums.indexOf(val) === i) // indexOf returns only the first instance of the element in the array

//EX9 Also using reduce()
let array2 = [1,2,2,3,3,5,5,5,8,9,1,4,4,4,];
let uniqueVal3 = (array) => array.reduce((acc,currentVal) => (acc.includes(currentVal) ? acc : [...acc,currentVal]), [])
