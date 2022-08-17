function List() {
  this.listSize = 0; // store number elements in list
  this.pos = 0; // current position inlist
  this.dataStore = []; // initializes empty array to store list elemens
  this.clear = clear; // remove all current elements from list
  this.find = find;
  this.toString = toString; // returns string representation of list
  //this.insert = this.insert; // inserts new element after existing element
  this.insert = insert
  this.append = append; // adds new element to end of list
  this.remove = remove; // removes element from list
  this.front1 = front1; // sets current position to fisrt element of list
  this.end1 = end1; // sets current position to last element of list
  this.prev1 = prev1; // moves current position back one element
  this.next1 = next1; // moves current position forward one element
  this.length = length; // returns number of elements in list
  this.currPos1 = this.currPos1; // returns current position in list
  this.moveTo = moveTo; // move current position to specified position
  this.getElement1 = getElement1; // returns element at current position
  this.contains1 = contains1;

  function append(element){ // function appends new element onto list at next available position, which will be equal to the listSize variable
this.dataStore[this.listSize++] = element
  }// after element is appended, listSize is incremented by 1

  /* Removing an element from a List is rather difficult for the following reasons:
  1- First, we have to find the element in the list
  2- Second, we have to remove it from the array and adjust the underlying to fill the hole left by removing the element
  3- However, we can simplify this process by using the Splice mutator function.
  NOTE: To achieve this we define/create a helper function to find the element to remove
*/

function find(element){
    /* 
    This find function simply iterates through the array(dataStore) looking for the element.
    If found, the functions returns the index(position) where the element was found.
    And if not, the function returns -1 when element can't be found in the array. We can use this value for error checking in the remove() function
    */
    for (let i = 0; i < this.dataStore.length; i++){
        if(this.dataStore[i] == element){
            return i
        }
    }
    return -1
}

function remove(element){
    /* 
    The remove() uses the position returned by find() to splice the dataStore array at that place.
    After array is modified, listSize is decremented by 1 to reflect the new size of the list.
    The function returns true if an element is removed, and false otherwise. 
    */
    let foundAt = this.find(element);
    if (foundAt > -1){
        this.dataStore.splice(foundAt,1);
        this.listSize--;
        return true
    } else {
        return false
    }
}


function length(){
    return this.listSize;
}

function toString(){
    return this.dataStore;
}

function insert(element, after){
    /* 
    Here we need two things to insert an element into the list:
    1- The position of the pre-element(existing element) Where to insert an element
    In this function we insert the element after a specified element already exists in the list
    */
    let insertPos = this.find(after)// We used find to determine the exact insertion position for the new element
    if(insertPos > -1){
        this.dataStore.splice(insertPos+1,0,element);
        this.listSize++;
        return true
    }
    return false
}

function clear(){
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains1(element){
    /* 
    Used to see if a particular value is contained in the list
    */

    for(let i = 0; i < this.dataStore; i++){
        if(dataStore[i] == element){
            return true
        }
        return false
    }
}

// Traversing the list

function front1(){
    this.pos = 0
}

function end1(){
    this.pos = this.listSize-1
}

function prev1(){
    if(this.pos < this.listSize-1){
        this.pos--
    }

}

function next1(){
    if(this.pos < this.listSize-1){
        this.pos++
    }
}

function currPos1(){
    return this.pos;
}

function moveTo(position){
    this.pos = position
}

function getElement1(){
    return this.dataStore[this.pos]
}
}

let names = new List();
names.append('cynthia');
names.append('Raymond');
names.append('Barbara');
names.append('Zeldris');
names.append('Madara');
names.append('Nezuko');
names.append('Tanjiro');
names.append('Tengen');