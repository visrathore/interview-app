import {
  Box,
  Divider,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const REACT19_REACT_DATA = [
  {
    heading:
      "What are React 19 Actions, and how do they improve form handling in React?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          ⚛️ React 19 Actions: A Better Way to Handle Forms
        </Typography>

        <Typography variant="body1" paragraph>
          React 19 introduces a new concept called <strong>Actions</strong>,
          aimed at simplifying form handling — especially useful for forms that
          interact with the server. This helps React bridge the gap between
          traditional form submissions and modern declarative handling in React
          apps.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 What Are Actions?
        </Typography>
        <Typography variant="body1" paragraph>
          Actions are functions that you can attach to forms or buttons to
          handle mutations (like submitting a form, posting data, etc.). They’re
          part of React’s server-centric model, making it easier to work with
          server state in frameworks like{" "}
          <strong>React Server Components</strong> and{" "}
          <strong>Next.js App Router</strong>.
        </Typography>

        <CodeBlock
          code={`// Simple server action
'use server';

export async function submitForm(formData) {
const name = formData.get('name');
// Save to DB or perform server logic
return { success: true };
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📋 How to Use Actions with Forms
        </Typography>
        <Typography variant="body1" paragraph>
          Forms in React 19 can now directly use an action function with the
          `action` prop:
        </Typography>

        <CodeBlock
          code={`<form action={submitForm}>
<input type="text" name="name" placeholder="Your name" />
<button type="submit">Submit</button>
</form>`}
        />

        <Typography variant="body1" paragraph>
          When the form is submitted, React serializes the form data and passes
          it to the `submitForm` server action.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Why Are Actions Useful?
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="✅ Simplifies server mutations"
              secondary="No more complex fetch + state logic."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="✅ Works with progressive enhancement"
              secondary="Forms degrade gracefully."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="✅ Reduces client-side JS for simple forms"
              secondary="Logic stays on the server."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Handling Server Responses
        </Typography>
        <Typography variant="body1" paragraph>
          You can get back a result from the server and use it to update UI
          using hooks like `useFormState`:
        </Typography>

        <CodeBlock
          code={`import { useFormState } from 'react-dom';

function FormComponent() {
const [state, formAction] = useFormState(submitForm, { success: false });

return (
  <form action={formAction}>
    <input name="name" />
    <button type="submit">Submit</button>
    {state.success && <p>Thanks for submitting!</p>}
  </form>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔐 Type Safety & Server Boundaries
        </Typography>
        <Typography variant="body1" paragraph>
          Actions are marked with `'use server'` directive, which makes them
          **server-only**. This improves security and keeps logic out of the
          client bundle.
        </Typography>

        <CodeBlock
          code={`'use server'; // server-only file
export async function updateUser(formData) {
const id = formData.get('id');
// Only runs on server, never exposed to client
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚡ Progressive Enhancement
        </Typography>
        <Typography variant="body1" paragraph>
          Since it uses native forms under the hood, this also means:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="✅ Works even if JavaScript is disabled" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Native accessibility and browser behavior" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" color="text.secondary">
          React 19 Actions are a huge leap toward simplifying data mutations and
          improving full-stack experiences with React — especially in the age of
          React Server Components.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How do Actions replace onSubmit handlers in forms?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          🚀 How Do Actions Replace onSubmit in React 19?
        </Typography>

        <Typography variant="body1" paragraph>
          In previous versions of React, handling form submissions required
          using the <code>onSubmit</code> handler on the client side. This
          involved capturing form data, preventing default behavior, and sending
          the data manually via `fetch` or `axios`.
        </Typography>

        <Typography variant="body1" paragraph>
          React 19 introduces a new and cleaner way — <strong>Actions</strong>.
          With Actions, you no longer need to manually write submission logic or
          manage `onSubmit`. Instead, you bind the form to a server function
          directly.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧾 Traditional `onSubmit` Handling (React 18 and below)
        </Typography>

        <CodeBlock
          code={`function ContactForm() {
const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get('name');
  
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({ name }),
    headers: { 'Content-Type': 'application/json' },
  });
};

return (
  <form onSubmit={handleSubmit}>
    <input name="name" placeholder="Name" />
    <button type="submit">Send</button>
  </form>
);
}`}
        />

        <Typography variant="body1" paragraph>
          This method requires handling all the logic yourself — serialization,
          validation, network calls, and even response handling.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Simplified Action-based Handling (React 19)
        </Typography>

        <Typography variant="body1" paragraph>
          React 19 allows you to attach an action (server function) directly to
          the form using the <code>action</code> prop:
        </Typography>

        <CodeBlock
          code={`'use server';

export async function handleForm(formData) {
const name = formData.get('name');
console.log('Received:', name);
// Save to database or perform server-side logic
}`}
        />

        <Typography variant="body1" paragraph>
          And now your form component becomes:
        </Typography>

        <CodeBlock
          code={`import { handleForm } from './actions';

function ContactForm() {
return (
  <form action={handleForm}>
    <input name="name" placeholder="Name" />
    <button type="submit">Send</button>
  </form>
);
}`}
        />

        <Typography variant="body1" paragraph>
          No more <code>onSubmit</code>, no more <code>preventDefault</code>,
          and no need to manually fetch or manage headers. The form submission
          is automatically intercepted and routed to the server action.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Key Differences Between `onSubmit` and Actions
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="🔧 Client vs Server"
              secondary="`onSubmit` runs on the client; Actions run on the server."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🧼 Clean Code"
              secondary="Actions eliminate boilerplate like preventDefault, fetch, and JSON handling."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="📡 Server-first"
              secondary="Actions make it easier to follow a server-first architecture using Server Components."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🔒 Secure by Default"
              secondary="Since actions run on the server, sensitive logic stays hidden from the client."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💬 Bonus: Using `useFormState` with Actions
        </Typography>

        <Typography variant="body1" paragraph>
          You can even manage response state using `useFormState`:
        </Typography>

        <CodeBlock
          code={`import { useFormState } from 'react-dom';
import { handleForm } from './actions';

function ContactForm() {
const [state, formAction] = useFormState(handleForm, { success: false });

return (
  <form action={formAction}>
    <input name="name" />
    <button type="submit">Send</button>
    {state.success && <p>Thanks for submitting!</p>}
  </form>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" color="text.secondary">
          With React 19 Actions, form handling becomes cleaner, more secure, and
          tightly integrated with server logic — allowing you to skip
          client-side complexity without losing flexibility.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Can you explain how Actions work with server components?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          🧠 How Do Actions Work with Server Components in React 19?
        </Typography>

        <Typography variant="body1" paragraph>
          In React 19, <strong>Server Components</strong> allow you to render
          components on the server and stream them to the client. With the
          introduction of <strong>Actions</strong>, you can now bind form
          submissions directly to server functions — fully embracing the
          server-first mindset.
        </Typography>

        <Typography variant="body1" paragraph>
          This means you can colocate server logic (e.g., form submission
          handlers) alongside your UI components, without needing APIs or fetch
          calls.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📤 Server Actions: Core Concept
        </Typography>

        <Typography variant="body1" paragraph>
          Server Actions are just async functions marked with the `'use server'`
          directive. They live in Server Components or dedicated server files
          and run **only on the server**.
        </Typography>

        <CodeBlock
          code={`'use server';

export async function submitForm(formData) {
const name = formData.get('name');
const email = formData.get('email');

// Save to DB, send email, log, etc.
console.log(\`New submission: \${name} <\${email}>\`);
}`}
        />

        <Typography variant="body1" paragraph>
          These functions can then be used as a form <code>action</code>, even
          inside a Server Component.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Using Actions in Server Components
        </Typography>

        <Typography variant="body1" paragraph>
          Here's how to build a form inside a Server Component that uses the
          server action:
        </Typography>

        <CodeBlock
          code={`import { submitForm } from './actions';

export default function ContactForm() {
return (
  <form action={submitForm}>
    <input type="text" name="name" placeholder="Your name" required />
    <input type="email" name="email" placeholder="Your email" required />
    <button type="submit">Submit</button>
  </form>
);
}`}
        />

        <Typography variant="body1" paragraph>
          When this form is submitted, React automatically serializes the form
          data and sends it to the server, invoking `submitForm` without you
          needing to handle JSON or fetch.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Returning Data from Actions
        </Typography>

        <Typography variant="body1" paragraph>
          Server Actions can also return values — useful when using
          `useFormState` to show success messages, errors, or updated UI.
        </Typography>

        <CodeBlock
          code={`'use server';

export async function submitForm(formData) {
const name = formData.get('name');

if (!name) {
  return { error: 'Name is required' };
}

// Do something useful
return { success: true };
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Handling State with useFormState (Bonus)
        </Typography>

        <CodeBlock
          code={`import { useFormState } from 'react-dom';
import { submitForm } from './actions';

export default function ContactForm() {
const [state, formAction] = useFormState(submitForm, { success: false });

return (
  <form action={formAction}>
    <input name="name" required />
    <button type="submit">Submit</button>
    {state.success && <p>Form submitted successfully!</p>}
    {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
  </form>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛡️ Security & Benefits
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="🚫 No Client-Side Data Leaks"
              secondary="The function only runs on the server, so secrets and logic stay secure."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="⚡ No API Layers Required"
              secondary="No need to build custom REST or GraphQL endpoints just to handle simple form logic."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="📦 Smaller Bundles"
              secondary="Actions don’t bloat the client bundle because they’re never sent to the browser."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🎯 Declarative UX"
              secondary="Forms bind directly to logic in a clean and declarative way."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" color="text.secondary">
          ✅ With React 19, Server Components and Actions work seamlessly
          together to bring a simpler, faster, and more secure form-handling
          experience — all without needing `onSubmit`, fetch, or JSON parsing.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How do you handle optimistic UI updates with Actions?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          ⚡ How Do You Handle Optimistic UI Updates with Actions?
        </Typography>

        <Typography variant="body1" paragraph>
          In React 19, you can combine <strong>Actions</strong> with{" "}
          <code>useOptimistic</code> and <code>useTransition</code> to create a
          snappy, seamless UX where the UI updates <em>before</em> the server
          confirms the result.
        </Typography>

        <Typography variant="body1" paragraph>
          This technique is called <strong>optimistic UI</strong> — and it’s
          perfect for lists, counters, likes, todos, or any fast interaction.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✨ The Goal
        </Typography>
        <Typography variant="body1" paragraph>
          Show the UI update immediately (e.g., increment a counter), while the
          server processes the request in the background. If the server fails,
          we can roll back or show an error.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Example: Optimistic Counter
        </Typography>

        <Typography variant="body1" paragraph>
          First, define a <code>'use server'</code> action:
        </Typography>

        <CodeBlock
          code={`'use server';

let counter = 0;

export async function incrementCounter() {
counter++;
return counter;
}

export function getCounter() {
return counter;
}`}
        />

        <Typography variant="body1" paragraph>
          Then, create a client component with optimistic UI logic:
        </Typography>

        <CodeBlock
          code={`'use client';

import { useOptimistic, useTransition, useState } from 'react';
import { incrementCounter, getCounter } from './actions';

export default function Counter() {
const [realCount, setRealCount] = useState(getCounter());
const [optimisticCount, addOptimistic] = useOptimistic(realCount);
const [isPending, startTransition] = useTransition();

const handleClick = () => {
  addOptimistic(optimisticCount + 1); // update UI right away

  startTransition(async () => {
    const updated = await incrementCounter();
    setRealCount(updated); // update with confirmed result
  });
};

return (
  <div>
    <p>
      Count: {optimisticCount} {isPending && '...'}
    </p>
    <button onClick={handleClick}>+ Increment</button>
  </div>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 What's Going On?
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="🔁 useOptimistic"
              secondary="Lets you create a temporary, optimistic version of the state before confirmation."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🔄 useTransition"
              secondary="Tells React to treat the server update as a background task, keeping the UI responsive."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="⚙️ Server Action"
              secondary="Runs on the server, performs the update, and returns the new value."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Why It Works Great
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="⚡ Super Fast UI"
              secondary="Users see results instantly, improving perceived performance."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🧩 Fully Declarative"
              secondary="You don't need to manually sync local/server state — React handles transitions."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🔐 Safe for Server Logic"
              secondary="Even if the UI updates optimistically, your source of truth still lives on the server."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body1" color="text.secondary">
          Optimistic updates + Actions = powerful, fast, and declarative form of
          UI responsiveness. This model is foundational to building next-gen
          React apps with minimal boilerplate.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is useTransition hook?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          🚦 What is <code>useTransition</code> in React?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>
            <code>useTransition</code>
          </strong>{" "}
          is a React Hook introduced in React 18. It lets you mark certain
          updates as “transitions” — meaning they are non-urgent and can be
          interrupted by more urgent updates (like typing or clicking).
        </Typography>

        <Typography variant="body1" paragraph>
          Transitions allow React to keep the UI responsive even during
          expensive operations like rendering large lists, switching tabs, or
          performing background updates.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Syntax
        </Typography>

        <CodeBlock
          code={`const [isPending, startTransition] = useTransition();`}
        />

        <Typography variant="body1" paragraph>
          - <code>isPending</code> is a boolean indicating if the transition is
          ongoing.
          <br />- <code>startTransition</code> is a function you use to wrap the
          non-urgent update.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Example: List Filtering
        </Typography>

        <Typography variant="body1" paragraph>
          Without <code>useTransition</code>, filtering a large list might lag
          the UI. With it, the input stays snappy while the filter runs in the
          background.
        </Typography>

        <CodeBlock
          code={`'use client';

import { useState, useTransition } from 'react';

export default function FilterList() {
const [input, setInput] = useState('');
const [list, setList] = useState([]);
const [isPending, startTransition] = useTransition();

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  setInput(value);

  startTransition(() => {
    // Simulate expensive filter
    const filtered = bigList.filter(item => item.includes(value));
    setList(filtered);
  });
};

return (
  <>
    <input type="text" value={input} onChange={handleChange} />
    {isPending && <p>Loading...</p>}
    <ul>
      {list.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 When to Use `useTransition`
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="🌐 Navigating large pages"
              secondary="Start transition to show loading indicators while fetching/rendering."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="📄 Filtering big lists"
              secondary="Keep input field smooth while filtering in background."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🧮 Heavy computation"
              secondary="Expensive state updates won’t block UI rendering."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚧 Limitations
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="🔒 Not for critical updates"
              secondary="Transitions can be interrupted. Don’t use for user inputs like form submission."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="📉 Only for UI updates"
              secondary="Doesn’t delay effects or server actions — just rendering."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body1" color="text.secondary">
          <strong>Summary:</strong> <code>useTransition</code> helps prioritize
          UI rendering in modern React. It gives your users a more seamless
          experience, especially when the app grows large or complex.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the useOptimistic hook, and what problem does it solve?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          💡 What is <code>useOptimistic</code> in React?
        </Typography>

        <Typography variant="body1" paragraph>
          The{" "}
          <strong>
            <code>useOptimistic</code>
          </strong>{" "}
          hook is a new feature in React 19+ that allows you to implement{" "}
          <strong>optimistic UI updates</strong> declaratively. It helps your
          app feel faster by reflecting state changes in the UI immediately —
          before the server confirms the change.
        </Typography>

        <Typography variant="body1" paragraph>
          This is especially useful for interactions like adding items to a
          list, toggling a like, or updating counters, where waiting for the
          server round-trip would introduce noticeable delays.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 Problem it Solves
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="⏳ UI Feels Laggy"
              secondary="Waiting for server confirmation causes delayed feedback."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🛠️ Manual Optimistic Logic Is Hard"
              secondary="Traditional optimistic updates require complex manual state sync."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="💥 Risk of Desync"
              secondary="Local state can drift from server state if not carefully reconciled."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Syntax of useOptimistic
        </Typography>

        <CodeBlock
          code={`const [optimisticValue, addOptimistic] = useOptimistic(currentValue);`}
        />

        <Typography variant="body1" paragraph>
          - <code>optimisticValue</code>: the UI-visible state that might not
          match server state yet.
          <br />- <code>addOptimistic</code>: a function to apply a temporary
          value to the optimistic state.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✨ Example: Optimistic Todo Add
        </Typography>

        <Typography variant="body1" paragraph>
          Imagine a form where a user adds a todo. You want it to show up
          immediately.
        </Typography>

        <CodeBlock
          code={`'use client';

import { useOptimistic, useTransition, useState } from 'react';
import { addTodo } from './actions'; // a server action

export default function TodoList({ initialTodos }) {
const [todos, setTodos] = useState(initialTodos);
const [isPending, startTransition] = useTransition();
const [optimisticTodos, addOptimisticTodo] = useOptimistic(todos);

const handleAdd = (newTodoText) => {
  const newTodo = { id: Date.now(), text: newTodoText };

  addOptimisticTodo((prev) => [...prev, newTodo]);

  startTransition(async () => {
    const updatedTodos = await addTodo(newTodo); // server adds and returns new list
    setTodos(updatedTodos);
  });
};

return (
  <div>
    <button onClick={() => handleAdd('Write explanation')}>+ Add Todo</button>
    {isPending && <p>Saving...</p>}
    <ul>
      {optimisticTodos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  </div>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Behind the Scenes
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="🌀 Temporary optimistic state"
              secondary="Shown immediately after user action."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🔄 Transition triggers async update"
              secondary="Server action is called to perform the real update."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🔁 Final state is synced"
              secondary="Once server confirms, optimistic state is replaced with actual state."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Benefits
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="⚡ Fast UX"
              secondary="Instant feedback without waiting for network."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🧹 Cleaner Code"
              secondary="Less manual state management and syncing logic."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🔐 Server is still source of truth"
              secondary="Final state comes from the server — always correct."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body1" color="text.secondary">
          In short, <code>useOptimistic</code> helps bridge the gap between
          client expectations and server confirmations, making React apps feel
          smoother and smarter ✨.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "How is useOptimistic different from traditional optimistic updates using useState?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          ⚖️ useOptimistic vs useState for Optimistic UI Updates
        </Typography>

        <Typography variant="body1" paragraph>
          Optimistic UI updates are a common pattern where changes are
          immediately reflected in the UI before being confirmed by the server.
          This provides a faster and more responsive user experience.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Traditional Approach using <code>useState</code>
        </Typography>

        <Typography variant="body1" paragraph>
          With <strong>useState</strong>, you manage two states manually:
          <ul>
            <li>The real state (based on server data)</li>
            <li>The optimistic (temporary) state</li>
          </ul>
          You also need to handle reconciliation yourself when the server
          responds.
        </Typography>

        <CodeBlock
          code={`'use client';

import { useState, useTransition } from 'react';
import { addTodo } from './actions';

export default function TraditionalTodoList({ initialTodos }) {
const [todos, setTodos] = useState(initialTodos);
const [isPending, startTransition] = useTransition();

const handleAdd = (newText) => {
  const tempTodo = { id: Date.now(), text: newText };
  setTodos((prev) => [...prev, tempTodo]); // optimistic UI

  startTransition(async () => {
    const updated = await addTodo(tempTodo); // real update from server
    setTodos(updated); // reconcile
  });
};

return (
  <div>
    <button onClick={() => handleAdd('Buy coffee')}>+ Add Todo</button>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  </div>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Modern Approach with <code>useOptimistic</code>
        </Typography>

        <Typography variant="body1" paragraph>
          With <strong>useOptimistic</strong>, React handles the temporary
          optimistic state for you. You maintain a single source of truth, and
          UI updates are decoupled from actual server state.
        </Typography>

        <CodeBlock
          code={`'use client';

import { useOptimistic, useState, useTransition } from 'react';
import { addTodo } from './actions';

export default function OptimisticTodoList({ initialTodos }) {
const [todos, setTodos] = useState(initialTodos);
const [isPending, startTransition] = useTransition();
const [optimisticTodos, addOptimisticTodo] = useOptimistic(todos);

const handleAdd = (newText) => {
  const temp = { id: Date.now(), text: newText };
  addOptimisticTodo((prev) => [...prev, temp]); // optimistic state

  startTransition(async () => {
    const updated = await addTodo(temp); // server response
    setTodos(updated); // final state sync
  });
};

return (
  <div>
    <button onClick={() => handleAdd('Walk the dog')}>+ Add Todo</button>
    <ul>
      {optimisticTodos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  </div>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Key Differences
        </Typography>

        <Grid container spacing={2}>
          <Grid size={6}>
            <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#fefefe" }}>
              <Typography variant="h6" color="secondary" gutterBottom>
                🕹️ useState Approach
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Manages both optimistic and real state manually" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Requires extra reconciliation logic" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="State can get messy in large apps" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid size={6}>
            <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#f0fdf4" }}>
              <Typography variant="h6" color="success.main" gutterBottom>
                🚀 useOptimistic Approach
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Cleaner and declarative API" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Temporary optimistic state is managed internally" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Ideal for Server Actions and modern apps" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 When to Use Which?
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText
              primary="Prefer useOptimistic"
              secondary="When using React Server Actions or building modern apps with async form interactions."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Stick with useState"
              secondary="For simpler or legacy apps where you want full control of state manually."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          TL;DR — <code>useOptimistic</code> gives you a more declarative,
          clean, and React-native way to handle optimistic UI updates without
          juggling state manually. It’s especially useful with the new
          server-oriented workflows in React 19+.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "Can you give an example of using useOptimistic with a form submission?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          ✨ Example: Using <code>useOptimistic</code> with a Form
        </Typography>

        <Typography variant="body1" paragraph>
          The <strong>useOptimistic</strong> hook allows you to display
          user-submitted data instantly in the UI while the server processes it
          in the background. Here's a real-world example using a form that
          submits a comment.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Scenario
        </Typography>

        <Typography variant="body1" paragraph>
          You have a comment section. When a user submits a new comment, you
          want to immediately show it in the UI *before* the server confirms it.
          Later, once the server confirms, you replace the optimistic comment
          with the real one.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Final UI & Server Flow
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="User submits the form" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Optimistic comment is shown" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Server processes and returns real data" />
          </ListItem>
          <ListItem>
            <ListItemText primary="State is updated with server-confirmed comment" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Code Example
        </Typography>

        <CodeBlock
          code={`'use client';

import { useState, useOptimistic, useTransition } from 'react';

async function submitComment(comment) {
// Simulate server-side logic
await new Promise((res) => setTimeout(res, 1000));
return [...comment]; // Return updated list
}

export default function CommentForm() {
const [comments, setComments] = useState([]);
const [isPending, startTransition] = useTransition();

const [optimisticComments, addOptimisticComment] = useOptimistic(
  comments,
  (state, newComment) => [...state, newComment]
);

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const commentText = form.comment.value;
  const newComment = {
    id: Date.now(),
    text: commentText,
    optimistic: true,
  };

  addOptimisticComment(newComment);

  startTransition(async () => {
    const updated = await submitComment([...comments, newComment]);
    setComments(updated);
  });

  form.reset();
};

return (
  <form onSubmit={handleSubmit}>
    <TextField
      name="comment"
      label="Your Comment"
      fullWidth
      required
      sx={{ mb: 2 }}
    />
    <Button variant="contained" type="submit">
      Submit
    </Button>

    <ul>
      {optimisticComments.map((comment) => (
        <li key={comment.id}>
          {comment.text} {comment.optimistic && '(sending...)'}
        </li>
      ))}
    </ul>
  </form>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Explanation
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="useOptimistic"
              secondary="Maintains a temporary UI state for pending updates"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="startTransition"
              secondary="Runs server update in background to keep UI responsive"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="form.reset()"
              secondary="Clears the form input after submission"
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          This pattern makes your forms feel snappy and modern, even if the
          backend takes time to respond. `useOptimistic` makes optimistic UI
          updates first-class in React 19 and beyond.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What does useFormStatus do in React 19?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          🔄 What is <code>useFormStatus</code> in React 19?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>
            <code>useFormStatus</code>
          </strong>{" "}
          is a new hook introduced in <strong>React 19</strong> that lets you
          check the current status of a form submission inside a{" "}
          <code>&lt;form&gt;</code>. It's a **client-side hook** designed to be
          used in **Server Components** or **React Actions-based forms**.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Why is it useful?
        </Typography>

        <Typography variant="body1" paragraph>
          When you're using <strong>Actions</strong> to handle form submissions,
          the traditional way of managing loading state (like with{" "}
          <code>useState</code>) doesn't always apply. That's where{" "}
          <code>useFormStatus</code> comes in:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="🔁 Real-time access to form's pending status"
              secondary="It helps you conditionally render spinners, disable buttons, or show loading indicators."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🔒 No manual state needed"
              secondary="React handles it for you in the context of the form."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✍️ Syntax
        </Typography>

        <CodeBlock code={`const { pending } = useFormStatus();`} />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Example Usage
        </Typography>

        <Typography variant="body1" paragraph>
          Here's how you might use <code>useFormStatus</code> to disable a
          submit button while a form is submitting:
        </Typography>

        <CodeBlock
          code={`'use client';

import { useFormStatus } from 'react-dom';

function SubmitButton() {
const { pending } = useFormStatus();

return (
  <button type="submit" disabled={pending}>
    {pending ? 'Submitting...' : 'Submit'}
  </button>
);
}

function Form() {
async function submitForm(data) {
  'use server';
  // Process data...
}

return (
  <form action={submitForm}>
    <input type="text" name="email" required />
    <SubmitButton />
  </form>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 Key Benefits
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="🌟 Easy loading states"
              secondary="You can show loading animations or spinners while the form is submitting."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🧼 Cleaner components"
              secondary="No need for extra state to manage loading UI."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🧩 Seamless integration with Server Actions"
              secondary="Works naturally in React 19’s server-first architecture."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          <strong>Note:</strong> <code>useFormStatus</code> only works inside
          the same form that uses a Server Action. You cannot access another
          form’s status from outside its context.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the purpose of the use() hook in React 19?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          🧵 What is the <code>use()</code> Hook in React 19?
        </Typography>

        <Typography variant="body1" paragraph>
          The{" "}
          <strong>
            <code>use()</code>
          </strong>{" "}
          hook is a new addition in <strong>React 19</strong> that allows you to
          **unwrap promises** directly inside your components — especially
          useful in <strong>Server Components</strong>.
        </Typography>

        <Typography variant="body1" paragraph>
          You can think of <code>use()</code> as a way to suspend rendering
          until a promise resolves, without needing additional state or effect
          logic. This makes async logic inside components cleaner and more
          declarative.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✨ What does <code>use()</code> replace?
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="❌ useEffect + useState for async data fetching"
              secondary="Now you can fetch data directly in server components"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="⛔ Async components (not allowed)"
              secondary="React components can’t be async, but use() bridges that gap"
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Syntax
        </Typography>

        <CodeBlock
          code={`import { use } from 'react';

const data = use(fetchData());`}
        />

        <Typography variant="body2" color="text.secondary">
          Note: You can only use this in Server Components (for now). It will
          throw an error if used in Client Components.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔨 Full Example
        </Typography>

        <CodeBlock
          code={`// app/page.tsx (Server Component)

import { use } from 'react';

async function getUser() {
const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
return res.json();
}

export default function Page() {
const user = use(getUser());

return (
  <div>
    <h2>{user.name}</h2>
    <p>Email: {user.email}</p>
  </div>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 Benefits of using <code>use()</code>
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="✅ Cleaner async logic"
              secondary="No need for multiple hooks or effect nesting"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="⏳ Suspense integration"
              secondary="Works natively with React Suspense for loading states"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="📦 Server-first design"
              secondary="Encourages server component usage and performance"
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body1" color="text.secondary">
          <strong>Note:</strong> <code>use()</code> is only usable at the
          **top-level** of a Server Component — you can't call it conditionally
          or inside loops.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "How does use() help with reading Promises or asynchronous resources inside components?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          🚀 How Does <code>use()</code> Help with Reading Promises in React 19?
        </Typography>

        <Typography variant="body1" paragraph>
          In React 19, the{" "}
          <strong>
            <code>use()</code>
          </strong>{" "}
          hook makes it possible to read the value of a Promise directly inside
          a component. This is especially helpful in{" "}
          <strong>Server Components</strong>, where React can pause rendering
          while awaiting the result of an asynchronous operation.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Problem Before <code>use()</code>
        </Typography>

        <Typography variant="body1" paragraph>
          Previously, you had to use <code>useEffect</code> and{" "}
          <code>useState</code> to fetch data asynchronously in Client
          Components:
        </Typography>

        <CodeBlock
          code={`// Before React 19

import { useEffect, useState } from 'react';

function User() {
const [user, setUser] = useState(null);

useEffect(() => {
  fetch('/api/user')
    .then(res => res.json())
    .then(setUser);
}, []);

if (!user) return <p>Loading...</p>;

return <div>{user.name}</div>;
}`}
        />

        <Typography variant="body1" paragraph>
          This approach works, but it:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="🔁 Requires multiple re-renders" />
          </ListItem>
          <ListItem>
            <ListItemText primary="⚙️ Needs state and effect boilerplate" />
          </ListItem>
          <ListItem>
            <ListItemText primary="⛔ Doesn’t work in Server Components" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Enter <code>use()</code>: The Clean Solution
        </Typography>

        <Typography variant="body1" paragraph>
          With <code>use()</code>, you can directly unwrap a Promise’s value
          inside your component. React will suspend rendering until the promise
          resolves — **with no extra state or effects needed**.
        </Typography>

        <CodeBlock
          code={`import { use } from 'react';

// Server Component only
async function fetchUser() {
const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
return res.json();
}

export default function User() {
const user = use(fetchUser());

return (
  <div>
    <h3>{user.name}</h3>
    <p>Email: {user.email}</p>
  </div>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 How Does This Work Internally?
        </Typography>

        <Typography variant="body1" paragraph>
          When <code>use()</code> is called on a Promise:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="⏳ React pauses rendering"
              secondary="The component suspends until the promise resolves or rejects"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="📦 The resolved value is returned"
              secondary="Once complete, rendering continues using the data"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="⚠️ Rejection handling"
              secondary="If the promise rejects, an error boundary is triggered"
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🌐 Example with Suspense
        </Typography>

        <Typography variant="body1" paragraph>
          When using `use()`, Suspense boundaries can show fallback UIs while
          the promise resolves.
        </Typography>

        <CodeBlock
          code={`// layout.tsx (Server Component)

import { Suspense } from 'react';
import User from './User';

export default function Layout() {
return (
  <Suspense fallback={<p>Loading user...</p>}>
    <User />
  </Suspense>
);
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 Limitations
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="❌ Cannot be used in Client Components"
              secondary="use() will throw an error if called in a client component"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="🚫 No conditional usage"
              secondary="Don’t use it inside loops or conditionals — must be top-level"
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body1" color="text.secondary">
          <strong>TL;DR:</strong> <code>use()</code> makes it seamless to fetch
          and use asynchronous data in Server Components by suspending rendering
          until the Promise resolves — no more useEffect gymnastics.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "How do you update the <title>, <meta>, and <link> tags in React 19?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          🧠 How to Update <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code>
          , and <code>&lt;link&gt;</code> Tags in React 19
        </Typography>

        <Typography variant="body1" paragraph>
          In React 19, handling document head elements like{" "}
          <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code>, and{" "}
          <code>&lt;link&gt;</code> has become a first-class feature, especially
          with the advent of Server Components and enhanced support in
          frameworks like <strong>Next.js</strong>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✨ Why Manage the Head?
        </Typography>
        <Typography variant="body1" paragraph>
          Managing the document head is essential for:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="🔍 SEO (Search Engine Optimization)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="📱 Responsive and mobile-first design (viewport)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🖼️ Social media sharing (OpenGraph, Twitter cards)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🎨 Favicons, fonts, preconnect, preload, etc." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Using <code>&lt;title&gt;</code>, <code>&lt;meta&gt;</code>, and{" "}
          <code>&lt;link&gt;</code> in React 19
        </Typography>

        <Typography variant="body1" paragraph>
          React 19 supports returning these elements directly in a Server
          Component. These will be injected into the page's head section
          automatically.
        </Typography>

        <CodeBlock
          code={`// app/about/page.tsx (React Server Component in Next.js)

export const metadata = {
title: "About Us - My Awesome App",
description: "Learn more about the team behind My Awesome App.",
keywords: ["About", "Team", "Company"],
openGraph: {
  title: "About Us",
  description: "This is the about page of My Awesome App",
  url: "https://myapp.com/about",
  siteName: "MyApp",
  type: "website",
},
};

export default function AboutPage() {
return (
  <div>
    <h1>About Us</h1>
    <p>We are building the future with React 19.</p>
  </div>
);
}`}
        />

        <Typography variant="body1" paragraph>
          When using a framework like Next.js with App Router (React 19+), this
          works seamlessly.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Dynamic Metadata in Server Components
        </Typography>

        <Typography variant="body1" paragraph>
          You can even set metadata based on dynamic data fetched at runtime:
        </Typography>

        <CodeBlock
          code={`// app/blog/[slug]/page.tsx

import { fetchPost } from "@/lib/api";

export async function generateMetadata({ params }) {
const post = await fetchPost(params.slug);

return {
  title: post.title,
  description: post.excerpt,
  openGraph: {
    title: post.title,
    description: post.excerpt,
    url: \`https://myapp.com/blog/\${params.slug}\`,
  },
};
}

export default async function BlogPost({ params }) {
const post = await fetchPost(params.slug);

return (
  <article>
    <h1>{post.title}</h1>
    <p>{post.content}</p>
  </article>
);
}`}
        />

        <Typography variant="body2" color="text.secondary" paragraph>
          📌 `generateMetadata()` is an async function that dynamically injects
          metadata per page load.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 What About Client Components?
        </Typography>

        <Typography variant="body1" paragraph>
          In Client Components, you should use libraries like{" "}
          <strong>React Helmet</strong> or Next.js's <code>&lt;Head&gt;</code>{" "}
          component:
        </Typography>

        <CodeBlock
          code={`// Using React Helmet
import { Helmet } from "react-helmet";

function MyComponent() {
return (
  <>
    <Helmet>
      <title>Page Title</title>
      <meta name="description" content="This is a page description" />
      <link rel="canonical" href="https://myapp.com/page" />
    </Helmet>
    <div>Page content</div>
  </>
);
}`}
        />

        <Typography variant="body1" paragraph>
          ⚠️ But if you're using Server Components, the{" "}
          <strong>
            <code>metadata</code>
          </strong>{" "}
          approach is recommended for optimal performance and SEO.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧪 Summary
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="✅ Server Components can return metadata using the `metadata` export or `generateMetadata()`." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ React 19 encourages handling `<title>`, `<meta>`, and `<link>` server-side." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Use React Helmet or Head in client-side legacy apps." />
          </ListItem>
          <ListItem>
            <ListItemText primary="🚀 This improves SEO, performance, and maintainability." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          Need help with integrating this into your own React project? I’d be
          happy to assist further! 🚀
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the React Compiler introduced in React 19?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          ⚛️ React 19 Compiler — A Deep Dive
        </Typography>

        <Typography variant="body1" paragraph>
          The **React Compiler**, introduced in React 19, is a groundbreaking
          new feature that allows React to perform automatic performance
          optimizations by analyzing your components at compile time. It works
          alongside the existing React runtime to make your app **faster**,
          **smarter**, and **more efficient**—without requiring manual
          optimization techniques like `memo` or `useCallback`.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 What Problem Does It Solve?
        </Typography>
        <Typography variant="body1" paragraph>
          Until now, React required developers to optimize components manually
          to avoid unnecessary re-renders. This included:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="🔁 Wrapping components with `React.memo()`" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔒 Memoizing functions with `useCallback()`" />
          </ListItem>
          <ListItem>
            <ListItemText primary="📦 Memoizing values with `useMemo()`" />
          </ListItem>
        </List>

        <Typography variant="body1" paragraph>
          These methods work, but they're error-prone and verbose. The React
          Compiler aims to automate this process ✨.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔧 How Does It Work?
        </Typography>
        <Typography variant="body1" paragraph>
          The compiler analyzes your component code **at build time** and
          determines which parts are pure, stable, or referentially equal across
          renders.
        </Typography>

        <CodeBlock
          code={`// Before React Compiler
function Counter({ count }) {
const handleClick = useCallback(() => {
  console.log(count);
}, [count]);

return <button onClick={handleClick}>Click me</button>;
}

// After React Compiler - No useCallback needed!
function Counter({ count }) {
const handleClick = () => {
  console.log(count);
};

return <button onClick={handleClick}>Click me</button>;
}`}
        />

        <Typography variant="body1" paragraph>
          ✅ The compiler will automatically memoize `handleClick` and prevent
          unnecessary re-renders.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Benefits
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="✅ No need for `useCallback`, `useMemo`, or `memo` in most cases" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Reduces bugs from missing dependencies" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Cleaner, more readable code" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Easier onboarding for new developers" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ Limitations (for now)
        </Typography>
        <Typography variant="body1" paragraph>
          The React Compiler is still under active development and may not yet
          support:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="❌ Complex side effects in components" />
          </ListItem>
          <ListItem>
            <ListItemText primary="❌ Non-standard JavaScript patterns" />
          </ListItem>
          <ListItem>
            <ListItemText primary="❌ Legacy React patterns" />
          </ListItem>
        </List>

        <Typography variant="body2" color="text.secondary" paragraph>
          But over time, support will expand and become more stable across
          environments.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ How to Enable It
        </Typography>

        <Typography variant="body1" paragraph>
          You can use the React Compiler with supported frameworks like
          **Next.js** by opting into it. As of now, it's **experimental**, but
          available for testing.
        </Typography>

        <CodeBlock
          code={`// next.config.js (coming soon!)
experimental: {
reactCompiler: true,
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧪 Summary
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="🧠 React Compiler auto-optimizes your components at build time" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🚫 Reduces reliance on manual memoization techniques" />
          </ListItem>
          <ListItem>
            <ListItemText primary="📦 Included as part of React 19+" />
          </ListItem>
          <ListItem>
            <ListItemText primary="💡 Your code gets smarter without being more complex" />
          </ListItem>
        </List>

        <Typography variant="body2" color="text.secondary" mt={2}>
          Need help testing it in your app setup or migrating from manual
          optimizations? I'm here to help. 🔧
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "How does it help reduce the need for useMemo, useCallback, and memo?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          🧠 How the React Compiler Reduces the Need for <code>useMemo</code>,{" "}
          <code>useCallback</code>, and <code>React.memo</code>
        </Typography>

        <Typography variant="body1" paragraph>
          The React Compiler, introduced in React 19, uses static analysis and
          code transformation to detect which parts of your components are pure
          or stable. It then **automatically applies memoization** techniques
          behind the scenes, removing the need to manually optimize with:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="🔁 useMemo – for expensive value calculations" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔒 useCallback – for function identity preservation" />
          </ListItem>
          <ListItem>
            <ListItemText primary="📦 React.memo – for preventing unnecessary re-renders" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ Before the Compiler: Manual Memoization
        </Typography>

        <Typography variant="body1" paragraph>
          In traditional React, you had to manually optimize components like
          this:
        </Typography>

        <CodeBlock
          code={`import React, { useCallback, useMemo } from 'react';

const ExpensiveComponent = React.memo(({ count }) => {
const data = useMemo(() => {
  return heavyCalculation(count);
}, [count]);

const handleClick = useCallback(() => {
  console.log('Clicked:', count);
}, [count]);

return (
  <div>
    <p>{data}</p>
    <button onClick={handleClick}>Click me</button>
  </div>
);
});`}
        />

        <Typography variant="body1" paragraph>
          This works—but becomes **messy**, **hard to maintain**, and
          **error-prone**, especially in large apps.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✨ With the React Compiler: Clean, Declarative Code
        </Typography>

        <Typography variant="body1" paragraph>
          The Compiler transforms your code under the hood, so you don’t need to
          use those hooks manually:
        </Typography>

        <CodeBlock
          code={`function ExpensiveComponent({ count }) {
const data = heavyCalculation(count);

const handleClick = () => {
  console.log('Clicked:', count);
};

return (
  <div>
    <p>{data}</p>
    <button onClick={handleClick}>Click me</button>
  </div>
);
}`}
        />

        <Typography variant="body1" paragraph>
          Behind the scenes, the compiler:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="✅ Detects pure functions and stabilizes them" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Avoids re-running calculations unless inputs change" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Keeps function references stable across renders" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Prevents unnecessary re-renders without React.memo" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Summary
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="💡 Compiler replaces manual memoization in many cases" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🧼 Code becomes cleaner, more readable" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🐞 Fewer bugs from missed dependency arrays" />
          </ListItem>
          <ListItem>
            <ListItemText primary="⚡ Optimizations are automatic and smarter" />
          </ListItem>
        </List>

        <Typography variant="body2" color="text.secondary" mt={2}>
          Note: While the compiler is very powerful, some edge cases might still
          need manual intervention or may not yet be supported. It's an evolving
          ecosystem, but the direction is promising.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "What enhancements were made to React Server Components (RSC) in React 19?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          🚀 React 19: Enhancements to React Server Components (RSC)
        </Typography>

        <Typography variant="body1" paragraph>
          React Server Components (RSC) allow you to build components that
          render entirely on the server, reducing the amount of JavaScript sent
          to the client. In React 19, RSC has been significantly enhanced to
          improve developer experience, performance, and integration with modern
          tooling.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔧 Key Enhancements in React 19
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="📦 Native RSC support in React core (no external libraries needed)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🧪 Seamless integration with React Actions and Forms" />
          </ListItem>
          <ListItem>
            <ListItemText primary="⚡ Improved performance with better streaming and caching" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🧵 Enhanced support for async/await and the use() hook" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🛠️ Tooling updates in Next.js, Vite, and others to support RSC out-of-the-box" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Real Use Case: Fetching Data on the Server
        </Typography>

        <Typography variant="body1" paragraph>
          In React 19, server components can directly fetch data using async
          functions and render without hydration on the client. Here's an
          example:
        </Typography>

        <CodeBlock
          code={`// app/components/ServerUserList.tsx (React Server Component)

import { fetchUsers } from '@/lib/api';

export default async function ServerUserList() {
const users = await fetchUsers(); // server-only logic

return (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);
}`}
        />

        <Typography variant="body1" paragraph>
          This code:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="✅ Runs only on the server (never included in client JS bundle)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Can securely access secrets, DB queries, etc." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Streams HTML directly to the browser" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Composition of Server and Client Components
        </Typography>

        <Typography variant="body1" paragraph>
          Server components can render client components and pass props to them.
          Example:
        </Typography>

        <CodeBlock
          code={`// Server component
import ClientButton from './ClientButton';

export default async function ServerPage() {
const user = await fetchUser();

return (
  <div>
    <h1>Welcome, {user.name}</h1>
    <ClientButton /> {/* marked as 'use client' */}
  </div>
);
}

// ClientButton.tsx
'use client';

export default function ClientButton() {
return <button onClick={() => alert('Clicked!')}>Click me</button>;
}`}
        />

        <Typography variant="body1" paragraph>
          This pattern allows:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="📉 Reduced client bundle size (client gets only interactive components)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔐 Security for sensitive logic on the server" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🌐 Fast server-side rendering and streaming" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 React 19 + Actions + RSC = Perfect Trio
        </Typography>

        <Typography variant="body1" paragraph>
          React 19 brings <strong>Actions</strong> to server components. You can
          now handle forms without event handlers:
        </Typography>

        <CodeBlock
          code={`// app/actions/submitPost.ts
'use server';

export async function submitPost(formData: FormData) {
const title = formData.get('title');
await db.createPost({ title });
}

// In your component
<form action={submitPost}>
<input name="title" />
<button type="submit">Submit</button>
</form>`}
        />

        <Typography variant="body1" paragraph>
          This enables:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="🚫 No client-side JS for form logic" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🚀 Server-rendered responses and redirects" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🧹 Cleaner and more declarative form handling" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Summary
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="🌍 Server Components are now core to React 19" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🧠 Better DX with async/await, use(), and Actions" />
          </ListItem>
          <ListItem>
            <ListItemText primary="⚡ Less client-side JS = faster page loads" />
          </ListItem>
          <ListItem>
            <ListItemText primary="💥 Clean separation between UI rendering and interaction logic" />
          </ListItem>
        </List>

        <Typography variant="body2" mt={2} color="text.secondary">
          Server Components are the future of scalable, fast, and secure React
          apps—and React 19 makes that future a lot more accessible.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "How do Server Actions and Server Components work together in React 19?",
    content: (
      <Box my={4}>
        <Typography variant="h4" gutterBottom color="primary">
          🔄 How Server Actions and Server Components Work Together in React 19
        </Typography>

        <Typography variant="body1" paragraph>
          In React 19, <strong>Server Actions</strong> and{" "}
          <strong>Server Components</strong> are two powerful features that
          complement each other. Together, they help developers build fast,
          scalable, and maintainable applications by handling logic on the
          server while minimizing client-side JavaScript.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 What Are Server Components?
        </Typography>
        <Typography variant="body1" paragraph>
          Server Components render on the server and send HTML to the browser.
          They:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="🧠 Don’t include client-side JavaScript" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔐 Can access backend resources securely" />
          </ListItem>
          <ListItem>
            <ListItemText primary="⚡ Improve performance by reducing hydration cost" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ What Are Server Actions?
        </Typography>
        <Typography variant="body1" paragraph>
          Server Actions are asynchronous server-side functions you can call
          from forms or components to mutate data. Defined with the{" "}
          <code>'use server'</code> directive, they:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="📝 Accept <code>FormData</code> or structured arguments" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🏃‍♂️ Run directly on the server" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔁 Trigger UI re-renders or redirects" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Working Together: A Real-World Example
        </Typography>
        <Typography variant="body1" paragraph>
          Here's how a Server Component renders a form and handles submission
          using a Server Action:
        </Typography>

        <CodeBlock
          code={`// app/actions/addTask.ts
'use server';

import { db } from '@/lib/db';

export async function addTask(formData: FormData) {
const task = formData.get('task')?.toString();
if (!task) return;
await db.tasks.create({ text: task });
}`}
        />

        <CodeBlock
          code={`// app/components/TaskForm.tsx
export default function TaskForm() {
return (
  <form action={addTask}>
    <input name="task" placeholder="New task" />
    <button type="submit">Add Task</button>
  </form>
);
}`}
        />

        <Typography variant="body1" paragraph>
          In this setup:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="📩 The form submits directly to the server without client JavaScript." />
          </ListItem>
          <ListItem>
            <ListItemText primary="🛠 The Server Action runs securely on the server and updates the database." />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔄 React can re-render the page using Server Components." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 Benefits of Combining Server Actions + Server Components
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="🧹 Cleaner and more declarative form handling" />
          </ListItem>
          <ListItem>
            <ListItemText primary="⚡ Less JavaScript on the client" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔐 Secure access to server resources" />
          </ListItem>
          <ListItem>
            <ListItemText primary="📦 Smaller bundles and faster loading times" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Updating the UI After Action Runs
        </Typography>
        <Typography variant="body1" paragraph>
          After a Server Action runs, React can re-render the affected Server
          Components with fresh data. Example:
        </Typography>

        <CodeBlock
          code={`// app/page.tsx
import TaskForm from './components/TaskForm';
import { getTasks } from '@/lib/db';

export default async function Page() {
const tasks = await getTasks();

return (
  <>
    <TaskForm />
    <ul>
      {tasks.map(task => <li key={task.id}>{task.text}</li>)}
    </ul>
  </>
);
}`}
        />

        <Typography variant="body1" paragraph>
          When the form is submitted:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="🔃 Server Action adds task to DB" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🧠 Server Component re-fetches updated tasks" />
          </ListItem>
          <ListItem>
            <ListItemText primary="📄 Page is re-rendered and sent to the client" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Summary
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="✨ Server Actions run logic on the server in response to UI interactions" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🧩 Server Components render fresh data after Actions complete" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🛡 Together, they reduce client complexity and increase performance" />
          </ListItem>
        </List>

        <Typography variant="body2" mt={2} color="text.secondary">
          By combining Server Actions and Server Components, React 19 unlocks a
          new paradigm where logic, data, and rendering live closer together —
          making your app faster and simpler.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What updates were made to Suspense in React 19?",
    content: (
      <Box my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          🚀 What Updates Were Made to <code>Suspense</code> in React 19?
        </Typography>

        <Typography variant="body1" paragraph>
          React 19 brings several powerful updates to <strong>Suspense</strong>{" "}
          that improve its usability, reliability, and support for data-fetching
          use cases. It is now fully integrated into the new React architecture,
          including <strong>Server Components</strong>,{" "}
          <strong>Streaming</strong>, and <strong>Transitions</strong>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔧 Key Enhancements to Suspense
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="✅ Suspense now works fully on the server with React Server Components (RSC)." />
          </ListItem>
          <ListItem>
            <ListItemText primary="🔄 Seamless integration with async rendering and transitions." />
          </ListItem>
          <ListItem>
            <ListItemText primary="⏳ Improved support for streaming HTML from the server." />
          </ListItem>
          <ListItem>
            <ListItemText primary="🧪 First-class support for handling async boundaries in both SSR and client hydration." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Suspense + Server Components
        </Typography>
        <Typography variant="body1" paragraph>
          In React 19, Suspense is commonly used to wrap async server components
          that stream content when it's ready.
        </Typography>

        <CodeBlock
          code={`// app/page.tsx
import { Suspense } from 'react';
import Profile from './Profile';

export default function Page() {
return (
  <div>
    <h1>Dashboard</h1>
    <Suspense fallback={<p>Loading profile...</p>}>
      <Profile />
    </Suspense>
  </div>
);
}`}
        />

        <Typography variant="body1" paragraph>
          The <code>Profile</code> component might fetch data from a database or
          API on the server. With Suspense, it’s possible to stream the rest of
          the UI while waiting.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Suspense with Transitions
        </Typography>
        <Typography variant="body1" paragraph>
          Transitions and Suspense work together to allow smooth updates and
          prevent UI flicker.
        </Typography>

        <CodeBlock
          code={`import { useState, useTransition, Suspense } from 'react';
import Comments from './Comments';

function App() {
const [postId, setPostId] = useState(1);
const [isPending, startTransition] = useTransition();

return (
  <>
    <button onClick={() => startTransition(() => setPostId(p => p + 1))}>
      Load Next Post
    </button>
    {isPending && <span>Loading...</span>}
    <Suspense fallback={<p>Loading comments...</p>}>
      <Comments postId={postId} />
    </Suspense>
  </>
);
}`}
        />

        <Typography variant="body1" paragraph>
          Here, the <code>Comments</code> component will suspend during
          fetching, and React 19 will stream only what’s available, updating
          content incrementally.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🌐 Streaming with Suspense on the Server
        </Typography>
        <Typography variant="body1" paragraph>
          React 19 enhances the ability to stream HTML from the server while
          keeping placeholders for suspended components:
        </Typography>

        <CodeBlock
          code={`// React can now stream fallback UI while loading data on the server
export default function Page() {
return (
  <Suspense fallback={<LoadingSection />}>
    <ComplexDataComponent />
  </Suspense>
);
}`}
        />

        <Typography variant="body2" paragraph>
          This means faster time-to-first-byte (TTFB) and a better user
          experience with progressive rendering.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Suspense Is Now Stable
        </Typography>
        <Typography variant="body1" paragraph>
          While Suspense was experimental for data fetching in previous
          versions, in React 19 it's now production-ready and stable. You can
          confidently use it to:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="Fetch data in server components" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Use with async components in SSR" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Integrate with transitions and lazy loading" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Summary
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="React 19 brings full support for Suspense with Server Components." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Improves streaming performance and UX." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Plays well with concurrent rendering and transitions." />
          </ListItem>
        </List>

        <Typography variant="body2" mt={2} color="text.secondary">
          With these updates, Suspense is no longer just about lazy loading —
          it's now a core tool for building smooth, fast-loading React apps in
          both client and server environments.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How does React 19 improve support for streaming data and UI?",
    content: (
      <Box my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          🌐 How React 19 Improves Support for Streaming Data and UI
        </Typography>

        <Typography variant="body1" paragraph>
          One of the most powerful updates in React 19 is its enhanced support
          for <strong>streaming data and UI</strong>. React now enables better
          user experiences by progressively rendering content as it becomes
          available — both on the server and the client.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 Key Improvements in Streaming
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="🧩 Suspense + Server Components now stream HTML as parts of the tree resolve." />
          </ListItem>
          <ListItem>
            <ListItemText primary="⏱ Reduces Time To First Byte (TTFB) by sending parts of UI earlier." />
          </ListItem>
          <ListItem>
            <ListItemText primary="📦 Supports fine-grained streaming with multiple suspense boundaries." />
          </ListItem>
          <ListItem>
            <ListItemText primary="🎯 Works with async data fetching in Server Components and async functions." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Progressive Rendering Example
        </Typography>
        <Typography variant="body1" paragraph>
          With React 19, you can render the page shell quickly and then load
          slower components like user profiles or dashboards later.
        </Typography>

        <CodeBlock
          code={`// app/page.tsx (React Server Component)
import { Suspense } from 'react';
import Header from './Header';
import UserProfile from './UserProfile';

export default function Page() {
return (
  <div>
    <Header />
    <Suspense fallback={<p>Loading user profile...</p>}>
      <UserProfile />
    </Suspense>
  </div>
);
}`}
        />

        <Typography variant="body2" paragraph>
          The initial HTML will include the <code>Header</code> and a fallback.
          When <code>UserProfile</code> resolves on the server, it gets streamed
          and added to the DOM — without blocking the whole page.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Server Streaming in Action
        </Typography>
        <Typography variant="body1" paragraph>
          React’s new streaming architecture enables the server to flush content
          to the browser incrementally.
        </Typography>

        <CodeBlock
          code={`// example stream from server
<!DOCTYPE html>
<html>
<head><title>Page</title></head>
<body>
  <div id="root">
    <div>Header</div>
    <p>Loading user profile...</p>
    <!-- more content streams in -->
  </div>
  <script src="/bundle.js"></script>
</body>
</html>`}
        />

        <Typography variant="body2" paragraph>
          The browser can start rendering immediately while the rest of the UI
          is hydrated progressively.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Streaming Benefits
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="✅ Improved performance, especially for slow connections or large UIs." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Minimal blocking — only wait for what’s necessary." />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Faster perceived loading time — users see content sooner." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Best Practices
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Use <Suspense> boundaries to split slow parts of the page." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Keep your layout components separate from data-heavy components." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Return meaningful fallbacks that fit seamlessly into your UI." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Summary
        </Typography>
        <Typography variant="body2" paragraph>
          React 19’s streaming capabilities deliver a massive boost in
          performance and user experience by allowing UI to progressively render
          as data loads. Combined with Server Components, Suspense, and
          transitions — it forms the foundation of modern React apps focused on
          speed and interactivity.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "What is async context in React 19, and what is a use case for it?",
    content: (
      <Box my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          ⚙️ What is Async Context in React 19?
        </Typography>

        <Typography variant="body1" paragraph>
          React 19 introduces a new primitive called{" "}
          <strong>Async Context</strong>, which allows you to store and share
          data across a component tree during async operations — such as server
          rendering, data fetching, and transitions — **without prop drilling or
          lifting state**.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Why Was Async Context Introduced?
        </Typography>
        <Typography variant="body1" paragraph>
          Traditional <code>React.createContext</code> doesn’t work well in
          async server-rendered environments or when multiple async transitions
          are occurring in parallel. Async Context fixes this by providing:
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="✅ Context that works reliably with async rendering" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Per-request context isolation during server rendering" />
          </ListItem>
          <ListItem>
            <ListItemText primary="✅ Better support for mutations (e.g. user auth) in concurrent environments" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✨ Example: Creating an Async Context
        </Typography>

        <CodeBlock
          code={`// context.ts
import { createAsyncContext } from 'react';

export const [UserContextProvider, useUser] = createAsyncContext();`}
        />

        <Typography variant="body2" paragraph>
          Here we define a context that will hold the current user. It’s
          isolated per render — unlike traditional React context.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Example: Using Async Context in a Server Component
        </Typography>

        <CodeBlock
          code={`// app/layout.tsx
import { UserContextProvider } from './context';

export default async function Layout({ children }) {
const user = await getUser(); // some server-side fetch

return (
  <UserContextProvider value={user}>
    {children}
  </UserContextProvider>
);
}`}
        />

        <Typography variant="body2" paragraph>
          When the layout is rendered, it fetches the user and sets it in the
          async context, which is then available to all nested components.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📥 Consuming Async Context
        </Typography>

        <CodeBlock
          code={`// app/profile/page.tsx
'use client';

import { useUser } from '../../context';

export default function ProfilePage() {
const user = useUser();

return <p>Hello, {user.name}!</p>;
}`}
        />

        <Typography variant="body2" paragraph>
          This component (a Client Component) can access the user from async
          context even though it was set on the server — without needing to lift
          state up or pass props down.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Real-World Use Cases
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText primary="🔐 Authentication — keep user/session state scoped to the request" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🛠 Feature Flags — dynamically provide enabled features based on async data" />
          </ListItem>
          <ListItem>
            <ListItemText primary="🛍️ Localization — inject language/region data at the layout level" />
          </ListItem>
          <ListItem>
            <ListItemText primary="💬 Logging — track and correlate async operations per user/request" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Summary
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>Async Context</strong> in React 19 is a game-changing feature
          that makes sharing async data easier and safer across your app —
          especially in Server Components and concurrent rendering scenarios. It
          removes the need for awkward prop drilling or global state for
          request-scoped data.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How does async context differ from regular React context?",
    content: (
      <Box my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          🔍 Async Context vs Regular React Context
        </Typography>

        <Typography variant="body1" paragraph>
          With React 19, <strong>Async Context</strong> was introduced to solve
          limitations found in traditional <code>React.createContext</code> —
          particularly in concurrent and server-rendered environments.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📌 Key Differences
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="1. Scope & Isolation"
              secondary="Async Context provides per-request isolation (great for server rendering), whereas regular context is shared and not scoped automatically per async task."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="2. Async Compatibility"
              secondary="Async Context is designed to work with async/await and streaming. Regular context was designed for sync render passes only."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="3. Concurrency-Safe"
              secondary="Async Context ensures state isn’t accidentally shared between concurrent transitions or server requests. Regular context can cause leaks."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="4. Server Components"
              secondary="Async Context works perfectly in Server Components. Regular context doesn't persist across async boundaries on the server."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="5. Default API"
              secondary="Async Context is created via `createAsyncContext()` from React 19+, while traditional context uses `React.createContext()`."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📄 Regular React Context Example
        </Typography>

        <CodeBlock
          code={`// themeContext.tsx
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

export const useTheme = () => useContext(ThemeContext);

// In a component tree:
<ThemeContext.Provider value="dark">
<App />
</ThemeContext.Provider>`}
        />

        <Typography variant="body2" paragraph>
          This context works well in client apps, but is not safe for concurrent
          async tasks or server rendering without extra management.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Async Context Example (React 19)
        </Typography>

        <CodeBlock
          code={`// userContext.ts
import { createAsyncContext } from 'react';

export const [UserContextProvider, useUser] = createAsyncContext();

// layout.tsx (server component)
export default async function Layout({ children }) {
const user = await fetchUser();
return (
  <UserContextProvider value={user}>
    {children}
  </UserContextProvider>
);
}

// profile.tsx (client component)
'use client';
import { useUser } from './userContext';

export default function Profile() {
const user = useUser();
return <div>Hello, {user.name}</div>;
}`}
        />

        <Typography variant="body2" paragraph>
          This approach is safe across streaming, server rendering, and
          transitions — and doesn’t require passing the user as a prop.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Summary
        </Typography>
        <Typography variant="body2" paragraph>
          <strong>Regular Context</strong> is ideal for traditional client-side
          React apps with synchronous data and rendering.
          <br />
          <strong>Async Context</strong> is essential for modern React apps that
          use Server Components, streaming, and concurrent rendering — ensuring
          isolation, correctness, and simplicity in async flows.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "How does error handling in Server Components and Actions improve in React 19?",
    content: (
      <Box my={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          🛠️ Error Handling in Server Components & Actions (React 19)
        </Typography>

        <Typography variant="body1" paragraph>
          React 19 brings **native and granular error handling** to **Server
          Components** and **Server Actions**, improving both developer
          experience and UI resilience. This is especially important in the
          world of streaming UI and asynchronous logic on the server.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Key Improvements
        </Typography>

        <List dense>
          <ListItem>
            <ListItemText
              primary="1. Throwing Errors Directly"
              secondary="Server Actions and Components can now throw errors directly. React will catch them and allow UI fallback rendering."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="2. Error Boundaries in Server Components"
              secondary="React 19 supports error boundaries in layouts and server-rendered UI, allowing clean fallbacks."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="3. Streaming Errors"
              secondary="Errors thrown during data fetching can be streamed to the client UI gracefully with partial hydration."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="4. Action Errors with useFormStatus"
              secondary="You can now detect and render submission errors using useFormStatus with Server Actions."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Example: Throwing in a Server Component
        </Typography>

        <CodeBlock
          code={`// ErrorComponent.tsx
export default async function ErrorComponent() {
const data = await fetchSomething();

if (!data.ok) {
  throw new Error("Failed to load data");
}

return <div>{data.name}</div>;
}`}
        />

        <Typography variant="body2" paragraph>
          If the fetch fails, React will capture the error and look for the
          nearest Error Boundary to render a fallback UI.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Error Boundary in Layout
        </Typography>

        <CodeBlock
          code={`// layout.tsx
import { ReactNode } from "react";

export default function Layout({ children, error }: { children: ReactNode, error?: Error }) {
if (error) {
  return <div style={{ color: "red" }}>Error: {error.message}</div>;
}

return <>{children}</>;
}`}
        />

        <Typography variant="body2" paragraph>
          This layout acts as a fallback whenever a nested component throws an
          error on the server.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Server Action Error + <code>useFormStatus</code>
        </Typography>

        <CodeBlock
          code={`// action.ts
"use server";

export async function createPost(formData) {
const title = formData.get("title");

if (!title) {
  throw new Error("Title is required");
}

// handle post creation
}

// form.tsx
"use client";
import { useFormStatus } from "react-dom";
import { createPost } from "./action";

function PostForm() {
const { pending, error } = useFormStatus();

return (
  <form action={createPost}>
    <input name="title" />
    <button disabled={pending}>Submit</button>
    {error && <p style={{ color: "red" }}>{error.message}</p>}
  </form>
);
}`}
        />

        <Typography variant="body2" paragraph>
          With <code>useFormStatus</code>, we can detect if an error was thrown
          from the server action and show it directly in the UI without needing
          client-side validation logic.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Summary
        </Typography>
        <Typography variant="body2" paragraph>
          React 19's improved error handling brings a production-ready
          experience to apps using **Server Components** and **Actions** by
          making errors:
          <ul>
            <li>Granular and scoped to components/actions</li>
            <li>Fallback-aware with boundaries</li>
            <li>Streamable during SSR and hydration</li>
            <li>
              Directly accessible via <code>useFormStatus</code>
            </li>
          </ul>
          These enhancements lead to more resilient, declarative, and
          user-friendly applications.
        </Typography>
      </Box>
    ),
  },
];
