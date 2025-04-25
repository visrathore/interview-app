import { Box, Divider, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const ADVANCED_DATA = [
  {
    heading: "What are IIFEs (Immediately Invoked Function Expressions)?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          ⚡ What are IIFEs (Immediately Invoked Function Expressions)?
        </Typography>

        <Typography paragraph>
          An <strong>IIFE</strong> (Immediately Invoked Function Expression) is
          a JavaScript function that runs as soon as it is defined. It's a
          common design pattern used to create a new scope and avoid polluting
          the global namespace.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔹 Basic Syntax
        </Typography>
        <Typography paragraph>
          An IIFE is a function expression that is immediately invoked using
          parentheses <code>()</code> at the end:
        </Typography>
        <CodeBlock
          code={`(function () {
console.log("IIFE executed!");
})();`}
        />

        <Typography paragraph>
          You can also use arrow functions to create an IIFE:
        </Typography>
        <CodeBlock
          code={`(() => {
console.log("Arrow function IIFE executed!");
})();`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Why Use IIFEs?
        </Typography>

        <ul>
          <li>
            <Typography>✅ Avoid polluting the global scope</Typography>
          </li>
          <li>
            <Typography>✅ Create private variables</Typography>
          </li>
          <li>
            <Typography>✅ Execute code only once at runtime</Typography>
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔐 Example: Creating a Private Scope
        </Typography>
        <Typography paragraph>
          This prevents variables from leaking into the global scope:
        </Typography>
        <CodeBlock
          code={`(function () {
const secret = "Hidden Message";
console.log(secret); // ✅ Accessible here
})();

console.log(secret); // ❌ ReferenceError: secret is not defined`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Named IIFE
        </Typography>
        <Typography paragraph>
          You can also name your IIFEs, which helps in debugging stack traces:
        </Typography>
        <CodeBlock
          code={`(function namedIIFE() {
console.log("This IIFE has a name.");
})();`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📊 IIFEs with Parameters
        </Typography>
        <Typography paragraph>
          IIFEs can also accept parameters like a normal function:
        </Typography>
        <CodeBlock
          code={`(function (name) {
console.log("Hello, " + name);
})("JavaScript");`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ❓ Common Usage in Real Projects
        </Typography>

        <Typography paragraph>
          ✅ Initializing modules or scripts without exposing variables to the
          global scope.
        </Typography>
        <Typography paragraph>
          ✅ Wrapping code in legacy JS projects before ES6 modules.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Summary
        </Typography>
        <ul>
          <li>
            <Typography>
              An IIFE is a function that runs immediately after it's defined.
            </Typography>
          </li>
          <li>
            <Typography>
              It creates a private scope for variables and avoids polluting the
              global scope.
            </Typography>
          </li>
          <li>
            <Typography>
              Common in older JavaScript and useful for one-time
              initializations.
            </Typography>
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What is currying in JavaScript?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🍛 What is Currying in JavaScript?
        </Typography>

        <Typography paragraph>
          <strong>Currying</strong> is a functional programming technique where
          a function with multiple arguments is transformed into a sequence of
          functions, each taking a single argument. It allows partial
          application of a function’s arguments — meaning you can fix some
          arguments and reuse the function later.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔧 Basic Form of Currying
        </Typography>
        <CodeBlock
          code={`// Normal function
function add(a, b) {
return a + b;
}

console.log(add(2, 3)); // 5

// Curried version
function curriedAdd(a) {
return function (b) {
  return a + b;
};
}

console.log(curriedAdd(2)(3)); // 5`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Why Use Currying?
        </Typography>

        <ul>
          <li>
            <Typography>
              ✅ Enables function reuse with preset arguments.
            </Typography>
          </li>
          <li>
            <Typography>
              ✅ Helps with functional composition and clean code.
            </Typography>
          </li>
          <li>
            <Typography>
              ✅ Useful in scenarios like configuration and pipelines.
            </Typography>
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Example: Logging with Currying
        </Typography>
        <CodeBlock
          code={`function log(level) {
return function (message) {
  console.log(\`[\${level}]: \${message}\`);
};
}

const info = log("INFO");
const error = log("ERROR");

info("This is an info message"); // [INFO]: This is an info message
error("Something went wrong");   // [ERROR]: Something went wrong`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Currying a Function Automatically
        </Typography>
        <Typography paragraph>
          You can create a utility function to curry any function dynamically:
        </Typography>
        <CodeBlock
          code={`function curry(fn) {
return function curried(...args) {
  if (args.length >= fn.length) {
    return fn.apply(this, args);
  } else {
    return function (...nextArgs) {
      return curried.apply(this, [...args, ...nextArgs]);
    };
  }
};
}

// Usage
function multiply(a, b, c) {
return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2)(3, 4)); // 24`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ❓ Currying vs Partial Application
        </Typography>
        <Typography paragraph>
          <strong>Currying</strong> transforms a function into nested unary
          functions.
          <br />
          <strong>Partial Application</strong> fixes some arguments and returns
          a function for the remaining.
        </Typography>
        <CodeBlock
          code={`// Partial Application
function partialAdd(a) {
return function (b, c) {
  return a + b + c;
};
}

console.log(partialAdd(1)(2, 3)); // 6

// Currying: One argument at a time
function curriedAdd(a) {
return function (b) {
  return function (c) {
    return a + b + c;
  };
};
}

console.log(curriedAdd(1)(2)(3)); // 6`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Summary
        </Typography>
        <ul>
          <li>
            <Typography>
              Currying breaks down functions into smaller, single-argument
              functions.
            </Typography>
          </li>
          <li>
            <Typography>
              Useful for composing reusable, flexible logic in clean code.
            </Typography>
          </li>
          <li>
            <Typography>
              Currying does not execute a function until all arguments are
              provided.
            </Typography>
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What is memoization?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧠 What is Memoization in JavaScript?
        </Typography>

        <Typography paragraph>
          <strong>Memoization</strong> is an optimization technique used to
          speed up function execution by caching the results of expensive
          function calls and returning the cached result when the same inputs
          occur again.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 Why Use Memoization?
        </Typography>
        <ul>
          <li>
            <Typography>
              ✅ Avoids recalculating results for the same input.
            </Typography>
          </li>
          <li>
            <Typography>
              ✅ Boosts performance, especially for recursion.
            </Typography>
          </li>
          <li>
            <Typography>
              ✅ Helps in dynamic programming and computational-heavy logic.
            </Typography>
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Without Memoization (Inefficient Fibonacci)
        </Typography>
        <CodeBlock
          code={`function fibonacci(n) {
if (n <= 1) return n;
return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
// Slow for large n due to redundant calculations`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💾 With Memoization (Efficient Fibonacci)
        </Typography>
        <CodeBlock
          code={`function memoizedFibonacci() {
const cache = {};

return function fib(n) {
  if (n in cache) {
    return cache[n];
  }
  if (n <= 1) {
    cache[n] = n;
  } else {
    cache[n] = fib(n - 1) + fib(n - 2);
  }
  return cache[n];
};
}

const fib = memoizedFibonacci();
console.log(fib(10)); // 55
// Much faster due to caching`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ Generic Memoization Utility
        </Typography>
        <CodeBlock
          code={`function memoize(fn) {
const cache = {};

return function (...args) {
  const key = JSON.stringify(args);
  if (cache[key]) {
    return cache[key];
  } else {
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  }
};
}

// Example usage
const slowSquare = (n) => {
console.log("Computing...");
return n * n;
};

const memoizedSquare = memoize(slowSquare);

console.log(memoizedSquare(4)); // Computing... 16
console.log(memoizedSquare(4)); // Cached: 16`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ When Should You Use Memoization?
        </Typography>
        <ul>
          <li>
            <Typography>
              🧮 When a function is pure (output depends only on input).
            </Typography>
          </li>
          <li>
            <Typography>
              ⏱️ When the computation is expensive or called frequently.
            </Typography>
          </li>
          <li>
            <Typography>📦 When caching won't cause memory issues.</Typography>
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ Caveats of Memoization
        </Typography>
        <ul>
          <li>
            <Typography>
              🔄 Only works well for pure functions (no side effects).
            </Typography>
          </li>
          <li>
            <Typography>📉 Large caches can increase memory usage.</Typography>
          </li>
          <li>
            <Typography>
              🔑 Must generate a reliable cache key (especially with objects).
            </Typography>
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Summary
        </Typography>
        <ul>
          <li>
            <Typography>
              Memoization is a caching technique to improve performance.
            </Typography>
          </li>
          <li>
            <Typography>
              Great for recursive and computational-heavy operations.
            </Typography>
          </li>
          <li>
            <Typography>
              Needs careful implementation with appropriate cache strategies.
            </Typography>
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What are generators?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          ⚙️ Understanding Generators in JavaScript
        </Typography>

        <Typography paragraph>
          In JavaScript, a <strong>Generator</strong> is a special type of
          function that can pause execution and later resume from where it left
          off. This is done using the <code>function*</code> syntax and the{" "}
          <code>yield</code> keyword.
        </Typography>

        <Typography variant="h6" gutterBottom>
          📦 Key Features
        </Typography>
        <ul>
          <li>
            <strong>Pauses with yield:</strong> You can pause a generator using{" "}
            <code>yield</code>.
          </li>
          <li>
            <strong>Resumes execution:</strong> Execution can resume using{" "}
            <code>generator.next()</code>.
          </li>
          <li>
            <strong>Iterator interface:</strong> Generators implement the
            iterable protocol and return an iterator.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧪 Syntax Example
        </Typography>
        <CodeBlock
          code={`function* greetGenerator() {
yield "Hello";
yield "World";
return "Done";
}

const greeter = greetGenerator();

console.log(greeter.next()); // { value: "Hello", done: false }
console.log(greeter.next()); // { value: "World", done: false }
console.log(greeter.next()); // { value: "Done", done: true }
console.log(greeter.next()); // { value: undefined, done: true }`}
        />

        <Typography paragraph>
          The generator function <code>greetGenerator</code> yields values one
          at a time. Calling <code>next()</code> moves the function to the next
          yield point.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          ⛓ Why Use Generators?
        </Typography>
        <ul>
          <li>Control flow handling (pausing/resuming).</li>
          <li>Lazy iteration (values are generated as needed).</li>
          <li>Efficient memory use in large sequences.</li>
          <li>Works well with async/await for advanced use cases.</li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          🔁 Generator with Loops
        </Typography>
        <CodeBlock
          code={`function* counterGenerator(limit) {
for (let i = 0; i < limit; i++) {
  yield i;
}
}

const counter = counterGenerator(3);

console.log(counter.next()); // { value: 0, done: false }
console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: undefined, done: true }`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          🔄 Iterating with for...of
        </Typography>
        <CodeBlock
          code={`function* fruitsGenerator() {
yield "🍎";
yield "🍌";
yield "🍇";
}

for (const fruit of fruitsGenerator()) {
console.log(fruit);
}

// Output:
// 🍎
// 🍌
// 🍇`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          💡 Summary
        </Typography>
        <ul>
          <li>
            Generators are declared with <code>function*</code>.
          </li>
          <li>
            <code>yield</code> pauses execution and returns a value.
          </li>
          <li>
            <code>next()</code> resumes execution from the last yield.
          </li>
          <li>
            They implement the iterator protocol and can be looped using{" "}
            <code>for...of</code>.
          </li>
          <li>
            Useful for producing sequences, managing state, and advanced control
            flows.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What are proxies in JavaScript?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧱 Proxies in JavaScript
        </Typography>

        <Typography paragraph>
          A <strong>Proxy</strong> in JavaScript is a powerful feature
          introduced in ES6 that allows you to create a wrapper around an object
          or function, intercepting and customizing operations like reading,
          writing, property lookup, function invocation, and more.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🔍 Syntax
        </Typography>
        <CodeBlock code={`const proxy = new Proxy(target, handler);`} />
        <Typography paragraph>
          - <code>target</code>: The original object you want to proxy.
          <br />- <code>handler</code>: An object that defines which operations
          will be intercepted and how.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧪 Basic Example
        </Typography>
        <CodeBlock
          code={`const person = {
name: "John",
age: 30
};

const handler = {
get(target, property) {
  return property in target ? target[property] : "Property not found";
}
};

const proxyPerson = new Proxy(person, handler);

console.log(proxyPerson.name); // "John"
console.log(proxyPerson.city); // "Property not found"`}
        />

        <Typography paragraph>
          In this example, the <code>get</code> trap intercepts access to
          properties. If a property does not exist, it returns a custom message.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          ✍️ Using the <code>set</code> Trap
        </Typography>
        <CodeBlock
          code={`const handler = {
set(target, property, value) {
  if (property === "age" && typeof value !== "number") {
    throw new TypeError("Age must be a number");
  }
  target[property] = value;
  return true;
}
};

const proxyPerson = new Proxy(person, handler);

proxyPerson.age = 35; // works
proxyPerson.age = "thirty-five"; // throws TypeError`}
        />

        <Typography paragraph>
          The <code>set</code> trap validates the value before assigning it to
          the property.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          📚 Common Traps
        </Typography>
        <ul>
          <li>
            <strong>get(target, property)</strong>: Intercepts property access
          </li>
          <li>
            <strong>set(target, property, value)</strong>: Intercepts property
            assignment
          </li>
          <li>
            <strong>has(target, property)</strong>: Intercepts the{" "}
            <code>in</code> operator
          </li>
          <li>
            <strong>deleteProperty(target, property)</strong>: Intercepts{" "}
            <code>delete</code>
          </li>
          <li>
            <strong>apply(target, thisArg, argumentsList)</strong>: Intercepts
            function calls
          </li>
          <li>
            <strong>construct(target, args)</strong>: Intercepts constructor
            calls with <code>new</code>
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🔄 Proxying Functions
        </Typography>
        <CodeBlock
          code={`function sum(a, b) {
return a + b;
}

const handler = {
apply(target, thisArg, args) {
  console.log(\`Calling function with args: \${args}\`);
  return target(...args);
}
};

const proxySum = new Proxy(sum, handler);
console.log(proxySum(3, 4)); // Logs: Calling function with args: 3,4 => 7`}
        />

        <Typography paragraph>
          Proxies can wrap functions as well, allowing you to log, modify, or
          completely override behavior when they are called.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🚫 Use Cases for Proxies
        </Typography>
        <ul>
          <li>Validation logic</li>
          <li>Property access control</li>
          <li>Logging and profiling</li>
          <li>Virtualization (like virtual DOM)</li>
          <li>Creating reactive systems (like in Vue.js)</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          ⚠️ Caution
        </Typography>
        <Typography paragraph>
          While powerful, proxies can slow down performance if overused or used
          improperly. They may also break expectations with built-in behaviors
          if not handled carefully.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧠 Summary
        </Typography>
        <ul>
          <li>Proxies intercept operations on objects or functions.</li>
          <li>
            Useful for meta-programming tasks like validation, logging, or data
            binding.
          </li>
          <li>
            They are created using <code>new Proxy(target, handler)</code>.
          </li>
          <li>
            Support traps like <code>get</code>, <code>set</code>,{" "}
            <code>apply</code>, etc.
          </li>
          <li>
            Can be used to build powerful abstractions in frameworks and
            libraries.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What are tagged template literals?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🏷️ Tagged Template Literals in JavaScript
        </Typography>

        <Typography paragraph>
          Tagged template literals are an advanced form of template literals
          that allow you to parse template literals with a function. This
          feature gives you more control over string interpolation by processing
          the template with a custom "tag" function.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          ✍️ Syntax
        </Typography>
        <CodeBlock
          code={`tagFunction\`string text \${expression} string text\`;`}
        />
        <Typography paragraph>
          When a template literal is preceded by a function (called the{" "}
          <strong>tag function</strong>), JavaScript calls that function with
          the literal parts and the interpolated expressions.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          📦 Basic Example
        </Typography>
        <CodeBlock
          code={`function tag(strings, ...values) {
console.log("Strings:", strings);
console.log("Values:", values);
return strings[0] + values[0] + strings[1] + values[1];
}

const name = "Alice";
const age = 30;

const result = tag\`My name is \${name} and I am \${age} years old.\`;
console.log(result);`}
        />
        <Typography paragraph>Output:</Typography>
        <CodeBlock
          code={`Strings: [ "My name is ", " and I am ", " years old." ]
Values: [ "Alice", 30 ]
My name is Alice and I am 30 years old.`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🔐 Use Case: Sanitizing HTML
        </Typography>
        <CodeBlock
          code={`function sanitize(strings, ...values) {
return strings.reduce((acc, str, i) => {
  let value = values[i] ?? "";
  // escape < > and &
  value = String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return acc + str + value;
}, "");
}

const userInput = "<script>alert('xss')</script>";
const safeHTML = sanitize\`<div>\${userInput}</div>\`;

console.log(safeHTML);
// Output: <div>&lt;script&gt;alert('xss')&lt;/script&gt;</div>`}
        />
        <Typography paragraph>
          Tagged template literals can be used to prevent XSS (Cross-Site
          Scripting) by escaping dangerous user inputs before inserting them
          into the DOM.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          📊 Advanced Use: i18n (Internationalization)
        </Typography>
        <CodeBlock
          code={`function i18n(strings, ...values) {
return strings.reduce((result, str, i) => result + str + (values[i] ?? ""), "");
}

const language = "en";
const greeting = i18n\`Welcome, \${"John"}! Your language is \${language}.\`;
console.log(greeting);`}
        />
        <Typography paragraph>
          This pattern can be extended to pull translations dynamically or map
          to keys in a translation dictionary.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          📌 How it Works Internally
        </Typography>
        <Typography paragraph>
          When you use a tagged template literal like:
        </Typography>
        <CodeBlock code={`tag\`Hello \${name}, you are \${age} years old\`;`} />
        <Typography paragraph>JavaScript transforms it into:</Typography>
        <CodeBlock
          code={`tag(["Hello ", ", you are ", " years old"], name, age);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          ✅ Summary
        </Typography>
        <ul>
          <li>
            Tagged template literals allow custom processing of template
            literals via a function.
          </li>
          <li>
            The tag function receives the string parts and expression values as
            arguments.
          </li>
          <li>
            Useful for escaping HTML, building DSLs, formatting strings, or
            internationalization.
          </li>
          <li>
            Syntax: <code>tag</code> <CodeBlock code={`string \${value}`} />
          </li>
          <li>They're part of ES6 and are supported in all modern browsers.</li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What is the difference between deep freeze and shallow freeze?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          ❄️ Shallow Freeze vs Deep Freeze in JavaScript
        </Typography>

        <Typography paragraph>
          In JavaScript, object freezing means making an object immutable —
          preventing modifications like adding, removing, or changing
          properties. JavaScript provides <code>Object.freeze()</code> for this,
          but by default, it performs only a <strong>shallow freeze</strong>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧊 What is Shallow Freeze?
        </Typography>

        <Typography paragraph>
          A <strong>shallow freeze</strong> means that only the top-level
          properties of the object are frozen. If any of those properties are
          objects or arrays, their internal contents can still be modified.
        </Typography>

        <CodeBlock
          code={`const shallowObj = {
name: "Alice",
details: {
  age: 25,
  city: "Paris"
}
};

Object.freeze(shallowObj);

shallowObj.name = "Bob"; // ❌ Won't change
shallowObj.details.age = 30; // ✅ Will change!

console.log(shallowObj);
// Output:
// {
//   name: "Alice",
//   details: { age: 30, city: "Paris" }
// }`}
        />

        <Typography paragraph>
          Even though the object was frozen, the <code>details</code> object was
          still mutable — this is because <code>Object.freeze()</code> does not
          recurse into nested objects.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧊🧊 What is Deep Freeze?
        </Typography>

        <Typography paragraph>
          A <strong>deep freeze</strong> is a custom implementation that
          recursively freezes all nested objects inside the target object. Once
          deep-frozen, no part of the object structure can be modified.
        </Typography>

        <CodeBlock
          code={`function deepFreeze(obj) {
Object.freeze(obj);

Object.getOwnPropertyNames(obj).forEach(prop => {
  if (
    obj[prop] !== null &&
    (typeof obj[prop] === "object" || typeof obj[prop] === "function") &&
    !Object.isFrozen(obj[prop])
  ) {
    deepFreeze(obj[prop]);
  }
});

return obj;
}

const deepObj = {
name: "Charlie",
details: {
  age: 28,
  location: { city: "Rome" }
}
};

deepFreeze(deepObj);

deepObj.details.age = 35; // ❌ Won’t work
deepObj.details.location.city = "Milan"; // ❌ Won’t work

console.log(deepObj);
// Output remains unchanged:
// {
//   name: "Charlie",
//   details: { age: 28, location: { city: "Rome" } }
// }`}
        />

        <Typography paragraph>
          By using a recursive <code>deepFreeze</code> function, even deeply
          nested objects are protected from mutation.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧾 Summary of Differences
        </Typography>

        <ul>
          <li>
            <strong>Shallow Freeze:</strong> Freezes only the top-level of an
            object. Nested objects remain mutable.
          </li>
          <li>
            <strong>Deep Freeze:</strong> Recursively freezes every level of the
            object structure.
          </li>
          <li>
            Shallow freeze is built-in via <code>Object.freeze()</code>, deep
            freeze requires a custom function.
          </li>
          <li>
            Deep freeze is useful for fully immutable data structures (e.g., in
            Redux or strict functional programming).
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          ⚠️ Considerations
        </Typography>

        <Typography paragraph>
          - Freezing objects (especially deeply) may have performance
          implications.
          <br />
          - Deep freeze can break cyclic references unless handled carefully.
          <br />- JavaScript doesn't warn when trying to mutate a frozen object
          unless in strict mode.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is function composition?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔗 Function Composition in JavaScript
        </Typography>

        <Typography paragraph>
          <strong>Function composition</strong> is the process of combining two
          or more functions to produce a new function. It enables clean,
          readable, and reusable code by allowing you to build complex logic
          from smaller, well-defined functions.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 What is Function Composition?
        </Typography>

        <Typography paragraph>
          Given two functions <code>f</code> and <code>g</code>, function
          composition is the act of creating a new function such that:
        </Typography>

        <CodeBlock
          code={`// Mathematically
f(g(x)) // f composed with g`}
        />

        <Typography paragraph>
          The result of <code>g(x)</code> is passed to <code>f</code>. This is
          often written as:
          <br />
          <CodeBlock code={`const composed = (...args) => f(g(...args))`} />
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ Manual Function Composition Example
        </Typography>

        <CodeBlock
          code={`const toUpper = str => str.toUpperCase();
const exclaim = str => str + '!';
const repeat = str => str + ' ' + str;

const shout = str => repeat(exclaim(toUpper(str)));

console.log(shout("hello")); 
// Output: HELLO! HELLO!`}
        />

        <Typography paragraph>
          In this example, we composed <code>toUpper</code>,{" "}
          <code>exclaim</code>, and <code>repeat</code> manually by nesting
          them. This can get hard to read when functions get more complex.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧰 Helper Function for Composition
        </Typography>

        <Typography paragraph>
          To simplify, we can write a helper function to compose functions in a
          left-to-right or right-to-left order.
        </Typography>

        <CodeBlock
          code={`// Right-to-left composition (like f(g(x)))
const compose = (...fns) => (value) =>
fns.reduceRight((acc, fn) => fn(acc), value);

// Left-to-right composition (like x -> g(x) -> f(x))
const pipe = (...fns) => (value) =>
fns.reduce((acc, fn) => fn(acc), value);

// Example usage
const shoutBetter = compose(repeat, exclaim, toUpper);
console.log(shoutBetter("hello")); 
// Output: HELLO! HELLO!

const shoutPipe = pipe(toUpper, exclaim, repeat);
console.log(shoutPipe("hello")); 
// Output: HELLO! HELLO!`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Real-World Use Case
        </Typography>

        <Typography paragraph>
          Function composition is commonly used in data processing, functional
          libraries (like <code>lodash/fp</code> or <code>ramda</code>), or
          building reusable pipelines.
        </Typography>

        <CodeBlock
          code={`const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const removeSpaces = str => str.replace(/\\s+/g, '-');

const slugify = pipe(trim, toLower, removeSpaces);

console.log(slugify("   Hello Functional World   ")); 
// Output: hello-functional-world`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          ✅ Benefits of Function Composition
        </Typography>
        <ul>
          <li>
            <strong>Modularity:</strong> Break logic into smaller reusable
            functions.
          </li>
          <li>
            <strong>Testability:</strong> Each unit is easy to test
            individually.
          </li>
          <li>
            <strong>Readability:</strong> Clear data flow from one function to
            another.
          </li>
          <li>
            <strong>Functional Programming:</strong> Encourages pure functions
            and immutability.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          ⚠️ Gotchas
        </Typography>
        <ul>
          <li>
            Functions are applied from right-to-left with <code>compose</code>,
            and left-to-right with <code>pipe</code>.
          </li>
          <li>Each function should return a valid output for the next one.</li>
          <li>
            Debugging can be harder if functions are not pure or throw
            unexpected errors.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What is tail call optimization?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🌀 Tail Call Optimization (TCO) in JavaScript
        </Typography>

        <Typography paragraph>
          <strong>Tail Call Optimization (TCO)</strong> is a feature that allows
          recursive functions to be executed without growing the call stack.
          It's a way to improve performance and prevent stack overflow errors by
          reusing stack frames under certain conditions.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 What is a Tail Call?
        </Typography>

        <Typography paragraph>
          A <strong>tail call</strong> happens when a function makes a call to
          another function (or itself) as its <em>last action</em>. That means
          there's nothing left to do in the calling function after the return.
        </Typography>

        <CodeBlock
          code={`function tailCall(x) {
return anotherFunction(x); // Tail call: last thing executed
}

function notTailCall(x) {
const result = anotherFunction(x);
return result + 1; // Not a tail call: there's still work after the call
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Recursion Without TCO
        </Typography>

        <Typography paragraph>
          Regular recursion without optimization can cause a{" "}
          <strong>stack overflow</strong> with deep recursive calls.
        </Typography>

        <CodeBlock
          code={`function factorial(n) {
if (n === 0) return 1;
return n * factorial(n - 1); // Not a tail call
}

console.log(factorial(100000)); // 💥 Stack overflow!
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ With Tail Call Optimization
        </Typography>

        <Typography paragraph>
          A tail-recursive version of the factorial function can avoid stack
          overflows <strong>if TCO is supported</strong> by the JavaScript
          engine.
        </Typography>

        <CodeBlock
          code={`function factorial(n, acc = 1) {
if (n === 0) return acc;
return factorial(n - 1, acc * n); // Tail call
}

console.log(factorial(100000)); // ✅ Safe if TCO is supported
`}
        />

        <Typography paragraph color="text.secondary">
          ⚠️ Note: As of now, most major JS engines (like V8 in Chrome/Node.js){" "}
          <strong>do not implement TCO</strong> due to spec and performance
          decisions. Safari supports it, though.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📜 ECMAScript 2015 (ES6) and TCO
        </Typography>

        <Typography paragraph>
          ES6 introduced TCO into the spec, requiring engines to optimize tail
          calls in strict mode.
        </Typography>

        <CodeBlock
          code={`'use strict';

function sum(x, y) {
return x + y; // Tail position
}

function compute(x) {
return sum(x, 10); // Tail call
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Real-World Use Cases
        </Typography>

        <Typography paragraph>
          - Computing large factorials or Fibonacci numbers
          <br />
          - Implementing parsers or interpreters
          <br />- Functional programming style recursion
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🚫 Why Isn’t TCO Common in JS?
        </Typography>
        <ul>
          <li>
            <strong>Debugging complexity:</strong> Optimized stack frames make
            debugging difficult.
          </li>
          <li>
            <strong>Low demand:</strong> Most developers don’t use deep
            recursion.
          </li>
          <li>
            <strong>Implementation cost:</strong> Especially in JIT engines like
            V8.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧠 Summary
        </Typography>
        <ul>
          <li>
            Tail calls are function calls that occur as the last step in a
            function.
          </li>
          <li>TCO reuses the same stack frame for tail-recursive calls.</li>
          <li>ES6 introduced TCO, but support is limited to Safari.</li>
          <li>
            Still useful to write tail-recursive code for readability and
            potential portability.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading:
      "What are web storage (localStorage, sessionStorage and cookies etc.)?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📦 Understanding Web Storage in JavaScript
        </Typography>

        <Typography paragraph>
          Web Storage is a mechanism that allows websites to store data in a
          user’s browser for later retrieval. It includes:
        </Typography>

        <ul>
          <li>
            <strong>localStorage</strong> – stores data with no expiration time.
          </li>
          <li>
            <strong>sessionStorage</strong> – stores data until the page session
            ends.
          </li>
          <li>
            <strong>Cookies</strong> – stores data that can be sent to the
            server with every request.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* localStorage */}
        <Typography variant="h5" gutterBottom>
          🗃️ localStorage
        </Typography>
        <Typography paragraph>
          <strong>localStorage</strong> stores data with no expiration time. The
          data persists even when the browser is closed and reopened.
        </Typography>
        <CodeBlock
          code={`// Set item
localStorage.setItem('username', 'john_doe');

// Get item
const user = localStorage.getItem('username'); // "john_doe"

// Remove item
localStorage.removeItem('username');

// Clear all
localStorage.clear();`}
        />

        <Divider sx={{ my: 3 }} />

        {/* sessionStorage */}
        <Typography variant="h5" gutterBottom>
          📥 sessionStorage
        </Typography>
        <Typography paragraph>
          <strong>sessionStorage</strong> works similarly to localStorage but
          the data is cleared when the page session ends (i.e., when the tab is
          closed).
        </Typography>
        <CodeBlock
          code={`// Set item
sessionStorage.setItem('sessionToken', 'abc123');

// Get item
const token = sessionStorage.getItem('sessionToken'); // "abc123"

// Remove item
sessionStorage.removeItem('sessionToken');

// Clear all
sessionStorage.clear();`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Cookies */}
        <Typography variant="h5" gutterBottom>
          🍪 Cookies
        </Typography>
        <Typography paragraph>
          <strong>Cookies</strong> are data stored in key-value pairs and can be
          sent with HTTP requests to the server. Cookies can also have
          expiration dates.
        </Typography>
        <CodeBlock
          code={`// Set cookie
document.cookie = "username=john_doe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// Get cookies
console.log(document.cookie); // "username=john_doe"

// Delete cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Comparison Table */}
        <Typography variant="h5" gutterBottom>
          🧮 Comparison Table
        </Typography>
        <ul>
          <li>
            <strong>localStorage:</strong> Persistent until manually cleared.
          </li>
          <li>
            <strong>sessionStorage:</strong> Cleared when tab or window is
            closed.
          </li>
          <li>
            <strong>Cookies:</strong> Can be persistent or expire, and are sent
            with every HTTP request.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* When to Use */}
        <Typography variant="h6" gutterBottom>
          ✅ When to Use Each
        </Typography>
        <ul>
          <li>
            <strong>Use localStorage</strong> for long-term storage of data like
            theme preferences or tokens.
          </li>
          <li>
            <strong>Use sessionStorage</strong> for per-session data like
            tab-specific inputs or temporary auth info.
          </li>
          <li>
            <strong>Use cookies</strong> when you need to store small amounts of
            data that must be sent to the server.
          </li>
        </ul>
      </Box>
    ),
  },
];
