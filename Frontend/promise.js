// This is a simple example of using Promises in JavaScript
const Promise = new Promise((resolve, reject) => {
    const success = true; // Simulating a successful operation
    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed!");
    }
});

Promise.then((data)=> {
    console.log(data);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Operation completed.");
});