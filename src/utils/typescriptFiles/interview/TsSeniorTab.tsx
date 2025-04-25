import { Box, Divider, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const TYPESCRIPT_SENIOR_DATA = [
  {
    heading: "Explain Structural Typing (Duck Typing)",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧩 Structural Typing (aka Duck Typing) in TypeScript
        </Typography>

        <Typography paragraph>
          In TypeScript, the type system is <strong>structural</strong>, not
          nominal. This means two different types are considered compatible if
          their shapes match — often known as
          <em>duck typing</em>: "If it looks like a duck and quacks like a duck,
          it's a duck."
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Basic Example */}
        <Typography variant="h5" gutterBottom>
          ✅ Basic Structural Typing
        </Typography>
        <CodeBlock
          code={`type Person = {
name: string;
age: number;
};

const user = {
name: "Alice",
age: 25,
email: "alice@example.com" // extra property
};

// This works because 'user' has all required fields of 'Person'
const greet = (person: Person) => {
console.log("Hello, " + person.name);
};

greet(user); // ✅ Allowed - extra fields are okay
`}
        />
        <Typography paragraph>
          - <code>user</code> has the same required structure as{" "}
          <code>Person</code>, so it's assignable.
          <br />- Extra fields like <code>email</code> are ignored during the
          check.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Assignability */}
        <Typography variant="h5" gutterBottom>
          🔁 Type Assignability
        </Typography>
        <CodeBlock
          code={`type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

const point3D: Point3D = { x: 10, y: 20, z: 30 };

// Allowed: Point3D can be used as Point2D
const plot2D = (point: Point2D) => console.log(point.x, point.y);

plot2D(point3D); // ✅

// Not allowed: missing z
const point2D: Point2D = { x: 1, y: 2 };
// const plot3D = (point: Point3D) => console.log(point.x, point.y, point.z);
// plot3D(point2D); // ❌ Error: Property 'z' is missing
`}
        />
        <Typography paragraph>
          - You can pass a <code>Point3D</code> to a function expecting{" "}
          <code>Point2D</code>, but not vice versa.
          <br />- This is because <strong>extra fields are okay</strong> but
          missing required fields are not.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Practical Use */}
        <Typography variant="h5" gutterBottom>
          🔧 Practical Usage
        </Typography>
        <CodeBlock
          code={`interface Logger {
log: (msg: string) => void;
}

const consoleLogger = {
log: (msg: string) => console.log(msg),
level: "info",
};

function useLogger(logger: Logger) {
logger.log("Hello from logger!");
}

useLogger(consoleLogger); // ✅ works even with extra fields
`}
        />
        <Typography paragraph>
          - As long as the required methods exist with correct signatures, the
          object is valid.
          <br />- Great for plugin-based systems, dependency injection, and
          mocking.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" color="text.secondary">
          📌 Summary
        </Typography>
        <ul>
          <li>
            ✅ Structural typing checks that <strong>shapes match</strong> — not
            names.
          </li>
          <li>
            ✅ Extra properties are allowed when assigning to a smaller type.
          </li>
          <li>⚠️ Careful with excess property checks in object literals.</li>
          <li>
            🎯 Enables flexible, loose coupling and reusable contracts in code.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading:
      "Difference between Interface and Type Alias (and when to use what)",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📘 Interface vs Type Alias in TypeScript
        </Typography>

        <Typography paragraph>
          In TypeScript, both <code>interface</code> and <code>type</code> are
          used to define the shape of an object, but there are key differences
          in their capabilities and use cases.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Defining Object Shapes
        </Typography>

        <Typography variant="subtitle1">Interface:</Typography>
        <CodeBlock
          code={`interface User {
  name: string;
  age: number;
}`}
        />

        <Typography variant="subtitle1">Type Alias:</Typography>
        <CodeBlock
          code={`type User = {
  name: string;
  age: number;
};`}
        />

        <Typography paragraph>
          ✅ Both can describe an object structure. For most object shapes,
          either is fine.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧬 Extending Types
        </Typography>

        <Typography variant="subtitle1">
          Interfaces support extension via <code>extends</code> keyword:
        </Typography>
        <CodeBlock
          code={`interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}`}
        />

        <Typography variant="subtitle1">
          Type aliases use intersections to extend:
        </Typography>
        <CodeBlock
          code={`type Animal = {
  name: string;
};

type Dog = Animal & {
  breed: string;
};`}
        />

        <Typography paragraph>
          ✅ Both can be extended, but interfaces are better for large-scale
          structural extension (especially in libraries).
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Merging Declarations (Only Interfaces!)
        </Typography>
        <Typography paragraph>
          Interfaces can be declared multiple times and will merge automatically
          — very useful for extending 3rd party types.
        </Typography>

        <CodeBlock
          code={`interface Window {
  title: string;
}

interface Window {
  isDarkMode: boolean;
}

// Merges to:
const myWindow: Window = {
  title: "Dashboard",
  isDarkMode: true
};`}
        />

        <Typography paragraph>
          ❌ Type aliases cannot merge like this. Declaring the same type twice
          will cause a compile error.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Union and Primitive Types (Only with Type Aliases!)
        </Typography>

        <Typography paragraph>
          Only <code>type</code> can represent unions, tuples, or primitive
          aliases.
        </Typography>

        <CodeBlock
          code={`type Status = "success" | "error" | "loading";

type ID = number | string;

type Point = [number, number];`}
        />

        <Typography paragraph>
          ❌ These can't be done using <code>interface</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ When to Use What?
        </Typography>

        <ul>
          <li>
            🔹 Use{" "}
            <strong>
              <code>interface</code>
            </strong>{" "}
            for public APIs, class shapes, and extendable object types.
          </li>
          <li>
            🔹 Use{" "}
            <strong>
              <code>type</code>
            </strong>{" "}
            for unions, primitives, function types, mapped/conditional types.
          </li>
          <li>
            🔹 In general: <code>interface</code> for structure,{" "}
            <code>type</code> for flexibility.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 Quick Summary
        </Typography>

        <CodeBlock
          code={`// ✅ Use interface when:
interface Button {
  label: string;
  onClick(): void;
}

// ✅ Use type for more flexibility:
type Result = "success" | "fail";
type Point = [number, number];`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          Pro Tip: In modern TS, both are powerful and interchangeable in many
          scenarios. Use what's more readable and fits your project style.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Module Augmentation.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔧 Module Augmentation in TypeScript
        </Typography>

        <Typography paragraph>
          Module augmentation is a TypeScript feature that lets you extend or
          modify the types of existing modules, including third-party libraries.
          It's particularly useful when you're dealing with libraries that don't
          include all types you need or when you want to add custom typings.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Why Use Module Augmentation?
        </Typography>
        <Typography>
          - Add new properties or types to a module
          <br />
          - Fix missing or incorrect types in third-party modules
          <br />- Enhance existing type declarations in your own codebase
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Basic Syntax (Extending a Module)
        </Typography>
        <CodeBlock
          code={`// file: custom-types.d.ts
import 'express';

declare module 'express' {
interface Request {
  user?: { id: string; role: string };
}
}`}
        />

        <Typography paragraph>
          Here, we are adding a <code>user</code> object to Express’s Request
          interface. You must import the module first, then declare it again
          with the <code>declare module</code> syntax.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Usage in Actual Code
        </Typography>
        <CodeBlock
          code={`// app.ts
app.use((req, res, next) => {
req.user = { id: '123', role: 'admin' }; // Now recognized by TypeScript
next();
});`}
        />

        <Typography paragraph>
          Without augmentation, TypeScript would throw an error saying{" "}
          <code>user</code> does not exist on <code>Request</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠 Custom Module Augmentation (Internal Code)
        </Typography>
        <CodeBlock
          code={`// my-theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
interface Theme {
  status: {
    danger: string;
  };
}
interface ThemeOptions {
  status?: {
    danger?: string;
  };
}
}`}
        />

        <Typography paragraph>
          This lets you safely add a custom <code>status</code> field to the MUI
          Theme interface, enabling access via <code>theme.status.danger</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚨 Best Practices
        </Typography>
        <ul>
          <li>
            ✅ Use augmentation in <code>.d.ts</code> (declaration) files only
          </li>
          <li>✅ Always import the module before declaring</li>
          <li>
            ✅ Use it sparingly—prefer PRs to third-party repos if types are
            incorrect
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          Module augmentation is your TypeScript safety valve—powerful when used
          right, but don't go wild with it.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain advanced use of this typing.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔍 Advanced Use of <code>this</code> Typing in TypeScript
        </Typography>

        <Typography paragraph>
          In TypeScript, the <code>this</code> keyword is used to refer to the
          context in which a function is executed. For object-oriented and
          callback-heavy code, typing <code>this</code> properly allows for
          better intellisense, type-checking, and debugging.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Why Type <code>this</code>?
        </Typography>

        <Typography paragraph>
          When functions depend on the object they are part of, TypeScript can
          infer <code>this</code>, but in some cases (like standalone functions
          or callbacks), you must annotate <code>this</code> manually.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 1. Typing <code>this</code> in Object Methods
        </Typography>
        <Typography paragraph>
          Let’s define an object and ensure <code>this</code> is correctly typed
          inside methods.
        </Typography>
        <CodeBlock
          code={`type User = {
name: string;
age: number;
greet(this: User): string;
};

const user: User = {
name: "Alice",
age: 30,
greet() {
  return \`Hello, my name is \${this.name}\`;
},
};

console.log(user.greet()); // ✅ Correctly types 'this' as User`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 2. Typing <code>this</code> in Callbacks
        </Typography>
        <Typography paragraph>
          By default, <code>this</code> in callbacks is <code>any</code>. You
          can explicitly type it for clarity.
        </Typography>
        <CodeBlock
          code={`function delayedGreeting(this: { name: string }) {
setTimeout(() => {
  console.log("Hello from", this.name);
}, 1000);
}

const person = { name: "John" };
delayedGreeting.call(person); // ✅ Correct 'this' context`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 3. Typing <code>this</code> in Class Methods
        </Typography>
        <Typography paragraph>
          In class methods, <code>this</code> is usually inferred, but you can
          still type it for additional safety, especially in strict mode.
        </Typography>
        <CodeBlock
          code={`class Counter {
count = 0;

increment(this: Counter) {
  this.count += 1;
}
}

const c = new Counter();
c.increment(); // ✅ 'this' is Counter`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ 4. Arrow Functions and <code>this</code>
        </Typography>
        <Typography paragraph>
          Arrow functions capture <code>this</code> lexically from the
          surrounding context, so typing <code>this</code> directly is not
          needed.
        </Typography>
        <CodeBlock
          code={`class Logger {
prefix = "[LOG]";

log = () => {
  console.log(this.prefix, "Logging something...");
};
}

const logger = new Logger();
logger.log(); // ✅ 'this' refers to Logger, captured lexically`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 5. Using <code>this</code> with Function Prototypes
        </Typography>
        <Typography paragraph>
          When extending built-in types or prototypes, you can provide type
          safety using <code>this</code>.
        </Typography>
        <CodeBlock
          code={`interface Array<T> {
last(this: T[]): T | undefined;
}

Array.prototype.last = function () {
return this[this.length - 1];
};

const nums = [1, 2, 3];
console.log(nums.last()); // 3 ✅ Safely typed`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Best Practices
        </Typography>
        <ul>
          <li>
            Always annotate <code>this</code> explicitly when outside of a class
            or arrow function.
          </li>
          <li>
            Use <code>this: void</code> if a function does not rely on{" "}
            <code>this</code>.
          </li>
          <li>
            Avoid using <code>this</code> in arrow functions unless you rely on
            lexical binding.
          </li>
        </ul>

        <CodeBlock
          code={`function noThis(this: void) {
console.log("Independent function");
}

noThis(); // ✅ Can't use 'this' inside`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={2}>
          Pro Tip: Annotating <code>this</code> helps avoid bugs, especially
          when dealing with third-party libraries, event handlers, or prototype
          extensions.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain avoiding any and preferring unknown.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🚫 Avoiding <code>any</code> and Preferring <code>unknown</code> in
          TypeScript
        </Typography>

        <Typography paragraph>
          The <code>any</code> type disables type-checking, making TypeScript
          behave like plain JavaScript. While sometimes convenient, it can cause
          issues by masking potential bugs. The <code>unknown</code> type offers
          a safer alternative when the type is truly unknown at the time of
          writing.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Problem with <code>any</code>
        </Typography>

        <Typography paragraph>
          Using <code>any</code> turns off type safety — TypeScript gives up on
          type checking that variable.
        </Typography>

        <CodeBlock
          code={`let value: any;

value = 5;
value = "hello";

// ❌ No error, but potential bug
console.log(value.toFixed()); // Runtime error if 'value' is a string`}
        />

        <Typography paragraph>
          This might pass compile-time checks but can break at runtime. That's
          where <code>unknown</code> shines.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Introducing <code>unknown</code>
        </Typography>

        <Typography paragraph>
          The <code>unknown</code> type means: “We don’t know the type yet, but
          we must check before using it.”
        </Typography>

        <CodeBlock
          code={`let value: unknown;

value = 42;
value = "safe";

// ✅ Cannot use directly without type checking
// console.log(value.toFixed()); ❌ TypeScript Error

if (typeof value === "number") {
console.log(value.toFixed()); // ✅ Now safe to use
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔐 Why <code>unknown</code> is Safer
        </Typography>

        <Typography component="ul">
          <li>
            <strong>Encourages validation:</strong> You must perform type checks
            before usage.
          </li>
          <li>
            <strong>Preserves type safety:</strong> Keeps compiler warnings and
            avoids silent failures.
          </li>
          <li>
            <strong>Perfect for dynamic values:</strong> Like from APIs,
            third-party libraries, or JSON parsing.
          </li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Practical Usage Example
        </Typography>

        <Typography paragraph>
          Here's a realistic example using <code>unknown</code> for safely
          handling dynamic JSON data.
        </Typography>

        <CodeBlock
          code={`function parseJSON(json: string): unknown {
try {
  return JSON.parse(json);
} catch {
  return null;
}
}

const data = parseJSON('{ "user": "Alice" }');

// 🔍 Use type guards to access properties safely
if (typeof data === "object" && data !== null && "user" in data) {
console.log((data as { user: string }).user); // ✅ Safe cast
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ❓ When to use <code>any</code>
        </Typography>

        <Typography paragraph>
          There are rare scenarios where <code>any</code> is acceptable:
        </Typography>
        <ul>
          <li>Rapid prototyping (temporary use)</li>
          <li>
            Third-party libraries without types (until proper types are added)
          </li>
          <li>Gradually migrating large JavaScript codebases</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Best Practices
        </Typography>

        <ul>
          <li>
            🚫 Avoid <code>any</code> in production code
          </li>
          <li>
            ✅ Use <code>unknown</code> when type is uncertain at compile time
          </li>
          <li>
            🔍 Always narrow <code>unknown</code> types before using them
          </li>
        </ul>

        <CodeBlock
          code={`function handleInput(input: unknown) {
if (typeof input === "string") {
  console.log("String length:", input.length);
} else if (typeof input === "number") {
  console.log("Rounded number:", Math.round(input));
} else {
  console.log("Unsupported type.");
}
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={2}>
          🔐 Summary: Think of <code>unknown</code> as a "safe <code>any</code>
          ". It forces type checks and prevents type-related runtime bugs —
          preserving the whole point of TypeScript's static typing!
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Type Narrowing.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔍 Type Narrowing in TypeScript
        </Typography>

        <Typography paragraph>
          Type narrowing is the process of refining a variable’s type within a
          specific scope. This helps TypeScript infer more accurate types based
          on runtime checks such as
          <strong>
            {" "}
            typeof, instanceof, in, equality checks, and custom type guards
          </strong>
          .
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* typeof narrowing */}
        <Typography variant="h5" gutterBottom>
          📌 1. <code>typeof</code> Narrowing
        </Typography>
        <CodeBlock
          code={`function printId(id: string | number) {
if (typeof id === "string") {
  console.log("String ID:", id.toUpperCase());
} else {
  console.log("Number ID:", id.toFixed(2));
}
}`}
        />

        <Typography paragraph>
          Here, TypeScript narrows the type inside each block based on the{" "}
          <code>typeof</code> check.
        </Typography>

        {/* instanceof narrowing */}
        <Typography variant="h5" gutterBottom>
          🧱 2. <code>instanceof</code> Narrowing
        </Typography>
        <CodeBlock
          code={`function logDate(date: Date | string) {
if (date instanceof Date) {
  console.log("Date object:", date.toUTCString());
} else {
  console.log("Parsed string:", new Date(date).toUTCString());
}
}`}
        />

        {/* in narrowing */}
        <Typography variant="h5" gutterBottom>
          🔑 3. <code>in</code> Operator Narrowing
        </Typography>
        <CodeBlock
          code={`type Admin = { role: "admin"; accessLevel: number };
type User = { role: "user"; email: string };

type Person = Admin | User;

function getRoleInfo(person: Person) {
if ("accessLevel" in person) {
  console.log("Admin level:", person.accessLevel);
} else {
  console.log("User email:", person.email);
}
}`}
        />

        {/* equality narrowing */}
        <Typography variant="h5" gutterBottom>
          ✅ 4. Equality Narrowing
        </Typography>
        <CodeBlock
          code={`function handleInput(value: string | boolean) {
if (value === true) {
  console.log("Confirmed");
} else if (value === false) {
  console.log("Declined");
} else {
  console.log("User Input:", value);
}
}`}
        />

        {/* custom type guard */}
        <Typography variant="h5" gutterBottom>
          🧠 5. Custom Type Guard Functions
        </Typography>
        <CodeBlock
          code={`type Dog = { bark: () => void };
type Cat = { meow: () => void };

type Pet = Dog | Cat;

function isDog(pet: Pet): pet is Dog {
return (pet as Dog).bark !== undefined;
}

function interact(pet: Pet) {
if (isDog(pet)) {
  pet.bark();
} else {
  pet.meow();
}
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧩 Summary
        </Typography>
        <ul>
          <li>
            <strong>typeof</strong> – Narrow by primitive type
          </li>
          <li>
            <strong>instanceof</strong> – Narrow by class instance
          </li>
          <li>
            <strong>in</strong> – Narrow by property existence
          </li>
          <li>
            <strong>equality checks</strong> – Narrow by value
          </li>
          <li>
            <strong>custom type guards</strong> – Narrow complex unions
          </li>
        </ul>

        <Typography variant="body2" mt={2} color="text.secondary">
          🎯 Type narrowing is the core of writing safe, expressive TypeScript
          code. It helps leverage the power of union types without sacrificing
          safety.
        </Typography>
      </Box>
    ),
  },
];
