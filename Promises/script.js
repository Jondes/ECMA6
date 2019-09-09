let myFirstPromise = new Promise((resolve, reject) => {
console.log('attempting to connect');
setTimeout(() => {
    resolve('http request completed');
},1000);
});
