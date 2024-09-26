// // create a callback function example for account
// // 1. PrintAccount details should accept this call back and the account information
// // 2. Upon executing PrintAccntDetails it should show the account details with a message
// // 3. Use the same call back to print multiple sessions planned for the day
// function Account(name, balance) {
//     this.name = name
//     this.balance = balance
// }

// function PrintAccount(account) {
//     console.log("name:", account.name)
//     console.log("balance:", account.balance)
// }

// function PrintAccountDetails(account, callBackFunc) {
//     callBackFunc(account)
// }

// var account = new Account("hongbo", 2000)
// PrintAccountDetails(account, PrintAccount)

// Questions -
// Create a Person <few properties and a function to return them> and Inherit it as Student class and override the function
// Inherit should be done both way's constructor and Object.Create
// Create three objects and merge their propeties
// Create a logical example of closure
// Share few data objects from one file to another

// step 1: Create a Person <few properties and a function to return them> and 
//          Inherit it as Student class and override the function
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// step 2: Inherit should be done both way's constructor and Object.Create
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    getDetails() {
        return `${super.getDetails()}, Grade: ${this.grade}`;
    }
}

// step 3: Create three objects and merge their propeties
const personPrototype = {
    getDetails: function() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};

function createPerson(name, age) {
    const person = Object.create(personPrototype);
    person.name = name;
    person.age = age;
    return person;
}

const studentPrototype = Object.create(personPrototype);
studentPrototype.getDetails = function() {
    return `${personPrototype.getDetails.call(this)}, Grade: ${this.grade}`;
};

function createStudent(name, age, grade) {
    const student = createPerson(name, age);
    Object.setPrototypeOf(student, studentPrototype);
    student.grade = grade;
    return student;
}

// step 4: Create three objects and merge their propeties
const student1 = new Student('Alice', 20, 'A');
const student2 = new Student('Bob', 22, 'B');
const student3 = createStudent('Charlie', 21, 'C');

const mergedStudent = Object.assign({}, student1, student2, student3);
console.log(mergedStudent);

// step 5: Create a logical example of closure
function StudentInfo(sid, name, age, gender) {
    var sid = sid;
    var name = name;
    var age = age;
    var gender = gender;
    var password = "1234"   // private

    var getStudent = function(name, pwd) {
        if(pwd == password) {
            return {
                sid,
                name,
                age,
                gender
            }
        }
        else {
            return "Password is incorrect"
        }
    }

    return getStudent;
}

var studentObj = StudentInfo(1, "hongbo", 24, "M")

console.log(studentObj("hongbo", "1234"))

// step 6: Share a few data objects from one file to another
const data = {
    students: [
        { name: 'Alice', age: 20, grade: 'A' },
        { name: 'Bob', age: 22, grade: 'B' },
    ],
    getStudentNames: function() {
        return this.students.map(student => student.name);
    }
};

// export default data;
module.exports = data;