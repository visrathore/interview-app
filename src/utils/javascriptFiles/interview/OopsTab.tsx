import { Box, Divider, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const OOPS_DATA = [
  {
    heading: "What is prototypal inheritance?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧬 Understanding Prototypal Inheritance in JavaScript
        </Typography>

        <Typography paragraph>
          <strong>Prototypal Inheritance</strong> is a feature in JavaScript
          where an object can inherit properties and methods from another
          object. This is a core part of how JavaScript objects and classes work
          under the hood.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 How It Works
        </Typography>
        <Typography paragraph>
          Every object in JavaScript has an internal link to another object
          called its <code>prototype</code>. When you try to access a property
          on an object and it doesn’t exist, JavaScript looks up the chain
          through the prototype.
        </Typography>

        <CodeBlock
          code={`const parent = {
greet() {
  return "Hello from parent";
},
};

const child = Object.create(parent);

console.log(child.greet()); // "Hello from parent"
`}
        />

        <Typography paragraph>
          In the example above, <code>child</code> doesn’t have its own{" "}
          <code>greet()</code> method, so JavaScript looks into its prototype —
          which is <code>parent</code> — and finds the method there.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 What is a Prototype?
        </Typography>
        <Typography paragraph>
          The prototype is essentially a regular object. You can set it manually
          using <code>Object.create()</code> or use constructor functions and
          classes which set the prototype automatically.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          🔧 Using Constructor Function:
        </Typography>
        <CodeBlock
          code={`function Animal(name) {
this.name = name;
}

Animal.prototype.speak = function () {
return this.name + " makes a noise.";
};

const dog = new Animal("Dog");

console.log(dog.speak()); // Dog makes a noise.
`}
        />

        <Typography paragraph>
          Here, <code>speak()</code> is shared across all instances created with
          the <code>Animal</code> constructor via the prototype.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ ES6 Classes and Inheritance
        </Typography>
        <Typography paragraph>
          Classes in JavaScript are syntactic sugar over the prototypal
          inheritance model. They still use prototypes behind the scenes.
        </Typography>

        <CodeBlock
          code={`class Person {
constructor(name) {
  this.name = name;
}

greet() {
  return \`Hi, I’m \${this.name}\`;
}
}

class Student extends Person {
study() {
  return \`\${this.name} is studying.\`;
}
}

const student = new Student("Alice");

console.log(student.greet()); // Hi, I’m Alice
console.log(student.study()); // Alice is studying.
`}
        />

        <Typography paragraph>
          The <code>Student</code> class extends <code>Person</code>, inheriting
          its properties and methods via the prototype chain.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Accessing the Prototype
        </Typography>

        <CodeBlock
          code={`console.log(Object.getPrototypeOf(student)); // Person.prototype
console.log(student.__proto__); // Same as above (not recommended for production use)`}
        />

        <Typography paragraph>
          Use <code>Object.getPrototypeOf()</code> to safely access the
          prototype of an object.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Summary
        </Typography>
        <ul>
          <li>
            JavaScript uses <strong>prototypal inheritance</strong> — objects
            inherit directly from other objects.
          </li>
          <li>
            You can create inheritance with <code>Object.create()</code>,
            constructor functions, or ES6 classes.
          </li>
          <li>
            The prototype chain is used to find properties/methods up the
            hierarchy.
          </li>
          <li>
            Modern <code>class</code> syntax simplifies prototype handling but
            doesn’t replace it.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What is the prototype chain?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧬 Understanding the Prototype Chain in JavaScript
        </Typography>

        <Typography paragraph>
          JavaScript is a prototype-based language. Every object has an internal
          property called <code>[[Prototype]]</code>, which links it to another
          object. This forms a chain of inheritance known as the{" "}
          <strong>Prototype Chain</strong>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔗 What is the Prototype Chain?
        </Typography>

        <Typography paragraph>
          The prototype chain is how JavaScript resolves property lookups. If a
          property or method isn’t found on the object itself, JavaScript moves
          up the chain to the prototype, and continues until it either finds the
          property or reaches <code>null</code>.
        </Typography>

        <CodeBlock
          code={`const grandParent = {
lastName: "Smith",
};

const parent = Object.create(grandParent);
parent.firstName = "John";

const child = Object.create(parent);
child.age = 12;

console.log(child.age); // 12 (own property)
console.log(child.firstName); // John (inherited from parent)
console.log(child.lastName); // Smith (inherited from grandParent)`}
        />

        <Typography paragraph>
          In the above example, <code>child</code> doesn't have{" "}
          <code>firstName</code> or <code>lastName</code> as its own properties,
          so JavaScript walks up the prototype chain to find them.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Visualizing the Chain
        </Typography>

        <CodeBlock
          code={`child --> parent --> grandParent --> Object.prototype --> null`}
        />

        <Typography paragraph>
          This lookup sequence is what’s known as the{" "}
          <strong>Prototype Chain</strong>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Inspecting the Prototype
        </Typography>

        <Typography paragraph>
          JavaScript provides ways to access an object's prototype:
        </Typography>

        <CodeBlock
          code={`Object.getPrototypeOf(child); // returns parent
child.__proto__; // same as above (not recommended in production)`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Built-In Prototypes
        </Typography>

        <Typography paragraph>
          Even built-in objects like arrays and functions are part of the
          prototype chain.
        </Typography>

        <CodeBlock
          code={`const arr = [1, 2, 3];

console.log(arr.toString()); // inherited from Array.prototype
console.log(arr.hasOwnProperty("length")); // inherited from Object.prototype`}
        />

        <Typography paragraph>
          Arrays inherit from <code>Array.prototype</code>, which in turn
          inherits from <code>Object.prototype</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Constructor Functions and Classes
        </Typography>

        <Typography paragraph>
          When you use constructor functions or ES6 classes, JavaScript sets up
          the prototype chain automatically.
        </Typography>

        <CodeBlock
          code={`function Person(name) {
this.name = name;
}

Person.prototype.sayHi = function () {
return "Hi, I’m " + this.name;
};

const user = new Person("Alice");

console.log(user.sayHi()); // "Hi, I’m Alice"
console.log(Object.getPrototypeOf(user) === Person.prototype); // true`}
        />

        <Typography paragraph>
          The <code>user</code> object gets access to <code>sayHi()</code>{" "}
          through its prototype.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Summary
        </Typography>
        <ul>
          <li>
            Every object in JS has a prototype, forming a chain called the{" "}
            <strong>prototype chain</strong>.
          </li>
          <li>
            Property lookups traverse this chain until found or until{" "}
            <code>null</code>.
          </li>
          <li>
            Built-in objects and your custom objects all follow this pattern.
          </li>
          <li>
            Use <code>Object.getPrototypeOf()</code> to safely explore
            prototypes.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "How do you create classes in JavaScript?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🏗️ Creating Classes in JavaScript
        </Typography>

        <Typography paragraph>
          JavaScript introduced class syntax in ES6 (ECMAScript 2015) to make it
          easier to write object-oriented code. Behind the scenes, JavaScript
          classes are syntactic sugar over the prototype-based inheritance
          model.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Basic Class Declaration
        </Typography>

        <CodeBlock
          code={`class Person {
constructor(name, age) {
  this.name = name;
  this.age = age;
}

greet() {
  return \`Hello, my name is \${this.name} and I'm \${this.age} years old.\`;
}
}

const user = new Person("Alice", 30);
console.log(user.greet());`}
        />

        <Typography paragraph>
          - The <code>constructor</code> is a special method for initializing
          new instances. - The <code>greet()</code> method is added to{" "}
          <code>Person.prototype</code> automatically. - You create an instance
          using <code>new Person()</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Class Expression
        </Typography>

        <Typography paragraph>
          Classes can also be defined as expressions and assigned to variables.
        </Typography>

        <CodeBlock
          code={`const Animal = class {
constructor(type) {
  this.type = type;
}

speak() {
  return \`A \${this.type} makes a sound.\`;
}
};

const dog = new Animal("dog");
console.log(dog.speak());`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧬 Inheritance with Classes
        </Typography>

        <Typography paragraph>
          JavaScript supports inheritance using the <code>extends</code>{" "}
          keyword. Subclasses can access the parent class methods using{" "}
          <code>super()</code>.
        </Typography>

        <CodeBlock
          code={`class Animal {
constructor(name) {
  this.name = name;
}

speak() {
  return \`\${this.name} makes a sound.\`;
}
}

class Dog extends Animal {
speak() {
  return \`\${this.name} barks.\`;
}
}

const d = new Dog("Buddy");
console.log(d.speak());`}
        />

        <Typography paragraph>
          - <code>Dog</code> inherits from <code>Animal</code>. -{" "}
          <code>super()</code> calls the constructor or methods of the parent
          class.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Static Methods
        </Typography>

        <Typography paragraph>
          Use <code>static</code> to define methods that belong to the class
          itself, not instances.
        </Typography>

        <CodeBlock
          code={`class MathUtils {
static add(a, b) {
  return a + b;
}
}

console.log(MathUtils.add(5, 3)); // 8`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔒 Getters and Setters
        </Typography>

        <Typography paragraph>
          JavaScript classes also support <strong>getter</strong> and{" "}
          <strong>setter</strong> methods for encapsulation.
        </Typography>

        <CodeBlock
          code={`class Rectangle {
constructor(width, height) {
  this.width = width;
  this.height = height;
}

get area() {
  return this.width * this.height;
}

set dimensions({ width, height }) {
  this.width = width;
  this.height = height;
}
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50
rect.dimensions = { width: 20, height: 2 };
console.log(rect.area); // 40`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Summary
        </Typography>

        <ul>
          <li>
            <strong>Classes</strong> in JS are syntactic sugar over prototypes.
          </li>
          <li>
            They include <code>constructor()</code>, instance methods, static
            methods, and support inheritance.
          </li>
          <li>
            <strong>Getters/Setters</strong> allow encapsulated logic for
            properties.
          </li>
          <li>
            <code>extends</code> + <code>super()</code> allow subclassing other
            classes.
          </li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What is the difference between class and function constructor?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🆚 Difference Between Class and Function Constructor in JavaScript
        </Typography>

        <Typography paragraph>
          In JavaScript, both <strong>function constructors</strong> and{" "}
          <strong>ES6 classes</strong> are used to create objects and achieve
          object-oriented programming. However, they have different syntax and
          behavior.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 1. Syntax
        </Typography>

        <CodeBlock
          code={`// Function Constructor
function Person(name, age) {
this.name = name;
this.age = age;
}

Person.prototype.greet = function() {
return \`Hi, I'm \${this.name}\`;
};

const user1 = new Person("Alice", 25);

// Class
class PersonClass {
constructor(name, age) {
  this.name = name;
  this.age = age;
}

greet() {
  return \`Hi, I'm \${this.name}\`;
}
}

const user2 = new PersonClass("Bob", 30);`}
        />

        <Typography paragraph>
          ➤ Both create instances with similar structure. ➤ Classes provide a
          cleaner and more intuitive syntax.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔒 2. Hoisting
        </Typography>

        <Typography paragraph>
          Function constructors are hoisted (can be used before declaration),
          while class declarations are <strong>not hoisted</strong>.
        </Typography>

        <CodeBlock
          code={`const p = new Person("Foo", 20); // ✅ Works
function Person(name, age) {
this.name = name;
this.age = age;
}

const p2 = new PersonClass("Bar", 30); // ❌ ReferenceError
class PersonClass {
constructor(name, age) {
  this.name = name;
  this.age = age;
}
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 3. Strict Mode
        </Typography>

        <Typography paragraph>
          - Classes always run in strict mode. - In function constructors,
          strict mode is optional.
        </Typography>

        <CodeBlock
          code={`class Test {
constructor() {
  // 'use strict' is implied
  this.test = 123;
}
}

function FuncTest() {
// 'use strict' must be declared manually if needed
this.test = 123;
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 4. Inheritance
        </Typography>

        <Typography paragraph>
          Both support inheritance, but the class syntax makes it easier and
          cleaner using <code>extends</code> and <code>super()</code>.
        </Typography>

        <CodeBlock
          code={`// Function Constructor Inheritance
function Animal(name) {
this.name = name;
}
Animal.prototype.speak = function() {
return \`\${this.name} makes a sound\`;
};

function Dog(name) {
Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Class Inheritance
class AnimalClass {
constructor(name) {
  this.name = name;
}
speak() {
  return \`\${this.name} makes a sound\`;
}
}

class DogClass extends AnimalClass {
constructor(name) {
  super(name);
}
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 5. Internal Behavior Differences
        </Typography>

        <ul>
          <li>
            <strong>Class</strong> constructor cannot be called without{" "}
            <code>new</code> — it throws an error.
          </li>
          <li>
            <strong>Function constructor</strong> can be called without{" "}
            <code>new</code>, but behaves differently (can lead to bugs).
          </li>
        </ul>

        <CodeBlock
          code={`Person("Tom", 20);     // ❌ creates global object properties (in sloppy mode)
PersonClass("Tom", 20); // ❌ throws TypeError: Class constructor cannot be invoked without 'new'`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Summary Table
        </Typography>

        <Box
          component="table"
          sx={{ width: "100%", borderCollapse: "collapse", my: 2 }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Aspect
              </th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Function Constructor
              </th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Class
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Syntax
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Verbose, older
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Modern, cleaner
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Hoisting
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>Yes</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>No</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Strict Mode
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Optional
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Enforced
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Inheritance
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Verbose, manual
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                Cleaner with extends
              </td>
            </tr>
          </tbody>
        </Box>

        <Typography variant="body2" color="text.secondary">
          👉 Use <strong>class</strong> when writing modern JavaScript. Function
          constructors are still valid but more error-prone and verbose.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are getters and setters?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📦 Getters and Setters in JavaScript
        </Typography>

        <Typography paragraph>
          <strong>Getters</strong> and <strong>Setters</strong> are special
          methods that allow you to bind accessors to object properties. They
          help you control how a property is accessed or mutated and are
          particularly useful in classes and object literals.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Why Use Getters and Setters?
        </Typography>

        <ul>
          <li>Encapsulate internal object state.</li>
          <li>Add custom logic when reading or updating a property.</li>
          <li>Mimic computed properties.</li>
          <li>Validate or format data before assignment or retrieval.</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧾 Basic Syntax Using Object Literals
        </Typography>

        <CodeBlock
          code={`const user = {
firstName: "John",
lastName: "Doe",

get fullName() {
  return \`\${this.firstName} \${this.lastName}\`;
},

set fullName(name) {
  const [first, last] = name.split(" ");
  this.firstName = first;
  this.lastName = last;
}
};

console.log(user.fullName); // John Doe

user.fullName = "Jane Smith";
console.log(user.firstName); // Jane
console.log(user.lastName);  // Smith`}
        />

        <Typography paragraph>
          ➤ When you access <code>user.fullName</code>, the getter runs. ➤ When
          you assign to <code>user.fullName</code>, the setter is invoked.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🏗️ Using Getters and Setters in Classes
        </Typography>

        <CodeBlock
          code={`class Rectangle {
constructor(width, height) {
  this._width = width;
  this._height = height;
}

get area() {
  return this._width * this._height;
}

set width(value) {
  if (value > 0) {
    this._width = value;
  } else {
    console.error("Width must be positive");
  }
}

set height(value) {
  if (value > 0) {
    this._height = value;
  } else {
    console.error("Height must be positive");
  }
}
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50

rect.width = 20;
console.log(rect.area); // 100

rect.height = -10; // Error: Height must be positive`}
        />

        <Typography paragraph>
          ➤ In this class, we use <code>get area()</code> as a computed
          property. ➤ <code>set width()</code> and <code>set height()</code>{" "}
          validate inputs before changing internal state.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 Common Pitfalls
        </Typography>

        <ul>
          <li>
            <strong>Infinite recursion:</strong> Avoid using the same property
            name inside the getter/setter.
          </li>
          <li>
            <strong>Missing backing fields:</strong> Use a convention like{" "}
            <code>_propName</code> to avoid conflict.
          </li>
          <li>
            <strong>Only getter defined:</strong> Property becomes read-only.
          </li>
        </ul>

        <CodeBlock
          code={`const obj = {
get onlyGetter() {
  return "read-only";
}
};

console.log(obj.onlyGetter); // "read-only"
obj.onlyGetter = "try-to-assign"; // No effect in non-strict mode, error in strict mode`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Summary
        </Typography>

        <Box component="ul">
          <li>
            <strong>Getter:</strong> A method prefixed with <code>get</code> to
            return a computed or derived value.
          </li>
          <li>
            <strong>Setter:</strong> A method prefixed with <code>set</code> to
            intercept changes and apply logic.
          </li>
          <li>
            Often used to maintain encapsulation and data integrity in classes
            and objects.
          </li>
        </Box>

        <Typography variant="body2" color="text.secondary" mt={2}>
          👉 Tip: Use getters and setters when you want object-like syntax for
          computed properties or when wrapping state with validation.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is super() in JavaScript?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧬 Understanding <code>super()</code> in JavaScript
        </Typography>

        <Typography paragraph>
          The{" "}
          <strong>
            <code>super()</code>
          </strong>{" "}
          keyword is used in JavaScript classes to call the constructor or
          methods of a <strong>parent class</strong>. It allows you to access
          and invoke functions on an object's parent.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔗 Use Cases of <code>super()</code>
        </Typography>

        <ul>
          <li>
            Call the parent class’s constructor using <code>super()</code>{" "}
            inside a subclass constructor.
          </li>
          <li>
            Call a method from the parent class using{" "}
            <code>super.methodName()</code>.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Basic Example: Calling Parent Constructor
        </Typography>

        <CodeBlock
          code={`class Animal {
constructor(name) {
  this.name = name;
}

speak() {
  console.log(\`\${this.name} makes a noise.\`);
}
}

class Dog extends Animal {
constructor(name, breed) {
  super(name); // Calls Animal constructor
  this.breed = breed;
}

speak() {
  super.speak(); // Calls the speak method from Animal
  console.log(\`\${this.name} barks.\`);
}
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Output:
        </Typography>
        <CodeBlock
          code={`Buddy makes a noise.
Buddy barks.`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Rules & Behavior
        </Typography>
        <ul>
          <li>
            You must call <code>super()</code> before using <code>this</code> in
            a subclass constructor.
          </li>
          <li>
            If you forget <code>super()</code>, JavaScript will throw a{" "}
            <strong>ReferenceError</strong>.
          </li>
          <li>
            <code>super</code> can only be used in{" "}
            <strong>derived classes</strong> (classes using <code>extends</code>
            ).
          </li>
        </ul>

        <CodeBlock
          code={`class Cat extends Animal {
constructor(name) {
  // console.log(this); ❌ ReferenceError
  super(name); // ✅ must be called first
  console.log(this.name); // "Whiskers"
}
}

const cat = new Cat("Whiskers");`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Summary
        </Typography>

        <Box component="ul">
          <li>
            <strong>
              <code>super()</code>
            </strong>{" "}
            calls the parent class's constructor.
          </li>
          <li>
            <strong>
              <code>super.methodName()</code>
            </strong>{" "}
            invokes a method from the parent class.
          </li>
          <li>Useful for inheritance and shared logic in subclasses.</li>
          <li>
            Must be used before <code>this</code> in subclass constructors.
          </li>
        </Box>

        <Typography variant="body2" color="text.secondary" mt={2}>
          👉 Tip: Think of <code>super</code> as a way to reuse and extend
          behavior from the base class — just like real-world inheritance.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How does inheritance work with ES6 classes?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧬 ES6 Class Inheritance in JavaScript
        </Typography>

        <Typography paragraph>
          ES6 introduced a cleaner, more intuitive syntax for implementing
          inheritance in JavaScript using the <code>class</code> and{" "}
          <code>extends</code> keywords. Inheritance allows one class
          (child/subclass) to acquire the properties and methods of another
          class (parent/superclass).
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔗 How Inheritance Works
        </Typography>

        <ul>
          <li>
            <code>extends</code> sets up the prototype chain between two
            classes.
          </li>
          <li>
            <code>super()</code> is used to call the parent class’s constructor.
          </li>
          <li>
            You can override methods in the child class and still call the
            parent method with <code>super.methodName()</code>.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Basic Example of Inheritance
        </Typography>

        <CodeBlock
          code={`class Animal {
constructor(name) {
  this.name = name;
}

speak() {
  console.log(\`\${this.name} makes a sound.\`);
}
}

class Dog extends Animal {
constructor(name, breed) {
  super(name); // Calls Animal's constructor
  this.breed = breed;
}

speak() {
  super.speak(); // Calls the parent method
  console.log(\`\${this.name} barks.\`);
}
}

const dog = new Dog("Buddy", "Labrador");
dog.speak();`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Output:
        </Typography>
        <CodeBlock
          code={`Buddy makes a sound.
Buddy barks.`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Key Concepts Recap
        </Typography>

        <ul>
          <li>
            <strong>
              <code>class</code>
            </strong>
            : Defines a blueprint for creating objects.
          </li>
          <li>
            <strong>
              <code>extends</code>
            </strong>
            : Links child class to parent class.
          </li>
          <li>
            <strong>
              <code>super()</code>
            </strong>
            : Must be called in the child class constructor before using{" "}
            <code>this</code>.
          </li>
          <li>
            <strong>Method Overriding</strong>: Child classes can override
            methods from the parent.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Another Example: Method Inheritance Without Overriding
        </Typography>

        <CodeBlock
          code={`class Vehicle {
startEngine() {
  console.log("Engine started");
}
}

class Car extends Vehicle {
// No override, but inherits startEngine
}

const myCar = new Car();
myCar.startEngine();`}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Output:
        </Typography>
        <CodeBlock code={`Engine started`} />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Summary
        </Typography>

        <Box component="ul">
          <li>
            ES6 classes simplify inheritance compared to the old prototype
            chain.
          </li>
          <li>
            <code>extends</code> and <code>super</code> are crucial for building
            class hierarchies.
          </li>
          <li>
            You can override and extend functionality in subclasses cleanly.
          </li>
          <li>Behind the scenes, it still uses prototypal inheritance!</li>
        </Box>

        <Typography variant="body2" color="text.secondary" mt={2}>
          👉 Use ES6 class inheritance to structure related logic and promote
          code reuse.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the new keyword?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🆕 Understanding the <code>new</code> Keyword in JavaScript
        </Typography>

        <Typography paragraph>
          The{" "}
          <strong>
            <code>new</code>
          </strong>{" "}
          keyword in JavaScript is used to create an instance of a user-defined
          object type or one of the built-in object types that has a constructor
          function. It’s essential for working with constructor functions and
          classes.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 What Happens Behind the Scenes When You Use <code>new</code>?
        </Typography>

        <Typography paragraph>
          Using <code>new</code> involves four internal steps:
        </Typography>
        <ol>
          <li>
            A new empty object is created: <code>{`{}`}</code>.
          </li>
          <li>
            The constructor function is called with <code>this</code> bound to
            the new object.
          </li>
          <li>The new object inherits from the constructor’s prototype.</li>
          <li>
            The newly created object is returned (unless the constructor returns
            a different object).
          </li>
        </ol>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ Basic Example with Constructor Function
        </Typography>

        <CodeBlock
          code={`function Person(name, age) {
this.name = name;
this.age = age;
}

const person1 = new Person("Alice", 30);

console.log(person1.name); // Alice
console.log(person1.age);  // 30`}
        />

        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          🧠 What If You Don't Use <code>new</code>?
        </Typography>
        <Typography paragraph>
          If you omit <code>new</code>, <code>this</code> will refer to the
          global object (or <code>undefined</code> in strict mode), not the
          newly created instance. This often causes bugs.
        </Typography>

        <CodeBlock
          code={`const person2 = Person("Bob", 25); // Missing 'new'

console.log(person2); // undefined
console.log(name);    // Bob (assigned to global scope)`}
        />

        <Typography color="error" sx={{ mt: 1 }}>
          ⚠️ This is a bad practice. Always use <code>new</code> with
          constructor functions.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧬 Using <code>new</code> with ES6 Classes
        </Typography>
        <Typography paragraph>
          In ES6, classes are syntactic sugar over constructor functions. You
          must use <code>new</code> to instantiate them.
        </Typography>

        <CodeBlock
          code={`class Car {
constructor(brand) {
  this.brand = brand;
}
}

const myCar = new Car("Toyota");
console.log(myCar.brand); // Toyota`}
        />

        <Typography variant="body2" color="text.secondary">
          ❌ Calling <code>Car()</code> without <code>new</code> would throw:{" "}
          <code>Class constructor Car cannot be invoked without 'new'</code>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Summary
        </Typography>
        <Box component="ul">
          <li>
            <code>new</code> is used to create instances from constructor
            functions or classes.
          </li>
          <li>
            It binds <code>this</code> inside the constructor to the new object.
          </li>
          <li>The new object links to the constructor’s prototype.</li>
          <li>
            Omitting <code>new</code> can cause bugs or throw errors.
          </li>
          <li>
            ES6 classes <strong>must</strong> be called with <code>new</code>.
          </li>
        </Box>

        <Typography variant="body2" color="text.secondary" mt={2}>
          👉 Use <code>new</code> responsibly to create clean, structured
          instances in your JS applications.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is encapsulation in JavaScript?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧱 What is Encapsulation in JavaScript?
        </Typography>

        <Typography paragraph>
          <strong>Encapsulation</strong> is one of the core principles of
          Object-Oriented Programming (OOP). It refers to bundling the data
          (variables) and methods (functions) that operate on the data into a
          single unit — typically a class — and restricting direct access to
          some of the object’s components.
        </Typography>

        <Typography paragraph>
          In JavaScript, encapsulation is achieved through:
          <ul>
            <li>Using functions and closures to hide data</li>
            <li>
              ES6 classes with private fields (<code>#fieldName</code>)
            </li>
            <li>Accessors like getters and setters</li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔐 Encapsulation Using Closures (Classic Way)
        </Typography>

        <Typography paragraph>
          JavaScript uses closures to encapsulate private variables inside a
          function scope.
        </Typography>

        <CodeBlock
          code={`function Counter() {
let count = 0; // private variable

this.increment = function () {
  count++;
  console.log(count);
};

this.decrement = function () {
  count--;
  console.log(count);
};
}

const counter = new Counter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.count); // undefined`}
        />

        <Typography paragraph>
          <strong>Explanation:</strong> Here, <code>count</code> is not
          accessible directly. It’s private to the function scope.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧬 Encapsulation Using ES6 Classes with Private Fields
        </Typography>

        <Typography paragraph>
          Starting with ES2022, JavaScript supports{" "}
          <strong>truly private class fields</strong> using <code>#</code>.
        </Typography>

        <CodeBlock
          code={`class Person {
#name; // private field

constructor(name) {
  this.#name = name;
}

getName() {
  return this.#name;
}

setName(newName) {
  if (newName) {
    this.#name = newName;
  }
}
}

const person = new Person("Alice");
console.log(person.getName()); // Alice
person.setName("Bob");
console.log(person.getName()); // Bob
console.log(person.#name); // ❌ SyntaxError: Private field '#name' must be declared in an enclosing class`}
        />

        <Typography paragraph color="error">
          🔒 You cannot access <code>#name</code> from outside the class. That’s
          real encapsulation!
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛡️ Benefits of Encapsulation
        </Typography>
        <ul>
          <li>
            <strong>Data Protection:</strong> Prevents outside code from
            modifying internal state accidentally.
          </li>
          <li>
            <strong>Modularity:</strong> Keeps related code grouped together.
          </li>
          <li>
            <strong>Maintainability:</strong> Easy to refactor without affecting
            other parts of code.
          </li>
          <li>
            <strong>Security:</strong> Hides internal logic from the outside
            world.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Summary
        </Typography>
        <Box component="ul">
          <li>Encapsulation bundles data and behavior.</li>
          <li>Use closures or ES6 private fields to hide internal details.</li>
          <li>Access internal state using public methods (getters/setters).</li>
          <li>Encapsulation makes code more secure and easier to manage.</li>
        </Box>

        <Typography variant="body2" color="text.secondary" mt={2}>
          ✅ Encapsulation is a powerful pattern for writing clean, safe, and
          scalable JavaScript code.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are mixins?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧬 What Are Mixins in JavaScript?
        </Typography>

        <Typography paragraph>
          A <strong>mixin</strong> is a design pattern in JavaScript that allows
          you to <strong>add reusable functionality</strong> to classes or
          objects without using inheritance.
        </Typography>

        <Typography paragraph>
          Since JavaScript only supports <strong>single inheritance</strong> (a
          class can only extend one other class), mixins provide a flexible way
          to compose behavior from multiple sources.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Why Use Mixins?
        </Typography>
        <ul>
          <li>To avoid duplicating logic across classes</li>
          <li>To share behavior between unrelated objects</li>
          <li>To simulate multiple inheritance</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Simple Mixin Example Using Object.assign
        </Typography>

        <CodeBlock
          code={`const sayHiMixin = {
sayHi() {
  console.log(\`Hello, I'm \${this.name}!\`);
},
sayBye() {
  console.log(\`\${this.name} says goodbye.\`);
}
};

class User {
constructor(name) {
  this.name = name;
}
}

// Copy methods to User.prototype
Object.assign(User.prototype, sayHiMixin);

const user = new User("Alice");
user.sayHi(); // Hello, I'm Alice!
user.sayBye(); // Alice says goodbye.`}
        />

        <Typography paragraph>
          <strong>Explanation:</strong> The mixin methods are copied into the
          prototype of `User`, so all `User` instances inherit them.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Functional Mixins (Reusable & Composable)
        </Typography>

        <Typography paragraph>
          You can create more flexible mixins using functions that operate on
          classes.
        </Typography>

        <CodeBlock
          code={`const TimestampMixin = (Base) =>
class extends Base {
  getTimestamp() {
    return new Date().toISOString();
  }
};

class Message {
constructor(content) {
  this.content = content;
}
}

// Create new class with mixin functionality
class TimedMessage extends TimestampMixin(Message) {}

const msg = new TimedMessage("Hello!");
console.log(msg.content); // Hello!
console.log(msg.getTimestamp()); // Current timestamp`}
        />

        <Typography paragraph>
          <strong>Explanation:</strong> The mixin adds a new method to the class
          while keeping it modular and testable.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 Mixin Pitfalls
        </Typography>
        <ul>
          <li>Too many mixins can create naming conflicts</li>
          <li>Debugging becomes harder with deeply composed behaviors</li>
          <li>
            Encapsulation might be broken if internal state is shared poorly
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Summary
        </Typography>
        <ul>
          <li>
            <strong>Mixins</strong> allow you to add reusable methods to
            classes.
          </li>
          <li>
            You can use <code>Object.assign</code> or class-functional
            composition.
          </li>
          <li>
            They help simulate multiple inheritance in a clean, modular way.
          </li>
          <li>
            Used wisely, mixins promote reusability and separation of concerns.
          </li>
        </ul>

        <Typography variant="body2" color="text.secondary" mt={2}>
          ✅ Mixins are especially helpful when used in utility-based designs,
          UI components, or logic extraction.
        </Typography>
      </Box>
    ),
  },
];
