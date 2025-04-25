import { Box, Divider, Typography } from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const HTML_BEGINNER_DATA = [
  {
    heading: "What is HTML5? How is it different from HTML4?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🌐 What is HTML5? How is it Different from HTML4?
        </Typography>

        <Typography paragraph>
          HTML5 is the **latest evolution** of the standard that defines HTML
          (HyperText Markup Language). It was officially finalized in **2014**
          and brought **semantic, multimedia, API**, and **structural
          improvements** over HTML4, which was released back in **1997**.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧾 HTML4 Overview
        </Typography>
        <Typography paragraph>
          - Released in 1997.
          <br />
          - Focused more on content structure.
          <br />
          - Lacked support for multimedia and interactivity.
          <br />
          - Relied heavily on third-party technologies like Flash for
          audio/video.
          <br />- No semantic elements — developers used generic elements like
          &lt;div&gt; and &lt;span&gt;.
        </Typography>

        <CodeBlock
          code={`<!-- HTML4 Example -->
<div id="header">Site Header</div>
<div id="nav">Navigation Links</div>
<div id="content">Main Content</div>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 HTML5 Overview
        </Typography>
        <Typography paragraph>
          - Introduced semantic elements like <code>&lt;header&gt;</code>,{" "}
          <code>&lt;footer&gt;</code>,<code>&lt;article&gt;</code>,{" "}
          <code>&lt;section&gt;</code>.
          <br />
          - Native support for audio, video, and canvas without plugins.
          <br />
          - Enhanced form controls: date pickers, sliders, email/URL fields.
          <br />
          - Introduced APIs: Geolocation, Web Storage, WebSockets, Drag & Drop.
          <br />- Mobile-friendly and performance optimized.
        </Typography>

        <CodeBlock
          code={`<!-- HTML5 Example -->
<header>Site Header</header>
<nav>Navigation Links</nav>
<main>
<section>Main Content</section>
</main>
<footer>Footer Info</footer>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Key Differences Between HTML4 and HTML5
        </Typography>
        <Typography component="ul">
          <li>
            <strong>Semantics:</strong> HTML5 provides meaningful tags like{" "}
            <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>.
          </li>
          <li>
            <strong>Multimedia:</strong> HTML5 supports{" "}
            <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags
            natively.
          </li>
          <li>
            <strong>APIs:</strong> HTML5 includes APIs like Geolocation,
            WebSockets, Web Storage.
          </li>
          <li>
            <strong>Doctype:</strong> HTML5 has a simpler doctype declaration.
          </li>
          <li>
            <strong>Mobile Support:</strong> HTML5 was built with responsive and
            mobile-first design in mind.
          </li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Simplified Doctype
        </Typography>
        <Typography paragraph>
          HTML4 had a long and complex DOCTYPE, whereas HTML5 uses a minimal and
          readable one.
        </Typography>

        <CodeBlock
          code={`<!-- HTML4 DOCTYPE -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<!-- HTML5 DOCTYPE -->
<!DOCTYPE html>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Form Enhancements
        </Typography>
        <Typography paragraph>
          HTML5 improved forms with new input types and built-in validation,
          reducing the need for JS.
        </Typography>

        <CodeBlock
          code={`<!-- HTML5 Form -->
<form>
<input type="email" placeholder="Enter your email" required />
<input type="date" />
<input type="range" min="0" max="10" />
<button type="submit">Submit</button>
</form>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          💡 Tip: HTML5 promotes better accessibility, maintainability, and user
          experience. It’s backward-compatible and supported by all modern
          browsers.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are new semantic tags in HTML5?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧱 New Semantic Tags in HTML5
        </Typography>

        <Typography paragraph>
          HTML5 introduced several <strong>semantic elements</strong> that
          convey the meaning of the content they wrap. These tags improve
          accessibility, SEO, and code readability by defining the purpose of a
          section clearly.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧭 <code>&lt;header&gt;</code>
        </Typography>
        <Typography paragraph>
          Represents introductory content or navigation links for its nearest
          ancestor sectioning content.
        </Typography>
        <CodeBlock
          code={`<header>
<h1>My Website</h1>
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>
</header>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 <code>&lt;section&gt;</code>
        </Typography>
        <Typography paragraph>
          Defines a section in a document, typically with a heading. Useful for
          grouping related content.
        </Typography>
        <CodeBlock
          code={`<section>
<h2>Blog Posts</h2>
<article>...</article>
</section>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📝 <code>&lt;article&gt;</code>
        </Typography>
        <Typography paragraph>
          Represents a self-contained, independent piece of content like a blog
          post, comment, or news article.
        </Typography>
        <CodeBlock
          code={`<article>
<h2>10 Tips for Web Development</h2>
<p>These tips will help you...</p>
</article>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔚 <code>&lt;footer&gt;</code>
        </Typography>
        <Typography paragraph>
          Represents footer content like copyright, links, or contact info. Can
          be used for both pages and sections.
        </Typography>
        <CodeBlock
          code={`<footer>
<p>&copy; 2025 My Website</p>
</footer>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 <code>&lt;nav&gt;</code>
        </Typography>
        <Typography paragraph>
          Represents a section of navigation links.
        </Typography>
        <CodeBlock
          code={`<nav>
<ul>
  <li><a href="/">Home</a></li>
  <li><a href="/blog">Blog</a></li>
</ul>
</nav>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎞 <code>&lt;figure&gt;</code> & <code>&lt;figcaption&gt;</code>
        </Typography>
        <Typography paragraph>
          <code>&lt;figure&gt;</code> is used to wrap media content (image,
          chart, code block), while <code>&lt;figcaption&gt;</code> provides a
          caption.
        </Typography>
        <CodeBlock
          code={`<figure>
<img src="image.jpg" alt="Sample" />
<figcaption>This is an example image</figcaption>
</figure>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          💡 Tip: Semantic tags help search engines and assistive technologies
          understand your content better. Use them to replace meaningless{" "}
          <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> wrappers
          wherever possible.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the purpose of the <!DOCTYPE html> declaration?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📜 Purpose of <code>&lt;!DOCTYPE html&gt;</code> Declaration
        </Typography>

        <Typography paragraph>
          The{" "}
          <strong>
            <code>&lt;!DOCTYPE html&gt;</code>
          </strong>{" "}
          declaration is used to tell the browser what version of HTML the page
          is written in. It helps browsers render the page correctly by
          switching the browser into "standards mode" instead of "quirks mode".
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Why It's Important
        </Typography>
        <Typography component="ul">
          <li>
            <strong>Enables Standards Mode:</strong> Ensures consistent
            rendering across modern browsers.
          </li>
          <li>
            <strong>Avoids Quirks Mode:</strong> Older HTML versions used quirks
            mode which allowed invalid markup. This can lead to unpredictable
            behavior.
          </li>
          <li>
            <strong>Improves Cross-browser Compatibility:</strong> Modern
            browsers follow W3C specs when DOCTYPE is properly declared.
          </li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔍 The Modern HTML5 DOCTYPE
        </Typography>
        <Typography paragraph>
          HTML5 uses a very simple and short DOCTYPE compared to previous
          versions.
        </Typography>
        <CodeBlock code={`<!DOCTYPE html>`} />

        <Typography paragraph>
          This tells the browser: “Use the latest HTML specification.” It's not
          case-sensitive, but best practice is to use lowercase.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🕰️ DOCTYPEs in Older HTML Versions
        </Typography>
        <Typography paragraph>
          In older versions like HTML 4.01 or XHTML, the DOCTYPE was more
          verbose and included a reference to a Document Type Definition (DTD).
        </Typography>
        <CodeBlock
          code={`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">`}
        />

        <Typography paragraph>
          These older DOCTYPEs are more complex and harder to remember, which is
          why HTML5 simplified this dramatically.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 What Happens Without It?
        </Typography>
        <Typography paragraph>
          If you omit the DOCTYPE or use it incorrectly:
        </Typography>

        <Typography component="ul">
          <li>
            Browsers may enter <strong>quirks mode</strong>.
          </li>
          <li>Layout and CSS rendering issues might occur.</li>
          <li>Older fallback behaviors get triggered (especially in IE).</li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          💡 Tip: Always include <code>&lt;!DOCTYPE html&gt;</code> at the very
          top of your HTML files to ensure consistent, standards-compliant
          rendering in all browsers.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are the new form input types in HTML5?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🆕 New Form Input Types in HTML5
        </Typography>

        <Typography paragraph>
          HTML5 introduced several new <code>&lt;input&gt;</code> types that
          improve form usability, validation, and mobile-friendliness. These
          types help browsers provide appropriate keyboards, built-in
          validation, and user feedback without relying on JavaScript.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Type: email */}
        <Typography variant="h5" gutterBottom>
          📧 1. <code>type="email"</code>
        </Typography>
        <Typography paragraph>
          Validates that the input is a properly formatted email address.
        </Typography>
        <CodeBlock
          code={`<label>Email:
<input type="email" name="email" required />
</label>`}
        />
        <Typography variant="body2" color="text.secondary" mt={1}>
          ✅ Automatically checks for valid email format (e.g.,
          user@example.com).
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Type: url */}
        <Typography variant="h5" gutterBottom>
          🌐 2. <code>type="url"</code>
        </Typography>
        <Typography paragraph>
          Ensures the input is a properly structured URL.
        </Typography>
        <CodeBlock
          code={`<label>Website:
<input type="url" name="website" required />
</label>`}
        />
        <Typography variant="body2" color="text.secondary" mt={1}>
          ✅ Validates using protocols like http:// or https://.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Type: tel */}
        <Typography variant="h5" gutterBottom>
          ☎️ 3. <code>type="tel"</code>
        </Typography>
        <Typography paragraph>
          Used for telephone numbers. No built-in validation, but mobile
          browsers show the number pad.
        </Typography>
        <CodeBlock
          code={`<label>Phone:
<input type="tel" name="phone" pattern="[0-9]{10}" />
</label>`}
        />
        <Typography variant="body2" color="text.secondary" mt={1}>
          📱 Great for mobile UX — use <code>pattern</code> for validation.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Type: number */}
        <Typography variant="h5" gutterBottom>
          🔢 4. <code>type="number"</code>
        </Typography>
        <Typography paragraph>
          Allows numeric input with optional min, max, and step values.
        </Typography>
        <CodeBlock
          code={`<label>Age:
<input type="number" name="age" min="1" max="120" step="1" />
</label>`}
        />
        <Typography variant="body2" color="text.secondary" mt={1}>
          🔍 Built-in up/down arrows and numeric-only keyboard on mobile.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Type: range */}
        <Typography variant="h5" gutterBottom>
          🎚️ 5. <code>type="range"</code>
        </Typography>
        <Typography paragraph>
          Provides a slider UI for selecting values within a range.
        </Typography>
        <CodeBlock
          code={`<label>Volume:
<input type="range" name="volume" min="0" max="100" />
</label>`}
        />
        <Typography variant="body2" color="text.secondary" mt={1}>
          🎛️ Use CSS or JS to show current value as slider moves.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Type: date */}
        <Typography variant="h5" gutterBottom>
          📅 6. <code>type="date"</code>
        </Typography>
        <Typography paragraph>
          Opens a native calendar UI to select dates.
        </Typography>
        <CodeBlock
          code={`<label>Birthday:
<input type="date" name="dob" />
</label>`}
        />
        <Typography variant="body2" color="text.secondary" mt={1}>
          📆 Browser-provided calendar picker.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Type: time */}
        <Typography variant="h5" gutterBottom>
          ⏰ 7. <code>type="time"</code>
        </Typography>
        <Typography paragraph>
          Allows selection of a specific time (hour & minute).
        </Typography>
        <CodeBlock
          code={`<label>Meeting Time:
<input type="time" name="meetingTime" />
</label>`}
        />
        <Typography variant="body2" color="text.secondary" mt={1}>
          🕒 Shows time picker — consistent across platforms.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Type: color */}
        <Typography variant="h5" gutterBottom>
          🎨 8. <code>type="color"</code>
        </Typography>
        <Typography paragraph>
          Renders a color picker widget to select color values.
        </Typography>
        <CodeBlock
          code={`<label>Choose Color:
<input type="color" name="favColor" />
</label>`}
        />
        <Typography variant="body2" color="text.secondary" mt={1}>
          🌈 Outputs a hex code (e.g., <code>#ff0000</code>).
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          💡 Tip: Use these types whenever applicable to improve UX, mobile
          input, and leverage built-in validation. They also reduce your
          reliance on JavaScript for basic form logic.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are data- attributes?*",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📌 Understanding <code>data-*</code> Attributes in HTML5
        </Typography>

        <Typography paragraph>
          The{" "}
          <strong>
            <code>data-*</code>
          </strong>{" "}
          attributes in HTML5 are custom attributes that store extra data
          directly on HTML elements without using non-standard attributes or
          extra classes. They are useful for:
        </Typography>

        <ul>
          <li>Passing data from HTML to JavaScript</li>
          <li>Storing metadata without affecting layout</li>
          <li>Temporary flags or identifiers</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛠️ Syntax
        </Typography>
        <Typography paragraph>
          The syntax is:{" "}
          <code>
            data-<i>name</i>="value"
          </code>{" "}
          and is always accessible via JavaScript.
        </Typography>
        <CodeBlock
          code={`<!-- Example -->
<button data-user-id="42" data-user-role="admin">
Click Me
</button>`}
        />
        <Typography variant="body2" color="text.secondary" mt={1}>
          ✅ These attributes won’t interfere with CSS or browser behavior.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Why Use <code>data-*</code> Instead of Custom Attributes?
        </Typography>
        <Typography paragraph>
          HTML5 allows only attributes that follow the spec. Using something
          like <code>user-id="123"</code> is invalid.
          <br />
          <code>data-*</code> is the standard-compliant way to store custom data
          in markup.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧾 Reading <code>data-*</code> Attributes in JavaScript
        </Typography>
        <Typography paragraph>
          You can access these using the <code>dataset</code> property on DOM
          elements.
        </Typography>
        <CodeBlock
          code={`// HTML
<button id="myBtn" data-user-id="42" data-user-role="admin">Click</button>

// JavaScript
const btn = document.getElementById('myBtn');
console.log(btn.dataset.userId);    // Output: "42"
console.log(btn.dataset.userRole); // Output: "admin"`}
        />
        <Typography variant="body2" color="text.secondary" mt={1}>
          🧩 JavaScript automatically converts kebab-case to camelCase (e.g.,{" "}
          <code>data-user-id</code> → <code>userId</code>).
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✍️ Updating <code>data-*</code> Attributes via JavaScript
        </Typography>
        <CodeBlock
          code={`// Update or add a data attribute
btn.dataset.userId = '99';

// You can also remove it
delete btn.dataset.userRole;`}
        />
        <Typography variant="body2" color="text.secondary" mt={1}>
          ✅ All updates reflect in the HTML and can be inspected in dev tools.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Real-World Use Cases
        </Typography>
        <ul>
          <li>
            <strong>Storing IDs</strong> to be used in click handlers
          </li>
          <li>
            <strong>Storing flags</strong> like <code>data-expanded</code> or{" "}
            <code>data-visible</code>
          </li>
          <li>
            <strong>Mapping data</strong> from HTML to JS in frameworks (e.g.,
            dropdown values)
          </li>
          <li>
            <strong>Tagging UI elements</strong> with extra metadata
          </li>
        </ul>
        <CodeBlock
          code={`<div class="product-card" data-product-id="sku123" data-category="electronics">
<h3>Smartphone</h3>
<button>Add to Cart</button>
</div>

// JS: Event Delegation Example
document.addEventListener('click', function (e) {
if (e.target.tagName === 'BUTTON') {
  const parent = e.target.closest('.product-card');
  const productId = parent.dataset.productId;
  console.log('Adding product:', productId);
}
});`}
        />
        <Typography variant="body2" color="text.secondary" mt={1}>
          🔥 Very handy for dynamic UI interactions and event delegation!
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ Things to Keep in Mind
        </Typography>
        <ul>
          <li>
            <strong>Data types are always strings</strong> — parse if needed.
          </li>
          <li>
            <strong>Not meant for large data blobs</strong>. Use for small,
            temporary values.
          </li>
          <li>
            <strong>Avoid storing sensitive data</strong> in <code>data-*</code>{" "}
            — it’s visible in the DOM.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          💡 Tip: Think of <code>data-*</code> attributes as a bridge between
          HTML and JavaScript — perfect for enhancing interactivity in a clean,
          maintainable way.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the difference between <div> and <section>?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧱 Difference Between <code>&lt;div&gt;</code> and{" "}
          <code>&lt;section&gt;</code> in HTML5
        </Typography>

        <Typography paragraph>
          Both <code>&lt;div&gt;</code> and <code>&lt;section&gt;</code> are
          block-level elements, but they serve different purposes in terms of
          **semantics**, **structure**, and **accessibility**. Here's a deep
          dive:
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 1. What is a <code>&lt;div&gt;</code>?
        </Typography>
        <Typography paragraph>
          <code>&lt;div&gt;</code> stands for "division" and is a
          **non-semantic** container — it carries **no meaning** about the
          content it wraps. It's commonly used for layout and styling purposes.
        </Typography>

        <CodeBlock
          code={`<!-- Example -->
<div class="card">
<div class="card-header">Title</div>
<div class="card-body">Content here</div>
</div>`}
        />

        <Typography variant="body2" color="text.secondary" mt={1}>
          ✅ Use <code>&lt;div&gt;</code> when you only need a wrapper with no
          semantic meaning.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📑 2. What is a <code>&lt;section&gt;</code>?
        </Typography>
        <Typography paragraph>
          <code>&lt;section&gt;</code> is a **semantic** tag introduced in
          HTML5. It represents a standalone part of a document that has a
          **specific topic** or **functional grouping**. It’s ideal when content
          could be titled with a heading and appear in an outline.
        </Typography>

        <CodeBlock
          code={`<!-- Example -->
<section>
<h2>Latest Articles</h2>
<article>...</article>
<article>...</article>
</section>`}
        />

        <Typography variant="body2" color="text.secondary" mt={1}>
          ✅ Use <code>&lt;section&gt;</code> to enhance **accessibility**,
          **SEO**, and **document structure**.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚖️ 3. Key Differences
        </Typography>

        <ul>
          <li>
            <strong>Semantics:</strong> <code>&lt;div&gt;</code> = no meaning,{" "}
            <code>&lt;section&gt;</code> = meaningful grouping
          </li>
          <li>
            <strong>Outline Inclusion:</strong> <code>&lt;section&gt;</code> is
            part of the page outline when it includes headings
          </li>
          <li>
            <strong>Accessibility:</strong> <code>&lt;section&gt;</code>{" "}
            improves screen reader navigation
          </li>
          <li>
            <strong>Usage:</strong> <code>&lt;div&gt;</code> is for generic
            styling, <code>&lt;section&gt;</code> is for document structure
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 4. Best Practices
        </Typography>

        <ul>
          <li>
            Use <code>&lt;section&gt;</code> when your content can be logically
            grouped and titled
          </li>
          <li>
            Use <code>&lt;div&gt;</code> for layout, grid systems, and styling
            containers
          </li>
          <li>
            Always include a heading (like <code>&lt;h2&gt;</code>) inside a{" "}
            <code>&lt;section&gt;</code> for semantic structure
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 5. Real-World Comparison
        </Typography>

        <Typography paragraph>
          Consider a blog page. Here's how both would be used:
        </Typography>

        <CodeBlock
          code={`<!-- BAD: All generic containers -->
<div class="blog">
<div class="post">
  <div class="title">Post Title</div>
  <div class="content">Lorem ipsum...</div>
</div>
</div>

<!-- GOOD: Semantically structured -->
<section class="blog">
<article class="post">
  <h2 class="title">Post Title</h2>
  <p class="content">Lorem ipsum...</p>
</article>
</section>`}
        />

        <Typography variant="body2" color="text.secondary" mt={1}>
          ✅ The second example improves SEO, accessibility, and browser
          understanding.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 6. Common Mistakes
        </Typography>

        <ul>
          <li>
            ❌ Using <code>&lt;section&gt;</code> without a heading — this
            breaks semantic structure
          </li>
          <li>
            ❌ Using <code>&lt;section&gt;</code> for layout-only purposes
          </li>
          <li>
            ❌ Nesting too many meaningless <code>&lt;div&gt;</code> elements
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          💡 Tip: Think of <code>&lt;section&gt;</code> as a document’s chapter
          and <code>&lt;div&gt;</code> as a blank box. Use them wisely for
          maintainable and accessible HTML!
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are global attributes in HTML5?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🌐 Global Attributes in HTML5
        </Typography>

        <Typography paragraph>
          Global attributes are standard attributes that can be applied to{" "}
          <strong>any HTML element</strong>, regardless of its tag. They provide
          useful metadata, event handling, and accessibility enhancements.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📋 Common Global Attributes
        </Typography>

        <ul>
          <li>
            <code>id</code>: Unique identifier for the element.
          </li>
          <li>
            <code>class</code>: CSS class name(s) for styling.
          </li>
          <li>
            <code>style</code>: Inline styles (not recommended for large-scale
            apps).
          </li>
          <li>
            <code>title</code>: Tooltip text shown on hover.
          </li>
          <li>
            <code>hidden</code>: Hides the element visually.
          </li>
          <li>
            <code>tabindex</code>: Defines tab order for accessibility.
          </li>
          <li>
            <code>contenteditable</code>: Allows text editing within the
            element.
          </li>
          <li>
            <code>data-*</code>: Custom data attributes (great for JS logic).
          </li>
          <li>
            <code>lang</code>: Language declaration.
          </li>
          <li>
            <code>draggable</code>: Allows an element to be dragged.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Code Examples
        </Typography>

        <CodeBlock
          code={`<!-- Example with id, class, style, title -->
<div
id="welcome-box"
class="box primary"
style="background-color: lightblue;"
title="Welcome message"
>
Hello, user!
</div>

<!-- Hidden element -->
<p hidden>This paragraph is hidden from view.</p>

<!-- Editable content -->
<div contenteditable="true">
You can edit this text!
</div>

<!-- Custom data-* attribute -->
<button data-user-id="42">View Profile</button>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ♿ Accessibility & Interactivity
        </Typography>

        <Typography paragraph>
          Attributes like <code>tabindex</code>, <code>aria-*</code>, and{" "}
          <code>lang</code> enhance keyboard navigation and screen reader
          support.
        </Typography>

        <CodeBlock
          code={`<!-- Tab index and language example -->
<section tabindex="0" lang="en">
Accessible content in English.
</section>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Best Practices
        </Typography>

        <ul>
          <li>
            Use <code>id</code> sparingly — for targeting unique elements only
          </li>
          <li>
            Avoid inline <code>style</code>; prefer CSS classes
          </li>
          <li>
            Always define <code>lang</code> for localization and screen readers
          </li>
          <li>
            Use <code>data-*</code> for passing information to JavaScript
          </li>
          <li>
            Ensure proper <code>tabindex</code> to avoid accessibility issues
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          💡 Global attributes make your HTML more versatile, interactive, and
          accessible when used effectively.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the difference between tag and element?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔍 Difference Between HTML Tag and HTML Element
        </Typography>

        <Typography paragraph>
          HTML is composed of tags and elements, and while they are closely
          related, they serve distinct purposes in structuring your document.
          Let's break it down clearly with definitions, examples, and
          optimizations.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔖 What is an HTML Tag?
        </Typography>
        <Typography paragraph>
          An HTML <strong>tag</strong> is the markup you write to define an HTML
          element. Tags usually appear in pairs: an <strong>opening tag</strong>{" "}
          and a <strong>closing tag</strong>, except for self-closing tags.
        </Typography>

        <CodeBlock
          code={`<p>This is a paragraph</p>

// <p> - opening tag
// </p> - closing tag`}
        />

        <Typography paragraph>
          You can also have self-closing tags, which don’t require an explicit
          closing:
        </Typography>

        <CodeBlock
          code={`<img src="logo.png" alt="Logo" />

// <img /> - self-closing tag`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 What is an HTML Element?
        </Typography>
        <Typography paragraph>
          An HTML <strong>element</strong> is the complete structure — the
          tag(s) and the content inside it.
        </Typography>

        <CodeBlock
          code={`<h1>Hello, world!</h1>

// Full HTML element:
// - <h1> — opening tag
// - Hello, world! — content
// - </h1> — closing tag
// All together = an HTML element`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚖️ Summary of the Difference
        </Typography>

        <Typography component="ul">
          <li>
            <strong>Tag:</strong> Syntax used to define an element (e.g.,{" "}
            <code>{`<p>`}</code>, <code>{`</p>`}</code>).
          </li>
          <li>
            <strong>Element:</strong> The complete unit — tags <em>plus</em> the
            content between them.
          </li>
          <li>
            <strong>Think of it this way:</strong> A tag is like the wrapper,
            the element is the wrapped gift.
          </li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Why It Matters
        </Typography>
        <Typography component="ul">
          <li>Properly closing tags ensures a valid DOM tree structure.</li>
          <li>
            Understanding the difference helps when working with APIs like the
            DOM (e.g., <code>document.createElement()</code> vs setting
            innerHTML).
          </li>
          <li>Prevents browser rendering issues and improves accessibility.</li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          💡 Tip: Always write well-structured elements using both opening and
          closing tags unless it's a self-closing tag like{" "}
          <code>{`<img />`}</code> or <code>{`<br />`}</code>.
        </Typography>
      </Box>
    ),
  },
];
