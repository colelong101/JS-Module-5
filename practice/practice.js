/*function getTrue() {
  return true;
}

function getFalse() {
  return false;
}*/

/*function getElement (elements, index) {
  return elements[index];
}

let names = ["Alice", "Bob", "Eve", "John"];
let name = getElement(names, 2);

console.log(name);*/

/*function getMeanTemp(temperatures) {
  let sum = 0;
  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }
  return sum / temperatures.length;
}

let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp(day1)}`);

let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp(day2)}`);*/

/*In this code, the variable i represents the index of the current element being iterated over in the for loop. 
The loop starts with i equal to 0, and continues iterating as long as i is less than the length of the temperatures array. 
During each iteration of the loop, the value of i is incremented by 1, allowing the loop to process each element in the array until the end of the array is reached.*/

/*In this code, the += operator is an assignment operator that adds the value on the right-hand side to the variable on the left-hand side, 
and then assigns the result to the variable on the left-hand side.
Specifically, in the getMeanTemp function, the += operator is used to accumulate the sum of all the temperatures in the temperatures array. In each iteration of the loop, 
the value of the ith element of the array is added to the sum variable using the += operator. This means that sum += temperatures[i] is equivalent to sum = sum + temperatures[i].
By the end of the loop, sum will contain the sum of all the temperatures in the array, which is then divided by the length of the array to calculate the mean temperature, 
and returned by the function. */

/* let a = 100, b = 200, c = 300;

function test(a) {
  let b  = 10;
  console.log(a);
  console.log(b);
  console.log(c);
}

test(1); // -> 1
        // -> 10
      // -> 300

console.log(a); // -> 100
console.log(b); // -> 200
console.log(c); // -> 300 */

// Validating parameters

/* function getMeanTemp(temperatures) {
  if (!(temperatures instanceof Array)) {
      return NaN;
  }
  let sum = 0;
  for (let i = 0; i < temperatures.length; i++) {
      sum += temperatures[i];
  }
  return sum / temperatures.length;
}

console.log(getMeanTemp(10));       // -> NaN
console.log(getMeanTemp([10, 30])); // -> 20 */

// Factorials 

/* During your math lessons, you probably came across the concept of factorials. A factorial is a function, indicated by an exclamation mark in mathematical notation. We pass an integer to this function and its result is obtained by multiplying all integers from the number 1 to the number given as an argument. Formally, you define a factorial as follows:

n!=n∙(n-1)∙(n-2)∙… ∙2∙1

So, for example, the factorial of 6 is:

6!=6∙5∙4∙3 ∙2∙1=720 */

/* function factorial (n) {
  let result = 1;
  while (n > 1) {
    result*=n;
    n--;
  }
  return result;
}
console.log(factorial(6)); */

// Recursion example:

/* function factorial (n) {
  return n > 1 ? n * factorial(n-1) : 1;
}
console.log(factorial(6)); */

// Functions are first class members. They can be stored in varaibles and passed as arguments as follows:

/* function showMessage(message) {
  console.log(`Message: ${message}`);
}
*/



/* let sm = showMessage;

let myAdd = function add(a, b) {
  return a + b;
}

console.log(myAdd(10, 20)); // -> 30
console.log(add(10, 20)); // -> 30 */

/* Callbacks
Functions that are passed as arguments to other functions may seem quite exotic and not very helpful, but in fact, they are a very important part of programming. So important that they even get their own name. They are callback functions. As we have seen in previous examples, a function that receives a callback as an argument can call it at any time. Importantly, in our examples, the callback is run synchronously, that is, it is executed in a strictly defined order resulting from where it is placed among the other instructions.

Synchronous callbacks
Synchronous execution is the most natural way to see how the program works. Subsequent instructions are executed in the order in which they are placed in the code. If you call a function, the instructions in it will be executed at the time of the call. If we pass another function to this function as an argument, and we call it inside an outer function as well, then all instructions will keep their natural order.

let inner = function() {
    console.log('inner 1');
}

let outer = function(callback) {
    console.log('outer 1');
    callback();
    console.log('outer 2');
}

console.log('test 1');
outer(inner);
console.log('test 2');

Execution of the above code will cause the console to print out the following text in this exact order:

test 1
outer 1
inner 1
outer 2
test 2 */








/* Asynchronous callbacks
Asynchronous operation of programs is a rather complex topic, strongly dependent on a particular programming language, and often also on the environment.

In the case of client-side JavaScript running in a browser, it is limited to event-based programming, i.e. the asynchronous response to certain events. An event can be a signal sent by a timer, a user action (e.g. pressing a key or clicking on a selected interface element), or information about receiving data from the server.

Using appropriate functions, we combine a specific type of event with a selected callback function, which will be called when the event occurs.

One of the simplest cases when there is an asynchronous execution of instructions is the use of the setTimeout function. This function takes another function (a callback) and the time expressed in milliseconds as arguments. The callback function is executed after the specified time, and meanwhile, the next program instruction (placed in the code after setTimeout) will be executed.

Thus, the moment the callback function is called is not determined by its order, but by an arbitrarily imposed delay. The delay only applies to the callback function given to setTimeout, while the rest of the code is still executed synchronously.

Let's modify the previous example a bit. In the outer function, we do not call callback() immediately, but pass it to setTimeout, which executes it with a delay of 1000 milliseconds (one second).

The result is actually a bit different than we observed in the previous example, as this time the following sequence of messages will appear on the console (the last with a delay of one second):

Code:
let inner = function() {
console.log('inner 1');
}

let outer = function(callback) {
console.log('outer 1');
setTimeout(callback, 1000);
console.log('outer 2');
}

console.log('test 1');
outer(inner);
console.log('test 2');

Output: 

test 1
outer 1
outer 2
test 2
...
inner 1

*/

/* Arrow functions
An arrow function is a shorter form of a function expression. An arrow function expression is composed of: parentheses containing zero to multiple parameters (if exactly one parameter is present, the parentheses can be omitted); an arrow that looks like this "=>"; and the body of the function, which can be surrounded by curly brackets if the body is longer. If an arrow function has only one statement and returns its value, we can omit the return keyword, as it will be implicitly added. For example, the function add, which we already know:

let add = function(a, b) {
    return a + b;
}
console.log(add(10, 20)); // -> 30

can be written as follows:

let add = (a, b) => {
    return a + b;
}
console.log(add(10, 20)); // -> 30

or simplified even more (the function has only one statement, whose value returns):

let add = (a, b) => a + b;
console.log(add(10, 20)); // -> 30

If the arrow function takes exactly one parameter, the parentheses may be omitted. Let's go back to the examples with the recursive factorial function, which takes exactly one parameter, n. In the previous example, we declared it using the function statement:

function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5)); // -> 120 */

