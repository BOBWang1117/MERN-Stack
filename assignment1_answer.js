// Q1:
//      1. case sensitive: different case type can be create different variables
//      2. '==' and '===': == is used for compairing value are same, and === is used for compairing value and type both are same
//      3. ternary operator: a >= b ? c : d which means if a >= b then c else d
//      4. typeof: used for determin which the variable type like integer, string , boolean
//      5. keywords: var, function, class, char, boolean, for, new, this, while, try, switch case
//
// Q2: 
var q2;
q2 = "Robert"
console.log(q2)

q2 = .0266
console.log(q2)

q2 = false
console.log(q2)

q2 = {myname : "Test Me"}
console.log(q2)

q2 = 25166665
console.log(q2)

q2 = undefined
console.log(q2)

q2 = true
console.log(q2)

q2 = "Robert Jr."
console.log(q2)

q2 = null
console.log(q2)

q2 = {}
console.log(q2)

q2 = -32767
console.log(q2)

// Q3: 
function showUserInfo(firstName, lastName, age) {
    console.log(`\nQ3: firstName: ${firstName}, lastName: ${lastName}, age: ${age}\n`)
}

showUserInfo('hongbo', 'wang', 25);

// Q4: 
function doaddition(para1, para2, para3) {
    return para1 + para2 + para3
}

console.log('Q4: ' + doaddition(2,3,4))
console.log('Q4: ' + doaddition(2))
console.log('Q4: ' + doaddition(2.3,3))
console.log('Q4: ' + doaddition("first", 2, "three"))
console.log()
// Explaining: 
//      The function doaddition needs three parameters.
//      In the first situation, we passed three parameters so the function accept them and add them together
//      In the second situation, we passed one parameter so the function's second and third parameter are blank. 
//          When the variable is blank, javascript will define them as undefined variable so that we add them together them return NaN result.
//      In the third situation, we passed two parameter but it still not satisfied funtion doaddition requirement so the reason is same as situation two.
//      In the forth situation, we passed three parameter and javascript is not type saft language, so the compiler change integer as string, 
//          then 'first', '2', and 'three' combined as a sentense.

// Q5.a closure:
function myClosure() {
    var count = 0;

    return function() {
        count = count + 1;
        return count;
    }
}

var closure = myClosure();
console.log('Q5 closure: ' + closure())
console.log('Q5 closure: ' + closure())
console.log('Q5 closure: ' + closure())
// Q5.b hoisting:
var hostingVar = 'hosting'
function hosting() {
    console.log('Q5 hosting: ' + hostingVar);
    var hostingVar = 'hosting';
    console.log('Q5 hosting: ' + hostingVar);
}
hosting();

// Q5.b constructor function:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var person1 = new Person('hongbo', 30);
var person2 = new Person('hongbo', 25);

console.log('Q5 constructor: ' + person1.name);
console.log('Q5 constructor: ' + person2.age);
console.log();

// Q6:
//      call: Invokes a function with a specified this value and individual arguments.
//      apply: Invokes a function with a specified this value and an array (or array-like object) of arguments.
//      bind: Creates a new function that, when called, has its this keyword set to a specific value, 
//              with a given sequence of arguments preceding any provided when the new function is called.

// Q7:
var Student = {
    name: 'Hongbo',
    age: 25,
    getDetails: function() {
        setTimeout(function() {
            console.log(`Q7 Student Object: Name: ${this.name}, Age: ${this.age}`);
        }, 1000)
    }
}

Student.getDetails();

var StudentWithBind = {
    name: 'Hongbo',
    age: 25,
    getDetails: function() {
        setTimeout(function() {
            console.log(`Q7 Student Object: Name: ${this.name}, Age: ${this.age}`);
        }.bind(this), 1000)
    }
}

StudentWithBind.getDetails();
console.log();

// Q8:
var myObject = Object.create(null);

// Q9:


// Q10:
var Student = {
    name: 'hongbo',
    age: 25
};

export default Student;

// Q10: In another file
import Student from './assessment1_answer'
var displayDetails = function() {
    console.log(`Name: ${this.name}, age: ${this.age}`)
}