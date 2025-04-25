import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import CodeBlock from "../../../components/UI/CodeBlock";

export const INTERMEDIATE_REACT_DATA = [
  {
    heading: "What are React hooks?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🪝 What are React Hooks?
        </Typography>

        <Typography variant="body1" paragraph>
          React Hooks are functions introduced in <strong>React 16.8</strong>{" "}
          that allow you to use state and other React features in{" "}
          <strong>functional components</strong> instead of class components.
          Hooks simplify your code by enabling logic reuse and a cleaner
          component structure.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Why Use Hooks?
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="They allow functional components to have state and lifecycle features." />
          </ListItem>
          <ListItem>
            <ListItemText primary="They reduce the need for class components." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Hooks promote better code reuse and separation of concerns." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔑 Common Built-in Hooks
        </Typography>
        <Grid container spacing={4}>
          <Grid size={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">1. useState</Typography>
                <Typography variant="body2" paragraph>
                  Manages state in functional components.
                </Typography>
                <CodeBlock code={`const [count, setCount] = useState(0);`} />
              </CardContent>
            </Card>
          </Grid>

          <Grid size={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">2. useEffect</Typography>
                <Typography variant="body2" paragraph>
                  Performs side effects like fetching data, subscriptions, etc.
                </Typography>
                <CodeBlock
                  code={`
      useEffect(() => {
        console.log('Component mounted');
      }, []);
      `}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid size={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">3. useContext</Typography>
                <Typography variant="body2" paragraph>
                  Accesses context values from a Context Provider.
                </Typography>
                <CodeBlock code={`const theme = useContext(ThemeContext);`} />
              </CardContent>
            </Card>
          </Grid>

          <Grid size={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">4. useRef</Typography>
                <Typography variant="body2" paragraph>
                  Accesses DOM nodes or stores mutable values.
                </Typography>
                <CodeBlock code={`const inputRef = useRef(null);`} />
              </CardContent>
            </Card>
          </Grid>

          <Grid size={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">5. useMemo</Typography>
                <Typography variant="body2" paragraph>
                  Memoizes expensive calculations to improve performance.
                </Typography>
                <CodeBlock
                  code={`
      const result = useMemo(() => {
        return computeExpensiveValue(a, b);
      }, [a, b]);
      `}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid size={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">6. useCallback</Typography>
                <Typography variant="body2" paragraph>
                  Memoizes callback functions between renders.
                </Typography>
                <CodeBlock
                  code={`
      const memoizedCallback = useCallback(() => {
        doSomething(a, b);
      }, [a, b]);
      `}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          ✨ Example: Counter using <code>useState</code> and{" "}
          <code>useEffect</code>
        </Typography>

        <CodeBlock
          code={`
      import React, { useState, useEffect } from 'react';
      
      function Counter() {
        const [count, setCount] = useState(0);
      
        useEffect(() => {
          document.title = \`Count: \${count}\`;
        }, [count]);
      
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click Me
            </button>
          </div>
        );
      }
      `}
        />

        <Typography variant="body2" mt={2}>
          In the above example:
          <ul>
            <li>
              <code>useState</code> manages the <code>count</code> state.
            </li>
            <li>
              <code>useEffect</code> updates the document title every time{" "}
              <code>count</code> changes.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main" }}
        >
          <CardContent>
            <Typography variant="h6">🧠 Summary</Typography>
            <Typography variant="body2" component="div">
              <ul>
                <li>
                  Hooks bring state and lifecycle features to functional
                  components.
                </li>
                <li>They simplify logic reuse and separation of concerns.</li>
                <li>
                  Common hooks include <code>useState</code>,{" "}
                  <code>useEffect</code>, <code>useContext</code>,{" "}
                  <code>useRef</code>, <code>useMemo</code>, and{" "}
                  <code>useCallback</code>.
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is useState?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🪝 What is <code>useState</code> in React?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>useState</strong> is a built-in React Hook that allows
          functional components to have and manage local state. It lets you
          "hook into" React features without writing class components.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔧 Syntax:
        </Typography>
        <CodeBlock code={`const [state, setState] = useState(initialValue);`} />

        <Typography variant="body2" paragraph>
          - <strong>state</strong>: The current state value.
          <br />- <strong>setState</strong>: A function used to update the
          state.
          <br />- <strong>initialValue</strong>: The initial value of the state
          variable.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Example: Counter using <code>useState</code>
        </Typography>

        <CodeBlock
          code={`
  import React, { useState } from 'react';
  
  function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </div>
    );
  }
  `}
        />

        <Typography variant="body2" paragraph>
          In the above example:
          <ul>
            <li>
              <code>useState(0)</code> initializes <code>count</code> to 0.
            </li>
            <li>
              Clicking the button calls <code>setCount</code> to increment the
              value.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Things to Know
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Calling setState triggers a re-render of the component." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Each useState call is independent, so you can use multiple states in one component." />
          </ListItem>
          <ListItem>
            <ListItemText primary="You can pass a function to useState if you want lazy initialization." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Multiple States Example
        </Typography>

        <CodeBlock
          code={`
  function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
  
    return (
      <div>
        <input value={name} onChange={e => setName(e.target.value)} />
        <input value={age} onChange={e => setAge(e.target.value)} />
      </div>
    );
  }
  `}
        />

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main" }}
        >
          <CardContent>
            <Typography variant="h6">📌 Summary</Typography>
            <Typography variant="body2" component="div">
              <ul>
                <li>
                  <code>useState</code> is used to add local state in functional
                  components.
                </li>
                <li>
                  It returns a pair: the current state and a function to update
                  it.
                </li>
                <li>
                  Changing state with <code>setState</code> re-renders the
                  component.
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is useEffect?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🪝 What is <code>useEffect</code> in React?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>useEffect</strong> is a Hook in React that allows you to
          perform side effects in function components. It is equivalent to
          lifecycle methods like <code>componentDidMount</code>,{" "}
          <code>componentDidUpdate</code>, and <code>componentWillUnmount</code>{" "}
          in class components.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔧 Syntax
        </Typography>

        <CodeBlock
          code={`useEffect(() => {\n  // side effect logic\n}, [dependencies]);`}
        />

        <Typography variant="body2" paragraph>
          - The first argument is a **function** that contains your side-effect
          logic.
          <br />- The second argument is a **dependency array** that tells React
          when to run the effect.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Example: Basic Usage
        </Typography>

        <CodeBlock
          code={`import React, { useState, useEffect } from 'react';
  
  function Timer() {
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, []); // Runs only once on mount
  
    return <p>Timer: {seconds}s</p>;
  }
  `}
        />

        <Typography variant="body2" paragraph>
          In this example:
          <ul>
            <li>We start a timer on mount.</li>
            <li>
              The cleanup function clears the interval when the component
              unmounts.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Types of `useEffect` Dependencies
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="No dependency array: runs after every render"
              secondary={
                <CodeBlock
                  code={`useEffect(() => {\n  // runs after every render\n});`}
                />
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Empty dependency array: runs only once after the first render"
              secondary={
                <CodeBlock
                  code={`useEffect(() => {\n  // runs only once\n}, []);`}
                />
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Specific dependencies: runs when any listed dependency changes"
              secondary={
                <CodeBlock
                  code={`useEffect(() => {\n  // runs when count changes\n}, [count]);`}
                />
              }
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📛 Common Use Cases
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="Fetching data from APIs" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Subscribing to WebSocket or event listeners" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Manually manipulating the DOM" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Cleaning up resources on unmount" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main" }}
        >
          <CardContent>
            <Typography variant="h6">📌 Summary</Typography>
            <Typography variant="body2" component="div">
              <ul>
                <li>
                  <code>useEffect</code> lets you synchronize a component with
                  external systems.
                </li>
                <li>It replaces class lifecycle methods.</li>
                <li>
                  You can control when it runs using the dependency array.
                </li>
                <li>
                  Return a cleanup function for resource cleanup like timers or
                  subscriptions.
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "How does the dependency array in useEffect work?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🧠 Understanding the Dependency Array in <code>useEffect</code>
        </Typography>

        <Typography variant="body1" paragraph>
          The <strong>dependency array</strong> is the second argument passed to{" "}
          <code>useEffect</code>. It controls <strong>when</strong> the effect
          runs. This makes <code>useEffect</code> extremely powerful and precise
          in managing side effects like data fetching, subscriptions, or DOM
          updates.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ Syntax
        </Typography>
        <CodeBlock
          code={`useEffect(() => {\n  // side effect code here\n}, [dep1, dep2]);`}
        />

        <Typography variant="body1" paragraph>
          - The effect runs <strong>after the initial render</strong> and{" "}
          <strong>whenever any dependency changes</strong>.
          <br />- If you omit the array, the effect runs after{" "}
          <strong>every render</strong>.
          <br />- If you pass an empty array <code>[]</code>, the effect runs{" "}
          <strong>only once</strong> after the component mounts.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Dependency Scenarios & Code Examples
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="1. No Dependency Array (runs after every render)"
              secondary={
                <CodeBlock
                  code={`useEffect(() => {\n  console.log("Runs after every render");\n});`}
                />
              }
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="2. Empty Dependency Array (runs once on mount)"
              secondary={
                <CodeBlock
                  code={`useEffect(() => {\n  console.log("Runs only on mount");\n}, []);`}
                />
              }
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="3. With Dependencies (runs when specific variables change)"
              secondary={
                <CodeBlock
                  code={`const [count, setCount] = useState(0);\n\nuseEffect(() => {\n  console.log("Count changed:", count);\n}, [count]);`}
                />
              }
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Why It Matters
        </Typography>

        <Typography variant="body1" paragraph>
          React compares the current dependency values with the previous ones.
          If they are different, it re-runs the effect. This ensures you only
          perform expensive or necessary operations when needed.
        </Typography>

        <Typography variant="h6" gutterBottom>
          ⚠️ Pitfall Example: Missing Dependencies
        </Typography>

        <CodeBlock
          code={`useEffect(() => {\n  fetchData(); // uses 'query'\n}, []); // 🚨 Missing 'query' dependency!`}
        />
        <Typography variant="body2" color="error">
          The effect uses `query`, but it's not in the dependency array. This
          can cause stale data or bugs.
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          ✅ Fix:
        </Typography>
        <CodeBlock code={`useEffect(() => {\n  fetchData();\n}, [query]);`} />

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main" }}
        >
          <CardContent>
            <Typography variant="h6">✅ Summary</Typography>
            <Typography variant="body2" component="div">
              <ul>
                <li>
                  <strong>No array</strong>: Runs after every render
                </li>
                <li>
                  <strong>Empty array []</strong>: Runs only once on mount
                </li>
                <li>
                  <strong>[deps]</strong>: Runs only when the dependencies
                  change
                </li>
                <li>
                  Always include variables you use inside <code>useEffect</code>{" "}
                  in the array
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What are the common use cases for useEffect?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🔄 Common Use Cases of <code>useEffect</code>
        </Typography>

        <Typography variant="body1" paragraph>
          The <code>useEffect</code> hook lets you perform side effects in
          functional components. It's a powerful tool that replaces lifecycle
          methods like <code>componentDidMount</code>,
          <code>componentDidUpdate</code>, and <code>componentWillUnmount</code>{" "}
          in class components.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 1. Fetching Data from an API
        </Typography>

        <Typography variant="body2">
          One of the most common use cases — you fetch data after the component
          mounts.
        </Typography>

        <CodeBlock
          code={`useEffect(() => {\n  fetch('https://api.example.com/data')\n    .then(res => res.json())\n    .then(data => console.log(data));\n}, []);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⌚ 2. Setting Up Subscriptions or Timers
        </Typography>

        <Typography variant="body2">
          You can use <code>setInterval</code> or subscribe to WebSocket or
          Redux events.
        </Typography>

        <CodeBlock
          code={`useEffect(() => {\n  const interval = setInterval(() => {\n    console.log("Tick");\n  }, 1000);\n\n  return () => clearInterval(interval); // Clean up\n}, []);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧹 3. Cleanup on Unmount
        </Typography>

        <Typography variant="body2">
          Useful for cleaning up event listeners, timers, or unsubscribing from
          services.
        </Typography>

        <CodeBlock
          code={`useEffect(() => {\n  const handleResize = () => console.log(window.innerWidth);\n  window.addEventListener('resize', handleResize);\n\n  return () => window.removeEventListener('resize', handleResize);\n}, []);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 4. Updating Document Title
        </Typography>

        <Typography variant="body2">
          A simple example of manipulating the DOM.
        </Typography>

        <CodeBlock
          code={`const [count, setCount] = useState(0);\n\nuseEffect(() => {\n  document.title = \`You clicked \${count} times\`;\n}, [count]);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💬 5. Triggering Animations or DOM Effects
        </Typography>

        <Typography variant="body2">
          You can run animations or focus input elements when the component
          mounts.
        </Typography>

        <CodeBlock
          code={`useEffect(() => {\n  const input = document.getElementById("myInput");\n  input?.focus();\n}, []);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 6. Running Effects When State or Props Change
        </Typography>

        <Typography variant="body2">
          You can track specific state/props and re-run the effect only when
          they change.
        </Typography>

        <CodeBlock
          code={`const [query, setQuery] = useState("");\n\nuseEffect(() => {\n  console.log("Search Query:", query);\n}, [query]);`}
        />

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main" }}
        >
          <CardContent>
            <Typography variant="h6">📌 Summary</Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="✔ Fetching data" />
              </ListItem>
              <ListItem>
                <ListItemText primary="✔ Subscribing to events or intervals" />
              </ListItem>
              <ListItem>
                <ListItemText primary="✔ Cleaning up effects on unmount" />
              </ListItem>
              <ListItem>
                <ListItemText primary="✔ Syncing external systems (e.g., document title)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="✔ Watching and reacting to prop or state changes" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is useRef?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          📌 What is <code>useRef</code> in React?
        </Typography>

        <Typography variant="body1" paragraph>
          <code>useRef</code> is a built-in React hook that allows you to
          persist values across renders without triggering a re-render when the
          value changes. It is commonly used to:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="✔ Access DOM elements directly" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✔ Store mutable values that don’t trigger a re-render" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✔ Keep track of previous values" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Syntax
        </Typography>

        <CodeBlock code={`const myRef = useRef(initialValue);`} />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Example 1: Accessing a DOM Element
        </Typography>
        <Typography variant="body2" paragraph>
          You can use <code>useRef</code> to focus an input element when the
          component mounts.
        </Typography>

        <CodeBlock
          code={`import { useRef, useEffect } from 'react';\n\nfunction InputFocus() {\n  const inputRef = useRef(null);\n\n  useEffect(() => {\n    inputRef.current.focus();\n  }, []);\n\n  return <input ref={inputRef} type="text" placeholder="Focus me on load" />;\n}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Example 2: Persisting Mutable Values Without Re-render
        </Typography>
        <Typography variant="body2" paragraph>
          Useful for storing timeout IDs or mutable counters.
        </Typography>

        <CodeBlock
          code={`import { useRef } from 'react';\n\nfunction Timer() {\n  const timerRef = useRef(null);\n\n  const startTimer = () => {\n    timerRef.current = setTimeout(() => alert("Time's up!"), 2000);\n  };\n\n  const cancelTimer = () => {\n    clearTimeout(timerRef.current);\n  };\n\n  return (\n    <>\n      <button onClick={startTimer}>Start</button>\n      <button onClick={cancelTimer}>Cancel</button>\n    </>\n  );\n}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧾 Example 3: Tracking Previous State
        </Typography>
        <Typography variant="body2" paragraph>
          You can store the previous value of a state variable without
          triggering renders.
        </Typography>

        <CodeBlock
          code={`import { useRef, useEffect, useState } from 'react';\n\nfunction PreviousValue() {\n  const [count, setCount] = useState(0);\n  const prevCount = useRef();\n\n  useEffect(() => {\n    prevCount.current = count;\n  }, [count]);\n\n  return (\n    <div>\n      <p>Current: {count}</p>\n      <p>Previous: {prevCount.current}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}`}
        />

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main" }}
        >
          <CardContent>
            <Typography variant="h6">📌 Summary of useRef</Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="✔ Doesn't trigger re-renders when changed" />
              </ListItem>
              <ListItem>
                <ListItemText primary="✔ Ideal for referencing DOM elements" />
              </ListItem>
              <ListItem>
                <ListItemText primary="✔ Useful for storing timeout IDs or previous values" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is useCallback and why is it used?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🧠 What is <code>useCallback</code> in React?
        </Typography>

        <Typography variant="body1" paragraph>
          <code>useCallback</code> is a React hook used to memoize callback
          functions. It returns a memoized version of the callback that only
          changes if one of the dependencies has changed.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Why is <code>useCallback</code> used?
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="✅ Prevents unnecessary re-creation of functions on every render" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Useful when passing callbacks to memoized child components" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Helps with performance optimization" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Syntax
        </Typography>

        <CodeBlock
          code={`const memoizedCallback = useCallback(() => {\n  // Your logic here\n}, [dependencies]);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Example: Without and With <code>useCallback</code>
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          ❌ Without <code>useCallback</code>:
        </Typography>

        <CodeBlock
          code={`function ParentComponent() {\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => {\n    console.log('Clicked');\n  };\n\n  return (\n    <>\n      <ChildComponent onClick={handleClick} />\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </>\n  );\n}`}
        />

        <Typography variant="body2" sx={{ mt: 1 }}>
          🔁 Each render re-creates <code>handleClick</code>, even if the logic
          doesn’t change.
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 3 }}>
          ✅ With <code>useCallback</code>:
        </Typography>

        <CodeBlock
          code={`function ParentComponent() {\n  const [count, setCount] = useState(0);\n\n  const handleClick = useCallback(() => {\n    console.log('Clicked');\n  }, []);\n\n  return (\n    <>\n      <ChildComponent onClick={handleClick} />\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </>\n  );\n}`}
        />

        <Typography variant="body2" sx={{ mt: 1 }}>
          ✅ <code>handleClick</code> is only re-created if its dependencies
          change.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 When should you use <code>useCallback</code>?
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="🔁 When passing functions to deeply nested components" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🧩 When using React.memo or pure components" />
          </ListItem>
          <ListItem>
            <ListItemText primary="⚡ When optimizing expensive re-renders" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main" }}
        >
          <CardContent>
            <Typography variant="h6">📌 Summary</Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="useCallback memoizes functions to prevent unnecessary re-creation." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Only use it when performance issues arise with prop functions." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Similar to useMemo but for functions." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is useMemo?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🧠 What is <code>useMemo</code> in React?
        </Typography>

        <Typography variant="body1" paragraph>
          <code>useMemo</code> is a React hook that allows you to **memoize the
          result of a calculation** so that it’s only recomputed when one of its
          dependencies changes. This helps **optimize performance** by avoiding
          expensive recalculations on every render.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Why use <code>useMemo</code>?
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="✅ Prevents expensive calculations from running on every render" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Helps optimize performance in large or complex components" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Useful when computed values depend on props or state" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Syntax
        </Typography>

        <CodeBlock
          code={`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Example: Without and With <code>useMemo</code>
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          ❌ Without <code>useMemo</code>:
        </Typography>

        <CodeBlock
          code={`function Example({ items }) {\n  const expensiveResult = items.filter(item => item.isActive);\n\n  return <div>{expensiveResult.length}</div>;\n}`}
        />

        <Typography variant="body2" sx={{ mt: 1 }}>
          🔁 This recalculates the filter on every render, even if{" "}
          <code>items</code> hasn’t changed.
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 3 }}>
          ✅ With <code>useMemo</code>:
        </Typography>

        <CodeBlock
          code={`function Example({ items }) {\n  const activeItems = useMemo(() => {\n    return items.filter(item => item.isActive);\n  }, [items]);\n\n  return <div>{activeItems.length}</div>;\n}`}
        />

        <Typography variant="body2" sx={{ mt: 1 }}>
          ✅ This will only recalculate when <code>items</code> changes.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 When to use <code>useMemo</code>?
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="⚙️ When performing heavy or costly calculations" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔁 When derived data depends on frequently changing props or state" />
          </ListItem>
          <ListItem>
            <ListItemText primary="📦 When you want to memoize computed values passed to children" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main" }}
        >
          <CardContent>
            <Typography variant="h6">📚 Summary</Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="<code>useMemo</code> is used to optimize performance by memoizing calculated values." />
              </ListItem>
              <ListItem>
                <ListItemText primary="It recalculates only when its dependency array values change." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Use it for expensive operations that shouldn’t run on every render." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is useContext?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🌐 What is <code>useContext</code> in React?
        </Typography>

        <Typography variant="body1" paragraph>
          The <code>useContext</code> hook is a part of React that lets you
          **share state/data** across multiple components without manually
          passing props down through each level. It works with the **Context
          API**, which allows for **global-like state management** in a React
          app.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Why use <code>useContext</code>?
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="✅ Avoids prop drilling (passing props through many layers)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Provides a global way to share state, functions, or data" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Works well with state management or themes" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Syntax
        </Typography>

        <CodeBlock code={`const value = useContext(MyContext);`} />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Example of using <code>useContext</code>
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          1. Create a Context
        </Typography>

        <CodeBlock code={`const ThemeContext = createContext();`} />

        <Typography variant="subtitle1" gutterBottom>
          2. Provide the Context at a high level
        </Typography>

        <CodeBlock
          code={`function App() {\n  const [theme, setTheme] = useState('light');\n\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}`}
        />

        <Typography variant="subtitle1" gutterBottom>
          3. Consume the context using <code>useContext</code>
        </Typography>

        <CodeBlock
          code={`function Toolbar() {\n  return (\n    <div>\n      <ThemedButton />\n    </div>\n  );\n}\n\nfunction ThemedButton() {\n  const { theme, setTheme } = useContext(ThemeContext);\n\n  return (\n    <button\n      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}\n      style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}\n    >\n      Toggle Theme\n    </button>\n  );\n}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Best Use Cases
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="🔧 Sharing user authentication data (like current user info)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🎨 Theming: light/dark mode across the app" />
          </ListItem>
          <ListItem>
            <ListItemText primary="📦 Managing language/localization preferences" />
          </ListItem>
          <ListItem>
            <ListItemText primary="📍 Global app state shared across components" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main" }}
        >
          <CardContent>
            <Typography variant="h6">📚 Summary</Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="🔁 useContext simplifies state sharing between components without passing props." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🏗️ You need to wrap your app (or part of it) in a Context Provider." />
              </ListItem>
              <ListItem>
                <ListItemText primary="⚡ Access the context value anywhere in the tree using useContext." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "How do you create a context in React?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🌐 How Do You Create a Context in React?
        </Typography>

        <Typography variant="body1" paragraph>
          React’s <code>Context API</code> allows you to share state or
          functions across components without manually passing props through
          every level. It consists of three steps: **create**, **provide**, and
          **consume**.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ Steps to Create and Use a Context
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="1. Create the context using createContext()" />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Wrap your components with the Context Provider" />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. Use useContext to consume the context value" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✍️ Example: Creating a Theme Context
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          🔹 Step 1: Create a context file (e.g. <code>ThemeContext.js</code>)
        </Typography>

        <CodeBlock
          code={`import { createContext } from 'react';\n\nexport const ThemeContext = createContext();`}
        />

        <Typography variant="subtitle1" gutterBottom>
          🔹 Step 2: Provide the context value
        </Typography>

        <CodeBlock
          code={`import React, { useState } from 'react';\nimport { ThemeContext } from './ThemeContext';\nimport MyComponent from './MyComponent';\n\nfunction App() {\n  const [theme, setTheme] = useState('light');\n\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      <MyComponent />\n    </ThemeContext.Provider>\n  );\n}\n\nexport default App;`}
        />

        <Typography variant="subtitle1" gutterBottom>
          🔹 Step 3: Consume the context
        </Typography>

        <CodeBlock
          code={`import React, { useContext } from 'react';\nimport { ThemeContext } from './ThemeContext';\n\nfunction MyComponent() {\n  const { theme, setTheme } = useContext(ThemeContext);\n\n  return (\n    <div>\n      <h2>Current Theme: {theme}</h2>\n      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>\n        Toggle Theme\n      </button>\n    </div>\n  );\n}`}
        />

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main", mt: 4 }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              📚 Summary
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="🔹 Context provides a way to share values across components." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 useContext allows easy access to those values anywhere in the tree." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 It helps avoid prop drilling and simplifies state management." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What are custom hooks?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🎣 What Are Custom Hooks in React?
        </Typography>

        <Typography variant="body1" paragraph>
          In React, **custom hooks** are JavaScript functions that allow you to
          reuse logic across different components. They are a powerful feature
          that enables you to extract component logic and share it without
          changing the component hierarchy.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ Why Use Custom Hooks?
        </Typography>
        <Typography variant="body1" paragraph>
          Custom hooks allow you to:
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="✔️ Reuse stateful logic across multiple components." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✔️ Clean up and encapsulate logic, making components more focused on UI." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✔️ Use built-in hooks like useState, useEffect, etc., and share this logic." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✍️ Example: Custom Hook for Fetching Data
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          🔹 Step 1: Creating a custom hook to fetch data.
        </Typography>

        <CodeBlock
          code={`import { useState, useEffect } from 'react';\n\nconst useFetch = (url) => {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    fetch(url)\n      .then(response => response.json())\n      .then(data => {\n        setData(data);\n        setLoading(false);\n      })\n      .catch(error => {\n        setError(error);\n        setLoading(false);\n      });\n  }, [url]);\n\n  return { data, loading, error };\n};\n\nexport default useFetch;`}
        />

        <Typography variant="subtitle1" gutterBottom>
          🔹 Step 2: Using the custom hook in a component.
        </Typography>

        <CodeBlock
          code={`import React from 'react';\nimport useFetch from './useFetch';\n\nconst DataComponent = () => {\n  const { data, loading, error } = useFetch('https://api.example.com/data');\n\n  if (loading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error.message}</div>;\n\n  return (\n    <div>\n      <h1>Data</h1>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n    </div>\n  );\n};\n\nexport default DataComponent;`}
        />

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main", mt: 4 }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              📚 Summary of Custom Hooks
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="🔹 Custom hooks are functions that contain reusable logic." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 They help in abstracting away complex stateful logic from components." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 You can combine built-in React hooks and return values, state, or functions from your custom hook." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 They are simple to implement and help in keeping components clean and focused on rendering." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is lifting state up?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🔼 What is Lifting State Up in React?
        </Typography>

        <Typography variant="body1" paragraph>
          **Lifting state up** is a technique used in React where state is moved
          to the nearest common ancestor of the components that need access to
          that state. It allows multiple components to share and modify the same
          state by having that state reside in a parent component and be passed
          down to child components via props.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ Why Use Lifting State Up?
        </Typography>
        <Typography variant="body1" paragraph>
          The main benefits of lifting state up are:
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="✔️ Allows child components to share and synchronize data." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✔️ Helps to centralize state management for better control." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✔️ Avoids the need for unnecessary state duplication." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✍️ Example: Lifting State Up
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          🔹 Step 1: Create two child components that need to share state.
        </Typography>

        <CodeBlock
          code={`// Child 1 Component (Button)\nimport React from 'react';\n\nconst Button = ({ onClick }) => {\n  return <button onClick={onClick}>Click me</button>;\n};\n\nexport default Button;`}
        />

        <Typography variant="subtitle1" gutterBottom>
          🔹 Step 2: Create another child component that displays the state.
        </Typography>

        <CodeBlock
          code={`// Child 2 Component (Display)\nimport React from 'react';\n\nconst Display = ({ count }) => {\n  return <h2>Current Count: {count}</h2>;\n};\n\nexport default Display;`}
        />

        <Typography variant="subtitle1" gutterBottom>
          🔹 Step 3: Lift the state to the parent and pass it down as props.
        </Typography>

        <CodeBlock
          code={`// Parent Component (App)\nimport React, { useState } from 'react';\nimport Button from './Button';\nimport Display from './Display';\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => {\n    setCount(count + 1);\n  };\n\n  return (\n    <div>\n      <Button onClick={handleClick} />\n      <Display count={count} />\n    </div>\n  );\n};\n\nexport default App;`}
        />

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main", mt: 4 }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              📚 Summary of Lifting State Up
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="🔹 Lifting state up helps to centralize shared state in a parent component." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 The parent component owns the state and passes it down to child components as props." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 It helps to ensure that all components stay in sync with the same state." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 Useful when multiple components need access to the same state but don't have a direct relationship." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is the use of React.memo()?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🔍 What is React.memo()?
        </Typography>

        <Typography variant="body1" paragraph>
          `React.memo()` is a higher-order component (HOC) that helps optimize
          the performance of your application by memoizing the result of a
          component's render. This means that React will skip rendering the
          component if its props haven't changed, which can lead to a
          significant performance improvement, especially in cases where the
          component renders frequently.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ How Does React.memo() Work?
        </Typography>
        <Typography variant="body1" paragraph>
          By default, React re-renders a component whenever its parent
          re-renders, even if the props passed to it have not changed. This can
          lead to unnecessary re-renders, especially in large or complex UIs.
          `React.memo()` helps to optimize this by memoizing the component and
          only re-rendering it if its props have changed.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✨ When to Use React.memo()
        </Typography>
        <Typography variant="body1" paragraph>
          `React.memo()` is useful when:
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="✔️ The component renders frequently with the same props." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✔️ The component is relatively expensive to re-render." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✔️ You want to optimize the rendering performance of your app." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Example: Using React.memo()
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          🔹 Step 1: A regular component that will be memoized using
          `React.memo()`.
        </Typography>

        <CodeBlock
          code={`// Regular Component\nimport React from 'react';\n\nconst MyComponent = ({ count }) => {\n  console.log('Rendering MyComponent');\n  return <div>Count: {count}</div>;\n};\n\nexport default MyComponent;`}
        />

        <Typography variant="subtitle1" gutterBottom>
          🔹 Step 2: Memoize the component using `React.memo()`.
        </Typography>

        <CodeBlock
          code={`// Memoized Component\nimport React from 'react';\n\nconst MyComponent = React.memo(({ count }) => {\n  console.log('Rendering MyComponent');\n  return <div>Count: {count}</div>;\n});\n\nexport default MyComponent;`}
        />

        <Typography variant="subtitle1" gutterBottom>
          🔹 Step 3: Parent component that re-renders but does not cause
          re-render of the memoized child if props don't change.
        </Typography>

        <CodeBlock
          code={`// Parent Component\nimport React, { useState } from 'react';\nimport MyComponent from './MyComponent';\n\nconst ParentComponent = () => {\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => {\n    setCount(count + 1);\n  };\n\n  return (\n    <div>\n      <button onClick={handleClick}>Increase Count</button>\n      <MyComponent count={count} />\n    </div>\n  );\n};\n\nexport default ParentComponent;`}
        />

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main", mt: 4 }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              📚 Summary of React.memo()
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="🔹 `React.memo()` is a higher-order component that prevents unnecessary re-renders." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 It checks the previous props and next props and only re-renders if they are different." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 It helps improve performance for functional components by avoiding unnecessary renders." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 It is only useful for pure components that render the same output for the same props." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 `React.memo()` does a shallow comparison of props, so it works best for simple props." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What are higher-order components (HOCs)?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🧠 What are Higher-Order Components (HOCs)?
        </Typography>

        <Typography variant="body1" paragraph>
          A <strong>Higher-Order Component (HOC)</strong> is an advanced
          technique in React for reusing component logic. HOCs are not part of
          the React API — they are a pattern that emerges from React’s
          compositional nature.
        </Typography>

        <Typography variant="body1" paragraph>
          Specifically, a HOC is a function that takes a component and returns a
          new component. It’s like a wrapper around the original component that
          enhances or adds additional behavior.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Purpose of HOCs
        </Typography>
        <Typography variant="body1" paragraph>
          HOCs allow you to abstract logic and reuse it across multiple
          components without repeating code. This is especially useful for:
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="✅ Code reuse, logic abstraction, and DRY principles" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Manipulating props" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ State abstraction and manipulation" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Wrapping lifecycle methods" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 HOC Syntax Example
        </Typography>

        <CodeBlock
          code={`// Higher-Order Component function
  const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log('Rendering with props:', props);
    return <WrappedComponent {...props} />;
  };
  };`}
        />

        <Typography variant="h6" gutterBottom>
          🧪 Usage Example:
        </Typography>

        <CodeBlock
          code={`// A simple component
  const Hello = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
  };
  
  // Enhancing the Hello component with HOC
  const HelloWithLogger = withLogger(Hello);`}
        />

        <Typography variant="h6" gutterBottom>
          📦 Render the Enhanced Component:
        </Typography>

        <CodeBlock
          code={`// In your App.js or another component
  <HelloWithLogger name="React Developer" />`}
        />

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main" }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              🔎 Key Points to Remember:
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="🔹 HOCs do not modify the original component — they return a new one." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 They can be used to share logic across multiple components." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 The returned component can enhance behavior, inject props, or wrap lifecycle methods." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 Naming convention usually uses `with` prefix (e.g., withAuth, withLogger)." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 Be cautious of prop collisions and display names for debugging." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is React.PureComponent?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🧼 What is <strong>React.PureComponent</strong>?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>React.PureComponent</strong> is similar to{" "}
          <code>React.Component</code>, but it implements
          <code> shouldComponentUpdate()</code> method with a shallow prop and
          state comparison. It helps to optimize performance by avoiding
          unnecessary re-renders.
        </Typography>

        <Typography variant="body1" paragraph>
          If the previous props and state are the same as the next ones (shallow
          comparison), the component will not re-render.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 When should you use PureComponent?
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="✅ When your component renders the same output given the same props and state." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ When you're looking to improve performance by reducing render cycles." />
          </ListItem>
          <ListItem>
            <ListItemText primary="⚠️ Avoid using it if your state/props contain complex nested objects (deep comparison not done)." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Syntax and Example
        </Typography>

        <CodeBlock
          code={`import React from 'react';
  
  class Counter extends React.PureComponent {
  render() {
    console.log('Rendering Counter');
    return <h2>Count: {this.props.count}</h2>;
  }
  }
  
  export default Counter;`}
        />

        <Typography variant="body1" paragraph>
          In the example above, <code>Counter</code> will only re-render if{" "}
          <code>this.props.count</code> changes.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🔁 Regular Component vs PureComponent
        </Typography>

        <CodeBlock
          code={`// Regular Component
  class MyComponent extends React.Component {
  // Always re-renders when parent updates
  render() {
    return <div>{this.props.value}</div>;
  }
  }
  
  // PureComponent
  class MyPureComponent extends React.PureComponent {
  // Re-renders only if shallow comparison fails
  render() {
    return <div>{this.props.value}</div>;
  }
  }`}
        />

        <Card
          variant="outlined"
          sx={{ mt: 4, borderLeft: 4, borderColor: "primary.main" }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              📝 Summary:
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="🔹 PureComponent does a shallow comparison of props and state." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 Helps optimize performance by skipping unnecessary renders." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 Use it for components with simple, immutable props/state." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 Don’t use it if props/state are deeply nested or mutated directly." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is prop-types in React?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🧩 What is <strong>prop-types</strong> in React?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>prop-types</strong> is a library used in React to perform
          runtime type checking on props passed to components. It ensures that
          components receive props of the correct type and helps with debugging
          and maintaining code quality.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 How to Install
        </Typography>

        <CodeBlock code={`npm install prop-types`} />

        <Typography variant="body1" paragraph>
          After installation, you can import it in your component like this:
        </Typography>

        <CodeBlock code={`import PropTypes from 'prop-types';`} />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠 Example Usage
        </Typography>

        <Typography variant="body1" paragraph>
          Here's how you can define prop types for a functional component:
        </Typography>

        <CodeBlock
          code={`import React from 'react';
  import PropTypes from 'prop-types';
  
  const Greeting = ({ name, age }) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old.</p>
    </div>
  );
  };
  
  Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  };
  
  Greeting.defaultProps = {
  age: 18,
  };
  
  export default Greeting;`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Common PropTypes Validators
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="PropTypes.string – expects a string" />
          </ListItem>
          <ListItem>
            <ListItemText primary="PropTypes.number – expects a number" />
          </ListItem>
          <ListItem>
            <ListItemText primary="PropTypes.bool – expects a boolean" />
          </ListItem>
          <ListItem>
            <ListItemText primary="PropTypes.func – expects a function" />
          </ListItem>
          <ListItem>
            <ListItemText primary="PropTypes.array – expects an array" />
          </ListItem>
          <ListItem>
            <ListItemText primary="PropTypes.object – expects an object" />
          </ListItem>
          <ListItem>
            <ListItemText primary="PropTypes.node – anything that can be rendered: numbers, strings, JSX..." />
          </ListItem>
          <ListItem>
            <ListItemText primary="PropTypes.element – expects a React element" />
          </ListItem>
          <ListItem>
            <ListItemText primary="PropTypes.any – any data type" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Complex Types
        </Typography>

        <CodeBlock
          code={`MyComponent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  items: PropTypes.arrayOf(PropTypes.string),
  callback: PropTypes.func,
  };`}
        />

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main" }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              📝 Summary:
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText primary="🔹 prop-types enables runtime type checking for props." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 Useful during development for catching bugs early." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 It's optional in modern React, especially with TypeScript." />
              </ListItem>
              <ListItem>
                <ListItemText primary="🔹 Still valuable in JavaScript-only projects." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading:
      "How do you do form handling in React and what are controlled vs uncontrolled forms?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          📝 Form Handling in React
        </Typography>

        <Typography variant="body1" paragraph>
          In React, form handling refers to how form data is managed. React
          provides mechanisms to handle form input changes, validations, and
          submissions. Forms in React can be either <strong>controlled</strong>{" "}
          or <strong>uncontrolled</strong>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Controlled Components
        </Typography>

        <Typography variant="body1" paragraph>
          In a controlled component, the form input elements are bound to
          component state. The value of each input field is controlled via{" "}
          <code>useState()</code>, and any changes are handled via{" "}
          <code>onChange</code> handlers.
        </Typography>

        <CodeBlock
          code={`import React, { useState } from 'react';
  
  const ControlledForm = () => {
  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Submitted name: \${name}\`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
  };`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔓 Uncontrolled Components
        </Typography>

        <Typography variant="body1" paragraph>
          In an uncontrolled component, form data is handled by the DOM itself
          rather than React state. You access the form values using refs.
        </Typography>

        <CodeBlock
          code={`import React, { useRef } from 'react';
  
  const UncontrolledForm = () => {
  const nameRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Submitted name: \${nameRef.current.value}\`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input type="text" ref={nameRef} />
      <button type="submit">Submit</button>
    </form>
  );
  };`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Differences Between Controlled and Uncontrolled Components
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="🔹 Controlled components store input data in the component’s state." />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔹 Uncontrolled components use refs to access form data directly from the DOM." />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔹 Controlled forms are preferred when validation and conditional UI updates are needed." />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔹 Uncontrolled forms may be simpler for very basic or external libraries (like file uploads)." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main", mt: 2 }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              🧠 Summary:
            </Typography>
            <Typography variant="body1">
              React gives you full flexibility in form handling. For most cases,
              controlled components are the recommended pattern, especially when
              dealing with validation, conditionals, or complex interactions.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is reconciliation in React?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🔄 What is Reconciliation in React?
        </Typography>

        <Typography variant="body1" paragraph>
          Reconciliation is the process by which React updates the DOM when the
          component state or props change. Instead of re-rendering the entire
          UI, React uses a **diffing algorithm** to determine what parts of the
          DOM need to be changed and performs the **minimum number of updates**.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 How It Works:
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="1️⃣ React builds a Virtual DOM (a lightweight copy of the real DOM)." />
          </ListItem>
          <ListItem>
            <ListItemText primary="2️⃣ When state or props change, React creates a new Virtual DOM tree." />
          </ListItem>
          <ListItem>
            <ListItemText primary="3️⃣ It compares the new Virtual DOM with the previous one using a diffing algorithm." />
          </ListItem>
          <ListItem>
            <ListItemText primary="4️⃣ It calculates the minimum number of changes required." />
          </ListItem>
          <ListItem>
            <ListItemText primary="5️⃣ Only the changed elements are updated in the actual DOM." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Example: Without Reconciliation (Pure DOM Manipulation)
        </Typography>

        <CodeBlock
          code={`// Vanilla JS Example
  const root = document.getElementById("root");
  const heading = document.createElement("h1");
  heading.textContent = "Hello World!";
  root.appendChild(heading);`}
        />

        <Typography variant="body1" paragraph>
          In the above case, the entire node is created and appended every time.
          There’s no check to avoid unnecessary DOM updates.
        </Typography>

        <Typography variant="h5" gutterBottom>
          ✅ React with Reconciliation
        </Typography>

        <CodeBlock
          code={`// React JSX
  function App() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
  }`}
        />

        <Typography variant="body1" paragraph>
          Here, React compares the new virtual tree with the old one, sees that
          only the count number has changed, and updates only that specific part
          in the actual DOM.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Why It’s Efficient
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="🔹 Avoids unnecessary DOM manipulation, which is costly." />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔹 Ensures better performance and smoother UI." />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔹 Provides predictable updates to the UI with less code." />
          </ListItem>
        </List>

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main", mt: 3 }}
        >
          <CardContent>
            <Typography variant="h6">📌 Summary</Typography>
            <Typography variant="body1">
              Reconciliation is at the heart of React’s performance. It helps
              React efficiently update the DOM by calculating and applying only
              the differences between renders, making the UI fast and
              responsive.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is error boundary in React?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🛑 What is an Error Boundary in React?
        </Typography>

        <Typography variant="body1" paragraph>
          An <strong>Error Boundary</strong> is a special type of React
          component that catches JavaScript errors anywhere in its child
          component tree, logs those errors, and displays a fallback UI instead
          of crashing the whole application.
        </Typography>

        <Typography variant="body1" paragraph>
          It helps improve user experience and error handling in production apps
          by catching render-time errors.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Key Points:
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="✅ Only class components can be error boundaries." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ They catch errors during rendering, in lifecycle methods, and in constructors of the child components." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Errors in event handlers must still be caught with try/catch manually." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Example: Creating an Error Boundary
        </Typography>

        <CodeBlock
          code={`// ErrorBoundary.jsx
  import React from 'react';
  
  class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    // You can also log error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
  
    return this.props.children;
  }
  }
  
  export default ErrorBoundary;`}
        />

        <Typography variant="body1" paragraph>
          In the code above, we define a class component that implements
          `getDerivedStateFromError()` and `componentDidCatch()` to catch and
          handle errors.
        </Typography>

        <Typography variant="h5" gutterBottom>
          🧪 Example: Using the Error Boundary
        </Typography>

        <CodeBlock
          code={`// App.jsx
  import React from 'react';
  import ErrorBoundary from './ErrorBoundary';
  import BuggyComponent from './BuggyComponent';
  
  function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
  }
  
  export default App;`}
        />

        <Typography variant="h5" gutterBottom>
          🐛 BuggyComponent Example
        </Typography>

        <CodeBlock
          code={`// BuggyComponent.jsx
  import React, { useState } from 'react';
  
  function BuggyComponent() {
  const [throwError, setThrowError] = useState(false);
  
  if (throwError) {
    throw new Error('💥 Boom! An error occurred.');
  }
  
  return (
    <button onClick={() => setThrowError(true)}>
      Click to throw error
    </button>
  );
  }
  
  export default BuggyComponent;`}
        />

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "error.main", mt: 3 }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              📌 Summary
            </Typography>
            <Typography variant="body1">
              Error boundaries are a robust way to handle unexpected errors in
              your React app. They ensure that your UI doesn’t break completely
              and that users see a helpful message instead of a blank screen.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "How do you handle errors in React components?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          ⚠️ How Do You Handle Errors in React Components?
        </Typography>

        <Typography variant="body1" paragraph>
          Error handling in React is crucial for building robust applications.
          Errors can occur during rendering, in lifecycle methods, or inside
          event handlers. React provides several ways to catch and manage these
          errors gracefully.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Common Ways to Handle Errors
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="1. Using Error Boundaries (for render/lifecycle errors)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Using try/catch blocks (for event handler or async code)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. Validating props with PropTypes or TypeScript" />
          </ListItem>
          <ListItem>
            <ListItemText primary="4. Displaying fallback UIs or error messages" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛡️ 1. Using Error Boundaries
        </Typography>
        <Typography variant="body1" paragraph>
          Error boundaries are React class components that catch errors in their
          children and display a fallback UI.
        </Typography>

        <CodeBlock
          code={`// ErrorBoundary.jsx
  import React from 'react';
  
  class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
  
    return this.props.children;
  }
  }
  
  export default ErrorBoundary;`}
        />

        <Typography variant="h6" gutterBottom>
          🔌 Usage:
        </Typography>
        <CodeBlock
          code={`<ErrorBoundary>
  <MyComponent />
  </ErrorBoundary>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ 2. try/catch in Event Handlers or Async Code
        </Typography>
        <Typography variant="body1" paragraph>
          For event handlers or side effects, use standard JavaScript try/catch
          blocks.
        </Typography>

        <CodeBlock
          code={`const handleClick = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch failed:", error);
    alert("An error occurred while fetching data.");
  }
  };`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 3. Validating Props with PropTypes or TypeScript
        </Typography>
        <Typography variant="body1" paragraph>
          Using TypeScript or PropTypes helps prevent runtime errors due to
          invalid props or data types.
        </Typography>

        <CodeBlock
          code={`// With PropTypes
  MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  };`}
        />

        <CodeBlock
          code={`// With TypeScript
  interface MyComponentProps {
  name: string;
  }
  
  const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return <div>{name}</div>;
  };`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🪟 4. Conditional Rendering or Fallback UIs
        </Typography>
        <Typography variant="body1" paragraph>
          Gracefully display fallback UI when data is not available or an error
          is thrown manually.
        </Typography>

        <CodeBlock
          code={`if (!data) {
  return <div>Loading...</div>;
  }
  
  if (error) {
  return <div>Error loading data</div>;
  }
  
  return <div>{data.name}</div>;`}
        />

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "error.main", mt: 3 }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              📌 Summary
            </Typography>
            <Typography variant="body1">
              React provides multiple strategies for error handling depending on
              the context. For render-time errors, use Error Boundaries. For
              event-based and async errors, use try/catch. Always validate props
              and render fallback UI where necessary to keep your app resilient.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What are portals in React?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🚪 What Are Portals in React?
        </Typography>

        <Typography variant="body1" paragraph>
          Portals provide a first-class way to render children into a DOM node
          that exists outside the DOM hierarchy of the parent component. They
          are extremely useful for modals, tooltips, dropdowns, and overlays
          where DOM positioning matters.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📘 Key Points
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Portals let you render children into a different part of the DOM." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Useful for UI elements that need to break out of overflow:hidden or stacking context issues." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Maintains React event bubbling as if it were inside the parent tree." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ How to Create a Portal
        </Typography>

        <Typography variant="body1" paragraph>
          To use a portal, you need a DOM element outside your main root, and
          then render into it using <code>ReactDOM.createPortal()</code>.
        </Typography>

        <Typography variant="h6">HTML Setup (index.html):</Typography>
        <CodeBlock
          code={`<!-- index.html -->
  <body>
  <div id="root"></div>
  <div id="portal-root"></div>
  </body>`}
        />

        <Typography variant="h6">React Code:</Typography>
        <CodeBlock
          code={`// ModalPortal.tsx
  import React from 'react';
  import ReactDOM from 'react-dom';
  
  const Modal = ({ children }: { children: React.ReactNode }) => {
  const portalRoot = document.getElementById('portal-root');
  return portalRoot ? ReactDOM.createPortal(children, portalRoot) : null;
  };
  
  export default Modal;`}
        />

        <Typography variant="h6">Usage:</Typography>
        <CodeBlock
          code={`// App.tsx
  import React, { useState } from 'react';
  import Modal from './ModalPortal';
  
  const App = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <Modal>
          <div style={{
            position: 'fixed',
            top: '40%',
            left: '40%',
            padding: '20px',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <h2>I'm in a Portal!</h2>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </Modal>
      )}
    </>
  );
  };`}
        />

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "info.main", mt: 3 }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              📌 Summary
            </Typography>
            <Typography variant="body1">
              React Portals are a powerful feature for rendering UI elements
              outside the root DOM hierarchy. They're ideal for modals,
              popovers, and other floating UI elements that require special
              placement in the DOM without breaking React’s event model.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "How do you implement lazy loading in React?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🐢 Lazy Loading in React
        </Typography>

        <Typography variant="body1" paragraph>
          Lazy loading is a technique in React that helps improve application
          performance by loading components only when they are needed. This is
          especially useful for large components or routes that aren't
          immediately required at initial load.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Why Use Lazy Loading?
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Improves initial load time by splitting code." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Reduces bundle size by avoiding unnecessary code loading." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Makes applications more scalable." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔧 How to Implement Lazy Loading
        </Typography>

        <Typography variant="body1" paragraph>
          React provides the <code>React.lazy()</code> function to define
          lazy-loaded components. It must be used with
          <code>Suspense</code> to show a fallback while the component is being
          loaded.
        </Typography>

        <Typography variant="h6">Example Component (Lazy Loaded)</Typography>
        <CodeBlock
          code={`// components/HeavyComponent.tsx
  import React from 'react';
  
  const HeavyComponent = () => {
  return (
    <div>
      <h2>This is a heavy component</h2>
      <p>Loaded only when needed!</p>
    </div>
  );
  };
  
  export default HeavyComponent;`}
        />

        <Typography variant="h6">Using Lazy and Suspense</Typography>
        <CodeBlock
          code={`// App.tsx
  import React, { Suspense, useState } from 'react';
  
  const HeavyComponent = React.lazy(() => import('./components/HeavyComponent'));
  
  const App = () => {
  const [show, setShow] = useState(false);
  
  return (
    <div>
      <h1>React Lazy Loading Example</h1>
      <button onClick={() => setShow(true)}>Load Heavy Component</button>
  
      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
  };
  
  export default App;`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ Things to Keep in Mind
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Always wrap lazy components in <Suspense>." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Provide a fallback UI like a spinner or message." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Lazy loading only works for default exports." />
          </ListItem>
        </List>

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "info.main", mt: 3 }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              📌 Summary
            </Typography>
            <Typography variant="body1">
              React’s lazy loading mechanism using <code>React.lazy()</code> and{" "}
              <code>Suspense</code> enables code splitting and helps load
              components only when required. It significantly boosts app
              performance, particularly in large-scale applications.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is code splitting in React?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          ✂️ Code Splitting in React
        </Typography>

        <Typography variant="body1" paragraph>
          Code splitting is a powerful feature in React that allows you to split
          your code into smaller chunks so that it can be loaded on demand. This
          significantly improves your application's performance, especially when
          it grows in size.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚡ Why Use Code Splitting?
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Reduces initial loading time by only loading what's needed." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Improves performance and user experience." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Enables better caching and faster routing." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔧 How Code Splitting Works in React
        </Typography>
        <Typography variant="body1" paragraph>
          React supports code splitting via dynamic <code>import()</code>{" "}
          statements and the built-in <code>React.lazy()</code> function along
          with <code>&lt;Suspense&gt;</code>.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Basic Example using React.lazy
        </Typography>
        <CodeBlock
          code={`// HeavyComponent.tsx
  const HeavyComponent = () => {
  return <div>This is a heavy component loaded on demand</div>;
  };
  
  export default HeavyComponent;`}
        />
        <CodeBlock
          code={`// App.tsx
  import React, { Suspense, useState } from 'react';
  
  const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
  
  const App = () => {
  const [show, setShow] = useState(false);
  
  return (
    <div>
      <h1>Code Splitting Example</h1>
      <button onClick={() => setShow(true)}>Load Heavy Component</button>
  
      {show && (
        <Suspense fallback={<p>Loading...</p>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
  };
  
  export default App;`}
        />

        <Typography variant="body1" paragraph>
          In the above example, the <code>HeavyComponent</code> is only loaded
          when the user clicks the button. This is the essence of code
          splitting.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛣️ Route-Based Code Splitting
        </Typography>
        <Typography variant="body1" paragraph>
          You can also split code based on routes using libraries like{" "}
          <code>react-router-dom</code>. Here’s an example:
        </Typography>

        <CodeBlock
          code={`// routes.tsx
  import React, { Suspense } from 'react';
  import { Routes, Route } from 'react-router-dom';
  
  const Home = React.lazy(() => import('./pages/Home'));
  const About = React.lazy(() => import('./pages/About'));
  
  export const AppRoutes = () => (
  <Suspense fallback={<div>Loading page...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Suspense>
  );`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ Considerations
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Lazy loading works only with default exports." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Always wrap lazy-loaded components in a <Suspense> block." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Fallbacks can be spinners, loaders, or skeleton UIs." />
          </ListItem>
        </List>

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main", mt: 3 }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              🧾 Summary
            </Typography>
            <Typography variant="body1">
              Code splitting helps deliver faster load times and better user
              experiences by dynamically loading only the parts of the
              application that are necessary. React makes this easy using{" "}
              <code>React.lazy</code> and <code>Suspense</code>.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is Suspense in React?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🌀 What is <code>Suspense</code> in React?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>React.Suspense</strong> is a built-in component in React that
          allows you to “wait” for some code to load or resolve before rendering
          a part of your UI. It is commonly used with{" "}
          <strong>code-splitting</strong> and <strong>lazy loading</strong>{" "}
          using <code>React.lazy()</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Why Suspense?
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Handles loading states for components that are lazy-loaded." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Improves performance by splitting your code into chunks." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Provides a fallback UI (like a spinner or message) while content is loading." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ How to Use <code>Suspense</code>
        </Typography>

        <Typography variant="body1" paragraph>
          First, use <code>React.lazy</code> to lazy-load a component, and then
          wrap that component in a <code>Suspense</code> block with a fallback
          UI.
        </Typography>

        <Typography variant="h6" gutterBottom>
          📦 Example: Lazy Loading with Suspense
        </Typography>

        <CodeBlock
          code={`// HeavyComponent.tsx
  const HeavyComponent = () => {
  return <div>This is a heavy component!</div>;
  };
  
  export default HeavyComponent;`}
        />

        <CodeBlock
          code={`// App.tsx
  import React, { Suspense } from 'react';
  
  const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
  
  const App = () => {
  return (
    <div>
      <h2>Using Suspense Example</h2>
      <Suspense fallback={<p>Loading component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
  };
  
  export default App;`}
        />

        <Typography variant="body1" paragraph>
          In this example, <code>HeavyComponent</code> is only loaded when
          needed. While it is loading, the fallback UI (in this case,{" "}
          <code>Loading component...</code>) is displayed.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Common Use Cases
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Lazy loading components using React.lazy." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Data fetching libraries like React Query, Relay, or SWR (future versions)." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Suspense for data fetching (experimental in React 18)." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ Important Notes
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="You must use default exports with React.lazy." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Always wrap lazy-loaded components in a Suspense block with a fallback." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Suspense currently only works with components (not data) unless using experimental APIs." />
          </ListItem>
        </List>

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main", mt: 3 }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              🧾 Summary
            </Typography>
            <Typography variant="body1">
              <strong>React.Suspense</strong> makes it easy to show a loading
              state while a component is being asynchronously loaded. It
              enhances performance and user experience by managing asynchronous
              rendering in a declarative way.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is Server-Side Rendering (SSR)?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          ⚙️ What is Server-Side Rendering (SSR) in React?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Server-Side Rendering (SSR)</strong> is the process of
          rendering React components on the server instead of in the browser.
          With SSR, the server generates the complete HTML for a page and sends
          it to the client, where it is hydrated into a full React app.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 Benefits of SSR
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Faster First Page Load – HTML is sent immediately without waiting for JavaScript to load." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Better SEO – Search engines can easily crawl the pre-rendered content." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Improved Performance on Slow Networks or Devices." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔧 How It Works
        </Typography>

        <Typography variant="body1" paragraph>
          In SSR, the React components are rendered into HTML on the server
          using a special function like <code>renderToString</code> from{" "}
          <code>react-dom/server</code>. The resulting HTML is then sent to the
          client. On the client side, React "hydrates" the markup to make it
          interactive.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          💻 Example using Express + React SSR
        </Typography>

        <CodeBlock
          code={`// server.js
  import express from 'express';
  import React from 'react';
  import ReactDOMServer from 'react-dom/server';
  import App from './App';
  
  const server = express();
  
  server.get('*', (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  res.send(\`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR Example</title>
      </head>
      <body>
        <div id="root">\${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  \`);
  });
  
  server.listen(3000, () => {
  console.log('Server is listening on port 3000');
  });`}
        />

        <CodeBlock
          code={`// App.jsx
  import React from 'react';
  
  const App = () => {
  return <h1>Hello from SSR React App!</h1>;
  };
  
  export default App;`}
        />

        <Typography variant="body2" paragraph>
          In this example, the React app is rendered to a string on the server
          and injected into a basic HTML template. The client can then hydrate
          the app using the regular React scripts.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 SSR in Frameworks (e.g. Next.js)
        </Typography>

        <Typography variant="body1" paragraph>
          Frameworks like <strong>Next.js</strong> provide built-in support for
          SSR. You can use the <code>getServerSideProps</code> function to fetch
          data server-side before rendering the page.
        </Typography>

        <CodeBlock
          code={`// pages/index.tsx (Next.js Example)
  export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  
  return { props: { data } };
  }
  
  export default function Home({ data }) {
  return <div>{JSON.stringify(data)}</div>;
  }`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ SSR vs CSR (Client-Side Rendering)
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="SSR renders on the server, CSR renders in the browser."
              secondary="SSR sends complete HTML; CSR sends an empty div and runs JS to render."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="SSR is better for SEO and initial load performance."
              secondary="CSR is better for highly dynamic or interactive pages."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main", mt: 3 }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              🧾 Summary
            </Typography>
            <Typography variant="body1">
              <strong>Server-Side Rendering</strong> allows you to render React
              components into HTML on the server, improving performance, SEO,
              and user experience. It’s commonly used in production apps that
              rely on fast content delivery and visibility to search engines.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is hydration in React?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          💧 What is Hydration in React?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Hydration</strong> is the process in which React attaches
          event listeners and reuses the existing HTML content that was
          generated on the server side. It’s a crucial concept when using
          **Server-Side Rendering (SSR)**.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Why is Hydration Needed?
        </Typography>

        <Typography variant="body1" paragraph>
          When a page is rendered on the server (SSR), the HTML is sent to the
          browser. But React needs to take control of the DOM in order to make
          it interactive. This process of attaching React’s virtual DOM to the
          existing HTML is called **hydration**.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 How Hydration Works
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="The server renders the initial HTML and sends it to the client." />
          </ListItem>
          <ListItem>
            <ListItemText primary="The client loads React and JavaScript bundles." />
          </ListItem>
          <ListItem>
            <ListItemText primary="React attaches event listeners and reuses the server-rendered HTML instead of recreating it." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Example with `ReactDOM.hydrate`
        </Typography>

        <Typography variant="body1" paragraph>
          In older versions of React, hydration was done like this:
        </Typography>

        <CodeBlock
          code={`// client.js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  
  // Hydration instead of render
  ReactDOM.hydrate(<App />, document.getElementById('root'));`}
        />

        <Typography variant="body1" paragraph>
          In modern versions of React (v18+), it is done using{" "}
          <code>hydrateRoot</code>:
        </Typography>

        <CodeBlock
          code={`// client.js (React 18+)
  import { hydrateRoot } from 'react-dom/client';
  import App from './App';
  
  hydrateRoot(document.getElementById('root'), <App />);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚧 Things to Watch Out For
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Hydration errors occur if server-rendered content differs from client-rendered content." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Avoid side effects like window access during SSR." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Make sure your initial state matches on server and client." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main", mt: 3 }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              📌 Summary
            </Typography>
            <Typography variant="body1">
              Hydration is a process that makes server-rendered HTML interactive
              by attaching React to it on the client side. It plays a vital role
              in SSR applications by ensuring that you get the performance
              benefits of server rendering and the interactivity of client-side
              React.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What are render props?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🧩 What Are Render Props in React?
        </Typography>

        <Typography variant="body1" paragraph>
          A <strong>render prop</strong> is a technique for sharing code between
          React components using a prop whose value is a function. Instead of
          passing static children, you pass a function that returns elements to
          render.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🤔 Why Use Render Props?
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="To share behavior (like state, logic) between components." />
          </ListItem>
          <ListItem>
            <ListItemText primary="To avoid repetition and enable reusability." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Alternative to higher-order components (HOCs)." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Example: Render Prop Pattern
        </Typography>

        <Typography variant="body1" paragraph>
          Below is a component that shares its state via a render prop:
        </Typography>

        <CodeBlock
          code={`// MouseTracker.js
  import React from 'react';
  
  class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };
  
  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };
  
  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
  }
  
  export default MouseTracker;`}
        />

        <Typography variant="body1" paragraph>
          Now you can use the `MouseTracker` and pass a render prop to define
          what should be rendered with the state:
        </Typography>

        <CodeBlock
          code={`// App.js
  import React from 'react';
  import MouseTracker from './MouseTracker';
  
  function App() {
  return (
    <div>
      <h1>Move your mouse!</h1>
      <MouseTracker
        render={({ x, y }) => (
          <h2>The mouse position is ({x}, {y})</h2>
        )}
      />
    </div>
  );
  }
  
  export default App;`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ Best Practices
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="Use descriptive names like `render`, `children`, or `renderContent` for clarity." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Avoid deeply nested render props to prevent complexity." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Card
          variant="outlined"
          sx={{ borderLeft: 4, borderColor: "primary.main", mt: 3 }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              📌 Summary
            </Typography>
            <Typography variant="body1">
              Render props are a powerful pattern for sharing logic between
              components. By passing a function as a prop, you give the
              consuming component full control over what gets rendered, while
              encapsulating shared behavior like state or event handling.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is react-router-dom?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          📦 What is <code>react-router-dom</code>?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>react-router-dom</strong> is a powerful routing library
          designed for React apps that run in the browser. It enables
          single-page application (SPA) navigation capabilities—allowing you to
          move between views without refreshing the entire page.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Key Concepts
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="BrowserRouter"
              secondary="Wraps your application to enable routing using the browser's history API."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Routes & Route"
              secondary="Used to define application paths and which components render at each path."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Link / NavLink"
              secondary="Navigates between routes without reloading the page."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="useNavigate"
              secondary="Hook for programmatic navigation."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="useParams"
              secondary="Hook to access route parameters like /user/:id."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Outlet"
              secondary="Used to render nested routes in layout components."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Navigate"
              secondary="Component that redirects to another route."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💻 Example Code (Basic Setup)
        </Typography>

        <Typography variant="body1" paragraph>
          First, install the library:
        </Typography>
        <CodeBlock code={`npm install react-router-dom`} />

        <Typography variant="body1" paragraph>
          Example of setting up routing:
        </Typography>
        <CodeBlock
          code={`// App.tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
return (
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
}
export default App;`}
        />

        <Typography variant="body1" paragraph>
          Example component with a dynamic route:
        </Typography>
        <CodeBlock
          code={`// User.tsx
import { useParams } from 'react-router-dom';

function User() {
const { id } = useParams();
return <div>User ID: {id}</div>;
}
export default User;`}
        />

        <Typography variant="body1" paragraph>
          Programmatic navigation:
        </Typography>
        <CodeBlock
          code={`// In a component
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
const navigate = useNavigate();
return <button onClick={() => navigate('/about')}>Go to About</button>;
};`}
        />

        <Typography variant="body1" paragraph>
          Nested routing with <code>Outlet</code>:
        </Typography>
        <CodeBlock
          code={`// Layout.tsx
import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
<div>
  <nav>
    <Link to="/dashboard">Dashboard</Link> | <Link to="/settings">Settings</Link>
  </nav>
  <Outlet />
</div>
);`}
        />

        <Typography variant="body1" paragraph>
          And define routes with children:
        </Typography>
        <CodeBlock
          code={`<Routes>
<Route path="/" element={<Layout />}>
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="settings" element={<Settings />} />
</Route>
</Routes>`}
        />
      </Box>
    ),
  },
  {
    heading: "How to implement routing in React?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          🚦 How to Implement Routing in React
        </Typography>

        <Typography variant="body1" paragraph>
          Routing in React is handled by the <strong>react-router-dom</strong>{" "}
          library. It allows you to build a single-page application (SPA) where
          different views are rendered without full page reloads. Let’s break
          down the complete steps to implement routing in React.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Step 1: Install react-router-dom
        </Typography>
        <Typography variant="body1">
          Install the routing library using npm or yarn:
        </Typography>
        <CodeBlock code={`npm install react-router-dom`} />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Step 2: Set Up Router in Your App
        </Typography>
        <Typography variant="body1">
          Import <code>BrowserRouter</code>, <code>Routes</code>, and{" "}
          <code>Route</code> from
          <code>react-router-dom</code>, then wrap your components with them.
        </Typography>
        <CodeBlock
          code={`// App.tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
return (
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Step 3: Create the Page Components
        </Typography>
        <Typography variant="body1">
          You need to create the components that will be rendered at different
          routes.
        </Typography>

        <CodeBlock
          code={`// pages/Home.tsx
function Home() {
return <h1>Welcome to the Home Page</h1>;
}
export default Home;`}
        />
        <CodeBlock
          code={`// pages/About.tsx
function About() {
return <h1>About Us</h1>;
}
export default About;`}
        />
        <CodeBlock
          code={`// pages/Contact.tsx
function Contact() {
return <h1>Contact Us</h1>;
}
export default Contact;`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ Step 4: Navigate Programmatically
        </Typography>
        <Typography variant="body1">
          Use the <code>useNavigate</code> hook for programmatic navigation.
        </Typography>

        <CodeBlock
          code={`// In any component
import { useNavigate } from 'react-router-dom';

const GoToAbout = () => {
const navigate = useNavigate();
return (
  <button onClick={() => navigate('/about')}>
    Go to About Page
  </button>
);
};`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Step 5: Handle Dynamic Routes
        </Typography>
        <Typography variant="body1">
          You can create dynamic routes using route parameters like{" "}
          <code>:id</code>.
        </Typography>

        <CodeBlock
          code={`// App.tsx (updated with dynamic route)
<Route path="/user/:id" element={<User />} />`}
        />
        <CodeBlock
          code={`// pages/User.tsx
import { useParams } from 'react-router-dom';

const User = () => {
const { id } = useParams();
return <div>User ID: {id}</div>;
};

export default User;`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧬 Step 6: Nested Routing with Layouts
        </Typography>
        <Typography variant="body1">
          Use <code>Outlet</code> for rendering child routes inside a layout.
        </Typography>

        <CodeBlock
          code={`// Layout.tsx
import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
<div>
  <nav>
    <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
  </nav>
  <Outlet />
</div>
);

export default Layout;`}
        />
        <CodeBlock
          code={`// App.tsx (with nested routing)
<Routes>
<Route path="/dashboard" element={<Layout />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
</Routes>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 Step 7: 404 Not Found Route
        </Typography>
        <Typography variant="body1">
          Catch all undefined routes with a wildcard path:
        </Typography>

        <CodeBlock
          code={`<Routes>
<Route path="*" element={<h1>404 - Page Not Found</h1>} />
</Routes>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          ✅ Summary:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Install react-router-dom" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Wrap the app with BrowserRouter" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Define routes with Routes and Route" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Use Link/NavLink for navigation" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Use useNavigate/useParams hooks" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Handle nested and dynamic routes" />
          </ListItem>
        </List>
      </Box>
    ),
  },
  {
    heading: "What is Switch vs Routes in React Router v6?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          🔄 Switch vs Routes in React Router v6
        </Typography>

        <Typography variant="body1" paragraph>
          In previous versions of React Router (v5 and below), routing logic was
          wrapped with the <code>Switch</code> component. However, with the
          release of <strong>React Router v6</strong>,<code>Switch</code> has
          been replaced with a new component called <code>Routes</code>. While
          they serve a similar purpose, they have several key differences in
          behavior and usage.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Purpose of <code>Switch</code> (React Router v5)
        </Typography>
        <Typography variant="body1" paragraph>
          <code>Switch</code> renders the first child <code>&lt;Route&gt;</code>{" "}
          or <code>&lt;Redirect&gt;</code> that matches the current location.
        </Typography>
        <CodeBlock
          code={`// React Router v5
import { Switch, Route } from 'react-router-dom';

<Switch>
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
<Route path="/" component={Home} />
</Switch>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 Introduction of <code>Routes</code> (React Router v6)
        </Typography>
        <Typography variant="body1" paragraph>
          In v6, <code>Switch</code> was replaced with <code>Routes</code>. It
          uses a more declarative and modern API with better matching behavior.
        </Typography>

        <CodeBlock
          code={`// React Router v6
import { Routes, Route } from 'react-router-dom';

<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Key Differences
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Feature</strong>
                </TableCell>
                <TableCell>
                  <strong>Switch (v5)</strong>
                </TableCell>
                <TableCell>
                  <strong>Routes (v6)</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Component</TableCell>
                <TableCell>
                  <code>Switch</code>
                </TableCell>
                <TableCell>
                  <code>Routes</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Prop for rendering</TableCell>
                <TableCell>
                  <code>component</code> or <code>render</code>
                </TableCell>
                <TableCell>
                  <code>element</code> (JSX only)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Nested Routes</TableCell>
                <TableCell>Not natively supported</TableCell>
                <TableCell>
                  Fully supported with <code>Outlet</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Route Matching</TableCell>
                <TableCell>Partial matching by default</TableCell>
                <TableCell>Exact matching by default</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Redirects</TableCell>
                <TableCell>
                  <code>Redirect</code> component
                </TableCell>
                <TableCell>
                  <code>Navigate</code> component
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Example Migration: v5 to v6
        </Typography>

        <Typography variant="body1" paragraph>
          Here's how you'd migrate from React Router v5 to v6:
        </Typography>

        <CodeBlock
          code={`// v5 code
<Switch>
<Route exact path="/" component={Home} />
<Route path="/about" component={About} />
</Switch>`}
        />

        <CodeBlock
          code={`// v6 equivalent
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
</Routes>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          💡 Summary
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="React Router v6 replaces Switch with Routes." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Routes uses JSX via the element prop instead of component/render." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Nested routing and layout support is improved in v6 using Outlet." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Routes match paths exactly by default, unlike v5." />
          </ListItem>
        </List>
      </Box>
    ),
  },
  {
    heading: "How do you handle redirects in React Router?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          🔁 Handling Redirects in React Router
        </Typography>

        <Typography variant="body1" paragraph>
          Redirects allow navigation from one route to another automatically.
          React Router provides different ways to handle redirects in different
          versions:
          <strong> Redirect</strong> in <code>v5</code> and{" "}
          <strong>Navigate</strong> in <code>v6</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 React Router v5: Using <code>Redirect</code>
        </Typography>
        <Typography variant="body1" paragraph>
          In React Router v5, you use the <code>Redirect</code> component to
          redirect users from one route to another.
        </Typography>

        <CodeBlock
          code={`// Redirect in React Router v5
import { Redirect, Route, Switch } from 'react-router-dom';

<Switch>
<Route exact path="/" component={Home} />
<Redirect from="/home" to="/" />
</Switch>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 React Router v6: Using <code>Navigate</code>
        </Typography>
        <Typography variant="body1" paragraph>
          In React Router v6, the <code>Redirect</code> component was replaced
          with the new
          <code>Navigate</code> component.
        </Typography>

        <CodeBlock
          code={`// Redirect in React Router v6
import { Routes, Route, Navigate } from 'react-router-dom';

<Routes>
<Route path="/" element={<Home />} />
<Route path="/home" element={<Navigate to="/" replace />} />
</Routes>`}
        />

        <Typography variant="body2" sx={{ mt: 1, mb: 3 }}>
          ⚠️ <strong>Note:</strong> <code>replace</code> prop ensures the
          redirect doesn’t add a new entry in the browser history.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Redirect After Login
        </Typography>

        <Typography variant="body1" paragraph>
          You can redirect after login using the <code>useNavigate</code> hook
          (v6) or <code>useHistory</code> (v5).
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          🔐 React Router v6 Example:
        </Typography>
        <CodeBlock
          code={`import { useNavigate } from 'react-router-dom';

function Login() {
const navigate = useNavigate();

const handleLogin = () => {
  // Perform login logic...
  navigate('/dashboard');
};

return <button onClick={handleLogin}>Login</button>;
}`}
        />

        <Typography variant="subtitle1" gutterBottom>
          🔐 React Router v5 Example:
        </Typography>
        <CodeBlock
          code={`import { useHistory } from 'react-router-dom';

function Login() {
const history = useHistory();

const handleLogin = () => {
  // Perform login logic...
  history.push('/dashboard');
};

return <button onClick={handleLogin}>Login</button>;
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Comparison Table
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Feature</strong>
                </TableCell>
                <TableCell>
                  <strong>React Router v5</strong>
                </TableCell>
                <TableCell>
                  <strong>React Router v6</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Redirect Component</TableCell>
                <TableCell>
                  <code>Redirect</code>
                </TableCell>
                <TableCell>
                  <code>Navigate</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Redirect from route</TableCell>
                <TableCell>
                  <code>&lt;Redirect from="/old" to="/new" /&gt;</code>
                </TableCell>
                <TableCell>
                  <code>
                    &lt;Route path="/old" element=&lt;Navigate to="/new" /&gt;
                    /&gt;
                  </code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Programmatic Redirect</TableCell>
                <TableCell>
                  <code>useHistory().push()</code>
                </TableCell>
                <TableCell>
                  <code>useNavigate()</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>History Replacement</TableCell>
                <TableCell>
                  <code>history.replace()</code>
                </TableCell>
                <TableCell>
                  <code>
                    navigate('/path', replace: true) (replace: true :-- inside{" "}
                    {})
                  </code>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          ✅ Summary
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="React Router v5 uses Redirect, v6 uses Navigate." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Programmatic redirects in v5 use useHistory, while v6 uses useNavigate." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Redirect after login is a common use case." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Always use replace if you don’t want to stack the redirect in history." />
          </ListItem>
        </List>
      </Box>
    ),
  },
  {
    heading: "How do you optimize performance in React apps?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          ⚙️ Optimizing Performance in React Apps
        </Typography>

        <Typography variant="body1" paragraph>
          Optimizing performance in React ensures that your application remains
          fast, responsive, and efficient, especially as it scales. Here are the
          most important strategies you can follow.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 1. Use React.memo for Component Memoization
        </Typography>
        <Typography variant="body1" paragraph>
          <code>React.memo</code> prevents unnecessary re-renders of functional
          components if props haven’t changed.
        </Typography>
        <CodeBlock
          code={`const Button = React.memo(({ onClick, children }) => {
console.log("Rendered:", children);
return <button onClick={onClick}>{children}</button>;
});`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 2. Use useMemo and useCallback Hooks
        </Typography>
        <Typography variant="body1" paragraph>
          These hooks help memoize expensive computations and stable function
          references between renders.
        </Typography>

        <CodeBlock
          code={`const memoizedValue = useMemo(() => computeHeavyValue(data), [data]);

const memoizedCallback = useCallback(() => {
doSomething();
}, [dependencies]);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 3. Lazy Load Components with React.lazy and Suspense
        </Typography>
        <Typography variant="body1" paragraph>
          Load components only when needed to reduce initial bundle size.
        </Typography>

        <CodeBlock
          code={`const LazyComponent = React.lazy(() => import('./HeavyComponent'));

<Suspense fallback={<div>Loading...</div>}>
<LazyComponent />
</Suspense>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 4. Code Splitting with Dynamic Imports
        </Typography>
        <Typography variant="body1" paragraph>
          Split your app into smaller chunks to load on demand.
        </Typography>

        <CodeBlock
          code={`// Webpack will split this automatically
const OtherPage = React.lazy(() => import('./OtherPage'));`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 5. Avoid Inline Functions in JSX
        </Typography>
        <Typography variant="body1" paragraph>
          Inline functions create new references every render and can break
          memoization.
        </Typography>

        <CodeBlock
          code={`// ❌ Avoid this
<button onClick={() => handleClick(id)}>Click</button>

// ✅ Use useCallback
const onClickHandler = useCallback(() => handleClick(id), [id]);
<button onClick={onClickHandler}>Click</button>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 6. Optimize Lists with keys and react-window
        </Typography>
        <Typography variant="body1" paragraph>
          For large lists, use libraries like <code>react-window</code> to only
          render visible items.
        </Typography>

        <CodeBlock
          code={`import { FixedSizeList as List } from 'react-window';

<List height={400} itemCount={1000} itemSize={35} width="100%">
{({ index, style }) => <div style={style}>Row {index}</div>}
</List>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 7. Use Production Builds
        </Typography>
        <Typography variant="body1" paragraph>
          Always build your app with <code>npm run build</code> for production.
          It enables React’s production optimizations and disables warnings.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📊 8. Analyze Bundle Size
        </Typography>
        <Typography variant="body1" paragraph>
          Use tools like <code>webpack-bundle-analyzer</code> to inspect and
          reduce bundle size.
        </Typography>

        <CodeBlock
          code={`npm install --save-dev webpack-bundle-analyzer

// in webpack config
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
plugins: [new BundleAnalyzerPlugin()]`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 9. Avoid Unnecessary State Updates
        </Typography>
        <Typography variant="body1" paragraph>
          Ensure state updates only when necessary to avoid cascading
          re-renders.
        </Typography>

        <CodeBlock
          code={`// ✅ Only update if value has changed
if (prevValue !== newValue) {
setValue(newValue);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          ✅ Summary of Key Optimizations
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Optimization</strong>
                </TableCell>
                <TableCell>
                  <strong>Tool / Method</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Memoization</TableCell>
                <TableCell>
                  <code>React.memo, useMemo, useCallback</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Code Splitting</TableCell>
                <TableCell>
                  <code>React.lazy, Suspense</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Virtualized Lists</TableCell>
                <TableCell>
                  <code>react-window</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Reduce Renders</TableCell>
                <TableCell>
                  <code>Keys, avoid inline functions</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Build Optimization</TableCell>
                <TableCell>
                  <code>Production build, tree shaking</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bundle Analysis</TableCell>
                <TableCell>
                  <code>webpack-bundle-analyzer</code>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          Pro tip: Always profile your app with React DevTools and Chrome
          Performance tab to spot bottlenecks!
        </Typography>
      </Box>
    ),
  },
];
