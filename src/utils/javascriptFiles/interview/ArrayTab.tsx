import { Box, Divider, Typography } from "@mui/material";

import CodeBlock from "../../../components/UI/CodeBlock";

export const ARRAY_DATA = [
  {
    heading: "What is Array?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          What is an Array in JavaScript?
        </Typography>

        <Typography variant="body1" paragraph>
          An <strong>Array</strong> in JavaScript is a special variable that can
          hold multiple values in a single variable. Arrays are used to store
          ordered collections of data—such as numbers, strings, objects, or even
          other arrays.
        </Typography>

        <Typography variant="body1" paragraph>
          JavaScript arrays are zero-indexed, meaning the first element is
          accessed at index <code>0</code>.
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Declaring an Array
        </Typography>
        <CodeBlock
          code={`const fruits = ['apple', 'banana', 'mango'];
console.log(fruits[0]); // Output: "apple"`}
        />

        <Typography variant="h6" gutterBottom>
          ✅ Using the Array Constructor
        </Typography>
        <CodeBlock
          code={`const numbers = new Array(1, 2, 3, 4);
console.log(numbers); // Output: [1, 2, 3, 4]`}
        />

        <Typography variant="h6" gutterBottom>
          ✅ Mixed Data Types
        </Typography>
        <Typography variant="body1" paragraph>
          JavaScript arrays can hold elements of different types.
        </Typography>
        <CodeBlock
          code={`const mixedArray = ['text', 42, true, null, { name: 'John' }];
console.log(mixedArray[4].name); // Output: "John"`}
        />

        <Typography variant="h6" gutterBottom>
          ✅ Array Properties & Methods
        </Typography>
        <Typography variant="body1" paragraph>
          JavaScript arrays come with useful built-in properties and methods.
          Here are some examples:
        </Typography>

        <Typography variant="subtitle1">
          🔹 <code>.length</code>
        </Typography>
        <CodeBlock
          code={`const fruits = ['apple', 'banana', 'mango'];
console.log(fruits.length); // Output: 3`}
        />

        <Typography variant="subtitle1">
          🔹 <code>.push()</code> - Add to end
        </Typography>
        <CodeBlock
          code={`fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'mango', 'orange']`}
        />

        <Typography variant="subtitle1">
          🔹 <code>.pop()</code> - Remove from end
        </Typography>
        <CodeBlock
          code={`fruits.pop();
console.log(fruits); // ['apple', 'banana', 'mango']`}
        />

        <Typography variant="subtitle1">
          🔹 <code>.shift()</code> - Remove from start
        </Typography>
        <CodeBlock
          code={`fruits.shift();
console.log(fruits); // ['banana', 'mango']`}
        />

        <Typography variant="subtitle1">
          🔹 <code>.unshift()</code> - Add to start
        </Typography>
        <CodeBlock
          code={`fruits.unshift('strawberry');
console.log(fruits); // ['strawberry', 'banana', 'mango']`}
        />

        <Typography variant="subtitle1">
          🔹 <code>.map()</code> - Transform each element
        </Typography>
        <CodeBlock
          code={`const doubled = [1, 2, 3].map(num => num * 2);
console.log(doubled); // [2, 4, 6]`}
        />

        <Typography variant="subtitle1">
          🔹 <code>.filter()</code> - Filter elements
        </Typography>
        <CodeBlock
          code={`const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]`}
        />

        <Typography variant="h6" gutterBottom>
          🔁 Looping Through Arrays
        </Typography>
        <Typography variant="body1" paragraph>
          You can use loops like <code>for</code>, <code>forEach</code>,{" "}
          <code>map</code>, and <code>for...of</code> to iterate over array
          elements.
        </Typography>
        <CodeBlock
          code={`const colors = ['red', 'green', 'blue'];
colors.forEach((color, index) => {
console.log(\`\${index}: \${color}\`);
});`}
        />

        <Typography variant="h6" gutterBottom>
          🧠 Summary
        </Typography>
        <Typography variant="body1" paragraph>
          Arrays in JavaScript are powerful tools for managing lists of values.
          They are flexible, dynamic, and come with a wide range of methods to
          manipulate and traverse the data.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are array methods like map, filter, reduce?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          JavaScript Array Methods: <code>map()</code>, <code>filter()</code>,{" "}
          <code>reduce()</code>
        </Typography>

        <Typography variant="body1" paragraph>
          JavaScript provides powerful built-in array methods that help
          transform, filter, and reduce data. Among them, <code>map()</code>,{" "}
          <code>filter()</code>, and <code>reduce()</code> are the most commonly
          used functional programming tools.
        </Typography>

        {/* MAP */}
        <Typography variant="h5" gutterBottom>
          🔁 <code>map()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          The <code>map()</code> method creates a new array by calling a
          function on every element in the original array. It does not modify
          the original array.
        </Typography>
        <Typography variant="subtitle1">✅ Syntax:</Typography>
        <CodeBlock
          code={`const newArray = originalArray.map((element, index, array) => {
// return transformed element
});`}
        />
        <Typography variant="subtitle1">✅ Example:</Typography>
        <CodeBlock
          code={`const numbers = [1, 2, 3];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9]`}
        />

        {/* FILTER */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          🚫 <code>filter()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          The <code>filter()</code> method returns a new array with only the
          elements that pass a test provided by the callback function.
        </Typography>
        <Typography variant="subtitle1">✅ Syntax:</Typography>
        <CodeBlock
          code={`const filteredArray = originalArray.filter((element, index, array) => {
// return true to keep the element
});`}
        />
        <Typography variant="subtitle1">✅ Example:</Typography>
        <CodeBlock
          code={`const ages = [16, 21, 18, 25];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [21, 18, 25]`}
        />

        {/* REDUCE */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          🧮 <code>reduce()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          The <code>reduce()</code> method applies a function against an
          accumulator and each element in the array to reduce it to a single
          value.
        </Typography>
        <Typography variant="subtitle1">✅ Syntax:</Typography>
        <CodeBlock
          code={`const result = array.reduce((accumulator, currentValue, index, array) => {
return accumulator + currentValue;
}, initialValue);`}
        />
        <Typography variant="subtitle1">✅ Example:</Typography>
        <CodeBlock
          code={`const prices = [100, 50, 25];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // 175`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          🧠 Summary
        </Typography>
        <Typography variant="body1" paragraph>
          <ul>
            <li>
              <code>map()</code> is used to transform each element and return a
              new array.
            </li>
            <li>
              <code>filter()</code> is used to remove elements that don’t meet a
              condition.
            </li>
            <li>
              <code>reduce()</code> is used to boil an array down to a single
              value.
            </li>
          </ul>
          These methods encourage a functional approach and are often preferred
          over traditional loops in modern JavaScript applications.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the difference between forEach and map?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🔍 Difference Between <code>forEach</code> and <code>map</code> in
          JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          Both <code>forEach</code> and <code>map</code> are array methods used
          to iterate over elements, but they serve different purposes and have
          distinct behaviors.
        </Typography>

        {/* forEach */}
        <Typography variant="h5" gutterBottom>
          🔁 <code>forEach()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          The <code>forEach()</code> method executes a provided function once
          for each array element. It does not return a new array and is
          typically used for side effects such as logging, modifying external
          variables, or triggering DOM updates.
        </Typography>

        <Typography variant="subtitle1">✅ Syntax:</Typography>
        <CodeBlock
          code={`array.forEach((element, index, array) => {
// side effect code here
});`}
        />

        <Typography variant="subtitle1">✅ Example:</Typography>
        <CodeBlock
          code={`const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => {
console.log(name.toUpperCase());
});
// Output:
// ALICE
// BOB
// CHARLIE`}
        />

        {/* map */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          🔁 <code>map()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          The <code>map()</code> method creates a new array by applying a
          transformation function to each element. It is **pure** and **does not
          mutate** the original array.
        </Typography>

        <Typography variant="subtitle1">✅ Syntax:</Typography>
        <CodeBlock
          code={`const newArray = array.map((element, index, array) => {
return transformedElement;
});`}
        />

        <Typography variant="subtitle1">✅ Example:</Typography>
        <CodeBlock
          code={`const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]`}
        />

        {/* Comparison Table */}
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          📊 Comparison Table
        </Typography>
        <Box sx={{ mt: 2 }}>
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              textAlign: "left",
            }}
          >
            <thead>
              <tr>
                <th style={{ borderBottom: "2px solid #ccc", padding: "8px" }}>
                  Feature
                </th>
                <th style={{ borderBottom: "2px solid #ccc", padding: "8px" }}>
                  forEach
                </th>
                <th style={{ borderBottom: "2px solid #ccc", padding: "8px" }}>
                  map
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "8px" }}>Purpose</td>
                <td style={{ padding: "8px" }}>Execute side-effects</td>
                <td style={{ padding: "8px" }}>Transform data</td>
              </tr>
              <tr>
                <td style={{ padding: "8px" }}>Returns</td>
                <td style={{ padding: "8px" }}>undefined</td>
                <td style={{ padding: "8px" }}>New array</td>
              </tr>
              <tr>
                <td style={{ padding: "8px" }}>Chainable</td>
                <td style={{ padding: "8px" }}>❌ No</td>
                <td style={{ padding: "8px" }}>✅ Yes</td>
              </tr>
              <tr>
                <td style={{ padding: "8px" }}>Use Case</td>
                <td style={{ padding: "8px" }}>Logging, mutations</td>
                <td style={{ padding: "8px" }}>Data transformations</td>
              </tr>
            </tbody>
          </table>
        </Box>

        {/* Summary */}
        <Typography variant="h6" sx={{ mt: 4 }}>
          🧠 Summary
        </Typography>
        <Typography variant="body1">
          Use <code>forEach</code> when you want to **perform actions** for each
          element without expecting a result (like console logging or DOM
          updates). Use <code>map</code> when you want to **transform the array
          and create a new one** without modifying the original.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is array destructuring?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          📦 What is Array Destructuring in JavaScript?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Array destructuring</strong> is a feature in JavaScript that
          allows you to extract values from arrays and assign them to variables
          in a single, elegant statement. It's part of the ES6 (ECMAScript 2015)
          syntax and is widely used for cleaner and more readable code.
        </Typography>

        <Typography variant="h5" gutterBottom>
          ✨ Basic Syntax
        </Typography>
        <CodeBlock
          code={`const [first, second] = [10, 20];
console.log(first);  // 10
console.log(second); // 20`}
        />

        <Typography variant="h5" gutterBottom>
          📌 Skipping Items
        </Typography>
        <Typography variant="body1" paragraph>
          You can skip unwanted elements in the array using a comma:
        </Typography>
        <CodeBlock
          code={`const [a, , b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 3`}
        />

        <Typography variant="h5" gutterBottom>
          🧪 Swapping Variables
        </Typography>
        <Typography variant="body1" paragraph>
          Array destructuring is often used to swap the values of two variables
          without needing a temporary variable:
        </Typography>
        <CodeBlock
          code={`let x = 5, y = 10;
[x, y] = [y, x];
console.log(x); // 10
console.log(y); // 5`}
        />

        <Typography variant="h5" gutterBottom>
          🧵 Rest Operator
        </Typography>
        <Typography variant="body1" paragraph>
          You can collect the remaining items in the array using the rest
          operator (<code>...</code>):
        </Typography>
        <CodeBlock
          code={`const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]`}
        />

        <Typography variant="h5" gutterBottom>
          🧯 Default Values
        </Typography>
        <Typography variant="body1" paragraph>
          If the array has fewer elements than expected, you can assign default
          values:
        </Typography>
        <CodeBlock
          code={`const [name = 'Anonymous', age = 30] = ['John'];
console.log(name); // John
console.log(age);  // 30`}
        />

        <Typography variant="h5" gutterBottom>
          🧠 Destructuring in Function Parameters
        </Typography>
        <Typography variant="body1" paragraph>
          You can destructure an array that's passed as a function argument:
        </Typography>
        <CodeBlock
          code={`function greet([firstName, lastName]) {
console.log(\`Hello, \${firstName} \${lastName}!\`);
}

greet(['Jane', 'Doe']); // Hello, Jane Doe!`}
        />

        <Typography variant="h6" gutterBottom>
          ✅ Summary
        </Typography>
        <Typography variant="body1" paragraph>
          Array destructuring simplifies your code when you need to extract
          values from an array. It's especially useful in functional
          programming, React hooks, and modern JavaScript practices.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How can you clone an array?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🔁 How to Clone an Array in JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          In JavaScript, cloning an array means creating a new array with the
          same elements as the original — without referencing the same memory
          location. If you don’t clone it properly, modifying one will affect
          the other.
        </Typography>

        <Typography variant="h5" gutterBottom>
          1️⃣ Using the Spread Operator (<code>...</code>)
        </Typography>
        <Typography variant="body1" paragraph>
          This is the most common and modern way to clone arrays.
        </Typography>
        <CodeBlock
          code={`const original = [1, 2, 3];
const clone = [...original];

console.log(clone); // [1, 2, 3]
console.log(clone === original); // false (different references)`}
        />

        <Typography variant="h5" gutterBottom>
          2️⃣ Using <code>Array.prototype.slice()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          The <code>slice()</code> method returns a shallow copy of a portion of
          an array.
        </Typography>
        <CodeBlock
          code={`const original = [1, 2, 3];
const clone = original.slice();

console.log(clone); // [1, 2, 3]
console.log(clone === original); // false`}
        />

        <Typography variant="h5" gutterBottom>
          3️⃣ Using <code>Array.from()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          Creates a new array from an array-like or iterable object.
        </Typography>
        <CodeBlock
          code={`const original = [1, 2, 3];
const clone = Array.from(original);

console.log(clone); // [1, 2, 3]
console.log(clone === original); // false`}
        />

        <Typography variant="h5" gutterBottom>
          4️⃣ Using <code>concat()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          Concatenating an empty array effectively clones it.
        </Typography>
        <CodeBlock
          code={`const original = [1, 2, 3];
const clone = [].concat(original);

console.log(clone); // [1, 2, 3]
console.log(clone === original); // false`}
        />

        <Typography variant="h5" gutterBottom>
          ⚠️ Cloning Nested Arrays (Deep Cloning)
        </Typography>
        <Typography variant="body1" paragraph>
          All the above methods only perform **shallow cloning**. For nested
          arrays, the inner arrays will still be referenced.
        </Typography>
        <CodeBlock
          code={`const original = [1, [2, 3]];
const shallowClone = [...original];

shallowClone[1][0] = 99;
console.log(original); // [1, [99, 3]] — oops!`}
        />

        <Typography variant="body1" paragraph>
          To deeply clone an array (if it contains nested arrays or objects),
          use structured cloning or serialization:
        </Typography>
        <CodeBlock
          code={`const deepClone = JSON.parse(JSON.stringify(original));`}
        />

        <Typography variant="h6" gutterBottom>
          ✅ Summary
        </Typography>
        <Typography variant="body1">
          Choose cloning methods based on your array’s structure:
          <ul>
            <li>
              Use <code>[...arr]</code> or <code>arr.slice()</code> for shallow
              clones
            </li>
            <li>
              Use <code>JSON.parse(JSON.stringify(arr))</code> for deep clones
            </li>
            <li>
              Consider third-party libraries like Lodash for complex cloning
              scenarios
            </li>
          </ul>
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are all the operations of array?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🔧 All Major Operations of Arrays in JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          Arrays in JavaScript are dynamic and come with a wide variety of
          built-in methods and operations. Below is a categorized overview of
          key array operations, along with code examples.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5">🔹 1. Create an Array</Typography>
        <CodeBlock
          code={`const arr = [1, 2, 3];
const fruits = new Array("apple", "banana");`}
        />

        <Typography variant="h5" sx={{ mt: 3 }}>
          🔹 2. Access Elements
        </Typography>
        <CodeBlock
          code={`const arr = [10, 20, 30];
console.log(arr[0]); // 10`}
        />

        <Typography variant="h5" sx={{ mt: 3 }}>
          🔹 3. Add/Remove Elements
        </Typography>
        <CodeBlock
          code={`const arr = [1, 2, 3];

arr.push(4);       // Add at end
arr.pop();         // Remove from end
arr.unshift(0);    // Add at beginning
arr.shift();       // Remove from beginning`}
        />

        <Typography variant="h5" sx={{ mt: 3 }}>
          🔹 4. Iterate Over Arrays
        </Typography>
        <CodeBlock code={`arr.forEach((val) => console.log(val));`} />

        <Typography variant="h5" sx={{ mt: 3 }}>
          🔹 5. Transform Arrays
        </Typography>
        <CodeBlock
          code={`const doubled = arr.map(num => num * 2);
const evens = arr.filter(num => num % 2 === 0);`}
        />

        <Typography variant="h5" sx={{ mt: 3 }}>
          🔹 6. Reduce Arrays
        </Typography>
        <CodeBlock
          code={`const sum = arr.reduce((acc, curr) => acc + curr, 0);`}
        />

        <Typography variant="h5" sx={{ mt: 3 }}>
          🔹 7. Find Elements
        </Typography>
        <CodeBlock
          code={`const index = arr.indexOf(2);
const found = arr.find(num => num > 2);`}
        />

        <Typography variant="h5" sx={{ mt: 3 }}>
          🔹 8. Check Existence
        </Typography>
        <CodeBlock code={`arr.includes(3);  // true`} />

        <Typography variant="h5" sx={{ mt: 3 }}>
          🔹 9. Sort and Reverse
        </Typography>
        <CodeBlock
          code={`arr.sort((a, b) => a - b);
arr.reverse();`}
        />

        <Typography variant="h5" sx={{ mt: 3 }}>
          🔹 10. Combine or Clone
        </Typography>
        <CodeBlock
          code={`const clone = [...arr];
const combined = arr.concat([4, 5]);`}
        />

        <Typography variant="h5" sx={{ mt: 3 }}>
          🔹 11. Slice and Splice
        </Typography>
        <CodeBlock
          code={`const sliced = arr.slice(1, 3); // does not modify original
arr.splice(1, 1);   // modifies original array`}
        />

        <Typography variant="h5" sx={{ mt: 3 }}>
          🔹 12. Length & Fill
        </Typography>
        <CodeBlock
          code={`arr.length; // Get length
arr.fill(0); // Fill all elements with 0`}
        />

        <Typography variant="h5" sx={{ mt: 3 }}>
          🔹 13. Convert to String
        </Typography>
        <CodeBlock
          code={`arr.join(", "); // '1, 2, 3'
arr.toString();    // '1,2,3'`}
        />

        <Typography variant="h5" sx={{ mt: 3 }}>
          🔹 14. Flatten Nested Arrays
        </Typography>
        <CodeBlock
          code={`const nested = [1, [2, 3], [4, [5]]];
const flat = nested.flat(2); // [1, 2, 3, 4, 5]`}
        />

        <Typography variant="h5" sx={{ mt: 3 }}>
          🔹 15. Check Types
        </Typography>
        <CodeBlock code={`Array.isArray(arr); // true`} />

        <Typography variant="h6" sx={{ mt: 4 }}>
          ✅ Summary
        </Typography>
        <Typography variant="body1">
          Arrays are powerful and come packed with built-in methods for:
          <ul>
            <li>CRUD operations</li>
            <li>Searching and filtering</li>
            <li>Sorting and transforming</li>
            <li>Type-checking and string conversion</li>
          </ul>
          Mastering array operations is fundamental to writing efficient and
          readable JavaScript.
        </Typography>
      </Box>
    ),
  },
];
