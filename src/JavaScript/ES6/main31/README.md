ES6: Handle a Rejected Promise with catchPassed
catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

myPromise.catch(error => {
  // do something with the error.
});
error is the argument passed in to the reject method.

Note: the then and catch methods can be chained to the promise declaration if you choose.

Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.
