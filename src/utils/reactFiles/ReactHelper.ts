export const features = [
  {
    title: "Component-Based Architecture",
    points: [
      "React encourages building UIs using small, reusable pieces called components.",
      "Each component manages its own state and logic, making it easier to maintain and test.",
    ],
  },
  {
    title: "JSX (JavaScript XML)",
    points: [
      "JSX allows you to write HTML-like syntax within JavaScript.",
      "Makes code more readable and helps define the UI structure directly within the component.",
      `Example:\nconst MyComponent = () => <h1>Hello, World!</h1>;`,
    ],
  },
  {
    title: "Virtual DOM",
    points: [
      "React uses a lightweight copy of the actual DOM, called the Virtual DOM, to efficiently update the UI.",
      "When the state changes, React calculates the difference and updates only the necessary parts of the real DOM.",
    ],
  },
  {
    title: "Unidirectional Data Flow",
    points: [
      "Data flows one way from parent to child components via props.",
      "This makes it easier to understand how data changes affect the UI.",
    ],
  },
  {
    title: "Declarative UI",
    points: [
      "You describe what the UI should look like based on the current state.",
      "React takes care of rendering and updating the DOM.",
      `Example:\n<button disabled={isLoading}>\n  {isLoading ? 'Loading...' : 'Submit'}\n</button>`,
    ],
  },
  {
    title: "Hooks",
    points: [
      "Hooks like useState, useEffect, and useContext allow functional components to use state and lifecycle features.",
      `Example:\nconst [count, setCount] = useState(0);`,
    ],
  },
  {
    title: "React Developer Tools",
    points: [
      "A browser extension that helps in debugging and inspecting React components and their state/props.",
    ],
  },
  {
    title: "Ecosystem and Community",
    points: [
      "Rich ecosystem with libraries like:",
      "- React Router for routing",
      "- Redux or Context API for state management",
      "- Next.js for server-side rendering",
      "- React Query, Axios for data fetching",
    ],
  },
  {
    title: "Performance Optimization",
    points: [
      "Features like lazy loading, memoization (React.memo, useMemo), and code splitting improve performance.",
    ],
  },
  {
    title: "Server-Side Rendering (SSR) and Static Site Generation (SSG)",
    points: [
      "With frameworks like Next.js, React supports SSR and SSG for better performance and SEO.",
    ],
  },
];

export const phases = [
  {
    title: "Mounting",
    steps: [
      ["constructor()", "Initializes state and binds methods."],
      ["getDerivedStateFromProps()", "Syncs state from props before render."],
      ["render()", "Returns the JSX to display."],
      [
        "componentDidMount()",
        "Fired after first render. Used for API calls and DOM setup.",
      ],
    ],
  },
  {
    title: "Updating",
    steps: [
      ["getDerivedStateFromProps()", "Runs again to sync with updated props."],
      [
        "shouldComponentUpdate()",
        "Decides whether to re-render the component.",
      ],
      ["render()", "Updates the DOM with new data."],
      [
        "getSnapshotBeforeUpdate()",
        "Captures state before the DOM is updated.",
      ],
      [
        "componentDidUpdate()",
        "Fired after the DOM updates. Good for API calls after changes.",
      ],
    ],
  },
  {
    title: "Unmounting",
    steps: [
      [
        "componentWillUnmount()",
        "Used for cleanup like timers, listeners, etc.",
      ],
    ],
  },
  {
    title: "Error Handling",
    steps: [
      ["getDerivedStateFromError()", "Updates state to show fallback UI."],
      [
        "componentDidCatch()",
        "Logs error details or sends them to monitoring tools.",
      ],
    ],
  },
];

export const domData = [
  {
    title: "Real DOM",
    color: "error.main",
    description:
      "The actual DOM rendered by the browser. Any change re-renders large parts, causing performance issues.",
  },
  {
    title: "Virtual DOM",
    color: "primary.main",
    description:
      "An in-memory lightweight copy of the real DOM. React uses it to detect changes and efficiently update only necessary parts.",
  },
  {
    title: "Shadow DOM",
    color: "secondary.main",
    description:
      "A browser feature used in Web Components to isolate styles and behavior. Not used by React directly.",
  },
];

