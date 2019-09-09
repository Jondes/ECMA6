

//                     *******    ES6 ES7  ES8   *****

// *********************Destructuring *********
/* const personalInfo = {
    firstName: 'Johnson',
    lastName: 'Guedes',
    city: 'London',
    country: 'UK',
    PinCode: W12 001
};
const { firstName: fn, lastName: ln } = personalInfo;

console.log(`${fn} ${ln}`); */

// ****************Destructuring Arrays  **********
/* let [firstName, middleName, lastName] = ['Johnson', 'Ed', 'Guedes'];

lastName = 'Dias';
// This is destructuring an array,
console.log(lastName)  */



//    *******   Object Literals   **********
/* function addressMaker(city, country) {
    const newAddress = { city, country };
    console.log(newAddress)
}
addressMaker('London', 'UK'); */



/* function addressTaker(address) {
    const { city, country } = address;

    const newAddress = {
        city,
        country: 'United Kingdom'
    };
    console.log(`${newAddress.city},${newAddress.country}`)
}
addressTaker({ city: 'London', country: 'UK' }); */

// ********** for loop  ***********
/* let incomes = [62000, 6700, 75000];
let total = 0;

for (const income of incomes) {
    console.log(income);
    total += income;
}
console.log(total); */


//************* For of loop ***********/
/* let income = [62000, 67000, 75000]

for (let income of income) {
    income += 5000;
}
console.log(income); */

//***************Spread operator********/
/* let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];

console.log(example2); */

//*******   Rest Operator  *******/
/* function add(...nums) {

    console.log(nums);
}
add(2, 4, 6, 45) */

//******    Arrow functions *****/
/* function add(...nums) {
    let total = nums.reduce((x, y) => x + y);
    console.log(total);
}
add(3, 5, 7, 9, 12) */

//****** Default parameters   *******/
/* function add(numArray = [2, 4, 6, 8]) {
    let total = 0;
    numArray.forEach((element) => {
        total += element;
    });
    console.log(total);
}
add(); */

//**************** Includes  *********/
/* let numArray = [1, 2, 3, 4, 5];

console.log(numArray.includes(2)) */

//*******  Let & Const    ******/

//******* Promises *********/
/* let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})
p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
}) */

/* function watchTutorialCallback(callback, errorCallback) {
    let userLeft = false
    let userWatchingCatMeme = false

    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}

function watchTutorialPromise() {
    let userLeft = false
    let userWatchingCatMeme = false
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialCallback(message => {
    console.log(message)
}, error => {
    console.log(error.name + ' ' + error.message)
})

watchTutorialPromise().then(message => {
    console.log(message)
}).catch(error => {
    console.log(error.name + ' ' + error.message)
})

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(messages => {
    console.log(messages)
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(message => {
    console.log(message)
})
 */
/******************* Classes ***********************/

//animal.js

/* export class Animal {
    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }
} */

//index.js
/* import { Animal } from '/animal.js';

let cat = new Animal('Cat', 4);

cat.legs = 3;
console.log(cat.legs) */

/******************* Async & Await***********/

/* function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if (location === 'Google') {
            resolve('Google says Hi')
        }
        else {
            reject('We can ony talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

makeRequest('Google').then(response => {
    console.log('Response received')
    return processRequest(response)
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(err => {
    console.log(err)
})

async function doWork() {
    const response = await makeRequest('Google')
    console.log('Resonse Received')
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
}

doWork() */
