import { Box, Divider, Paper, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const CSS_ADVANCED_DATA = [
  {
    heading:
      "What is the difference between @import and <link> for stylesheets?",
    content: (
      <Box p={4} display="flex" flexDirection="column" gap={4}>
        <Typography variant="h4" gutterBottom>
          🎯 Difference Between <code>@import</code> and{" "}
          <code>&lt;link&gt;</code> in CSS
        </Typography>

        {/* <link> explanation */}
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3, bgcolor: "#f3f3f3" }}>
          <Typography variant="h6" gutterBottom>
            🔗 1. Using <code>&lt;link&gt;</code> Tag
          </Typography>
          <Typography variant="body1">
            The <code>&lt;link&gt;</code> element is used in the{" "}
            <strong>HTML</strong> document's <code>&lt;head&gt;</code> to load
            an external stylesheet.
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box
            component="pre"
            sx={{
              bgcolor: "#1e1e1e",
              color: "white",
              p: 2,
              borderRadius: 2,
              overflowX: "auto",
            }}
          >
            {`<!-- Recommended way to include external stylesheets -->
<head>
<link rel="stylesheet" href="styles.css" />
</head>`}
          </Box>
          <Typography variant="body2" mt={2}>
            ✅ Loads styles **immediately** and **non-blocking** with{" "}
            <code>media</code> attribute control. <br />✅ Preferred for
            **performance** and **SEO**.
          </Typography>
        </Paper>

        {/* @import explanation */}
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3, bgcolor: "#e0f7fa" }}>
          <Typography variant="h6" gutterBottom>
            📥 2. Using <code>@import</code> in CSS
          </Typography>
          <Typography variant="body1">
            The <code>@import</code> rule is used inside CSS files to load other
            stylesheets.
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box
            component="pre"
            sx={{
              bgcolor: "#1e1e1e",
              color: "white",
              p: 2,
              borderRadius: 2,
              overflowX: "auto",
            }}
          >
            {`/* Used inside a CSS file */
@import url("base.css");

body {
background-color: #f8f8f8;
}`}
          </Box>
          <Typography variant="body2" mt={2}>
            ⚠️ Loads styles <strong>after</strong> the main CSS file is parsed.{" "}
            <br />
            ⚠️ **Blocks rendering** and causes **performance issues** if
            overused. <br />
            🚫 Not ideal for critical styles or responsive designs.
          </Typography>
        </Paper>

        {/* Comparison Table */}
        <Paper
          elevation={1}
          sx={{ p: 3, bgcolor: "#fffde7", borderLeft: "6px solid #ffca28" }}
        >
          <Typography variant="h6" gutterBottom>
            📊 Key Differences
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Box
            component="table"
            sx={{ width: "100%", mt: 2, borderCollapse: "collapse" }}
          >
            <Box component="thead" sx={{ bgcolor: "#f9fbe7" }}>
              <Box component="tr">
                <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                  Feature
                </Box>
                <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                  <code>&lt;link&gt;</code>
                </Box>
                <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                  <code>@import</code>
                </Box>
              </Box>
            </Box>
            <Box component="tbody">
              <Box component="tr">
                <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                  Where used
                </Box>
                <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                  HTML
                </Box>
                <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                  CSS
                </Box>
              </Box>
              <Box component="tr">
                <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                  Performance
                </Box>
                <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                  Faster
                </Box>
                <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                  Slower
                </Box>
              </Box>
              <Box component="tr">
                <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                  Media Queries
                </Box>
                <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                  Supported
                </Box>
                <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                  Limited
                </Box>
              </Box>
              <Box component="tr">
                <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                  Used For
                </Box>
                <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                  Main stylesheets
                </Box>
                <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                  Modular/internal styles
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>

        <Paper
          elevation={1}
          sx={{ p: 2, bgcolor: "#e8f5e9", borderLeft: "6px solid green" }}
        >
          <Typography variant="body2">
            ✅ <strong>Best Practice:</strong> Use <code>&lt;link&gt;</code> in
            production HTML for loading stylesheets. Use <code>@import</code>{" "}
            only when nesting CSS inside preprocessor files like SCSS.
          </Typography>
        </Paper>
      </Box>
    ),
  },
  {
    heading:
      "What are custom properties (CSS variables) and how are they used?",
    content: (
      <Box sx={{ p: 4 }}>
        <Paper elevation={3} sx={{ p: 3, backgroundColor: "#f5f5f5" }}>
          <Typography variant="h5" gutterBottom>
            🌈 CSS Custom Properties (CSS Variables)
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            CSS variables are defined using the <code>--variable-name</code>{" "}
            syntax and accessed using the <code>var(--variable-name)</code>{" "}
            function.
          </Typography>

          <Typography variant="h6" gutterBottom>
            📄 CSS Code:
          </Typography>

          <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#fff" }}>
            <pre>{`
:root {
--main-bg-color: #e3f2fd; /* Define a variable on root */
--primary-color: #1976d2;
--padding: 1rem;
}

.box {
background-color: var(--main-bg-color); /* Use variable */
color: var(--primary-color);
padding: var(--padding);
border-radius: 8px;
}
        `}</pre>
          </Paper>

          <Typography variant="h6" sx={{ mt: 3 }}>
            🧪 HTML Usage:
          </Typography>

          <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#fff" }}>
            <pre>{`
<div class="box">
I use CSS variables for background, text color, and padding!
</div>
        `}</pre>
          </Paper>

          <Typography variant="h6" sx={{ mt: 3 }}>
            🔁 Overriding Variables Locally:
          </Typography>

          <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#fff" }}>
            <pre>{`
.container {
--primary-color: red; /* Override inside this scope */
}
        `}</pre>
          </Paper>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Note: CSS variables follow the normal rules of inheritance. If a
            variable is not found in the current scope, it will look up the
            hierarchy.
          </Typography>
        </Paper>
      </Box>
    ),
  },
  {
    heading:
      "What is the difference between logical and physical properties in CSS?",
    content: (
      <Box sx={{ p: 4 }}>
        <Paper elevation={3} sx={{ p: 3, backgroundColor: "#f0f4ff" }}>
          <Typography variant="h4" gutterBottom>
            📦 CSS Logical vs Physical Properties
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Logical properties allow layout to adapt based on writing mode,
            making your UI flexible and ready for RTL or vertical languages.
          </Typography>

          <Typography variant="h6" gutterBottom>
            🏷️ Physical CSS Example:
          </Typography>
          <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#fff" }}>
            <pre>{`
.box-physical {
margin-left: 20px;    // Always left, regardless of writing mode
padding-top: 10px;    // Always top
border-right: 2px solid blue;
width: 300px;
}
        `}</pre>
          </Paper>

          <Typography variant="h6" sx={{ mt: 3 }}>
            🔁 Logical CSS Example:
          </Typography>
          <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#fff" }}>
            <pre>{`
.box-logical {
margin-inline-start: 20px;   // Adjusts based on LTR or RTL
padding-block-start: 10px;   // Top in horizontal, left in vertical writing
border-inline-end: 2px solid blue; // Right border in LTR, left in RTL
inline-size: 300px;          // Width in inline direction
}
        `}</pre>
          </Paper>

          <Typography variant="h6" sx={{ mt: 3 }}>
            🌍 Use Case: Internationalization
          </Typography>
          <Typography variant="body2">
            If your site switches between English (LTR) and Arabic (RTL),
            logical properties will **automatically adjust**
            margin/padding/direction **without manual changes**.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3 }}>
            💡 Helpful Logical Properties:
          </Typography>
          <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#fff" }}>
            <pre>{`
/* Margin */
margin-inline-start / end
margin-block-start / end

/* Padding */
padding-inline-start / end
padding-block-start / end

/* Border */
border-inline / border-block
border-inline-start / end
border-block-start / end

/* Dimensions */
inline-size (≅ width)
block-size (≅ height)
        `}</pre>
          </Paper>

          <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
            ✨ Tip: Combine logical properties with responsive techniques for a
            future-proof UI.
          </Typography>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "Explain the concept of specificity and the cascade in CSS.",
    content: (
      <Box sx={{ p: 4 }}>
        <Paper elevation={3} sx={{ p: 3, backgroundColor: "#f4f6fa" }}>
          <Typography variant="h4" gutterBottom>
            🎯 CSS Specificity and Cascade Explained
          </Typography>

          <Typography variant="h6" gutterBottom>
            🔢 What is Specificity?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Specificity is a score (or weight) given to a CSS rule depending on
            the types of selectors used. The browser uses it to decide which
            rule to apply when multiple rules target the same element.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2 }}>
            The specificity hierarchy (from lowest to highest):
            <ul>
              <li>Universal Selector (*) – 0,0,0</li>
              <li>Element Selector – 0,0,1</li>
              <li>Class / Attribute / Pseudo-class – 0,1,0</li>
              <li>ID Selector – 1,0,0</li>
              <li>Inline Style – 1,0,0 (higher than selectors)</li>
              <li>!important – Overrides everything (last resort)</li>
            </ul>
          </Typography>

          <Typography variant="h6" gutterBottom>
            🧠 Specificity Example:
          </Typography>
          <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#fff" }}>
            <pre>{`
/* Specificity: 0,0,1 */
p { color: blue; }

/* Specificity: 0,1,0 */
.text { color: green; }

/* Specificity: 1,0,0 */
#para { color: red; }

/* Inline Style – Highest */
<p id="para" class="text" style="color: orange;">Hello</p>
        `}</pre>
          </Paper>
          <Typography variant="body2">
            Result: <strong>Orange</strong> wins because it's an inline style.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3 }}>
            🌊 What is the CSS Cascade?
          </Typography>
          <Typography variant="body1" gutterBottom>
            The Cascade is the set of rules the browser uses to determine which
            style should be applied when multiple rules target the same element.
          </Typography>

          <Typography variant="body2">
            The cascade follows these principles:
            <ul>
              <li>
                <strong>Importance</strong> – !important rules win
              </li>
              <li>
                <strong>Origin</strong> – Author styles beat browser styles
              </li>
              <li>
                <strong>Specificity</strong> – More specific selectors win
              </li>
              <li>
                <strong>Order</strong> – Later rules override earlier ones if
                all else is equal
              </li>
            </ul>
          </Typography>

          <Typography variant="h6" sx={{ mt: 3 }}>
            💡 Example of Cascade in Action:
          </Typography>
          <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#fff" }}>
            <pre>{`
/* Browser default */
p { color: black; }

/* Author style 1 */
p { color: blue; }

/* Author style 2 */
p { color: red !important; }

/* Order of appearance */
p { color: green; } // Ignored due to !important in the previous rule
        `}</pre>
          </Paper>
          <Typography variant="body2">
            Final Result: <strong>Red</strong> is applied due to{" "}
            <code>!important</code>.
          </Typography>

          <Typography variant="h6" sx={{ mt: 3 }}>
            ✅ Tips for Managing Specificity and Cascade:
          </Typography>
          <ul>
            <li>Use classes instead of IDs for styling</li>
            <li>Organize styles from general to specific</li>
            <li>
              Avoid <code>!important</code> unless absolutely necessary
            </li>
            <li>Understand selector weight before overriding styles</li>
          </ul>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "What is the stacking context and how does it affect z-index?",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom>
          🧱 Understanding Stacking Context & z-index in CSS
        </Typography>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧾 What is a Stacking Context?
          </Typography>
          <Typography>
            A stacking context is an imaginary layer that determines how
            elements are stacked (rendered) along the z-axis (front-to-back).
            It’s created by certain CSS properties like <code>position</code>,{" "}
            <code>z-index</code>,<code>opacity</code>, <code>transform</code>,
            and more. Elements inside a stacking context are rendered in a
            specific order, independent of elements in other stacking contexts.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🔍 How z-index Works with Stacking Contexts
          </Typography>
          <Typography>
            The <code>z-index</code> only affects stacking within the **same
            stacking context**. If two elements belong to different contexts,
            their stacking depends on the order of those contexts, not their
            individual z-index values.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            💡 Code Example: Nested Stacking Contexts
          </Typography>
          <Typography gutterBottom>
            Below is an example with comments showing how stacking context
            affects layering:
          </Typography>
          <CodeBlock
            code={`/* Parent creates a stacking context due to position + z-index */
  .parent {
    position: relative;
    z-index: 1;
  }
  
  /* Child inside parent - this z-index is relative to .parent's stacking context */
  .child {
    position: absolute;
    z-index: 999; /* Still stays under .overlay if overlay has higher z-index in a different context */
  }
  
  /* Overlay creates its own stacking context due to transform */
  .overlay {
    position: fixed;
    transform: scale(1); /* triggers a new stacking context */
    z-index: 10;
  }`}
          />
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧩 Visual Order of Stacking Contexts
          </Typography>
          <Typography>
            Think of each stacking context like a transparent sheet. You can
            have elements with a higher <code>z-index</code> within one sheet,
            but if that entire sheet is beneath another stacking context
            (sheet), you can't overlap elements from the lower sheet on top of
            the higher one.
          </Typography>
        </Paper>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            🔧 Triggers for New Stacking Contexts
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              <code>position: absolute | relative | fixed | sticky</code> +{" "}
              <code>z-index</code>
            </li>
            <li>
              <code>opacity &lt; 1</code>
            </li>
            <li>
              <code>transform, filter, perspective</code>
            </li>
            <li>
              <code>will-change</code> or <code>mix-blend-mode</code>
            </li>
          </Box>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            ⚙️ Best Practices
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              Minimize use of <code>z-index</code> to reduce conflicts.
            </li>
            <li>Understand and control where stacking contexts are created.</li>
            <li>
              Avoid deeply nested stacking contexts unless necessary, as it
              makes layering harder to manage.
            </li>
            <li>
              Use browser dev tools to inspect stacking context visually (e.g.,
              in Chrome DevTools, inspect element → "Layout" → enable "Paint
              Flashing").
            </li>
          </Box>
        </Box>

        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📘 Summary
          </Typography>
          <Typography>
            <strong>Stacking contexts</strong> group elements into separate
            rendering layers. The <code>z-index</code> controls layering
            *within* a context, but different contexts layer based on their own
            hierarchy.
          </Typography>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "How does calc() work in CSS?",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom>
          ➗ Mastering <code>calc()</code> in CSS
        </Typography>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧾 What is <code>calc()</code>?
          </Typography>
          <Typography>
            <code>calc()</code> is a CSS function that allows you to perform
            basic mathematical operations like addition, subtraction,
            multiplication, and division directly within your CSS. It’s
            especially useful when combining different units like percentages
            and pixels.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🔍 Syntax & Supported Operations
          </Typography>
          <Typography component="ul" sx={{ pl: 4 }}>
            <li>
              <strong>Addition:</strong> <code>calc(100% + 20px)</code>
            </li>
            <li>
              <strong>Subtraction:</strong> <code>calc(100vh - 80px)</code>
            </li>
            <li>
              <strong>Multiplication:</strong> <code>calc(2 * 1em)</code>
            </li>
            <li>
              <strong>Division:</strong> <code>calc(100% / 3)</code>
            </li>
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <strong>Important:</strong> Always include spaces around operators (
            <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>) to
            avoid parsing errors.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            💡 Example: Responsive Width with <code>calc()</code>
          </Typography>
          <Typography gutterBottom>
            Let's say you want an element to always be 100% wide minus a sidebar
            of 250px:
          </Typography>
          <CodeBlock
            code={`.main-content {
    width: calc(100% - 250px); /* takes full width minus sidebar */
    padding: 20px;
  }`}
          />
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            📐 Example: Full Viewport Height Minus Header
          </Typography>
          <Typography gutterBottom>
            Perfect for layouts where you want the body to fill the screen minus
            a fixed header:
          </Typography>
          <CodeBlock
            code={`.content {
    height: calc(100vh - 60px); /* full height minus header */
    overflow-y: auto;
  }`}
          />
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧩 Advanced Example: Centering with <code>calc()</code>
          </Typography>
          <Typography gutterBottom>
            You can combine <code>calc()</code> with positioning to center
            elements:
          </Typography>
          <CodeBlock
            code={`.box {
    position: absolute;
    top: calc(50% - 50px); /* 50% from top, then shift back by half of box height */
    left: calc(50% - 50px); /* same for horizontal */
    width: 100px;
    height: 100px;
    background-color: teal;
  }`}
          />
        </Paper>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            ⚙️ Best Practices
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              Always use spaces around operators inside <code>calc()</code>.
            </li>
            <li>
              Use <code>calc()</code> to mix units like <code>%</code>,{" "}
              <code>px</code>, <code>em</code>, etc.
            </li>
            <li>
              Use for layouts that need precise dynamic sizing (e.g.,
              full-height sections minus headers or footers).
            </li>
            <li>
              Don’t overuse — if Flexbox or Grid can solve it cleaner, use those
              instead.
            </li>
          </Box>
        </Box>

        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📘 Summary
          </Typography>
          <Typography>
            The <code>calc()</code> function brings math to your stylesheets!
            It’s a powerful tool for building flexible, responsive, and adaptive
            layouts when combined thoughtfully with modern layout techniques.
          </Typography>
        </Paper>
      </Box>
    ),
  },
  {
    heading:
      "What is the difference between auto, 0, and none in margin and width contexts?",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom>
          📏 Understanding <code>auto</code>, <code>0</code>, and{" "}
          <code>none</code> in Margin & Width
        </Typography>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧾 Core Differences in Meaning
          </Typography>
          <Typography>
            These values control layout behavior in distinct ways:
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              <strong>
                <code>auto</code>
              </strong>{" "}
              — Automatically adjusts based on content or available space.
            </li>
            <li>
              <strong>
                <code>0</code>
              </strong>{" "}
              — Removes margin/padding/width entirely (sets it to nothing).
            </li>
            <li>
              <strong>
                <code>none</code>
              </strong>{" "}
              — Used for properties like <code>display</code> or{" "}
              <code>border</code>; not valid for <code>margin</code> or{" "}
              <code>width</code>.
            </li>
          </Box>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            💡 Example: Centering with <code>margin: auto</code>
          </Typography>
          <Typography gutterBottom>
            Using <code>margin: auto</code> to horizontally center a block-level
            element:
          </Typography>
          <CodeBlock
            code={`.centered-box {
    width: 200px;
    margin-left: auto; /* take remaining space on the left */
    margin-right: auto; /* take remaining space on the right */
  }`}
          />
          <Typography>
            ✅ This works **only if the element has a defined width** and is a
            block-level element.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧯 Example: Resetting Margin or Width with <code>0</code>
          </Typography>
          <Typography gutterBottom>
            <code>0</code> is used to completely remove spacing or sizing:
          </Typography>
          <CodeBlock
            code={`.reset-box {
    margin: 0;    /* removes all margin */
    padding: 0;   /* removes all padding */
    width: 0;     /* element will have no width */
  }`}
          />
          <Typography>
            ⚠️ Be cautious — setting <code>width: 0</code> will make the element
            invisible unless overridden by content or other styles.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🚫 Why <code>none</code> Doesn't Work with Margin/Width
          </Typography>
          <Typography>
            The keyword <code>none</code> is **not valid** for{" "}
            <code>margin</code> or <code>width</code>. It's commonly used with:
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              <code>display: none</code> — hides the element from layout and
              rendering
            </li>
            <li>
              <code>border: none</code> — removes borders
            </li>
            <li>
              <code>outline: none</code> — removes focus outlines
            </li>
          </Box>
          <CodeBlock
            code={`.hidden-element {
    display: none;  /* completely removes from document flow */
  }
  
  .button {
    border: none;   /* removes border */
    outline: none;  /* removes focus ring (use with care for accessibility) */
  }`}
          />
        </Paper>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            ⚙️ Best Practices
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              Use <code>margin: auto</code> to center block elements
              horizontally.
            </li>
            <li>
              Use <code>0</code> to reset or remove spacing entirely.
            </li>
            <li>
              Avoid using <code>none</code> on width or margin — it's not
              supported there.
            </li>
            <li>
              Combine <code>auto</code> with Flexbox/Grid for more responsive
              alignment.
            </li>
          </Box>
        </Box>

        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📘 Summary
          </Typography>
          <Typography>
            <strong>
              <code>auto</code>
            </strong>{" "}
            lets the browser calculate spacing/sizing dynamically,
            <strong>
              {" "}
              <code>0</code>
            </strong>{" "}
            removes it completely, and{" "}
            <strong>
              <code>none</code>
            </strong>{" "}
            should only be used with properties like <code>display</code> or{" "}
            <code>border</code>. Knowing when and where to use each can greatly
            enhance layout control and code clarity.
          </Typography>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "What is block,inline and inline-block?",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom>
          🧱 Understanding <code>block</code>, <code>inline</code>, and{" "}
          <code>inline-block</code> in CSS
        </Typography>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧾 Overview
          </Typography>
          <Typography>
            In CSS, the{" "}
            <strong>
              <code>display</code>
            </strong>{" "}
            property determines how an element behaves in the layout. The values
            <code>block</code>, <code>inline</code>, and{" "}
            <code>inline-block</code> are fundamental to layout flow.
          </Typography>
        </Paper>

        {/* Block */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            📦 <code>display: block</code>
          </Typography>
          <Typography>A block-level element:</Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>Starts on a new line</li>
            <li>Stretches to fill the entire width of its parent container</li>
            <li>Respects width, height, padding, and margin</li>
          </Box>
          <CodeBlock
            code={`.block-box {
    display: block;
    width: 200px;
    height: 100px;
    background-color: #4caf50;
    margin-bottom: 16px;
  }`}
          />
        </Paper>

        {/* Inline */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧵 <code>display: inline</code>
          </Typography>
          <Typography>An inline element:</Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>Does not start on a new line</li>
            <li>Only takes up as much width as its content</li>
            <li>Ignores width and height settings</li>
          </Box>
          <CodeBlock
            code={`.inline-text {
    display: inline;
    background-color: #ffeb3b;
    padding: 4px; /* padding works, but width/height are ignored */
    margin: 0 4px;
  }`}
          />
        </Paper>

        {/* Inline-block */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧩 <code>display: inline-block</code>
          </Typography>
          <Typography>An inline-block element:</Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>Stays in the flow like inline elements</li>
            <li>
              Can have <strong>width</strong> and <strong>height</strong> like
              block elements
            </li>
            <li>Perfect for horizontal layouts without breaking the flow</li>
          </Box>
          <CodeBlock
            code={`.inline-block-box {
    display: inline-block;
    width: 150px;
    height: 80px;
    background-color: #2196f3;
    margin: 4px;
  }`}
          />
        </Paper>

        {/* Comparison Table */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📊 Visual Behavior Comparison
          </Typography>
          <Typography component="div">
            <Box
              component="table"
              sx={{ width: "100%", borderCollapse: "collapse", mt: 2 }}
            >
              <Box component="thead" sx={{ bgcolor: "#e0e0e0" }}>
                <Box component="tr">
                  <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Property
                  </Box>
                  <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                    block
                  </Box>
                  <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                    inline
                  </Box>
                  <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                    inline-block
                  </Box>
                </Box>
              </Box>
              <Box component="tbody">
                <Box component="tr">
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Starts on new line
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ✅
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ❌
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ❌
                  </Box>
                </Box>
                <Box component="tr">
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Accepts width/height
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ✅
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ❌
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ✅
                  </Box>
                </Box>
                <Box component="tr">
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    Stays inline
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ❌
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ✅
                  </Box>
                  <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                    ✅
                  </Box>
                </Box>
              </Box>
            </Box>
          </Typography>
        </Paper>

        {/* Best Practices */}
        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            ⚙️ Best Practices
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              Use <code>block</code> for sections, containers, paragraphs, etc.
            </li>
            <li>
              Use <code>inline</code> for inline text elements like{" "}
              <code>&lt;span&gt;</code>.
            </li>
            <li>
              Use <code>inline-block</code> for buttons, badges, or horizontal
              UI elements needing box sizing.
            </li>
            <li>
              Prefer Flexbox or Grid for complex layouts — more control, less
              hacky alignment.
            </li>
          </Box>
        </Box>

        {/* Summary */}
        <Paper sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📘 Summary
          </Typography>
          <Typography>
            Understanding <code>block</code>, <code>inline</code>, and{" "}
            <code>inline-block</code> is key for managing layout flow and
            element sizing. These display types form the foundation of modern
            CSS design, especially when combined with newer layout systems like
            Flexbox and Grid.
          </Typography>
        </Paper>
      </Box>
    ),
  },
];
