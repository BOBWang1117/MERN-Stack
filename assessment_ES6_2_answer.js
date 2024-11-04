// 4th November - 2024 : ES6, eventloop and some spa definitions
// All questions are mandatory - 14 out of 15 needs to be done, 1st question is equal to two question so can't be left

// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

// const heroes = [
//   { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
//   { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
//   { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
//   { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
//   { name: 'Batman',         family: 'DC Comics', isEvil: false },
//   { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
//   { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
//   { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
//   { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
// ]

// Answer:
const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

// a. get heros who are not evils
for(let i=0; i<heroes.length; i++)
{
    const hero = heroes[i];
    if(hero.isEvil == false)
        console.log(hero)
};

// b. unique family name
const set = new Set();
for(let i=0; i<heroes.length; i++)
{
    const hero = heroes[i];
    set.add(hero.family);
};
console.log(set)

// c. print sir + name
for(let i=0; i<heroes.length; i++)
{
    const heroName = heroes[i].name;
    console.log('sir ' + heroName);
};

// d. who in Marvel Family who is not evil
for(let i=0; i<heroes.length; i++)
{
    const hero = heroes[i];
    if(hero.family == 'Marvel' && hero.isEvil == false)
        console.log(hero);
};

//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice)
// Answer:
function mutipleNums(...args)
{
    const n = args[0];
    let sum = 1;
    for(let i=1; i<=n; i++)
    {
        sum = sum * i;
    }

    return sum;
};
console.log(mutipleNums(5));

//3. Print the last name through destructuring and add a contact number:9119119110 as well
// const person = {
//     userDetails :{
//         first: "FirstName",
//         last: "LastName"
//     }
// }

// Answer:
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

const { userDetails: {last}, number='9119119110'} = person;
console.log(`last name: ${last}, number: ${number}`);

//4. Give me an example of const data manipulation
// Answer:
const obj = {name: 'hongbo', age: 25};
obj.age = 24;
console.log(obj);

//5. What is the difference between for-of and for-in show with examples
// Answer:
const arr = [1, 2, 3]
// for-of: print the elements of arr
for(const val of arr)
{
    console.log(val);
}

// for-in: print the index of arr
for(const val in arr)
{
    console.log(val);
}


//6. Give me an example of bind and write its usage, comparison with arrow function
// Answer:
const user = {name: 'hongbo', age: 24};
function func()
{
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
const binding = func.bind(user);
binding();

const arrowFunc = () => console.log(`Name: ${this.name}, Age: ${this.age}`);
const bindingArrow = arrowFunc.bind(user);
bindingArrow();


//7. Create an example showing usage of event loop in concurrent execution cycle
// Answer:
console.log("First")

setTimeout(() => {
    console.log('Async operation');
  }, 2000);

console.log("Second")


//8. create an example showing usage of short hand and default param.
// Asnswer:
const sum = (a=11, b=22) => a + b;
console.log(sum());
console.log(sum(1));
console.log(sum(1, 2));

//9. Create two objects with some properties and merge them using Object method and ES6 way
// Answer:
const obj1 = {a: 1, b: 4};
const obj2 = {b: 2, c: 3};
const mergeObj = {...obj1, ...obj2};
console.log(mergeObj);

//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
// Answer:
// map
const myMap = new Map([["a", 1], ["b", 2], ["c", 3]]);
console.log(myMap.get("b"));        // get
console.log(myMap.set("a", 11));    // set
console.log(myMap.has('d'));        // has
myMap.clear()                       // clear
console.log(myMap);                 // For checking


// set
const mySet = new Set([1, 2, 3]);
console.log(mySet.add(4));      // add
console.log(mySet.has(1));      // has
console.log(mySet.has(5));      // has
console.log(mySet.delete(1));   // has
console.log(mySet);             // For checking
mySet.clear();                  // clear
console.log(mySet);             // For checking

//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
// Answer
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            'hongbo',
            'wang',
            '25',
            'chinese',
            'Promises'
        ]);
    }, 2000);
    
    setTimeout(() => {
        reject('Promise rejected after 3 seconds');
    }, 3000);
});

myPromise
    .then((features) => {
        console.log('Resolved with features:', features);
    })
    .catch((error) => {
        console.log('Error:', error);
    });


//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
// Answer: 
// Smae as Question 2


//13. Use the question #11 to build promises using async and await - with multithread
// Answer
const asyncFunction = async () => {
    try {
        const features = await myPromise;
        console.log('Resolved with features:', features);
    } catch (error) {
        console.log('Error:', error);
    }
};

asyncFunction();

//14. Create an example of generator function of your choice
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generatorFunction();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//15. Explain your knowledge of - statelessness, http, REST, spa and classical applications
// Answer: 
// statelessness: 
// http: The http protocol can be used on web. It defines how message are formatted and transimitted, includes texts, picture, vedio, etc.
// REST: REST is  a standard HTTP method link GET, POST, PUT, DELETE for communcitation
// SPA: 
// Application: 
