import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import CodeBlock from "../../../components/UI/CodeBlock";

export const DOM_DATA = [
  {
    heading: "What is the DOM?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🧠 What is the DOM (Document Object Model)?
        </Typography>

        <Typography variant="body1" paragraph>
          The <strong>DOM (Document Object Model)</strong> is a programming
          interface for HTML and XML documents. It represents the page so that
          programs can change the document structure, style, and content
          dynamically.
        </Typography>

        <Typography variant="body1" paragraph>
          When a web page is loaded, the browser creates a **DOM of the page**,
          which is a tree-like structure where each HTML element becomes a
          **node** (or object) in the tree.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 DOM Tree Structure
        </Typography>
        <Typography variant="body1">For the HTML:</Typography>
        <CodeBlock
          code={`<html>
<body>
  <h1>Hello DOM!</h1>
  <p>This is a paragraph.</p>
</body>
</html>`}
        />

        <Typography variant="body1" paragraph>
          The DOM tree would look like:
        </Typography>
        <CodeBlock
          code={`Document
└── html
  └── body
      ├── h1
      └── p`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧰 DOM Manipulation with JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          You can use JavaScript to access and manipulate DOM elements.
        </Typography>

        <CodeBlock
          code={`// Accessing elements
const heading = document.querySelector("h1");

// Changing text
heading.textContent = "Welcome to the DOM";

// Changing styles
heading.style.color = "blue";`}
        />

        <Typography variant="h6" gutterBottom>
          Adding Elements
        </Typography>
        <CodeBlock
          code={`const para = document.createElement("p");
para.textContent = "This was added using JS!";
document.body.appendChild(para);`}
        />

        <Typography variant="h6" gutterBottom>
          Removing Elements
        </Typography>
        <CodeBlock
          code={`const oldPara = document.querySelector("p");
oldPara.remove();`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Common DOM Methods
        </Typography>

        <ul>
          <li>
            <code>document.getElementById(id)</code>
          </li>
          <li>
            <code>document.querySelector(selector)</code>
          </li>
          <li>
            <code>element.appendChild()</code>
          </li>
          <li>
            <code>element.remove()</code>
          </li>
          <li>
            <code>element.setAttribute(name, value)</code>
          </li>
          <li>
            <code>element.classList.add/remove/toggle</code>
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Real-Time Use Case
        </Typography>

        <Typography variant="body1" paragraph>
          You can use the DOM to build interactive pages:
        </Typography>

        <CodeBlock
          code={`document.querySelector("#btn").addEventListener("click", () => {
document.querySelector("#text").textContent = "You clicked the button!";
});`}
        />

        <Typography variant="body1">
          This allows dynamic user interactions without reloading the page.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Summary
        </Typography>
        <Typography variant="body1" paragraph>
          The DOM allows developers to:
          <ul>
            <li>Traverse the document structure</li>
            <li>Manipulate HTML elements dynamically</li>
            <li>Respond to user events</li>
            <li>Create interactive web experiences</li>
          </ul>
          Mastering the DOM is essential for frontend developers building rich
          and dynamic UIs.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How do you select elements in the DOM?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🔍 How to Select Elements in the DOM
        </Typography>

        <Typography variant="body1" paragraph>
          JavaScript provides multiple ways to select elements in the DOM. Each
          method is useful in different scenarios depending on how you want to
          access the element: by ID, class, tag, or complex selectors.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          1️⃣ <code>document.getElementById()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          Selects a single element by its <strong>ID</strong>. Returns the
          element directly or <code>null</code> if not found.
        </Typography>
        <CodeBlock
          code={`<div id="myDiv">Hello!</div>

<script>
const div = document.getElementById("myDiv");
console.log(div.textContent); // Output: Hello!
</script>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          2️⃣ <code>document.getElementsByClassName()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          Selects all elements with a specific class name. Returns an{" "}
          <strong>HTMLCollection</strong> (not an array).
        </Typography>
        <CodeBlock
          code={`<p class="note">Note 1</p>
<p class="note">Note 2</p>

<script>
const notes = document.getElementsByClassName("note");
console.log(notes[0].textContent); // Output: Note 1
</script>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          3️⃣ <code>document.getElementsByTagName()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          Selects all elements with a given tag name (like <code>div</code>,{" "}
          <code>p</code>, etc.).
        </Typography>
        <CodeBlock
          code={`<div>Box 1</div>
<div>Box 2</div>

<script>
const divs = document.getElementsByTagName("div");
console.log(divs.length); // Output: 2
</script>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          4️⃣ <code>document.querySelector()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          Selects the <strong>first matching element</strong> using any valid
          CSS selector.
        </Typography>
        <CodeBlock
          code={`<p class="intro">First paragraph</p>
<p class="intro">Second paragraph</p>

<script>
const firstIntro = document.querySelector(".intro");
console.log(firstIntro.textContent); // Output: First paragraph
</script>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          5️⃣ <code>document.querySelectorAll()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          Selects <strong>all matching elements</strong> using any CSS selector.
          Returns a **NodeList** (can use <code>forEach</code>).
        </Typography>
        <CodeBlock
          code={`<li class="item">Item 1</li>
<li class="item">Item 2</li>

<script>
const items = document.querySelectorAll(".item");
items.forEach(item => console.log(item.textContent));
</script>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Summary of Selectors
        </Typography>
        <List>
          <ListItem>
            📌 <code>getElementById</code> — Single element by ID
          </ListItem>
          <ListItem>
            📌 <code>getElementsByClassName</code> — Collection by class
          </ListItem>
          <ListItem>
            📌 <code>getElementsByTagName</code> — Collection by tag
          </ListItem>
          <ListItem>
            📌 <code>querySelector</code> — First match via CSS selector
          </ListItem>
          <ListItem>
            📌 <code>querySelectorAll</code> — All matches via CSS selector
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Best Practices
        </Typography>
        <Typography variant="body1" paragraph>
          - Prefer <code>querySelector</code> and <code>querySelectorAll</code>{" "}
          for flexibility.
          <br />- Convert NodeList/HTMLCollection to array using{" "}
          <code>[...collection]</code> if needed.
          <br />- Always check if elements exist before manipulating them.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "What is the difference between innerText, textContent, and innerHTML?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🧠 Difference Between <code>innerText</code>, <code>textContent</code>
          , and <code>innerHTML</code>
        </Typography>

        <Typography variant="body1" paragraph>
          These three properties are often used to retrieve or set the content
          of DOM elements — but they behave differently. Let's understand their
          differences with definitions, examples, and when to use them.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* innerText */}
        <Typography variant="h5" gutterBottom>
          1️⃣ <code>innerText</code>
        </Typography>
        <Typography variant="body1" paragraph>
          - Retrieves or sets the **rendered text** of a node and its
          descendants.
          <br />- Takes **CSS styles** (like <code>display: none</code>) into
          account.
          <br />- Causes reflow (slower performance than textContent).
        </Typography>
        <CodeBlock
          code={`<div id="example1">
Visible Text
<span style="display: none;">Hidden Text</span>
</div>

<script>
const div = document.getElementById("example1");
console.log(div.innerText); // Output: "Visible Text"
</script>`}
        />

        <Divider sx={{ my: 4 }} />

        {/* textContent */}
        <Typography variant="h5" gutterBottom>
          2️⃣ <code>textContent</code>
        </Typography>
        <Typography variant="body1" paragraph>
          - Retrieves or sets the **full text content**, regardless of CSS
          styling.
          <br />
          - Does **not** trigger reflow or repaint.
          <br />- Returns all text, including hidden elements.
        </Typography>
        <CodeBlock
          code={`<div id="example2">
Visible Text
<span style="display: none;">Hidden Text</span>
</div>

<script>
const div = document.getElementById("example2");
console.log(div.textContent); // Output: "Visible Text\\n  Hidden Text"
</script>`}
        />

        <Divider sx={{ my: 4 }} />

        {/* innerHTML */}
        <Typography variant="h5" gutterBottom>
          3️⃣ <code>innerHTML</code>
        </Typography>
        <Typography variant="body1" paragraph>
          - Retrieves or sets the **HTML markup** inside an element.
          <br />
          - Includes tags and structure.
          <br />- Can be used to insert HTML dynamically.
        </Typography>
        <CodeBlock
          code={`<div id="example3">
<strong>Bold Text</strong>
</div>

<script>
const div = document.getElementById("example3");
console.log(div.innerHTML); // Output: "<strong>Bold Text</strong>"
</script>`}
        />

        <Divider sx={{ my: 4 }} />

        {/* Comparison Table */}
        <Typography variant="h5" gutterBottom>
          🔍 Comparison Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid size={4}>
            <Typography variant="subtitle1" fontWeight="bold">
              Property
            </Typography>
            <Typography>innerText</Typography>
            <Typography>textContent</Typography>
            <Typography>innerHTML</Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="subtitle1" fontWeight="bold">
              Returns
            </Typography>
            <Typography>Visible text only</Typography>
            <Typography>All text (even hidden)</Typography>
            <Typography>Raw HTML string</Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="subtitle1" fontWeight="bold">
              Use Case
            </Typography>
            <Typography>User-visible content</Typography>
            <Typography>Performance-friendly reading</Typography>
            <Typography>Inject or read HTML</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          ✅ When to Use What?
        </Typography>
        <Typography variant="body1" paragraph>
          - Use <code>innerText</code> if you only care about **visible** text
          on the page.
          <br />- Use <code>textContent</code> when you want the **entire
          text**, including hidden elements, and want **better performance**.
          <br />- Use <code>innerHTML</code> when working with **HTML tags or
          markup** inside elements.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How can you create and append elements to the DOM?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🛠️ How to Create and Append Elements to the DOM using JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          Manipulating the DOM allows you to dynamically create HTML elements,
          set their content or style, and insert them into the document. Let’s
          break it down step-by-step.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Step 1: Creating an element */}
        <Typography variant="h5" gutterBottom>
          1️⃣ Create an Element using <code>document.createElement()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          This method creates a new HTML element, but it does not add it to the
          document yet.
        </Typography>
        <CodeBlock code={`const newDiv = document.createElement('div');`} />

        <Divider sx={{ my: 4 }} />

        {/* Step 2: Set text or HTML content */}
        <Typography variant="h5" gutterBottom>
          2️⃣ Set Content using <code>textContent</code> or{" "}
          <code>innerHTML</code>
        </Typography>
        <Typography variant="body1" paragraph>
          Once the element is created, you can add text or HTML to it.
        </Typography>
        <CodeBlock code={`newDiv.textContent = "Hello from JavaScript!";`} />
        <Typography variant="body2" sx={{ mt: 1 }}>
          OR
        </Typography>
        <CodeBlock
          code={`newDiv.innerHTML = "<strong>Hello</strong> from JavaScript!";`}
        />

        <Divider sx={{ my: 4 }} />

        {/* Step 3: Add attributes or classes */}
        <Typography variant="h5" gutterBottom>
          3️⃣ Add Attributes, Classes, or Styles
        </Typography>
        <CodeBlock
          code={`newDiv.setAttribute('id', 'greetingDiv');
newDiv.classList.add('highlight');
newDiv.style.color = 'blue';
newDiv.style.padding = '10px';`}
        />

        <Divider sx={{ my: 4 }} />

        {/* Step 4: Append to DOM */}
        <Typography variant="h5" gutterBottom>
          4️⃣ Append to the DOM using <code>appendChild()</code> or{" "}
          <code>append()</code>
        </Typography>
        <Typography variant="body1" paragraph>
          You can append it to an existing element like <code>body</code>, a{" "}
          <code>div</code>, or any other parent node.
        </Typography>
        <CodeBlock code={`document.body.appendChild(newDiv);`} />
        <Typography variant="body2" sx={{ mt: 1 }}>
          OR use <code>append()</code> if you want to append multiple nodes or
          mix of text and elements:
        </Typography>
        <CodeBlock
          code={`const span = document.createElement('span');
span.textContent = " (Nice to meet you!)";

newDiv.append(" — Greetings!", span);`}
        />

        <Divider sx={{ my: 4 }} />

        {/* Bonus: Full Example */}
        <Typography variant="h5" gutterBottom>
          🎁 Full Example – Create, Style, and Append a Div
        </Typography>
        <CodeBlock
          code={`<script>
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
newDiv.setAttribute("id", "helloBox");
newDiv.style.backgroundColor = "#e0f7fa";
newDiv.style.padding = "12px";
newDiv.style.borderRadius = "8px";
newDiv.style.fontSize = "18px";
newDiv.style.marginTop = "16px";

document.body.appendChild(newDiv);
</script>`}
        />

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Typography variant="subtitle1" fontWeight="bold">
              Method
            </Typography>
            <Typography>createElement</Typography>
            <Typography>setAttribute</Typography>
            <Typography>appendChild</Typography>
          </Grid>
          <Grid size={6}>
            <Typography variant="subtitle1" fontWeight="bold">
              Purpose
            </Typography>
            <Typography>Create a new element</Typography>
            <Typography>Set an attribute like id or src</Typography>
            <Typography>Add element to the DOM</Typography>
          </Grid>
        </Grid>
      </Box>
    ),
  },
  {
    heading: "How do you handle events in JavaScript?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🎯 How to Handle Events in JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          Events are actions that happen in the browser (like clicks, mouse
          movement, or form submission). JavaScript allows you to respond to
          these events using <strong>event listeners</strong>.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Step 1: Inline Event Handlers */}
        <Typography variant="h5" gutterBottom>
          1️⃣ Inline Event Handlers (Not Recommended for JS-Only Projects)
        </Typography>
        <Typography variant="body1" paragraph>
          You can handle events directly in HTML using attributes like{" "}
          <code>onclick</code>.
        </Typography>
        <CodeBlock
          code={`<button onclick="alert('Button clicked!')">Click Me</button>`}
        />
        <Typography variant="body2" color="text.secondary">
          ✅ Simple but not scalable or recommended in modern JavaScript
          applications.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Step 2: addEventListener() */}
        <Typography variant="h5" gutterBottom>
          2️⃣ Using <code>addEventListener()</code> – The Modern Way
        </Typography>
        <Typography variant="body1" paragraph>
          You can add an event listener to any DOM element using{" "}
          <code>addEventListener()</code>.
        </Typography>
        <CodeBlock
          code={`const button = document.getElementById("myButton");

button.addEventListener("click", function () {
alert("Button clicked!");
});`}
        />
        <Paper elevation={2} sx={{ p: 2, my: 2 }}>
          <Typography>
            You can also use arrow functions or named functions:
          </Typography>
          <CodeBlock
            code={`button.addEventListener("click", () => console.log("Clicked!"));`}
          />
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* Step 3: Event Object */}
        <Typography variant="h5" gutterBottom>
          3️⃣ Event Object (<code>event</code> or <code>e</code>)
        </Typography>
        <Typography variant="body1" paragraph>
          Every event listener receives an <strong>event object</strong>{" "}
          containing information about the event.
        </Typography>
        <CodeBlock
          code={`button.addEventListener("click", function (event) {
console.log("Event type:", event.type);
console.log("Target:", event.target);
});`}
        />

        <Divider sx={{ my: 4 }} />

        {/* Step 4: Common Events */}
        <Typography variant="h5" gutterBottom>
          4️⃣ Common Events
        </Typography>
        <List>
          <ListItem>
            <Chip label="click" sx={{ mr: 2 }} /> When an element is clicked
          </ListItem>
          <ListItem>
            <Chip label="mouseover" sx={{ mr: 2 }} /> When the mouse hovers
          </ListItem>
          <ListItem>
            <Chip label="keydown" sx={{ mr: 2 }} /> When a keyboard key is
            pressed
          </ListItem>
          <ListItem>
            <Chip label="submit" sx={{ mr: 2 }} /> When a form is submitted
          </ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        {/* Step 5: Removing an Event Listener */}
        <Typography variant="h5" gutterBottom>
          5️⃣ Removing an Event Listener
        </Typography>
        <Typography variant="body1" paragraph>
          Use <code>removeEventListener()</code> with a reference to the exact
          function.
        </Typography>
        <CodeBlock
          code={`function handleClick() {
console.log("Clicked once");
}

button.addEventListener("click", handleClick);

// Later
button.removeEventListener("click", handleClick);`}
        />

        <Divider sx={{ my: 4 }} />

        {/* Step 6: Event Delegation */}
        <Typography variant="h5" gutterBottom>
          6️⃣ Event Delegation
        </Typography>
        <Typography variant="body1" paragraph>
          Instead of adding listeners to multiple child elements, you can attach
          one to a parent and use <code>event.target</code> to identify the
          clicked child.
        </Typography>
        <CodeBlock
          code={`document.getElementById("list").addEventListener("click", function (e) {
if (e.target && e.target.nodeName === "LI") {
  console.log("List item clicked:", e.target.textContent);
}
});`}
        />
        <CodeBlock
          code={`<ul id="list">
<li>Item 1</li>
<li>Item 2</li>
</ul>`}
        />

        <Divider sx={{ my: 4 }} />

        {/* Summary */}
        <Typography variant="h5" gutterBottom>
          ✅ Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Typography variant="subtitle1" fontWeight="bold">
              Technique
            </Typography>
            <Typography>Inline handlers</Typography>
            <Typography>addEventListener</Typography>
            <Typography>Event delegation</Typography>
            <Typography>Removing handlers</Typography>
          </Grid>
          <Grid size={6}>
            <Typography variant="subtitle1" fontWeight="bold">
              Use Case
            </Typography>
            <Typography>Quick demos</Typography>
            <Typography>Best practice for modern apps</Typography>
            <Typography>Handling many child events</Typography>
            <Typography>Memory management</Typography>
          </Grid>
        </Grid>
      </Box>
    ),
  },
  {
    heading: "What is event bubbling and capturing?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🔄 Event Bubbling and Capturing in JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          When an event occurs on an element inside another element, both
          elements can respond to that event due to JavaScript’s{" "}
          <strong>event propagation model</strong>. This process includes two
          phases:
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Definitions */}
        <Grid container spacing={3}>
          <Grid size={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                🔼 Event Bubbling (Default)
              </Typography>
              <Typography>
                The event starts from the <strong>target element</strong> and
                bubbles up to the ancestors (parent → grandparent → document).
              </Typography>
              <CodeBlock
                code={`element.addEventListener("click", handler); // Bubbling by default`}
              />
            </Paper>
          </Grid>
          <Grid size={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                🔽 Event Capturing (Rare)
              </Typography>
              <Typography>
                The event starts from the <strong>document</strong> and travels
                down to the target element (document → grandparent → parent →
                target).
              </Typography>
              <CodeBlock
                code={`element.addEventListener("click", handler, true); // Capturing mode`}
              />
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Visualization */}
        <Typography variant="h5" gutterBottom>
          👀 Visual Example
        </Typography>
        <Box
          id="outer"
          sx={{
            backgroundColor: "#fce4ec",
            p: 4,
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          <Typography variant="subtitle1">Outer (Parent)</Typography>
          <Box
            id="inner"
            sx={{
              backgroundColor: "#f8bbd0",
              p: 2,
              mt: 2,
              borderRadius: 1,
            }}
          >
            <Typography>Inner (Child)</Typography>
          </Box>
        </Box>

        <Typography variant="body2" mt={2} color="text.secondary">
          ✅ Open your browser console and click the inner box to observe
          bubbling & capturing logs.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Phases */}
        <Typography variant="h5" gutterBottom>
          🔍 Event Propagation Phases
        </Typography>
        <List>
          <ListItem>
            <Chip label="Capture Phase" sx={{ mr: 2 }} />
            Top → Down (Document → Target)
          </ListItem>
          <ListItem>
            <Chip label="Target Phase" sx={{ mr: 2 }} />
            Event hits the target element
          </ListItem>
          <ListItem>
            <Chip label="Bubble Phase" sx={{ mr: 2 }} />
            Bottom → Up (Target → Document)
          </ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        {/* How to Stop Propagation */}
        <Typography variant="h5" gutterBottom>
          ✋ How to Stop Event Propagation
        </Typography>
        <Typography>
          Use <code>event.stopPropagation()</code> to stop the event from
          continuing up or down the DOM.
        </Typography>
        <CodeBlock
          code={`element.addEventListener("click", function (event) {
event.stopPropagation();
console.log("Only this element handles the click.");
});`}
        />

        <Divider sx={{ my: 4 }} />

        {/* Summary */}
        <Typography variant="h5" gutterBottom>
          ✅ Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Typography variant="subtitle1" fontWeight="bold">
              Event Bubbling
            </Typography>
            <Typography>Default behavior</Typography>
            <Typography>Child → Parent</Typography>
            <Typography>Common in real-world apps</Typography>
          </Grid>
          <Grid size={6}>
            <Typography variant="subtitle1" fontWeight="bold">
              Event Capturing
            </Typography>
            <Typography>Less common</Typography>
            <Typography>Parent → Child</Typography>
            <Typography>
              Must pass <code>true</code> to listener
            </Typography>
          </Grid>
        </Grid>
      </Box>
    ),
  },
  {
    heading: "What is event.preventDefault()?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🚫 Understanding <code>event.preventDefault()</code> in JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          The <code>event.preventDefault()</code> method is used to stop the
          default behavior of an element from occurring.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={3}>
          {/* Definition */}
          <Grid size={6}>
            <Card sx={{ backgroundColor: "#e3f2fd" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  📖 Definition
                </Typography>
                <Typography variant="body2">
                  This method tells the browser, “Hey! Don’t do what you
                  normally would with this event.”
                </Typography>
                <CodeBlock
                  code={`event.preventDefault(); // Stops default browser action`}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Use Cases */}
          <Grid size={6}>
            <Card sx={{ backgroundColor: "#f3e5f5" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  💡 Common Use Cases
                </Typography>
                <ul>
                  <li>Prevent form submission</li>
                  <li>Prevent anchor navigation</li>
                  <li>Stop checkbox or radio default toggling</li>
                  <li>Prevent drag/drop default behavior</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Form Example */}
        <Typography variant="h5" gutterBottom>
          🧾 Example 1: Prevent Form Submission
        </Typography>
        <Typography variant="body2" paragraph>
          This prevents the page from refreshing when submitting a form:
        </Typography>
        <CodeBlock
          code={`<form onSubmit={handleSubmit}>
<button type="submit">Submit</button>
</form>

function handleSubmit(e) {
e.preventDefault(); // Prevents page reload
console.log("Form submission prevented");
}`}
        />
        <Box
          component="form"
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            alert("Form submission prevented!");
          }}
          sx={{
            display: "flex",
            gap: 2,
            mt: 2,
            alignItems: "center",
          }}
        >
          <TextField label="Name" variant="outlined" size="small" />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Link Example */}
        <Typography variant="h5" gutterBottom>
          🔗 Example 2: Prevent Anchor Navigation
        </Typography>
        <Typography variant="body2" paragraph>
          Preventing a link from navigating to its <code>href</code>:
        </Typography>
        <CodeBlock
          code={`<a href="https://google.com" onClick={handleClick}>
Go to Google
</a>

function handleClick(e) {
e.preventDefault(); // Stops redirect
console.log("Navigation canceled");
}`}
        />
        <Link
          href="https://google.com"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            alert("Navigation prevented!");
          }}
          underline="hover"
          sx={{ mt: 2, display: "inline-block", fontWeight: 600 }}
        >
          Go to Google
        </Link>

        <Divider sx={{ my: 4 }} />

        {/* Summary */}
        <Typography variant="h5" gutterBottom>
          📌 Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Typography fontWeight="bold">✅ When to Use</Typography>
            <ul>
              <li>Custom form validation</li>
              <li>Single-page navigation control</li>
              <li>Prevent automatic browser behavior</li>
            </ul>
          </Grid>
          <Grid size={6}>
            <Typography fontWeight="bold">⚠️ Don’t Forget</Typography>
            <ul>
              <li>
                <code>preventDefault()</code> only stops default action,
                <br />
                not event bubbling.
              </li>
              <li>
                Use <code>stopPropagation()</code> for bubbling.
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    ),
  },
  {
    heading: "What is event.stopPropagation()?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🛑 Understanding <code>event.stopPropagation()</code>
        </Typography>

        <Typography variant="body1" paragraph>
          The <code>event.stopPropagation()</code> method is used to stop an
          event from bubbling up (or propagating) to parent elements in the DOM.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={3}>
          {/* Definition */}
          <Grid size={6}>
            <Card sx={{ backgroundColor: "#fff8e1" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  📖 Definition
                </Typography>
                <Typography variant="body2">
                  When an event occurs on a nested element, it naturally bubbles
                  up to its ancestors. <code>stopPropagation()</code> halts that
                  process.
                </Typography>
                <CodeBlock
                  code={`element.addEventListener('click', function(event) {
event.stopPropagation(); // Prevents event bubbling
});`}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* When to use */}
          <Grid size={6}>
            <Card sx={{ backgroundColor: "#e1f5fe" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  💡 When to Use
                </Typography>
                <ul>
                  <li>Prevent parent click handlers from firing</li>
                  <li>Isolate logic to specific components</li>
                  <li>Handle modals, dropdowns, tooltips correctly</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Code Example */}
        <Typography variant="h5" gutterBottom>
          🧪 Example: Prevent Click Bubbling
        </Typography>

        <Typography variant="body2" paragraph>
          In this example, clicking the inner box won’t trigger the outer box's
          click handler because we use <code>stopPropagation()</code>.
        </Typography>

        <CodeBlock
          code={`<div onClick={handleOuterClick} style={{ padding: "40px", background: "#d1c4e9" }}>
Outer Div
<div onClick={(e) => {
  e.stopPropagation();
  alert("Inner Div Clicked!");
}} style={{ padding: "20px", background: "#ce93d8", marginTop: "10px" }}>
  Inner Div
</div>
</div>`}
        />

        {/* Visual Representation */}
        <Paper
          elevation={3}
          onClick={() => {
            alert("Outer Div Clicked!");
          }}
          sx={{
            backgroundColor: "#d1c4e9",
            p: 3,
            mt: 2,
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          <Typography variant="body1" gutterBottom>
            Outer Div (click me!)
          </Typography>
          <Paper
            elevation={1}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              alert("Inner Div Clicked!");
            }}
            sx={{
              backgroundColor: "#ce93d8",
              p: 2,
              mt: 1,
              cursor: "pointer",
            }}
          >
            <Typography variant="body2">Inner Div (click me!)</Typography>
          </Paper>
        </Paper>

        <Divider sx={{ my: 4 }} />

        {/* Summary Table */}
        <Typography variant="h5" gutterBottom>
          📝 Summary Table
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <Card sx={{ backgroundColor: "#f1f8e9" }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    event.preventDefault()
                  </Typography>
                  <Typography variant="body2">
                    Stops the default browser behavior like submitting a form or
                    following a link.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={6}>
              <Card sx={{ backgroundColor: "#fce4ec" }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    event.stopPropagation()
                  </Typography>
                  <Typography variant="body2">
                    Stops the event from bubbling up to parent elements.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    ),
  },
  {
    heading: "How can you delegate events in JavaScript?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🧭 Event Delegation in JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          Event Delegation is a technique where you add a **single event
          listener** to a **parent element** instead of each child. This works
          due to event bubbling, where events move up the DOM tree.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={3}>
          {/* Definition Card */}
          <Grid size={6}>
            <Card sx={{ backgroundColor: "#e8f5e9" }}>
              <CardContent>
                <Typography variant="h6">📚 Definition</Typography>
                <Typography variant="body2">
                  Event Delegation leverages the event propagation (bubbling)
                  mechanism to catch events on child elements using a single
                  parent handler.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Benefits Card */}
          <Grid size={6}>
            <Card sx={{ backgroundColor: "#e3f2fd" }}>
              <CardContent>
                <Typography variant="h6">🌟 Benefits</Typography>
                <ul>
                  <li>Fewer event listeners → better performance</li>
                  <li>Works even if new children are added dynamically</li>
                  <li>Cleaner, scalable code</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Example: List Items with Delegated Events
        </Typography>
        <Typography variant="body2" paragraph>
          We add **one event listener** on the <code>ul</code> tag. Clicking any{" "}
          <code>li</code>
          item triggers the handler because the event bubbles up.
        </Typography>

        <CodeBlock
          code={`// HTML Structure
<ul id="delegation-parent">
<li class="delegated-item">Item 1</li>
<li class="delegated-item">Item 2</li>
<li class="delegated-item">Item 3</li>
</ul>

// JavaScript
document.getElementById("delegation-parent").addEventListener("click", function (e) {
if (e.target.classList.contains("delegated-item")) {
  alert("Clicked: " + e.target.textContent);
}
});`}
        />

        <Box sx={{ mt: 3 }}>
          <Paper sx={{ p: 2 }} elevation={3}>
            <Typography variant="subtitle1" gutterBottom>
              Delegated List
            </Typography>
            <List id="delegation-parent">
              <ListItem className="delegated-item">
                <ListItemText primary="Item 1" />
              </ListItem>
              <ListItem className="delegated-item">
                <ListItemText primary="Item 2" />
              </ListItem>
              <ListItem className="delegated-item">
                <ListItemText primary="Item 3" />
              </ListItem>
            </List>
          </Paper>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          🧠 How It Works Under the Hood
        </Typography>
        <Card sx={{ backgroundColor: "#fff3e0", mt: 2 }}>
          <CardContent>
            <Typography variant="body2">
              When a child element is clicked, the event bubbles up to the
              parent. The parent checks if the original target matches a
              selector using
              <code>event.target</code> and takes action.
            </Typography>
          </CardContent>
        </Card>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Real-World Use Cases
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="✅ Click handling on dynamic table rows" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Dropdown or accordion item clicks" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Chat app messages added dynamically" />
          </ListItem>
        </List>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          📌 Summary Table
        </Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid size={6}>
            <Card sx={{ backgroundColor: "#c8e6c9" }}>
              <CardContent>
                <Typography variant="subtitle2" fontWeight="bold">
                  Traditional Event Binding
                </Typography>
                <Typography variant="body2">
                  Attach event to every child manually.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={6}>
            <Card sx={{ backgroundColor: "#b2dfdb" }}>
              <CardContent>
                <Typography variant="subtitle2" fontWeight="bold">
                  Event Delegation
                </Typography>
                <Typography variant="body2">
                  Attach a single listener to the parent, use logic to handle
                  target.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    ),
  },
  {
    heading: "How can you modify CSS styles using JavaScript?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🎨 Modifying CSS Styles Using JavaScript
        </Typography>

        <Typography variant="body1" paragraph>
          JavaScript provides several ways to modify the style of HTML elements
          dynamically. This includes changing colors, fonts, dimensions, and
          more.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={3}>
          {/* Basic Method */}
          <Grid size={6}>
            <Card sx={{ backgroundColor: "#fffde7" }}>
              <CardContent>
                <Typography variant="h6">
                  ✏️ Using <code>element.style</code>
                </Typography>
                <Typography variant="body2">
                  This allows direct inline styling on an element:
                </Typography>
                <CodeBlock
                  code={`const box = document.getElementById("box");
box.style.color = "blue";
box.style.fontSize = "20px";`}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Using classList */}
          <Grid size={6}>
            <Card sx={{ backgroundColor: "#e8f5e9" }}>
              <CardContent>
                <Typography variant="h6">
                  🧩 Using <code>classList</code>
                </Typography>
                <Typography variant="body2">
                  Add or remove classes dynamically to change style via CSS:
                </Typography>
                <CodeBlock
                  code={`const element = document.getElementById("card");
element.classList.add("highlight");
element.classList.remove("shadow");`}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Example: Styling a Box Dynamically
        </Typography>

        <Paper id="target-box" elevation={3} sx={{ my: 3 }}>
          <Typography>This box's style was set using JavaScript!</Typography>
        </Paper>

        <Button
          variant="contained"
          onClick={() => {
            const box = document.getElementById("target-box");
            if (box) {
              box.style.backgroundColor = "#d32f2f";
              box.style.transform = "scale(1.1)";
            }
          }}
        >
          Change Box Style on Click
        </Button>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Summary
        </Typography>
        <ul>
          <li>
            <strong>element.style.property</strong> – Direct inline style
            manipulation.
          </li>
          <li>
            <strong>element.classList.add/remove/toggle</strong> – Apply CSS
            classes dynamically.
          </li>
          <li>
            <strong>Computed Styles</strong> – Get current values via{" "}
            <code>window.getComputedStyle(element)</code>
          </li>
        </ul>
      </Box>
    ),
  },
];
