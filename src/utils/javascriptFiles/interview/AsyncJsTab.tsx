import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const ASYNC_JS_DATA = [
  {
    heading: "What are callbacks, promises, and async/await?",
    content: (
      <Box my={5}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Callbacks, Promises, and Async/Await in JavaScript
        </Typography>

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              1. Callback Functions
            </Typography>
            <Typography gutterBottom>
              A callback is a function passed as an argument to another
              function. It gets executed after the parent function completes.
            </Typography>

            <Chip label="Example" color="primary" sx={{ mb: 1 }} />
            <pre>
              {`function fetchData(callback) {
setTimeout(() => {
  callback('Data loaded');
}, 1000);
}

fetchData((message) => {
console.log(message);
});`}
            </pre>

            <Typography variant="caption" color="text.secondary">
              Callbacks can lead to callback hell if overused in nested
              scenarios.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              2. Promises
            </Typography>
            <Typography gutterBottom>
              Promises represent the eventual completion (or failure) of an
              asynchronous operation.
            </Typography>

            <Chip label="Example" color="primary" sx={{ mb: 1 }} />
            <pre>
              {`function fetchData() {
return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data loaded');
  }, 1000);
});
}

fetchData()
.then((message) => console.log(message))
.catch((error) => console.error(error));`}
            </pre>

            <Typography variant="caption" color="text.secondary">
              Promises help avoid nested callbacks and provide chaining via{" "}
              <code>.then()</code>.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              3. Async/Await
            </Typography>
            <Typography gutterBottom>
              Async/await is syntactic sugar over Promises that makes
              asynchronous code look synchronous.
            </Typography>

            <Chip label="Example" color="primary" sx={{ mb: 1 }} />
            <pre>
              {`async function loadData() {
try {
  const message = await fetchData();
  console.log(message);
} catch (error) {
  console.error(error);
}
}

loadData();`}
            </pre>

            <Typography variant="caption" color="text.secondary">
              Async/await makes the code cleaner and easier to read.
            </Typography>
          </CardContent>
        </Card>

        <Box mt={5}>
          <Divider />
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            mt={2}
          >
            Mastering these async patterns helps you handle real-world API calls
            and delays efficiently in JavaScript and React apps.
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    heading: "What is a promise and how do you use it?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📘 Understanding Promises in JavaScript
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ What is a Promise?
        </Typography>
        <Typography paragraph>
          A <strong>Promise</strong> is an object representing the eventual
          completion or failure of an asynchronous operation. It helps manage
          async code without deeply nested callbacks.
        </Typography>

        <Typography variant="h6" gutterBottom>
          📦 Promise States
        </Typography>
        <ul>
          <li>
            <strong>Pending</strong> – The operation is ongoing.
          </li>
          <li>
            <strong>Fulfilled</strong> – The operation completed successfully.
          </li>
          <li>
            <strong>Rejected</strong> – The operation failed.
          </li>
        </ul>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          🧠 Creating a Promise
        </Typography>
        <CodeBlock
          code={`const myPromise = new Promise((resolve, reject) => {
const success = true;

if (success) {
  resolve("It worked!");
} else {
  reject("It failed.");
}
});`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          💡 Consuming a Promise
        </Typography>
        <CodeBlock
          code={`myPromise
.then((result) => {
  console.log(result); // "It worked!"
})
.catch((error) => {
  console.error(error); // "It failed."
});`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          🔁 Promise Chaining
        </Typography>
        <CodeBlock
          code={`fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => {
  console.log("Received:", data);
})
.catch(err => {
  console.error("Error:", err);
});`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          ⏳ Async/Await (Syntactic Sugar)
        </Typography>
        <CodeBlock
          code={`const fetchData = async () => {
try {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log("Received:", data);
} catch (err) {
  console.error("Error:", err);
}
};`}
        />
      </Box>
    ),
  },
  {
    heading: "What are Promise.all, Promise.race, etc.?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📦 Promise Utilities in JavaScript: <code>Promise.all</code>,{" "}
          <code>Promise.race</code>, <code>Promise.allSettled</code>, and{" "}
          <code>Promise.any</code>
        </Typography>

        <Typography paragraph>
          JavaScript provides several static methods on the <code>Promise</code>{" "}
          object that allow us to handle multiple asynchronous operations at
          once.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Promise.all */}
        <Typography variant="h5" gutterBottom>
          🔹 <code>Promise.all()</code>
        </Typography>
        <Typography paragraph>
          Waits for <strong>all</strong> promises to resolve. If any promise
          rejects, it immediately rejects.
        </Typography>

        <CodeBlock
          code={`const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
.then(values => console.log(values)) // [1, 2, 3]
.catch(error => console.error(error));`}
        />

        <Typography paragraph>If one promise fails:</Typography>

        <CodeBlock
          code={`const p1 = Promise.resolve(1);
const p2 = Promise.reject('Error!');
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
.then(values => console.log(values))
.catch(error => console.error(error)); // Error!`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Promise.race */}
        <Typography variant="h5" gutterBottom>
          🔸 <code>Promise.race()</code>
        </Typography>
        <Typography paragraph>
          Resolves or rejects as soon as the <strong>first</strong> promise
          settles (resolves or rejects).
        </Typography>

        <CodeBlock
          code={`const p1 = new Promise(resolve => setTimeout(resolve, 500, 'slow'));
const p2 = new Promise(resolve => setTimeout(resolve, 100, 'fast'));

Promise.race([p1, p2])
.then(value => console.log(value)) // "fast"
.catch(error => console.error(error));`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Promise.allSettled */}
        <Typography variant="h5" gutterBottom>
          🟡 <code>Promise.allSettled()</code>
        </Typography>
        <Typography paragraph>
          Waits for <strong>all</strong> promises to settle, regardless of
          success or failure.
        </Typography>

        <CodeBlock
          code={`const p1 = Promise.resolve('Success');
const p2 = Promise.reject('Failure');

Promise.allSettled([p1, p2])
.then(results => console.log(results));

/*
[
{ status: 'fulfilled', value: 'Success' },
{ status: 'rejected', reason: 'Failure' }
]
*/`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Promise.any */}
        <Typography variant="h5" gutterBottom>
          🟢 <code>Promise.any()</code>
        </Typography>
        <Typography paragraph>
          Resolves with the <strong>first fulfilled</strong> promise. Ignores
          rejections unless all fail.
        </Typography>

        <CodeBlock
          code={`const p1 = Promise.reject('Error 1');
const p2 = Promise.reject('Error 2');
const p3 = Promise.resolve('Success');

Promise.any([p1, p2, p3])
.then(value => console.log(value)) // "Success"
.catch(error => console.error(error));`}
        />

        <Typography paragraph>
          If all promises reject, it throws an <code>AggregateError</code>.
        </Typography>

        <CodeBlock
          code={`const p1 = Promise.reject('Error 1');
const p2 = Promise.reject('Error 2');

Promise.any([p1, p2])
.then(value => console.log(value))
.catch(error => console.error(error)); 
// AggregateError: All promises were rejected`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧠 Summary
        </Typography>
        <ul>
          <li>
            <strong>Promise.all</strong>: All must succeed; one failure = entire
            failure.
          </li>
          <li>
            <strong>Promise.race</strong>: Settles with the first completed
            (resolved/rejected) promise.
          </li>
          <li>
            <strong>Promise.allSettled</strong>: Always resolves with an array
            of results (fulfilled/rejected).
          </li>
          <li>
            <strong>Promise.any</strong>: Resolves with the first success. Fails
            only if all promises reject.
          </li>
        </ul>
      </Box>
    ),
  },

  {
    heading: "What is the async/await?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          ⏳ Understanding async/await in JavaScript
        </Typography>

        <Typography variant="h6" gutterBottom>
          🔍 What is async/await?
        </Typography>
        <Typography paragraph>
          <strong>async/await</strong> is syntactic sugar built on top of
          Promises. It allows asynchronous code to be written in a
          synchronous-looking way, improving readability and error handling.
        </Typography>

        <Typography variant="h6" gutterBottom>
          ⚙️ Why Use async/await Instead of .then()?
        </Typography>
        <ul>
          <li>Eliminates messy chaining.</li>
          <li>Makes async code more readable and linear.</li>
          <li>
            Handles errors with familiar <code>try...catch</code> blocks.
          </li>
        </ul>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          🧠 Basic Syntax
        </Typography>
        <CodeBlock
          code={`async function fetchData() {
try {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error fetching data:", error);
}
}`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          ⚠️ Rules of await
        </Typography>
        <ul>
          <li>
            Must be used inside an <code>async</code> function.
          </li>
          <li>Waits for a Promise to resolve or reject.</li>
          <li>
            Use <code>try...catch</code> to handle rejections.
          </li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          🔁 Example Without async/await (Using Promises)
        </Typography>
        <CodeBlock
          code={`function fetchData() {
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
}`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          ✅ Example With async/await
        </Typography>
        <CodeBlock
          code={`async function fetchData() {
try {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
} catch (err) {
  console.error(err);
}
}`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          ✨ Arrow Function Version
        </Typography>
        <CodeBlock
          code={`const fetchData = async () => {
try {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
} catch (err) {
  console.error(err);
}
};`}
        />
      </Box>
    ),
  },
  {
    heading: "What is the event loop?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔄 Understanding the Event Loop in JavaScript
        </Typography>

        <Typography paragraph>
          The <strong>Event Loop</strong> is the mechanism that enables
          JavaScript — a single-threaded language — to handle asynchronous
          operations without blocking the main thread. It allows functions like{" "}
          <code>setTimeout</code>, <code>fetch</code>, and <code>Promise</code>{" "}
          callbacks to execute at the right time.
        </Typography>

        <Typography variant="h6" gutterBottom>
          🧱 Core Components of the Event Loop
        </Typography>
        <ul>
          <li>
            <strong>Call Stack:</strong> Keeps track of what function is
            currently executing. Functions are pushed to the stack when called
            and popped off once they finish.
          </li>
          <li>
            <strong>Web APIs:</strong> Provided by the browser or Node.js, these
            APIs handle async operations such as timers, AJAX, DOM events, etc.
          </li>
          <li>
            <strong>Callback Queue (Task Queue):</strong> Once an async task is
            finished by a Web API, its callback is placed in this queue.
          </li>
          <li>
            <strong>Event Loop:</strong> Constantly checks if the call stack is
            empty, and if so, moves the first callback from the queue to the
            call stack.
          </li>
        </ul>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          🔁 Step-by-Step Flow
        </Typography>
        <CodeBlock
          code={`1. You call an async function like setTimeout.
  2. The function is sent to Web APIs (outside the call stack).
  3. Once the async work is done, its callback is queued in the callback queue.
  4. The Event Loop checks if the call stack is clear.
  5. If the stack is empty, the Event Loop pushes the callback onto the call stack.
  6. The callback function executes.`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          🧠 Example: Event Loop in Action
        </Typography>
        <CodeBlock
          code={`console.log("Start");
  
  setTimeout(() => {
    console.log("Inside setTimeout");
  }, 0);
  
  console.log("End");`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Output:
        </Typography>
        <CodeBlock
          code={`Start
  End
  Inside setTimeout`}
        />

        <Typography variant="body1" sx={{ mt: 2 }}>
          Even with a delay of <code>0</code> ms, the <code>setTimeout</code>{" "}
          callback goes through the Web API, waits in the callback queue, and is
          only executed after the call stack is empty.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          ⏱ Microtask vs Callback Queue
        </Typography>
        <Typography paragraph>
          In JavaScript, there are two kinds of task queues:
          <ul>
            <li>
              <strong>Macrotasks:</strong> Scheduled using functions like{" "}
              <code>setTimeout</code>, <code>setInterval</code>, etc.
            </li>
            <li>
              <strong>Microtasks:</strong> Scheduled using <code>Promise</code>,
              <code>queueMicrotask</code>, and <code>MutationObserver</code>.
            </li>
          </ul>
          Microtasks are given higher priority and will always run before
          macrotasks in the next iteration of the Event Loop.
        </Typography>

        <CodeBlock
          code={`console.log("Start");
  
  Promise.resolve().then(() => {
    console.log("Microtask");
  });
  
  setTimeout(() => {
    console.log("Macrotask");
  }, 0);
  
  console.log("End");`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Output:
        </Typography>
        <CodeBlock
          code={`Start
  End
  Microtask
  Macrotask`}
        />

        <Typography paragraph>
          Here, the promise’s <code>.then()</code> is executed before the{" "}
          <code>setTimeout</code> callback because microtasks always run before
          macrotasks once the call stack is clear.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          🧪 Summary
        </Typography>
        <ul>
          <li>JavaScript runs on a single thread.</li>
          <li>
            The Event Loop enables asynchronous behavior by coordinating the
            Call Stack, Web APIs, and Task Queues.
          </li>
          <li>
            Microtasks (from Promises) have higher priority than macrotasks
            (setTimeout, etc.).
          </li>
          <li>
            The Event Loop continuously checks if the stack is empty and pulls
            in queued callbacks when it can.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What is the call stack?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧮 Understanding the Call Stack in JavaScript
        </Typography>

        <Typography paragraph>
          The <strong>Call Stack</strong> is a fundamental part of the
          JavaScript engine. It's a data structure that keeps track of the
          execution context of the code — essentially, what function is
          currently being run and what gets executed next.
        </Typography>

        <Typography variant="h6" gutterBottom>
          📦 What is a Stack?
        </Typography>
        <Typography paragraph>
          A stack is a <strong>LIFO</strong> (Last In, First Out) data
          structure. The last item added is the first to be removed. This is
          important because function calls in JavaScript behave the same way —
          the most recent function call is the first one to complete.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          🧱 How the Call Stack Works
        </Typography>
        <ul>
          <li>
            When a function is called, it's pushed to the top of the call stack.
          </li>
          <li>
            When the function returns, it is popped off the stack and control
            goes back to the function that called it.
          </li>
          <li>
            If the stack gets too big (e.g., infinite recursion), it results in
            a <code>stack overflow</code>.
          </li>
        </ul>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          🧠 Example: Simple Call Stack
        </Typography>
        <CodeBlock
          code={`function third() {
console.log("Inside third");
}

function second() {
third();
console.log("Inside second");
}

function first() {
second();
console.log("Inside first");
}

first();`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Output:
        </Typography>
        <CodeBlock
          code={`Inside third
Inside second
Inside first`}
        />

        <Typography paragraph>Here's what happens step-by-step:</Typography>
        <CodeBlock
          code={`Call Stack:
1. first() is called → pushed onto the stack
2. second() is called from first() → pushed onto the stack
3. third() is called from second() → pushed onto the stack
4. third() finishes → popped off
5. second() finishes → popped off
6. first() finishes → popped off`}
        />

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" gutterBottom>
          ⚠️ Stack Overflow Example
        </Typography>
        <Typography paragraph>
          If a function calls itself recursively without an exit condition, it
          will keep adding frames to the stack until it exceeds the limit.
        </Typography>
        <CodeBlock
          code={`function recurse() {
recurse();
}

recurse(); // ❌ RangeError: Maximum call stack size exceeded`}
        />

        <Typography paragraph>
          This is called a <strong>stack overflow</strong>. JavaScript engines
          protect against infinite recursion by throwing an error when the call
          stack limit is exceeded.
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          🧪 Summary
        </Typography>
        <ul>
          <li>The call stack is used to manage function execution order.</li>
          <li>It follows the Last In, First Out (LIFO) principle.</li>
          <li>Too many calls without returns can cause stack overflow.</li>
          <li>
            Understanding the stack helps debug, trace, and write better async
            code.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What are microtasks and macrotasks?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧵 Microtasks vs Macrotasks in JavaScript
        </Typography>

        <Typography paragraph>
          JavaScript uses an <strong>event loop</strong> to manage asynchronous
          operations. Tasks are queued and executed in phases. These tasks fall
          into two major types:
          <strong>Microtasks</strong> and <strong>Macrotasks</strong> (also
          known as tasks or callbacks).
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          ⚙️ What are Macrotasks?
        </Typography>
        <Typography paragraph>
          Macrotasks include tasks that are scheduled by Web APIs and are placed
          into the <strong>task queue</strong>. They are executed one at a time
          **after the current call stack is empty** and **after all microtasks
          have been processed**.
        </Typography>
        <Typography paragraph>Examples:</Typography>
        <ul>
          <li>
            <code>setTimeout</code>
          </li>
          <li>
            <code>setInterval</code>
          </li>
          <li>
            <code>setImmediate</code> (Node.js)
          </li>
          <li>
            <code>requestAnimationFrame</code>
          </li>
          <li>I/O operations</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🔬 What are Microtasks?
        </Typography>
        <Typography paragraph>
          Microtasks are smaller, faster tasks that are executed **right after
          the current execution context completes** and **before any macrotask**
          is processed.
        </Typography>
        <Typography paragraph>Examples:</Typography>
        <ul>
          <li>
            <code>Promise.then()</code>, <code>Promise.catch()</code>,{" "}
            <code>Promise.finally()</code>
          </li>
          <li>
            <code>queueMicrotask()</code>
          </li>
          <li>
            <code>MutationObserver</code>
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🔁 Execution Order Example
        </Typography>
        <CodeBlock
          code={`console.log("Start");

setTimeout(() => {
console.log("Macrotask - setTimeout");
}, 0);

Promise.resolve().then(() => {
console.log("Microtask - Promise");
});

console.log("End");`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Output:
        </Typography>
        <CodeBlock
          code={`Start
End
Microtask - Promise
Macrotask - setTimeout`}
        />

        <Typography paragraph sx={{ mt: 2 }}>
          Explanation:
          <ul>
            <li>
              <code>console.log("Start")</code> and <code>"End"</code> are
              synchronous.
            </li>
            <li>
              The Promise's <code>.then()</code> is a <strong>microtask</strong>{" "}
              — runs right after the main thread finishes.
            </li>
            <li>
              <code>setTimeout</code> is a <strong>macrotask</strong> — runs
              after microtasks complete.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧠 queueMicrotask Example
        </Typography>
        <CodeBlock
          code={`console.log("Start");

queueMicrotask(() => {
console.log("Microtask - queueMicrotask");
});

console.log("End");`}
        />
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Output:
        </Typography>
        <CodeBlock
          code={`Start
End
Microtask - queueMicrotask`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🆚 Comparison Table
        </Typography>
        <CodeBlock
          code={`| Feature            | Microtask              | Macrotask              |
|---------------------|------------------------|--------------------------|
| Priority            | Higher                 | Lower                   |
| Runs after...       | Current operation      | Microtasks               |
| Examples            | Promise.then, queueMicrotask | setTimeout, setInterval |
| When it executes    | Immediately after stack | After microtasks         |`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧪 Summary
        </Typography>
        <ul>
          <li>
            JavaScript processes tasks in a specific order for consistency.
          </li>
          <li>Microtasks are prioritized before macrotasks.</li>
          <li>
            Understanding this order helps prevent unexpected behavior in async
            code.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What is setTimeout and setInterval?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          ⏱ Understanding <code>setTimeout</code> & <code>setInterval</code> in
          JavaScript
        </Typography>

        <Typography paragraph>
          JavaScript is single-threaded, but with the help of the{" "}
          <strong>Event Loop</strong> and
          <strong> Web APIs</strong>, it can perform asynchronous operations.
          Two commonly used timer-based asynchronous methods are{" "}
          <code>setTimeout()</code> and <code>setInterval()</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 What is <code>setTimeout()</code>?
        </Typography>
        <Typography paragraph>
          The <code>setTimeout()</code> method sets a timer that executes a
          function
          <strong> once after a specified delay</strong> (in milliseconds).
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Syntax:
        </Typography>
        <CodeBlock
          code={`setTimeout(callbackFunction, delayInMilliseconds, ...args);`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          ✅ Example:
        </Typography>
        <CodeBlock
          code={`console.log("Start");

setTimeout(() => {
console.log("Executed after 2 seconds");
}, 2000);

console.log("End");`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Output:
        </Typography>
        <CodeBlock
          code={`Start
End
Executed after 2 seconds`}
        />

        <Typography paragraph sx={{ mt: 2 }}>
          The callback runs{" "}
          <strong>after the current call stack is clear</strong> and after the
          delay. The actual timing may vary based on system load and the event
          loop.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 What is <code>setInterval()</code>?
        </Typography>
        <Typography paragraph>
          The <code>setInterval()</code> method repeatedly executes a function{" "}
          <strong>at a fixed interval</strong>
          (specified in milliseconds).
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Syntax:
        </Typography>
        <CodeBlock
          code={`setInterval(callbackFunction, intervalInMilliseconds, ...args);`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          ✅ Example:
        </Typography>
        <CodeBlock
          code={`let count = 0;

const intervalId = setInterval(() => {
count++;
console.log("Count:", count);
if (count === 5) {
  clearInterval(intervalId);
  console.log("Interval stopped");
}
}, 1000);`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Output:
        </Typography>
        <CodeBlock
          code={`Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
Interval stopped`}
        />

        <Typography paragraph sx={{ mt: 2 }}>
          The <code>setInterval</code> will keep running the callback every 1
          second until we call
          <code> clearInterval(intervalId)</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧹 Clearing Timers
        </Typography>
        <Typography paragraph>
          - Use <code>clearTimeout(timeoutId)</code> to cancel a timeout before
          it executes.
          <br />- Use <code>clearInterval(intervalId)</code> to stop repeated
          execution.
        </Typography>
        <CodeBlock
          code={`const timeoutId = setTimeout(() => {
console.log("Won't run");
}, 3000);

clearTimeout(timeoutId);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          ⚠️ Common Pitfalls
        </Typography>
        <ul>
          <li>
            The timing isn't guaranteed — execution depends on the event loop.
          </li>
          <li>Long-running code can delay the timer execution.</li>
          <li>Forgetting to clear intervals can cause memory leaks.</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧪 Summary
        </Typography>
        <ul>
          <li>
            <code>setTimeout</code>: Executes once after delay.
          </li>
          <li>
            <code>setInterval</code>: Executes repeatedly after each interval.
          </li>
          <li>
            Both return IDs you can use with <code>clearTimeout</code> or{" "}
            <code>clearInterval</code>.
          </li>
          <li>
            Timing precision is affected by the event loop and thread
            availability.
          </li>
        </ul>
      </Box>
    ),
  },
];
