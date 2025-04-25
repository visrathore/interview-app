import { Box, Divider, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const MEMORY_PERFORMANCE_DATA = [
  {
    heading: "What is memory leak in JavaScript?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧠 What is a Memory Leak in JavaScript?
        </Typography>

        <Typography paragraph>
          A <strong>memory leak</strong> in JavaScript occurs when the
          application retains memory that is no longer needed, preventing the
          garbage collector from reclaiming it. Over time, this can lead to
          degraded performance and even application crashes.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ How JavaScript Manages Memory
        </Typography>

        <Typography paragraph>
          JavaScript uses automatic <strong>garbage collection</strong>. When no
          references to an object remain, it becomes eligible for cleanup. But
          if references are mistakenly retained, the garbage collector can't
          free up that memory — causing a memory leak.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚩 Common Causes of Memory Leaks
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          1. **Global Variables**
        </Typography>
        <Typography paragraph>
          Unintentionally attaching variables to the global scope keeps them in
          memory for the life of the app.
        </Typography>
        <CodeBlock
          code={`// ❌ Leaks memory: 'leak' lives forever
function leakMemory() {
leak = "I am global"; // missing 'let', 'const', or 'var'
}`}
        />

        <Typography variant="subtitle1" gutterBottom>
          2. **Closures Holding References**
        </Typography>
        <Typography paragraph>
          If a closure captures variables that are no longer needed, it keeps
          them alive in memory.
        </Typography>
        <CodeBlock
          code={`function leakyClosure() {
const largeData = new Array(1000000).fill("leak");
return function() {
  console.log(largeData[0]); // keeps largeData in memory
};
}

const leak = leakyClosure();`}
        />

        <Typography variant="subtitle1" gutterBottom>
          3. **Detached DOM Nodes**
        </Typography>
        <Typography paragraph>
          Removing DOM elements without cleaning up their references in
          JavaScript can leak memory.
        </Typography>
        <CodeBlock
          code={`let node = document.getElementById("myDiv");

function removeNode() {
document.body.removeChild(node); // node is removed
// ❌ But still referenced here:
console.log(node); // memory not freed
}`}
        />

        <Typography variant="subtitle1" gutterBottom>
          4. **Timers and Intervals**
        </Typography>
        <Typography paragraph>
          Forgetting to clear <code>setInterval</code> or{" "}
          <code>setTimeout</code> leads to memory not being released.
        </Typography>
        <CodeBlock
          code={`// ❌ setInterval keeps handler and context in memory
setInterval(() => {
console.log("Leaking...");
}, 1000);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ How to Prevent Memory Leaks
        </Typography>
        <ul>
          <li>
            Always declare variables with <code>let</code>, <code>const</code>,
            or <code>var</code>.
          </li>
          <li>Remove event listeners when no longer needed.</li>
          <li>
            Clear timeouts and intervals using <code>clearTimeout</code> and{" "}
            <code>clearInterval</code>.
          </li>
          <li>Avoid holding long-lived references to unused data.</li>
          <li>
            Use tools like Chrome DevTools' Memory tab to analyze memory usage
            and detect leaks.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Detecting Memory Leaks
        </Typography>
        <Typography paragraph>
          Use the <strong>Chrome DevTools</strong>:
        </Typography>
        <ul>
          <li>
            Open DevTools → <strong>Memory</strong> tab
          </li>
          <li>Take heap snapshots and compare them</li>
          <li>Look for detached DOM trees or growing memory usage</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={2}>
          Pro Tip: Using weak references like <code>WeakMap</code> and{" "}
          <code>WeakSet</code> can help prevent memory leaks when managing
          dynamic objects.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is garbage collection?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧹 What is Garbage Collection in JavaScript?
        </Typography>

        <Typography paragraph>
          <strong>Garbage Collection (GC)</strong> in JavaScript is an automatic
          process that identifies and frees up memory that is no longer in use
          by the program. It ensures that the memory is not wasted and helps
          prevent memory leaks. JavaScript’s memory management is handled by the
          JavaScript engine, which automatically allocates and frees memory when
          it is no longer required.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ How Garbage Collection Works in JavaScript
        </Typography>

        <Typography paragraph>
          JavaScript uses a <strong>mark-and-sweep</strong> algorithm for
          garbage collection. Here’s how it works:
        </Typography>
        <ul>
          <li>
            <strong>Marking:</strong> The garbage collector identifies objects
            that are still being used by the program (reachable objects).
          </li>
          <li>
            <strong>Sweeping:</strong> Objects that are no longer reachable
            (unused) are deleted to free up memory.
          </li>
        </ul>

        <Typography paragraph>
          The process runs automatically in the background, and developers do
          not need to manually manage memory in most cases. However,
          understanding GC can help developers write more efficient and
          performant code.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Reachability and Object References
        </Typography>
        <Typography paragraph>
          JavaScript uses a concept called <strong>reachability</strong> to
          determine whether an object is still in use or can be garbage
          collected. An object is considered reachable if it can be accessed
          from the root of the program (like global variables, function calls,
          etc.).
        </Typography>

        <Typography paragraph>For example:</Typography>
        <CodeBlock
          code={`// Object is reachable
let user = { name: "Alice", age: 30 };
let anotherReference = user; // 'user' and 'anotherReference' both point to the same object

// Object becomes unreachable
user = null; // Now the object is unreachable and can be garbage collected`}
        />

        <Typography paragraph>
          When <code>user</code> is set to <code>null</code>, the object it was
          pointing to becomes unreachable and is eligible for garbage
          collection.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 How Objects Become Unreachable
        </Typography>

        <Typography paragraph>
          Objects become unreachable in various ways:
        </Typography>
        <ul>
          <li>
            When the variable that references the object goes out of scope.
          </li>
          <li>
            When an object reference is explicitly set to <code>null</code> or{" "}
            <code>undefined</code>.
          </li>
          <li>
            When objects are removed from arrays or properties from objects.
          </li>
        </ul>

        <Typography paragraph>
          In these cases, the object becomes eligible for garbage collection.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 Example: Manual Memory Management vs Garbage Collection
        </Typography>
        <Typography paragraph>
          Let’s see an example of how the garbage collection process works in
          JavaScript:
        </Typography>
        <CodeBlock
          code={`// Object with references
function createUser() {
let user = { name: "Bob", age: 25 };
let reference = user;

// user object is still in use (reachable)
console.log(user); // accessible from the scope
}

// user object goes out of scope after function call
createUser(); // GC will clean up memory once no references remain`}
        />

        <Typography paragraph>
          In this example, once the function <code>createUser</code> finishes
          executing, the object <code>user</code> becomes unreachable because
          there are no references to it. The garbage collector will eventually
          clean up the memory used by this object.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Optimizing Memory Usage
        </Typography>
        <Typography paragraph>
          While garbage collection happens automatically, developers can
          optimize memory usage by:
        </Typography>
        <ul>
          <li>
            Removing references to unused objects manually by setting variables
            to <code>null</code> or <code>undefined</code>.
          </li>
          <li>
            Breaking circular references (when two objects reference each
            other). These can prevent GC from cleaning them up.
          </li>
          <li>
            Using <strong>WeakMap</strong> and <strong>WeakSet</strong> to store
            objects without preventing their garbage collection.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Example: WeakMap and Garbage Collection
        </Typography>
        <Typography paragraph>
          <code>WeakMap</code> allows you to store objects in a way that does
          not prevent them from being garbage collected, which is useful for
          managing dynamic data that should not interfere with memory
          management.
        </Typography>
        <CodeBlock
          code={`let weakMap = new WeakMap();

function createWeakUser() {
let user = { name: "Charlie" };
weakMap.set(user, "user data");

// 'user' is still reachable through the weakMap, but can be GC'd if there are no other references
}

// Once no references remain, 'user' will be garbage collected
createWeakUser();`}
        />

        <Typography paragraph>
          In this case, if <code>user</code> becomes unreachable, it can be
          garbage collected even though it is in a <code>WeakMap</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Monitoring Garbage Collection
        </Typography>
        <Typography paragraph>
          You can monitor memory usage and garbage collection using the{" "}
          <strong>Chrome DevTools Memory tab</strong>:
        </Typography>
        <ul>
          <li>Heap snapshots to analyze memory distribution.</li>
          <li>Allocations timeline to track memory usage over time.</li>
          <li>
            Check for detached DOM nodes, long-lived objects, or growing memory
            footprints.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={2}>
          Pro Tip: Remember that while JavaScript handles garbage collection
          automatically, understanding how it works can help you write more
          efficient code and prevent memory leaks.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is debouncing and throttling?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          ⚙️ Debouncing and Throttling in JavaScript
        </Typography>

        <Typography paragraph>
          <strong>Debouncing</strong> and <strong>Throttling</strong> are
          performance optimization techniques that help control the rate at
          which functions are executed, especially for events like window
          resizing, scrolling, input typing, etc.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" gutterBottom>
          ⏳ Debouncing
        </Typography>
        <Typography paragraph>
          Debouncing ensures that a function is only executed after a certain
          period of time has passed since it was last invoked. It's useful when
          you want to delay a function until the user stops triggering the
          event.
        </Typography>

        <CodeBlock
          code={`function debounce(fn, delay) {
let timer;
return function (...args) {
  clearTimeout(timer);
  timer = setTimeout(() => fn.apply(this, args), delay);
};
}

// Example usage
const handleInput = debounce(() => {
console.log("Debounced Input");
}, 300);

document.getElementById("search").addEventListener("input", handleInput);`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          ✅ Use case:
        </Typography>
        <Typography paragraph>
          Autocomplete search inputs, resize events, button clicks, etc.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" gutterBottom>
          ⚡ Throttling
        </Typography>
        <Typography paragraph>
          Throttling ensures a function is only called at most once in a
          specified time interval, regardless of how often the event is fired.
        </Typography>

        <CodeBlock
          code={`function throttle(fn, interval) {
let lastTime = 0;
return function (...args) {
  const now = Date.now();
  if (now - lastTime >= interval) {
    lastTime = now;
    fn.apply(this, args);
  }
};
}

// Example usage
const handleScroll = throttle(() => {
console.log("Throttled Scroll");
}, 200);

window.addEventListener("scroll", handleScroll);`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          ✅ Use case:
        </Typography>
        <Typography paragraph>
          Scroll events, window resizing, mouse movement tracking, etc.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Debounce vs Throttle Comparison
        </Typography>
        <ul>
          <li>
            <strong>Debounce:</strong> Waits for the event to stop before
            executing.
          </li>
          <li>
            <strong>Throttle:</strong> Executes at regular intervals during
            continuous events.
          </li>
        </ul>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          🧠 Summary
        </Typography>
        <ul>
          <li>Both prevent excessive function calls.</li>
          <li>
            <strong>Debounce</strong> is best for actions triggered by user
            input.
          </li>
          <li>
            <strong>Throttle</strong> is great for scroll and resize events.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "How can you optimize performance in JavaScript?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🚀 JavaScript Performance Optimization
        </Typography>

        <Typography paragraph>
          Optimizing performance in JavaScript is essential for creating
          responsive and fast web applications. It involves reducing execution
          time, memory usage, and rendering overhead by applying techniques
          across your code, DOM interactions, and data flow.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 1. Reduce DOM Access & Reflows
        </Typography>
        <Typography paragraph>
          Accessing or manipulating the DOM frequently is expensive. Use caching
          and batch DOM updates to minimize reflows and repaints.
        </Typography>
        <CodeBlock
          code={`// ❌ Inefficient
document.getElementById("box").style.width = "100px";
document.getElementById("box").style.height = "100px";

// ✅ Better
const box = document.getElementById("box");
box.style.width = "100px";
box.style.height = "100px";`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 2. Use Debouncing & Throttling
        </Typography>
        <Typography paragraph>
          These techniques control how often functions execute in response to
          continuous events like scroll, resize, and input.
        </Typography>
        <CodeBlock
          code={`// Debounce example
function debounce(fn, delay) {
let timer;
return function (...args) {
  clearTimeout(timer);
  timer = setTimeout(() => fn.apply(this, args), delay);
};
}

window.addEventListener("resize", debounce(() => {
console.log("Resize handled");
}, 300));`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ 3. Minimize Loops and Complex Calculations
        </Typography>
        <Typography paragraph>
          Avoid nested loops or expensive operations inside loops. Use efficient
          array methods.
        </Typography>
        <CodeBlock
          code={`// ❌ Bad
for (let i = 0; i < arr.length; i++) {
if (arr[i].age > 18) {
  eligible.push(arr[i]);
}
}

// ✅ Better
const eligible = arr.filter(person => person.age > 18);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 4. Memoization
        </Typography>
        <Typography paragraph>
          Cache results of expensive function calls to prevent repeated
          calculations.
        </Typography>
        <CodeBlock
          code={`function memoize(fn) {
const cache = {};
return function (key) {
  if (cache[key]) return cache[key];
  return (cache[key] = fn(key));
};
}

const slowFn = (n) => {
console.log("Processing...");
return n * n;
};

const fastFn = memoize(slowFn);
fastFn(4); // Logs: Processing...
fastFn(4); // Returns cached result`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧹 5. Avoid Memory Leaks
        </Typography>
        <Typography paragraph>
          Always remove event listeners and avoid global variables to reduce
          memory bloat.
        </Typography>
        <CodeBlock
          code={`// ❌ Event listener not removed
function init() {
window.addEventListener("scroll", handleScroll);
}

// ✅ Cleaned up
function init() {
const handleScroll = () => console.log("Scrolling...");
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⏳ 6. Lazy Loading
        </Typography>
        <Typography paragraph>
          Load code or assets only when required (on-demand), especially images,
          modules, or routes.
        </Typography>
        <CodeBlock
          code={`// React example
const LazyComponent = React.lazy(() => import("./MyComponent"));

<Suspense fallback={<div>Loading...</div>}>
<LazyComponent />
</Suspense>;`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✂️ 7. Code Splitting
        </Typography>
        <Typography paragraph>
          Split your bundle into smaller chunks so that only necessary code is
          loaded.
        </Typography>
        <CodeBlock
          code={`// With dynamic import
import("./module.js").then((module) => {
module.run();
});`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📊 8. Efficient Data Structures
        </Typography>
        <Typography paragraph>
          Use `Map`, `Set`, or other structures appropriately depending on your
          use case for better performance.
        </Typography>
        <CodeBlock
          code={`const userSet = new Set();
userSet.add("Alice");
userSet.has("Alice"); // true

const userMap = new Map();
userMap.set("id", 123);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚡ 9. Use Web Workers for Heavy Computations
        </Typography>
        <Typography paragraph>
          Offload CPU-intensive tasks to a separate thread to avoid UI blocking.
        </Typography>
        <CodeBlock
          code={`// main.js
const worker = new Worker("worker.js");
worker.postMessage("start");

worker.onmessage = function (e) {
console.log("Result from worker:", e.data);
}

// worker.js
onmessage = function (e) {
// heavy calculation
postMessage("done");
};`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Summary
        </Typography>
        <ul>
          <li>Cache repeated work (memoization, caching).</li>
          <li>Debounce and throttle expensive event handlers.</li>
          <li>Optimize loops and use array methods effectively.</li>
          <li>Minimize direct DOM manipulation and access.</li>
          <li>Lazy load assets and split your code.</li>
          <li>Use efficient data structures for large datasets.</li>
          <li>Use Web Workers to handle heavy tasks off the main thread.</li>
        </ul>
      </Box>
    ),
  },
];