export const steps = [
  {
    label: "Initial Rendering",
    description:
      "React builds a Virtual DOM and renders the UI to the real DOM based on the current component tree.",
  },
  {
    label: "State or Props Change",
    description:
      "When state or props change, React re-renders the component, but does not directly update the real DOM.",
  },
  {
    label: "Virtual DOM Diffing",
    description:
      "React compares the updated Virtual DOM with the previous one to find the differences.",
  },
  {
    label: "Efficient DOM Updates",
    description:
      "Only the changed parts are updated in the real DOM, ensuring fast and efficient UI updates.",
  },
  {
    label: "Batching & Scheduling",
    description:
      "React batches updates and uses Fiber architecture to schedule rendering for performance.",
  },
];

export const benefits = [
  "High performance due to Virtual DOM diffing",
  "Smooth UI updates in complex apps",
  "Optimized re-renders using keys, memo, and PureComponent",
];

export const points = [
  {
    title: "Returns JSX",
    description:
      "The render() method returns JSX which defines how the component should appear in the UI.",
  },
  {
    title: "Pure Function",
    description:
      "It does not modify state or perform side effects. It simply returns what should be displayed.",
  },
  {
    title: "Triggers on State/Props Change",
    description:
      "React automatically calls render() when there’s a change in state or props.",
  },
  {
    title: "No Side Effects",
    description:
      "You should avoid performing API calls or directly modifying the DOM inside render().",
  },
];

export const codeExample = `
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
  `.trim();

export const statePoints = [
  {
    title: "Mutable",
    description: "State can be changed using setState or useState.",
  },
  {
    title: "Private to the Component",
    description:
      "State is local and can only be accessed and modified within the component it is defined in.",
  },
  {
    title: "Triggers Re-rendering",
    description:
      "When the state updates, the component automatically re-renders with the new data.",
  },
  {
    title: "Used in Functional and Class Components",
    description:
      "Functional components use the useState hook, while class components use this.state and this.setState.",
  },
];

export const stateCodeExample = `
  import React, { useState } from 'react';
  
  const Counter = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
    );
  };
  `.trim();

export const propsPoints = [
  {
    title: "Immutable",
    description:
      "Props are read-only and cannot be changed by the receiving component.",
  },
  {
    title: "Passed from Parent to Child",
    description:
      "Props flow down the component tree to help share data between components.",
  },
  {
    title: "Dynamic Rendering",
    description:
      "Different props allow the same component to render varied content.",
  },
  {
    title: "Accessing Props",
    description:
      "In functional components: props via parameters. In class components: this.props.",
  },
];

export const propsCodeExample = `
  const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
  };
  
  // Usage
  <Greeting name="Alice" />
  `.trim();

export const controlledPoints = [
  {
    title: "State Drives the UI",
    description:
      "The value of the input is always controlled by the component’s state, not the DOM.",
  },
  {
    title: "Single Source of Truth",
    description:
      "All form data lives in React state, making the component more predictable and easier to debug.",
  },
  {
    title: "Validation & Formatting",
    description:
      "You can format and validate user input before updating the state or submitting the form.",
  },
  {
    title: "Ideal for Form Handling",
    description:
      "Most React forms use controlled components to track input values, manage validation, and handle submission.",
  },
];

export const controlledCodeExample = `
  import React, { useState } from 'react';
  
  const ControlledInput = () => {
    const [name, setName] = useState('');
  
    return (
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    );
  };
  `.trim();

export const uncontrolledPoints = [
  {
    title: "DOM Manages State",
    description:
      "The browser (DOM) handles the input value instead of using React state.",
  },
  {
    title: "Use of Refs",
    description:
      "Refs are used to directly access the current value of an input field when needed.",
  },
  {
    title: "Simpler for Basic Forms",
    description:
      "Uncontrolled components require less code and are suitable for non-complex forms.",
  },
  {
    title: "Limited React Control",
    description:
      "Without state, it’s harder to validate, format, or dynamically update inputs using React logic.",
  },
];

export const uncontrolledCodeExample = `
  import React, { useRef } from 'react';
  
  const UncontrolledInput = () => {
    const inputRef = useRef();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(\`Input Value: \${inputRef.current.value}\`);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    );
  };
  `.trim();

export const defaultPropsPoints = [
  {
    title: "Fallback Values",
    description:
      "Default props are used when a parent does not pass a value for a particular prop.",
  },
  {
    title: "Avoid `undefined` Checks",
    description:
      "You don’t have to write extra logic to check if props are missing.",
  },
  {
    title: "Supports Clean Code",
    description: "Helps make your components more robust and readable.",
  },
  {
    title: "Supports Class & Function Components",
    description:
      "`defaultProps` works with class components, while default parameters work well with functions.",
  },
];

