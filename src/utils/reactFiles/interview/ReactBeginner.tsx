import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  benefits,
  codeExample,
  controlledCodeExample,
  controlledPoints,
  defaultPropsCodeExample,
  defaultPropsPoints,
  domData,
  eventCodeExample,
  eventPoints,
  explanationCards,
  features,
  fruitList,
  listCodeExample,
  listConcepts,
  phases,
  points,
  propsPoints,
  stateCodeExample,
  statePoints,
  steps,
  typeExplanation,
  uncontrolledCodeExample,
  uncontrolledPoints,
} from "../ReactHelper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CodeBlock from "../../../components/UI/CodeBlock";

export const BEGINNER_REACT_DATA = [
  {
    heading: "What is React?",
    content: (
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          What is React?
        </Typography>
        <Typography variant="body1" gutterBottom>
          React (also known as <b>React.js</b> or <b>ReactJS</b>) is a{" "}
          <b>JavaScript library</b> used for building
          <b> user interfaces (UIs)</b>, particularly for{" "}
          <b>single-page applications (SPAs)</b> where the content updates
          dynamically without reloading the whole page.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔹 1. Created and Maintained By
        </Typography>
        <Typography variant="body1">
          React was developed by <b>Facebook</b> and released in <b>2013</b>.
          It's now open-source and widely used in the web development community.
        </Typography>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom>
            🔹 2. Core Concept
          </Typography>
          <Typography>
            React revolves around the idea of <b>components</b>. A component is
            like a <b>reusable piece</b> of the UI — it can be a button, form,
            navbar, card, or even a whole page.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom>
            🔹 3. Why React? (Key Features)
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Feature</b>
                </TableCell>
                <TableCell>
                  <b>Description</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Component-Based Architecture</TableCell>
                <TableCell>
                  Breaks UI into independent, reusable pieces (components).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>JSX (JavaScript XML)</TableCell>
                <TableCell>
                  Allows writing HTML-like syntax inside JavaScript code.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Virtual DOM</TableCell>
                <TableCell>
                  Improves performance by updating only parts of the DOM that
                  changed.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Unidirectional Data Flow</TableCell>
                <TableCell>
                  Data flows from parent to child via props, making debugging
                  easier.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hooks</TableCell>
                <TableCell>
                  Allows use of state and side-effects in function components.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ecosystem</TableCell>
                <TableCell>
                  Large number of libraries, tools, and community support.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom>
            🔹 4. How React Works
          </Typography>

          <Typography>
            - User interacts with UI (e.g., clicks a button).
          </Typography>
          <Typography>
            - React updates the <b>Virtual DOM</b>.
          </Typography>
          <Typography>
            - It compares the new Virtual DOM with the old one (<b>diffing</b>
            ).
          </Typography>
          <Typography>
            - Only the changed parts are updated in the <b>real DOM</b> (
            <b>reconciliation</b>).
          </Typography>
          <Typography>
            - This makes the update process fast and efficient.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom>
            🔹 5. Basic Syntax (JSX)
          </Typography>
          <pre
            style={{
              backgroundColor: "#f5f5f5",
              padding: "10px",
              borderRadius: 4,
            }}
          >
            {`function Greeting() {
    return <h1>Hello, World!</h1>;
  }`}
          </pre>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom>
            🔹 6. React Component Types
          </Typography>
          <Typography variant="body2" gutterBottom>
            <b>Functional Components</b>
          </Typography>
          <pre
            style={{
              backgroundColor: "#f5f5f5",
              padding: "10px",
              borderRadius: 4,
            }}
          >
            {`const Welcome = (props) => <h1>Hello, {props.name}</h1>;`}
          </pre>
          <Typography variant="body2" gutterBottom>
            <b>Class Components (older style)</b>
          </Typography>
          <pre
            style={{
              backgroundColor: "#f5f5f5",
              padding: "10px",
              borderRadius: 4,
            }}
          >
            {`class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }`}
          </pre>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom>
            🔹 7. Hooks (introduced in React 16.8)
          </Typography>
          <Typography variant="body2">
            <b>useState</b>
          </Typography>
          <pre
            style={{
              backgroundColor: "#f5f5f5",
              padding: "10px",
              borderRadius: 4,
            }}
          >
            {`const [count, setCount] = useState(0);`}
          </pre>
          <Typography variant="body2">
            <b>useEffect</b>
          </Typography>
          <pre
            style={{
              backgroundColor: "#f5f5f5",
              padding: "10px",
              borderRadius: 4,
            }}
          >
            {`useEffect(() => {
    console.log("Component mounted or updated");
  }, [count]);`}
          </pre>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom>
            🔹 8. Data Handling
          </Typography>
          <Typography>
            <b>Props</b>: Used to pass data from parent to child.
          </Typography>
          <Typography>
            <b>State</b>: Used to store data within a component.
          </Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom>
            🔹 9. React with Other Tools
          </Typography>
          <Typography>- React Router – for navigation</Typography>
          <Typography>
            - Redux / Context API – for global state management
          </Typography>
          <Typography>- Axios / Fetch – for making HTTP requests</Typography>
          <Typography>- Material UI / Tailwind CSS – for styling</Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h5" gutterBottom>
            🔹 10. Use Cases of React
          </Typography>
          <Typography>- Dashboards</Typography>
          <Typography>
            - Social Media Platforms (e.g., Facebook, Instagram)
          </Typography>
          <Typography>- E-commerce websites</Typography>
          <Typography>- Admin Panels</Typography>
          <Typography>- Mobile apps (via React Native)</Typography>
        </Box>
      </Container>
    ),
  },
  {
    heading: "What are the key features of React?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Key Features of React
        </Typography>
        {features.map((feature, index) => (
          <Card key={index} variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" color="primary">
                {index + 1}. {feature.title}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <List dense>
                {feature.points.map((point, idx) => (
                  <ListItem key={idx} disableGutters>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          component="div"
                          sx={{
                            whiteSpace: "pre-line",
                            fontFamily: point.includes("Example")
                              ? "monospace"
                              : "inherit",
                            backgroundColor: "transparent",
                            px: point.includes("Example") ? 1 : 0,
                            py: point.includes("Example") ? 0.5 : 0,
                            borderRadius: 1,
                          }}
                        >
                          {point}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Box>
    ),
  },
  {
    heading: "What is JSX?",
    content: (
      <Card variant="outlined">
        <CardContent>
          <Typography variant="body1" paragraph>
            <strong>JSX (JavaScript XML)</strong> is a syntax extension for
            JavaScript used with React to describe what the UI should look like.
          </Typography>

          <Typography variant="body1" paragraph>
            It allows you to write HTML-like code inside JavaScript, making the
            structure of components more intuitive and readable.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontFamily: "monospace",
              backgroundColor: "#f5f5f5",
              p: 2,
              borderRadius: 1,
            }}
          >
            {`const element = <h1>Hello, world!</h1>;`}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body1">
            JSX is then transpiled into JavaScript behind the scenes.
          </Typography>
        </CardContent>
      </Card>
    ),
  },
  {
    heading: "What are components in React?",
    content: (
      <Card variant="outlined">
        <CardContent>
          <Typography variant="body1" paragraph>
            <strong>Components</strong> are the building blocks of a React
            application's UI. They let you split the interface into independent,
            reusable parts that can manage their own state.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Types of Components:
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText
                primary="1. Functional Components"
                secondary="These are simple JavaScript functions introduced with React Hooks for managing state and effects."
              />
            </ListItem>
            <Box
              component="pre"
              sx={{
                backgroundColor: "#f5f5f5",
                fontFamily: "monospace",
                fontSize: "0.9rem",
                p: 2,
                borderRadius: 1,
                my: 1,
              }}
            >
              {`const Welcome = () => <h1>Hello, React!</h1>;`}
            </Box>

            <ListItem>
              <ListItemText
                primary="2. Class Components"
                secondary="These use ES6 classes and include lifecycle methods."
              />
            </ListItem>
            <Box
              component="pre"
              sx={{
                backgroundColor: "#f5f5f5",
                fontFamily: "monospace",
                fontSize: "0.9rem",
                p: 2,
                borderRadius: 1,
                my: 1,
              }}
            >
              {`class Welcome extends React.Component {\n  render() {\n    return <h1>Hello, React!</h1>;\n  }\n}`}
            </Box>
          </List>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body1">
            Components can accept <strong>props</strong> (inputs) and maintain{" "}
            <strong>state</strong> to render dynamic content. They help build a
            modular, maintainable, and scalable UI.
          </Typography>
        </CardContent>
      </Card>
    ),
  },
  {
    heading: "What is the difference between functional and class components?",
    content: (
      <>
        <Card variant="outlined" sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Functional Components
            </Typography>
            <Typography variant="body1" paragraph>
              Functional components are plain JavaScript functions that return
              JSX. With the introduction of <strong>Hooks</strong>, they can now
              manage state and side effects.
            </Typography>

            <Box
              component="pre"
              sx={{
                backgroundColor: "#f5f5f5",
                p: 2,
                borderRadius: 1,
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                mb: 2,
              }}
            >
              {`import { useState } from 'react';
  
  const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
  };`}
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>
              Class Components
            </Typography>
            <Typography variant="body1" paragraph>
              Class components are ES6 classes that extend{" "}
              <code>React.Component</code>. They manage state using{" "}
              <code>this.state</code> and use lifecycle methods.
            </Typography>

            <Box
              component="pre"
              sx={{
                backgroundColor: "#f5f5f5",
                p: 2,
                borderRadius: 1,
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                mb: 2,
              }}
            >
              {`class Counter extends React.Component {
  state = { count: 0 };
  
  increment = () => this.setState({ count: this.state.count + 1 });
  
  render() {
    return <button onClick={this.increment}>Count: {this.state.count}</button>;
  }
  }`}
            </Box>
          </CardContent>
        </Card>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Key Differences
            </Typography>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Feature</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Functional Component</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Class Component</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  ["Syntax", "Function", "Class"],
                  ["State", "Hooks (`useState`)", "`this.state`"],
                  [
                    "Lifecycle Methods",
                    "`useEffect`, `useLayoutEffect`",
                    "`componentDidMount`, etc.",
                  ],
                  ["`this` Keyword", "Not used", "Required"],
                  ["Performance", "Slightly better", "Slightly heavier"],
                  ["Code Length", "Concise", "Verbose"],
                  [
                    "Recommended by React",
                    "✅ Yes (preferred)",
                    "⚠️ Supported, not preferred",
                  ],
                ].map(([feature, functional, classComp], idx) => (
                  <TableRow key={idx}>
                    <TableCell>{feature}</TableCell>
                    <TableCell>{functional}</TableCell>
                    <TableCell>{classComp}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </>
    ),
  },
  {
    heading: "Explain the React component lifecycle.",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          React Component Lifecycle (Class Components)
        </Typography>

        <Grid container spacing={4}>
          {phases.map((phase, index) => (
            <Grid size={6} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    {phase.title}
                  </Typography>
                  <List dense>
                    {phase.steps.map(([method, desc], i) => (
                      <ListItem key={i} alignItems="flex-start">
                        <ListItemText
                          primary={<strong>{method}</strong>}
                          secondary={desc}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          Functional Component Lifecycle with Hooks
        </Typography>

        <Card variant="outlined">
          <CardContent>
            <Typography variant="body1" paragraph>
              In functional components, lifecycle is managed using hooks like{" "}
              <code>useEffect</code> and <code>useLayoutEffect</code>. Here's a
              basic example:
            </Typography>

            <Box
              component="pre"
              sx={{
                backgroundColor: "#f5f5f5",
                p: 2,
                borderRadius: 1,
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                overflowX: "auto",
              }}
            >
              {`useEffect(() => {
    // componentDidMount logic
  
    return () => {
      // componentWillUnmount logic
    };
  }, []);`}
            </Box>
          </CardContent>
        </Card>
      </Box>
    ),
  },
  {
    heading: "What is the virtual DOM?",
    content: (
      <>
        {" "}
        <Grid container spacing={3}>
          {domData.map((dom, index) => (
            <Grid size={6} key={index}>
              <Card
                variant="outlined"
                sx={{ borderTop: 3, borderColor: dom.color }}
              >
                <CardContent>
                  <Typography variant="h6" color={dom.color} gutterBottom>
                    {dom.title}
                  </Typography>
                  <Typography variant="body2">{dom.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h5" gutterBottom>
          Comparison Table
        </Typography>
        <TableContainer component={Card} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Feature</strong>
                </TableCell>
                <TableCell>
                  <strong>Real DOM</strong>
                </TableCell>
                <TableCell>
                  <strong>Virtual DOM</strong>
                </TableCell>
                <TableCell>
                  <strong>Shadow DOM</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Owned By</TableCell>
                <TableCell>Browser</TableCell>
                <TableCell>React (Memory)</TableCell>
                <TableCell>Browser (Web Components)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Update Type</TableCell>
                <TableCell>Direct updates</TableCell>
                <TableCell>Diff and patch</TableCell>
                <TableCell>Encapsulated updates</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Performance</TableCell>
                <TableCell>Slower</TableCell>
                <TableCell>Faster</TableCell>
                <TableCell>Fast for isolated DOM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Used in React?</TableCell>
                <TableCell>Yes (underneath)</TableCell>
                <TableCell>Yes (core logic)</TableCell>
                <TableCell>No (not by default)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    ),
  },
  {
    heading: "How does React handle rendering and updating the UI?",
    content: (
      <>
        {" "}
        <Stepper orientation="vertical" nonLinear activeStep={-1}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>
                <Typography variant="h6">{step.label}</Typography>
              </StepLabel>
              <Card variant="outlined" sx={{ mb: 2, ml: 4 }}>
                <CardContent>
                  <Typography variant="body1">{step.description}</Typography>
                </CardContent>
              </Card>
            </Step>
          ))}
        </Stepper>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h5" gutterBottom>
          Benefits of React’s Rendering Strategy
        </Typography>
        <Grid container spacing={2}>
          {benefits.map((point, index) => (
            <Grid size={12} key={index}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="body1">✅ {point}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </>
    ),
  },
  {
    heading: "What is the purpose of render() in class components?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Purpose of <code>render()</code> in Class Components
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          The <strong>render()</strong> method in React class components defines
          what the UI should look like. It is a required method that returns JSX
          and is called automatically during mounting and updating of the
          component.
        </Typography>

        <Grid container spacing={3}>
          {points.map((point, idx) => (
            <Grid size={6} key={idx}>
              <Card
                variant="outlined"
                sx={{ borderTop: 3, borderColor: "primary.main" }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {point.title}
                  </Typography>
                  <Typography variant="body2">{point.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" gutterBottom>
          📦 Code Example
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 2,
            fontFamily: "monospace",
            backgroundColor: "#f5f5f5",
            overflowX: "auto",
          }}
        >
          <pre>{codeExample}</pre>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "What is state in React?",
    content: (
      <>
        <Typography variant="body1" sx={{ mb: 3 }}>
          <strong>State</strong> is a built-in object in React used to store
          component data that may change over time. It plays a key role in how
          components behave and how they render the UI.
        </Typography>

        <Grid container spacing={3}>
          {statePoints.map((point, idx) => (
            <Grid size={6} key={idx}>
              <Card
                variant="outlined"
                sx={{ borderLeft: 4, borderColor: "primary.main" }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {point.title}
                  </Typography>
                  <Typography variant="body2">{point.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" gutterBottom>
          💻 Example: Functional Component with State
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 2,
            fontFamily: "monospace",
            backgroundColor: "#f5f5f5",
            overflowX: "auto",
          }}
        >
          <pre>{stateCodeExample}</pre>
        </Paper>
      </>
    ),
  },
  {
    heading: "What is props in React?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          <strong>Props</strong> (short for properties) are a fundamental
          concept in React that allows components to be **customized** and
          **reused** by passing **data** from a parent component to a child
          component. They are immutable and help build dynamic UIs.
        </Typography>

        <Grid container spacing={3}>
          {propsPoints.map((point, idx) => (
            <Grid size={6} key={idx}>
              <Card
                variant="outlined"
                sx={{ borderLeft: 4, borderColor: "primary.main" }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {point.title}
                  </Typography>
                  <Typography variant="body2">{point.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" gutterBottom>
          💻 Example: Functional Component Using Props
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 2,
            fontFamily: "monospace",
            backgroundColor: "#f5f5f5",
            overflowX: "auto",
          }}
        >
          <pre>{codeExample}</pre>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "What is a controlled component?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          A <strong>controlled component</strong> is a form input element whose
          value is fully managed by React using state. This allows precise
          control over the behavior, validation, and user interactions with the
          form.
        </Typography>

        <Grid container spacing={3}>
          {controlledPoints.map((point, idx) => (
            <Grid size={6} key={idx}>
              <Card
                variant="outlined"
                sx={{ borderLeft: 4, borderColor: "primary.main" }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {point.title}
                  </Typography>
                  <Typography variant="body2">{point.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" gutterBottom>
          💻 Example: Controlled Input with React State
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 2,
            fontFamily: "monospace",
            backgroundColor: "#f5f5f5",
            overflowX: "auto",
          }}
        >
          <pre>{controlledCodeExample}</pre>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "What is an uncontrolled component?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          An <strong>uncontrolled component</strong> allows the form element to
          manage its own state internally via the DOM. React uses a{" "}
          <code>ref</code> to access the value when needed, but it does not
          manage or monitor it directly.
        </Typography>

        <Grid container spacing={3}>
          {uncontrolledPoints.map((point, idx) => (
            <Grid size={6} key={idx}>
              <Card
                variant="outlined"
                sx={{ borderLeft: 4, borderColor: "secondary.main" }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {point.title}
                  </Typography>
                  <Typography variant="body2">{point.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" gutterBottom>
          💻 Example: Uncontrolled Input Using <code>ref</code>
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 2,
            fontFamily: "monospace",
            backgroundColor: "#f5f5f5",
            overflowX: "auto",
          }}
        >
          <pre>{uncontrolledCodeExample}</pre>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "What are default props?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          <strong>Default props</strong> let you assign fallback values to props
          in case they are not passed by the parent component. This ensures your
          component behaves reliably and avoids undefined values.
        </Typography>

        <Grid container spacing={3}>
          {defaultPropsPoints.map((point, index) => (
            <Grid size={6} key={index}>
              <Card
                variant="outlined"
                sx={{ borderLeft: 4, borderColor: "info.main" }}
              >
                <CardContent>
                  <Typography variant="h6">{point.title}</Typography>
                  <Typography variant="body2">{point.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" gutterBottom>
          💻 Example: Using Default Props in a Functional Component
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 2,
            fontFamily: "monospace",
            backgroundColor: "#f5f5f5",
            overflowX: "auto",
          }}
        >
          <pre>{defaultPropsCodeExample}</pre>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "How do you handle events in React?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          How Do You Handle <code>Events</code> in React?
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          In React, handling events is similar to DOM events in JavaScript, with
          key differences like using <strong>camelCase</strong> and React’s
          cross-browser friendly <strong>SyntheticEvent</strong> system.
        </Typography>

        <Grid container spacing={3}>
          {eventPoints.map((point, index) => (
            <Grid size={6} key={index}>
              <Card
                variant="outlined"
                sx={{ borderLeft: 4, borderColor: "primary.main" }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {point.title}
                  </Typography>
                  <Typography variant="body2">{point.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6" gutterBottom>
          💻 Code Example
        </Typography>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            fontFamily: "monospace",
            backgroundColor: "#f5f5f5",
            overflowX: "auto",
            mb: 3,
          }}
        >
          <pre>{eventCodeExample}</pre>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "What are lists in React and how do you render them?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          📋 Lists in React and How to Render Them
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          In React, lists help us render multiple similar elements efficiently.
          They are most often rendered using the <code>map()</code> function,
          and every element should include a <code>key</code> prop for
          performance and clarity.
        </Typography>

        <Grid container spacing={3}>
          {listConcepts.map((concept, index) => (
            <Grid size={6} key={index}>
              <Card
                variant="outlined"
                sx={{ borderLeft: 4, borderColor: "primary.main" }}
              >
                <CardContent>
                  <Typography variant="h6">{concept.title}</Typography>
                  <Typography variant="body2">{concept.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          🍇 Live Example: Rendering a List of Fruits
        </Typography>

        <Paper
          elevation={2}
          sx={{ p: 2, maxWidth: 400, mb: 4, backgroundColor: "#f9f9f9" }}
        >
          <List>
            {fruitList.map((fruit) => (
              <ListItem key={fruit}>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText primary={fruit} />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Typography variant="h5" gutterBottom>
          🧠 Code Example
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 2,
            fontFamily: "monospace",
            backgroundColor: "#272822",
            color: "#f8f8f2",
            overflowX: "auto",
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "#a6e22e", mb: 1 }}>
            // Simple List Rendering in React
          </Typography>
          <pre>{listCodeExample}</pre>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "How can you prevent re-rendering in a component?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🧠 How to Prevent Re-rendering in React
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          React components re-render when their state or props change. However,
          unnecessary re-renders can slow down performance. Below are techniques
          to prevent this, with code examples.
        </Typography>

        <Grid container spacing={3}>
          {explanationCards.map((item, index) => (
            <Grid size={6} key={index}>
              <Card
                variant="outlined"
                sx={{ borderLeft: 4, borderColor: "primary.main" }}
              >
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {item.description}
                  </Typography>
                  <CodeBlock code={item.code.trim()} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    ),
  },
  {
    heading:
      "What is the difference between null, undefined, and false in rendering?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          🔍 Understanding `null`, `undefined`, and `false` in JSX Rendering
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          These three values play an important role in how conditional logic is
          handled in JSX. Let's explore how each of them behaves when rendered.
        </Typography>

        <Grid container spacing={4}>
          {typeExplanation.map((item, index) => (
            <Grid size={6} key={index}>
              <Card
                variant="outlined"
                sx={{ borderLeft: 4, borderColor: "primary.main" }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {item.description}
                  </Typography>
                  <CodeBlock code={item.code.trim()} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    ),
  },
  {
    heading: "What is ReactDOM used for?",
    content: (
      <Box sx={{ p: 4 }}>
        <Typography variant="body1" sx={{ mb: 4 }}>
          <code>ReactDOM</code> is the package that provides DOM-specific
          methods that can be used at the top level of your application. While{" "}
          <code>React</code> itself is responsible for creating components and
          managing state, <code>ReactDOM</code> connects React to the actual DOM
          in the browser.
        </Typography>

        <Grid container spacing={4}>
          <Grid size={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  🔧 Main Purpose of ReactDOM
                </Typography>
                <Typography variant="body2" gutterBottom>
                  The most common use of <code>ReactDOM</code> is the{" "}
                  <code>ReactDOM.createRoot()</code> method, which tells React
                  where to render the component in the DOM.
                </Typography>
                <CodeBlock
                  code={`
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App';
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
                `}
                />
                <Typography variant="body2">
                  This code mounts the <code>&lt;App /&gt;</code> component into
                  the DOM element with the id <code>root</code>.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  🧩 Other Uses of ReactDOM
                </Typography>

                <Typography variant="body2" gutterBottom>
                  - <code>ReactDOM.findDOMNode()</code>: Access the underlying
                  DOM node (legacy use only). - <code>ReactDOM.hydrate()</code>:
                  Used for Server-Side Rendering (SSR). -{" "}
                  <code>ReactDOM.unmountComponentAtNode()</code>: Unmounts a
                  component from the DOM.
                </Typography>

                <CodeBlock
                  code={`
  import ReactDOM from 'react-dom';
  
  const node = document.getElementById('root');
  ReactDOM.unmountComponentAtNode(node);
                `}
                />
                <Typography variant="body2">
                  This code removes a mounted React component from the DOM
                  element.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Card
            variant="outlined"
            sx={{ borderLeft: 4, borderColor: "primary.main" }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                🚀 Summary
              </Typography>
              <Typography variant="body2">
                <ul>
                  <li>
                    <strong>
                      <code>ReactDOM.createRoot()</code>
                    </strong>{" "}
                    – Used to render your app into the DOM (modern React 18+
                    method).
                  </li>
                  <li>
                    <strong>
                      <code>ReactDOM.render()</code>
                    </strong>{" "}
                    – Deprecated in React 18.
                  </li>
                  <li>
                    <strong>
                      <code>ReactDOM.findDOMNode()</code>
                    </strong>{" "}
                    – Not recommended for most use cases.
                  </li>
                  <li>
                    <strong>
                      <code>ReactDOM.unmountComponentAtNode()</code>
                    </strong>{" "}
                    – Unmounts a component from a DOM node.
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    ),
  },
];
