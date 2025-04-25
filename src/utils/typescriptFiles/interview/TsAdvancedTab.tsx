import { Box, Divider, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const TYPESCRIPT_ADVANCED_DATA = [
  {
    heading: "Explain generics in typescript.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📦 Generics in TypeScript
        </Typography>

        <Typography paragraph>
          Generics provide a way to create reusable components that work with a
          variety of types rather than a single one. They allow functions,
          interfaces, and classes to operate on different data types without
          losing the information about those types.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Why Use Generics?
        </Typography>

        <ul>
          <li>To build reusable and type-safe components/functions.</li>
          <li>To avoid duplicating code for different types.</li>
          <li>
            To retain type information and improve IDE support (autocomplete,
            inference).
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✍️ Basic Generic Function
        </Typography>

        <Typography paragraph>
          This function returns whatever is passed to it, but maintains the
          type:
        </Typography>

        <CodeBlock
          code={`function identity<T>(value: T): T {
return value;
}

const num = identity<number>(42);       // num: number
const str = identity<string>("Hello");  // str: string`}
        />

        <Typography paragraph>
          The <code>&lt;T&gt;</code> is a type variable — it acts as a
          placeholder for a type that will be specified when the function is
          used.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Generic Interface Example
        </Typography>

        <CodeBlock
          code={`interface ApiResponse<T> {
data: T;
success: boolean;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
data: { id: 1, name: "Alice" },
success: true
};`}
        />

        <Typography paragraph>
          This keeps your API response type-safe and flexible!
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ Generic Class Example
        </Typography>

        <CodeBlock
          code={`class Box<T> {
contents: T;
constructor(value: T) {
  this.contents = value;
}
}

const stringBox = new Box<string>("books");
const numberBox = new Box<number>(123);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔐 Generic Constraints
        </Typography>

        <Typography paragraph>
          You can restrict generics to specific shapes using constraints:
        </Typography>

        <CodeBlock
          code={`interface Lengthwise {
length: number;
}

function logLength<T extends Lengthwise>(item: T): T {
console.log(item.length);
return item;
}

logLength("Hello"); // ✅
logLength([1, 2, 3]); // ✅
logLength(123);      // ❌ Error: number doesn't have a 'length' property`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🌐 Default Generic Types
        </Typography>

        <Typography paragraph>
          You can provide a default type if none is passed:
        </Typography>

        <CodeBlock
          code={`function getFirst<T = string>(items: T[]): T {
return items[0];
}

const result = getFirst(["A", "B"]); // result is string`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={2}>
          Pro Tip: You can also use multiple generic parameters like{" "}
          <code>&lt;T, U&gt;</code> when working with complex scenarios like
          mapping or transformations.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Mapped Type in typescript.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔁 What Are Mapped Types in TypeScript?
        </Typography>

        <Typography paragraph>
          A <strong>Mapped Type</strong> lets you create new types based on
          existing ones by transforming their properties. It's powerful for
          building flexible, reusable type systems in TypeScript.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Basic Syntax of a Mapped Type
        </Typography>

        <Typography paragraph>
          Mapped types use the `in` keyword to iterate over keys from another
          type. Here's a simple example:
        </Typography>

        <CodeBlock
          code={`// Define a base interface
interface Person {
  name: string;
  age: number;
}

// Make all properties optional using a mapped type
type PartialPerson = {
  [K in keyof Person]?: Person[K];
};

// Equivalent to:
// type PartialPerson = {
//   name?: string;
//   age?: number;
// }
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Common Use Cases for Mapped Types
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          1. Creating Readonly Types
        </Typography>
        <CodeBlock
          code={`type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

// Equivalent to:
// type ReadonlyPerson = {
//   readonly name: string;
//   readonly age: number;
// }
`}
        />

        <Typography variant="subtitle1" gutterBottom>
          2. Creating Nullable Types
        </Typography>
        <CodeBlock
          code={`type NullablePerson = {
  [K in keyof Person]: Person[K] | null;
};

// All properties can now also be null
`}
        />

        <Typography variant="subtitle1" gutterBottom>
          3. Renaming or Transforming Keys
        </Typography>
        <Typography paragraph>
          You can combine mapped types with `as` to transform key names.
        </Typography>
        <CodeBlock
          code={`type PrefixPerson = {
  [K in keyof Person as \`person_\${K}\`]: Person[K];
};

// Result:
// type PrefixPerson = {
//   person_name: string;
//   person_age: number;
// }
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Bonus: Built-in Utility Types Use Mapped Types
        </Typography>

        <Typography paragraph>
          TypeScript has several built-in utility types based on mapped types:
        </Typography>

        <CodeBlock
          code={`Partial<T>       // Makes all properties optional
Required<T>      // Makes all properties required
Readonly<T>      // Makes all properties readonly
Record<K, T>     // Creates an object type with keys K and values T
Pick<T, K>       // Picks a subset of properties
Omit<T, K>       // Omits specific properties
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Why Use Mapped Types?
        </Typography>

        <ul>
          <li>✅ DRY code — generate multiple types from one base.</li>
          <li>✅ Enhances maintainability and type safety.</li>
          <li>✅ Enables advanced metaprogramming in TypeScript.</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Real-World Example
        </Typography>

        <Typography paragraph>
          Here's how you could make a generic function that enforces readonly
          fields at runtime:
        </Typography>

        <CodeBlock
          code={`type ReadonlyFields<T> = {
  readonly [K in keyof T]: T[K];
};

function freezeObject<T>(obj: T): ReadonlyFields<T> {
  return Object.freeze(obj);
}

const user = freezeObject({ name: "Alice", age: 30 });
// user.name = "Bob"; ❌ Error: Cannot assign to 'name' because it is a read-only property.
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={2}>
          Mapped types form the core of advanced TypeScript types. Combine them
          with conditional types, generics, and utility types to unlock
          expressive, powerful type systems.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Conditional Types.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          ⚖️ What are Conditional Types in TypeScript?
        </Typography>

        <Typography paragraph>
          <strong>Conditional Types</strong> allow you to create types that
          depend on a condition. They work similarly to ternary operators in
          JavaScript but are used for types at compile time.
        </Typography>

        <Typography paragraph>
          The syntax is: <code>T extends U ? X : Y</code>. If type{" "}
          <code>T</code> is assignable to <code>U</code>, the type will resolve
          to <code>X</code>, otherwise <code>Y</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Basic Syntax Example
        </Typography>

        <CodeBlock
          code={`// If T is assignable to string, return 'Yes', otherwise 'No'
type IsString<T> = T extends string ? "Yes" : "No";

// Usage
type A = IsString<string>;  // "Yes"
type B = IsString<number>;  // "No"`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Use with Generics
        </Typography>

        <Typography paragraph>
          Conditional types are often used with generics to create reusable,
          dynamic types based on passed type parameters.
        </Typography>

        <CodeBlock
          code={`// Get the return type of a function
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Usage
type Func = () => number;
type Result = MyReturnType<Func>; // number`}
        />

        <Typography paragraph>
          👉 <code>infer R</code> is a keyword used inside conditional types to
          "infer" a type variable.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Practical Example
        </Typography>

        <Typography paragraph>
          Create a utility that removes <code>null</code> and{" "}
          <code>undefined</code> from a type.
        </Typography>

        <CodeBlock
          code={`type NonNullable<T> = T extends null | undefined ? never : T;

// Usage
type Clean = NonNullable<string | null | undefined>; // string`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Conditional Types in Discriminated Unions
        </Typography>

        <Typography paragraph>
          Conditional types become very useful when dealing with discriminated
          unions to ensure type narrowing is safe.
        </Typography>

        <CodeBlock
          code={`type Shape = { kind: "circle"; radius: number } 
            | { kind: "square"; side: number };

type Area<T> = T extends { kind: "circle"; radius: number }
  ? number // Assume area = π * r²
  : T extends { kind: "square"; side: number }
  ? number // area = side²
  : never;

type CircleArea = Area<{ kind: "circle"; radius: 10 }>; // number
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Combining Conditional Types with Mapped Types
        </Typography>

        <CodeBlock
          code={`type OnlyStrings<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

// Usage
type Example = {
  name: string;
  age: number;
  email: string;
};

type StringKeys = OnlyStrings<Example>; // "name" | "email"
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Why Use Conditional Types?
        </Typography>

        <ul>
          <li>✅ Helps write reusable and type-safe utility types</li>
          <li>✅ Enables advanced transformations of types</li>
          <li>✅ Works great with generics, unions, and `infer`</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={2}>
          Pro Tip: Conditional types are evaluated distributively over unions by
          default. That means <code>T extends U ? X : Y</code> distributes
          across
          <code>T = A | B</code> as{" "}
          <code>(A extends U ? X : Y) | (B extends U ? X : Y)</code>.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Keyof Type Operator.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🗝️ What is the <code>keyof</code> Type Operator in TypeScript?
        </Typography>

        <Typography paragraph>
          The{" "}
          <strong>
            <code>keyof</code>
          </strong>{" "}
          operator in TypeScript is used to get a union of all property names
          (keys) of a given type. It's extremely useful for working with generic
          types and building flexible utility types.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Basic Example of <code>keyof</code>
        </Typography>

        <CodeBlock
          code={`type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; 
// "name" | "age" — a union of keys`}
        />

        <Typography paragraph>
          👉 This means <code>keyof Person</code> results in a **union** of the
          keys: <code>"name" | "age"</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Using <code>keyof</code> with Generics
        </Typography>

        <Typography paragraph>
          You can use <code>keyof</code> dynamically with generics to build
          reusable utilities:
        </Typography>

        <CodeBlock
          code={`function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]; // safe access with full type support
}

// Usage
const person = { name: "Alice", age: 30 };
const age = getProperty(person, "age"); // type is number`}
        />

        <Typography paragraph>
          ✅ This ensures that only valid keys from the object can be passed,
          and the return type is inferred correctly.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Using <code>keyof</code> with Mapped Types
        </Typography>

        <Typography paragraph>
          Combine <code>keyof</code> with <strong>Mapped Types</strong> to
          transform all properties of a type.
        </Typography>

        <CodeBlock
          code={`type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Dog = { name: string; breed: string };
type ReadOnlyDog = ReadOnly<Dog>;
// Equivalent to:
// {
//   readonly name: string;
//   readonly breed: string;
// }`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚖️ <code>keyof</code> with Index Signatures
        </Typography>

        <Typography paragraph>
          When using index signatures, <code>keyof</code> can return{" "}
          <code>string</code> or <code>number</code>.
        </Typography>

        <CodeBlock
          code={`type ScoreMap = {
  [key: string]: number;
};

type ScoreKey = keyof ScoreMap;
// string | number — because object keys in JS are coerced`}
        />

        <Typography paragraph>
          👉 JavaScript coerces object keys to strings, but TypeScript may infer{" "}
          <code>string | number</code> to cover all access patterns.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Real World Use Case
        </Typography>

        <CodeBlock
          code={`function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map(item => item[key]);
}

const people = [
  { name: "Bob", age: 40 },
  { name: "Sue", age: 35 }
];

const names = pluck(people, "name"); // type: string[]
`}
        />

        <Typography paragraph>
          📌 The function <code>pluck</code> uses <code>keyof</code> to ensure
          the key passed is valid and safely returns an array of property
          values.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Summary: Why <code>keyof</code> Matters
        </Typography>

        <ul>
          <li>🎯 Enables strict and safe key access in generics</li>
          <li>
            ⚙️ Powers utility types like <code>Pick</code>, <code>Partial</code>
            , <code>Record</code>
          </li>
          <li>
            🔄 Used with <code>in</code> and mapped types for full type
            manipulation
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={2}>
          Pro Tip: You can combine <code>keyof</code> with <code>typeof</code>{" "}
          to extract keys from actual objects as types:
          <br />
          <code>type Keys = keyof typeof someObject</code>
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Indexed Access Types.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧩 Indexed Access Types in TypeScript
        </Typography>

        <Typography paragraph>
          Indexed access types allow you to look up the type of a specific
          property on another type. It’s like using an index to access the value
          of a key in an object, but at the type level.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Basic Syntax
        </Typography>

        <CodeBlock
          code={`type Person = {
  name: string;
  age: number;
};

// Get the type of the 'name' property

type NameType = Person["name"]; // string

// Get the type of the 'age' property

type AgeType = Person["age"]; // number`}
        />

        <Typography paragraph>
          🧠 This feature is useful when you want to extract types dynamically
          from a known structure.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Dynamic Property Access with <code>keyof</code>
        </Typography>

        <CodeBlock
          code={`type Person = {
  name: string;
  age: number;
};

type PersonProperty = keyof Person; // "name" | "age"

// Use union of keys to extract multiple types

type Values = Person[PersonProperty]; // string | number`}
        />

        <Typography paragraph>
          ✅ This is powerful for creating utility types that can adapt based on
          object structures.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Using Indexed Access with Arrays
        </Typography>

        <CodeBlock
          code={`const colors = ["red", "green", "blue"] as const;

type Color = typeof colors[number];
// "red" | "green" | "blue"`}
        />

        <Typography paragraph>
          ✨ This is useful to extract the union of all elements in an array.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Real World Usage Example
        </Typography>

        <CodeBlock
          code={`function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  username: "dev_guy",
  isAdmin: true,
};

const username = getProperty(user, "username"); // Type: string
const adminStatus = getProperty(user, "isAdmin"); // Type: boolean`}
        />

        <Typography paragraph>
          💡 <strong>Why it matters:</strong> This ensures you return the exact
          type of the property accessed from an object — a form of safe
          reflection at the type level.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Summary
        </Typography>

        <ul>
          <li>🔐 Extract types from object properties precisely</li>
          <li>
            ⚙️ Works well with <code>keyof</code> and generics
          </li>
          <li>📦 Enables utility types and advanced inference logic</li>
        </ul>

        <Typography variant="body2" color="text.secondary" mt={2}>
          Pro Tip: Combine with conditional types for even more power in utility
          types.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "Explain Record, Partial, Required, Omit, Pick, Exclude, Extract, NonNullable, ReturnType, Parameters.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧰 Utility Types in TypeScript
        </Typography>

        <Typography paragraph>
          TypeScript provides several built-in utility types to facilitate
          common type transformations. These utilities help simplify complex
          type manipulations and enforce stricter typings.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Record */}
        <Typography variant="h5" gutterBottom>
          📘 Record
        </Typography>
        <Typography paragraph>
          The <code>Record&lt;Keys, Type&gt;</code> utility constructs an object
          type whose property keys are <code>Keys</code>
          and property values are <code>Type</code>.
        </Typography>
        <CodeBlock
          code={`type Role = 'admin' | 'user';
const permissions: Record<Role, string[]> = {
admin: ['read', 'write', 'delete'],
user: ['read']
};`}
        />

        {/* Partial */}
        <Typography variant="h5" gutterBottom>
          ✂️ Partial
        </Typography>
        <Typography paragraph>
          <code>Partial&lt;T&gt;</code> makes all properties in <code>T</code>{" "}
          optional.
        </Typography>
        <CodeBlock
          code={`interface User {
name: string;
age: number;
}

const updateUser = (id: string, user: Partial<User>) => {
// user may have only a subset of User properties
};`}
        />

        {/* Required */}
        <Typography variant="h5" gutterBottom>
          ✅ Required
        </Typography>
        <Typography paragraph>
          <code>Required&lt;T&gt;</code> makes all properties in <code>T</code>{" "}
          required.
        </Typography>
        <CodeBlock
          code={`interface Config {
url?: string;
timeout?: number;
}

const loadConfig = (cfg: Required<Config>) => {
// All props are guaranteed to be present
};`}
        />

        {/* Omit */}
        <Typography variant="h5" gutterBottom>
          🚫 Omit
        </Typography>
        <Typography paragraph>
          <code>Omit&lt;T, K&gt;</code> creates a type by removing{" "}
          <code>K</code> properties from <code>T</code>.
        </Typography>
        <CodeBlock
          code={`interface Post {
id: string;
title: string;
body: string;
}

type PostPreview = Omit<Post, 'body'>;`}
        />

        {/* Pick */}
        <Typography variant="h5" gutterBottom>
          ✅ Pick
        </Typography>
        <Typography paragraph>
          <code>Pick&lt;T, K&gt;</code> constructs a type by picking{" "}
          <code>K</code> properties from <code>T</code>.
        </Typography>
        <CodeBlock code={`type UserPreview = Pick<User, 'name'>;`} />

        {/* Exclude */}
        <Typography variant="h5" gutterBottom>
          ❌ Exclude
        </Typography>
        <Typography paragraph>
          <code>Exclude&lt;T, U&gt;</code> excludes from <code>T</code> those
          types that are assignable to <code>U</code>.
        </Typography>
        <CodeBlock
          code={`type Status = 'success' | 'error' | 'pending';
type NonPending = Exclude<Status, 'pending'>;`}
        />

        {/* Extract */}
        <Typography variant="h5" gutterBottom>
          ✅ Extract
        </Typography>
        <Typography paragraph>
          <code>Extract&lt;T, U&gt;</code> extracts from <code>T</code> those
          types that are assignable to <code>U</code>.
        </Typography>
        <CodeBlock
          code={`type Status = 'success' | 'error' | 'pending';
type FinalStatus = Extract<Status, 'success' | 'error'>;`}
        />

        {/* NonNullable */}
        <Typography variant="h5" gutterBottom>
          🚫 NonNullable
        </Typography>
        <Typography paragraph>
          <code>NonNullable&lt;T&gt;</code> removes <code>null</code> and{" "}
          <code>undefined</code> from <code>T</code>.
        </Typography>
        <CodeBlock
          code={`type Input = string | null | undefined;
type ValidInput = NonNullable<Input>; // string`}
        />

        {/* ReturnType */}
        <Typography variant="h5" gutterBottom>
          🔁 ReturnType
        </Typography>
        <Typography paragraph>
          <code>ReturnType&lt;T&gt;</code> gets the return type of a function
          type.
        </Typography>
        <CodeBlock
          code={`function getUser() {
return { name: 'Alice', age: 25 };
}

type User = ReturnType<typeof getUser>;`}
        />

        {/* Parameters */}
        <Typography variant="h5" gutterBottom>
          📥 Parameters
        </Typography>
        <Typography paragraph>
          <code>Parameters&lt;T&gt;</code> gets the parameter types of a
          function type as a tuple.
        </Typography>
        <CodeBlock
          code={`function greet(name: string, age: number) {}

type GreetParams = Parameters<typeof greet>; // [string, number]`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          These utility types help build more maintainable and type-safe
          TypeScript applications. 🔒
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Utility Types Deep Dive.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧰 Utility Types Deep Dive in TypeScript
        </Typography>

        <Typography paragraph>
          TypeScript provides a set of built-in utility types to facilitate
          transformations on types. These utilities help manipulate object types
          and infer new types while ensuring type safety.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Record */}
        <Typography variant="h5" gutterBottom>
          <CodeBlock code={"📘 Record<K, T>"} />
        </Typography>
        <Typography paragraph>
          Constructs an object type whose property keys are `K` and values are
          `T`.
        </Typography>
        <CodeBlock
          code={`type Roles = 'admin' | 'editor' | 'viewer';
type RolePermissions = Record<Roles, string[]>;

const permissions: RolePermissions = {
admin: ['create', 'read', 'update', 'delete'],
editor: ['read', 'update'],
viewer: ['read'],
};`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Partial */}
        <Typography variant="h5" gutterBottom>
          <CodeBlock code={"✂️ Partial<T>"} />
        </Typography>
        <Typography paragraph>
          Constructs a type with all properties of T set to optional.
        </Typography>
        <CodeBlock
          code={`interface User {
id: number;
name: string;
email: string;
}

const updateUser = (id: number, userData: Partial<User>) => {
// Only some fields may be updated
};`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Required */}
        <Typography variant="h5" gutterBottom>
          <CodeBlock code={"✅ Required<T>"} />
        </Typography>
        <Typography paragraph>
          Constructs a type with all properties of T set to required.
        </Typography>
        <CodeBlock
          code={`interface Config {
apiKey?: string;
baseUrl?: string;
}

type StrictConfig = Required<Config>;`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Omit */}
        <Typography variant="h5" gutterBottom>
          <CodeBlock code={"🧽 Omit<T, K>"} />
        </Typography>
        <Typography paragraph>
          Constructs a type by removing keys K from type T.
        </Typography>
        <CodeBlock
          code={`interface Post {
id: number;
title: string;
content: string;
author: string;
}

type PostPreview = Omit<Post, 'content'>;`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Pick */}
        <Typography variant="h5" gutterBottom>
          <CodeBlock code={"🎯 Pick<T, K>"} />
        </Typography>
        <Typography paragraph>
          Constructs a type by picking keys K from type T.
        </Typography>
        <CodeBlock code={`type PostMeta = Pick<Post, 'id' | 'title'>;`} />

        <Divider sx={{ my: 3 }} />

        {/* Exclude */}
        <Typography variant="h5" gutterBottom>
          <CodeBlock code={"🚫 Exclude<T, U>"} />
        </Typography>
        <Typography paragraph>
          Constructs a type by excluding from T all union members that are
          assignable to U.
        </Typography>
        <CodeBlock
          code={`type Status = 'success' | 'error' | 'loading';
type NonLoadingStatus = Exclude<Status, 'loading'>;`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Extract */}
        <Typography variant="h5" gutterBottom>
          <CodeBlock code={"✅ Extract<T, U>"} />
        </Typography>
        <Typography paragraph>
          Constructs a type by extracting from T all union members that are
          assignable to U.
        </Typography>
        <CodeBlock
          code={`type EventType = 'click' | 'scroll' | 'mousemove';
type UIEvent = Extract<EventType, 'click' | 'scroll'>;`}
        />

        <Divider sx={{ my: 3 }} />

        {/* NonNullable */}
        <Typography variant="h5" gutterBottom>
          <CodeBlock code={"🚫 NonNullable<T>"} />
        </Typography>
        <Typography paragraph>
          Constructs a type by excluding `null` and `undefined` from T.
        </Typography>
        <CodeBlock
          code={`type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>;`}
        />

        <Divider sx={{ my: 3 }} />

        {/* ReturnType */}
        <Typography variant="h5" gutterBottom>
          <CodeBlock code={"🔁 ReturnType<T>"} />
        </Typography>
        <Typography paragraph>
          Constructs a type consisting of the return type of function T.
        </Typography>
        <CodeBlock
          code={`function getUser() {
return { id: 1, name: 'John' };
}

type User = ReturnType<typeof getUser>;`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Parameters */}
        <Typography variant="h5" gutterBottom>
          <CodeBlock code={"📦 Parameters<T>"} />
        </Typography>
        <Typography paragraph>
          Constructs a tuple type from the parameters of function type T.
        </Typography>
        <CodeBlock
          code={`function greet(name: string, age: number) {}

type GreetParams = Parameters<typeof greet>; // [string, number]`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={2}>
          Pro Tip: Mastering utility types allows you to create more concise,
          maintainable, and type-safe applications by manipulating complex
          object types with ease.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Infer Keyword.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧠 Understanding <code>infer</code> Keyword in TypeScript
        </Typography>

        <Typography paragraph>
          The <code>infer</code> keyword in TypeScript is used within
          conditional types to infer (extract) a type inside a complex type
          structure. It's particularly useful when you want to "pull out" a type
          from a type expression.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Syntax
        </Typography>
        <CodeBlock
          code={`type SomeType<T> = T extends SomeStructure<infer U> ? U : never;`}
        />

        <Typography paragraph>
          - The <code>infer U</code> part tells TypeScript: "If <code>T</code>{" "}
          matches a structure like <code>SomeStructure&lt;U&gt;</code>, extract{" "}
          <code>U</code>."
          <br />- If the type doesn't match, it results in <code>never</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Practical Example 1: Extracting Return Type
        </Typography>
        <CodeBlock
          code={`// Custom ReturnType using infer
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Sample function
const greet = () => "Hello!";

// Using custom MyReturnType
type GreetReturn = MyReturnType<typeof greet>; // "Hello!"`}
        />

        <Typography paragraph>
          In this example, <code>infer R</code> grabs the return type of the
          function, just like the built-in <code>ReturnType</code> utility type.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Practical Example 2: Extracting Array Element Type
        </Typography>
        <CodeBlock
          code={`// Custom Array Element type
type ElementType<T> = T extends (infer U)[] ? U : never;

type StrElement = ElementType<string[]>;  // string
type NumElement = ElementType<number[]>;  // number`}
        />

        <Typography paragraph>
          - If <code>T</code> is an array, <code>infer U</code> will pull out
          the element type.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Practical Example 3: Extracting Promise Resolved Type
        </Typography>
        <CodeBlock
          code={`// Extracts resolved type from Promise
type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;

type A = UnwrapPromise<Promise<string>>;  // string
type B = UnwrapPromise<number>;           // number (falls back to T)`}
        />

        <Typography paragraph>
          - If a value is a <code>Promise</code>, <code>infer</code> helps
          unwrap the resolved value.
          <br />- If not, the fallback is the original type.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Best Practices & Notes
        </Typography>
        <ul>
          <li>
            Use <code>infer</code> only inside conditional types.
          </li>
          <li>
            You can only infer one type at a time — nesting is allowed but can
            become complex.
          </li>
          <li>
            Combine with <code>extends</code>, <code>keyof</code>, and{" "}
            <code>infer</code> to build powerful utility types.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" color="text.secondary">
          Pro Tip: You can use <code>infer</code> in combination with mapped
          types and recursive types to build your own versions of{" "}
          <code>ReturnType</code>, <code>Parameters</code>, and more!
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain Template Literal Types.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔤 Template Literal Types in TypeScript
        </Typography>

        <Typography paragraph>
          Template Literal Types are similar to JavaScript template literals (
          <code>`${}`</code>) but used at the type level to generate new string
          literal types by combining unions, strings, and even conditionals.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Basic Example */}
        <Typography variant="h5" gutterBottom>
          🔹 Basic Example
        </Typography>
        <CodeBlock
          code={`type Greeting = \`Hello, \${string}!\`;

// Valid
const greet1: Greeting = "Hello, world!";
const greet2: Greeting = "Hello, Alice!";

// Invalid
const greet3: Greeting = "Hi, Alice!"; // ❌ Error: does not match template
`}
        />
        <Typography paragraph>
          - You can enforce exact string formatting in your types using Template
          Literal Types.
          <br />- Here, any string starting with <code>"Hello, "</code> and
          ending with <code>"!"</code>
          is allowed.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Combining with Unions */}
        <Typography variant="h5" gutterBottom>
          🔸 Combining with Unions
        </Typography>
        <CodeBlock
          code={`type Color = "red" | "blue";
type Size = "small" | "large";

// Combine both using template literal
type Variant = \`\${Size}-\${Color}\`;

const a: Variant = "small-red";  // ✅
const b: Variant = "large-blue"; // ✅
const c: Variant = "medium-green"; // ❌ Invalid
`}
        />
        <Typography paragraph>
          - This technique is powerful for generating all possible combinations
          of multiple union types.
          <br />- Common in Tailwind, BEM class names, or styled variants.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Nested Template Literals */}
        <Typography variant="h5" gutterBottom>
          🔹 Nested Template Literals
        </Typography>
        <CodeBlock
          code={`type Lang = "en" | "fr";
type Page = "home" | "about";

type Route = \`/\${Lang}/\${Page}\`;

const route1: Route = "/en/home"; // ✅
const route2: Route = "/fr/about"; // ✅
const route3: Route = "/de/contact"; // ❌
`}
        />
        <Typography paragraph>
          - Enables precise control over structured paths, keys, or naming
          conventions.
          <br />- Great for internationalized routes, file paths, or API
          endpoints.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Utility with keyof */}
        <Typography variant="h5" gutterBottom>
          🔸 Use with <code>keyof</code> and Mapped Types
        </Typography>
        <CodeBlock
          code={`type Options = {
name: string;
age: number;
};

type PrefixedKey = \`form_\${keyof Options}\`; // "form_name" | "form_age"

const key: PrefixedKey = "form_name"; // ✅
`}
        />
        <Typography paragraph>
          - Template literal types can extend dynamically based on keys of an
          object.
          <br />- This is particularly helpful for building prefixed keys like
          `form_field`, `env_`, etc.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Conditional Type Inference */}
        <Typography variant="h5" gutterBottom>
          🎯 With Conditional and Infer
        </Typography>
        <CodeBlock
          code={`type ExtractLang<T> = T extends \`/\${infer L}/\${string}\` ? L : never;

type L1 = ExtractLang<"/en/home">; // "en"
type L2 = ExtractLang<"/fr/about">; // "fr"
`}
        />
        <Typography paragraph>
          - Combine <code>infer</code> and template literals to extract parts of
          a string.
          <br />- Very useful in parsing, routing, and validation scenarios.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" color="text.secondary">
          🚀 Summary:
        </Typography>
        <ul>
          <li>
            ✅ Template literals create dynamic string types based on patterns.
          </li>
          <li>
            ✅ They can combine unions, <code>keyof</code>, and{" "}
            <code>infer</code>.
          </li>
          <li>
            ✅ Useful for route typing, form keys, class names, and much more.
          </li>
          <li>
            ⚠️ TypeScript doesn't validate string **values**, just structural
            matching.
          </li>
        </ul>
      </Box>
    ),
  },
];
