import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import CodeBlock from "../../../components/UI/CodeBlock";

export const OBJECT_DATA = [
  {
    heading: "How do you create an object in JavaScript?",
    content: (
      <Box my={5}>
        <Typography variant="h4" color="primary" gutterBottom>
          🧱 Creating Objects in JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          In JavaScript, objects are a fundamental data structure used to store
          key-value pairs. There are several ways to create them depending on
          your use case.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ 1. Using Object Literals
        </Typography>

        <Typography variant="body2">
          This is the most common and straightforward way to create an object.
        </Typography>

        <CodeBlock
          code={`const person = {
name: "Alice",
age: 30,
greet: function () {
  console.log("Hello, " + this.name);
}
};

person.greet(); // Hello, Alice`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🏗️ 2. Using the <code>new Object()</code> Constructor
        </Typography>

        <Typography variant="body2">
          This method is more verbose and rarely used today.
        </Typography>

        <CodeBlock
          code={`const car = new Object();
car.brand = "Toyota";
car.model = "Corolla";

console.log(car.brand); // Toyota`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧬 3. Using Constructor Functions
        </Typography>

        <Typography variant="body2">
          You can define a constructor function and use the <code>new</code>{" "}
          keyword to create instances.
        </Typography>

        <CodeBlock
          code={`function Person(name, age) {
this.name = name;
this.age = age;
this.greet = function () {
  console.log("Hi, I'm " + this.name);
};
}

const user = new Person("Bob", 25);
user.greet(); // Hi, I'm Bob`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 4. Using <code>Object.create()</code>
        </Typography>

        <Typography variant="body2">
          This allows you to create a new object with a specified prototype
          object.
        </Typography>

        <CodeBlock
          code={`const animal = {
speak() {
  console.log("Animal sound");
}
};

const dog = Object.create(animal);
dog.speak(); // Animal sound`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 5. Using ES6 Classes
        </Typography>

        <Typography variant="body2">
          A modern syntax for creating objects using classes (syntactic sugar
          over constructor functions).
        </Typography>

        <CodeBlock
          code={`class Person {
constructor(name, age) {
  this.name = name;
  this.age = age;
}

greet() {
  console.log(\`Hello, my name is \${this.name}\`);
}
}

const alice = new Person("Alice", 28);
alice.greet(); // Hello, my name is Alice`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📝 Summary
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="Use object literals for quick and easy object creation." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Use constructor functions or classes when creating multiple instances." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Use Object.create() for prototypal inheritance." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Avoid using new Object() unless necessary." />
          </ListItem>
        </List>
      </Box>
    ),
  },
  {
    heading: "What is the difference between dot and bracket notation?",
    content: (
      <Box my={5}>
        <Typography variant="h4" color="primary" gutterBottom>
          🔍 Dot Notation vs Bracket Notation in JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          In JavaScript, objects store data in the form of key-value pairs. To
          access or modify the values of object properties, you can use either:
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Dot Notation (e.g., obj.key)" />
          </ListItem>
          <ListItem>
            <ListItemText primary='Bracket Notation (e.g., obj["key"])' />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        {/* Dot Notation */}
        <Typography variant="h5" gutterBottom>
          ✅ Dot Notation
        </Typography>

        <Typography variant="body2">
          Use dot notation when the property name is a valid identifier and is
          known ahead of time.
        </Typography>

        <CodeBlock
          code={`const user = {
name: "Alice",
age: 25,
};

console.log(user.name); // Alice
user.age = 26;
console.log(user.age); // 26`}
        />

        <Typography variant="body2" color="warning.main" sx={{ mt: 1 }}>
          ❌ Dot notation cannot be used if the property name is stored in a
          variable or is not a valid identifier (e.g., contains spaces or starts
          with a number).
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Bracket Notation */}
        <Typography variant="h5" gutterBottom>
          🔓 Bracket Notation
        </Typography>

        <Typography variant="body2">
          Bracket notation is more flexible and allows you to use variables,
          spaces, or special characters in property names.
        </Typography>

        <CodeBlock
          code={`const user = {
name: "Bob",
"user-role": "admin"
};

const prop = "name";

console.log(user[prop]); // Bob
console.log(user["user-role"]); // admin`}
        />

        <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
          ✅ Use bracket notation when:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="The property name is dynamic (stored in a variable)." />
          </ListItem>
          <ListItem>
            <ListItemText primary='The property name has special characters or spaces ("user-role").' />
          </ListItem>
          <ListItem>
            <ListItemText primary="You need to loop through object keys dynamically." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🆚 Key Differences
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="Dot Notation"
              secondary="Cleaner and more concise, but limited to valid identifiers only"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Bracket Notation"
              secondary="More flexible, supports dynamic keys and special characters"
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📝 Final Example
        </Typography>

        <CodeBlock
          code={`const obj = {
name: "Charlie",
"likes-js": true,
123: "number key",
};

const key = "name";
console.log(obj.name); // Charlie
console.log(obj[key]); // Charlie
console.log(obj["likes-js"]); // true
console.log(obj[123]); // number key
// console.log(obj.123); ❌ Invalid syntax`}
        />
      </Box>
    ),
  },
  {
    heading: "What is object destructuring?",
    content: (
      <Box my={5}>
        <Typography variant="h4" color="primary" gutterBottom>
          📦 What is Object Destructuring in JavaScript?
        </Typography>

        <Typography variant="body1" paragraph>
          Object destructuring is a JavaScript feature introduced in ES6 that
          allows you to extract multiple properties from an object and assign
          them to variables using a concise syntax.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Basic Syntax
        </Typography>

        <CodeBlock
          code={`const user = {
name: "Alice",
age: 30,
location: "New York"
};

const { name, age } = user;

console.log(name); // "Alice"
console.log(age);  // 30`}
        />

        <Typography variant="body2" sx={{ mt: 1 }}>
          Instead of accessing each property manually like{" "}
          <code>user.name</code>, you can destructure and assign them directly.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Destructuring with Renaming
        </Typography>
        <Typography variant="body2">
          You can rename the destructured variable using the{" "}
          <code>key: newName</code> syntax.
        </Typography>

        <CodeBlock
          code={`const user = {
name: "Bob",
age: 28
};

const { name: userName } = user;

console.log(userName); // "Bob"
// console.log(name); // ❌ ReferenceError`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Setting Default Values
        </Typography>
        <Typography variant="body2">
          Provide default values if a property doesn’t exist on the object.
        </Typography>

        <CodeBlock
          code={`const settings = {
theme: "dark"
};

const { theme, fontSize = 16 } = settings;

console.log(theme);    // "dark"
console.log(fontSize); // 16 (default)`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📚 Nested Destructuring
        </Typography>

        <Typography variant="body2">
          You can destructure nested objects by matching their structure.
        </Typography>

        <CodeBlock
          code={`const user = {
name: "Jane",
address: {
  city: "Chicago",
  zip: 60614
}
};

const {
address: { city, zip }
} = user;

console.log(city); // "Chicago"
console.log(zip);  // 60614`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Function Parameters with Destructuring
        </Typography>

        <Typography variant="body2">
          You can destructure objects directly in function parameters.
        </Typography>

        <CodeBlock
          code={`function displayUser({ name, age }) {
console.log(\`\${name} is \${age} years old.\`);
}

const user = { name: "Tom", age: 40 };
displayUser(user); // "Tom is 40 years old."`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠 Use Cases
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="Cleaner code by avoiding repetitive object access" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Helpful in React props handling and hooks" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Great for extracting API responses" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Summary Table
        </Typography>

        <CodeBlock
          code={`const person = { name: "Sam", age: 21 };

// Traditional way:
const name = person.name;
const age = person.age;

// Destructuring way:
const { name, age } = person;`}
        />

        <Typography variant="body2" sx={{ mt: 2 }}>
          Destructuring makes code more readable and expressive, especially when
          working with complex data structures.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How can you clone an object?",
    content: (
      <Box my={5}>
        <Typography variant="h4" color="primary" gutterBottom>
          🧬 How Can You Clone an Object in JavaScript?
        </Typography>

        <Typography variant="body1" paragraph>
          Cloning an object means creating a **copy** of an existing object so
          that modifications to the new object do not affect the original.
          JavaScript offers several ways to clone objects, categorized into
          **shallow cloning** and **deep cloning**.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" gutterBottom>
          🔹 Shallow Cloning
        </Typography>

        <Typography variant="body2" gutterBottom>
          Copies only the **first level** of the object. Nested objects remain
          referenced.
        </Typography>

        <Typography variant="h6">1. Using Spread Operator</Typography>
        <CodeBlock
          code={`const user = { name: "Alice", age: 25 };
const clone = { ...user };

console.log(clone); // { name: "Alice", age: 25 }`}
        />

        <Typography variant="h6" sx={{ mt: 2 }}>
          2. Using Object.assign
        </Typography>
        <CodeBlock
          code={`const user = { name: "Bob", age: 30 };
const clone = Object.assign({}, user);

console.log(clone); // { name: "Bob", age: 30 }`}
        />

        <Typography variant="body2" sx={{ mt: 1 }}>
          Both methods above create a new object with the same top-level
          properties. However, if the object contains nested objects, the inner
          references are shared.
        </Typography>

        <CodeBlock
          code={`const user = {
name: "Eve",
address: { city: "New York" }
};

const clone = { ...user };

clone.address.city = "Boston";

console.log(user.address.city); // ❗ "Boston" – changed in original!`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔹 Deep Cloning
        </Typography>

        <Typography variant="body2">
          A deep clone copies all nested objects recursively so that the clone
          is completely independent.
        </Typography>

        <Typography variant="h6">
          1. Using JSON.parse + JSON.stringify
        </Typography>

        <CodeBlock
          code={`const user = {
name: "Tom",
address: { city: "Chicago" }
};

const deepClone = JSON.parse(JSON.stringify(user));

deepClone.address.city = "Houston";

console.log(user.address.city);     // "Chicago"
console.log(deepClone.address.city); // "Houston"`}
        />

        <Typography variant="body2" sx={{ mt: 1 }}>
          ⚠️ Limitation: This method does not support functions, Dates,
          undefined, Symbols, or circular references.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>
          2. Using StructuredClone (Modern)
        </Typography>

        <CodeBlock
          code={`const user = {
name: "Sara",
hobbies: ["reading", "swimming"],
meta: { active: true }
};

const deepClone = structuredClone(user);

deepClone.meta.active = false;

console.log(user.meta.active); // true
console.log(deepClone.meta.active); // false`}
        />

        <Typography variant="body2" sx={{ mt: 1 }}>
          ✅ Best and safest option in modern browsers. Handles most types (even
          Dates, Maps, etc.).
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔸 Summary Table
        </Typography>

        <CodeBlock
          code={`+------------------------+----------------------+-------------+
| Method                 | Deep Clone?           | Notes       |
+------------------------+----------------------+-------------+
| Spread {...obj}        | ❌ (Shallow only)      | Fast, common |
| Object.assign          | ❌ (Shallow only)      | ES5 method   |
| JSON.parse/stringify   | ✅ (Deep but limited)  | No functions |
| structuredClone()      | ✅ (Modern & complete) | Best choice  |
+------------------------+----------------------+-------------+`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠 Real-World Use Case in React
        </Typography>

        <CodeBlock
          code={`const [user, setUser] = useState({
name: "Alex",
preferences: {
  theme: "dark"
}
});

// Clone before modifying
const updateTheme = () => {
const updated = structuredClone(user);
updated.preferences.theme = "light";
setUser(updated);
};`}
        />

        <Typography variant="body2" sx={{ mt: 2 }}>
          In React, cloning objects before updating ensures immutability and
          proper re-rendering.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are all the operations of object?",
    content: (
      <Box my={5}>
        <Typography variant="h4" color="primary" gutterBottom>
          🧰 JavaScript Object Operations
        </Typography>

        <Typography variant="body1" paragraph>
          JavaScript objects are powerful data structures that store key-value
          pairs. Here’s a complete breakdown of all the common operations you
          can perform on objects, explained with code examples and styled
          beautifully with Material UI.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5">1️⃣ Creating an Object</Typography>
        <CodeBlock code={`const user = { name: "John", age: 30 };`} />

        <Typography variant="h5">2️⃣ Accessing Properties</Typography>
        <CodeBlock
          code={`console.log(user.name);  // Dot notation
console.log(user["age"]); // Bracket notation`}
        />

        <Typography variant="h5">3️⃣ Adding/Updating Properties</Typography>
        <CodeBlock
          code={`user.email = "john@example.com";  // Add
user.age = 31;              // Update`}
        />

        <Typography variant="h5">4️⃣ Deleting Properties</Typography>
        <CodeBlock code={`delete user.age;`} />

        <Typography variant="h5">5️⃣ Checking Property Existence</Typography>
        <CodeBlock
          code={`"name" in user;            // true
user.hasOwnProperty("email"); // true`}
        />

        <Typography variant="h5">6️⃣ Looping Through Properties</Typography>
        <CodeBlock
          code={`for (let key in user) {
console.log(key, user[key]);
}`}
        />

        <Typography variant="h5">
          7️⃣ Getting Object Keys, Values, Entries
        </Typography>
        <CodeBlock
          code={`Object.keys(user);   // ["name", "email"]
Object.values(user); // ["John", "john@example.com"]
Object.entries(user); // [["name", "John"], ["email", "john@example.com"]]`}
        />

        <Typography variant="h5">8️⃣ Copying and Cloning</Typography>
        <CodeBlock
          code={`const shallowCopy = { ...user };
const assignedCopy = Object.assign({}, user);`}
        />

        <Typography variant="h5">9️⃣ Freezing and Sealing</Typography>
        <CodeBlock
          code={`Object.freeze(user); // Prevent changes
Object.seal(user);   // Allow updates but not additions/removals`}
        />

        <Typography variant="h5">🔟 Merging Objects</Typography>
        <CodeBlock
          code={`const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };`}
        />

        <Typography variant="h5">🔁 Object Destructuring</Typography>
        <CodeBlock code={`const { name, email } = user;`} />

        <Typography variant="h5">📦 Object Utility Methods</Typography>
        <List>
          <ListItem>
            <code>Object.assign(target, source)</code> — Copies values from
            source to target
          </ListItem>
          <ListItem>
            <code>Object.create(proto)</code> — Creates a new object with the
            given prototype
          </ListItem>
          <ListItem>
            <code>Object.defineProperty(obj, key, descriptor)</code> — Defines
            new property
          </ListItem>
          <ListItem>
            <code>Object.getOwnPropertyNames(obj)</code> — Returns all keys
          </ListItem>
        </List>
      </Box>
    ),
  },
  {
    heading: "How do you merge two objects?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          How Do You Merge Two Objects in JavaScript?
        </Typography>

        <Typography variant="body1" paragraph>
          Merging objects in JavaScript is a common task when combining multiple
          sets of data, such as component props, configurations, or API results.
          Below are some common and effective ways to merge two objects:
        </Typography>

        {/* Method 1 */}
        <Typography variant="h6" gutterBottom>
          1. Using <code>Object.assign()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          <code>Object.assign()</code> is a built-in method that copies the
          values of all enumerable own properties from one or more source
          objects to a target object. It returns the target object.
        </Typography>
        <CodeBlock
          code={`const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = Object.assign({}, obj1, obj2);
console.log(merged); // { a: 1, b: 3, c: 4 }`}
        />

        {/* Method 2 */}
        <Typography variant="h6" gutterBottom>
          2. Using the Spread Operator <code>(...)</code>
        </Typography>
        <Typography variant="body1" paragraph>
          ES6 introduced the spread operator, which provides a cleaner and more
          modern syntax for merging objects.
        </Typography>
        <CodeBlock
          code={`const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }`}
        />

        {/* Method 3 */}
        <Typography variant="h6" gutterBottom>
          3. Deep Merging with Libraries like <code>lodash.merge</code>
        </Typography>
        <Typography variant="body1" paragraph>
          Both <code>Object.assign()</code> and the spread operator perform
          shallow merges. For deep merging (merging nested objects), you can use
          libraries like <code>lodash.merge</code>.
        </Typography>
        <CodeBlock
          code={`import merge from 'lodash.merge';

const obj1 = { a: 1, b: { x: 10 } };
const obj2 = { b: { y: 20 }, c: 3 };

const merged = merge({}, obj1, obj2);
console.log(merged); // { a: 1, b: { x: 10, y: 20 }, c: 3 }`}
        />

        <Typography variant="body1" paragraph>
          Choose the method depending on whether you need a shallow or deep
          merge. For shallow merges, the spread operator is preferred for its
          readability and simplicity.
        </Typography>
      </Box>
    ),
  },
];
