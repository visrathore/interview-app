import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const CSS_BEGINNER_DATA = [
  {
    heading: "What is CSS and what are the different types of CSS?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🎨 What is CSS?
        </Typography>
        <Typography paragraph>
          CSS (Cascading Style Sheets) is a stylesheet language used to describe
          the presentation of a document written in HTML or XML. CSS defines how
          elements should be rendered on screen, paper, or in other media.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Types of CSS
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Inline CSS
        </Typography>
        <Typography paragraph>
          Applied directly to an HTML element using the <code>style</code>{" "}
          attribute. It's useful for quick fixes or testing but not ideal for
          maintainability.
        </Typography>
        <CodeBlock
          code={`<h1 style="color: blue; font-size: 24px;">Hello World</h1>`}
        />

        <Typography variant="h6" gutterBottom>
          2. Internal CSS
        </Typography>
        <Typography paragraph>
          Defined within a <code>&lt;style&gt;</code> tag inside the{" "}
          <code>&lt;head&gt;</code>
          section of the HTML document. It applies styles to the entire
          document.
        </Typography>
        <CodeBlock
          code={`<html>
<head>
<style>
  h1 {
    color: red;
    font-size: 24px;
  }
</style>
</head>
<body>
<h1>Hello World</h1>
</body>
</html>`}
        />

        <Typography variant="h6" gutterBottom>
          3. External CSS
        </Typography>
        <Typography paragraph>
          CSS is written in a separate <code>.css</code> file and linked to the
          HTML using the <code>&lt;link&gt;</code> tag. This is the most
          efficient and scalable method.
        </Typography>
        <CodeBlock
          code={`<!-- index.html -->
<head>
<link rel="stylesheet" href="styles.css" />
</head>

<!-- styles.css -->
h1 {
color: green;
font-size: 24px;
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Best Practices
        </Typography>
        <Typography component="ul">
          <li>
            Prefer external CSS for better maintainability and reusability.
          </li>
          <li>Use class selectors instead of inline styles for flexibility.</li>
          <li>
            Separate concerns: HTML for structure, CSS for style, JS for
            behavior.
          </li>
        </Typography>

        <Typography variant="body2" color="text.secondary" mt={2}>
          💡 Tip: Using CSS preprocessors like SASS/SCSS can make managing
          styles easier in larger applications.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the box model in CSS?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📦 CSS Box Model Explained
        </Typography>

        <Typography paragraph>
          The CSS Box Model is a fundamental concept that defines how the size
          of elements is calculated and how elements interact with each other in
          the layout flow. Every HTML element is considered as a rectangular box
          and consists of the following layers:
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Layers of the Box Model
        </Typography>

        <Typography paragraph>
          The box model includes (from inside out):
        </Typography>

        <ul>
          <li>
            <strong>Content:</strong> The actual content like text or images.
          </li>
          <li>
            <strong>Padding:</strong> Space between the content and the border.
          </li>
          <li>
            <strong>Border:</strong> The line around the padding (optional).
          </li>
          <li>
            <strong>Margin:</strong> Space outside the border, separating
            elements.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Visual Representation
        </Typography>

        <Paper
          elevation={3}
          sx={{
            width: 300,
            height: 200,
            backgroundColor: "#e0f7fa",
            padding: 2,
            border: "5px solid #00796b",
            margin: "40px",
            boxSizing: "content-box", // Important!
          }}
        >
          <Typography variant="body2">
            This is an example box with margin, border, and padding applied.
          </Typography>
        </Paper>

        <Typography paragraph>
          In the example above, we're using{" "}
          <code>boxSizing: "content-box"</code> which means the width/height
          includes only the content, and padding/border are added outside of it.
        </Typography>

        <Typography paragraph>
          We could switch to <code>boxSizing: "border-box"</code> to make
          width/height include padding and border.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💻 Code Example
        </Typography>

        <CodeBlock
          code={`.box {
width: 300px;
height: 200px;
padding: 20px;       /* Inside space between content and border */
border: 5px solid #00796b; /* Visible edge around padding */
margin: 40px;        /* Outside space around the box */
box-sizing: content-box; /* Total size = width + padding + border */
}

/* Use border-box to include padding and border in total size */
.box-border-box {
box-sizing: border-box; /* Total size stays 300x200 including padding/border */
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Why <code>box-sizing: border-box</code> is Better
        </Typography>

        <Typography paragraph>
          Modern CSS practices recommend using <code>border-box</code> because
          it simplifies sizing — the declared width/height remains consistent
          regardless of padding and borders:
        </Typography>

        <CodeBlock
          code={`*,
*::before,
*::after {
box-sizing: border-box;
}`}
        />

        <Typography variant="body2" color="text.secondary" mt={4}>
          ✅ Tip: Always use a CSS reset and set{" "}
          <code>box-sizing: border-box</code> globally to avoid confusion with
          element sizing.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is specificity in CSS?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🎯 CSS Specificity Explained
        </Typography>

        <Typography paragraph>
          CSS specificity determines which style rule is applied to an element
          when there are conflicting rules. The more specific a rule is, the
          higher priority it gets.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📊 Specificity Hierarchy (from lowest to highest)
        </Typography>

        <ul>
          <li>
            <strong>Type selectors</strong> (e.g., <code>div</code>,{" "}
            <code>p</code>) – score: <strong>0,0,0,1</strong>
          </li>
          <li>
            <strong>Class, pseudo-class</strong> (e.g., <code>.btn</code>,{" "}
            <code>:hover</code>) – score: <strong>0,0,1,0</strong>
          </li>
          <li>
            <strong>ID selectors</strong> (e.g., <code>#header</code>) – score:{" "}
            <strong>0,1,0,0</strong>
          </li>
          <li>
            <strong>Inline styles</strong> (e.g., <code>style=""</code>) –
            score: <strong>1,0,0,0</strong>
          </li>
          <li>
            <strong>!important</strong> – overrides all but should be avoided.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💻 Code Example
        </Typography>

        <CodeBlock
          code={`/* Type selector: lowest specificity */
div {
color: blue;
}

/* Class selector: higher specificity */
.text-blue {
color: green;
}

/* ID selector: even higher specificity */
#mainText {
color: red;
}

/* Inline style: highest except !important */
/* <div id="mainText" class="text-blue" style="color: purple"> */`}
        />

        <Typography paragraph>
          In the example above, the final color will be <code>purple</code>{" "}
          because inline styles have the highest specificity.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 Avoid Overusing <code>!important</code>
        </Typography>

        <Typography paragraph>
          Using <code>!important</code> can make styles harder to maintain. Only
          use it when absolutely necessary.
        </Typography>

        <CodeBlock
          code={`.btn {
background-color: red !important;
}`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔢 Specificity Calculation Example
        </Typography>

        <CodeBlock
          code={`/* Selector: ul#nav li.active a */
 Specificity:     0,1,1,3  → ID (1), class (1), elements (3)
*/`}
        />

        <Typography variant="body2" color="text.secondary" mt={4}>
          ✅ Tip: Use browser dev tools to inspect computed styles and
          understand why a certain rule is applied.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the difference between em, rem, %, and px units?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📐 CSS Units: em, rem, %, and px
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            🔸 1. <code>px</code> (Pixels)
          </Typography>
          <Typography variant="body1">
            - Absolute unit.
            <br />
            - Fixed size regardless of the user’s screen size or zoom settings.
            <br />- Ideal for precision, but not flexible for responsive
            designs.
          </Typography>

          <Box
            mt={2}
            sx={{
              width: "200px",
              height: "50px",
              backgroundColor: "#1976d2",
              color: "white",
              fontSize: "16px", // fixed pixel size
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            16px text
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            🔸 2. <code>em</code> (Relative to Parent)
          </Typography>
          <Typography variant="body1">
            - Relative to the **font size of the parent element**.
            <br />- Stacks up with nesting, which can cause compounding.
          </Typography>

          <Box mt={2} sx={{ fontSize: "20px" }}>
            <Box
              sx={{
                fontSize: "1em", // 20px
                backgroundColor: "#43a047",
                color: "white",
                p: 1,
                mb: 1,
              }}
            >
              1em = 20px (parent = 20px)
            </Box>
            <Box
              sx={{
                fontSize: "2em", // 40px
                backgroundColor: "#2e7d32",
                color: "white",
                p: 1,
              }}
            >
              2em = 40px (parent = 20px)
            </Box>
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            🔸 3. <code>rem</code> (Relative to Root)
          </Typography>
          <Typography variant="body1">
            - Relative to the **root (html) element’s font size**.
            <br />- Avoids compounding problems of `em` and provides better
            consistency.
          </Typography>

          <Box mt={2} sx={{ fontSize: "1rem" }}>
            <Box
              sx={{
                fontSize: "1rem", // default 16px
                backgroundColor: "#f57c00",
                color: "white",
                p: 1,
                mb: 1,
              }}
            >
              1rem = 16px (based on html root)
            </Box>
            <Box
              sx={{
                fontSize: "2rem", // 32px
                backgroundColor: "#ef6c00",
                color: "white",
                p: 1,
              }}
            >
              2rem = 32px (based on html root)
            </Box>
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            🔸 4. <code>%</code> (Relative to Parent Element)
          </Typography>
          <Typography variant="body1">
            - Relative unit used mostly for **width, height, padding**, etc.
            <br />- 100% means same as the parent size.
          </Typography>

          <Box
            mt={2}
            sx={{
              width: "300px",
              height: "100px",
              backgroundColor: "#5e35b1",
              p: 2,
              color: "white",
              fontSize: "16px",
            }}
          >
            <Box
              sx={{
                width: "50%", // 150px
                height: "100%",
                backgroundColor: "#7e57c2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              50% width
            </Box>
          </Box>
        </Paper>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Summary Table
        </Typography>
        <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
          <ul>
            <li>
              <strong>px</strong>: Fixed, not responsive.
            </li>
            <li>
              <strong>em</strong>: Relative to parent, can compound.
            </li>
            <li>
              <strong>rem</strong>: Relative to root, consistent and scalable.
            </li>
            <li>
              <strong>%</strong>: Relative to parent dimensions.
            </li>
          </ul>
        </Paper>
      </Box>
    ),
  },
  {
    heading:
      "What is the difference between position: relative, absolute, fixed, and sticky?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📌 CSS Positioning: relative, absolute, fixed, sticky
        </Typography>

        {/* RELATIVE */}
        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            🔹 position: relative
          </Typography>
          <Typography variant="body1">
            - The element is positioned relative to its **normal position**.
            <br />- You can use `top`, `left`, `right`, `bottom` to offset it.
          </Typography>
          <Box
            mt={2}
            sx={{
              position: "relative",
              top: "10px",
              left: "20px",
              backgroundColor: "#90caf9",
              p: 2,
            }}
          >
            Moved 10px down, 20px right from normal position
          </Box>
        </Paper>

        {/* ABSOLUTE */}
        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            🔹 position: absolute
          </Typography>
          <Typography variant="body1">
            - The element is positioned relative to the **nearest positioned
            ancestor** (not static).
            <br />- If no ancestor is positioned, it's relative to `body` tag.
          </Typography>
          <Box
            sx={{
              position: "relative",
              height: 100,
              backgroundColor: "#f8bbd0",
              mt: 2,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 10,
                left: 20,
                backgroundColor: "#ec407a",
                p: 2,
                color: "white",
              }}
            >
              Absolutely positioned inside relative parent
            </Box>
          </Box>
        </Paper>

        {/* FIXED */}
        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            🔹 position: fixed
          </Typography>
          <Typography variant="body1">
            - The element is positioned **relative to the viewport**.
            <br />- It stays in the same place even when the page is scrolled.
          </Typography>
          <Box
            sx={{
              position: "fixed",
              bottom: 10,
              right: 10,
              backgroundColor: "#66bb6a",
              color: "white",
              p: 2,
              zIndex: 1000,
            }}
          >
            Fixed at bottom right of screen
          </Box>
        </Paper>

        {/* STICKY */}
        <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            🔹 position: sticky
          </Typography>
          <Typography variant="body1">
            - The element is treated as relative **until a threshold is met**,
            then sticks like fixed.
            <br />- Useful for sticky headers.
          </Typography>
          <Box
            sx={{
              height: "150px",
              overflowY: "scroll",
              border: "1px solid #ccc",
              p: 2,
            }}
          >
            <Box
              sx={{
                position: "sticky",
                top: 0,
                backgroundColor: "#ffa726",
                color: "white",
                p: 1,
              }}
            >
              Sticky Header
            </Box>
            <Typography variant="body2" mt={2}>
              Scroll to see how sticky behaves compared to other positions.
              Sticky behaves like relative until its container is scrolled past
              the threshold.
            </Typography>
            <Box height="200px" />
          </Box>
        </Paper>
      </Box>
    ),
  },
  {
    heading:
      "What is the difference between visibility: hidden and display: none?",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom>
          Difference between <code>visibility: hidden</code> and{" "}
          <code>display: none</code>
        </Typography>

        <Stack spacing={4}>
          {/* Visibility Hidden */}
          <Paper elevation={3} sx={{ p: 3, borderLeft: "5px solid #ff9800" }}>
            <Typography variant="h6" color="primary">
              visibility: hidden
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              The element is not visible to the user, but it still takes up
              space in the layout.
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: "green",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Visible Box
              </Box>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: "red",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  visibility: "hidden",
                }}
              >
                Hidden Box
              </Box>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: "blue",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Visible Box
              </Box>
            </Box>
          </Paper>

          {/* Display None */}
          <Paper elevation={3} sx={{ p: 3, borderLeft: "5px solid #4caf50" }}>
            <Typography variant="h6" color="primary">
              display: none
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              The element is removed from the layout, so it doesn't take up any
              space.
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: "green",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Visible Box
              </Box>
              {/* This box is not rendered at all */}
              {/* <Box sx={{ width: 100, height: 100, bgcolor: 'red', color: '#fff', display: 'none', alignItems: 'center', justifyContent: 'center' }}>
            Hidden Box
          </Box> */}
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: "blue",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Visible Box
              </Box>
            </Box>
          </Paper>
        </Stack>
      </Box>
    ),
  },
  {
    heading: "What is the z-index in CSS?",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f0f4f8" }}>
        <Typography variant="h4" gutterBottom>
          🔢 Understanding <code>z-index</code> in CSS
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          The <code>z-index</code> property determines the stack order of
          elements. A higher value will place an element on top of others.
        </Typography>

        <Paper sx={{ p: 2, bgcolor: "#fff", mb: 3 }} elevation={2}>
          <Typography variant="h6" color="primary" gutterBottom>
            🎨 Live Layout Example
          </Typography>

          {/* Stack of boxes with different z-index values */}
          <Box
            sx={{
              position: "relative",
              width: 300,
              height: 300,
              border: "1px dashed #ccc",
            }}
          >
            {/* Box with z-index: 1 */}
            <Box
              sx={{
                position: "absolute",
                width: 200,
                height: 200,
                top: 40,
                left: 40,
                bgcolor: "lightblue",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #0288d1",
              }}
            >
              z-index: 1
            </Box>

            {/* Box with z-index: 3 (appears on top) */}
            <Box
              sx={{
                position: "absolute",
                width: 200,
                height: 200,
                top: 80,
                left: 80,
                bgcolor: "lightgreen",
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #388e3c",
              }}
            >
              z-index: 3
            </Box>

            {/* Box with z-index: 2 (middle layer) */}
            <Box
              sx={{
                position: "absolute",
                width: 200,
                height: 200,
                top: 120,
                left: 120,
                bgcolor: "lightcoral",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #c62828",
              }}
            >
              z-index: 2
            </Box>
          </Box>
        </Paper>

        <Paper sx={{ p: 2, bgcolor: "#fff" }} elevation={2}>
          <Typography variant="h6" color="primary" gutterBottom>
            📘 Summary
          </Typography>
          <ul>
            <li>
              <Typography>
                <strong>Only works on positioned elements</strong> (i.e.,
                elements with{" "}
                <code>position: relative | absolute | fixed | sticky</code>).
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Higher values appear on top</strong> of lower ones.
              </Typography>
            </li>
            <li>
              <Typography>
                Default value is <code>auto</code>, which means the browser
                determines stack order.
              </Typography>
            </li>
            <li>
              <Typography>
                Can be used for modals, overlays, dropdowns, and tooltips.
              </Typography>
            </li>
          </ul>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "What are pseudo-classes and pseudo-elements?",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f5f5f5" }}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🎯 Pseudo-classes vs Pseudo-elements in CSS
        </Typography>

        {/* Pseudo-classes Explanation */}
        <Paper sx={{ p: 3, mb: 4 }} elevation={3}>
          <Typography variant="h5" color="primary" gutterBottom>
            🔹 Pseudo-classes (`:`)
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Pseudo-classes target elements based on **their state**, position,
            or interaction, such as <code>:hover</code>,{" "}
            <code>:first-child</code>, or <code>:checked</code>.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            🧪 Example: Button with `:hover` and `:active`
          </Typography>

          {/* Styled box to mimic pseudo-class styles */}
          <Box
            sx={{
              p: 2,
              width: "fit-content",
              border: "2px solid #2196f3",
              borderRadius: "8px",
              color: "#2196f3",
              fontWeight: 500,
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "#2196f3",
                color: "#fff",
                cursor: "pointer",
              },
              "&:active": {
                backgroundColor: "#1769aa",
              },
            }}
          >
            Hover & Click Me!
          </Box>

          <Typography sx={{ mt: 2 }}>
            When you hover or click the box, different styles are applied using
            pseudo-classes.
          </Typography>
        </Paper>

        {/* Pseudo-elements Explanation */}
        <Paper sx={{ p: 3 }} elevation={3}>
          <Typography variant="h5" color="primary" gutterBottom>
            🔸 Pseudo-elements (`::`)
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Pseudo-elements style specific **parts of elements**. Examples
            include <code>::before</code>, <code>::after</code>, and{" "}
            <code>::first-line</code>.
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            🧪 Example: Adding text with `::before` and `::after`
          </Typography>

          {/* Box using ::before and ::after styling */}
          <Box
            sx={{
              p: 2,
              border: "2px dashed #4caf50",
              position: "relative",
              width: "fit-content",
              fontSize: "1.1rem",
              "&::before": {
                content: '"💬 Start - "',
                color: "#4caf50",
                fontWeight: "bold",
              },
              "&::after": {
                content: '" - End 💬"',
                color: "#4caf50",
                fontWeight: "bold",
              },
            }}
          >
            This is the core content.
          </Box>

          <Typography sx={{ mt: 2 }}>
            The extra text before and after is styled with <code>::before</code>{" "}
            and <code>::after</code>, without modifying the HTML!
          </Typography>
        </Paper>

        {/* Summary */}
        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            📘 Summary
          </Typography>
          <ul>
            <li>
              <Typography>
                <strong>Pseudo-classes</strong> use <code>:</code> and select
                elements by state or position (e.g., <code>:hover</code>,{" "}
                <code>:nth-child()</code>).
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>Pseudo-elements</strong> use <code>::</code> and style
                parts of an element (e.g., <code>::before</code>,{" "}
                <code>::first-letter</code>).
              </Typography>
            </li>
            <li>
              <Typography>
                Both help reduce extra markup and enhance styling without
                additional classes.
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    ),
  },
];
