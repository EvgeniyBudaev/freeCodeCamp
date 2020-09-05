ES6: Use Destructuring Assignment to Pass an Object as a Function's ParametersPassed
In some cases, you can destructure the object in a function argument itself.

Consider the code below:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
This effectively destructures the object sent into the function. This can also be done in-place:

const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.

Use destructuring assignment within the argument to the function half to send only max and min inside the function.
