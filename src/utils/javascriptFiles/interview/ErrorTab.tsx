import { Box, Divider, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const ERROR_DATA = [
  {
    heading: "What are the different types of errors in JavaScript?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🚨 Types of Errors in JavaScript
        </Typography>

        <Typography paragraph>
          JavaScript has several built-in error types to help developers
          identify and handle different issues in the code. Each error type
          provides specific information that makes debugging easier.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          1️⃣ <code>SyntaxError</code>
        </Typography>
        <Typography paragraph>
          A <strong>SyntaxError</strong> occurs when code is written incorrectly
          and violates JavaScript's grammar rules.
        </Typography>
        <CodeBlock
          code={`// ❌ SyntaxError: Unexpected identifier
function sayHi() {
console.log("Hi"
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          2️⃣ <code>ReferenceError</code>
        </Typography>
        <Typography paragraph>
          A <strong>ReferenceError</strong> happens when a variable or function
          is referenced that hasn’t been declared.
        </Typography>
        <CodeBlock
          code={`// ❌ ReferenceError: myVar is not defined
console.log(myVar);`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          3️⃣ <code>TypeError</code>
        </Typography>
        <Typography paragraph>
          A <strong>TypeError</strong> is thrown when a value is not of the
          expected type, like trying to call something that’s not a function.
        </Typography>
        <CodeBlock
          code={`// ❌ TypeError: num.toUpperCase is not a function
const num = 123;
num.toUpperCase();`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          4️⃣ <code>RangeError</code>
        </Typography>
        <Typography paragraph>
          A <strong>RangeError</strong> occurs when a value is not in the
          expected range.
        </Typography>
        <CodeBlock
          code={`// ❌ RangeError: Maximum call stack size exceeded
function recurse() {
recurse();
}

recurse();`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          5️⃣ <code>EvalError</code>
        </Typography>
        <Typography paragraph>
          A <strong>EvalError</strong> is related to the <code>eval()</code>{" "}
          function. It's rare in modern JavaScript as most uses of{" "}
          <code>eval</code> are discouraged.
        </Typography>
        <CodeBlock
          code={`// Older versions might throw EvalError
eval("alert('Hello')");`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          6️⃣ <code>URIError</code>
        </Typography>
        <Typography paragraph>
          A <strong>URIError</strong> is thrown when <code>encodeURI()</code> or{" "}
          <code>decodeURI()</code> are used incorrectly.
        </Typography>
        <CodeBlock
          code={`// ❌ URIError: URI malformed
decodeURIComponent('%');`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ Custom Errors
        </Typography>
        <Typography paragraph>
          You can also define your own error types using <code>class</code> and
          extend the base <code>Error</code> class.
        </Typography>
        <CodeBlock
          code={`class ValidationError extends Error {
constructor(message) {
  super(message);
  this.name = "ValidationError";
}
}

throw new ValidationError("This field is required.");`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Summary Table
        </Typography>

        <ul>
          <li>
            <strong>SyntaxError:</strong> Badly written code.
          </li>
          <li>
            <strong>ReferenceError:</strong> Accessing undeclared variables.
          </li>
          <li>
            <strong>TypeError:</strong> Wrong value type or method call on
            invalid object.
          </li>
          <li>
            <strong>RangeError:</strong> Numbers out of allowable range or stack
            overflows.
          </li>
          <li>
            <strong>EvalError:</strong> Issues using <code>eval()</code>.
          </li>
          <li>
            <strong>URIError:</strong> Incorrect use of URI handling functions.
          </li>
          <li>
            <strong>Custom Errors:</strong> Extend <code>Error</code> for
            app-specific messages.
          </li>
        </ul>

        <Typography variant="body2" color="text.secondary" mt={2}>
          Pro Tip: Always wrap risky code in <code>try...catch</code> blocks and
          use <code>finally</code> when needed to clean up resources.
        </Typography>
      </Box>
    ),
  },
];
