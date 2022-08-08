"use strict";

//In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared before use’. When running 1/0, the error 'cannot be divided by zero'
try {
  console.log(a);
  let a = 3;
} catch {
  console.log("Let must be declared before use");
}
try {
  let err = new Error("Cannot be divided by zero");
  if (1 / 0 == Infinity) {
    console.log(err.message);
  }
} catch {}
