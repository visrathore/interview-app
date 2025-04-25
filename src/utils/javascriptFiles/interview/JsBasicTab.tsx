import {
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import CodeBlock from "../../../components/UI/CodeBlock";

export const BASIC_JS_DATA = [
  {
    heading: "Explain var, let, and const.",
    content: (
      <Box my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          🔍 Understanding <code>var</code>, <code>let</code>, and{" "}
          <code>const</code> in JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          In JavaScript, variables can be declared using <code>var</code>,{" "}
          <code>let</code>, and <code>const</code>. Each of these keywords has
          different scope rules, hoisting behavior, and mutability constraints.
          Knowing how they work is essential for writing reliable and clean
          code.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🏷️ 1. <code>var</code> – Function Scoped
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>var</strong> is the old way of declaring variables. It is:
          <ul>
            <li>Function-scoped</li>
            <li>Hoisted to the top of the function</li>
            <li>Can be re-declared and updated</li>
          </ul>
        </Typography>

        <CodeBlock
          code={`function testVar() {
console.log(a); // undefined (due to hoisting)
var a = 10;
if (true) {
  var a = 20;
  console.log("Inside if:", a); // 20
}
console.log("Outside if:", a); // 20
}

testVar();`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 2. <code>let</code> – Block Scoped
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>let</strong> is block-scoped and introduced in ES6. It is:
          <ul>
            <li>
              Not hoisted like <code>var</code>
            </li>
            <li>Cannot be re-declared in the same scope</li>
            <li>Can be updated</li>
          </ul>
        </Typography>

        <CodeBlock
          code={`function testLet() {
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
if (true) {
  let b = 20;
  console.log("Inside if:", b); // 20
}
console.log("Outside if:", b); // 10
}

testLet();`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔒 3. <code>const</code> – Block Scoped & Immutable Binding
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>const</strong> is also block-scoped like <code>let</code>,
          but:
          <ul>
            <li>Cannot be re-declared or updated</li>
            <li>Must be initialized when declared</li>
            <li>Binding is immutable (but object contents can still change)</li>
          </ul>
        </Typography>

        <CodeBlock
          code={`const c = 30;
// c = 40; // ❌ TypeError: Assignment to constant variable

const obj = { name: "React" };
obj.name = "Next.js"; // ✅ Allowed
console.log(obj.name); // "Next.js"`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Comparison Summary
        </Typography>

        <CodeBlock
          code={`| Keyword | Scope        | Re-declare | Re-assign | Hoisted | Use Case                   |
|---------|--------------|------------|-----------|---------|-----------------------------|
| var     | Function     | Yes        | Yes       | Yes     | Legacy code                |
| let     | Block        | No         | Yes       | No      | Modern variables           |
| const   | Block        | No         | No        | No      | Constants and fixed values |`}
        />

        <Typography variant="body2" paragraph>
          ➕ Use <code>let</code> when the value will change, and{" "}
          <code>const</code> when it won't. Avoid <code>var</code> unless you're
          maintaining old code.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is hoisting?",
    content: (
      <Box my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          🧠 What is Hoisting in JavaScript?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Hoisting</strong> is a JavaScript mechanism where variable and
          function declarations are moved ("hoisted") to the top of their
          containing scope during the **compilation phase**. This means you can
          use variables or functions before you declare them in your code (with
          some caveats).
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 How Hoisting Works
        </Typography>

        <Typography variant="body2" paragraph>
          During the compilation step, JavaScript scans through the code and
          moves:
          <ul>
            <li>
              Variable declarations (declared with <code>var</code>)
            </li>
            <li>Function declarations</li>
          </ul>
          But not:
          <ul>
            <li>
              Variable initializations (<code>=</code> assignments)
            </li>
            <li>
              Function expressions or arrow functions assigned to variables
            </li>
          </ul>
        </Typography>

        <CodeBlock
          code={`console.log(x); // undefined
var x = 5;
console.log(x); // 5

// What actually happens (hoisted):
var x;
console.log(x); // undefined
x = 5;
console.log(x); // 5`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 Hoisting with <code>let</code> and <code>const</code>
        </Typography>

        <Typography variant="body2" paragraph>
          Unlike <code>var</code>, variables declared with <code>let</code> and{" "}
          <code>const</code> are **hoisted**, but they are not initialized. They
          are placed in a "temporal dead zone" (TDZ), which means accessing them
          before the declaration causes a <code>ReferenceError</code>.
        </Typography>

        <CodeBlock
          code={`console.log(y); // ❌ ReferenceError
let y = 10;

console.log(z); // ❌ ReferenceError
const z = 20;`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Hoisting of Function Declarations
        </Typography>

        <Typography variant="body2" paragraph>
          Function declarations are fully hoisted, so you can call a function
          before it is defined:
        </Typography>

        <CodeBlock
          code={`sayHello(); // ✅ Works fine

function sayHello() {
console.log("Hello from hoisted function!");
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ Function Expressions are NOT Hoisted
        </Typography>

        <Typography variant="body2" paragraph>
          If a function is defined as an expression (assigned to a variable), it
          behaves like a regular variable:
        </Typography>

        <CodeBlock
          code={`greet(); // ❌ TypeError: greet is not a function

var greet = function () {
console.log("Hi there!");
};`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Summary
        </Typography>

        <CodeBlock
          code={`| Type                     | Hoisted? | Initialized? | TDZ (Temporal Dead Zone)? |
|--------------------------|----------|---------------|----------------------------|
| var                     | Yes      | Yes (undefined) | No                         |
| let                     | Yes      | No              | Yes                        |
| const                   | Yes      | No              | Yes                        |
| Function Declaration    | Yes      | Yes             | No                         |
| Function Expression     | Yes (as var) | Yes (undefined) | No                     |`}
        />

        <Typography variant="body2" paragraph>
          ➕ Always declare variables at the top of their scope and use{" "}
          <code>let</code> or <code>const</code> instead of <code>var</code> to
          avoid hoisting issues and bugs.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are truthy and falsy values?",
    content: (
      <Box my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          🔍 What are Truthy and Falsy Values in JavaScript?
        </Typography>

        <Typography variant="body1" paragraph>
          In JavaScript, **truthy** and **falsy** are terms used to describe how
          values behave in a **boolean context**, such as in an `if` statement.
        </Typography>

        <Typography variant="body1" paragraph>
          When JavaScript evaluates a value in a condition, it internally calls
          the `ToBoolean` operation, which converts the value into either `true`
          or `false`.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ❌ Falsy Values
        </Typography>

        <Typography variant="body2" paragraph>
          Falsy values are values that convert to `false` when evaluated in a
          boolean context. Only the following **7 values** are falsy:
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Value</strong>
              </TableCell>
              <TableCell>
                <strong>Type</strong>
              </TableCell>
              <TableCell>
                <strong>Description</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ["false", "Boolean", "The boolean value false"],
              ["0", "Number", "Zero"],
              ["-0", "Number", "Negative zero"],
              ["0n", "BigInt", "BigInt zero"],
              ['""', "String", "Empty string"],
              ["null", "Null", "Null value"],
              ["undefined", "Undefined", "Undefined value"],
              ["NaN", "Number", "Not-a-Number"],
            ].map(([value, type, desc]) => (
              <TableRow key={value}>
                <TableCell>{value}</TableCell>
                <TableCell>{type}</TableCell>
                <TableCell>{desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <CodeBlock
          code={`if (false) console.log("Falsy");
if (0) console.log("Falsy");
if (null) console.log("Falsy");
if (undefined) console.log("Falsy");`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Truthy Values
        </Typography>

        <Typography variant="body2" paragraph>
          All values **other than falsy values** are considered truthy. These
          include:
        </Typography>

        <ul>
          <li>
            Non-zero numbers (e.g., <code>1</code>, <code>-42</code>)
          </li>
          <li>
            Non-empty strings (e.g., <code>"hello"</code>)
          </li>
          <li>Objects and arrays (even empty ones)</li>
          <li>Functions</li>
        </ul>

        <CodeBlock
          code={`if (1) console.log("Truthy");
if ("hello") console.log("Truthy");
if ([]) console.log("Truthy");
if ({}) console.log("Truthy");`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚖️ Using Truthy/Falsy in Real Life
        </Typography>

        <CodeBlock
          code={`function printName(name) {
if (name) {
  console.log(\`Hello, \${name}!\`);
} else {
  console.log("Name is missing!");
}
}

printName("John"); // Hello, John!
printName("");     // Name is missing! (empty string is falsy)`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Tip: Double NOT (!!) to convert to Boolean
        </Typography>

        <Typography variant="body2" paragraph>
          Use `!!` to explicitly convert any value to its Boolean equivalent:
        </Typography>

        <CodeBlock
          code={`!!"hello"  // true
!!0        // false
!!{}       // true
!!null     // false`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Summary
        </Typography>

        <Typography variant="body2" paragraph>
          JavaScript's truthy and falsy values play a crucial role in
          conditional logic. Understanding which values behave as false helps
          prevent unexpected bugs and write cleaner, safer code.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the difference between undefined and null?",
    content: (
      <Box my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          🔍 Difference Between <code>undefined</code> and <code>null</code>
        </Typography>

        <Typography variant="body1" paragraph>
          Both <code>undefined</code> and <code>null</code> are special values
          in JavaScript, but they represent different concepts. Let’s break down
          their differences:
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          1️⃣ <code>undefined</code>
        </Typography>

        <Typography variant="body2" paragraph>
          <code>undefined</code> is the default value assigned to a variable
          that has been declared but not yet assigned a value. It also appears
          when you try to access a property of an object that doesn’t exist or
          call a function without returning anything.
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Example</strong>
              </TableCell>
              <TableCell>
                <strong>Description</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>let x;</TableCell>
              <TableCell>
                The value of <code>x</code> is <code>undefined</code> as it has
                been declared but not initialized.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>console.log(person.name);</TableCell>
              <TableCell>
                If <code>person</code> does not have a <code>name</code>{" "}
                property, the result is <code>undefined</code>.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <CodeBlock code="function test() { return; }" />
              </TableCell>
              <TableCell>
                If a function doesn’t explicitly return a value, it implicitly
                returns <code>undefined</code>.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <CodeBlock
          code={`let x;
console.log(x);  // undefined

const person = {};
console.log(person.name);  // undefined

function test() { return; }
console.log(test());  // undefined`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          2️⃣ <code>null</code>
        </Typography>

        <Typography variant="body2" paragraph>
          <code>null</code> is an intentional assignment of an "empty" or
          "non-existent" value. It is typically used to represent the absence of
          a value or object.
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Example</strong>
              </TableCell>
              <TableCell>
                <strong>Description</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>let x = null;</TableCell>
              <TableCell>
                <code>x</code> is explicitly assigned to <code>null</code>,
                meaning it has no value.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>let person = null;</TableCell>
              <TableCell>
                If an object is explicitly set to <code>null</code>, it means
                the object no longer references any memory.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <CodeBlock
          code={`let x = null;
console.log(x);  // null

let person = null;
console.log(person);  // null`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          3️⃣ Key Differences Between <code>undefined</code> and{" "}
          <code>null</code>
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Aspect</strong>
              </TableCell>
              <TableCell>
                <strong>undefined</strong>
              </TableCell>
              <TableCell>
                <strong>null</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Undefined</TableCell>
              <TableCell>
                Object (This is a legacy behavior in JavaScript)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Use Case</TableCell>
              <TableCell>
                Automatically assigned to uninitialized variables and missing
                object properties
              </TableCell>
              <TableCell>
                Used explicitly to represent an absence of value
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Assignment</TableCell>
              <TableCell>Default (implicitly assigned)</TableCell>
              <TableCell>Explicit (developer sets the value)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Comparison</TableCell>
              <TableCell>
                <code>undefined == null</code> is <code>true</code> but{" "}
                <code>undefined === null</code> is <code>false</code>
              </TableCell>
              <TableCell>Used to explicitly signify "no value"</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Summary
        </Typography>

        <Typography variant="body2" paragraph>
          While <code>undefined</code> is the default value of uninitialized
          variables, <code>null</code> is used to explicitly indicate a
          "non-value" or the absence of any object. Understanding these
          distinctions helps improve clarity in your JavaScript code.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is NaN? How can you check if a value is NaN?",
    content: (
      <Box my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          🔍 What is <code>NaN</code> and How to Check It in JavaScript?
        </Typography>

        <Typography variant="body1" paragraph>
          In JavaScript, <code>NaN</code> stands for **Not-a-Number**. It is a
          special value that indicates a value is not a valid number. You’ll
          encounter it in situations where operations that should return
          numbers, instead, result in an invalid or undefined number.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          1️⃣ What is <code>NaN</code>?
        </Typography>

        <Typography variant="body2" paragraph>
          <code>NaN</code> is a primitive value in JavaScript, and it’s the
          result of certain mathematical operations that don’t make sense. For
          example:
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Example</strong>
              </TableCell>
              <TableCell>
                <strong>Description</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>0 / 0</TableCell>
              <TableCell>
                The result of dividing zero by zero is <code>NaN</code> because
                it’s mathematically undefined.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>"Hello" / 2</TableCell>
              <TableCell>
                Attempting to divide a string by a number results in{" "}
                <code>NaN</code> because the string cannot be converted to a
                number.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Math.sqrt(-1)</TableCell>
              <TableCell>
                Taking the square root of a negative number results in{" "}
                <code>NaN</code> in JavaScript.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <CodeBlock
          code={`console.log(0 / 0);  // NaN
console.log("Hello" / 2);  // NaN
console.log(Math.sqrt(-1));  // NaN`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          2️⃣ How to Check if a Value is <code>NaN</code>?
        </Typography>

        <Typography variant="body2" paragraph>
          The problem with checking if a value is <code>NaN</code> is that,
          unlike other values, <code>NaN</code> is not equal to itself. In other
          words, <code>NaN === NaN</code> will return <code>false</code>. This
          can lead to confusion if you don’t know the correct way to check for{" "}
          <code>NaN</code>.
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Method</strong>
              </TableCell>
              <TableCell>
                <strong>Example</strong>
              </TableCell>
              <TableCell>
                <strong>Output</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <code>isNaN()</code>
              </TableCell>
              <TableCell>
                <code>isNaN("Hello")</code>
              </TableCell>
              <TableCell>
                <code>true</code> (since "Hello" is not a number)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>Number.isNaN()</code>
              </TableCell>
              <TableCell>
                <code>Number.isNaN(NaN)</code>
              </TableCell>
              <TableCell>
                <code>true</code> (checks specifically for <code>NaN</code>)
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <CodeBlock
          code={`console.log(isNaN("Hello"));  // true
console.log(Number.isNaN(NaN));  // true`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          3️⃣ Key Differences Between <code>isNaN()</code> and{" "}
          <code>Number.isNaN()</code>
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Aspect</strong>
              </TableCell>
              <TableCell>
                <strong>
                  <code>isNaN()</code>
                </strong>
              </TableCell>
              <TableCell>
                <strong>
                  <code>Number.isNaN()</code>
                </strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Checks for NaN</TableCell>
              <TableCell>
                Checks if a value is NaN, but can return true for non-numeric
                values as well (e.g., strings, undefined)
              </TableCell>
              <TableCell>
                Strictly checks if the value is <code>NaN</code> and only
                returns true for actual <code>NaN</code>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Type Conversion</TableCell>
              <TableCell>
                Implicitly converts the value to a number before checking
              </TableCell>
              <TableCell>
                No type conversion, checks the value strictly
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Summary
        </Typography>

        <Typography variant="body2" paragraph>
          - <code>NaN</code> represents a value that is not a valid number. - It
          can result from operations that are mathematically undefined, such as
          dividing zero by zero or performing mathematical operations on
          non-numeric values. - To check if a value is <code>NaN</code>, use{" "}
          <code>isNaN()</code> or <code>Number.isNaN()</code>, but prefer{" "}
          <code>Number.isNaN()</code> for strict checking.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "What is the difference between primitive and non-primitive data types?",
    content: (
      <Box my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          🔍 Difference Between Primitive and Non-Primitive Data Types
        </Typography>

        <Typography variant="body1" paragraph>
          In JavaScript, data types can be categorized into two broad types:
          <strong>primitive</strong> and <strong>non-primitive</strong>. The key
          difference between the two lies in how they are stored and manipulated
          in memory. Understanding these differences can help you write better
          code and debug efficiently.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          1️⃣ Primitive Data Types
        </Typography>

        <Typography variant="body2" paragraph>
          Primitive data types are simple data types that store their values
          directly. When you assign a primitive value to a variable, the value
          itself is stored. Primitive values are immutable, meaning their values
          cannot be changed once they are created.
        </Typography>

        <Typography variant="body2" paragraph>
          The 7 primitive data types in JavaScript are:
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Data Type</strong>
              </TableCell>
              <TableCell>
                <strong>Description</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>String</TableCell>
              <TableCell>A sequence of characters, used for text.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>
                A numeric value, can be an integer or floating-point.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>BigInt</TableCell>
              <TableCell>
                A numeric value that can represent large integers beyond the
                Number type.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Boolean</TableCell>
              <TableCell>A logical value representing true or false.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>undefined</TableCell>
              <TableCell>
                A variable that has been declared but not assigned a value.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>null</TableCell>
              <TableCell>
                A special value representing the absence of any object value.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell>
                A unique and immutable value often used for object property
                keys.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Typography variant="body2" paragraph>
          Key characteristics of primitive data types:
        </Typography>

        <ul>
          <li>They are immutable (cannot be changed).</li>
          <li>They are compared by value.</li>
          <li>They are stored directly in the stack memory.</li>
        </ul>

        <CodeBlock
          code={`let num = 5;
let str = 'Hello';
let bool = true;

console.log(num === 5); // true
console.log(str === 'Hello'); // true
console.log(bool === true); // true`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          2️⃣ Non-Primitive Data Types (Reference Types)
        </Typography>

        <Typography variant="body2" paragraph>
          Non-primitive data types are more complex and are typically objects,
          arrays, and functions. Unlike primitive types, they are stored by
          reference, meaning when you assign a non-primitive value to a
          variable, the reference to that value is stored, not the actual value
          itself.
        </Typography>

        <Typography variant="body2" paragraph>
          Non-primitive data types are mutable, and their values can be changed.
          The main non-primitive data types in JavaScript are:
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Data Type</strong>
              </TableCell>
              <TableCell>
                <strong>Description</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Object</TableCell>
              <TableCell>
                A collection of key-value pairs, used for storing complex data.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Array</TableCell>
              <TableCell>
                A list-like object, used for storing ordered collections of
                values.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Function</TableCell>
              <TableCell>A block of reusable code.</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Typography variant="body2" paragraph>
          Key characteristics of non-primitive data types:
        </Typography>

        <ul>
          <li>They are mutable (can be changed).</li>
          <li>They are compared by reference, not by value.</li>
          <li>They are stored in the heap memory.</li>
        </ul>

        <CodeBlock
          code={`let person = { name: 'John', age: 30 };
let arr = [1, 2, 3];
let greet = function() { return 'Hello!'; };

person.name = 'Jane';  // The object can be changed
arr.push(4);           // The array can be changed

console.log(person);  // { name: 'Jane', age: 30 }
console.log(arr);     // [1, 2, 3, 4]`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          3️⃣ Key Differences Between Primitive and Non-Primitive Data Types
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Aspect</strong>
              </TableCell>
              <TableCell>
                <strong>Primitive</strong>
              </TableCell>
              <TableCell>
                <strong>Non-Primitive</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Storage</TableCell>
              <TableCell>Stored by value</TableCell>
              <TableCell>Stored by reference</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Immutability</TableCell>
              <TableCell>Immutable</TableCell>
              <TableCell>Mutable</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Memory</TableCell>
              <TableCell>Stored in stack</TableCell>
              <TableCell>Stored in heap</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Comparison</TableCell>
              <TableCell>Compared by value</TableCell>
              <TableCell>Compared by reference</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Summary
        </Typography>

        <Typography variant="body2" paragraph>
          - Primitive data types are simple, immutable, and compared by value.
          They include <code>String</code>, <code>Number</code>,{" "}
          <code>BigInt</code>, <code>Boolean</code>, <code>undefined</code>,{" "}
          <code>null</code>, and <code>Symbol</code>. - Non-primitive data types
          are more complex, mutable, and compared by reference. They include{" "}
          <code>Object</code>, <code>Array</code>, and <code>Function</code>.
        </Typography>
      </Box>
    ),
  },
];
