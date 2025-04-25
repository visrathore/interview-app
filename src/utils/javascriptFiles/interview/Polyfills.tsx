import { Box, Divider, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const POLYFILLS_DATA = [
  {
    heading: "what are Polyfills in javascript?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧩 What Are Polyfills in JavaScript?
        </Typography>

        <Typography paragraph>
          In JavaScript, a <strong>polyfill</strong> is a piece of code (usually
          JavaScript itself) used to provide modern functionality on older
          browsers that do not natively support it.
        </Typography>

        <Typography paragraph>
          Polyfills are essential for maintaining cross-browser compatibility,
          especially when using features from newer versions of JavaScript
          (ES6+), such as <code>Array.prototype.includes</code>,{" "}
          <code>Promise</code>, or <code>fetch</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Why Use Polyfills?
        </Typography>

        <ul>
          <li>
            To support older browsers that don’t implement newer JavaScript
            APIs.
          </li>
          <li>
            To use modern JavaScript features without worrying about browser
            compatibility.
          </li>
          <li>To write cleaner, forward-compatible code.</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Example: Polyfill for <code>Array.prototype.includes()</code>
        </Typography>

        <Typography paragraph>
          Suppose you want to use <code>includes()</code> in a browser that
          doesn't support it (like IE11). Here's a polyfill:
        </Typography>

        <CodeBlock
          code={`if (!Array.prototype.includes) {
  Array.prototype.includes = function(element) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === element) {
        return true;
      }
    }
    return false;
  };
}
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Common Polyfills Used in Projects
        </Typography>
        <ul>
          <li>
            <strong>fetch</strong> – <code>whatwg-fetch</code>
          </li>
          <li>
            <strong>Promise</strong> – <code>es6-promise</code>
          </li>
          <li>
            <strong>Object.assign</strong> – custom or use <code>core-js</code>
          </li>
          <li>
            <strong>Array.includes</strong> – as shown above
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ How to Use Polyfills
        </Typography>
        <Typography paragraph>
          You can manually include polyfills in your code, or use libraries like{" "}
          <code>core-js</code> or <code>@babel/polyfill</code> to automatically
          include them:
        </Typography>

        <CodeBlock
          code={`// Using core-js for modern features
import 'core-js/stable';
import 'regenerator-runtime/runtime'; // for async/await`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🚀 Summary
        </Typography>
        <ul>
          <li>
            <strong>Polyfills</strong> patch missing features in older
            environments.
          </li>
          <li>They allow you to write future-proof and modern JavaScript.</li>
          <li>
            Used via libraries or manually written based on feature
            requirements.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "Create polyfill for map, filter and reduce.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧩 Simple Polyfills for Array Methods: map, filter, and reduce
        </Typography>

        <Typography paragraph>
          JavaScript provides several array methods such as <code>map</code>,{" "}
          <code>filter</code>, and <code>reduce</code>. These are essential for
          functional programming and can be polyfilled for compatibility in
          older browsers.
        </Typography>

        <Typography paragraph>
          Below are simpler polyfills for these methods.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Polyfill for <code>Array.prototype.map()</code>
        </Typography>
        <CodeBlock
          code={`if (!Array.prototype.map) {
Array.prototype.map = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
}
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Polyfill for <code>Array.prototype.filter()</code>
        </Typography>
        <CodeBlock
          code={`if (!Array.prototype.filter) {
Array.prototype.filter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};
}
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Polyfill for <code>Array.prototype.reduce()</code>
        </Typography>
        <CodeBlock
          code={`if (!Array.prototype.reduce) {
Array.prototype.reduce = function(callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};
}
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Example Usage
        </Typography>
        <CodeBlock
          code={`const numbers = [1, 2, 3, 4, 5];

// Using map
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Using filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Using reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📚 Summary
        </Typography>
        <ul>
          <li>
            <strong>map()</strong> creates a new array with the results of
            calling a function for every element in the array.
          </li>
          <li>
            <strong>filter()</strong> creates a new array with all elements that
            pass the test of the provided function.
          </li>
          <li>
            <strong>reduce()</strong> applies a function against an accumulator
            and each element in the array to reduce it to a single value.
          </li>
          <li>
            The provided polyfills are simpler implementations that cover the
            basic functionality of these methods.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "Create polyfill for call(), apply() and bind().",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔨 Polyfill for <code>call()</code>, <code>apply()</code>, and{" "}
          <code>bind()</code>
        </Typography>

        <Typography paragraph>
          In JavaScript, <code>call()</code>, <code>apply()</code>, and{" "}
          <code>bind()</code> are used to invoke a function with a specific{" "}
          <code>this</code> context and arguments. However, in case these
          methods are not supported in older environments, we can create
          polyfills to manually handle them.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Polyfill for <code>Function.prototype.call()</code>
        </Typography>
        <CodeBlock
          code={`if (!Function.prototype.call) {
Function.prototype.call = function(context, ...args) {
  context = context || globalThis; // Default to global object if no context is provided
  context.fn = this; // Assign the function to the context
  const result = context.fn(...args); // Call the function with the provided arguments
  delete context.fn; // Clean up
  return result; // Return the result
};
}
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Polyfill for <code>Function.prototype.apply()</code>
        </Typography>
        <CodeBlock
          code={`if (!Function.prototype.apply) {
Function.prototype.apply = function(context, args) {
  context = context || globalThis; // Default to global object if no context is provided
  context.fn = this; // Assign the function to the context
  const result = context.fn(...args); // Call the function with the provided arguments
  delete context.fn; // Clean up
  return result; // Return the result
};
}
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Polyfill for <code>Function.prototype.bind()</code>
        </Typography>
        <CodeBlock
          code={`if (!Function.prototype.bind) {
Function.prototype.bind = function(context, ...args) {
  const fn = this;
  return function(...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};
}
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Example Usage
        </Typography>
        <CodeBlock
          code={`function greet(name) {
console.log(\`Hello, \${name}!\`);
}

const person = { name: "Alice" };

// Using call
greet.call(person, "Bob"); // Hello, Bob!

// Using apply
greet.apply(person, ["Charlie"]); // Hello, Charlie!

// Using bind
const greetPerson = greet.bind(person, "David");
greetPerson(); // Hello, David!
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📚 Summary
        </Typography>
        <ul>
          <li>
            <strong>call()</strong> allows a function to be invoked with a
            specified <code>this</code> context and arguments passed
            individually.
          </li>
          <li>
            <strong>apply()</strong> allows a function to be invoked with a
            specified <code>this</code> context and arguments passed as an array
            or array-like object.
          </li>
          <li>
            <strong>bind()</strong> creates a new function that, when called,
            has its <code>this</code> context set to the provided value, and is
            pre-configured with initial arguments.
          </li>
          <li>
            Polyfills for <code>call()</code>, <code>apply()</code>, and{" "}
            <code>bind()</code> manually mimic the native behavior.
          </li>
          <li>
            These polyfills ensure that even in older environments, these
            powerful function manipulation tools are available.
          </li>
        </ul>
      </Box>
    ),
  },
];
