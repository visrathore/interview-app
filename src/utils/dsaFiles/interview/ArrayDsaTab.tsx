import { Box, Paper, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const ARRAY_DSA_DATA = [
  {
    heading: "Find the largest/smallest number in an array",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom>
          🔍 Finding the <code>Largest</code> and <code>Smallest</code> Numbers
          in an Array (Optimized Way)
        </Typography>

        {/* Overview */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧾 Overview
          </Typography>
          <Typography>
            When working with arrays, it's common to determine the smallest or
            largest number. JavaScript provides various methods, but using a
            loop ensures optimal performance for large datasets.
          </Typography>
        </Paper>

        {/* Find Largest */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🔼 Finding the Largest Number
          </Typography>
          <Typography>
            The logic is simple: traverse the array and keep updating the
            maximum when a larger number is found.
          </Typography>
          <CodeBlock
            code={`function findLargest(arr) {
if (arr.length === 0) return undefined;

// Initialize max with the first element
let max = arr[0];

// Loop through the array starting from second element
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]; // Update max if current element is greater
  }
}

return max;
}

// Example:
console.log(findLargest([3, 7, 2, 9, 4])); // Output: 9`}
          />
        </Paper>

        {/* Find Smallest */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🔽 Finding the Smallest Number
          </Typography>
          <Typography>
            The logic mirrors the largest number approach, just comparing for
            smaller values instead.
          </Typography>
          <CodeBlock
            code={`function findSmallest(arr) {
if (arr.length === 0) return undefined;

// Initialize min with the first element
let min = arr[0];

// Traverse array to find the smallest element
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i]; // Update min if current is smaller
  }
}

return min;
}

// Example:
console.log(findSmallest([3, 7, 2, 9, 4])); // Output: 2`}
          />
        </Paper>

        {/* Using Math Methods */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            ⚡ Using Built-in <code>Math.max</code> and <code>Math.min</code>
          </Typography>
          <Typography>
            For small or medium-sized arrays, JavaScript offers an elegant
            one-liner using spread syntax.
          </Typography>
          <CodeBlock
            code={`const arr = [3, 7, 2, 9, 4];

// Fast and readable for small arrays
const max = Math.max(...arr);
const min = Math.min(...arr);

console.log(max); // 9
console.log(min); // 2`}
          />
        </Paper>

        {/* Performance Comparison */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            ⚙️ Performance Considerations
          </Typography>
          <Typography>
            While <code>Math.max(...arr)</code> is concise, it's not memory
            efficient for very large arrays due to spread operator overhead. Use
            the loop-based approach for large datasets or real-time systems.
          </Typography>
        </Paper>

        {/* Best Practices */}
        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            ✅ Best Practices
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              Use loop-based method for better performance on large arrays.
            </li>
            <li>
              For cleaner code with small arrays, spread with{" "}
              <code>Math.max</code>/<code>Math.min</code> is fine.
            </li>
            <li>Always handle empty arrays to prevent unexpected results.</li>
          </Box>
        </Box>

        {/* Summary */}
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📘 Summary
          </Typography>
          <Typography>
            To find the largest and smallest numbers in an array, you can either
            use a loop (efficient for large datasets) or JavaScript's built-in
            <code>Math.max</code> and <code>Math.min</code> methods for quick,
            readable code. Always check for edge cases like empty arrays.
          </Typography>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "Check if an array contains a specific value",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom>
          🔎 Checking if an <code>Array</code> Contains a Specific Value
        </Typography>

        {/* Overview */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧾 Overview
          </Typography>
          <Typography>
            One of the most common tasks in JavaScript is determining whether an
            array includes a specific element. JavaScript offers several
            efficient ways to handle this depending on the use case, array size,
            and data type.
          </Typography>
        </Paper>

        {/* Method 1: Using includes() */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            ✅ <code>Array.includes()</code> (ES6+)
          </Typography>
          <Typography>
            The <code>includes()</code> method is the most concise and readable
            way to check for a value in an array.
          </Typography>
          <CodeBlock
            code={`const fruits = ["apple", "banana", "cherry"];

// Check if 'banana' is in the array
const hasBanana = fruits.includes("banana");

console.log(hasBanana); // true`}
          />
          <Typography sx={{ mt: 2 }}>
            ✅ Clean, readable, and perfect for most use cases. Works with
            primitives and case-sensitive strings.
          </Typography>
        </Paper>

        {/* Method 2: Using indexOf() */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🔢 <code>Array.indexOf()</code>
          </Typography>
          <Typography>
            Before <code>includes()</code>, developers used{" "}
            <code>indexOf()</code>. It returns the index if found, or{" "}
            <code>-1</code>.
          </Typography>
          <CodeBlock
            code={`const colors = ["red", "green", "blue"];

// Check if 'green' is present
const found = colors.indexOf("green") !== -1;

console.log(found); // true`}
          />
          <Typography sx={{ mt: 2 }}>
            🔄 Slightly more verbose than <code>includes()</code>, but fully
            supported in older environments.
          </Typography>
        </Paper>

        {/* Method 3: Using a loop (optimized for large datasets or early exit) */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            ⚙️ Using a <code>for</code> loop (Manual Search)
          </Typography>
          <Typography>
            Ideal for very large arrays where performance and early exit are
            critical. Stops as soon as a match is found.
          </Typography>
          <CodeBlock
            code={`function containsValue(arr, target) {
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    return true; // Exit early if found
  }
}
return false; // Value not found
}

// Example usage:
console.log(containsValue([1, 2, 3, 4], 3)); // true`}
          />
          <Typography sx={{ mt: 2 }}>
            🚀 Very performant for large datasets — minimal memory usage and
            early exit.
          </Typography>
        </Paper>

        {/* Method 4: Using some() for complex conditions */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧠 <code>Array.some()</code> (Flexible for conditions)
          </Typography>
          <Typography>
            Use <code>some()</code> if you need to check for existence based on
            a condition or when dealing with complex data structures.
          </Typography>
          <CodeBlock
            code={`const users = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" }
];

// Check if a user with id === 2 exists
const hasUser = users.some(user => user.id === 2);

console.log(hasUser); // true`}
          />
          <Typography sx={{ mt: 2 }}>
            🔍 Best choice for arrays of objects or conditional checks.
          </Typography>
        </Paper>

        {/* Best Practices */}
        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            💡 Best Practices
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              Prefer <code>includes()</code> for readability and simplicity with
              primitive values.
            </li>
            <li>
              Use <code>some()</code> for more complex checks or custom
              conditions.
            </li>
            <li>
              Consider a <code>for</code> loop for very large datasets or when
              performance is critical.
            </li>
            <li>
              Avoid <code>indexOf()</code> in modern code unless supporting old
              environments.
            </li>
          </Box>
        </Box>

        {/* Summary */}
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📘 Summary
          </Typography>
          <Typography>
            JavaScript provides multiple ways to check if an array contains a
            value: from the elegant <code>includes()</code> to the flexible{" "}
            <code>some()</code> and performant <code>for</code> loop. Choose the
            method that best fits your use case, keeping in mind readability,
            support, and performance.
          </Typography>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "Remove duplicates from an array",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom>
          🔁 Removing Duplicates from an <code>Array</code> in JavaScript
        </Typography>

        {/* Overview */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧾 Overview
          </Typography>
          <Typography>
            Removing duplicates is a fundamental task when dealing with array
            data. Whether working with primitives or objects, choosing the right
            method matters for performance and clarity.
          </Typography>
        </Paper>

        {/* Manual Method: for loop */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            ✍️ Manual Way Using <code>for</code> Loop
          </Typography>
          <Typography>
            This method manually checks for duplicates using an intermediate
            array.
          </Typography>
          <CodeBlock
            code={`const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [];

for (let i = 0; i < numbers.length; i++) {
  if (!unique.includes(numbers[i])) {
    unique.push(numbers[i]);
  }
}

console.log(unique); // [1, 2, 3, 4, 5]`}
          />
          <Typography sx={{ mt: 2 }}>
            🕒 Time Complexity: <strong>O(n²)</strong> (due to{" "}
            <code>includes()</code> in loop)
          </Typography>
          <Typography>
            🧠 Space Complexity: <strong>O(n)</strong>
          </Typography>
        </Paper>

        {/* Using Set */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🪄 <code>Set</code> (ES6+)
          </Typography>
          <Typography>
            A fast and elegant solution using the Set object to retain unique
            values.
          </Typography>
          <CodeBlock
            code={`const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]`}
          />
          <Typography sx={{ mt: 2 }}>
            🕒 Time Complexity: <strong>O(n)</strong>
          </Typography>
          <Typography>
            🧠 Space Complexity: <strong>O(n)</strong>
          </Typography>
        </Paper>

        {/* filter + indexOf */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧠 Using <code>filter()</code> + <code>indexOf()</code>
          </Typography>
          <Typography>
            Classic method that only keeps the first occurrence of each item.
          </Typography>
          <CodeBlock
            code={`const names = ["Alice", "Bob", "Alice", "Eve"];
const uniqueNames = names.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueNames); // ['Alice', 'Bob', 'Eve']`}
          />
          <Typography sx={{ mt: 2 }}>
            🕒 Time Complexity: <strong>O(n²)</strong>
          </Typography>
          <Typography>
            🧠 Space Complexity: <strong>O(n)</strong>
          </Typography>
        </Paper>

        {/* reduce method */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            ⚙️ Using <code>reduce()</code>
          </Typography>
          <Typography>
            Offers flexibility to combine logic with duplicate removal.
          </Typography>
          <CodeBlock
            code={`const items = [1, 2, 2, 3, 4, 3];
const uniqueItems = items.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(uniqueItems); // [1, 2, 3, 4]`}
          />
          <Typography sx={{ mt: 2 }}>
            🕒 Time Complexity: <strong>O(n²)</strong>
          </Typography>
          <Typography>
            🧠 Space Complexity: <strong>O(n)</strong>
          </Typography>
        </Paper>

        {/* Unique objects by key */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧱 Unique Objects by Key (e.g., <code>id</code>)
          </Typography>
          <Typography>
            De-duplicate array of objects using a <code>Set</code> and key
            tracking.
          </Typography>
          <CodeBlock
            code={`const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" }
];

const seen = new Set();
const uniqueUsers = users.filter(user => {
  if (seen.has(user.id)) return false;
  seen.add(user.id);
  return true;
});

console.log(uniqueUsers); 
// [ { id: 1, name: "Alice" }, { id: 2, name: "Bob" } ]`}
          />
          <Typography sx={{ mt: 2 }}>
            🕒 Time Complexity: <strong>O(n)</strong>
          </Typography>
          <Typography>
            🧠 Space Complexity: <strong>O(n)</strong>
          </Typography>
        </Paper>

        {/* Best Practices */}
        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            💡 Best Practices
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              Use <code>Set</code> for clean, fast removal of primitive
              duplicates.
            </li>
            <li>
              Use <code>for</code> loop for full manual control (but less
              efficient).
            </li>
            <li>
              Use <code>filter()</code> + <code>indexOf()</code> when
              compatibility is needed.
            </li>
            <li>
              Use <code>reduce()</code> if combining operations like
              transformation.
            </li>
            <li>
              Track keys via <code>Set</code> when de-duplicating objects.
            </li>
          </Box>
        </Box>

        {/* Summary */}
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📘 Summary
          </Typography>
          <Typography>
            There are multiple ways to remove duplicates in JavaScript. The best
            method depends on your data type (primitive or object), performance
            needs, and desired readability. ES6 methods like <code>Set</code>{" "}
            offer both performance and elegance.
          </Typography>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "Reverse an array without using built-in methods",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom>
          🔄 Reverse an <code>Array</code> Without Using Built-in Methods
        </Typography>

        {/* Overview */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧾 Overview
          </Typography>
          <Typography>
            Reversing an array without built-in methods like{" "}
            <code>reverse()</code> helps understand how array indexing and
            memory swapping work under the hood. Below we walk through an
            optimized and readable approach using a simple loop.
          </Typography>
        </Paper>

        {/* Manual Reversal: New Array */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🛠️ Create a Reversed Copy (Not In-Place)
          </Typography>
          <Typography>
            This method creates a **new array** and pushes elements from the end
            of the original.
          </Typography>
          <CodeBlock
            code={`const original = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = original.length - 1; i >= 0; i--) {
reversed.push(original[i]);
}

console.log(reversed); // [5, 4, 3, 2, 1]`}
          />
          <Typography sx={{ mt: 2 }}>
            🕒 Time Complexity: <strong>O(n)</strong>
          </Typography>
          <Typography>
            🧠 Space Complexity: <strong>O(n)</strong> (due to new array)
          </Typography>
        </Paper>

        {/* Optimized In-Place Reversal */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            ⚡ Optimized In-Place Reversal Using Two Pointers
          </Typography>
          <Typography>
            In-place means modifying the original array without using extra
            space. We use two pointers — one from the start and one from the end
            — and swap values.
          </Typography>
          <CodeBlock
            code={`const arr = [10, 20, 30, 40, 50];

let left = 0;
let right = arr.length - 1;

while (left < right) {
// Swap elements
const temp = arr[left];
arr[left] = arr[right];
arr[right] = temp;

left++;
right--;
}

console.log(arr); // [50, 40, 30, 20, 10]`}
          />
          <Typography sx={{ mt: 2 }}>
            🕒 Time Complexity: <strong>O(n)</strong>
          </Typography>
          <Typography>
            🧠 Space Complexity: <strong>O(1)</strong> (in-place, constant
            space)
          </Typography>
        </Paper>

        {/* Extra: Reversal with for loop */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🔁 Reversal Using a <code>for</code> Loop (Manual Indexing)
          </Typography>
          <Typography>
            Same logic as above but with a traditional <code>for</code> loop for
            better control.
          </Typography>
          <CodeBlock
            code={`const array = [1, 2, 3, 4, 5];
const length = array.length;

for (let i = 0; i < Math.floor(length / 2); i++) {
const opposite = length - 1 - i;
const temp = array[i];
array[i] = array[opposite];
array[opposite] = temp;
}

console.log(array); // [5, 4, 3, 2, 1]`}
          />
          <Typography sx={{ mt: 2 }}>
            🕒 Time Complexity: <strong>O(n)</strong>
          </Typography>
          <Typography>
            🧠 Space Complexity: <strong>O(1)</strong>
          </Typography>
        </Paper>

        {/* Best Practices */}
        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            💡 Best Practices
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              Use <strong>in-place method</strong> when memory usage matters.
            </li>
            <li>
              Use <strong>copy method</strong> when original array must remain
              unchanged.
            </li>
            <li>Understand pointer logic to master array manipulation.</li>
          </Box>
        </Box>

        {/* Summary */}
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📘 Summary
          </Typography>
          <Typography>
            Reversing arrays without built-ins is a great exercise in
            algorithmic thinking. The in-place method offers the best
            performance with O(n) time and O(1) space. These foundational
            techniques are especially useful in interviews and low-level
            optimization tasks.
          </Typography>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "Flatten a nested array",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom>
          🧩 Flattening a <code>Nested Array</code> in JavaScript
        </Typography>

        {/* Overview */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧾 Overview
          </Typography>
          <Typography>
            A nested array contains sub-arrays within it. Flattening means
            converting it into a single-level array with all values, regardless
            of nesting depth. We'll explore optimized methods **without using
            built-in `.flat()`**.
          </Typography>
        </Paper>

        {/* Recursive Solution */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🔁 Recursive Method (Depth-First)
          </Typography>
          <Typography>
            This approach recursively walks through each element, adding
            non-arrays to the result and diving into sub-arrays.
          </Typography>
          <CodeBlock
            code={`function flattenRecursive(arr) {
const result = [];

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];

  // If it's an array, recurse into it
  if (Array.isArray(item)) {
    const flatSubArray = flattenRecursive(item); // recursion
    result.push(...flatSubArray); // merge
  } else {
    result.push(item); // base case
  }
}

return result;
}

const nested = [1, [2, [3, 4], 5], 6];
console.log(flattenRecursive(nested)); // [1, 2, 3, 4, 5, 6]`}
          />
          <Typography sx={{ mt: 2 }}>
            🕒 Time Complexity: <strong>O(n)</strong> — visits every element
            once
          </Typography>
          <Typography>
            🧠 Space Complexity: <strong>O(d + n)</strong> — where{" "}
            <code>d</code> is depth (stack space), and <code>n</code> is total
            elements
          </Typography>
        </Paper>

        {/* Iterative with Stack */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            📦 Iterative Approach Using Stack
          </Typography>
          <Typography>
            This uses a stack to simulate recursion manually and allows you to
            flatten deeply nested arrays **without recursion** (safer for deeply
            nested structures).
          </Typography>
          <CodeBlock
            code={`function flattenIterative(arr) {
const stack = [...arr];
const result = [];

while (stack.length > 0) {
  const current = stack.pop();

  if (Array.isArray(current)) {
    stack.push(...current); // spread children into the stack
  } else {
    result.unshift(current); // preserve order
  }
}

return result;
}

const nested = [1, [2, [3, 4], 5], 6];
console.log(flattenIterative(nested)); // [1, 2, 3, 4, 5, 6]`}
          />
          <Typography sx={{ mt: 2 }}>
            🕒 Time Complexity: <strong>O(n)</strong>
          </Typography>
          <Typography>
            🧠 Space Complexity: <strong>O(n)</strong> — stack grows with nested
            elements
          </Typography>
        </Paper>

        {/* When to Use Which */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧠 Choosing Between Recursive & Iterative
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              Use <strong>recursive</strong> for readability and moderate
              nesting.
            </li>
            <li>
              Use <strong>iterative</strong> for performance and very deeply
              nested arrays (avoids stack overflow).
            </li>
          </Box>
        </Paper>

        {/* Visual Comparison */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📊 Recursive vs. Iterative Comparison
          </Typography>
          <Typography component="div">
            <Box
              component="table"
              sx={{ width: "100%", borderCollapse: "collapse", mt: 2 }}
            >
              <Box component="thead" sx={{ bgcolor: "#e0e0e0" }}>
                <Box component="tr">
                  <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Feature
                  </Box>
                  <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Recursive
                  </Box>
                  <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Iterative (Stack)
                  </Box>
                </Box>
              </Box>
              <Box component="tbody">
                <Box component="tr">
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Stack Overflow Risk
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ⚠️ Yes
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ✅ No
                  </Box>
                </Box>
                <Box component="tr">
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Readability
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ✅ Easy to read
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    😐 Moderate
                  </Box>
                </Box>
                <Box component="tr">
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Performance
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ✅ Fast
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ✅ Fast
                  </Box>
                </Box>
              </Box>
            </Box>
          </Typography>
        </Paper>

        {/* Best Practices */}
        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            ⚙️ Best Practices
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>Use recursion for clean and simple structures</li>
            <li>Use stack method for deeply nested or large data sets</li>
            <li>Avoid mutation — return new arrays</li>
            <li>Benchmark if performance matters in large structures</li>
          </Box>
        </Box>

        {/* Summary */}
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📘 Summary
          </Typography>
          <Typography>
            Flattening a nested array is a common task in data transformation.
            You can use a clean recursive solution or an iterative stack-based
            approach — both run in linear time. Avoid built-in methods when
            practicing algorithms to build fundamental JavaScript skills.
          </Typography>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "Find the sum of all elements in an array",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom>
          ➕ Finding the <code>Sum</code> of All Elements in an Array
        </Typography>

        {/* Overview */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧾 Overview
          </Typography>
          <Typography>
            Finding the sum of all elements in an array is a basic yet crucial
            task in programming. We'll implement this manually using a{" "}
            <code>for</code> loop, and also compare it with the built-in{" "}
            <code>reduce</code> method (for awareness).
          </Typography>
        </Paper>

        {/* Manual Sum using For Loop */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🔁 Sum Using <code>for</code> Loop
          </Typography>
          <Typography>
            This is the most efficient and explicit way to sum numbers in an
            array without using any built-in helper like <code>reduce</code>.
          </Typography>
          <CodeBlock
            code={`function sumArray(arr) {
let sum = 0; // Initialize sum accumulator

for (let i = 0; i < arr.length; i++) {
  sum += arr[i]; // Add each element to the sum
}

return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15`}
          />
          <Typography sx={{ mt: 2 }}>
            🕒 Time Complexity: <strong>O(n)</strong> — one pass through array
          </Typography>
          <Typography>
            🧠 Space Complexity: <strong>O(1)</strong> — no extra space used
          </Typography>
        </Paper>

        {/* Optional: Using reduce (FYI) */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            ⚙️ FYI: Sum Using <code>Array.prototype.reduce</code>
          </Typography>
          <Typography>
            This is a concise, modern approach — but internally it’s similar to
            a loop.
          </Typography>
          <CodeBlock
            code={`const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, val) => acc + val, 0);

console.log(sum); // Output: 15`}
          />
          <Typography sx={{ mt: 2 }}>
            ✅ Same time and space complexity as manual loop.
          </Typography>
        </Paper>

        {/* Comparison Table */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📊 Manual Loop vs. Reduce
          </Typography>
          <Typography component="div">
            <Box
              component="table"
              sx={{ width: "100%", borderCollapse: "collapse", mt: 2 }}
            >
              <Box component="thead" sx={{ bgcolor: "#e0e0e0" }}>
                <Box component="tr">
                  <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Feature
                  </Box>
                  <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                    For Loop
                  </Box>
                  <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Reduce
                  </Box>
                </Box>
              </Box>
              <Box component="tbody">
                <Box component="tr">
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Readability
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ✅ Explicit & clear
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ✅ Concise
                  </Box>
                </Box>
                <Box component="tr">
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Beginner-Friendly
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ✅ Very easy
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ❌ Needs understanding of callbacks
                  </Box>
                </Box>
                <Box component="tr">
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Performance
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ✅ Fast
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ✅ Fast
                  </Box>
                </Box>
              </Box>
            </Box>
          </Typography>
        </Paper>

        {/* Best Practices */}
        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            🛠 Best Practices
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              Use <code>for</code> loops for explicit logic & better control
            </li>
            <li>
              <code>reduce()</code> is great when you're familiar with
              higher-order functions
            </li>
            <li>
              Always initialize accumulators correctly (e.g. 0 for numbers)
            </li>
          </Box>
        </Box>

        {/* Summary */}
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📘 Summary
          </Typography>
          <Typography>
            Summing elements in an array is simple yet essential. A manual{" "}
            <code>for</code> loop is optimal for clarity and performance, while{" "}
            <code>reduce</code> offers a functional alternative. Both perform in{" "}
            <strong>O(n)</strong> time and use <strong>O(1)</strong> space.
          </Typography>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "Merge two sorted arrays",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom>
          🔗 Merging Two <code>Sorted</code> Arrays in JavaScript
        </Typography>

        {/* Overview */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧾 Overview
          </Typography>
          <Typography>
            Merging two **sorted** arrays efficiently is a common task in
            algorithms like <code>Merge Sort</code>. We'll cover how to do it
            manually using a <strong>two-pointer approach</strong>, which is the
            most optimal solution.
          </Typography>
        </Paper>

        {/* Manual Merge: Optimized Way */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧮 Manual Merge (Two-Pointer Approach)
          </Typography>
          <Typography>
            We'll loop through both arrays simultaneously, compare values, and
            push the smaller one into the result.
          </Typography>
          <CodeBlock
            code={`function mergeSortedArrays(arr1, arr2) {
let merged = [];
let i = 0, j = 0;

// Loop while both arrays still have elements
while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    merged.push(arr1[i]); // smaller goes in
    i++;
  } else {
    merged.push(arr2[j]);
    j++;
  }
}

// Push remaining elements if any
while (i < arr1.length) {
  merged.push(arr1[i]);
  i++;
}

while (j < arr2.length) {
  merged.push(arr2[j]);
  j++;
}

return merged;
}

// Example usage:
const a = [1, 3, 5, 7];
const b = [2, 4, 6, 8, 10];

console.log(mergeSortedArrays(a, b));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 10]`}
          />
          <Typography sx={{ mt: 2 }}>
            🕒 Time Complexity: <strong>O(n + m)</strong> (where <code>n</code>{" "}
            and <code>m</code> are lengths of arr1 & arr2)
          </Typography>
          <Typography>
            💾 Space Complexity: <strong>O(n + m)</strong> — new array with all
            elements
          </Typography>
        </Paper>

        {/* Optional Way Using Spread + Sort */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            ⚙️ Simpler But Slower: Using Spread + <code>sort()</code>
          </Typography>
          <Typography>
            This is easier to write but **not optimized** — especially if arrays
            are already sorted.
          </Typography>
          <CodeBlock
            code={`const a = [1, 3, 5, 7];
const b = [2, 4, 6, 8, 10];

const merged = [...a, ...b].sort((x, y) => x - y);

console.log(merged);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 10]`}
          />
          <Typography sx={{ mt: 2 }}>
            🕒 Time Complexity: <strong>O((n + m) log(n + m))</strong> due to
            sorting
          </Typography>
          <Typography>
            💾 Space Complexity: <strong>O(n + m)</strong> — spread creates new
            array
          </Typography>
        </Paper>

        {/* Comparison Table */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📊 Performance Comparison
          </Typography>
          <Typography component="div">
            <Box
              component="table"
              sx={{ width: "100%", borderCollapse: "collapse", mt: 2 }}
            >
              <Box component="thead" sx={{ bgcolor: "#e0e0e0" }}>
                <Box component="tr">
                  <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Method
                  </Box>
                  <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Time Complexity
                  </Box>
                  <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Space Complexity
                  </Box>
                  <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Best For
                  </Box>
                </Box>
              </Box>
              <Box component="tbody">
                <Box component="tr">
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Two-Pointer Merge
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    O(n + m)
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    O(n + m)
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ✅ Optimized merge of sorted arrays
                  </Box>
                </Box>
                <Box component="tr">
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Spread + Sort
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    O((n + m) log(n + m))
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    O(n + m)
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ❌ Unnecessary for already sorted data
                  </Box>
                </Box>
              </Box>
            </Box>
          </Typography>
        </Paper>

        {/* Best Practices */}
        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            🛠 Best Practices
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              Use the <strong>two-pointer</strong> approach when arrays are
              sorted
            </li>
            <li>
              Avoid <code>sort()</code> if you can leverage the input order
            </li>
            <li>
              Consider edge cases: empty arrays, one longer than the other
            </li>
          </Box>
        </Box>

        {/* Summary */}
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📘 Summary
          </Typography>
          <Typography>
            Merging sorted arrays can be done optimally with a linear scan using
            the <strong>two-pointer method</strong>. Avoid built-in sorting
            unless you absolutely need simplicity over performance. This pattern
            is widely used in merge sort and stream merging.
          </Typography>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "",
    content: <></>,
  },
  {
    heading: "",
    content: <></>,
  },
  {
    heading: "",
    content: <></>,
  },
];
