import { Box, Divider, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const ES6_DATA = [
  {
    heading: "What are template literals?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧵 Understanding Template Literals in JavaScript
        </Typography>

        <Typography paragraph>
          <strong>Template literals</strong> are a powerful feature introduced
          in ES6 that allow you to work with strings in a more flexible and
          readable way. They provide a way to embed expressions, multiline
          strings, and format strings easily.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Basic Syntax of Template Literals
        </Typography>
        <Typography paragraph>
          Template literals are enclosed in backticks (<code>&#96;</code>)
          instead of single or double quotes. They allow:
          <ul>
            <li>String interpolation (embedding variables/expressions).</li>
            <li>Multiline strings.</li>
          </ul>
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Syntax:
        </Typography>
        <CodeBlock code={`const greeting = \`Hello, \${name}!\`;`} />

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          ✅ Example - String Interpolation:
        </Typography>
        <CodeBlock
          code={`const name = "John";
const message = \`Hello, \${name}!\`; // String interpolation
console.log(message); // Output: Hello, John!`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Output:
        </Typography>
        <CodeBlock code={`Hello, John!`} />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Multiline Strings
        </Typography>
        <Typography paragraph>
          Template literals allow you to create multiline strings easily. No
          need for escape characters or concatenation.
        </Typography>
        <Typography variant="h6" gutterBottom>
          ✅ Example - Multiline String:
        </Typography>
        <CodeBlock
          code={`const multilineString = \`This is a multiline
string that spans
several lines.\`;
console.log(multilineString);`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Output:
        </Typography>
        <CodeBlock
          code={`This is a multiline
string that spans
several lines.`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔢 Expression Evaluation in Template Literals
        </Typography>
        <Typography paragraph>
          Inside template literals, you can embed any JavaScript expression
          inside the curly braces (<code>\${}</code>). This could include
          arithmetic operations, function calls, etc.
        </Typography>
        <Typography variant="h6" gutterBottom>
          ✅ Example - Expression Inside Template Literal:
        </Typography>
        <CodeBlock
          code={`const a = 5;
const b = 10;
const sum = \${a + b}; // Expressions inside \${...}
console.log(\`The sum of a and b is \${sum}\`);`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Output:
        </Typography>
        <CodeBlock code={`The sum of a and b is 15`} />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧰 Tagged Template Literals
        </Typography>
        <Typography paragraph>
          Tagged template literals allow you to parse template literals with a
          function. This lets you manipulate the template literal before it’s
          turned into a string.
        </Typography>
        <Typography variant="h6" gutterBottom>
          ✅ Example - Tagged Template Literal:
        </Typography>
        <CodeBlock
          code={`function highlight(strings, ...values) {
return strings.reduce((acc, str, i) => {
  return acc + str + (values[i] ? \`<strong>\${values[i]}</strong>\` : '');
}, '');
}

const name = "Alice";
const message = highlight\`Hello, \${name}!\`; // Using tagged template
console.log(message);`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Output:
        </Typography>
        <CodeBlock code={`Hello, <strong>Alice</strong>!`} />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          ⚠️ Key Takeaways
        </Typography>
        <ul>
          <li>
            Template literals are enclosed in backticks (<code>&#96;</code>).
          </li>
          <li>
            They support string interpolation using <code>\${}</code>.
          </li>
          <li>Multiline strings are easy to work with.</li>
          <li>
            Tagged template literals allow function-based string processing.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧪 Summary
        </Typography>
        <ul>
          <li>Template literals enhance string handling in JavaScript.</li>
          <li>
            They enable cleaner, more readable code when working with strings.
          </li>
          <li>
            They allow interpolation of expressions, multiline strings, and more
            advanced string manipulation.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What ES6 offers?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🚀 ES6 (ECMAScript 2015) Features in JavaScript
        </Typography>

        <Typography paragraph>
          <strong>ES6 (ECMAScript 2015)</strong> is a major update to JavaScript
          that introduced several new features to the language, making it more
          powerful, efficient, and easier to write. Below are some of the key
          features that ES6 offers.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          1️⃣ Let & Const
        </Typography>
        <Typography paragraph>
          ES6 introduces two new ways to declare variables: <code>let</code> and{" "}
          <code>const</code>. They provide better scoping compared to{" "}
          <code>var</code>, which has function scope.
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Example - Let & Const:
        </Typography>
        <CodeBlock
          code={`let x = 10; // Can be reassigned
const y = 20; // Cannot be reassigned
x = 15; // Valid
y = 25; // Error: Assignment to constant variable.`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          ✅ Example - Block Scope:
        </Typography>
        <CodeBlock
          code={`if (true) {
let a = 30;
const b = 40;
console.log(a, b); // 30, 40
}
console.log(a, b); // Error: a is not defined, b is not defined`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          2️⃣ Arrow Functions
        </Typography>
        <Typography paragraph>
          Arrow functions are a shorthand syntax for writing functions. They
          also have a different behavior for the <code>this</code> keyword,
          making them useful for many situations where traditional functions
          would behave unexpectedly.
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Example - Arrow Function:
        </Typography>
        <CodeBlock
          code={`const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          ✅ Example - Arrow Function with This:
        </Typography>
        <CodeBlock
          code={`const obj = {
value: 10,
getValue: function() {
  setTimeout(() => {
    console.log(this.value); // 10
  }, 1000);
}
};
obj.getValue();`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          3️⃣ Template Literals
        </Typography>
        <Typography paragraph>
          Template literals provide an easy way to work with strings and allow
          for string interpolation, multiline strings, and tagged templates.
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Example - Template Literals:
        </Typography>
        <CodeBlock
          code={`const name = 'Alice';
const greeting = \`Hello, \${name}!\`;
console.log(greeting); // Output: Hello, Alice!`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          ✅ Example - Multiline String:
        </Typography>
        <CodeBlock
          code={`const multiline = \`This is
a multiline string
in ES6!\`;
console.log(multiline);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          4️⃣ Destructuring Assignment
        </Typography>
        <Typography paragraph>
          Destructuring assignment allows you to unpack values from arrays or
          objects into distinct variables using a simple and concise syntax.
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Example - Array Destructuring:
        </Typography>
        <CodeBlock
          code={`const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a, b); // Output: 1 2`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          ✅ Example - Object Destructuring:
        </Typography>
        <CodeBlock
          code={`const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name, age); // Output: John 30`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          5️⃣ Default Parameters
        </Typography>
        <Typography paragraph>
          ES6 allows you to set default values for function parameters. This
          helps to handle cases where the parameter is undefined.
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Example - Default Parameters:
        </Typography>
        <CodeBlock
          code={`function greet(name = 'Guest') {
console.log(\`Hello, \${name}!\`);
}
greet(); // Output: Hello, Guest!
greet('Alice'); // Output: Hello, Alice!`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          6️⃣ Promises
        </Typography>
        <Typography paragraph>
          Promises provide a way to handle asynchronous operations. They
          represent a value that may be available now, or in the future, or
          never. ES6 introduced promises to deal with callback hell and
          asynchronous code.
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Example - Promise:
        </Typography>
        <CodeBlock
          code={`const promise = new Promise((resolve, reject) => {
const success = true;
if (success) {
  resolve('Success!');
} else {
  reject('Error!');
}
});

promise
.then(result => console.log(result)) // Output: Success!
.catch(error => console.log(error));`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          7️⃣ Classes
        </Typography>
        <Typography paragraph>
          ES6 introduces class syntax to JavaScript, making it easier to create
          objects and manage inheritance.
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Example - Class:
        </Typography>
        <CodeBlock
          code={`class Person {
constructor(name, age) {
  this.name = name;
  this.age = age;
}

greet() {
  console.log(\`Hello, my name is \${this.name} and I'm \${this.age} years old.\`);
}
}

const john = new Person('John', 30);
john.greet(); // Output: Hello, my name is John and I'm 30 years old.`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          8️⃣ Modules
        </Typography>
        <Typography paragraph>
          ES6 introduces the concept of modules, allowing you to export and
          import code between files, making your code more modular and
          maintainable.
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Example - Modules:
        </Typography>
        <CodeBlock
          code={`// file1.js
export const greet = () => console.log('Hello!');

// file2.js
import { greet } from './file1';
greet(); // Output: Hello!`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          ⚡ Summary of ES6 Features:
        </Typography>
        <ul>
          <li>Introduced let & const for better variable scoping.</li>
          <li>Arrow functions for concise function syntax.</li>
          <li>Template literals for easier string manipulation.</li>
          <li>Destructuring for easier unpacking of arrays and objects.</li>
          <li>Default parameters for more flexible function definitions.</li>
          <li>Promises to handle asynchronous operations.</li>
          <li>Classes to manage object-oriented programming easily.</li>
          <li>Modules to enable code reuse and separation of concerns.</li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What are spread and rest operators?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔄 Spread and Rest Operators in JavaScript
        </Typography>

        <Typography paragraph>
          The <strong>Spread (...) operator</strong> and the{" "}
          <strong>Rest (...) operator</strong> look the same, but their behavior
          depends on the context:
        </Typography>

        <ul>
          <li>
            <strong>Spread:</strong> Expands elements of an array or object.
          </li>
          <li>
            <strong>Rest:</strong> Collects multiple elements into a single
            array or object.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Spread Operator Section */}
        <Typography variant="h5" gutterBottom>
          🟢 Spread Operator
        </Typography>
        <Typography paragraph>
          The spread operator <code>...</code> is used to unpack values from
          arrays or objects.
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Example - Spread in Arrays:
        </Typography>
        <CodeBlock
          code={`const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          ✅ Example - Spread in Objects:
        </Typography>
        <CodeBlock
          code={`const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26 };

console.log(updatedUser); // { name: "Alice", age: 26 }`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          ✅ Example - Copying Arrays/Objects:
        </Typography>
        <CodeBlock
          code={`const original = [1, 2, 3];
const copy = [...original];

console.log(copy); // [1, 2, 3]`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Rest Operator Section */}
        <Typography variant="h5" gutterBottom>
          🔵 Rest Operator
        </Typography>
        <Typography paragraph>
          The rest operator <code>...</code> is used in function parameters or
          destructuring to gather remaining values into a single variable (array
          or object).
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Example - Rest in Function Parameters:
        </Typography>
        <CodeBlock
          code={`function sum(...numbers) {
return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // 6`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          ✅ Example - Rest in Array Destructuring:
        </Typography>
        <CodeBlock
          code={`const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          ✅ Example - Rest in Object Destructuring:
        </Typography>
        <CodeBlock
          code={`const { name, ...otherDetails } = {
name: "Bob",
age: 30,
city: "New York"
};

console.log(name);         // Bob
console.log(otherDetails); // { age: 30, city: "New York" }`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          📌 Summary
        </Typography>
        <ul>
          <li>
            <strong>Spread</strong> is used to unpack data — useful for cloning
            and merging.
          </li>
          <li>
            <strong>Rest</strong> is used to collect remaining data — useful in
            parameters and destructuring.
          </li>
          <li>
            They look the same (<code>...</code>) but act differently based on
            where they are used.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What is the difference between import and require?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📦 Difference Between <code>import</code> and <code>require</code> in
          JavaScript
        </Typography>

        <Typography paragraph>
          Both <strong>import</strong> and <strong>require</strong> are used to
          include modules, but they come from different module systems and have
          different syntax, capabilities, and use cases.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🏛️ Module Systems
        </Typography>
        <ul>
          <li>
            <strong>
              <code>require</code>
            </strong>{" "}
            comes from <strong>CommonJS</strong> (CJS) – used mainly in Node.js.
          </li>
          <li>
            <strong>
              <code>import</code>
            </strong>{" "}
            is from <strong>ESModules</strong> (ESM) – standard for modern
            JavaScript.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Syntax Comparison
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Using <code>require</code> (CommonJS):
        </Typography>
        <CodeBlock
          code={`// file: math.js
module.exports = {
add: (a, b) => a + b,
};

// file: app.js
const math = require('./math');
console.log(math.add(2, 3)); // 5`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          ✅ Using <code>import</code> (ESModules):
        </Typography>
        <CodeBlock
          code={`// file: math.js
export const add = (a, b) => a + b;

// file: app.js
import { add } from './math.js';
console.log(add(2, 3)); // 5`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Key Differences
        </Typography>

        <ul>
          <li>
            <strong>Syntax:</strong> <code>require()</code> is a function;{" "}
            <code>import</code> is a keyword.
          </li>
          <li>
            <strong>Static vs Dynamic:</strong> <code>import</code> is
            statically analyzed (at compile time), <code>require</code> is
            dynamic (at runtime).
          </li>
          <li>
            <strong>Top-level Usage:</strong> <code>import</code> must be at the
            top-level, <code>require</code> can be used conditionally.
          </li>
          <li>
            <strong>Default Exports:</strong> ESModules support default exports;
            CommonJS has <code>module.exports</code>.
          </li>
          <li>
            <strong>Interop:</strong> ESModules can import CommonJS modules, but
            not always vice versa.
          </li>
          <li>
            <strong>Environment:</strong> <code>require</code> is Node-specific
            unless bundled; <code>import</code> is now standard in browsers and
            Node (with <code>"type": "module"</code> in{" "}
            <code>package.json</code>).
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ Usage Example for Conditional Imports
        </Typography>
        <Typography paragraph>
          <strong>require</strong> works inside conditional blocks,{" "}
          <strong>import</strong> does not.
        </Typography>
        <CodeBlock
          code={`if (process.env.NODE_ENV === 'development') {
const devTools = require('dev-tools');
devTools.enable();
}

// This won't work with import:
// if (condition) {
//   import something from '...'; ❌
// }`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Summary
        </Typography>
        <ul>
          <li>
            Use <code>require</code> in older Node.js/CommonJS projects.
          </li>
          <li>
            Use <code>import</code> in modern JavaScript and TypeScript.
          </li>
          <li>
            <code>import</code> is preferred for tree-shaking, static analysis,
            and future-proofing.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What are modules in JavaScript?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📦 What Are Modules in JavaScript?
        </Typography>

        <Typography paragraph>
          <strong>Modules</strong> in JavaScript are independent, reusable
          pieces of code that are encapsulated in their own file or scope. They
          help in organizing code into smaller, manageable, and maintainable
          parts. Modules can export variables, functions, classes, and objects
          so they can be reused in other files.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🏛️ Why Use Modules?
        </Typography>

        <ul>
          <li>
            Encapsulation: Keeps code separate and avoids global pollution.
          </li>
          <li>Reusability: Share functionality across multiple files.</li>
          <li>Maintainability: Easier to manage a large codebase.</li>
          <li>
            Dependency Management: Explicit dependencies via imports/exports.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📁 Basic Structure of a Module
        </Typography>

        <Typography paragraph>
          A module file typically <strong>exports</strong> certain elements, and
          another file <strong>imports</strong> them for use.
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Module Export (math.js):
        </Typography>
        <CodeBlock
          code={`// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          ✅ Module Import (app.js):
        </Typography>
        <CodeBlock
          code={`// app.js
import { add, subtract } from './math.js';

console.log(add(5, 3));       // 8
console.log(subtract(5, 3));  // 2`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🌟 Default vs Named Exports
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          👉 Named Exports:
        </Typography>
        <CodeBlock
          code={`// utils.js
export const greet = () => console.log("Hello");
export const farewell = () => console.log("Bye");

// index.js
import { greet, farewell } from './utils.js';`}
        />

        <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
          👉 Default Export:
        </Typography>
        <CodeBlock
          code={`// logger.js
const log = (message) => console.log(message);
export default log;

// app.js
import log from './logger.js';
log("Logging a message");`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🌐 Module Types in JavaScript
        </Typography>

        <ul>
          <li>
            <strong>CommonJS (CJS):</strong> Used in Node.js. Uses{" "}
            <code>require()</code> and <code>module.exports</code>.
          </li>
          <li>
            <strong>ESModules (ESM):</strong> Standard in modern JS. Uses{" "}
            <code>import</code> and <code>export</code> syntax.
          </li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          CommonJS Example:
        </Typography>
        <CodeBlock
          code={`// math.js
const multiply = (a, b) => a * b;
module.exports = multiply;

// app.js
const multiply = require('./math');
console.log(multiply(2, 4));`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Static vs Dynamic Imports
        </Typography>

        <Typography paragraph>
          <strong>Static imports</strong> are resolved at compile-time;{" "}
          <strong>dynamic imports</strong> are loaded at runtime.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          👉 Dynamic Import Example:
        </Typography>
        <CodeBlock
          code={`// app.js
async function loadMath() {
const math = await import('./math.js');
console.log(math.add(2, 3));
}
loadMath();`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Summary
        </Typography>

        <ul>
          <li>Modules help organize and reuse code effectively.</li>
          <li>
            ESModules are the modern standard using <code>import/export</code>.
          </li>
          <li>
            CommonJS is used in Node.js with <code>require/module.exports</code>
            .
          </li>
          <li>Named and default exports serve different use cases.</li>
          <li>Dynamic imports enable code-splitting and lazy loading.</li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What is optional chaining?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          ❓ What is Optional Chaining in JavaScript?
        </Typography>

        <Typography paragraph>
          <strong>Optional Chaining (`?.`)</strong> is a feature introduced in
          ES2020 that allows you to safely access deeply nested object
          properties without having to manually check each level of the object.
        </Typography>

        <Typography paragraph>
          It helps avoid runtime errors like{" "}
          <code>TypeError: Cannot read property 'x' of undefined</code> by
          returning <code>undefined</code> if a reference is nullish (
          <code>null</code> or <code>undefined</code>) instead of throwing an
          error.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Problem Without Optional Chaining
        </Typography>
        <CodeBlock
          code={`const user = {
profile: {
  name: "Alice",
  address: {
    city: "Wonderland"
  }
}
};

// Trying to access country safely
const country = user.profile && user.profile.address && user.profile.address.country;
console.log(country); // undefined (no error)`}
        />

        <Typography variant="h6" sx={{ mt: 2 }}>
          😩 Tedious and hard to read!
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ With Optional Chaining
        </Typography>
        <CodeBlock
          code={`const user = {
profile: {
  name: "Alice",
  address: {
    city: "Wonderland"
  }
}
};

const country = user?.profile?.address?.country;
console.log(country); // undefined (safe access)`}
        />

        <Typography paragraph>
          Much cleaner and easier to understand! 💡
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💬 Use Cases of Optional Chaining
        </Typography>

        <ul>
          <li>Accessing nested object properties</li>
          <li>Calling optional functions</li>
          <li>Accessing array elements inside objects</li>
        </ul>

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          📌 Example: Optional function call
        </Typography>
        <CodeBlock
          code={`const user = {
greet: () => console.log("Hello!")
};

user.greet?.();  // Hello!

const anotherUser = {};
anotherUser.greet?.();  // Nothing happens, no error`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          📌 Example: Optional access to array
        </Typography>
        <CodeBlock
          code={`const user = {
friends: ["Bob", "Charlie"]
};

console.log(user.friends?.[0]); // Bob

const anotherUser = {};
console.log(anotherUser.friends?.[0]); // undefined`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ❌ What Optional Chaining is NOT
        </Typography>

        <ul>
          <li>
            It doesn’t suppress real bugs — use only where something is
            *expected* to be optional.
          </li>
          <li>
            It only works on properties, function calls, and arrays — not for
            assignment or logic.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Summary
        </Typography>
        <ul>
          <li>
            Introduced in ES2020 to simplify safe access to deeply nested
            properties.
          </li>
          <li>
            Uses <code>?.</code> to short-circuit evaluation if something is{" "}
            <code>null</code> or <code>undefined</code>.
          </li>
          <li>Improves readability and reduces boilerplate null checks.</li>
          <li>Should be used only when properties/methods *may* not exist.</li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What is Nullish Coalescing?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🤔 JavaScript Nullish Coalescing Operator (<code>??</code>)
        </Typography>

        <Typography paragraph>
          The <strong>nullish coalescing operator</strong> (<code>??</code>) is
          a logical operator that returns the right-hand side operand when the
          left-hand side operand is <code>null</code> or <code>undefined</code>.
          It was introduced in <strong>ES2020</strong> and is useful when you
          want to provide default values without overriding values like{" "}
          <code>0</code>, <code>''</code> (empty string), or <code>false</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Syntax
        </Typography>

        <CodeBlock code={`let result = value ?? defaultValue;`} />

        <Typography paragraph>
          If <code>value</code> is <strong>null or undefined</strong>, the
          operator returns <code>defaultValue</code>. Otherwise, it returns{" "}
          <code>value</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Example: Using <code>??</code>
        </Typography>

        <CodeBlock
          code={`let userName;
let displayName = userName ?? "Guest";

console.log(displayName); // "Guest"`}
        />

        <Typography paragraph>
          In the example above, since <code>userName</code> is{" "}
          <code>undefined</code>, <code>displayName</code> becomes
          <code>"Guest"</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Comparison with <code>||</code> (Logical OR)
        </Typography>

        <Typography paragraph>
          The logical OR operator (<code>||</code>) also provides default values
          but treats
          <code>false</code>, <code>0</code>, <code>''</code> (empty string),
          and <code>NaN</code> as falsy. This means it might override valid
          values unintentionally.
        </Typography>

        <CodeBlock
          code={`let score = 0;

let resultWithOR = score || 100;       // 100
let resultWithNullish = score ?? 100;  // 0

console.log(resultWithOR);       // 100 (not ideal if 0 is valid)
console.log(resultWithNullish);  // 0   (correctly preserves 0)`}
        />

        <Typography paragraph>
          Use <code>??</code> when you want to check only for <code>null</code>{" "}
          or <code>undefined</code> and preserve values like <code>0</code> or{" "}
          <code>false</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 Cannot be Mixed Directly with <code>||</code> or <code>&&</code>{" "}
          Without Parentheses
        </Typography>

        <Typography paragraph>
          JavaScript does not allow direct use of <code>??</code> with{" "}
          <code>||</code> or <code>&&</code>
          without explicit parentheses due to ambiguity.
        </Typography>

        <CodeBlock
          code={`// ❌ SyntaxError
let result = a || b ?? c;

// ✅ Correct
let result = (a || b) ?? c;`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧠 Use Cases
        </Typography>

        <ul>
          <li>
            Providing default values for <code>null</code> or{" "}
            <code>undefined</code> inputs
          </li>
          <li>Fallbacks for optional parameters</li>
          <li>
            Avoiding incorrect falsy checks from <code>||</code>
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🏁 Summary
        </Typography>
        <Typography paragraph>
          The nullish coalescing operator <code>??</code> is a safe and reliable
          way to assign default values only when a variable is <code>null</code>{" "}
          or <code>undefined</code>. It avoids the pitfalls of the logical OR (
          <code>||</code>) operator when dealing with valid falsy values like{" "}
          <code>0</code>
          or <code>false</code>.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are dynamic imports?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📦 What are Dynamic Imports in JavaScript?
        </Typography>

        <Typography paragraph>
          <strong>Dynamic Imports</strong> allow you to load JavaScript modules
          dynamically at runtime using the <code>import()</code> function
          instead of static <code>import</code> statements.
        </Typography>

        <Typography paragraph>
          This feature was introduced in <strong>ES2020</strong> and is
          extremely useful for <em>code splitting</em>, <em>lazy loading</em>,
          and <em>improving application performance</em> — especially in
          frameworks like React, Vue, or Next.js.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📥 Syntax of Dynamic Import
        </Typography>
        <CodeBlock
          code={`import("path/to/module")
.then((module) => {
  // Use the module
})
.catch((error) => {
  // Handle loading error
});`}
        />

        <Typography paragraph>
          The <code>import()</code> function returns a <strong>Promise</strong>{" "}
          that resolves to the module object.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Static vs Dynamic Import
        </Typography>
        <Typography variant="subtitle1">Static Import:</Typography>
        <CodeBlock
          code={`import _ from "lodash";

console.log(_.random(1, 10));`}
        />

        <Typography variant="subtitle1">Dynamic Import:</Typography>
        <CodeBlock
          code={`async function loadLodash() {
const _ = await import("lodash");
console.log(_.random(1, 10));
}

loadLodash();`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚡ Benefits of Dynamic Imports
        </Typography>
        <ul>
          <li>
            <strong>Code Splitting:</strong> Load only what’s needed.
          </li>
          <li>
            <strong>Faster Initial Loads:</strong> Reduce bundle size.
          </li>
          <li>
            <strong>Lazy Loading:</strong> Load modules when they are needed
            (e.g. after a user action).
          </li>
          <li>
            <strong>Conditional Imports:</strong> Import modules based on logic
            at runtime.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Example: Conditional Import
        </Typography>
        <CodeBlock
          code={`const isAdmin = true;

if (isAdmin) {
import("./admin-panel").then((module) => {
  module.loadAdminDashboard();
});
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Use in React with Lazy Loading
        </Typography>
        <Typography paragraph>
          Dynamic imports are commonly used in React with{" "}
          <code>React.lazy()</code> and <code>Suspense</code>:
        </Typography>
        <CodeBlock
          code={`import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./HeavyComponent"));

function App() {
return (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  </div>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ❗ Things to Keep in Mind
        </Typography>
        <ul>
          <li>
            Works only with <strong>ES Modules</strong>.
          </li>
          <li>
            Dynamic paths like <CodeBlock code={"import(`${name}.js`)"} /> may
            not be statically analyzable and might not work with bundlers.
          </li>
          <li>
            You must handle async behavior (use <code>await</code> or{" "}
            <code>.then()</code>).
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Summary
        </Typography>
        <ul>
          <li>
            Dynamic imports load modules at runtime using <code>import()</code>.
          </li>
          <li>
            Useful for lazy loading, performance optimization, and conditional
            logic.
          </li>
          <li>
            Commonly used with <code>React.lazy</code> and <code>Suspense</code>{" "}
            in React apps.
          </li>
          <li>
            Returns a Promise, so handle with <code>await</code> or{" "}
            <code>.then()</code>.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What are Sets and Maps?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📦 Understanding Sets and Maps in JavaScript
        </Typography>

        <Typography paragraph>
          JavaScript introduced <strong>Sets</strong> and <strong>Maps</strong>{" "}
          in ES6 to provide more powerful data structures than plain objects or
          arrays for managing collections of values or key-value pairs.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* SETS SECTION */}
        <Typography variant="h5" gutterBottom>
          🔹 What is a Set?
        </Typography>
        <Typography paragraph>
          A <code>Set</code> is a collection of <strong>unique values</strong>.
          It automatically removes duplicates and maintains insertion order.
        </Typography>

        <Typography variant="subtitle1">
          ✅ Example: Creating and Using a Set
        </Typography>
        <CodeBlock
          code={`const numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(2); // Duplicate — ignored

console.log(numbers); // Set { 1, 2 }`}
        />

        <Typography variant="subtitle1">🎯 Key Set Features</Typography>
        <ul>
          <li>
            Stores only <strong>unique</strong> values
          </li>
          <li>Values can be of any type (primitive or object)</li>
          <li>Iterates in insertion order</li>
        </ul>

        <Typography variant="subtitle1">🛠 Common Set Methods</Typography>
        <CodeBlock
          code={`const fruits = new Set(["apple", "banana", "apple"]);

fruits.has("apple");   // true
fruits.size;           // 2
fruits.delete("banana");
fruits.clear();        // Removes all items`}
        />

        <Divider sx={{ my: 3 }} />

        {/* MAPS SECTION */}
        <Typography variant="h5" gutterBottom>
          🔸 What is a Map?
        </Typography>
        <Typography paragraph>
          A <code>Map</code> is a collection of <strong>key-value pairs</strong>{" "}
          where keys can be of any type — even objects or functions.
        </Typography>

        <Typography variant="subtitle1">
          ✅ Example: Creating and Using a Map
        </Typography>
        <CodeBlock
          code={`const user = new Map();

user.set("name", "Alice");
user.set("age", 30);
user.set({ role: "admin" }, true);

console.log(user.get("name")); // Alice`}
        />

        <Typography variant="subtitle1">🎯 Key Map Features</Typography>
        <ul>
          <li>
            <strong>Key-value pairs</strong> like objects, but keys can be any
            type
          </li>
          <li>
            <strong>Order is preserved</strong> (insertion order)
          </li>
          <li>
            Offers better performance for frequently added/removed key-value
            pairs
          </li>
        </ul>

        <Typography variant="subtitle1">🛠 Common Map Methods</Typography>
        <CodeBlock
          code={`const settings = new Map([
["theme", "dark"],
["layout", "grid"]
]);

settings.has("theme");     // true
settings.get("layout");    // "grid"
settings.set("theme", "light");
settings.delete("layout");
settings.clear();`}
        />

        <Divider sx={{ my: 3 }} />

        {/* COMPARISON */}
        <Typography variant="h5" gutterBottom>
          🔍 Sets vs Arrays | Maps vs Objects
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          ✳️ Set vs Array
        </Typography>
        <ul>
          <li>
            <strong>Set:</strong> Unordered, no duplicates
          </li>
          <li>
            <strong>Array:</strong> Ordered, allows duplicates
          </li>
        </ul>

        <Typography variant="subtitle1" gutterBottom>
          ✳️ Map vs Object
        </Typography>
        <ul>
          <li>
            <strong>Map:</strong> Any key type, ordered, iterable
          </li>
          <li>
            <strong>Object:</strong> String/symbol keys only, not ordered by
            default
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* SUMMARY */}
        <Typography variant="h5" gutterBottom>
          🧪 Summary
        </Typography>
        <ul>
          <li>
            <strong>Set</strong> is for storing unique values without
            duplicates.
          </li>
          <li>
            <strong>Map</strong> is for storing key-value pairs with flexible
            key types.
          </li>
          <li>
            Both offer better performance and flexibility than arrays or objects
            in certain use cases.
          </li>
        </ul>
      </Box>
    ),
  },
];
