//1

// Call, Apply, Bind (Important)  -They are used for function borrowing


let emp1 = {
    name: "saikiran", Code: 1, branch:"mech"
}

let displayInfo = function(gender, age) {
    console.log(this.name, this.Code, this.branch, gender, age);
}


let emp2 = {
    name: "name2",
    Code: 2,
    branch:"techinical",

}

let emp3 = {
    name: "name3",
    Code: 3,
    branch: "operator",

}

displayInfo.call(emp1, "Male", 23); // first is always the function calling the function flowwed by the arguments, 
//note: remember arguments passed are comma seperated

displayInfo.call(emp2, "Male", 24);
displayInfo.call(emp3, "Male", 25);



// Apply
displayInfo.apply(emp1, ["Male", 23]);
displayInfo.apply(emp2, ["Male", 24]);
displayInfo.apply(emp3, ["Male", 25]);


// it is same like call, in apply we input the arguemts in form of an array

//Bind 
let result1 = displayInfo.bind(emp1);
console.log(result1); // prints the function defination of displayInfo

// here result is getting assigned a function
result1("Male", 24);

let result2 = displayInfo.bind(emp2);
result2("Male", 24);

let result3 = displayInfo.bind(emp3);
result3("Male", 24);



//--------------------------------------------------------------------------------------------------------------------------------------

//Objects are a collection of properties and methods

//How do we create an Object.
// Two methods.
//the order of entry of properties and methods aren't preserved in Objects.
//Objects converts the keys data types into string even if it isn't of string type. Basically all keys are of 
// string type only.

const student = {
    fName: "saikiran",
    lName: "yalavarthi", 
    profession: "engneeier",
    23: "age",
    displayInfo: function() {
        console.log(`The first name of the student is ${student.fName} and it's profession iss ${student.profession} and it's age is ${student[31]}}`);
    }

    //to  access any property we need to use syntax objectName.propertyName, displayInfo is a method

}

student.displayInfo;
student.profession;

//--------------------------------------------------------------------------------------------------------------------------------------

//3


//The Function() constructor creates a new Function object

//example

const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6)); //returns 8

// here new function with name 'sum' is formed using function constructor


//-----------------------------------------------------------------------------------------------------


//4


// INHERITANCE 

//Inheritance is takes place when sharing the properties with another object and the object is can call the properties same as its  prototype parent . We use __proto__ to inherit from another object

// let's see an example

const studentOne = {
    name: "saikiran",
    age: 23,
    showDetails: function() {
        console.log(this.name);
        console.log(this.age);
        return
    }
}

const studentTwo = {
    name: "name2"
}

console.log(studentOne.showDetails());





// the properties of methods and objects by any other object

studentTwo.__proto__ = studentOne; 


//-----------------------------------------------------------------------------------------------------

//5

//Protoype chaining is when we want to inherit on mulitple levels. the Object protoype type is the base in js, then we can create an array and then we can also create another array inheriting from that previous array

//let's see in example

let arr1 = new Array(1, 2, 3, 4, 5);

let arr2 = new Array();

arr2.__proto__ = arr1;
console.log(arr2.__proto__); // [1, 2, 3, 4, 5]
console.log(arr2.__proto__.__proto__); // Array constructor
console.log(arr2.__proto__.__proto__.__proto__); // Object

console.log(arr2.__proto__.__proto__.__proto__.__proto__); // null


//-----------------------------------------------------------------------------------------------------

//6


function emp(name, age, gender, id) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
};

function techinical(name, age, gender, id, 
specialization) {

    // Calling techinical constructor function
    emp.call(this, name, age, gender, id);

    // Adding a new parameter
    this.specialization = specialization;
}
console.log(emp.prototype); // constructor f
console.log(techinical.prototype); // constructor f


//-----------------------------------------------------------------------------------------------------

//7


// callback functions are the function which can be  passed as an argument to an higher order function.

// example

function func1() {
    console.log("This is a callback function!");
}


function hof(a, func) {
    console.log( a + " was passed as argument");
    func();
}

hof(2, func1);


//-----------------------------------------------------------------------------------------------------

//8

//setTimeout is used in case when we want call a function or implement a logic after a certain period of time 

//exmaple

setTimeout(func1, 2000);

// this will start to implement func1 fuction after 2 seconds 


//-----------------------------------------------------------------------------------------------------

//9


//A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments


//example

function calculateGST( productPrice ) {
    return productPrice * 0.5;
}


//-----------------------------------------------------------------------------------------------------






