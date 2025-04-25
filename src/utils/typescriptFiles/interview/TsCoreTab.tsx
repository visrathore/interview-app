import { Box, Divider, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const TYPESCRIPT_CORE_DATA = [
  {
    heading: "Explain all basic types present in typescript.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧠 Basic Types in TypeScript
        </Typography>

        <Typography paragraph>
          TypeScript provides several built-in types to help you write safe,
          robust, and maintainable JavaScript code. Let's go through the most
          important ones with explanations and examples.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Number */}
        <Typography variant="h5" gutterBottom>
          🔢 number
        </Typography>
        <Typography paragraph>
          The <strong>number</strong> type is used to represent both integers
          and floating-point numbers.
        </Typography>
        <CodeBlock
          code={`// ✅ Declaring number variables
let age: number = 30;
let rating: number = 4.5;`}
        />

        <Divider sx={{ my: 3 }} />

        {/* String */}
        <Typography variant="h5" gutterBottom>
          🔤 string
        </Typography>
        <Typography paragraph>
          The <strong>string</strong> type represents textual data.
        </Typography>
        <CodeBlock
          code={`// ✅ Declaring string variables
let username: string = "john_doe";
let message: string = \`Hello, \${username}!\`;`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Boolean */}
        <Typography variant="h5" gutterBottom>
          ✅ boolean
        </Typography>
        <Typography paragraph>
          The <strong>boolean</strong> type is used to represent true/false
          values.
        </Typography>
        <CodeBlock
          code={`let isLoggedIn: boolean = true;
let isAdmin: boolean = false;`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Null & Undefined */}
        <Typography variant="h5" gutterBottom>
          ❓ null & undefined
        </Typography>
        <Typography paragraph>
          <code>null</code> means "no value", while <code>undefined</code> means
          "not assigned". These are distinct in TypeScript.
        </Typography>
        <CodeBlock
          code={`let empty: null = null;
let notAssigned: undefined = undefined;`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Any */}
        <Typography variant="h5" gutterBottom>
          🎭 any
        </Typography>
        <Typography paragraph>
          The <code>any</code> type disables type checking. Use it cautiously as
          it removes all safety.
        </Typography>
        <CodeBlock
          code={`let flexible: any = "Hello";
flexible = 42;
flexible = true;`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Unknown */}
        <Typography variant="h5" gutterBottom>
          🕵️ unknown
        </Typography>
        <Typography paragraph>
          The <code>unknown</code> type is safer than <code>any</code>. It
          forces you to perform type checks before use.
        </Typography>
        <CodeBlock
          code={`let value: unknown = "TypeScript";

if (typeof value === "string") {
console.log(value.toUpperCase()); // ✅ Safe usage
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Void */}
        <Typography variant="h5" gutterBottom>
          🚫 void
        </Typography>
        <Typography paragraph>
          <code>void</code> is mostly used to indicate that a function doesn’t
          return anything.
        </Typography>
        <CodeBlock
          code={`function logInfo(msg: string): void {
console.log("Info:", msg);
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Never */}
        <Typography variant="h5" gutterBottom>
          ⛔ never
        </Typography>
        <Typography paragraph>
          Functions that never return (e.g. throw an error or infinite loop)
          have the type <code>never</code>.
        </Typography>
        <CodeBlock
          code={`function fail(message: string): never {
throw new Error(message);
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Array */}
        <Typography variant="h5" gutterBottom>
          📦 Array
        </Typography>
        <Typography paragraph>
          Arrays can be typed using either <code>type[]</code> or{" "}
          <code>Array&lt;type&gt;</code>.
        </Typography>
        <CodeBlock
          code={`let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana", "cherry"];`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Tuple */}
        <Typography variant="h5" gutterBottom>
          🎯 Tuple
        </Typography>
        <Typography paragraph>
          Tuples represent a fixed-length array with known types at each
          position.
        </Typography>
        <CodeBlock code={`let user: [string, number] = ["Alice", 25];`} />

        <Divider sx={{ my: 3 }} />

        {/* Enum */}
        <Typography variant="h5" gutterBottom>
          🧭 enum
        </Typography>
        <Typography paragraph>
          Enums allow you to define a set of named constants.
        </Typography>
        <CodeBlock
          code={`enum Direction {
Up,
Down,
Left,
Right
}

let move: Direction = Direction.Left;`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Literal Types */}
        <Typography variant="h5" gutterBottom>
          📌 Literal Types
        </Typography>
        <Typography paragraph>
          Restrict a variable to specific values using literal types.
        </Typography>
        <CodeBlock code={`let role: "admin" | "user" | "guest" = "admin";`} />

        <Divider sx={{ my: 3 }} />

        {/* Union & Intersection */}
        <Typography variant="h5" gutterBottom>
          🔗 Union & Intersection Types
        </Typography>
        <Typography paragraph>
          Union allows multiple possible types. Intersection combines multiple
          types.
        </Typography>
        <CodeBlock
          code={`// Union
let input: string | number;
input = "hello";
input = 123;

// Intersection
type Person = { name: string };
type Employee = Person & { salary: number };

let dev: Employee = {
name: "Mark",
salary: 90000
};`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={2}>
          💡 Tip: Prefer strict types wherever possible to benefit from
          TypeScript’s type safety and catch bugs early!
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Type Inference & Type Annotations.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧠 Type Inference vs Type Annotations in TypeScript
        </Typography>

        <Typography paragraph>
          TypeScript is powerful because it can both infer types automatically
          and let you explicitly define them using annotations. Understanding
          the balance between both leads to cleaner, more reliable code.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Type Inference */}
        <Typography variant="h5" gutterBottom>
          🔍 What is Type Inference?
        </Typography>

        <Typography paragraph>
          <strong>Type Inference</strong> is when TypeScript automatically
          determines the type of a variable based on its initial value. This
          means you don’t always have to write types explicitly.
        </Typography>

        <CodeBlock
          code={`// TypeScript infers 'count' as a number
let count = 10;

// Hovering on 'count' shows: let count: number

// Inference also works with functions
function greet(name = "Guest") {
return \`Hello, \${name}\`;
}
// greet inferred as: (name?: string) => string`}
        />

        <Typography paragraph>
          ✅ Type inference helps reduce redundancy and keeps code concise while
          still being type-safe.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Type Annotations */}
        <Typography variant="h5" gutterBottom>
          ✍️ What are Type Annotations?
        </Typography>

        <Typography paragraph>
          <strong>Type Annotations</strong> are explicit declarations of a
          variable's or function's type. They are especially useful when:
        </Typography>

        <ul>
          <li>There’s no initial value for inference</li>
          <li>You want to document intent clearly</li>
          <li>Function parameters or return types need clarity</li>
        </ul>

        <CodeBlock
          code={`// Explicit annotation for a variable
let username: string;
username = "Alice";

// Function with annotated parameters and return type
function add(a: number, b: number): number {
return a + b;
}

// Object with an annotated structure
let user: { id: number; name: string } = {
id: 1,
name: "Bob"
};`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Best Practices */}
        <Typography variant="h5" gutterBottom>
          💡 Best Practices
        </Typography>

        <ul>
          <li>
            ✅ Let TypeScript infer types where possible for brevity and
            simplicity.
          </li>
          <li>
            ✅ Use annotations when the type isn't obvious or when there's no
            initialization.
          </li>
          <li>
            ❌ Avoid using <code>any</code> unless absolutely necessary — it
            disables type checking.
          </li>
        </ul>

        <CodeBlock
          code={`// ✅ Let TS infer types when initializing
let isOnline = true; // inferred as boolean

// ✅ Use annotations when no value is assigned
let totalPrice: number;
totalPrice = 99.99;

// ❌ Avoid 'any' unless required
let response: any; // Try to use 'unknown' or define shape if possible`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Advanced Inference */}
        <Typography variant="h5" gutterBottom>
          🚀 Advanced Inference with Arrays & Functions
        </Typography>

        <Typography paragraph>
          TypeScript infers array and function return types based on their
          content and structure.
        </Typography>

        <CodeBlock
          code={`// Array Inference
let scores = [98, 95, 100]; // inferred as number[]

// Function Return Inference
function isEven(n: number) {
return n % 2 === 0;
}
// Inferred as: (n: number) => boolean`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Summary */}
        <Typography variant="body2" color="text.secondary" mt={2}>
          🧩 Summary: Type Inference keeps your code minimal and readable. Type
          Annotations bring clarity, especially in more complex scenarios.
          Mastering both is key to writing elegant TypeScript code.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Union & Intersection Types.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔀 Union (&vert;) and Intersection (&amp;) Types in TypeScript
        </Typography>

        <Typography paragraph>
          TypeScript offers <strong>Union</strong> and{" "}
          <strong>Intersection</strong> types to help model complex data shapes.
          They allow types to be more flexible and reusable by combining
          multiple types in different ways.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* UNION TYPES */}
        <Typography variant="h5" gutterBottom>
          🔗 What is a Union Type?
        </Typography>

        <Typography paragraph>
          A <strong>Union Type</strong> allows a variable to be one of several
          types. It uses the <code>|</code> (pipe) symbol. This is helpful when
          a value can vary between a few specific types.
        </Typography>

        <CodeBlock
          code={`// ✅ A variable can be a string OR a number
let score: string | number;

score = 85;       // valid
score = "Eighty"; // also valid

// Example with a function
function printId(id: number | string) {
console.log("ID:", id);
}

printId(101);
printId("XYZ123");`}
        />

        <Typography paragraph>
          You can use <code>typeof</code> checks or <code>in</code>/
          <code>instanceof</code> guards to handle the types inside a union.
        </Typography>

        <CodeBlock
          code={`function handleInput(input: string | string[]) {
if (typeof input === "string") {
  console.log("Single string:", input);
} else {
  console.log("Array of strings:", input.join(", "));
}
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* INTERSECTION TYPES */}
        <Typography variant="h5" gutterBottom>
          🔀 What is an Intersection Type?
        </Typography>

        <Typography paragraph>
          An <strong>Intersection Type</strong> combines multiple types into
          one. It uses the <code>&amp;</code> (ampersand) symbol. The resulting
          type must have all properties from all constituent types.
        </Typography>

        <CodeBlock
          code={`type User = {
name: string;
};

type Admin = {
role: string;
};

// ✅ Combined type must have BOTH name and role
type AdminUser = User & Admin;

const superAdmin: AdminUser = {
name: "Alice",
role: "Super Admin"
};`}
        />

        <Typography paragraph>
          This is great for **composition**, where an object must satisfy
          multiple type constraints at once.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* REAL-WORLD COMPARISON */}
        <Typography variant="h5" gutterBottom>
          🛠️ Real-World Analogy
        </Typography>

        <Typography paragraph>
          Think of <strong>Union</strong> as an OR condition (you can wear a
          hoodie <em>or</em> a jacket), and <strong>Intersection</strong> as an
          AND condition (you wear both a shirt <em>and</em> pants).
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* PRACTICAL COMBO */}
        <Typography variant="h5" gutterBottom>
          🧪 Practical Example Combining Both
        </Typography>

        <CodeBlock
          code={`type SuccessResponse = {
status: "success";
data: string[];
};

type ErrorResponse = {
status: "error";
error: string;
};

// Union: response can be either success OR error
type APIResponse = SuccessResponse | ErrorResponse;

function handleResponse(res: APIResponse) {
if (res.status === "success") {
  console.log("Data:", res.data);
} else {
  console.error("Error:", res.error);
}
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* EDGE CASES */}
        <Typography variant="h5" gutterBottom>
          ⚠️ Union vs Intersection: Be Careful
        </Typography>

        <Typography paragraph>
          If you intersect two types with conflicting properties, you’ll get{" "}
          <code>never</code> — meaning no value can satisfy it.
        </Typography>

        <CodeBlock
          code={`type A = { kind: "circle"; radius: number };
type B = { kind: "square"; side: number };

// ❌ Impossible type, 'kind' can't be both
type Impossible = A & B; // results in 'never'`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Summary */}
        <Typography variant="body2" color="text.secondary" mt={2}>
          🔎 <strong>Union</strong> makes your types more flexible by allowing
          one or the other. <strong>Intersection</strong> makes them more strict
          by requiring all properties. Use them wisely depending on your data
          structure needs.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Type Aliases vs Interfaces.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          ⚔️ Type Aliases vs Interfaces in TypeScript
        </Typography>

        <Typography paragraph>
          Both <strong>Type Aliases</strong> and <strong>Interfaces</strong>{" "}
          allow you to define the shape of an object, but they differ slightly
          in flexibility, capabilities, and extensibility. Let’s break them down
          in detail.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* TYPE ALIAS */}
        <Typography variant="h5" gutterBottom>
          🔖 What is a Type Alias?
        </Typography>
        <Typography paragraph>
          A <strong>type alias</strong> uses the <code>type</code> keyword to
          name a type. It can represent:
          <ul>
            <li>Primitive types</li>
            <li>Union/intersection types</li>
            <li>Function signatures</li>
            <li>Tuples, and more</li>
          </ul>
        </Typography>

        <CodeBlock
          code={`// ✅ Basic Type Alias
type User = {
name: string;
age: number;
};

// ✅ Can alias primitives, unions, functions, etc.
type ID = string | number;

type Logger = (msg: string) => void;

const logMessage: Logger = (msg) => console.log(msg);`}
        />

        <Divider sx={{ my: 3 }} />

        {/* INTERFACE */}
        <Typography variant="h5" gutterBottom>
          🧩 What is an Interface?
        </Typography>
        <Typography paragraph>
          An <strong>interface</strong> is specifically used to define the shape
          of an object. It's great for defining contracts in object-oriented
          designs and can be extended or merged.
        </Typography>

        <CodeBlock
          code={`// ✅ Basic Interface
interface Product {
name: string;
price: number;
}

// ✅ Interfaces can be extended
interface DiscountedProduct extends Product {
discount: number;
}`}
        />

        <Typography paragraph>
          Interfaces support <strong>declaration merging</strong>—where multiple
          declarations with the same name are merged.
        </Typography>

        <CodeBlock
          code={`interface User {
name: string;
}

interface User {
age: number;
}

// ✅ Merged as: { name: string; age: number; }
const user: User = {
name: "John",
age: 30
};`}
        />

        <Divider sx={{ my: 3 }} />

        {/* KEY DIFFERENCES */}
        <Typography variant="h5" gutterBottom>
          🔍 Key Differences
        </Typography>

        <ul>
          <li>
            <strong>Extension:</strong> Both can extend, but{" "}
            <code>interface</code> uses <code>extends</code> and{" "}
            <code>type</code> uses <code>&</code>.
          </li>
          <li>
            <strong>Union & Tuples:</strong> Only <code>type</code> can
            represent unions and tuples.
          </li>
          <li>
            <strong>Declaration Merging:</strong> Only <code>interface</code>{" "}
            supports merging across declarations.
          </li>
          <li>
            <strong>Use in Libraries:</strong> <code>interface</code> is often
            preferred in public APIs due to merging and extension capabilities.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* COMPARISON */}
        <Typography variant="h5" gutterBottom>
          🤔 When to Use Which?
        </Typography>

        <Typography paragraph>
          - Use <strong>interface</strong> when you are designing object shapes
          that need to be extended or implemented in classes.
          <br />- Use <strong>type alias</strong> when working with primitives,
          unions, tuples, or more complex transformations.
        </Typography>

        <CodeBlock
          code={`// Interface for object shape
interface Car {
make: string;
model: string;
}

// Type alias for unions
type Color = "red" | "blue" | "green";

// Type alias for tuples
type RGB = [number, number, number];`}
        />

        <Divider sx={{ my: 3 }} />

        {/* ADVANCED USAGE */}
        <Typography variant="h5" gutterBottom>
          🛠️ Extending Types and Interfaces
        </Typography>

        <Typography paragraph>
          Both interfaces and type aliases can be extended, but they use
          different syntax:
        </Typography>

        <CodeBlock
          code={`// Interface extending
interface Animal {
name: string;
}

interface Dog extends Animal {
breed: string;
}

// Type intersection
type Person = {
name: string;
};

type Employee = Person & {
employeeId: number;
};`}
        />

        <Divider sx={{ my: 3 }} />

        {/* SUMMARY */}
        <Typography variant="body2" color="text.secondary" mt={2}>
          🎯 <strong>Best Practice:</strong> Use <code>interface</code> for
          public-facing APIs or object shapes that require extensibility. Use{" "}
          <code>type</code> for unions, intersections, and advanced type
          compositions.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Enums (Numeric, String, and Const Enums)",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧭 Understanding Enums in TypeScript
        </Typography>

        <Typography paragraph>
          <strong>Enums</strong> (short for "enumerations") are a feature in
          TypeScript that allows us to define a set of named constants. They
          make code more readable and less error-prone, especially when working
          with sets of related values.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* NUMERIC ENUM */}
        <Typography variant="h5" gutterBottom>
          🔢 Numeric Enums
        </Typography>
        <Typography paragraph>
          These are the default enums in TypeScript. They assign
          auto-incremented numeric values starting from 0 unless otherwise
          specified.
        </Typography>

        <CodeBlock
          code={`// Numeric Enum: auto-incremented values
enum Direction {
Up,     // 0
Down,   // 1
Left,   // 2
Right   // 3
}

const move = (dir: Direction) => {
console.log(dir);
};

move(Direction.Left); // Output: 2`}
        />

        <Typography paragraph>
          You can also customize the starting index:
        </Typography>

        <CodeBlock
          code={`// Custom start value
enum StatusCode {
Success = 200,
NotFound = 404,
ServerError = 500
}

console.log(StatusCode.Success); // 200`}
        />

        <Divider sx={{ my: 3 }} />

        {/* STRING ENUM */}
        <Typography variant="h5" gutterBottom>
          🔤 String Enums
        </Typography>
        <Typography paragraph>
          In a <strong>String Enum</strong>, each member has to be initialized
          with a string literal. Useful for readability and debugging.
        </Typography>

        <CodeBlock
          code={`// String Enum
enum LogLevel {
Info = "INFO",
Warn = "WARN",
Error = "ERROR"
}

function log(level: LogLevel, message: string) {
console.log(\`[\${level}]: \${message}\`);
}

log(LogLevel.Warn, "This is a warning"); // [WARN]: This is a warning`}
        />

        <Divider sx={{ my: 3 }} />

        {/* CONST ENUM */}
        <Typography variant="h5" gutterBottom>
          ⚡ Const Enums
        </Typography>
        <Typography paragraph>
          <strong>Const Enums</strong> are a compile-time feature. They are
          fully inlined by the TypeScript compiler, making them more performant
          and reducing bundle size.
        </Typography>

        <CodeBlock
          code={`// Const Enum
const enum Sizes {
Small = 'S',
Medium = 'M',
Large = 'L'
}

const selectedSize = Sizes.Medium; // Directly inlined as 'M'
console.log(selectedSize);`}
        />

        <Typography paragraph>
          ⚠️ <strong>Note:</strong> Const enums can't be used with computed
          values or in environments where the TypeScript compiler isn't fully
          configured (e.g., Babel-only builds).
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* COMPARISON */}
        <Typography variant="h5" gutterBottom>
          🔍 Enum Comparison Summary
        </Typography>

        <ul>
          <li>
            <strong>Numeric Enums:</strong> Auto-incrementing numbers (default).
          </li>
          <li>
            <strong>String Enums:</strong> Better for readability and debugging.
          </li>
          <li>
            <strong>Const Enums:</strong> Performance-friendly with inlining at
            compile time.
          </li>
        </ul>

        <Typography paragraph>
          Use enums when you need a set of named constants, especially when
          values are grouped logically.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* BONUS: ENUM REVERSE MAPPING */}
        <Typography variant="h5" gutterBottom>
          🔁 Bonus: Reverse Mapping (only for Numeric Enums)
        </Typography>
        <Typography paragraph>
          Numeric enums support reverse mapping — you can get the name of the
          enum member from its value.
        </Typography>

        <CodeBlock
          code={`enum Color {
Red,
Green,
Blue
}

console.log(Color[0]); // Output: Red
console.log(Color.Red); // Output: 0`}
        />

        <Typography variant="body2" color="text.secondary" mt={2}>
          🎯 <strong>Pro Tip:</strong> Prefer <code>string enums</code> for
          clarity and debugging, and use <code>const enums</code> when
          performance is a concern and you control the compilation pipeline.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Type Assertions.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🎭 Type Assertions in TypeScript
        </Typography>

        <Typography paragraph>
          <strong>Type Assertion</strong> in TypeScript allows you to override
          the inferred type and tell the compiler, "I know what I'm doing." It's
          like casting in other languages.
        </Typography>

        <Typography paragraph>
          This doesn't perform any runtime conversion. It's purely used by the
          compiler for type checking.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 🔧 SYNTAX */}
        <Typography variant="h5" gutterBottom>
          🔧 Syntax of Type Assertions
        </Typography>

        <Typography paragraph>
          TypeScript provides two ways to assert a type:
        </Typography>

        <CodeBlock
          code={`// Angle-bracket syntax
let str = <string>someValue;

// 'as' syntax (preferred in JSX environments)
let str = someValue as string;`}
        />

        <Typography paragraph>
          ✅ Best practice: Use the <code>as</code> syntax, especially in
          React/JSX, where angle brackets can be confused with HTML tags.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 🧠 USE CASE EXAMPLES */}
        <Typography variant="h5" gutterBottom>
          🧠 Use Case 1: Narrowing from Union Types
        </Typography>

        <Typography paragraph>
          You can tell TypeScript exactly which type to use from a union:
        </Typography>

        <CodeBlock
          code={`function getLength(input: string | number): number {
if ((input as string).length !== undefined) {
  return (input as string).length; // ✅ assert as string
}
return input.toString().length;
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Use Case 2: Accessing DOM Elements
        </Typography>

        <Typography paragraph>
          TypeScript doesn’t know what kind of element{" "}
          <code>getElementById</code> returns, so assertions help clarify:
        </Typography>

        <CodeBlock
          code={`const input = document.getElementById("username") as HTMLInputElement;
input.value = "JohnDoe"; // ✅ value is accessible now`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Use Case 3: Asserting to a More Specific Type
        </Typography>

        <CodeBlock
          code={`type Animal = { name: string };
type Dog = { name: string; bark: () => void };

const pet = { name: "Buddy", bark: () => console.log("Woof!") } as Dog;
pet.bark();`}
        />

        <Typography paragraph>
          Even though the object matches the structure, TypeScript needs an
          assertion to treat it explicitly as a <code>Dog</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ What to Avoid
        </Typography>

        <Typography paragraph>
          Don't use type assertions as a way to escape errors or silence
          TypeScript. You should only use them when you're sure about the type.
        </Typography>

        <CodeBlock
          code={`// ❌ Dangerous - forces wrong type
const num = "123" as unknown as number; // double assertion - avoid unless necessary`}
        />

        <Typography paragraph>
          Instead, use type guards and proper structure validation where
          possible.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Pro Tips
        </Typography>

        <ul>
          <li>
            Use assertions when you're interfacing with non-TypeScript code like
            DOM or JSON APIs.
          </li>
          <li>
            Use <code>as const</code> to assert literal types.
          </li>
          <li>
            Use assertions wisely and sparingly to avoid false assumptions.
          </li>
        </ul>

        <CodeBlock
          code={`// Literal type assertion
const direction = "left" as const; // type: "left" not string`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={2}>
          🎯 <strong>Summary:</strong> Type Assertions give you manual control
          over types, enabling you to override inference when you're certain.
          Use with confidence — but not blindly.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Non-null assertion (!)",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          ❗ Non-null Assertion Operator in TypeScript
        </Typography>

        <Typography paragraph>
          The <strong>non-null assertion operator</strong> (<code>!</code>)
          tells the TypeScript compiler that a variable is not <code>null</code>{" "}
          or <code>undefined</code>, even if the type checker can't verify it at
          compile time.
        </Typography>

        <Typography paragraph>
          It's your way of saying: “Trust me, I know this value won't be null or
          undefined at runtime.”
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 🎯 Syntax */}
        <Typography variant="h5" gutterBottom>
          🎯 Syntax
        </Typography>

        <CodeBlock
          code={`let myVar: string | null = getSomeString();

// ❗ Tell TypeScript “it's definitely not null”
console.log(myVar!.length); // Using the ! operator`}
        />

        <Typography paragraph>
          Without <code>!</code>, TypeScript would raise an error because{" "}
          <code>myVar</code> might be <code>null</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 📦 Use Case 1 */}
        <Typography variant="h5" gutterBottom>
          📦 Use Case 1: DOM Manipulation
        </Typography>

        <Typography paragraph>
          When using <code>getElementById</code>, TypeScript knows it might
          return <code>null</code>. Use <code>!</code> when you're sure the
          element exists:
        </Typography>

        <CodeBlock
          code={`const input = document.getElementById("username") as HTMLInputElement;

// ❗ Assert that 'input' is not null
input!.focus();`}
        />

        <Typography paragraph>
          ⚠️ If the element doesn't actually exist, this will throw a runtime
          error. Make sure you're **100% sure** it's present!
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 🧠 Use Case 2 */}
        <Typography variant="h5" gutterBottom>
          🧠 Use Case 2: Working with Optional Values
        </Typography>

        <Typography paragraph>
          When TypeScript infers that a variable can be <code>undefined</code>,
          but you logically know it's initialized:
        </Typography>

        <CodeBlock
          code={`let userName: string | undefined;

initializeUser();

// ❗ We know it's set after init
console.log(userName!.toUpperCase());

function initializeUser() {
userName = "Alice";
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* ❌ What to Avoid */}
        <Typography variant="h5" gutterBottom>
          ❌ What to Avoid
        </Typography>

        <Typography paragraph>
          Don’t use <code>!</code> to **suppress legitimate compiler warnings**.
          Use proper type checks instead.
        </Typography>

        <CodeBlock
          code={`function printLength(str: string | null) {
// ❌ Dangerous: str might be null!
console.log(str!.length);
}

// ✅ Better way
function safePrintLength(str: string | null) {
if (str !== null) {
  console.log(str.length);
}
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* 💡 Pro Tips */}
        <Typography variant="h5" gutterBottom>
          💡 Pro Tips
        </Typography>

        <ul>
          <li>
            Use <code>!</code> only when you're absolutely sure the value can't
            be <code>null</code> or <code>undefined</code>.
          </li>
          <li>
            Consider <strong>optional chaining</strong> (<code>?.</code>) or{" "}
            <strong>nullish coalescing</strong> (<code>??</code>) instead for
            safer code.
          </li>
          <li>
            If unsure, use a runtime check: <code>if (value !== null)</code>.
          </li>
        </ul>

        <CodeBlock
          code={`// Optional chaining avoids errors
console.log(user?.profile?.name);

// Nullish coalescing provides fallback
const name = userName ?? "Guest";`}
        />

        <Divider sx={{ my: 3 }} />

        {/* 📌 Summary */}
        <Typography variant="body2" color="text.secondary" mt={2}>
          📌 <strong>Summary:</strong> The non-null assertion operator is a
          powerful tool, but should be used with care. Use it only when you're
          absolutely sure the value won’t be <code>null</code> or{" "}
          <code>undefined</code>.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      'Explain Literal Types "success" | "error", Discriminated Unions etc.',
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔤 Literal Types & Discriminated Unions in TypeScript
        </Typography>

        <Typography paragraph>
          TypeScript provides powerful ways to express precise types using{" "}
          <strong>Literal Types</strong> and{" "}
          <strong>Discriminated Unions</strong>. These are especially useful in
          situations where you want to restrict values to specific constants or
          build type-safe unions with clear branching logic.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 What are Literal Types?
        </Typography>

        <Typography paragraph>
          A literal type is a type that allows a variable to have only one exact
          value. They are usually used in union types to represent a limited set
          of allowed values.
        </Typography>

        <CodeBlock
          code={`type Status = "success" | "error" | "loading";

function showMessage(status: Status) {
if (status === "success") {
  console.log("✅ Operation was successful.");
} else if (status === "error") {
  console.log("❌ There was an error.");
} else {
  console.log("⏳ Loading...");
}
}

showMessage("success"); // ✅ Valid
showMessage("pending"); // ❌ Error: Argument of type '"pending"' is not assignable to parameter of type 'Status'`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔀 Discriminated Unions
        </Typography>

        <Typography paragraph>
          A <strong>Discriminated Union</strong> (also known as tagged union or
          algebraic data type) is a pattern that combines union types and
          literal types to build flexible but type-safe structures. All members
          of the union have a common "discriminant" property.
        </Typography>

        <CodeBlock
          code={`// ✅ Define a discriminated union using a common 'type' property
type Shape =
| { type: "circle"; radius: number }
| { type: "square"; side: number }
| { type: "rectangle"; length: number; width: number };

function getArea(shape: Shape): number {
switch (shape.type) {
  case "circle":
    return Math.PI * shape.radius * shape.radius;

  case "square":
    return shape.side * shape.side;

  case "rectangle":
    return shape.length * shape.width;

  // No need for default: TypeScript ensures all cases are covered
}
}

// Example usage:
getArea({ type: "circle", radius: 10 }); // ✅ Works fine
getArea({ type: "triangle", base: 5, height: 10 }); // ❌ Error`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Why Use Discriminated Unions?
        </Typography>

        <ul>
          <li>
            Enables clear and type-safe branching in functions (with exhaustive
            switch).
          </li>
          <li>
            Helps TypeScript narrow down object shape based on a known property.
          </li>
          <li>Makes refactoring and maintenance easier.</li>
          <li>
            Prevents runtime errors by catching invalid structures at compile
            time.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✨ Best Practices
        </Typography>

        <ul>
          <li>
            Always use a common discriminant (like <code>type</code> or{" "}
            <code>kind</code>) for union types.
          </li>
          <li>
            Use <code>never</code> in the <code>default</code> clause to enforce
            exhaustiveness:
          </li>
        </ul>

        <CodeBlock
          code={`function handleShape(shape: Shape) {
switch (shape.type) {
  case "circle":
    return shape.radius;
  case "square":
    return shape.side;
  case "rectangle":
    return shape.length + shape.width;
  default:
    const _exhaustiveCheck: never = shape; // 🔥 Type error if a new shape is added and not handled
    return _exhaustiveCheck;
}
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={2}>
          Pro Tip: You can use enums as discriminants too, but string literal
          unions are often simpler and more readable.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Tuples.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🎯 Understanding Tuples in TypeScript
        </Typography>

        <Typography paragraph>
          A <strong>Tuple</strong> in TypeScript is a special kind of array that
          has a fixed number of elements, where each element can have a
          different type. They are useful when you want to represent an ordered
          collection of values with known types and lengths.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Basic Syntax of Tuples
        </Typography>

        <Typography paragraph>
          You define a tuple using square brackets with the specific types in
          order:
        </Typography>

        <CodeBlock
          code={`// ✅ A tuple with exactly 2 elements: string and number
let user: [string, number] = ["Alice", 30];

// Correct usage
console.log(user[0].toUpperCase()); // ALICE
console.log(user[1].toFixed(2));    // 30.00

// ❌ Incorrect order or type causes error
let wrongUser: [string, number] = [30, "Alice"]; // Error
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✍️ Tuple With Optional Elements
        </Typography>

        <Typography paragraph>
          You can also make some tuple elements optional using the{" "}
          <code>?</code> syntax:
        </Typography>

        <CodeBlock
          code={`let coordinates: [number, number?, number?];

coordinates = [10];         // ✅ Valid
coordinates = [10, 20];     // ✅ Valid
coordinates = [10, 20, 30]; // ✅ Valid
coordinates = [];           // ❌ Error: First element is required
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Tuple With Rest Elements
        </Typography>

        <Typography paragraph>
          You can use rest elements in tuples to allow a fixed beginning and
          variable-length tail:
        </Typography>

        <CodeBlock
          code={`// Starts with a string, followed by any number of numbers
let logEntry: [string, ...number[]];

logEntry = ["Page Load", 200, 100, 300]; // ✅ Valid
logEntry = [404]; // ❌ Error: first element must be string
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Why Use Tuples?
        </Typography>

        <ul>
          <li>Better type safety for functions that return multiple values.</li>
          <li>
            Great for representing fixed-length arrays with different types.
          </li>
          <li>Improves readability and self-documentation of code.</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 Tuples vs Arrays
        </Typography>

        <CodeBlock
          code={`// Array: all elements must be of the same type
let fruits: string[] = ["apple", "banana", "cherry"];

// Tuple: fixed length and types
let fruitInfo: [string, number] = ["apple", 3];`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Example: Returning Multiple Values with Tuples
        </Typography>

        <Typography paragraph>
          Tuples are ideal for returning multiple values of different types from
          a function:
        </Typography>

        <CodeBlock
          code={`function getUser(): [string, number] {
return ["Alice", 30];
}

const [name, age] = getUser();
console.log(name); // Alice
console.log(age);  // 30`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={2}>
          Pro Tip: Tuples are immutable by design, but if you push new elements
          into a tuple, it might still be allowed due to JavaScript behavior.
          TypeScript 4.0+ introduces better checks to catch this.
        </Typography>
      </Box>
    ),
  },
];
