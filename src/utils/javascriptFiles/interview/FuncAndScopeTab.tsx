import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import CodeBlock from "../../../components/UI/CodeBlock";

export const FUNCTION_SCOPE_DATA = [
  {
    heading: "What is a function in JavaScript?",
    content: (
      <Box my={5}>
        <Typography variant="h4" color="primary" gutterBottom>
          🔧 What is a Function in JavaScript?
        </Typography>

        <Typography variant="body1" paragraph>
          A <strong>function</strong> in JavaScript is a block of reusable code
          designed to perform a particular task. Functions are one of the
          building blocks in JavaScript programming. You can use a function to
          define code once and execute it whenever needed, as many times as
          required.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Why Use Functions?
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Encapsulation: Keeps code organized and reusable." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Avoid repetition: Write once, use multiple times." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Modularity: Break your code into logical blocks." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ Function Declaration Syntax
        </Typography>
        <CodeBlock
          code={`// Function declaration
function greet(name) {
return 'Hello, ' + name + '!';
}

// Calling the function
console.log(greet('Alice')); // Output: Hello, Alice!`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✍️ Function Expression
        </Typography>
        <Typography variant="body2" paragraph>
          A function expression defines a function inside a variable.
        </Typography>
        <CodeBlock
          code={`// Function expression
const greet = function(name) {
return 'Hello, ' + name + '!';
};

console.log(greet('Bob')); // Output: Hello, Bob!`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚡ Arrow Functions (ES6+)
        </Typography>
        <Typography variant="body2" paragraph>
          A shorter syntax introduced in ES6. Great for inline and callback
          functions.
        </Typography>
        <CodeBlock
          code={`// Arrow function
const greet = (name) => {
return 'Hello, ' + name + '!';
};

// Shorter version
const greetShort = name => \`Hello, \${name}!\`;

console.log(greetShort('Eve')); // Output: Hello, Eve!`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Parameters vs Arguments
        </Typography>
        <Typography variant="body2">
          - <strong>Parameters</strong>: Named variables in the function
          definition.
          <br />- <strong>Arguments</strong>: Actual values passed when calling
          the function.
        </Typography>
        <CodeBlock
          code={`function add(a, b) {
return a + b; // 'a' and 'b' are parameters
}

console.log(add(2, 3)); // 2 and 3 are arguments`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Return Keyword
        </Typography>
        <Typography variant="body2" paragraph>
          A function can return a value using the <code>return</code> keyword.
          Once the return statement is executed, the function stops running.
        </Typography>
        <CodeBlock
          code={`function multiply(x, y) {
return x * y;
console.log("This will never run."); // unreachable
}

console.log(multiply(4, 5)); // 20`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Function Scope and Closures
        </Typography>
        <Typography variant="body2" paragraph>
          Functions create their own <strong>scope</strong>. Inner functions
          have access to variables of their outer functions thanks to{" "}
          <strong>closures</strong>.
        </Typography>
        <CodeBlock
          code={`function outer() {
let count = 0;
function inner() {
  count++;
  console.log(count);
}
return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Summary
        </Typography>
        <Typography variant="body2" paragraph>
          - A function is a reusable block of code that performs a task.
          <br />
          - You can define functions using declarations, expressions, or arrow
          syntax.
          <br />- Functions can return values, accept parameters, and help keep
          your code modular and maintainable.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is call(), apply() and bind() in javascript?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📞 Understanding <code>call()</code>, <code>apply()</code>, and{" "}
          <code>bind()</code> in JavaScript
        </Typography>

        <Typography paragraph>
          In JavaScript, <strong>functions are first-class objects</strong>,
          meaning they can be passed around and manipulated. The methods{" "}
          <code>call()</code>, <code>apply()</code>, and <code>bind()</code> are
          used to control the context (value of <code>this</code>) in which a
          function is executed.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔹 <code>call()</code> Method
        </Typography>
        <Typography paragraph>
          The <code>call()</code> method invokes a function with a specified{" "}
          <code>this</code> value and arguments provided one by one.
        </Typography>
        <CodeBlock
          code={`function greet(greeting, punctuation) {
console.log(greeting + ' ' + this.name + punctuation);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello', '!'); // Hello Alice!`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔹 <code>apply()</code> Method
        </Typography>
        <Typography paragraph>
          The <code>apply()</code> method is similar to <code>call()</code>, but
          it takes arguments as an array.
        </Typography>
        <CodeBlock code={`greet.apply(person, ['Hi', '?']); // Hi Alice?`} />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔹 <code>bind()</code> Method
        </Typography>
        <Typography paragraph>
          The <code>bind()</code> method returns a new function with the
          specified <code>this</code> value and optionally preset arguments. It
          does <strong>not invoke</strong> the function immediately.
        </Typography>
        <CodeBlock
          code={`const greetAlice = greet.bind(person, 'Hey');
greetAlice('~'); // Hey Alice~`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧠 Summary
        </Typography>
        <ul>
          <li>
            <strong>
              <code>call()</code>
            </strong>{" "}
            — Calls the function immediately, with arguments listed one by one.
          </li>
          <li>
            <strong>
              <code>apply()</code>
            </strong>{" "}
            — Calls the function immediately, with arguments as an array.
          </li>
          <li>
            <strong>
              <code>bind()</code>
            </strong>{" "}
            — Returns a new function with bound context and optional arguments.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          📦 Real-world Example: Borrowing Methods
        </Typography>
        <CodeBlock
          code={`const car = {
brand: 'Tesla',
getBrand: function () {
  return this.brand;
},
};

const bike = { brand: 'Ducati' };

console.log(car.getBrand.call(bike)); // Ducati`}
        />
      </Box>
    ),
  },
  {
    heading: "What are higher order functions in javascript?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔁 Higher-Order Functions in JavaScript
        </Typography>

        <Typography paragraph>
          In JavaScript, <strong>higher-order functions (HOFs)</strong> are
          functions that can do one or both of the following:
        </Typography>
        <ul>
          <li>Take one or more functions as arguments (callback functions)</li>
          <li>Return a function as their result</li>
        </ul>

        <Typography paragraph>
          This makes HOFs powerful tools in functional programming, enabling
          composition, abstraction, and code reusability.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔹 Basic Example of a Higher-Order Function
        </Typography>
        <CodeBlock
          code={`function greetUser(name, formatter) {
return 'Hello, ' + formatter(name);
}

function upperCaseName(name) {
return name.toUpperCase();
}

console.log(greetUser('Alice', upperCaseName)); // Hello, ALICE`}
        />

        <Typography paragraph>
          Here, <code>greetUser</code> is a higher-order function because it
          takes another function (<code>formatter</code>) as an argument.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔹 Returning a Function
        </Typography>
        <CodeBlock
          code={`function multiplier(factor) {
return function (number) {
  return number * factor;
};
}

const double = multiplier(2);
console.log(double(5)); // 10`}
        />

        <Typography paragraph>
          The <code>multiplier</code> function returns another function, making
          it a higher-order function.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔹 Built-in HOFs in JavaScript
        </Typography>
        <Typography paragraph>
          JavaScript arrays have many built-in higher-order functions, such as:
        </Typography>
        <ul>
          <li>
            <code>map()</code>
          </li>
          <li>
            <code>filter()</code>
          </li>
          <li>
            <code>reduce()</code>
          </li>
          <li>
            <code>forEach()</code>
          </li>
        </ul>

        <CodeBlock
          code={`const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]
const sum = numbers.reduce((acc, num) => acc + num, 0); // 15

console.log(doubled, evens, sum);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          📦 Real-World Use Case: Custom Logger Wrapper
        </Typography>
        <CodeBlock
          code={`function withLogging(fn) {
return function (...args) {
  console.log(\`Calling function with args: \${args}\`);
  const result = fn(...args);
  console.log(\`Result: \${result}\`);
  return result;
};
}

function add(a, b) {
return a + b;
}

const loggedAdd = withLogging(add);
loggedAdd(3, 4); 
// Output:
// Calling function with args: 3,4
// Result: 7`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧠 Summary
        </Typography>
        <ul>
          <li>
            Higher-order functions either take a function as an argument or
            return a function.
          </li>
          <li>
            They are the core concept behind callback-based and functional
            programming in JS.
          </li>
          <li>
            Common built-in HOFs include <code>map</code>, <code>filter</code>,{" "}
            <code>reduce</code>, and <code>forEach</code>.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading:
      "Explain the difference between function declaration and expression.",
    content: (
      <Box my={5}>
        <Typography variant="h4" color="primary" gutterBottom>
          🔍 Function Declaration vs Function Expression in JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          In JavaScript, there are two main ways to define a function:
          <strong> function declarations</strong> and
          <strong> function expressions</strong>. While both define functions,
          they behave differently in terms of hoisting and where/when they can
          be used.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Function Declaration
        </Typography>

        <Typography variant="body2" paragraph>
          A <strong>function declaration</strong> defines a named function using
          the <code>function</code> keyword. It is hoisted, meaning you can call
          it before it appears in the code.
        </Typography>

        <CodeBlock
          code={`// Function Declaration
function greet(name) {
return \`Hello, \${name}!\`;
}

console.log(greet("Alice")); // ✅ Works even before the declaration`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔐 Function Expression
        </Typography>

        <Typography variant="body2" paragraph>
          A <strong>function expression</strong> involves assigning a function
          to a variable. These are <strong>not hoisted</strong>, so they cannot
          be used before the line they’re defined on.
        </Typography>

        <CodeBlock
          code={`// Function Expression
const greet = function(name) {
return \`Hello, \${name}!\`;
};

console.log(greet("Bob")); // ✅ Works only after the definition`}
        />

        <Typography variant="body2" color="error" sx={{ mt: 2 }}>
          ❌ Using a function expression before it’s defined results in a
          ReferenceError:
        </Typography>

        <CodeBlock
          code={`console.log(sayHi()); // ❌ ReferenceError

const sayHi = function() {
return "Hi!";
};`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Key Differences
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="1. Hoisting"
              secondary="Function declarations are hoisted, function expressions are not."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="2. Syntax"
              secondary="Declarations define named functions; expressions can be anonymous or named."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="3. Flexibility"
              secondary="Function expressions can be passed as arguments or used as IIFEs (Immediately Invoked Function Expressions)."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚡ IIFE with Function Expression
        </Typography>

        <Typography variant="body2" paragraph>
          You can immediately invoke a function expression using parentheses:
        </Typography>

        <CodeBlock
          code={`(function() {
console.log("IIFE executed!");
})();`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Summary
        </Typography>

        <Typography variant="body2">
          - Use <strong>function declarations</strong> when you want to define
          reusable functions at the top level that can be hoisted.
          <br />- Use <strong>function expressions</strong> for inline usage,
          like callbacks, or when you want to define logic within a limited
          scope.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are arrow functions?",
    content: (
      <Box my={5}>
        <Typography variant="h4" color="primary" gutterBottom>
          ➤ Arrow Functions in JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          Arrow functions were introduced in ES6 (ECMAScript 2015) and offer a
          shorter syntax compared to traditional function expressions. They also
          behave differently with respect to the <code>this</code> keyword.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✏️ Syntax Comparison
        </Typography>

        <Typography variant="body2" paragraph>
          Here's how a traditional function expression and an arrow function
          look:
        </Typography>

        <CodeBlock
          code={`// Traditional Function Expression
const add = function(a, b) {
return a + b;
};

// Arrow Function
const addArrow = (a, b) => {
return a + b;
};`}
        />

        <Typography variant="body2" paragraph>
          Arrow functions can be more concise when there's only a single return
          statement:
        </Typography>

        <CodeBlock
          code={`// Implicit return (no need for return keyword or braces)
const multiply = (x, y) => x * y;`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Arrow Function & <code>this</code> Keyword
        </Typography>

        <Typography variant="body2" paragraph>
          Arrow functions do not have their own <code>this</code>. Instead, they
          inherit it from the enclosing lexical context.
        </Typography>

        <CodeBlock
          code={`function Traditional() {
this.value = 1;
setTimeout(function() {
  console.log(this.value); // undefined (different this)
}, 1000);
}

function ArrowBased() {
this.value = 2;
setTimeout(() => {
  console.log(this.value); // 2 (inherits this from ArrowBased scope)
}, 1000);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 When to Use Arrow Functions
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="Short callbacks"
              secondary="Arrow functions are perfect for concise callbacks (like in map, filter, reduce)."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Preserving 'this'"
              secondary="Use arrow functions when you want to retain 'this' from the surrounding context."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 What You Can't Do
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="Cannot be used as constructors"
              secondary="Arrow functions do not support the 'new' keyword."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="No own arguments object"
              secondary="They don't have their own 'arguments' object."
            />
          </ListItem>
        </List>

        <CodeBlock
          code={`const test = () => {
console.log(arguments); // ReferenceError: arguments is not defined
};`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Summary
        </Typography>

        <Typography variant="body2">
          - Arrow functions provide shorter syntax.
          <br />- They inherit <code>this</code> from the outer context.
          <br />- They're great for callbacks and functional programming.
          <br />- Avoid them for object methods or constructors.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is a callback function?",
    content: (
      <Box my={5}>
        <Typography variant="h4" gutterBottom color="primary">
          🔁 Callback Functions in JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          A <strong>callback function</strong> is a function that is passed as
          an argument to another function, and is executed after some kind of
          event or task has been completed. It’s a powerful concept used heavily
          in JavaScript for things like asynchronous processing, DOM
          manipulation, and event handling.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✏️ Basic Example
        </Typography>

        <Typography variant="body2" paragraph>
          Here’s a simple example of a callback:
        </Typography>

        <CodeBlock
          code={`function greetUser(name, callback) {
console.log("Hello " + name);
callback();
}

function sayGoodbye() {
console.log("Goodbye!");
}

greetUser("Alex", sayGoodbye);

// Output:
// Hello Alex
// Goodbye!`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Callback in Asynchronous Code
        </Typography>
        <Typography variant="body2" paragraph>
          Callback functions are crucial in handling asynchronous operations
          like API calls, timeouts, or event listeners.
        </Typography>

        <CodeBlock
          code={`console.log("Start");

setTimeout(() => {
console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Output:
// Start
// End
// This runs after 2 seconds`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Use Case: Array Methods
        </Typography>

        <Typography variant="body2" paragraph>
          Many built-in methods like <code>map</code>, <code>filter</code>, and{" "}
          <code>forEach</code> use callbacks:
        </Typography>

        <CodeBlock
          code={`const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 Common Mistake
        </Typography>

        <Typography variant="body2" paragraph>
          Don’t call the callback function immediately when passing it—just pass
          the reference:
        </Typography>

        <CodeBlock
          code={`// Incorrect:
setTimeout(sayGoodbye(), 1000); // Executes immediately

// Correct:
setTimeout(sayGoodbye, 1000); // Executes after 1 second`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔐 Why Use Callbacks?
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="Asynchronous operations"
              secondary="Like API calls, timers, or event handlers"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Custom logic after execution"
              secondary="E.g. doing something once a function completes"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Functional programming"
              secondary="Enable chaining and transformations"
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Summary
        </Typography>
        <Typography variant="body2">
          - A <strong>callback</strong> is a function passed into another
          function as an argument. <br />
          - It gets called **after** the main function completes a task. <br />-
          Widely used in async JavaScript like <code>setTimeout</code>, API
          calls, and events. <br />- Helps keep code modular, maintainable, and
          readable.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "What is the difference between synchronous and asynchronous functions?",
    content: (
      <Box my={5}>
        <Typography variant="h4" gutterBottom color="primary">
          🔄 Synchronous vs Asynchronous Functions in JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          JavaScript allows us to work with both synchronous and asynchronous
          code. The key difference between them lies in how they handle
          execution order and timing. Let’s break it down:
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🕒 Synchronous Functions
        </Typography>

        <Typography variant="body2" paragraph>
          Synchronous functions are executed **one after another** in the order
          they are called. The program will wait for each function to complete
          before moving on to the next one. This can lead to blocking behavior
          if a function takes a long time to complete.
        </Typography>

        <CodeBlock
          code={`console.log("Start");

function task1() {
console.log("Task 1 completed");
}

function task2() {
console.log("Task 2 completed");
}

task1();
task2();

console.log("End");

// Output:
// Start
// Task 1 completed
// Task 2 completed
// End`}
        />

        <Typography variant="body2" paragraph>
          In this example, the tasks are executed one after the other. The
          program doesn't proceed to the next task until the current task
          finishes.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⏳ Asynchronous Functions
        </Typography>

        <Typography variant="body2" paragraph>
          Asynchronous functions allow the program to **continue executing other
          code** while waiting for a task to complete. This is especially useful
          when working with operations like I/O tasks, network requests, and
          timers.
        </Typography>

        <CodeBlock
          code={`console.log("Start");

function task1() {
setTimeout(() => {
  console.log("Task 1 completed");
}, 1000);
}

function task2() {
console.log("Task 2 completed");
}

task1();
task2();

console.log("End");

// Output:
// Start
// Task 2 completed
// End
// Task 1 completed (after 1 second)`}
        />

        <Typography variant="body2" paragraph>
          Here, the `task1()` function uses <code>setTimeout</code>, which is
          asynchronous. It starts executing and schedules the task to complete
          after 1 second, allowing `task2()` to execute immediately afterward.
          This non-blocking behavior is what makes asynchronous functions so
          powerful.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📝 Key Differences
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="Execution Order"
              secondary="Synchronous functions are executed sequentially, while asynchronous functions allow other code to run while waiting for completion."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Blocking vs Non-blocking"
              secondary="Synchronous functions block the thread, whereas asynchronous functions do not block the thread and enable better concurrency."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Use Cases"
              secondary="Synchronous is suitable for small, quick operations. Asynchronous is ideal for tasks like network requests, database calls, and UI updates."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 Real-world Use Case: Asynchronous Functions
        </Typography>

        <Typography variant="body2" paragraph>
          Asynchronous functions shine when dealing with time-consuming tasks,
          such as making HTTP requests to APIs:
        </Typography>

        <CodeBlock
          code={`function fetchData() {
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => console.error("Error:", error));
}

console.log("Start fetching data");
fetchData();
console.log("End of program");

// Output:
// Start fetching data
// End of program
// Data received: {...} (once the API request is complete)`}
        />

        <Typography variant="body2" paragraph>
          In this example, the <code>fetchData()</code> function makes an API
          request asynchronously. The rest of the program continues to execute
          while waiting for the response, which doesn't block the program's
          flow.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Summary
        </Typography>
        <Typography variant="body2">
          - **Synchronous functions** block code execution and run sequentially.{" "}
          <br />
          - **Asynchronous functions** allow other operations to continue while
          waiting for a task to finish. <br />- Asynchronous programming is
          essential for non-blocking operations like API calls, timers, and
          event handling.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is scope in JavaScript?",
    content: (
      <Box my={5}>
        <Typography variant="h4" gutterBottom color="primary">
          🔒 Scope in JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          **Scope** in JavaScript refers to the **visibility and accessibility**
          of variables, functions, and objects in different parts of the code
          during execution. It determines where variables and functions are
          accessible in your program. There are two primary types of scope:
          <strong>Global Scope</strong> and <strong>Local Scope</strong>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🌍 Global Scope
        </Typography>

        <Typography variant="body2" paragraph>
          Variables declared outside any function or block are in the **global
          scope**. These variables are accessible anywhere in your code,
          including inside functions.
        </Typography>

        <CodeBlock
          code={`let globalVar = "I am global";

function showGlobal() {
console.log(globalVar); // "I am global"
}

showGlobal(); // Accessing the global variable inside the function`}
        />

        <Typography variant="body2" paragraph>
          In this example, the variable <code>globalVar</code> is declared in
          the global scope, making it accessible inside the{" "}
          <code>showGlobal</code> function.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🏠 Local Scope
        </Typography>

        <Typography variant="body2" paragraph>
          Variables declared inside a function or block are in the **local
          scope** of that function or block. They are **not accessible** outside
          that function or block.
        </Typography>

        <CodeBlock
          code={`function localScope() {
let localVar = "I am local";
console.log(localVar); // "I am local"
}

localScope(); // Works fine

console.log(localVar); // ReferenceError: localVar is not defined`}
        />

        <Typography variant="body2" paragraph>
          Here, the variable <code>localVar</code> is defined within the{" "}
          <code>localScope</code> function. Trying to access it outside the
          function will result in a <code>ReferenceError</code> because it's
          scoped locally to the function.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔒 Function Scope
        </Typography>

        <Typography variant="body2" paragraph>
          Variables declared with <code>var</code> inside a function have
          **function scope**. They are only accessible within the function where
          they are declared, even if declared in nested blocks inside the
          function.
        </Typography>

        <CodeBlock
          code={`function functionScope() {
if (true) {
  var insideIf = "Accessible within the whole function";
  console.log(insideIf); // "Accessible within the whole function"
}
console.log(insideIf); // "Accessible within the whole function"
}

functionScope();`}
        />

        <Typography variant="body2" paragraph>
          The variable <code>insideIf</code> is declared using <code>var</code>,
          which has function scope. Even though it’s declared inside an{" "}
          <code>if</code> block, it’s still accessible throughout the entire
          function.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛑 Block Scope
        </Typography>

        <Typography variant="body2" paragraph>
          Variables declared using <code>let</code> and <code>const</code> are
          block-scoped. This means that they are only accessible within the
          block in which they are defined (e.g., inside a loop or condition).
        </Typography>

        <CodeBlock
          code={`function blockScope() {
if (true) {
  let insideBlock = "I am block scoped";
  const insideConst = "I am also block scoped";
  console.log(insideBlock); // "I am block scoped"
  console.log(insideConst); // "I am also block scoped"
}

console.log(insideBlock); // ReferenceError: insideBlock is not defined
console.log(insideConst); // ReferenceError: insideConst is not defined
}

blockScope();`}
        />

        <Typography variant="body2" paragraph>
          In the above code, the variables <code>insideBlock</code> and{" "}
          <code>insideConst</code> are block-scoped. They are only accessible
          within the <code>if</code> block where they are declared.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Lexical Scope
        </Typography>

        <Typography variant="body2" paragraph>
          Lexical scope refers to the fact that functions are **scoped to the
          location** where they are defined, not where they are called. This
          means inner functions have access to variables of the outer
          (enclosing) functions.
        </Typography>

        <CodeBlock
          code={`function outerFunction() {
let outerVar = "I'm from the outer function";

function innerFunction() {
  console.log(outerVar); // "I'm from the outer function"
}

innerFunction();
}

outerFunction();`}
        />

        <Typography variant="body2" paragraph>
          In this example, the inner function has access to the variable{" "}
          <code>outerVar</code> because it is defined in the outer function.
          This is called **lexical scoping**.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📚 Summary
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="Global Scope"
              secondary="Variables declared outside functions are accessible anywhere in the program."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Local Scope"
              secondary="Variables declared within functions or blocks are only accessible within those specific areas."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Function Scope"
              secondary="Variables declared with <code>var</code> inside functions are accessible throughout the entire function."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Block Scope"
              secondary="Variables declared with <code>let</code> and <code>const</code> are scoped to the block in which they are declared."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Lexical Scope"
              secondary="Functions have access to variables from their surrounding lexical environment (the scope in which they were defined)."
            />
          </ListItem>
        </List>
      </Box>
    ),
  },
  {
    heading: "What is closure?",
    content: (
      <Box my={5}>
        <Typography variant="h4" gutterBottom color="primary">
          🔒 What is a Closure in JavaScript?
        </Typography>

        <Typography variant="body1" paragraph>
          A <strong>closure</strong> is a feature in JavaScript where an **inner
          function** has access to the outer (enclosing) function’s
          **variables**, even after the outer function has finished executing.
        </Typography>

        <Typography variant="body1" paragraph>
          In simpler terms, a closure allows a function to "remember" the
          environment in which it was created.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 What Does a Closure Have Access To?
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="1. Its own scope (variables defined between its curly braces)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. The outer function’s variables" />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. The global variables" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Basic Closure Example
        </Typography>

        <CodeBlock
          code={`function outerFunction() {
let outerVariable = "I'm from outer scope";

function innerFunction() {
  console.log(outerVariable);
}

return innerFunction;
}

const closure = outerFunction();
closure(); // Output: "I'm from outer scope"`}
        />

        <Typography variant="body2" paragraph>
          Even though <code>outerFunction</code> has finished execution, the
          inner function <code>innerFunction</code> still has access to{" "}
          <code>outerVariable</code>—thanks to **closure**.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Why Are Closures Useful?
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="✅ Data Encapsulation"
              secondary="Closures help to encapsulate variables and prevent them from polluting the global scope."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="✅ Private Variables"
              secondary="Closures can emulate private variables and functions in JavaScript."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="✅ Function Factories"
              secondary="Closures allow creation of multiple customized functions from a single factory."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔐 Closures for Private Variables
        </Typography>

        <CodeBlock
          code={`function createCounter() {
let count = 0;

return function () {
  count++;
  return count;
};
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`}
        />

        <Typography variant="body2" paragraph>
          The variable <code>count</code> is "private" to the returned function.
          It's preserved between calls but inaccessible from outside.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🏭 Closure for Function Factories
        </Typography>

        <CodeBlock
          code={`function greet(greeting) {
return function(name) {
  console.log(greeting + ", " + name);
};
}

const sayHello = greet("Hello");
sayHello("Alice"); // Hello, Alice
sayHello("Bob");   // Hello, Bob

const sayHi = greet("Hi");
sayHi("Charlie");  // Hi, Charlie`}
        />

        <Typography variant="body2" paragraph>
          Here, each returned function remembers the <code>greeting</code> from
          the outer function’s scope. This is **closure** in action!
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ Common Mistake with Closures
        </Typography>

        <CodeBlock
          code={`for (var i = 0; i < 3; i++) {
setTimeout(function () {
  console.log(i);
}, 1000);
}

// Output after 1s: 3, 3, 3`}
        />

        <Typography variant="body2" paragraph>
          Why 3, 3, 3? Because <code>var</code> is function-scoped, not
          block-scoped. Every timeout shares the same reference to{" "}
          <code>i</code>. Use <code>let</code> to fix it:
        </Typography>

        <CodeBlock
          code={`for (let i = 0; i < 3; i++) {
setTimeout(function () {
  console.log(i);
}, 1000);
}

// Output after 1s: 0, 1, 2`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Summary
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="A closure is formed when a function accesses variables from its outer scope even after the outer function has returned." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Closures are key to data privacy, callbacks, and function factories in JavaScript." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Be mindful of scope when using closures inside loops." />
          </ListItem>
        </List>
      </Box>
    ),
  },
  {
    heading: "What is the purpose of the this keyword?",
    content: (
      <Box my={5}>
        <Typography variant="h4" color="primary" gutterBottom>
          🔍 Understanding the <code>this</code> Keyword in JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          The <code>this</code> keyword in JavaScript refers to the object that
          is executing the current function. Its value depends on the
          **execution context** (how and where the function is called).
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Use Cases of <code>this</code>
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="1. In a method, this refers to the owner object." />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Alone, this refers to the global object (window in browsers)." />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. In strict mode, this is undefined if not in an object." />
          </ListItem>
          <ListItem>
            <ListItemText primary="4. In event handlers, this refers to the element that received the event." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Example 1: <code>this</code> in an Object Method
        </Typography>

        <CodeBlock
          code={`const person = {
name: "Alice",
greet: function () {
  console.log("Hi, I'm " + this.name);
}
};

person.greet(); // Hi, I'm Alice`}
        />

        <Typography variant="body2" paragraph>
          Here, <code>this</code> refers to the <code>person</code> object that
          owns the method.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🌐 Example 2: <code>this</code> in Global Context
        </Typography>

        <CodeBlock
          code={`function showThis() {
console.log(this);
}

showThis(); // In browsers: Window object`}
        />

        <Typography variant="body2" paragraph>
          In the global context, <code>this</code> refers to the global object.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 Example 3: Strict Mode
        </Typography>

        <CodeBlock
          code={`"use strict";

function strictThis() {
console.log(this); // undefined
}

strictThis();`}
        />

        <Typography variant="body2" paragraph>
          In strict mode, <code>this</code> is <code>undefined</code> in
          functions not bound to objects.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Example 4: Arrow Functions and <code>this</code>
        </Typography>

        <CodeBlock
          code={`const team = {
name: "Developers",
members: ["Alice", "Bob"],
showMembers: function () {
  this.members.forEach((member) => {
    console.log(member + " is in " + this.name);
  });
},
};

team.showMembers();
// Alice is in Developers
// Bob is in Developers`}
        />

        <Typography variant="body2" paragraph>
          Arrow functions **do not have their own** <code>this</code>. They
          inherit <code>this</code> from their surrounding lexical context.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Example 5: Using <code>bind</code>, <code>call</code>, and{" "}
          <code>apply</code>
        </Typography>

        <CodeBlock
          code={`const user = {
name: "Charlie",
};

function greet() {
console.log("Hello, " + this.name);
}

greet.call(user);  // Hello, Charlie
greet.apply(user); // Hello, Charlie

const boundGreet = greet.bind(user);
boundGreet();      // Hello, Charlie`}
        />

        <Typography variant="body2" paragraph>
          These methods allow you to explicitly set the value of{" "}
          <code>this</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📋 Summary
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="this is dynamic and depends on how a function is called." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Arrow functions inherit this from their enclosing scope." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Use bind, call, or apply to control this." />
          </ListItem>
          <ListItem>
            <ListItemText primary="In strict mode, this is undefined when not set." />
          </ListItem>
        </List>
      </Box>
    ),
  },
];
