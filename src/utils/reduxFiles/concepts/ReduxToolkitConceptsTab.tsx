import { Box, Divider, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const REDUX_TOOLKIT_CONCEPTS_DATA = [
  {
    heading: "What is redux toolkit?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧰 What is Redux Toolkit?
        </Typography>

        <Typography paragraph>
          <strong>Redux Toolkit</strong> (RTK) is the official, recommended way
          to write Redux logic. It helps simplify Redux boilerplate and ensures
          best practices. It comes with useful utilities like{" "}
          <code>createSlice</code>,<code>createAsyncThunk</code>, and a
          pre-configured store setup.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✨ Benefits of Redux Toolkit
        </Typography>

        <ul>
          <li>Less boilerplate code</li>
          <li>Built-in Immer.js for immutable updates</li>
          <li>Includes Redux Thunk for async operations</li>
          <li>Encourages good architectural practices</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Installation
        </Typography>

        <CodeBlock
          code={`npm install @reduxjs/toolkit react-redux
# or
yarn add @reduxjs/toolkit react-redux`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Creating a Slice
        </Typography>

        <Typography paragraph>
          A <code>slice</code> represents a single piece of state and includes
          reducers and actions.
        </Typography>

        <CodeBlock
          code={`// features/counter/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // thanks to Immer, we can mutate state directly
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🏪 Configuring the Store
        </Typography>

        <Typography paragraph>
          Use <code>configureStore</code> to setup the store easily with
          devtools and middleware included.
        </Typography>

        <CodeBlock
          code={`// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Optional: export types for usage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔗 Providing the Store to the App
        </Typography>

        <Typography paragraph>
          Use <code>Provider</code> from <code>react-redux</code> to give the
          store to your app.
        </Typography>

        <CodeBlock
          code={`// index.tsx or main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Using Redux Toolkit in Components
        </Typography>

        <CodeBlock
          code={`// Counter.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { increment, decrement } from '../features/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Handling Async with createAsyncThunk
        </Typography>

        <Typography paragraph>
          Redux Toolkit has built-in support for async actions using{" "}
          <code>createAsyncThunk</code>.
        </Typography>

        <CodeBlock
          code={`// features/user/userSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('user/fetchUser', async (id: number) => {
  const response = await axios.get(\`https://api.example.com/users/\${id}\`);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default userSlice.reducer;`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📝 Summary
        </Typography>

        <ul>
          <li>
            <strong>Redux Toolkit</strong> simplifies Redux code using{" "}
            <code>createSlice</code>, <code>configureStore</code>, and{" "}
            <code>createAsyncThunk</code>.
          </li>
          <li>Follows best practices by default.</li>
          <li>Reduces boilerplate and improves productivity.</li>
        </ul>

        <Typography variant="body2" color="text.secondary" mt={2}>
          Pro Tip: Use <code>Redux DevTools</code> for debugging state flow in
          your app!
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain createAction, createReducer and createSelector.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          ⚛️ Redux Toolkit Utilities: createAction, createReducer,
          createSelector
        </Typography>

        <Typography paragraph>
          Redux Toolkit offers utilities to simplify Redux logic while keeping
          everything type-safe and performant. Let's deep dive into{" "}
          <code>createAction</code>, <code>createReducer</code>, and{" "}
          <code>createSelector</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* createAction */}
        <Typography variant="h5" gutterBottom>
          🚀 createAction
        </Typography>
        <Typography paragraph>
          <code>createAction</code> creates an action creator function for a
          specific action type. It is useful when you want to define actions
          separately from reducers.
        </Typography>
        <CodeBlock
          code={`// actions.ts
import { createAction } from '@reduxjs/toolkit';

// Define an action
export const increment = createAction<number>('counter/increment');

// Usage:
dispatch(increment(5)); // payload = 5`}
        />

        <Divider sx={{ my: 3 }} />

        {/* createReducer */}
        <Typography variant="h5" gutterBottom>
          ⚙️ createReducer
        </Typography>
        <Typography paragraph>
          <code>createReducer</code> lets you write reducers in an immutable
          style but with mutable logic thanks to Immer under the hood.
        </Typography>
        <CodeBlock
          code={`// counterReducer.ts
import { createReducer } from '@reduxjs/toolkit';
import { increment } from './actions';

interface CounterState {
value: number;
}

const initialState: CounterState = { value: 0 };

const counterReducer = createReducer(initialState, (builder) => {
builder.addCase(increment, (state, action) => {
  state.value += action.payload; // mutable update, actually immutable
});
});

export default counterReducer;`}
        />

        <Divider sx={{ my: 3 }} />

        {/* createSelector */}
        <Typography variant="h5" gutterBottom>
          🔍 createSelector
        </Typography>
        <Typography paragraph>
          <code>createSelector</code> is used to create memoized selectors that
          efficiently compute derived data from the Redux state.
        </Typography>
        <CodeBlock
          code={`// selectors.ts
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

// Base selector
const selectCounter = (state: RootState) => state.counter.value;

// Derived selector (memoized)
export const selectDouble = createSelector(
[selectCounter],
(value) => value * 2
);`}
        />

        <Typography paragraph>
          <strong>Note:</strong> <code>createSelector</code> ensures that the
          computation only happens if the input value changes, improving
          performance.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📝 Summary
        </Typography>
        <ul>
          <li>
            <strong>createAction</strong>: Clean way to define action creators.
          </li>
          <li>
            <strong>createReducer</strong>: Reduces boilerplate, improves
            immutability.
          </li>
          <li>
            <strong>createSelector</strong>: Boosts performance using memoized
            selectors.
          </li>
        </ul>

        <Typography variant="body2" color="text.secondary" mt={2}>
          ✨ These utilities streamline Redux architecture while keeping your
          code maintainable and readable.
        </Typography>
      </Box>
    ),
  },
];