export const defaultPropsCodeExample = `
  const Greeting = ({ name = 'Guest' }) => {
    return <h2>Hello, {name}!</h2>;
  };
  
  // Usage
  <Greeting />        // Output: Hello, Guest!
  <Greeting name="Sam" />  // Output: Hello, Sam!
  `.trim();

export const eventPoints = [
  {
    title: "CamelCase Naming",
    description:
      "Use camelCase (e.g., onClick, onChange) instead of lowercase like in plain HTML.",
  },
  {
    title: "Function References",
    description:
      "Pass a function reference to event handlers, not a function call.",
  },
  {
    title: "Synthetic Events",
    description:
      "React normalizes events using SyntheticEvent for cross-browser compatibility.",
  },
  {
    title: "Accessing Event Data",
    description:
      "You can access event details through the event object (e.g., e.target.value).",
  },
  {
    title: "Passing Parameters",
    description:
      "Use arrow functions or .bind() when passing arguments to handlers.",
  },
];

export const eventCodeExample = `
  const ButtonClick = () => {
    const handleClick = () => {
      alert('Button Clicked!');
    };
  
    return (
      <button onClick={handleClick}>Click Me</button>
    );
  };
  `.trim();

export const fruitList = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

export const listConcepts = [
  {
    title: "What Are Lists?",
    description:
      "Lists in React are used to display a collection of similar items, typically rendered using the map() method.",
  },
  {
    title: "How to Render Lists",
    description:
      "Use the array.map() function to iterate over items and return JSX for each element.",
  },
  {
    title: "Importance of Keys",
    description:
      'Each list item should have a unique "key" prop to help React identify which items changed.',
  },
  {
    title: "Best Practices",
    description:
      "Avoid using array index as keys when the list is dynamic. Prefer unique IDs from data.",
  },
];

export const listCodeExample = `
  const fruits = ['Apple', 'Banana', 'Cherry'];
  
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
  `.trim();

export const explanationCards = [
  {
    title: "1. React.memo()",
    description:
      "Wrap functional components to memoize them and skip re-renders if props are the same.",
    code: `
const MyComponent = React.memo((props) => {
  return <div>{props.name}</div>;
});`,
  },
  {
    title: "2. useMemo()",
    description: "Use to memoize expensive computations between renders.",
    code: `
const value = useMemo(() => computeExpensiveValue(a, b), [a, b]);`,
  },
  {
    title: "3. useCallback()",
    description:
      "Use to memoize callback functions and prevent re-creation on every render.",
    code: `
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);`,
  },
  {
    title: "4. PureComponent (Class)",
    description:
      "Extends React.PureComponent to automatically implement shallow prop/state comparison.",
    code: `
class MyComponent extends React.PureComponent {
  render() {
    return <div>{this.props.name}</div>;
  }
}`,
  },
  {
    title: "5. shouldComponentUpdate()",
    description: "Manually decide whether to re-render a class component.",
    code: `
shouldComponentUpdate(nextProps, nextState) {
  return nextProps.id !== this.props.id;
}`,
  },
];

export const typeExplanation = [
  {
    title: "`null` in Rendering",
    description: `In React, returning \`null\` from a component or an expression means “render nothing.” 
      It’s a valid return value to intentionally render nothing on screen.`,
    code: `
const MyComponent = () => {
  const shouldShow = false;
  return shouldShow ? <div>Visible</div> : null;
};
// Output: Nothing is rendered
      `,
  },
  {
    title: "`undefined` in Rendering",
    description: `\`undefined\` is treated the same as \`null\` in JSX — it does not render anything. 
However, explicitly returning \`undefined\` from a component is not recommended (it should return \`null\` or a valid element).`,
    code: `
const MyComponent = () => {
  let output;
  // No assignment means output is undefined
  return <div>{output}</div>;
};
// Output: <div></div> (renders nothing inside the div)
      `,
  },
  {
    title: "`false` in Rendering",
    description: `\`false\` is also ignored by JSX rendering. It’s often used in conditional rendering with \`&&\` syntax.`,
    code: `
const MyComponent = () => {
  const show = false;
  return <div>{show && <p>This will not show</p>}</div>;
};
// Output: <div></div> — nothing inside
      `,
  },
  {
    title: "⚠️ Caveat: Expressions in JSX",
    description: `Only \`null\`, \`undefined\`, and \`false\` are ignored in JSX.
If you return \`0\`, \`true\`, or \`''\`, they will be rendered.`,
    code: `
const MyComponent = () => {
  return (
    <div>
      {0}   // ✅ will render 0
      {true} // ✅ will render 'true'
      {''}   // ✅ will render empty string
    </div>
  );
};
      `,
  },
];
