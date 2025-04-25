import { Box, Divider, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const CONTEXT_CONCEPTS_DATA = [
  {
    heading: "What is Context API?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🌐 What is Context API in React?
        </Typography>

        <Typography paragraph>
          The <strong>Context API</strong> in React allows you to share values
          like state, themes, or settings between components without explicitly
          passing props at every level — this is often referred to as "prop
          drilling".
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 Why Use Context API?
        </Typography>
        <Typography component="ul">
          <li>
            To share global data (e.g., user auth, language, theme) across
            deeply nested components.
          </li>
          <li>
            Avoids "prop drilling" — passing props from parent to child to
            grandchild, etc.
          </li>
          <li>More maintainable and scalable for global state.</li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Core Building Blocks of Context API
        </Typography>
        <Typography paragraph>React's Context API consists of:</Typography>
        <Typography component="ul">
          <li>
            <strong>React.createContext()</strong> - Creates a context object.
          </li>
          <li>
            <strong>Context.Provider</strong> - Provides the context value to
            child components.
          </li>
          <li>
            <strong>useContext()</strong> - Consumes the context inside
            functional components.
          </li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ Basic Example
        </Typography>

        <CodeBlock
          code={`// 1. Create a Context
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null); // context for theme (light/dark)`}
        />

        <CodeBlock
          code={`// 2. Provide Context Value to Component Tree
const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState("light");

const toggleTheme = () =>
  setTheme((prev) => (prev === "light" ? "dark" : "light"));

return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
);
};`}
        />

        <CodeBlock
          code={`// 3. Consume Context Value with useContext Hook
const ThemeToggler = () => {
const { theme, toggleTheme } = useContext(ThemeContext);
return (
  <button onClick={toggleTheme}>
    Current Theme: {theme}
  </button>
);
};`}
        />

        <CodeBlock
          code={`// 4. Wrap your App with the Provider
const App = () => (
<ThemeProvider>
  <ThemeToggler />
</ThemeProvider>
);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Best Practices
        </Typography>
        <Typography component="ul">
          <li>Split your context logic into a dedicated provider file.</li>
          <li>Use context only for global data — not for everything!</li>
          <li>
            Memoize expensive values passed into `Provider` to avoid unnecessary
            re-renders.
          </li>
          <li>Combine with custom hooks for clean, reusable code.</li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ When to Use Context vs Redux?
        </Typography>
        <Typography component="ul">
          <li>
            Use <strong>Context API</strong> for lightweight, short-distance, or
            static global state (e.g., theme, locale, auth).
          </li>
          <li>
            Use <strong>Redux or Zustand</strong> for larger-scale, dynamic, or
            deeply complex state logic.
          </li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          ⚡ Pro Tip: Avoid overusing context for frequently updated values. It
          can cause unnecessary re-renders of all consuming components!
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the difference between context and redux?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧠 Context API vs Redux
        </Typography>

        <Typography paragraph>
          Both <strong>Context API</strong> and <strong>Redux</strong> are state
          management tools in React, but they serve different purposes and shine
          in different scenarios. Here's a detailed comparison with examples.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🌐 Context API Overview
        </Typography>
        <Typography paragraph>
          - Built into React.
          <br />- Ideal for small-to-medium apps or global data like theme,
          language, and auth.
        </Typography>

        <CodeBlock
          code={`// Create Context
const ThemeContext = createContext(null);

// Provide it
<ThemeContext.Provider value={...}>
<Component />
</ThemeContext.Provider>

// Consume it
const value = useContext(ThemeContext);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🗃️ Redux Overview
        </Typography>
        <Typography paragraph>
          - External library used for complex state logic.
          <br />- Centralized store to manage large, shared, and dynamic state.
        </Typography>

        <CodeBlock
          code={`// Setup with Redux Toolkit
const counterSlice = createSlice({
name: 'counter',
initialState: { value: 0 },
reducers: {
  increment: (state) => { state.value += 1 }
}
});

export const { increment } = counterSlice.actions;

const store = configureStore({ reducer: { counter: counterSlice.reducer } });

// Provide store
<Provider store={store}>
<App />
</Provider>

// Consume
const value = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Key Differences
        </Typography>
        <Typography component="ul">
          <li>
            <strong>Context API:</strong> Simple, great for static or rarely
            updated global values.
          </li>
          <li>
            <strong>Redux:</strong> Powerful for large applications with
            dynamic, frequently changing data.
          </li>
          <li>
            Context triggers re-renders on all consumers, Redux has granular
            subscriptions.
          </li>
          <li>
            Redux provides DevTools, middleware, persistence, async support
            out-of-the-box.
          </li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ When to Use What?
        </Typography>
        <Typography component="ul">
          <li>
            Use <strong>Context</strong> for global config: theme, user auth,
            locale, etc.
          </li>
          <li>
            Use <strong>Redux</strong> when you need complex flows: multiple
            data dependencies, async logic, or cross-component data access.
          </li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          🚀 Tip: You can even combine both — use Context for static values and
          Redux for dynamic state!
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are some common anti-patterns with Context?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          ⚠️ Common Anti-Patterns with React Context
        </Typography>

        <Typography paragraph>
          React Context is a powerful tool for sharing state globally, but it’s
          often misused. Below are some common anti-patterns and how to fix
          them, explained with examples.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🌀 1. Using Context for High-Frequency Updates
        </Typography>
        <Typography paragraph>
          Context isn’t optimized for rapidly changing values (e.g., mouse
          position or form fields) as every update causes all consumers to
          re-render.
        </Typography>
        <CodeBlock
          code={`const MousePositionContext = createContext({ x: 0, y: 0 });

const App = () => {
const [pos, setPos] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
  window.addEventListener("mousemove", handleMove);
  return () => window.removeEventListener("mousemove", handleMove);
}, []);

return (
  <MousePositionContext.Provider value={pos}>
    {/* ⚠️ This causes frequent re-renders */}
  </MousePositionContext.Provider>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 2. Passing Large, Complex State Trees
        </Typography>
        <Typography paragraph>
          Passing deeply nested state can trigger unnecessary re-renders. Keep
          your context values minimal and focused.
        </Typography>
        <CodeBlock
          code={`const App = () => {
const complexState = useMemo(() => ({
  user: { name: 'Alex', age: 30 },
  cart: [/* ... */],
  preferences: { theme: 'dark' },
}), []);

return (
  <AppContext.Provider value={complexState}>
    {/* ⚠️ All consumers re-render even for minor changes */}
  </AppContext.Provider>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🪓 3. Not Splitting Contexts
        </Typography>
        <Typography paragraph>
          Don’t put unrelated data in one context. Split contexts by domain
          (e.g., Theme, Auth) to avoid unnecessary re-renders.
        </Typography>
        <CodeBlock
          code={`const GlobalContext = createContext({
user: null,
theme: 'light',
notifications: [],
});

return (
<GlobalContext.Provider value={/* massive object */}>
  {/* ⚠️ Updating one field re-renders everything */}
</GlobalContext.Provider>
);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚡ 4. Not Memoizing the Context Value
        </Typography>
        <Typography paragraph>
          Avoid passing raw state or inline functions directly into context —
          they change on every render.
        </Typography>
        <CodeBlock
          code={`const App = () => {
const [theme, setTheme] = useState('light');

// ⚠️ BAD: new object on each render
<ThemeContext.Provider value={{ theme, setTheme }} />

// ✅ GOOD: memoize the value
const value = useMemo(() => ({ theme, setTheme }), [theme]);
return <ThemeContext.Provider value={value} />;
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 5. No Custom Hook for Context
        </Typography>
        <Typography paragraph>
          Accessing context directly means adding repetitive null checks. A
          custom hook encapsulates safety and clarity.
        </Typography>
        <CodeBlock
          code={`const ThemeContext = createContext(undefined);

const useTheme = () => {
const context = useContext(ThemeContext);
if (!context) throw new Error("useTheme must be used within a ThemeProvider");
return context;
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          💡 Tip: Keep context small, memoized, and focused. Use state
          management libraries for large, dynamic, or frequently updated data.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How does Context API work internally in React?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧬 How Context API Works Internally in React
        </Typography>

        <Typography paragraph>
          React's Context API provides a way to pass data through the component
          tree without having to pass props down manually at every level.
          Internally, it uses a combination of the{" "}
          <strong>Provider-Subscriber</strong> model and a special
          reconciliation mechanism to propagate updates efficiently.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Step 1: Creating and Providing Context
        </Typography>
        <Typography paragraph>
          React uses <code>createContext</code> to initialize the context with a
          default value. Then the <code>Provider</code> component wraps the
          subtree and exposes this value to all descendants.
        </Typography>

        <CodeBlock
          code={`const ThemeContext = createContext('light');

const App = () => {
return (
  <ThemeContext.Provider value="dark">
    <Toolbar />
  </ThemeContext.Provider>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Step 2: Consuming the Context
        </Typography>
        <Typography paragraph>
          Descendant components use <code>useContext</code> or{" "}
          <code>Context.Consumer</code>
          to access the current value. Behind the scenes, React subscribes these
          components to changes in the context value.
        </Typography>

        <CodeBlock
          code={`const Toolbar = () => {
const theme = useContext(ThemeContext); // Subscribes to ThemeContext
return <div>Current Theme: {theme}</div>;
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Internals: Provider Mechanism
        </Typography>
        <Typography paragraph>
          Under the hood, React maintains a list of all components that
          subscribe to a given context. When the <code>value</code> of the
          context changes, React re-renders all consumers. Context value is
          stored in a special fiber structure and compared using{" "}
          <code>Object.is()</code>
          to detect changes. If it changes, consumers are updated.
        </Typography>

        <CodeBlock
          code={`// Pseudo-code for what React does
if (Object.is(oldValue, newValue) === false) {
for (const subscriber of contextConsumers) {
  scheduleUpdateOnFiber(subscriber);
}
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Optimization: Memoization
        </Typography>
        <Typography paragraph>
          If you’re passing objects or functions as context values, wrap them in{" "}
          <code>useMemo</code>
          to avoid triggering unnecessary re-renders of consumers.
        </Typography>

        <CodeBlock
          code={`const [theme, setTheme] = useState('light');
const value = useMemo(() => ({ theme, setTheme }), [theme]);

<ThemeContext.Provider value={value}>...</ThemeContext.Provider>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Context Propagation
        </Typography>
        <Typography paragraph>
          React re-renders context consumers whenever the value changes at the{" "}
          <strong>nearest</strong>
          Provider. If no Provider is found above in the tree, the default value
          is used. This makes Context tree-aware and highly efficient in
          avoiding global broadcasting.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛑 Caveats
        </Typography>
        <Typography component="ul">
          <li>
            <strong>All consumers re-render</strong> if the value changes unless
            split or memoized.
          </li>
          <li>
            Don’t use Context for high-frequency changes like scroll or mouse
            position.
          </li>
          <li>
            Use <code>useMemo</code> or split Context to reduce re-renders.
          </li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          🚀 Tip: Understanding internals helps write performance-sensitive
          context trees and scale your app better.
        </Typography>
      </Box>
    ),
  },
];
