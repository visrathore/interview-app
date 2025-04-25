import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const CSS_INTERMEDIATE_DATA = [
  {
    heading: "What is the difference between min-width, max-width, and width?",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f5f5f5" }}>
        <Typography variant="h4" gutterBottom>
          📏 Difference Between `width`, `min-width`, and `max-width`
        </Typography>

        {/* width */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" color="primary" gutterBottom>
            🔹 `width`
          </Typography>
          <Typography gutterBottom>
            This sets the **exact** width of an element. It **overrides the
            natural size** unless limited by `min-width` or `max-width`.
          </Typography>
          <Box
            sx={{
              width: "200px",
              bgcolor: "#2196f3",
              color: "#fff",
              p: 2,
              textAlign: "center",
              borderRadius: 1,
            }}
          >
            width: 200px
          </Box>
        </Paper>

        {/* min-width */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" color="primary" gutterBottom>
            🔸 `min-width`
          </Typography>
          <Typography gutterBottom>
            This sets the **minimum allowed width** of the element. It won’t
            shrink below this value.
          </Typography>
          <Box
            sx={{
              minWidth: "150px",
              width: "50%",
              maxWidth: "300px",
              bgcolor: "#4caf50",
              color: "#fff",
              p: 2,
              textAlign: "center",
              borderRadius: 1,
            }}
          >
            min-width: 150px (Try resizing screen!)
          </Box>
        </Paper>

        {/* max-width */}
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h5" color="primary" gutterBottom>
            🔻 `max-width`
          </Typography>
          <Typography gutterBottom>
            This sets the **maximum allowed width**. The element will not exceed
            this width, even if its parent allows it.
          </Typography>
          <Box
            sx={{
              maxWidth: "300px",
              width: "100%",
              bgcolor: "#ff9800",
              color: "#fff",
              p: 2,
              textAlign: "center",
              borderRadius: 1,
            }}
          >
            max-width: 300px (Try enlarging window!)
          </Box>
        </Paper>

        {/* Comparison Summary */}
        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            📘 Summary Table
          </Typography>
          <Box
            component="table"
            sx={{ width: "100%", mt: 2, borderCollapse: "collapse" }}
          >
            <Box component="thead">
              <Box component="tr" sx={{ bgcolor: "#eeeeee" }}>
                <Box component="th" sx={{ p: 1, border: "1px solid #ccc" }}>
                  Property
                </Box>
                <Box component="th" sx={{ p: 1, border: "1px solid #ccc" }}>
                  Description
                </Box>
                <Box component="th" sx={{ p: 1, border: "1px solid #ccc" }}>
                  Use Case
                </Box>
              </Box>
            </Box>
            <Box component="tbody">
              <Box component="tr">
                <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                  <code>width</code>
                </Box>
                <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                  Exact width of element
                </Box>
                <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                  Fixed-size buttons, cards
                </Box>
              </Box>
              <Box component="tr">
                <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                  <code>min-width</code>
                </Box>
                <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                  Minimum width allowed
                </Box>
                <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                  Prevent text overflow or layout break
                </Box>
              </Box>
              <Box component="tr">
                <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                  <code>max-width</code>
                </Box>
                <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                  Maximum width allowed
                </Box>
                <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                  Make layouts responsive to larger screens
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    ),
  },
  {
    heading: "What is a media query and how does it work?",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f9f9f9" }}>
        <Typography variant="h4" gutterBottom>
          📱 Understanding Media Queries in CSS
        </Typography>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            🧾 What is a Media Query?
          </Typography>
          <Typography>
            Media queries are used to apply CSS styles based on the device's
            characteristics like screen width, resolution, or orientation.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary">
            💡 Real-time Screen Check using MUI
          </Typography>
          <Typography gutterBottom>
            Resize your screen to see the device message change dynamically:
          </Typography>
          <CodeBlock
            code={` <Box
            sx={{
              mt: 2,
              p: 2,
              bgcolor: isMobile ? "#81c784" : "#64b5f6",
              color: "#fff",
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            {isMobile
              ? "📱 You are on a mobile device!"
              : "🖥️ You are on a larger screen!"}
          </Box>`}
          />
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            🧩 Sample CSS Media Query (Vanilla CSS)
          </Typography>
          <Typography
            component="pre"
            sx={{ bgcolor: "#eeeeee", p: 2, borderRadius: 2 }}
          >
            {`/* Apply to screens smaller than 768px */
@media (max-width: 768px) {
.sidebar {
  display: none;
}
}`}
          </Typography>
        </Paper>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            🔍 Common Breakpoints
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              <code>max-width: 600px</code> — Mobile
            </li>
            <li>
              <code>min-width: 601px and max-width: 960px</code> — Tablet
            </li>
            <li>
              <code>min-width: 961px</code> — Desktop
            </li>
          </Box>
        </Box>

        <Box mt={4}>
          <Typography variant="h5" gutterBottom color="secondary">
            ⚙️ Best Practices
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>
              Use `em` or `rem` instead of `px` for breakpoints (e.g. `48em` for
              768px).
            </li>
            <li>
              Combine `min-width` and `max-width` to target specific ranges.
            </li>
            <li>
              Keep mobile-first: define styles for mobile, then use `min-width`
              for larger screens.
            </li>
          </Box>
        </Box>
      </Box>
    ),
  },
  {
    heading: "What is Flexbox and how does it work?",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f4f6f8" }}>
        <Typography variant="h4" gutterBottom>
          📦 Understanding CSS Flexbox
        </Typography>

        {/* Overview Section */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            🔍 What is Flexbox?
          </Typography>
          <Typography>
            Flexbox is a layout model that arranges elements efficiently and
            aligns them based on direction and available space. It is especially
            useful for creating responsive layouts.
          </Typography>
        </Paper>

        {/* Flex Container Example */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            📐 Flex Container Example
          </Typography>
          <Typography gutterBottom>
            Below is a flex container with horizontal alignment using{" "}
            <code>display: flex</code> and <code>justify-content</code>.
          </Typography>

          <Box
            sx={{
              display: "flex", // Makes the box a flex container
              justifyContent: "space-between", // Distribute space between items
              alignItems: "center", // Align items vertically in the center
              gap: 2,
              bgcolor: "#fff",
              p: 2,
              borderRadius: 2,
              boxShadow: 2,
              mt: 2,
            }}
          >
            <Box
              sx={{ bgcolor: "#64b5f6", p: 2, color: "#fff", borderRadius: 1 }}
            >
              Item 1
            </Box>
            <Box
              sx={{ bgcolor: "#81c784", p: 2, color: "#fff", borderRadius: 1 }}
            >
              Item 2
            </Box>
            <Box
              sx={{ bgcolor: "#ffb74d", p: 2, color: "#fff", borderRadius: 1 }}
            >
              Item 3
            </Box>
          </Box>
        </Paper>

        {/* Key Properties Summary */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            🧩 Important Flexbox Properties
          </Typography>
          <Typography
            component="pre"
            sx={{ bgcolor: "#eee", p: 2, borderRadius: 2 }}
          >
            {`/* Flex Container */
.container {
display: flex; /* enables Flexbox */
flex-direction: row | column; /* main axis direction */
justify-content: center | space-between | space-around;
align-items: center | flex-start | stretch;
flex-wrap: wrap; /* allows wrapping */
}

/* Flex Item */
.item {
flex: 1; /* grow to fill available space */
align-self: center; /* override align-items */
order: 2; /* change order */
}`}
          </Typography>
        </Paper>

        {/* Best Practices Section */}
        <Box mt={4}>
          <Typography variant="h5" color="secondary" gutterBottom>
            ✅ Best Practices
          </Typography>
          <Box component="ul" sx={{ pl: 4 }}>
            <li>Use Flexbox for **1D layouts** (either rows OR columns).</li>
            <li>Use Grid for **2D layouts** (rows AND columns).</li>
            <li>Combine `flex-wrap` with `gap` for better responsiveness.</li>
            <li>Always define `flex-direction` clearly for clarity.</li>
          </Box>
        </Box>

        {/* Real-Life Tip */}
        <Box mt={4}>
          <Typography variant="h6" color="primary">
            💡 Real-World Tip
          </Typography>
          <Typography>
            Use <code>gap</code> in Flexbox instead of adding margins to
            children.
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    heading: "What are the main properties of Flexbox and all their values?",
    content: (
      <Box sx={{ p: 4, bgcolor: "#f3f4f6" }}>
        <Typography variant="h4" gutterBottom color="primary">
          📦 All Main Flexbox Properties with Values & Examples
        </Typography>

        {/* Flex Container Properties Section */}
        <Paper sx={{ p: 3, mb: 4, bgcolor: "#e3f2fd" }}>
          <Typography variant="h5" gutterBottom color="secondary">
            🧩 Flex Container Properties
          </Typography>

          {/* display */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1">
              <strong>1. display</strong>
            </Typography>
            <Typography variant="body2">
              Defines a flex context for all its children.
            </Typography>
            <Typography
              component="pre"
              sx={{ bgcolor: "#bbdefb", p: 2, mt: 1 }}
            >
              {`display: flex;        // block-level flex container
display: inline-flex;  // inline-level flex container`}
            </Typography>
          </Box>

          {/* flex-direction */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1">
              <strong>2. flex-direction</strong>
            </Typography>
            <Typography variant="body2">
              Specifies the direction of the flex items.
            </Typography>
            <Typography
              component="pre"
              sx={{ bgcolor: "#bbdefb", p: 2, mt: 1 }}
            >
              {`flex-direction: row;           // Default. Left to right
flex-direction: row-reverse;    // Right to left
flex-direction: column;         // Top to bottom
flex-direction: column-reverse; // Bottom to top`}
            </Typography>
          </Box>

          {/* flex-wrap */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1">
              <strong>3. flex-wrap</strong>
            </Typography>
            <Typography variant="body2">
              Controls whether the flex container is single-line or multi-line.
            </Typography>
            <Typography
              component="pre"
              sx={{ bgcolor: "#bbdefb", p: 2, mt: 1 }}
            >
              {`flex-wrap: nowrap;       // All items on one line (default)
flex-wrap: wrap;         // Items wrap onto multiple lines
flex-wrap: wrap-reverse; // Items wrap in reverse order`}
            </Typography>
          </Box>

          {/* justify-content */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1">
              <strong>4. justify-content</strong>
            </Typography>
            <Typography variant="body2">
              Aligns items along the main axis.
            </Typography>
            <Typography
              component="pre"
              sx={{ bgcolor: "#bbdefb", p: 2, mt: 1 }}
            >
              {`justify-content: flex-start;    // Items aligned to start (default)
justify-content: flex-end;      // Items aligned to end
justify-content: center;        // Items centered
justify-content: space-between; // Equal space between
justify-content: space-around;  // Equal space around
justify-content: space-evenly;  // Equal space between and around`}
            </Typography>
          </Box>

          {/* align-items */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1">
              <strong>5. align-items</strong>
            </Typography>
            <Typography variant="body2">
              Aligns items along the cross axis (perpendicular to main).
            </Typography>
            <Typography
              component="pre"
              sx={{ bgcolor: "#bbdefb", p: 2, mt: 1 }}
            >
              {`align-items: stretch;     // Default. Items stretch to fill container
align-items: flex-start;  // Items aligned to start
align-items: flex-end;    // Items aligned to end
align-items: center;      // Items centered
align-items: baseline;    // Items aligned by text baseline`}
            </Typography>
          </Box>

          {/* align-content */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1">
              <strong>6. align-content</strong>
            </Typography>
            <Typography variant="body2">
              Aligns rows of items (used with multi-line).
            </Typography>
            <Typography
              component="pre"
              sx={{ bgcolor: "#bbdefb", p: 2, mt: 1 }}
            >
              {`align-content: stretch;        // Default
align-content: flex-start;     // Top
align-content: flex-end;       // Bottom
align-content: center;         // Centered
align-content: space-between;  // Equal spacing between rows
align-content: space-around;   // Equal spacing around rows`}
            </Typography>
          </Box>
        </Paper>

        {/* Flex Item Properties Section */}
        <Paper sx={{ p: 3, mb: 4, bgcolor: "#c8e6c9" }}>
          <Typography variant="h5" gutterBottom color="secondary">
            🧱 Flex Item Properties
          </Typography>

          {/* order */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1">
              <strong>1. order</strong>
            </Typography>
            <Typography variant="body2">
              Controls the order of items (default is 0).
            </Typography>
            <Typography
              component="pre"
              sx={{ bgcolor: "#a5d6a7", p: 2, mt: 1 }}
            >
              {`order: 0;    // Default
order: 1;    // Comes after 0
order: -1;   // Comes before 0`}
            </Typography>
          </Box>

          {/* flex-grow */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1">
              <strong>2. flex-grow</strong>
            </Typography>
            <Typography variant="body2">
              Defines the ability to grow if needed (default is 0).
            </Typography>
            <Typography
              component="pre"
              sx={{ bgcolor: "#a5d6a7", p: 2, mt: 1 }}
            >
              {`flex-grow: 0;  // Don't grow (default)
flex-grow: 1;  // Grow to fill extra space proportionally`}
            </Typography>
          </Box>

          {/* flex-shrink */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1">
              <strong>3. flex-shrink</strong>
            </Typography>
            <Typography variant="body2">
              Defines the ability to shrink if needed (default is 1).
            </Typography>
            <Typography
              component="pre"
              sx={{ bgcolor: "#a5d6a7", p: 2, mt: 1 }}
            >
              {`flex-shrink: 1;  // Default
flex-shrink: 0;  // Prevent shrinking`}
            </Typography>
          </Box>

          {/* flex-basis */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1">
              <strong>4. flex-basis</strong>
            </Typography>
            <Typography variant="body2">
              Sets the initial size of an item before growing/shrinking.
            </Typography>
            <Typography
              component="pre"
              sx={{ bgcolor: "#a5d6a7", p: 2, mt: 1 }}
            >
              {`flex-basis: auto;     // Default
flex-basis: 200px;    // Start at 200px`}
            </Typography>
          </Box>

          {/* flex (shorthand) */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1">
              <strong>5. flex</strong> (shorthand)
            </Typography>
            <Typography variant="body2">
              Combines grow, shrink, and basis into one line.
            </Typography>
            <Typography
              component="pre"
              sx={{ bgcolor: "#a5d6a7", p: 2, mt: 1 }}
            >
              {`flex: 1;            // Equal growth, shrink, auto basis
flex: 2 1 150px;     // Grow: 2, Shrink: 1, Basis: 150px`}
            </Typography>
          </Box>

          {/* align-self */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1">
              <strong>6. align-self</strong>
            </Typography>
            <Typography variant="body2">
              Overrides align-items for individual item.
            </Typography>
            <Typography
              component="pre"
              sx={{ bgcolor: "#a5d6a7", p: 2, mt: 1 }}
            >
              {`align-self: auto;       // Default
align-self: flex-start; // Align to start
align-self: flex-end;   // Align to end
align-self: center;     // Center
align-self: baseline;   // Align by text baseline
align-self: stretch;    // Stretch to fill`}
            </Typography>
          </Box>
        </Paper>

        {/* Example Layout */}
        <Paper sx={{ p: 3, bgcolor: "#fffde7" }}>
          <Typography variant="h6" gutterBottom color="secondary">
            🎯 Example Flex Layout
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              p: 2,
              bgcolor: "#fff9c4",
              borderRadius: 2,
            }}
          >
            <Box sx={{ p: 2, bgcolor: "#fdd835", borderRadius: 1 }}>Item 1</Box>
            <Box sx={{ p: 2, bgcolor: "#fbc02d", borderRadius: 1 }}>Item 2</Box>
            <Box sx={{ p: 2, bgcolor: "#f9a825", borderRadius: 1 }}>Item 3</Box>
          </Box>
        </Paper>
      </Box>
    ),
  },
  {
    heading: "What is the difference between Flexbox and Grid?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📦 Difference Between Flexbox and Grid in CSS
        </Typography>

        <Typography variant="body1" mb={2}>
          Both <strong>Flexbox</strong> and <strong>CSS Grid</strong> are
          powerful layout models. Flexbox is one-dimensional (row or column),
          while Grid is two-dimensional (rows AND columns).
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={4}>
          {/* Flexbox */}
          <Grid size={6}>
            <Typography variant="h5" gutterBottom>
              🔄 Flexbox (One-Dimensional Layout)
            </Typography>
            <Typography variant="body1" mb={2}>
              Use when you want to align items in a single direction (either row
              or column). It distributes space and aligns content dynamically.
            </Typography>

            <CodeBlock
              code={`<Box
display="flex"
flexDirection="row"
justifyContent="space-between"
alignItems="center"
>
<Box>Item 1</Box>
<Box>Item 2</Box>
<Box>Item 3</Box>
</Box>`}
            />
          </Grid>

          {/* Grid */}
          <Grid size={6}>
            <Typography variant="h5" gutterBottom>
              🔳 CSS Grid (Two-Dimensional Layout)
            </Typography>
            <Typography variant="body1" mb={2}>
              Use when you need rows and columns. It's perfect for full-page
              layouts or card grids.
            </Typography>

            <CodeBlock
              code={`<Box
display="grid"
gridTemplateColumns="repeat(3, 1fr)"
gap={2}
>
<Box>Item 1</Box>
<Box>Item 2</Box>
<Box>Item 3</Box>
</Box>`}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          🔍 Feature Comparison Table
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ padding: "8px", textAlign: "left" }}>Feature</th>
                  <th style={{ padding: "8px", textAlign: "left" }}>Flexbox</th>
                  <th style={{ padding: "8px", textAlign: "left" }}>Grid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Layout Direction</td>
                  <td>One-Dimensional</td>
                  <td>Two-Dimensional</td>
                </tr>
                <tr>
                  <td>Use Case</td>
                  <td>Navigation bars, toolbars</td>
                  <td>Full page layouts, image galleries</td>
                </tr>
                <tr>
                  <td>Alignment</td>
                  <td>Aligns items along one axis</td>
                  <td>Aligns items in both axes</td>
                </tr>
                <tr>
                  <td>Gap Support</td>
                  <td>Supported in newer browsers</td>
                  <td>Fully supported</td>
                </tr>
                <tr>
                  <td>Content Control</td>
                  <td>Better for content-based sizing</td>
                  <td>Better for layout-first approach</td>
                </tr>
                <tr>
                  <td>Responsiveness</td>
                  <td>Easy with wrapping & media queries</td>
                  <td>Powerful with auto-fit/auto-fill</td>
                </tr>
              </tbody>
            </table>
          </Paper>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          ✅ When to Use Flexbox?
        </Typography>
        <Typography variant="body2">
          Use Flexbox when your layout is linear — items in a row or column that
          need spacing, alignment, or wrapping.
        </Typography>

        <Typography variant="h5" mt={4} gutterBottom>
          ✅ When to Use Grid?
        </Typography>
        <Typography variant="body2">
          Use Grid when you need full control of both rows and columns — great
          for dashboards, image galleries, and application layouts.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How do you center an element horizontally and vertically?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🎯 How to Center an Element Horizontally and Vertically in CSS
        </Typography>

        <Typography variant="body1" mb={2}>
          Centering is a common layout task in web development. Below are the
          most effective methods for centering elements, using modern, optimized
          CSS techniques — all styled with MUI.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Stack spacing={6}>
          {/* Flexbox Method */}
          <Box>
            <Typography variant="h5" gutterBottom>
              🔄 Method 1: Using Flexbox
            </Typography>
            <Typography variant="body2">
              Flexbox is the easiest and most responsive way to center elements.
            </Typography>

            <CodeBlock
              code={`<Box
display="flex"
justifyContent="center"  // Centers horizontally
alignItems="center"      // Centers vertically
height="100vh"           // Takes full viewport height
>
<Box>Centered Item</Box>
</Box>`}
            />
          </Box>

          {/* Grid Method */}
          <Box>
            <Typography variant="h5" gutterBottom>
              🔳 Method 2: Using CSS Grid
            </Typography>
            <Typography variant="body2">
              CSS Grid offers another powerful method for centering.
            </Typography>

            <CodeBlock
              code={`<Box
display="grid"
placeItems="center"    // Shorthand for justify-content + align-items
height="100vh"
>
<Box>Centered Item</Box>
</Box>`}
            />
          </Box>

          {/* Absolute + Transform Method */}
          <Box>
            <Typography variant="h5" gutterBottom>
              🎯 Method 3: Using Absolute Position + Transform
            </Typography>
            <Typography variant="body2">
              Works well when the container has a relative position.
            </Typography>

            <CodeBlock
              code={`<Box position="relative" height="100vh">
<Box
  position="absolute"
  top="50%"
  left="50%"
  sx={{ transform: "translate(-50%, -50%)" }}
>
  Centered Item
</Box>
</Box>`}
            />
          </Box>

          {/* Margin Auto Method */}
          <Box>
            <Typography variant="h5" gutterBottom>
              📐 Method 4: Using Margin Auto (Horizontal Only)
            </Typography>
            <Typography variant="body2">
              Use when you only want horizontal centering (e.g., buttons).
            </Typography>

            <CodeBlock
              code={`<Box width="200px" margin="0 auto">
<Box>Horizontally Centered</Box>
</Box>`}
            />
          </Box>

          {/* Text-align + Inline-block Method */}
          <Box>
            <Typography variant="h5" gutterBottom>
              🧾 Method 5: Using Text Align + Inline Block (Legacy)
            </Typography>
            <Typography variant="body2">
              This method was popular before Flexbox and Grid. Still valid for
              small-scale needs.
            </Typography>

            <CodeBlock
              code={`<Box textAlign="center">
<Box display="inline-block">
  Centered Inline-Block
</Box>
</Box>`}
            />
          </Box>
        </Stack>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Recommended Approach
        </Typography>
        <Typography variant="body2">
          Use <strong>Flexbox</strong> or <strong>Grid</strong> for modern and
          responsive centering. Absolute positioning can be useful in special
          cases like modal dialogs.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "What is the difference between relative, absolute, and fixed positioning?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📌 Understanding CSS Positioning: relative, absolute, fixed
        </Typography>

        <Typography variant="body1" mb={2}>
          CSS <strong>position</strong> is used to place elements on a page with
          respect to different reference points. Below are the key positioning
          types explained in detail.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Stack spacing={6}>
          {/* Position: relative */}
          <Box>
            <Typography variant="h5" gutterBottom>
              🟡 <code>position: relative</code>
            </Typography>
            <Typography variant="body2" mb={1}>
              - Positions the element relative to **its normal position**. It
              doesn't remove it from the flow.
              <br />- Other elements still respect its space.
            </Typography>

            <CodeBlock
              code={`<Box sx={{ position: "relative", top: 20, left: 30 }}>
I moved 20px down and 30px right from my original position.
</Box>`}
            />
          </Box>

          {/* Position: absolute */}
          <Box>
            <Typography variant="h5" gutterBottom>
              🔵 <code>position: absolute</code>
            </Typography>
            <Typography variant="body2" mb={1}>
              - Positioned relative to the **nearest positioned ancestor** (not
              static).
              <br />- Removed from the normal flow — other elements ignore its
              space.
            </Typography>

            <CodeBlock
              code={`<Box sx={{ position: "relative", height: "200px", border: "2px dashed gray" }}>
<Box sx={{ position: "absolute", top: 10, left: 10, backgroundColor: "lightblue" }}>
  I'm absolutely positioned relative to my parent.
</Box>
</Box>`}
            />
          </Box>

          {/* Position: fixed */}
          <Box>
            <Typography variant="h5" gutterBottom>
              🔴 <code>position: fixed</code>
            </Typography>
            <Typography variant="body2" mb={1}>
              - Positioned relative to the **viewport**.
              <br />- Stays in the same place even when the page is scrolled.
            </Typography>

            <CodeBlock
              code={`<Box sx={{
position: "fixed",
bottom: 20,
right: 20,
padding: "10px",
backgroundColor: "orange",
}}>
I'm always fixed to the bottom-right of the screen!
</Box>`}
            />
          </Box>
        </Stack>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Summary Table
        </Typography>
        <Box
          component="table"
          sx={{ width: "100%", borderCollapse: "collapse", mt: 2 }}
        >
          <Box component="thead" sx={{ backgroundColor: "#f5f5f5" }}>
            <Box component="tr">
              <Box component="th" sx={{ p: 1, border: "1px solid #ccc" }}>
                Position
              </Box>
              <Box component="th" sx={{ p: 1, border: "1px solid #ccc" }}>
                Relative To
              </Box>
              <Box component="th" sx={{ p: 1, border: "1px solid #ccc" }}>
                Removes From Flow?
              </Box>
              <Box component="th" sx={{ p: 1, border: "1px solid #ccc" }}>
                Scrolls With Page?
              </Box>
            </Box>
          </Box>
          <Box component="tbody">
            <Box component="tr">
              <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                relative
              </Box>
              <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                Itself (original position)
              </Box>
              <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                No
              </Box>
              <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                Yes
              </Box>
            </Box>
            <Box component="tr">
              <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                absolute
              </Box>
              <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                Nearest positioned ancestor
              </Box>
              <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                Yes
              </Box>
              <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                Yes
              </Box>
            </Box>
            <Box component="tr">
              <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                fixed
              </Box>
              <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                Viewport
              </Box>
              <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                Yes
              </Box>
              <Box component="td" sx={{ p: 1, border: "1px solid #ccc" }}>
                No
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    ),
  },
  {
    heading: "How do you make a website responsive using CSS?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🌐 How to Make a Website Responsive Using CSS
        </Typography>

        <Typography variant="body1" mb={2}>
          A responsive website adapts its layout and elements to fit various
          screen sizes. Below are the main techniques to achieve responsiveness
          using CSS.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Stack spacing={4}>
          <Box>
            <Typography variant="h5" gutterBottom>
              1️⃣ Media Queries
            </Typography>
            <Typography variant="body2">
              Media queries let you apply CSS styles conditionally based on
              screen size.
            </Typography>
            <CodeBlock
              code={`@media (max-width: 768px) {
.container {
  flex-direction: column;
}
}`}
            />
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              2️⃣ Flexible Layouts with Flexbox & Grid
            </Typography>
            <Typography variant="body2">
              Use Flexbox or CSS Grid for dynamic, fluid layouts that adapt
              based on available space.
            </Typography>

            <CodeBlock
              code={`.flex-container {
display: flex;
flex-wrap: wrap;
gap: 16px;
}`}
            />

            <CodeBlock
              code={`.grid-container {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 20px;
}`}
            />
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              3️⃣ Relative Units (%, em, rem)
            </Typography>
            <Typography variant="body2">
              Avoid fixed pixel units. Use relative units that scale with user
              settings or parent containers.
            </Typography>

            <CodeBlock
              code={`body {
font-size: 16px;
}

h1 {
font-size: 2rem; /* 2 x root font-size = 32px */
}

.container {
width: 80%; /* 80% of the parent width */
}`}
            />
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              4️⃣ Responsive Images
            </Typography>
            <Typography variant="body2">
              Make images scale with their containers using max-width.
            </Typography>

            <CodeBlock
              code={`img {
max-width: 100%;
height: auto;
}`}
            />
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              5️⃣ Viewport Meta Tag
            </Typography>
            <Typography variant="body2">
              Ensure the browser sets the correct width for mobile devices.
            </Typography>

            <CodeBlock
              code={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
            />
          </Box>

          <Box>
            <Typography variant="h5" gutterBottom>
              6️⃣ MUI Responsive System
            </Typography>
            <Typography variant="body2">
              Leverage MUI's responsive design system with <code>sx</code>{" "}
              props.
            </Typography>

            <CodeBlock
              code={`<Box
sx={{
  fontSize: {
    xs: '14px', // mobile
    sm: '16px', // tablets
    md: '18px', // desktop
  },
}}
>
Responsive Text
</Box>`}
            />
          </Box>
        </Stack>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h6">✅ Best Practices Summary</Typography>
        <List>
          <ListItem>Use relative units instead of fixed pixels</ListItem>
          <ListItem>Define breakpoints with media queries</ListItem>
          <ListItem>Utilize Flexbox or Grid for layouts</ListItem>
          <ListItem>
            Use MUI's responsive <code>sx</code> prop for consistency
          </ListItem>
          <ListItem>Set viewport meta tag</ListItem>
          <ListItem>Test your design on multiple screen sizes</ListItem>
        </List>
      </Box>
    ),
  },
  {
    heading: "What is inherit, initial, and unset in CSS?",
    content: (
      <Box p={4} display="flex" flexDirection="column" gap={4}>
        <Typography variant="h4" gutterBottom>
          🎓 CSS Keywords: <code>inherit</code>, <code>initial</code>, and{" "}
          <code>unset</code>
        </Typography>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 3, bgcolor: "#f3f3f3" }}>
          <Typography variant="h6" gutterBottom>
            📌 1. <code>inherit</code>
          </Typography>
          <Typography variant="body1">
            Forces the child element to inherit the property value from its
            parent, even if the property is not naturally inherited.
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box
            component="pre"
            sx={{
              bgcolor: "#272727",
              color: "white",
              p: 2,
              borderRadius: 2,
              overflowX: "auto",
            }}
          >
            {`<style>
.parent {
  color: red;
}

.child {
  color: inherit; /* Will become red like parent */
}
</style>

<div class="parent">
Parent text
<div class="child">Child text</div>
</div>`}
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 3, bgcolor: "#e0f7fa" }}>
          <Typography variant="h6" gutterBottom>
            📌 2. <code>initial</code>
          </Typography>
          <Typography variant="body1">
            Resets the property to its default value defined by the browser. It
            **does not inherit**.
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box
            component="pre"
            sx={{
              bgcolor: "#272727",
              color: "white",
              p: 2,
              borderRadius: 2,
              overflowX: "auto",
            }}
          >
            {`<style>
.example {
  color: red;
}

.reset {
  color: initial; /* Resets color to browser default, usually black */
}
</style>

<p class="example">Red Text</p>
<p class="example reset">Reset to default color</p>`}
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 3, bgcolor: "#fce4ec" }}>
          <Typography variant="h6" gutterBottom>
            📌 3. <code>unset</code>
          </Typography>
          <Typography variant="body1">
            Acts as <strong>inherit</strong> if the property is normally
            inherited, otherwise acts as <strong>initial</strong>.
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box
            component="pre"
            sx={{
              bgcolor: "#272727",
              color: "white",
              p: 2,
              borderRadius: 2,
              overflowX: "auto",
            }}
          >
            {`<style>
.parent {
  color: green;
}

.child {
  color: unset; /* Inherited because color is naturally inherited */
}

.box {
  margin: 50px;
}

.reset-box {
  margin: unset; /* Reset to 0 because margin is NOT inherited */
}
</style>

<div class="parent">
<div class="child">This text is green (inherited)</div>
</div>

<div class="box reset-box">This box has no margin</div>`}
          </Box>
        </Paper>

        <Paper
          elevation={1}
          sx={{ p: 2, bgcolor: "#fff3e0", borderLeft: "6px solid orange" }}
        >
          <Typography variant="body2">
            🔍 <strong>Tip:</strong> Use <code>unset</code> when you're unsure
            if the property is inherited or not. It handles both cases
            intelligently.
          </Typography>
        </Paper>
      </Box>
    ),
  },
];
