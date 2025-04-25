import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const ADVANCED_REACT_DATA = [
  {
    heading: "How does React handle reconciliation and diffing?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          🔄 How React Handles Reconciliation and Diffing
        </Typography>

        <Typography variant="body1" paragraph>
          React's reconciliation process is the algorithm React uses to update
          the DOM efficiently. When a component’s state or props change, React
          re-renders the component and uses its diffing algorithm to compare the
          new virtual DOM with the previous one. Only the parts of the DOM that
          changed are updated.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 What is the Virtual DOM?
        </Typography>
        <Typography variant="body1" paragraph>
          React keeps a lightweight copy of the real DOM in memory called the
          Virtual DOM. When state or props change, React:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="1. Creates a new Virtual DOM tree." />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Diffs it with the previous tree." />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. Calculates the minimum number of changes." />
          </ListItem>
          <ListItem>
            <ListItemText primary="4. Applies those changes to the real DOM." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ React’s Diffing Algorithm
        </Typography>
        <Typography variant="body1" paragraph>
          React uses a heuristic O(n) algorithm (not O(n³)) that assumes:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="1. Elements of different types will produce different trees." />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Developers can hint at which child elements may be stable across renders using keys." />
          </ListItem>
        </List>

        <Typography variant="body1" paragraph>
          Here’s a simple code snippet where a key helps React reconcile
          efficiently:
        </Typography>

        <CodeBlock
          code={`// Efficient diffing with keys
{items.map(item => (
<li key={item.id}>{item.name}</li>
))}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🆚 Without Keys (Inefficient)
        </Typography>
        <Typography variant="body1" paragraph>
          Without unique keys, React assumes DOM elements at the same index are
          the same.
        </Typography>

        <CodeBlock
          code={`// May lead to bugs during reordering
{items.map(item => (
<li>{item.name}</li>
))}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Re-render vs. Reconciliation
        </Typography>
        <Typography variant="body1" paragraph>
          It's important to understand that re-rendering doesn’t always mean the
          DOM changes. React compares the new Virtual DOM to the old one and
          only updates what’s necessary.
        </Typography>

        <CodeBlock
          code={`// Re-render triggers diff, not full DOM update
setState(newValue); // causes virtual DOM diff and minimal updates`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 When Does Reconciliation Happen?
        </Typography>
        <Typography variant="body1" paragraph>
          Reconciliation is triggered when:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="✅ Component state is updated." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Component receives new props." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Parent re-renders and re-renders children." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ Common Pitfalls
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="Using array indexes as keys"
              secondary="This can cause unnecessary DOM updates when array items are reordered."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Overusing state at parent levels"
              secondary="It can cause unnecessary re-renders of all children."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Bonus: Reconciliation of Components with the Same Type
        </Typography>
        <Typography variant="body1" paragraph>
          When React compares two elements of the same type:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="It keeps the DOM node and updates only changed props." />
          </ListItem>
          <ListItem>
            <ListItemText primary="It recursively diff children too." />
          </ListItem>
        </List>

        <CodeBlock
          code={`<button className="btn">Click</button>

// Later re-render
<button className="btn btn-primary">Click</button>

// Only className is updated in the DOM.`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          React's reconciliation algorithm is powerful, optimized, and mostly
          invisible—until performance issues arise. Understanding it can help
          you write better, more performant UI.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is Concurrent Mode in React?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          ⚛️ What is Concurrent Mode in React?
        </Typography>

        <Typography variant="body1" paragraph>
          Concurrent Mode is a set of new features in React that help apps stay
          responsive and gracefully adjust to the user’s device capabilities and
          network speed. It enables React to interrupt rendering work to handle
          more urgent updates like user input, which is essential for smooth
          experiences.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Traditional Rendering (Blocking)
        </Typography>
        <Typography variant="body1" paragraph>
          In traditional mode (before Concurrent Mode), React rendering is
          synchronous and blocking. Once it starts rendering, it can’t stop
          until the process is complete.
        </Typography>

        <CodeBlock
          code={`// Traditional rendering (sync)
render() {
// React blocks rendering until this is done
return <BigComponent />;
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ What Does Concurrent Mode Do?
        </Typography>
        <Typography variant="body1" paragraph>
          Concurrent Mode lets React:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="✅ Pause work and come back to it later." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Prioritize updates (like input over rendering)." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Reuse previously rendered content while loading new content." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 How to Enable Concurrent Features
        </Typography>
        <Typography variant="body1" paragraph>
          React 18 enables concurrent features **automatically** when you use
          the new `createRoot` API.
        </Typography>

        <CodeBlock
          code={`// index.tsx with Concurrent Mode
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Features Using Concurrent Mode
        </Typography>
        <Typography variant="body1" paragraph>
          Some APIs that benefit from Concurrent Mode:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="🌀 `startTransition()` for non-urgent updates" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🧊 `useDeferredValue()` to delay rendering heavy stuff" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🌙 `Suspense` for asynchronous rendering (like data fetching)" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🌀 Using startTransition
        </Typography>
        <Typography variant="body1" paragraph>
          Wrap non-urgent updates inside `startTransition()` so that user
          interactions like typing aren’t blocked:
        </Typography>

        <CodeBlock
          code={`import { startTransition, useState } from 'react';

const SearchComponent = () => {
const [results, setResults] = useState([]);

const handleSearch = (query: string) => {
  startTransition(() => {
    // simulate slow filtering
    const filtered = heavySearch(query);
    setResults(filtered);
  });
};

return <input onChange={(e) => handleSearch(e.target.value)} />;
};`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧊 useDeferredValue
        </Typography>
        <Typography variant="body1" paragraph>
          Helps in rendering a "laggy" value after the urgent one (like input
          value).
        </Typography>

        <CodeBlock
          code={`import { useDeferredValue } from 'react';

const DeferredComponent = ({ value }) => {
const deferredValue = useDeferredValue(value);

return <ExpensiveList input={deferredValue} />;
};`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⛔ Important Notes
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="Concurrent rendering is not always faster"
              secondary="It improves responsiveness, not raw speed."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="You don’t control when rendering is paused"
              secondary="React decides when to yield control."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" color="text.secondary">
          Concurrent Mode is a step toward making React apps feel snappier,
          responsive, and modern — especially useful for large, data-heavy UIs
          or slow networks.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "how react works behind the scenes like bundle in network tab and other concepts?",
    content: (
      <Box my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          ⚙️ How React Works Behind the Scenes
        </Typography>

        <Typography variant="body1" paragraph>
          React is a powerful JavaScript library that abstracts the DOM and
          handles UI rendering in an efficient and declarative way. But how does
          it actually work under the hood—from development to rendering in the
          browser? Let’s explore this step-by-step.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 1. Bundling & Build Process
        </Typography>

        <Typography variant="body2" paragraph>
          React code is typically written using JSX and ES6+ features. Tools
          like <strong>Webpack</strong>, <strong>Vite</strong>, or{" "}
          <strong>Parcel</strong> bundle your code into optimized JavaScript
          files.
        </Typography>

        <CodeBlock
          code={`// Example: Entry point (index.tsx or main.tsx)
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
`}
        />

        <Typography variant="body2" paragraph>
          During build time, tools:
          <ul>
            <li>Transpile JSX to JavaScript</li>
            <li>Tree-shake unused code</li>
            <li>Minify and compress bundles</li>
            <li>Split code into multiple chunks</li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🌐 2. What You See in the Network Tab
        </Typography>

        <Typography variant="body2" paragraph>
          When you inspect the Network tab in DevTools for a React app, you
          usually see:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="index.html"
              secondary="A minimal HTML file that includes a root div and script tags."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="main.[hash].js"
              secondary="Main JavaScript bundle containing your app’s logic."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="chunk.[hash].js"
              secondary="Dynamically imported or lazily loaded parts of your app."
            />
          </ListItem>
        </List>

        <Typography variant="body2" paragraph>
          These are all the result of your bundler intelligently optimizing for
          performance and caching.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 3. Virtual DOM and Reconciliation
        </Typography>

        <Typography variant="body2" paragraph>
          React creates a lightweight copy of the actual DOM (called the Virtual
          DOM). On every render:
        </Typography>

        <ol>
          <li>React builds a new Virtual DOM tree.</li>
          <li>It diffs the new tree with the previous one.</li>
          <li>Calculates the minimal set of changes.</li>
          <li>Updates only the changed parts in the real DOM.</li>
        </ol>

        <Typography variant="body2" paragraph>
          This makes React blazing fast compared to direct DOM manipulation.
        </Typography>

        <CodeBlock
          code={`// React under the hood (conceptually)
function renderComponent() {
const newVDOM = render(); // create new virtual DOM
const patches = diff(oldVDOM, newVDOM); // calculate changes
patch(realDOM, patches); // apply updates
oldVDOM = newVDOM; // update reference
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⏳ 4. React Rendering Phases
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="Render Phase"
              secondary="Prepares what to render based on state/props changes (pure computation, no side effects)."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Commit Phase"
              secondary="Commits changes to the DOM and runs lifecycle methods (like useEffect)."
            />
          </ListItem>
        </List>

        <CodeBlock
          code={`// Example effect phase
useEffect(() => {
console.log("DOM updated!");
}, [dependency]);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 5. Hydration (SSR/Streaming)
        </Typography>

        <Typography variant="body2" paragraph>
          If you're using **Server-Side Rendering (SSR)**, React will:
          <ul>
            <li>Send pre-rendered HTML from the server</li>
            <li>Hydrate it on the client (attach interactivity)</li>
            <li>Only fetch JavaScript bundles as needed</li>
          </ul>
          React 18+ also introduced **streaming SSR**, which sends HTML as it
          becomes available.
        </Typography>

        <CodeBlock
          code={`// SSR + Hydration example (Next.js style)
export default function Page({ data }) {
return <div>{data.message}</div>;
}

// server-side:
return <Page data={await fetchData()} />;`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📍 Summary
        </Typography>

        <Typography variant="body2" paragraph>
          Behind the scenes, React:
          <ul>
            <li>Compiles your code via bundlers</li>
            <li>Optimizes delivery with chunking</li>
            <li>Uses the Virtual DOM for efficient updates</li>
            <li>Streams HTML from server on demand</li>
            <li>Hydrates pages for interactivity</li>
          </ul>
          React abstracts the heavy lifting, making app development faster,
          scalable, and performant.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is build, compile and run time in react?",
    content: (
      <Box my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          🛠️ Build Time vs Compile Time vs Run Time in React
        </Typography>

        <Typography variant="body1" paragraph>
          In React (and frontend development in general), it's important to
          understand the different phases of an application's lifecycle:{" "}
          <strong>Build Time</strong>, <strong>Compile Time</strong>, and{" "}
          <strong>Run Time</strong>. Each phase has a specific purpose and
          toolchain associated with it.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 1. Build Time
        </Typography>

        <Typography variant="body2" paragraph>
          <strong>Build Time</strong> refers to the phase when your source code
          is transformed and packaged for production. It’s when tools like{" "}
          <strong>Webpack</strong>, <strong>Vite</strong>, or{" "}
          <strong>Parcel</strong> process your files.
        </Typography>

        <CodeBlock
          code={`// Example Build Step
// package.json script
"scripts": {
"build": "react-scripts build"
}

// Output
// /build
// ├── index.html
// ├── static/js/main.[hash].js
// ├── static/css/main.[hash].css
`}
        />

        <Typography variant="body2" paragraph>
          <strong>What happens at build time:</strong>
          <ul>
            <li>Minification of code</li>
            <li>Tree shaking (removal of unused code)</li>
            <li>Image & asset optimization</li>
            <li>Code splitting (lazy loaded chunks)</li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 2. Compile Time
        </Typography>

        <Typography variant="body2" paragraph>
          <strong>Compile Time</strong> refers to the moment your JSX,
          TypeScript, or ES6+ syntax gets converted to vanilla JavaScript using
          tools like <strong>Babel</strong> or{" "}
          <strong>TypeScript Compiler</strong>.
        </Typography>

        <CodeBlock
          code={`// JSX before compilation
const element = <h1>Hello, React!</h1>;

// Compiled JavaScript
const element = React.createElement("h1", null, "Hello, React!");
`}
        />

        <Typography variant="body2" paragraph>
          <strong>Compile time tools:</strong>
          <ul>
            <li>Babel – JSX → JavaScript</li>
            <li>TypeScript Compiler – TS → JS</li>
            <li>ESLint – Linting during compilation</li>
          </ul>
          Errors like syntax issues or type mismatches are caught here.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 3. Run Time
        </Typography>

        <Typography variant="body2" paragraph>
          <strong>Run Time</strong> is when the code actually runs in the
          browser. React components are mounted, hooks are executed, and events
          are triggered.
        </Typography>

        <CodeBlock
          code={`// At runtime
useEffect(() => {
console.log("Component mounted!");
}, []);
`}
        />

        <Typography variant="body2" paragraph>
          <strong>What happens at run time:</strong>
          <ul>
            <li>JavaScript is executed by the browser engine (e.g. V8)</li>
            <li>DOM is manipulated through Virtual DOM diffing</li>
            <li>APIs are called, state is updated, side-effects handled</li>
          </ul>
          Any errors here are <strong>runtime errors</strong> (e.g. undefined
          variables, network failures).
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Summary Table
        </Typography>

        <CodeBlock
          code={`| Phase        | Tools Used                | Purpose                                  |
|-------------|--------------------------|------------------------------------------|
| Build Time  | Webpack, Vite, Parcel    | Bundle, Minify, Optimize Assets          |
| Compile Time| Babel, TypeScript, ESLint| Convert JSX/TS → JS, check for syntax    |
| Run Time    | Browser, React Runtime   | Execute JS, render UI, handle events     |`}
        />

        <Typography variant="body2" paragraph>
          Understanding these three phases helps you debug better, optimize
          efficiently, and write more maintainable React applications.
        </Typography>
      </Box>
    ),
  },
];
