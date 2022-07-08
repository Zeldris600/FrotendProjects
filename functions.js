//EXERCISE 1 -- Write a function that will check if 02 objects contain atleast one similar property with the same values
let person = {
    firstName: 'Zeldris',
    Age: 41,
    TechStack: ['HTML','CSS','JS']
}

let person2 = {
    firstName: 'Zeldris',
    Job: 'Junior Frontend Dev',
    id: 123456789.
}
    //Filter method and returns new array
function checkMatch(person,person2) {
    let key1 = Object.keys(person)//Access person props and bind to key1
    let key2 = Object.keys(person2)
    return key1.filter(k =>key2.indexOf(k) > -1 && person[k] == person2[k])
}
// Some method and returns a boolean
function checkMatch2(person,person2) {
    let key1 = Object.keys(person)
    let key2 = Object.keys(person2)
    return key2.some(k =>key1.indexOf(k) > -1 && person[k] == person2[k])
}

//EXERCISE 2 -- Write a function that will convert a comma separated string to an array
let sentence = 'I Love JavaScript'
function convertArr(sentence) {
   return sentence.split(',') // Read string methos on w3school
}
// EXERCISE 3 --
let numb = 1234567
/* myfunction =(numb) => numb.split("") */
function toNum(numb){
    return numb.split("")
}

// EXERCISE 4 --
let myArr = [2,5,'can','color']
let excluded =[2,5]
let myArr2 = ['can','color']
let callback = function(item) {
    return excluded.indexOf(item)<0
}
console.log(myArr.filter(callback))

function exclude (myArr,excluded) {
    return myArr.filter(item => excluded.indexOf(item)<0)
}
// EXERCISE 5--
let arr = ['Html','CSS','JS']
function extract(arr,index) {
    return arr[index]
}


// EXERCISE 6--
function getHex(){
    let base16 = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let randomX = Math.random() * 16
    randomX = Math.floor(randomX)
    let u = base16[randomX]
    return [u,u,u,u,u,u].join("")
}
// EXERCISE 7--
function replaceKey(obj1,addKey,remKey) {
    obj1[addKey] = obj1[remKey]
    delete obj1.remKey;
    return obj1
}