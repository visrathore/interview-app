import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const REDUX_CONCEPTS_DATA = [
  {
    heading: "What is Redux?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🔁 What is Redux?
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          <strong>Redux</strong> is a **predictable state container** for
          JavaScript apps. It helps manage the state of an application in a
          centralized store, making it easier to debug, test, and maintain —
          especially in large-scale applications.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Concept */}
        <Typography variant="h5" gutterBottom>
          📦 Core Concepts of Redux
        </Typography>

        <Typography paragraph>
          Redux is based on three main principles:
        </Typography>

        <ul>
          <li>
            <strong>Single source of truth</strong>: The state is stored in one
            JavaScript object called the store.
          </li>
          <li>
            <strong>State is read-only</strong>: The only way to change state is
            to dispatch an action.
          </li>
          <li>
            <strong>Changes are made with pure functions</strong>: Reducers
            handle actions and produce new state.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Code: Basic Redux Setup */}
        <Typography variant="h5" gutterBottom>
          🛠️ Simple Redux Example
        </Typography>

        <Typography paragraph>
          Here's a basic example that demonstrates how Redux works using a
          counter.
        </Typography>

        <CodeBlock
          code={`
// 1. Define Action Types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// 2. Create Action Creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// 3. Define the Reducer (pure function)
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
switch (action.type) {
  case INCREMENT:
    return { ...state, count: state.count + 1 };
  case DECREMENT:
    return { ...state, count: state.count - 1 };
  default:
    return state;
}
}

// 4. Create Store
import { createStore } from "redux";
const store = createStore(counterReducer);

// 5. Dispatch Actions
store.dispatch(increment());
store.dispatch(decrement());

console.log(store.getState()); // { count: 0 }
`}
        />

        <Typography paragraph>
          Each part of the example above plays a key role in Redux:
        </Typography>

        <ul>
          <li>
            <code>Actions</code>: Describe what happened
          </li>
          <li>
            <code>Reducers</code>: Decide how the state changes
          </li>
          <li>
            <code>Store</code>: Holds the whole application state
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Integration */}
        <Typography variant="h5" gutterBottom>
          ⚛️ Using Redux with React
        </Typography>

        <Typography paragraph>
          With <code>react-redux</code>, you can use the Redux store in React
          components.
        </Typography>

        <CodeBlock
          code={`
// 1. Provide the store
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store"; // your configured store

<Provider store={store}>
<App />
</Provider>

// 2. Use Redux state and dispatch in a component
function Counter() {
const count = useSelector((state) => state.count); // read state
const dispatch = useDispatch(); // dispatch actions

return (
  <>
    <p>Count: {count}</p>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
  </>
);
}
`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Best Practices */}
        <Typography variant="h5" gutterBottom>
          ✅ Redux Best Practices
        </Typography>

        <ul>
          <li>Keep reducers pure and predictable</li>
          <li>Use Redux Toolkit for simplified configuration</li>
          <li>Normalize large state objects</li>
          <li>Split logic using slices/modules</li>
          <li>Avoid putting non-serializable data in Redux state</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Tooling */}
        <Typography variant="h5" gutterBottom>
          🧪 Redux DevTools
        </Typography>
        <Typography paragraph>
          Redux has excellent DevTools for debugging state changes, time travel
          debugging, and action inspection.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          Pro Tip: Prefer using <strong>Redux Toolkit</strong> for modern Redux
          development — it simplifies boilerplate and follows best practices.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are dispatch and selectors?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          ⚙️ Redux: Dispatch and Selectors
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          In Redux, <strong>dispatch</strong> is used to send actions to the
          store to update state, while <strong>selectors</strong> are functions
          used to access specific parts of the Redux state.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Dispatch Section */}
        <Typography variant="h5" gutterBottom>
          📤 What is <code>dispatch</code>?
        </Typography>

        <Typography paragraph>
          The <code>dispatch</code> function is used to send an{" "}
          <strong>action</strong> to the Redux <strong>store</strong>. Once
          dispatched, the action is handled by the <strong>reducer</strong> to
          modify the state.
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          🔁 Example Flow:
        </Typography>

        <List>
          <ListItem>1. User clicks a button</ListItem>
          <ListItem>2. Component dispatches an action</ListItem>
          <ListItem>3. Reducer handles the action</ListItem>
          <ListItem>4. State is updated</ListItem>
        </List>

        <CodeBlock
          code={`
// Define action type
const INCREMENT = "INCREMENT";

// Define action creator
const increment = () => ({ type: INCREMENT });

// Use dispatch in React component
import { useDispatch } from "react-redux";

function CounterButton() {
const dispatch = useDispatch(); // gives access to dispatch function

return (
  <button onClick={() => dispatch(increment())}>
    Increment
  </button>
);
}
`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Selectors Section */}
        <Typography variant="h5" gutterBottom>
          🔍 What are <code>selectors</code>?
        </Typography>

        <Typography paragraph>
          A selector is a pure function that takes the entire Redux{" "}
          <code>state</code> and returns a specific piece of it. This helps in
          isolating components from the global state shape and enables better
          maintainability and reusability.
        </Typography>

        <CodeBlock
          code={`
// Example: Redux state
const state = {
counter: {
  count: 10,
},
user: {
  name: "Alex",
}
};

// Simple selector
const selectCount = (state) => state.counter.count;
const selectUserName = (state) => state.user.name;

// Using selectors in React component
import { useSelector } from "react-redux";

function CounterDisplay() {
const count = useSelector(selectCount); // efficiently grabs part of the state

return <p>Count is: {count}</p>;
}
`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Best Practices */}
        <Typography variant="h5" gutterBottom>
          ✅ Best Practices
        </Typography>

        <List>
          <ListItem>
            ✔️ Use <code>useDispatch</code> once in each component to send
            actions.
          </ListItem>
          <ListItem>
            ✔️ Define <strong>selectors in a separate file</strong> (like{" "}
            <code>selectors.ts</code>) for modularity.
          </ListItem>
          <ListItem>
            ✔️ Use <code>reselect</code> library for{" "}
            <strong>memoized selectors</strong> to avoid unnecessary re-renders.
          </ListItem>
          <ListItem>
            ❌ Avoid selecting the entire state object — always be specific.
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        {/* Code with Redux Toolkit */}
        <Typography variant="h5" gutterBottom>
          🚀 Using with Redux Toolkit
        </Typography>

        <Typography paragraph>
          Redux Toolkit encourages the use of <code>createSlice</code>, which
          automatically generates action creators and handles state slices. It
          also helps create selectors easily.
        </Typography>

        <CodeBlock
          code={`
// counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
name: "counter",
initialState: { count: 0 },
reducers: {
  increment: (state) => {
    state.count += 1;
  },
},
});

export const { increment } = counterSlice.actions;
export const selectCount = (state) => state.counter.count;
export default counterSlice.reducer;
`}
        />

        <Typography paragraph>Now, in your component:</Typography>

        <CodeBlock
          code={`
// In component
import { useSelector, useDispatch } from "react-redux";
import { increment, selectCount } from "./counterSlice";

function Counter() {
const dispatch = useDispatch();
const count = useSelector(selectCount);

return (
  <>
    <p>{count}</p>
    <button onClick={() => dispatch(increment())}>+</button>
  </>
);
}
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          Pro Tip: Use typed dispatch and selector hooks with TypeScript for
          better type safety using <code>TypedUseSelectorHook</code> and{" "}
          <code>AppDispatch</code>.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is redux thunk?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          ⚛️ Redux Thunk - Explained with MUI UI
        </Typography>

        {/* Intro */}
        <Typography paragraph>
          <strong>Redux Thunk</strong> is a middleware that allows you to write
          action creators that return a function instead of an action. It’s
          commonly used for handling <strong>asynchronous logic</strong> in
          Redux like API calls.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Why Redux Thunk */}
        <Typography variant="h5" gutterBottom>
          🚀 Why Use Redux Thunk?
        </Typography>
        <Typography paragraph>
          Redux by default only supports synchronous actions. To perform async
          operations (e.g., fetching data), Redux Thunk helps you delay the
          dispatch of actions until the async operation is complete.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Basic Syntax */}
        <Typography variant="h5" gutterBottom>
          🧠 Basic Syntax
        </Typography>
        <CodeBlock
          code={`// Thunk action creator
const fetchData = () => {
return async (dispatch, getState) => {
  dispatch({ type: "FETCH_START" });
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    dispatch({ type: "FETCH_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_FAILURE", error });
  }
};
};`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Integration in Redux Store */}
        <Typography variant="h5" gutterBottom>
          🧩 Setting Up Redux Thunk
        </Typography>
        <CodeBlock
          code={`// store.js
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = configureStore({
reducer: rootReducer,
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Using Thunk in Component */}
        <Typography variant="h5" gutterBottom>
          🧪 Using Thunk in a Component
        </Typography>
        <CodeBlock
          code={`import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './thunks';

const DataComponent = () => {
const dispatch = useDispatch();
const data = useSelector(state => state.data);

useEffect(() => {
  dispatch(fetchData());
}, [dispatch]);

return <div>{JSON.stringify(data)}</div>;
};`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Best Practices */}
        <Typography variant="h5" gutterBottom>
          ✅ Best Practices
        </Typography>
        <ul>
          <li>
            Keep thunks in a separate <code>thunks/</code> or{" "}
            <code>actions/</code> folder
          </li>
          <li>
            Dispatch actions for <code>loading</code>, <code>success</code>, and{" "}
            <code>failure</code> states
          </li>
          <li>Type your thunk functions if using TypeScript</li>
        </ul>
      </Box>
    ),
  },
  {
    heading: "What is redux saga?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧵 What is Redux Saga?
        </Typography>
        <Typography paragraph>
          <strong>Redux Saga</strong> is a middleware library that allows you to
          handle complex asynchronous logic in Redux using{" "}
          <strong>generator functions</strong>. It uses a concept of "sagas"
          (background processes) to listen to actions and perform side effects
          like API calls, delays, etc.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 Why Use Redux Saga?
        </Typography>
        <ul>
          <li>Better control over async flows (like retries, cancellation)</li>
          <li>Decouple side effects from components</li>
          <li>Testable and maintainable async logic</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Key Concept: Generator Functions
        </Typography>
        <Typography paragraph>
          Sagas are written using ES6 <strong>generator functions</strong>. A
          generator can pause execution using <code>yield</code> and resume
          later — perfect for async workflows.
        </Typography>
        <CodeBlock
          code={`function* simpleSaga() {
yield console.log("Paused at yield");
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Saga Effects (Helpers)
        </Typography>
        <Typography paragraph>
          Redux Saga provides powerful helper effects:
        </Typography>
        <ul>
          <li>
            <code>takeEvery</code> – run saga for every matching action
          </li>
          <li>
            <code>put</code> – dispatch an action
          </li>
          <li>
            <code>call</code> – call a function (typically an async API)
          </li>
          <li>
            <code>delay</code> – pause execution
          </li>
          <li>
            <code>select</code> – access Redux state
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Installing Redux Saga
        </Typography>
        <CodeBlock code={`npm install redux-saga`} />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔁 Basic Example: Fetching Users
        </Typography>
        <Typography paragraph>
          Let's create a saga to handle a `FETCH_USERS` action and make an API
          call.
        </Typography>

        <CodeBlock
          code={`// actions.ts
export const FETCH_USERS = "FETCH_USERS";
export const SET_USERS = "SET_USERS";

export const fetchUsers = () => ({ type: FETCH_USERS });
export const setUsers = (users) => ({ type: SET_USERS, payload: users });`}
        />

        <CodeBlock
          code={`// api.ts
export const fetchUsersApi = () =>
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json());`}
        />

        <CodeBlock
          code={`// sagas.ts
import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_USERS, setUsers } from "./actions";
import { fetchUsersApi } from "./api";

function* fetchUsersSaga() {
try {
  const users = yield call(fetchUsersApi); // Call the API
  yield put(setUsers(users)); // Dispatch the users
} catch (e) {
  console.error("Failed to fetch users", e);
}
}

export function* rootSaga() {
yield takeEvery(FETCH_USERS, fetchUsersSaga); // Watcher saga
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Integration With Redux Store
        </Typography>
        <CodeBlock
          code={`// store.ts
import createSagaMiddleware from "redux-saga";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
rootReducer,
applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ When to Use Redux Saga
        </Typography>
        <ul>
          <li>
            When async logic is complex (multiple steps, branching, retry)
          </li>
          <li>When you want to cancel background tasks (e.g., API polling)</li>
          <li>When testability and code separation are priorities</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" color="text.secondary" mt={2}>
          Pro Tip: You can cancel sagas, debounce actions, and coordinate
          multiple async tasks easily with Redux Saga — making it a powerful
          tool for managing complex side effects.
        </Typography>
      </Box>
    ),
  },
];
