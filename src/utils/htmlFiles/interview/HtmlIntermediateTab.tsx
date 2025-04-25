import { Box, Divider, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const HTML_INTERMEDIATE_DATA = [
  {
    heading: "What are semantic elements and why are they important?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📘 Semantic Elements in HTML5
        </Typography>

        <Typography paragraph>
          Semantic elements clearly describe their meaning in a human- and
          machine-readable way. These tags help browsers, developers, and
          assistive technologies understand the structure and content of a web
          page.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 What Are Semantic Elements?
        </Typography>
        <Typography paragraph>
          Semantic elements introduce meaning to the HTML. For example,{" "}
          <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>,{" "}
          <code>&lt;article&gt;</code>, and <code>&lt;section&gt;</code> tell
          both the developer and the browser something about the content inside
          them.
        </Typography>

        <CodeBlock
          code={`<!-- Semantic Elements Example -->
<header>
<h1>Welcome to My Blog</h1>
</header>

<main>
<article>
  <h2>Post Title</h2>
  <p>This is a blog post.</p>
</article>
</main>

<footer>
<p>© 2025 My Blog</p>
</footer>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Why Semantic Elements Matter
        </Typography>
        <Typography component="ul">
          <li>
            <strong>Accessibility:</strong> Screen readers and assistive tools
            can better navigate content.
          </li>
          <li>
            <strong>SEO:</strong> Search engines understand the page structure
            better, improving ranking.
          </li>
          <li>
            <strong>Maintainability:</strong> Easier for developers to read and
            maintain.
          </li>
          <li>
            <strong>Standards Compliance:</strong> Encourages clean, valid
            markup.
          </li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Semantic vs Non-Semantic Elements
        </Typography>

        <Typography paragraph>
          Non-semantic elements like <code>&lt;div&gt;</code> and{" "}
          <code>&lt;span&gt;</code> don’t describe their content. They are
          purely structural.
        </Typography>

        <CodeBlock
          code={`<!-- Non-semantic example -->
<div id="header">
<h1>Welcome</h1>
</div>

<!-- Semantic example -->
<header>
<h1>Welcome</h1>
</header>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🏷️ Common Semantic Elements in HTML5
        </Typography>
        <Typography component="ul">
          <li>
            <code>&lt;header&gt;</code>: Represents introductory content or a
            navigational link set.
          </li>
          <li>
            <code>&lt;nav&gt;</code>: Declares navigation links.
          </li>
          <li>
            <code>&lt;main&gt;</code>: Specifies the main content of the
            document.
          </li>
          <li>
            <code>&lt;section&gt;</code>: Thematic grouping of content with a
            heading.
          </li>
          <li>
            <code>&lt;article&gt;</code>: Independent, self-contained content.
          </li>
          <li>
            <code>&lt;aside&gt;</code>: Side content, such as advertisements or
            related links.
          </li>
          <li>
            <code>&lt;footer&gt;</code>: Defines a footer for a section or page.
          </li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          🧠 Tip: Always prefer semantic HTML when structuring your documents —
          it's better for humans, machines, and future you!
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How does the <canvas> element work?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🖼️ Understanding the &lt;canvas&gt; Element in HTML5
        </Typography>

        <Typography paragraph>
          The <code>{`<canvas>`}</code> element in HTML5 provides a drawable
          region in the browser where you can render graphics, such as:
          <strong> shapes, images, animations, and charts</strong>. It uses
          JavaScript and a 2D/3D rendering context.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔧 Basic Syntax
        </Typography>

        <CodeBlock
          code={`<canvas id="myCanvas" width="400" height="200"></canvas>

// The canvas has no content by default. You must draw via JavaScript.
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 How it Works Internally
        </Typography>

        <Typography paragraph>
          The <code>canvas</code> is just a blank HTML element. You must use
          JavaScript to draw on it using a context (usually 2D or WebGL). The
          canvas behaves like a bitmap surface.
        </Typography>

        <CodeBlock
          code={`const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); // "2d" or "webgl" for 3D

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 50); // Draw a blue rectangle`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Example: Drawing with Canvas (React + useRef and useState)
        </Typography>

        <Typography paragraph>
          Here's how you'd use the canvas element in a React component. We use
          `useState` to control the color of the rectangle drawn on the canvas.
        </Typography>

        <CodeBlock
          code={`const canvasRef = useRef(null);
const [rectColor, setRectColor] = useState('blue');

useEffect(() => {
const canvas = canvasRef.current;
const ctx = canvas.getContext("2d");

ctx.fillStyle = rectColor;
ctx.fillRect(20, 20, 150, 100); // Draw a rectangle with dynamic color

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 80, 40, 0, Math.PI * 2); // Draw a circle
ctx.fill();
ctx.closePath();
}, [rectColor]);

return (
<div>
  <canvas ref={canvasRef} width={400} height={200}></canvas>
  <button onClick={() => setRectColor('#f44336')}>Change Color to Red</button>
</div>
);`}
        />

        <Box
          sx={{
            border: "2px dashed #90caf9",
            borderRadius: 2,
            mt: 2,
            mb: 4,
            p: 2,
            textAlign: "center",
            background: "#f0f8ff",
          }}
        >
          <CodeBlock
            code={`<canvas ref={canvasRef} width={400} height={200} />`}
          />
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Key Features of &lt;canvas&gt;
        </Typography>
        <Typography component="ul">
          <li>Resolution-dependent bitmap canvas</li>
          <li>Immediate-mode drawing (no DOM nodes)</li>
          <li>Supports 2D and 3D rendering via contexts</li>
          <li>Good for games, real-time charts, image editing, etc.</li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 Limitations
        </Typography>
        <Typography component="ul">
          <li>
            Canvas content is <strong>not accessible</strong> to screen readers.
          </li>
          <li>Not SEO-friendly (no actual DOM inside canvas).</li>
          <li>All graphics must be drawn with JavaScript.</li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          ✅ <strong>Tip:</strong> For interactive, DOM-based graphics (like UI
          elements), use SVG. For performance-heavy graphics (games, data viz),
          use <code>{`<canvas>`}</code>.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the difference between <canvas> and <svg>?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🖼️ Difference Between &lt;canvas&gt; and &lt;svg&gt; in HTML
        </Typography>

        <Typography paragraph>
          Both <code>{`<canvas>`}</code> and <code>{`<svg>`}</code> elements are
          used for rendering graphics in HTML, but they work differently. Here’s
          a detailed comparison:
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔧 Basic Syntax
        </Typography>

        <Typography paragraph>
          The <code>{`<canvas>`}</code> element is a bitmap-based container
          where you draw shapes using JavaScript, while <code>{`<svg>`}</code>{" "}
          is a vector-based container that defines graphics using XML.
        </Typography>

        <CodeBlock
          code={`<canvas id="myCanvas" width="400" height="200"></canvas>
      // You need JavaScript to draw anything on the canvas.

<svg width="400" height="200">
<rect x="20" y="20" width="150" height="100" fill="blue" />
</svg>
      // SVG defines shapes directly in HTML/XML.`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Key Differences
        </Typography>

        <Typography paragraph>
          Here's a side-by-side comparison between <code>{`<canvas>`}</code> and{" "}
          <code>{`<svg>`}</code>:
        </Typography>

        <CodeBlock
          code={`<canvas> vs <svg>:

1. Rendering Method:
 - <canvas>: Immediate Mode Rendering (pixel-based)
 - <svg>: Retained Mode Rendering (vector-based)

2. Drawing:
 - <canvas>: Uses JavaScript to draw on a blank canvas
 - <svg>: Defines shapes, paths, and objects directly in HTML/XML

3. Performance:
 - <canvas>: Best for performance-heavy tasks like games, animations, and real-time graphics
 - <svg>: Suitable for static images, UI elements, and small interactive graphics

4. Scaling:
 - <canvas>: Can’t be easily scaled (because it's pixel-based)
 - <svg>: Scalable without losing quality (because it's vector-based)

5. Accessibility:
 - <canvas>: Does not provide accessibility (unless manually added via ARIA)
 - <svg>: Can be accessible directly with text descriptions and ARIA roles`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🖌️ Example: Drawing a Rectangle
        </Typography>

        <Typography paragraph>
          Let’s compare how you draw a simple rectangle using both{" "}
          <code>{`<canvas>`}</code> and <code>{`<svg>`}</code>.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Using <code>{`<canvas>`}</code>
        </Typography>

        <CodeBlock
          code={`const canvasRef = useRef(null);
const [canvasColor, setCanvasColor] = useState('blue');

useEffect(() => {
const canvas = canvasRef.current;
const ctx = canvas.getContext('2d');
ctx.fillStyle = canvasColor;
ctx.fillRect(20, 20, 150, 100);  // Draw a rectangle on canvas
}, [canvasColor]);

return <canvas ref={canvasRef} width="400" height="200"></canvas>;`}
        />

        <Box
          sx={{
            border: "2px dashed #90caf9",
            borderRadius: 2,
            mt: 2,
            mb: 4,
            p: 2,
          }}
        >
          <CodeBlock
            code={"<canvas ref={canvasRef} width={400} height={200} />"}
          />
        </Box>

        <CodeBlock
          code={`<Button variant="contained" onClick={() => setCanvasColor("#f44336")}>
          Change Canvas Rectangle Color
        </Button>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          2. Using <code>{`<svg>`}</code>
        </Typography>

        <CodeBlock
          code={`return (
<svg width="400" height="200">
  <rect x="20" y="20" width="150" height="100" fill="blue" />
</svg>
);`}
        />

        <Box
          sx={{
            border: "2px dashed #90caf9",
            borderRadius: 2,
            mt: 2,
            mb: 4,
            p: 2,
          }}
        >
          <svg width="400" height="200">
            <rect x="20" y="20" width="150" height="100" fill="blue" />
          </svg>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ When to Use Which?
        </Typography>

        <Typography paragraph>
          - Use <code>{`<canvas>`}</code> for high-performance graphics like
          games, visualizations, and animations, where you need fast and
          frequent rendering.
        </Typography>
        <Typography paragraph>
          - Use <code>{`<svg>`}</code> for scalable graphics like icons, logos,
          diagrams, and static or small interactive graphics, where you need
          fine-grained control over shapes.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Summary
        </Typography>
        <Typography paragraph>
          - <code>{`<canvas>`}</code> is for bitmap rendering and is ideal for
          performance-sensitive applications.
        </Typography>
        <Typography paragraph>
          - <code>{`<svg>`}</code> is for vector graphics and works better for
          static, scalable, and UI-related tasks.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          🔑 <strong>Tip:</strong> For performance-heavy tasks like animations
          and games, use <code>{`<canvas>`}</code>. For scalable graphics like
          icons and charts, use <code>{`<svg>`}</code>.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "What is the use of the autofocus, required, pattern, and placeholder attributes?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📝 Use of <code>autofocus</code>, <code>required</code>,{" "}
          <code>pattern</code>, and <code>placeholder</code> Attributes
        </Typography>

        <Typography paragraph>
          HTML5 provides several attributes that help improve user experience
          and form validation. Let's dive into four of the most commonly used
          attributes: <code>autofocus</code>, <code>required</code>,{" "}
          <code>pattern</code>, and <code>placeholder</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 1. <code>autofocus</code>
        </Typography>

        <Typography paragraph>
          The <code>autofocus</code> attribute automatically focuses the input
          element when the page loads. This is useful when you want the user to
          immediately start typing in a form field.
        </Typography>

        <CodeBlock code={`<input type="text" autofocus />`} />

        <Typography paragraph>
          This input field will automatically get the focus when the page loads.
          This makes it convenient for quick forms or single-input pages.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ 2. <code>required</code>
        </Typography>

        <Typography paragraph>
          The <code>required</code> attribute indicates that the input field
          must be filled out before submitting the form. This is a simple way to
          enforce that the user cannot skip over critical fields.
        </Typography>

        <CodeBlock code={`<input type="email" required />`} />

        <Typography paragraph>
          In this example, the form will not be submitted unless the email field
          is filled out. The browser will automatically show a validation
          message if the user tries to submit the form without entering a value.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔒 3. <code>pattern</code>
        </Typography>

        <Typography paragraph>
          The <code>pattern</code> attribute allows you to specify a regular
          expression that the input value must match. This is useful for
          validating the format of input, such as phone numbers or postal codes.
        </Typography>

        <CodeBlock
          code={`<input type="text" pattern="\\d{3}-\\d{2}-\\d{4}" title="XXX-XX-XXXX" />`}
        />

        <Typography paragraph>
          In this example, the input field will only accept text that matches
          the specified pattern, which represents a U.S. Social Security Number
          (SSN) format (e.g., "123-45-6789"). If the user enters a value that
          does not match the pattern, the form will not submit, and a validation
          message will appear.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📝 4. <code>placeholder</code>
        </Typography>

        <Typography paragraph>
          The <code>placeholder</code> attribute provides a short hint or
          description within the input field that disappears when the user
          starts typing. It can improve usability by showing examples of the
          expected input format.
        </Typography>

        <CodeBlock
          code={`<input type="text" placeholder="Enter your full name" />`}
        />

        <Typography paragraph>
          In this example, the input field will display "Enter your full name"
          as a hint to the user. Once the user starts typing, the placeholder
          text disappears.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Example: Complete Form with All Attributes
        </Typography>

        <Typography paragraph>
          Below is an example of a form that uses all four attributes together:
        </Typography>

        <CodeBlock
          code={`<form>
<label htmlFor="name">Full Name</label>
<input type="text" id="name" placeholder="Enter your full name" autofocus required />

<label htmlFor="email">Email Address</label>
<input type="email" id="email" placeholder="Enter your email" required />

<label htmlFor="phone">Phone Number</label>
<input type="tel" id="phone" pattern="\\d{3}-\\d{3}-\\d{4}" title="XXX-XXX-XXXX" placeholder="123-456-7890" required />

<button type="submit">Submit</button>
</form>`}
        />

        <Typography paragraph>
          This form includes:
          <ul>
            <li>
              <strong>autofocus</strong> on the "Full Name" field
            </li>
            <li>
              <strong>required</strong> on the email and phone fields
            </li>
            <li>
              <strong>pattern</strong> validation for the phone number
            </li>
            <li>
              <strong>placeholder</strong> text to guide the user
            </li>
          </ul>
          This combination improves the user experience and form validation.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📝 Summary
        </Typography>

        <Typography paragraph>
          - <code>autofocus</code>: Automatically focuses the input field when
          the page loads.
        </Typography>
        <Typography paragraph>
          - <code>required</code>: Ensures the user fills out the field before
          submitting the form.
        </Typography>
        <Typography paragraph>
          - <code>pattern</code>: Enforces a specific input format using regular
          expressions.
        </Typography>
        <Typography paragraph>
          - <code>placeholder</code>: Provides a hint inside the input field,
          improving the user experience.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          💡 <strong>Tip:</strong> Use these attributes together to create more
          user-friendly, accessible, and validated forms.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are contenteditable and spellcheck attributes?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          ✍️ HTML5: <code>contenteditable</code> and <code>spellcheck</code>{" "}
          Attributes
        </Typography>

        <Typography paragraph>
          HTML5 introduces the{" "}
          <strong>
            <code>contenteditable</code>
          </strong>{" "}
          and{" "}
          <strong>
            <code>spellcheck</code>
          </strong>{" "}
          attributes to enhance user interaction with web content.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* contenteditable explanation */}
        <Typography variant="h5" gutterBottom>
          🧠 What is <code>contenteditable</code>?
        </Typography>

        <Typography paragraph>
          The <code>contenteditable</code> attribute allows an HTML element's
          content to be directly editable by the user. This turns any element —
          like a <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, or{" "}
          <code>&lt;span&gt;</code> — into an editable area, just like a text
          input.
        </Typography>

        <CodeBlock
          code={`<div contenteditable="true">
This text can be edited directly in the browser!
</div>`}
        />

        <Typography paragraph>
          When the user clicks inside this <code>&lt;div&gt;</code>, they can
          type and make changes directly — no need for a{" "}
          <code>&lt;textarea&gt;</code> or input element.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* spellcheck explanation */}
        <Typography variant="h5" gutterBottom>
          🔍 What is <code>spellcheck</code>?
        </Typography>

        <Typography paragraph>
          The <code>spellcheck</code> attribute enables or disables the
          browser's built-in spelling and grammar checker. It can be used on
          input fields or editable content like <code>contenteditable</code>{" "}
          elements.
        </Typography>

        <CodeBlock
          code={`<p contenteditable="true" spellcheck="true">
You can edit thiss paragraph and the browser will check spelling.
</p>`}
        />

        <Typography paragraph>
          In this example, incorrect words like <code>"thiss"</code> will be
          underlined by the browser, allowing the user to correct them manually.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* use cases and combined usage */}
        <Typography variant="h5" gutterBottom>
          🧩 Combined Usage
        </Typography>

        <Typography paragraph>
          You can combine both attributes to create editable, spell-checked
          areas. Ideal for:
        </Typography>
        <ul>
          <li>WYSIWYG editors</li>
          <li>Live notes or collaborative text editing</li>
          <li>User-generated content sections (e.g., comments, posts)</li>
        </ul>

        <CodeBlock
          code={`<div contenteditable="true" spellcheck="true">
Try editing this content. It supports spell checking.
</div>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Values
        </Typography>

        <Typography paragraph>
          Both attributes accept the following values:
        </Typography>

        <Typography>
          <strong>
            <code>true</code>
          </strong>
          : Enables editing/spellcheck
          <br />
          <strong>
            <code>false</code>
          </strong>
          : Disables editing/spellcheck
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Best Practices
        </Typography>
        <ul>
          <li>
            Use <code>contenteditable</code> sparingly to avoid confusing the
            user interface.
          </li>
          <li>
            Always test how <code>spellcheck</code> behaves across browsers;
            some behave differently.
          </li>
          <li>
            Consider wrapping editable areas with clear borders or background
            for better UX.
          </li>
          <li>
            Save edited content using JavaScript if needed — it's not saved
            automatically.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Example with Saving Using <code>useState</code> and{" "}
          <code>useEffect</code>
        </Typography>

        <CodeBlock
          code={`const [text, setText] = useState("Edit me!");

useEffect(() => {
const div = document.getElementById("editable");
const handler = () => setText(div?.innerText || "");

div?.addEventListener("input", handler);
return () => div?.removeEventListener("input", handler);
}, []);

return (
<div>
  <div
    id="editable"
    contentEditable="true"
    spellCheck={true}
    style={{ border: "1px solid gray", padding: "1rem" }}
  >
    {text}
  </div>
  <p>Current value: {text}</p>
</div>
);`}
        />

        <Typography paragraph>
          In this example:
          <ul>
            <li>
              We track the content of an editable <code>&lt;div&gt;</code> using
              state.
            </li>
            <li>The content is updated whenever the user changes it.</li>
          </ul>
          This simulates a live editor where changes are instantly available in
          state.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📝 Summary
        </Typography>

        <Typography>
          -{" "}
          <strong>
            <code>contenteditable</code>
          </strong>
          : Makes any element editable by the user.
          <br />-{" "}
          <strong>
            <code>spellcheck</code>
          </strong>
          : Enables or disables spell checking for editable or input elements.
        </Typography>

        <Typography variant="body2" color="text.secondary" mt={3}>
          💡 Combine both for powerful editing interfaces in modern web apps!
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the use of the <progress> and <meter> elements?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🚀 HTML5: <code>&lt;progress&gt;</code> and <code>&lt;meter&gt;</code>{" "}
          Elements
        </Typography>

        <Typography paragraph>
          HTML5 introduces the{" "}
          <strong>
            <code>&lt;progress&gt;</code>
          </strong>{" "}
          and{" "}
          <strong>
            <code>&lt;meter&gt;</code>
          </strong>{" "}
          elements, which are used to represent ongoing progress or
          measurements, respectively. These elements provide native support for
          representing progress and measurements visually and semantically.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Progress element explanation */}
        <Typography variant="h5" gutterBottom>
          📊 <code>&lt;progress&gt;</code> Element: Representing Progress
        </Typography>

        <Typography paragraph>
          The <code>&lt;progress&gt;</code> element is used to represent the
          completion of a task, such as downloading, uploading, or a form
          submission process. It provides a visual indication of how much
          progress has been made.
        </Typography>

        <CodeBlock code={`<progress value="50" max="100">50%</progress>`} />

        <Typography paragraph>
          In the above example, the progress bar represents 50% completion. The{" "}
          <code>value</code> attribute defines the current progress, and the{" "}
          <code>max</code> attribute defines the maximum possible value.
        </Typography>

        <Typography paragraph>
          The text content inside the <code>&lt;progress&gt;</code> tag is
          fallback content for browsers that do not support the{" "}
          <code>&lt;progress&gt;</code> element.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Meter element explanation */}
        <Typography variant="h5" gutterBottom>
          📏 <code>&lt;meter&gt;</code> Element: Representing Measurements
        </Typography>

        <Typography paragraph>
          The <code>&lt;meter&gt;</code> element is used to represent a scalar
          measurement within a known range, such as disk usage, temperature, or
          a rating scale. Unlike the <code>&lt;progress&gt;</code> element, the{" "}
          <code>&lt;meter&gt;</code> element is meant to represent a value that
          is part of a larger scale.
        </Typography>

        <CodeBlock code={`<meter value="0.6" min="0" max="1">60%</meter>`} />

        <Typography paragraph>
          In this example, the <code>&lt;meter&gt;</code> element represents a
          value of 60% within a range of 0 to 1. The <code>min</code> and{" "}
          <code>max</code> attributes define the boundaries of the scale, and
          the <code>value</code> attribute indicates the current measurement.
        </Typography>

        <Typography paragraph>
          Just like the <code>&lt;progress&gt;</code> element, the text inside
          the <code>&lt;meter&gt;</code> element serves as fallback content for
          non-supporting browsers.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Combined usage with React */}
        <Typography variant="h5" gutterBottom>
          ⚙️ Example: Using <code>&lt;progress&gt;</code> and{" "}
          <code>&lt;meter&gt;</code> in React
        </Typography>

        <Typography paragraph>
          Let's combine both elements in a simple React example where we
          simulate task progress and a measurement gauge.
        </Typography>

        <CodeBlock
          code={`import React, { useState, useEffect } from "react";

const ProgressMeterExample = () => {
const [progress, setProgress] = useState(0);
const [value, setValue] = useState(0.5);

useEffect(() => {
  const progressInterval = setInterval(() => {
    setProgress((prev) => (prev < 100 ? prev + 1 : 100));
  }, 100);

  return () => clearInterval(progressInterval);
}, []);

return (
  <div>
    <h3>Task Progress</h3>
    <progress value={progress} max="100">
      {progress}%
    </progress>

    <h3>Measurement Gauge</h3>
    <meter value={value} min="0" max="1">
      {Math.round(value * 100)}%
    </meter>
  </div>
);
};

export default ProgressMeterExample;`}
        />

        <Typography paragraph>
          In this example:
          <ul>
            <li>
              We use <code>&lt;progress&gt;</code> to simulate a task’s progress
              over time.
            </li>
            <li>
              The <code>&lt;meter&gt;</code> element is used to represent a
              measurement value on a scale.
            </li>
            <li>
              We use the <code>useState</code> hook to track progress and value,
              and the <code>useEffect</code> hook to simulate progress updates.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Practical uses */}
        <Typography variant="h5" gutterBottom>
          🎯 Practical Uses of <code>&lt;progress&gt;</code> and{" "}
          <code>&lt;meter&gt;</code>
        </Typography>

        <Typography paragraph>
          Both <code>&lt;progress&gt;</code> and <code>&lt;meter&gt;</code>{" "}
          elements have several practical use cases:
        </Typography>

        <ul>
          <li>Displaying file upload/download progress.</li>
          <li>Visualizing form completion or processing steps.</li>
          <li>Representing scores, ratings, or other measurements.</li>
          <li>
            Simulating system health (e.g., battery status, memory usage).
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Browser Support and Accessibility
        </Typography>

        <Typography paragraph>
          Both the <code>&lt;progress&gt;</code> and <code>&lt;meter&gt;</code>{" "}
          elements are widely supported by modern browsers. They also enhance
          accessibility by providing semantic meaning for progress and
          measurement values, which is useful for screen readers.
        </Typography>

        <Typography variant="body2" color="text.secondary" mt={3}>
          💡 Note: While the elements provide visual feedback, always ensure
          that the values inside are updated dynamically for real-time user
          experience.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is Web Storage API in HTML5?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧑‍💻 Web Storage API in HTML5
        </Typography>

        <Typography paragraph>
          The Web Storage API in HTML5 provides a way to store data in the
          browser, enabling you to persist data between page reloads or even
          across sessions. It includes two primary types of storage:{" "}
          <strong>localStorage</strong> and <strong>sessionStorage</strong>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* LocalStorage Explanation */}
        <Typography variant="h5" gutterBottom>
          📦 <code>localStorage</code>: Persisting Data Across Sessions
        </Typography>

        <Typography paragraph>
          The <code>localStorage</code> object allows you to store data with no
          expiration time. The data remains in the browser even when the user
          closes the browser or navigates to a different page.
        </Typography>

        <CodeBlock
          code={`// Storing data
localStorage.setItem('username', 'john_doe');

// Retrieving data
const username = localStorage.getItem('username');
console.log(username); // "john_doe"

// Removing data
localStorage.removeItem('username');

// Clearing all local storage data
localStorage.clear();`}
        />

        <Typography paragraph>
          In this example:
          <ul>
            <li>
              We use <code>localStorage.setItem()</code> to store a key-value
              pair.
            </li>
            <li>
              We retrieve the stored value using{" "}
              <code>localStorage.getItem()</code>.
            </li>
            <li>
              We remove a specific item using{" "}
              <code>localStorage.removeItem()</code> or clear all data with{" "}
              <code>localStorage.clear()</code>.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* SessionStorage Explanation */}
        <Typography variant="h5" gutterBottom>
          🗄️ <code>sessionStorage</code>: Data Storage for the Session
        </Typography>

        <Typography paragraph>
          Unlike <code>localStorage</code>, <code>sessionStorage</code> stores
          data only for the duration of the page session. The data is cleared
          when the page is closed or the tab is refreshed.
        </Typography>

        <CodeBlock
          code={`// Storing data
sessionStorage.setItem('theme', 'dark');

// Retrieving data
const theme = sessionStorage.getItem('theme');
console.log(theme); // "dark"

// Removing data
sessionStorage.removeItem('theme');

// Clearing all session storage data
sessionStorage.clear();`}
        />

        <Typography paragraph>
          Here’s how <code>sessionStorage</code> works:
          <ul>
            <li>
              Similar to <code>localStorage</code>, but the data is cleared when
              the session ends (i.e., when the tab or window is closed).
            </li>
            <li>
              It’s useful for temporary data storage during the session, like a
              shopping cart state that resets when the browser or tab is closed.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* React Example of Web Storage */}
        <Typography variant="h5" gutterBottom>
          ⚙️ Using Web Storage API in React
        </Typography>

        <Typography paragraph>
          Let’s integrate both <code>localStorage</code> and{" "}
          <code>sessionStorage</code> into a React component. We’ll create a
          simple form that stores a user's theme preference using{" "}
          <code>localStorage</code>.
        </Typography>

        <CodeBlock
          code={`import React, { useState, useEffect } from "react";

const WebStorageExample = () => {
const [theme, setTheme] = useState("light");

useEffect(() => {
  // Retrieve the saved theme from localStorage on component mount
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  }
}, []);

const handleThemeChange = (event) => {
  const newTheme = event.target.value;
  setTheme(newTheme);
  // Save the new theme to localStorage
  localStorage.setItem("theme", newTheme);
};

return (
  <div>
    <h3>Choose your theme</h3>
    <select value={theme} onChange={handleThemeChange}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
);
};

export default WebStorageExample;`}
        />

        <Typography paragraph>
          In this React example:
          <ul>
            <li>
              We use <code>useEffect</code> to fetch the stored theme from{" "}
              <code>localStorage</code> when the component mounts.
            </li>
            <li>
              We store the selected theme in <code>localStorage</code> using{" "}
              <code>localStorage.setItem()</code>.
            </li>
            <li>
              The theme preference persists even after the page is reloaded,
              thanks to <code>localStorage</code>.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Browser Support */}
        <Typography variant="h5" gutterBottom>
          🌐 Browser Support & Limitations
        </Typography>

        <Typography paragraph>
          The Web Storage API is supported by all modern browsers. However, it
          has the following limitations:
        </Typography>

        <ul>
          <li>
            <strong>Storage Capacity:</strong> Both <code>localStorage</code>{" "}
            and <code>sessionStorage</code> typically offer around 5-10MB of
            storage per origin, which is considerably more than cookies.
          </li>
          <li>
            <strong>Same-Origin Policy:</strong> Data stored in one domain
            cannot be accessed by another domain, ensuring privacy and security.
          </li>
          <li>
            <strong>Data Persistence:</strong> <code>localStorage</code>{" "}
            persists even after the browser is closed, whereas{" "}
            <code>sessionStorage</code> is cleared once the tab or window is
            closed.
          </li>
        </ul>

        <Typography variant="body2" color="text.secondary" mt={3}>
          💡 Tip: Use <code>sessionStorage</code> for temporary data that should
          reset after each session and <code>localStorage</code> for data that
          needs to persist across page reloads.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain the purpose of the <datalist> tag.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧑‍💻 <code>&lt;datalist&gt;</code> Tag in HTML5
        </Typography>

        <Typography paragraph>
          The <code>&lt;datalist&gt;</code> tag in HTML5 provides a set of
          predefined options that users can select from while typing in an{" "}
          <code>&lt;input&gt;</code> field. It is commonly used to create an
          autocomplete or suggestion feature for text fields, improving user
          experience and data input accuracy.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📜 Basic Syntax and Structure
        </Typography>

        <Typography paragraph>
          The <code>&lt;datalist&gt;</code> tag contains a series of{" "}
          <code>&lt;option&gt;</code> elements, each representing a suggestion
          or choice. These options are displayed in a dropdown when the user
          starts typing in the associated <code>&lt;input&gt;</code> field.
        </Typography>

        <CodeBlock
          code={`<input list="fruits" name="fruit" id="fruit" />
<datalist id="fruits">
<option value="Apple">
<option value="Banana">
<option value="Cherry">
<option value="Grapes">
</datalist>`}
        />

        <Typography paragraph>
          In this example:
          <ul>
            <li>
              The <code>&lt;input&gt;</code> field has a <code>list</code>{" "}
              attribute linking it to the <code>&lt;datalist&gt;</code> by its
              ID.
            </li>
            <li>
              The <code>&lt;datalist&gt;</code> contains{" "}
              <code>&lt;option&gt;</code> elements that define the suggested
              values.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ How It Works
        </Typography>

        <Typography paragraph>
          When a user starts typing in the <code>&lt;input&gt;</code> field, the
          browser displays a dropdown with options from the linked{" "}
          <code>&lt;datalist&gt;</code>. The user can either select an option or
          continue typing to provide their custom input. If they select an
          option, it is populated into the input field automatically.
        </Typography>

        <Typography paragraph>
          The <code>&lt;datalist&gt;</code> tag does not show up visually on its
          own; it is only visible when linked to an <code>&lt;input&gt;</code>{" "}
          field with the <code>list</code> attribute. The data in the{" "}
          <code>&lt;datalist&gt;</code> is static, but it can be dynamically
          updated using JavaScript if needed.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔄 Using <code>&lt;datalist&gt;</code> for Dynamic Data
        </Typography>

        <Typography paragraph>
          You can use JavaScript to dynamically populate the{" "}
          <code>&lt;datalist&gt;</code> options based on user input or fetched
          data. Below is an example of dynamically adding options to a{" "}
          <code>&lt;datalist&gt;</code> tag using React state.
        </Typography>

        <CodeBlock
          code={`import React, { useState } from "react";

const DynamicDatalist = () => {
const [searchQuery, setSearchQuery] = useState("");
const [suggestions, setSuggestions] = useState([
  "Apple", "Banana", "Orange", "Grapes", "Strawberry"
]);

const handleChange = (event) => {
  setSearchQuery(event.target.value);
  // Optionally, filter suggestions based on input query
  setSuggestions(suggestions.filter(fruit => fruit.toLowerCase().includes(event.target.value.toLowerCase())));
};

return (
  <div>
    <input
      list="fruits"
      name="fruit"
      id="fruit"
      value={searchQuery}
      onChange={handleChange}
    />
    <datalist id="fruits">
      {suggestions.map((fruit, index) => (
        <option key={index} value={fruit} />
      ))}
    </datalist>
  </div>
);
};

export default DynamicDatalist;`}
        />

        <Typography paragraph>
          In this example:
          <ul>
            <li>
              We use React’s <code>useState</code> hook to manage the search
              query and available suggestions.
            </li>
            <li>
              The <code>handleChange</code> function filters the available
              suggestions based on the user’s input, and dynamically updates the{" "}
              <code>&lt;datalist&gt;</code> options.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🌐 Browser Support
        </Typography>

        <Typography paragraph>
          The <code>&lt;datalist&gt;</code> tag is supported in all modern
          browsers (Chrome, Firefox, Safari, Edge), but not in Internet
          Explorer. It’s a simple and effective tool for providing auto-complete
          functionality in HTML forms.
        </Typography>

        <Typography variant="body2" color="text.secondary" mt={3}>
          💡 Tip: Use <code>&lt;datalist&gt;</code> for form fields where
          predefined suggestions can assist users in making quick selections and
          avoiding input errors.
        </Typography>
      </Box>
    ),
  },
];
