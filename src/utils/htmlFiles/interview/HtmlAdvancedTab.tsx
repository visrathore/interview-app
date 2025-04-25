import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const HTML_ADVANCED_DATA = [
  {
    heading:
      "What is the difference between async and defer attributes on <script> tags?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧑‍💻 Difference Between <code>async</code> and <code>defer</code>{" "}
          Attributes on <code>&lt;script&gt;</code> Tags
        </Typography>

        <Typography paragraph>
          The <code>async</code> and <code>defer</code> attributes are used with
          the <code>&lt;script&gt;</code> tag to control how JavaScript files
          are loaded and executed in the browser. These attributes are crucial
          for optimizing performance, especially in terms of load times and
          resource management.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📜 <code>async</code> Attribute
        </Typography>

        <Typography paragraph>
          The <code>async</code> attribute allows the script to be executed
          asynchronously, meaning it is fetched and executed as soon as it’s
          available. The browser does not block HTML parsing while fetching the
          script, which can help improve page load time. However, the script is
          executed as soon as it’s ready, potentially before the DOM is fully
          parsed. This can result in an unpredictable order of script execution,
          especially when scripts are dependent on each other.
        </Typography>

        <CodeBlock
          code={`<script async src="https://example.com/script.js"></script>`}
        />

        <Typography paragraph>
          In the example above:
          <ul>
            <li>
              The script is fetched asynchronously without blocking the parsing
              of HTML.
            </li>
            <li>
              The script is executed immediately once it's available, which may
              not be in the order in which the <code>&lt;script&gt;</code> tags
              appear.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📜 <code>defer</code> Attribute
        </Typography>

        <Typography paragraph>
          The <code>defer</code> attribute also allows scripts to be loaded
          asynchronously, but it differs in that the script is executed after
          the HTML document has been completely parsed. This ensures that
          scripts are executed in the order they are listed in the HTML,
          regardless of how long each script takes to load.
        </Typography>

        <CodeBlock
          code={`<script defer src="https://example.com/script.js"></script>`}
        />

        <Typography paragraph>
          In this example:
          <ul>
            <li>
              The script is fetched asynchronously, but execution is deferred
              until the entire HTML document is parsed.
            </li>
            <li>
              Scripts with the <code>defer</code> attribute will always execute
              in the order they appear in the HTML, even if one takes longer to
              load than the other.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Key Differences
        </Typography>

        <Typography paragraph>
          Here’s a comparison table that summarizes the differences between the{" "}
          <code>async</code> and <code>defer</code> attributes:
        </Typography>

        <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Async vs Defer Comparison
          </Typography>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Attribute
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  When Script is Executed
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Execution Order
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <code>async</code>
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  As soon as it is available
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Unpredictable
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <code>defer</code>
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  After the document is fully parsed
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  In the order they appear in HTML
                </td>
              </tr>
            </tbody>
          </table>
        </Paper>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📊 Which One Should You Use?
        </Typography>

        <Typography paragraph>
          - **Use <code>async</code>** when you have independent scripts that
          don’t rely on each other or on the DOM. For example, scripts that
          track analytics or ads can be loaded asynchronously to avoid blocking
          page rendering. - **Use <code>defer</code>** when your scripts rely on
          the DOM or need to be executed in a specific order. For example,
          libraries like jQuery, or scripts that manipulate the DOM, should be
          deferred until after the document is fully parsed to avoid issues with
          elements not being available when the script runs.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={3}>
          💡 Tip: Use <code>defer</code> for scripts that interact with the DOM
          or need to execute in order, and use <code>async</code> for
          independent scripts that can load and run without dependencies.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "How does HTML5 support multimedia? (<audio>, <video>, codecs, controls, autoplay, loop, etc.)",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🎧 How HTML5 Supports Multimedia: <code>&lt;audio&gt;</code> and{" "}
          <code>&lt;video&gt;</code> Tags
        </Typography>

        <Typography paragraph>
          HTML5 introduced the <code>&lt;audio&gt;</code> and{" "}
          <code>&lt;video&gt;</code> elements, allowing developers to directly
          embed audio and video files in their web pages. These elements support
          various codecs, playback controls, and attributes such as{" "}
          <code>autoplay</code>, <code>loop</code>, and <code>muted</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎬 <code>&lt;audio&gt;</code> Element
        </Typography>

        <Typography paragraph>
          The <code>&lt;audio&gt;</code> element is used to embed audio content.
          You can specify one or more audio sources using the <code>src</code>{" "}
          attribute or the <code>&lt;source&gt;</code> element. The{" "}
          <code>controls</code> attribute enables the browser's default audio
          controls, such as play, pause, and volume adjustment.
        </Typography>

        <CodeBlock
          code={`<audio controls>
<source src="path-to-audio.mp3" type="audio/mp3" />
Your browser does not support the audio element.
</audio>`}
        />

        <Typography paragraph>
          In this example:
          <ul>
            <li>
              The <code>controls</code> attribute provides default audio
              controls like play/pause, volume, and seek bar.
            </li>
            <li>
              The <code>&lt;source&gt;</code> element specifies the audio source
              and MIME type, ensuring cross-browser compatibility.
            </li>
            <li>
              The fallback text ("Your browser does not support the audio
              element.") is displayed if the browser doesn't support the{" "}
              <code>&lt;audio&gt;</code> element.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎥 <code>&lt;video&gt;</code> Element
        </Typography>

        <Typography paragraph>
          The <code>&lt;video&gt;</code> element allows you to embed video
          content in your web pages. Like the <code>&lt;audio&gt;</code>{" "}
          element, the <code>&lt;video&gt;</code> element can include multiple{" "}
          <code>&lt;source&gt;</code> elements for different video formats
          (e.g., MP4, WebM, Ogg). It also supports the <code>controls</code>{" "}
          attribute for built-in video controls.
        </Typography>

        <CodeBlock
          code={`<video controls width="600">
<source src="path-to-video.mp4" type="video/mp4" />
<source src="path-to-video.webm" type="video/webm" />
Your browser does not support the video element.
</video>`}
        />

        <Typography paragraph>
          In this example:
          <ul>
            <li>
              The <code>controls</code> attribute provides built-in playback
              controls (play/pause, volume, fullscreen, etc.).
            </li>
            <li>
              The <code>width</code> attribute sets the size of the video
              player.
            </li>
            <li>
              Multiple video formats (<code>mp4</code> and <code>webm</code>)
              are included for compatibility with different browsers.
            </li>
            <li>
              The fallback text appears if the browser does not support the{" "}
              <code>&lt;video&gt;</code> element.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎧 Key Multimedia Attributes
        </Typography>

        <Typography paragraph>
          The <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements
          support several useful attributes:
        </Typography>

        <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Multimedia Attributes Overview
          </Typography>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Attribute
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <code>autoplay</code>
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Automatically starts playing the media as soon as it is ready.
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <code>loop</code>
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Makes the media loop continuously when it finishes playing.
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <code>muted</code>
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Mutes the media playback (audio/video).
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <code>preload</code>
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Specifies if the browser should load the media when the page
                  loads. Can be <code>auto</code>, <code>metadata</code>, or{" "}
                  <code>none</code>.
                </td>
              </tr>
            </tbody>
          </table>
        </Paper>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔧 Codec Support and Compatibility
        </Typography>

        <Typography paragraph>
          The <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements
          rely on browser support for specific media formats (codecs). Some
          common audio codecs are MP3, Ogg, and AAC, while common video codecs
          include MP4 (H.264), WebM, and Ogg.
        </Typography>

        <Typography paragraph>
          To ensure compatibility across different browsers, it's best to
          include multiple sources in different formats, as shown in the
          previous examples. Browsers will choose the first compatible source.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={3}>
          💡 Tip: While MP4 (H.264) is widely supported in modern browsers for
          video, WebM and Ogg provide open alternatives. For audio, MP3 is the
          most universally supported format.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain the concept of sandboxing using <iframe> in HTML5.",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🛡️ Sandboxing with <code>&lt;iframe&gt;</code> in HTML5
        </Typography>

        <Typography paragraph>
          The <code>&lt;iframe&gt;</code> element in HTML5 allows embedding
          external content (e.g., another webpage) into your document. However,
          to ensure the security of your website, the <code>sandbox</code>{" "}
          attribute of the <code>&lt;iframe&gt;</code> element is used to impose
          security restrictions on the content inside the iframe.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔐 Key Features of the <code>sandbox</code> Attribute
        </Typography>

        <Typography paragraph>
          The <code>sandbox</code> attribute can include multiple restrictions.
          By default, it enables the following:
          <ul>
            <li>
              <strong>Disables JavaScript execution</strong>: The content inside
              the iframe cannot run JavaScript.
            </li>
            <li>
              <strong>Prevents form submissions</strong>: Forms within the
              iframe cannot submit data.
            </li>
            <li>
              <strong>Blocks plugins</strong>: Plugins like Flash are blocked.
            </li>
            <li>
              <strong>Prevents top-level navigation</strong>: The iframe content
              cannot navigate the parent page.
            </li>
            <li>
              <strong>Prevents access to local storage and cookies</strong>:
              Local storage and cookies are inaccessible unless specified by the
              `allow-same-origin` keyword.
            </li>
          </ul>
        </Typography>

        <Typography paragraph>
          You can selectively lift these restrictions using specific keywords,
          as described below:
        </Typography>

        <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Sandboxing Keywords
          </Typography>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Keyword
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <code>allow-forms</code>
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Allows form submission within the iframe.
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <code>allow-scripts</code>
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Allows JavaScript to run inside the iframe.
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <code>allow-same-origin</code>
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Allows the iframe content to access local storage and cookies.
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <code>allow-top-navigation</code>
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Allows the iframe to navigate the top-level browsing context
                  (the parent window).
                </td>
              </tr>
            </tbody>
          </table>
        </Paper>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🖥️ Example of Using <code>sandbox</code> with{" "}
          <code>&lt;iframe&gt;</code>
        </Typography>

        <Typography paragraph>
          Here is an example of an <code>&lt;iframe&gt;</code> with the{" "}
          <code>sandbox</code> attribute applied:
        </Typography>

        <CodeBlock
          code={`<iframe src="https://example.com" width="600" height="400" sandbox="allow-scripts allow-forms"></iframe>`}
        />

        <Typography paragraph>
          In this example:
          <ul>
            <li>
              The <code>src</code> attribute specifies the URL of the embedded
              content.
            </li>
            <li>
              The <code>sandbox</code> attribute restricts the embedded content.
              It allows the content to run JavaScript and submit forms but still
              blocks other features like plugins and top-level navigation.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔧 Common Use Cases
        </Typography>

        <Typography paragraph>
          Sandboxing with <code>&lt;iframe&gt;</code> is useful in several
          scenarios:
          <ul>
            <li>
              <strong>Embedding third-party content</strong>: When embedding
              content from an external source, sandboxing ensures that the
              external content does not compromise the security of your site.
            </li>
            <li>
              <strong>Preventing cross-site scripting (XSS) attacks</strong>: By
              disabling JavaScript execution, sandboxing minimizes the risk of
              malicious scripts running in the iframe.
            </li>
            <li>
              <strong>Limiting interaction with the parent page</strong>: The
              sandbox prevents the embedded content from accessing cookies,
              local storage, or performing navigation actions that might affect
              the parent page.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={3}>
          💡 Tip: When embedding trusted content (e.g., your own site), you can
          loosen the sandbox restrictions. For external, untrusted content, it's
          better to keep the sandbox restrictions as tight as possible.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the purpose of the srcset and sizes attributes in <img>?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📸 Purpose of <code>srcset</code> and <code>sizes</code> Attributes in{" "}
          <code>&lt;img&gt;</code>
        </Typography>

        <Typography paragraph>
          The <code>srcset</code> and <code>sizes</code> attributes in HTML5
          help enhance the responsiveness of images. These attributes allow
          browsers to choose the best image based on the device's screen size
          and resolution, ensuring an optimized and efficient image delivery.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🌐 <code>srcset</code> Attribute
        </Typography>

        <Typography paragraph>
          The <code>srcset</code> attribute defines a set of images with
          different resolutions or sizes. This allows the browser to pick the
          image that best fits the screen's resolution and size. It is
          especially useful for ensuring high-resolution images (e.g., Retina
          displays) are served to devices that can handle them.
        </Typography>

        <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Example of <code>srcset</code> Usage
          </Typography>
          <CodeBlock
            code={`<img srcset="image-320w.jpg 320w, image-480w.jpg 480w, image-800w.jpg 800w" alt="Example image" />`}
          />
          <Typography paragraph>
            In this example:
            <ul>
              <li>
                The browser will select <code>image-320w.jpg</code> for small
                screens.
              </li>
              <li>
                If the screen is larger, the browser might choose{" "}
                <code>image-480w.jpg</code> or <code>image-800w.jpg</code>{" "}
                depending on the screen size.
              </li>
            </ul>
          </Typography>
        </Paper>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📱 <code>sizes</code> Attribute
        </Typography>

        <Typography paragraph>
          The <code>sizes</code> attribute is used to specify how the image's
          size will change based on the viewport size. It tells the browser how
          wide the image will be displayed, helping the browser choose the
          correct image from the <code>srcset</code> list.
        </Typography>

        <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Example of <code>sizes</code> Usage
          </Typography>
          <CodeBlock
            code={`<img srcset="image-320w.jpg 320w, image-480w.jpg 480w, image-800w.jpg 800w"
   sizes="(max-width: 600px) 100vw, 50vw" alt="Example image" />`}
          />
          <Typography paragraph>
            In this example:
            <ul>
              <li>
                If the viewport width is 600px or less, the image will take up
                100% of the viewport width (<code>100vw</code>).
              </li>
              <li>
                If the viewport is wider than 600px, the image will take up 50%
                of the viewport width (<code>50vw</code>).
              </li>
            </ul>
          </Typography>
        </Paper>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚀 Combining <code>srcset</code> and <code>sizes</code>
        </Typography>

        <Typography paragraph>
          By using both <code>srcset</code> and <code>sizes</code> together, you
          can deliver responsive images that adjust both based on the screen
          resolution and the available space within the layout. This ensures
          that the browser loads the most appropriate image based on both the
          screen’s resolution and the available space in the layout.
        </Typography>

        <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Combined Example
          </Typography>
          <CodeBlock
            code={`<img srcset="image-320w.jpg 320w, image-480w.jpg 480w, image-800w.jpg 800w"
   sizes="(max-width: 600px) 100vw, 50vw" alt="Responsive image" />`}
          />
        </Paper>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          💡 Benefits of Using <code>srcset</code> and <code>sizes</code>
        </Typography>

        <Typography paragraph>
          Using <code>srcset</code> and <code>sizes</code> provides several
          benefits:
          <ul>
            <li>
              <strong>Improved performance</strong>: The browser will only load
              the most appropriate image based on the device's resolution and
              the image's layout size, improving load times and reducing
              unnecessary bandwidth usage.
            </li>
            <li>
              <strong>Better user experience</strong>: Users will get
              high-quality images on devices with high-resolution displays
              (e.g., Retina), while lower resolution images are served to
              standard displays, making the page load faster.
            </li>
            <li>
              <strong>Responsive design</strong>: These attributes are essential
              for responsive images, ensuring that your images look great on
              devices with different screen sizes.
            </li>
          </ul>
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are ARIA roles and how do they improve accessibility?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔑 ARIA Roles and Their Purpose in Accessibility
        </Typography>

        <Typography paragraph>
          ARIA (Accessible Rich Internet Applications) roles help improve the
          accessibility of web applications by providing meaningful context to
          non-semantic elements. These roles allow assistive technologies, like
          screen readers, to interpret elements correctly and provide a better
          experience for users with disabilities.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          👩‍🦯 What are ARIA Roles?
        </Typography>

        <Typography paragraph>
          ARIA roles are attributes that can be added to HTML elements to
          describe their purpose and behavior. They help assistive technologies
          understand non-semantic HTML elements and interpret their role in the
          UI.
        </Typography>

        <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Common ARIA Roles
          </Typography>
          <CodeBlock
            code={`<div role="button">Click Me</div>
<nav role="navigation">...</nav>
<div role="dialog">...</div>`}
          />
          <Typography paragraph>
            Here are a few examples of common ARIA roles:
            <ul>
              <li>
                <code>role="button"</code>: Defines an element as a button.
              </li>
              <li>
                <code>role="navigation"</code>: Defines an element as a
                navigation section.
              </li>
              <li>
                <code>role="dialog"</code>: Defines an element as a modal
                dialog.
              </li>
            </ul>
          </Typography>
        </Paper>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧑‍💻 How Do ARIA Roles Improve Accessibility?
        </Typography>

        <Typography paragraph>
          ARIA roles improve accessibility in several ways:
          <ul>
            <li>
              <strong>Enhanced Screen Reader Support</strong>: ARIA roles help
              screen readers understand the purpose of elements, ensuring they
              are described correctly to users with visual impairments.
            </li>
            <li>
              <strong>Navigational Landmarks</strong>: Roles like{" "}
              <code>role="navigation"</code> or <code>role="main"</code> help
              users navigate to different sections of the page quickly.
            </li>
            <li>
              <strong>State Management</strong>: ARIA roles expose dynamic
              states (e.g., whether a modal is open) to assistive technologies.
            </li>
            <li>
              <strong>Keyboard Accessibility</strong>: ARIA roles define the
              expected interaction for keyboard users, improving accessibility
              for those who cannot use a mouse.
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🎯 Example: Button with <code>role="button"</code>
        </Typography>

        <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Code Example for <code>role="button"</code>
          </Typography>
          <CodeBlock
            code={`<div role="button" tabindex="0" aria-label="Close" onclick="closeWindow()">Close</div>`}
          />
          <Typography paragraph>
            In this example:
            <ul>
              <li>
                <code>role="button"</code> makes the <code>div</code> behave
                like a button, allowing screen readers to describe it as a
                button.
              </li>
              <li>
                <code>tabindex="0"</code> allows the element to be focused and
                interacted with using the keyboard.
              </li>
              <li>
                <code>aria-label="Close"</code> provides a label to describe the
                button's purpose to screen readers.
              </li>
            </ul>
          </Typography>
        </Paper>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🖼️ Example: Modal with <code>role="dialog"</code>
        </Typography>

        <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Code Example for <code>role="dialog"</code>
          </Typography>
          <CodeBlock
            code={`<div role="dialog" aria-labelledby="dialogTitle" aria-hidden="true">
<h2 id="dialogTitle">Modal Dialog</h2>
<button onclick="closeDialog()">Close</button>
</div>`}
          />
          <Typography paragraph>
            In this example:
            <ul>
              <li>
                <code>role="dialog"</code> indicates that the <code>div</code>{" "}
                is a modal dialog.
              </li>
              <li>
                <code>aria-labelledby="dialogTitle"</code> points to the element
                that describes the dialog's title, providing context for screen
                reader users.
              </li>
              <li>
                <code>aria-hidden="true"</code> hides the dialog from assistive
                technologies until it's opened.
              </li>
            </ul>
          </Typography>
        </Paper>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧑‍🔧 Optimized Code for Accessibility
        </Typography>

        <Typography paragraph>
          To optimize accessibility, ensure that interactive elements are
          focusable and provide appropriate roles and labels. Make sure to test
          your website with screen readers and ensure keyboard navigation works
          as expected.
        </Typography>
        <CodeBlock
          code={`<Button variant="contained" color="primary">
          Learn More about Accessibility
        </Button>`}
        />
      </Box>
    ),
  },
  {
    heading: "How do you make a website mobile-friendly using HTML5?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📱 How to Make a Website Mobile-Friendly Using HTML5
        </Typography>

        <Typography paragraph>
          Making a website mobile-friendly ensures it works well on smaller
          screens and touch-based devices. HTML5, combined with best practices
          in layout, metadata, and responsiveness, helps achieve this
          effectively.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔑 Key Techniques for Mobile-Friendly Design
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="1. Use the viewport meta tag"
              secondary="Controls layout on mobile browsers."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="2. Responsive design with CSS media queries"
              secondary="Adapt layout to different screen sizes."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="3. Flexible grids and layouts"
              secondary="Use percentages or flexbox instead of fixed pixels."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="4. Responsive images"
              secondary="Use HTML5 attributes and CSS to scale images."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="5. Touch-friendly UI elements"
              secondary="Ensure buttons and inputs are easy to interact with."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧩 Example 1: Viewport Meta Tag
        </Typography>
        <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
          <Typography paragraph>
            The viewport meta tag ensures that your layout adapts to the screen
            size.
          </Typography>
          <CodeBlock
            code={`<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`}
          />
        </Paper>

        <Typography variant="h5" gutterBottom>
          🧩 Example 2: Responsive Layout with CSS Media Queries
        </Typography>
        <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
          <Typography paragraph>
            Use media queries to apply styles based on screen size:
          </Typography>
          <CodeBlock
            code={`<style>
body {
  font-size: 16px;
}

@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
</style>`}
          />
        </Paper>

        <Typography variant="h5" gutterBottom>
          🧩 Example 3: Responsive Images
        </Typography>
        <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
          <Typography paragraph>
            Use <code>max-width</code> to ensure images scale within their
            container.
          </Typography>
          <CodeBlock
            code={`<img src="image.jpg" alt="Responsive" style={{ maxWidth: '100%', height: 'auto' }} />`}
          />
        </Paper>

        <Typography variant="h5" gutterBottom>
          🧩 Example 4: Flexbox Layout for Flexibility
        </Typography>
        <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
          <Typography paragraph>
            Flexbox makes layout flexible and responsive:
          </Typography>
          <CodeBlock
            code={`<style>
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 100%;
}

@media (min-width: 768px) {
  .item {
    flex: 1 1 50%;
  }
}
</style>`}
          />
        </Paper>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Summary
        </Typography>
        <Typography paragraph>
          HTML5 combined with CSS responsiveness, flexible images, and the
          viewport meta tag allows you to build websites that work well on all
          devices. Optimizing for mobile ensures a better user experience and
          improves SEO.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      'What is the difference between rel="noopener" and rel="noreferrer"?',
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔗 Difference Between <code>rel="noopener"</code> and{" "}
          <code>rel="noreferrer"</code>
        </Typography>

        <Typography paragraph>
          When using <code>{`<a>`}</code> tags to open external links with{" "}
          <code>target="_blank"</code>, security concerns arise. To prevent
          malicious behaviors like tabnabbing and leaking referrer info, we use
          attributes like <code>rel="noopener"</code> and{" "}
          <code>rel="noreferrer"</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 <code>rel="noopener"</code>
        </Typography>
        <Typography paragraph>
          Prevents the new tab from accessing the <code>window.opener</code>{" "}
          property. This improves performance and security by protecting the
          current page from being manipulated by the newly opened page.
        </Typography>
        <CodeBlock
          code={`<a href="https://example.com" target="_blank" rel="noopener">
Visit Example (safe with noopener)
</a>`}
        />

        <Typography paragraph>
          ✅ Use this when you want to protect the current page from the newly
          opened tab, especially against <strong>tabnabbing attacks</strong>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🕵️‍♂️ <code>rel="noreferrer"</code>
        </Typography>
        <Typography paragraph>
          Not only includes the behavior of <code>noopener</code>, but also
          prevents the browser from sending the <code>Referer</code> header to
          the new page. This means the destination website won't know where the
          user came from.
        </Typography>
        <CodeBlock
          code={`<a href="https://example.com" target="_blank" rel="noreferrer">
Visit Example (no referrer info sent)
</a>`}
        />
        <Typography paragraph>
          ✅ Use this if you need maximum privacy and don’t want to leak your
          site URL to the external destination.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚖️ Comparison Table
        </Typography>

        <Box
          component="table"
          sx={{ width: "100%", borderCollapse: "collapse", my: 2 }}
        >
          <thead>
            <tr>
              <th
                style={{
                  borderBottom: "2px solid #ccc",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                Attribute
              </th>
              <th
                style={{
                  borderBottom: "2px solid #ccc",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                Prevents <code>window.opener</code>
              </th>
              <th
                style={{
                  borderBottom: "2px solid #ccc",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                Hides Referrer
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "8px" }}>
                <code>noopener</code>
              </td>
              <td style={{ padding: "8px" }}>✅ Yes</td>
              <td style={{ padding: "8px" }}>❌ No</td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <code>noreferrer</code>
              </td>
              <td style={{ padding: "8px" }}>✅ Yes</td>
              <td style={{ padding: "8px" }}>✅ Yes</td>
            </tr>
          </tbody>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Best Practices
        </Typography>
        <ul>
          <li>
            Always use <code>rel="noopener"</code> with{" "}
            <code>target="_blank"</code> for security.
          </li>
          <li>
            Use <code>rel="noreferrer"</code> only if you also want to hide the
            referrer.
          </li>
          <li>
            Avoid using <code>target="_blank"</code> without any{" "}
            <code>rel</code> attribute.
          </li>
        </ul>

        <Typography variant="body2" color="text.secondary" mt={4}>
          💡 Tip: You can combine them: <code>rel="noopener noreferrer"</code> —
          this ensures both security and privacy.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are custom elements or Web Components in HTML5?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧩 Custom Elements (Web Components) in HTML5
        </Typography>

        <Typography paragraph>
          <strong>Web Components</strong> are a set of features in HTML5 that
          allow you to create reusable custom elements with their own
          encapsulated functionality and styling. They are part of the Web
          Standards and work across all modern browsers.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔧 Key Features of Web Components
        </Typography>
        <ul>
          <li>
            <strong>Custom Elements</strong> – Define your own HTML tags.
          </li>
          <li>
            <strong>Shadow DOM</strong> – Encapsulation of styles and structure.
          </li>
          <li>
            <strong>HTML Templates</strong> – Define markup templates for reuse.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✍️ Creating a Custom Element
        </Typography>
        <Typography paragraph>
          Below is a custom element named <code>&lt;my-greeting&gt;</code> that
          uses Shadow DOM:
        </Typography>

        <CodeBlock
          code={`// JavaScript: Registering the custom element
class MyGreeting extends HTMLElement {
constructor() {
  super();

  // Create shadow root
  const shadow = this.attachShadow({ mode: 'open' });

  // Create content
  const wrapper = document.createElement('div');
  wrapper.textContent = \`Hello, \${this.getAttribute('name') || 'World'}!\`;

  const style = document.createElement('style');
  style.textContent = \`
    div {
      background-color: #6200ea;
      color: white;
      padding: 10px;
      border-radius: 8px;
    }
  \`;

  shadow.appendChild(style);
  shadow.appendChild(wrapper);
}
}

customElements.define('my-greeting', MyGreeting);`}
        />

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          🧪 Usage in HTML
        </Typography>
        <CodeBlock
          code={`<!-- HTML -->
<my-greeting name="Frontend Dev"></my-greeting>`}
        />

        <Box mt={3}>
          <Typography variant="h6" gutterBottom>
            🧾 Output Preview
          </Typography>
          <Box mt={1}>
            {/* Render the custom element */}
            <CodeBlock
              code={`<my-greeting name="Frontend Dev"></my-greeting>`}
            />
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🛡️ Benefits of Web Components
        </Typography>
        <ul>
          <li>Encapsulation using Shadow DOM – avoids CSS conflicts</li>
          <li>Reusable and maintainable components</li>
          <li>Works with any framework or without one</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🚫 Limitations
        </Typography>
        <ul>
          <li>SEO might be limited depending on rendering</li>
          <li>Requires polyfills in older browsers (like IE)</li>
          <li>
            Styling inside Shadow DOM is isolated (which can be tricky to
            override)
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          🧠 Final Thought
        </Typography>
        <Typography>
          Web Components give frontend developers native component-like
          architecture in pure HTML, JS, and CSS. While not a replacement for
          frameworks, they are perfect for reusable design systems, UI
          libraries, and micro frontends.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How is drag and drop implemented in HTML5?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧲 HTML5 Drag and Drop API
        </Typography>

        <Typography paragraph>
          HTML5 introduced a native API for drag and drop functionality. It
          allows elements to be dragged and dropped with minimal JavaScript,
          enabling interactive UIs like file uploads, reordering lists, and
          more.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Core Components
        </Typography>
        <Typography paragraph>
          The Drag and Drop API involves 3 major steps:
        </Typography>

        <ul>
          <li>
            <strong>draggable attribute:</strong> Enables an element to be
            draggable.
          </li>
          <li>
            <strong>Data Transfer Object:</strong> Used to store and retrieve
            data during drag operations.
          </li>
          <li>
            <strong>Events:</strong> <code>dragstart</code>,{" "}
            <code>dragover</code>, <code>drop</code>, etc.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧪 Example Code (with comments)
        </Typography>
        <Typography paragraph>
          Here's a simple example demonstrating how to move an element from one
          container to another using plain HTML5.
        </Typography>

        <CodeBlock
          code={`<!-- HTML5 Drag and Drop Basic Example -->
<div id="drag-item" draggable="true" ondragstart="handleDrag(event)">
  Drag me!
</div>

<div id="drop-zone" ondragover="allowDrop(event)" ondrop="handleDrop(event)">
  Drop here
</div>

<script>
  function handleDrag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }

  function allowDrop(event) {
    event.preventDefault(); // Necessary to allow dropping
  }

  function handleDrop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    event.target.appendChild(draggedElement);
  }
</script>`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚛️ React Example with useState
        </Typography>
        <Typography paragraph>
          Below is an example using React + useState to track drag and drop
          behavior:
        </Typography>

        <CodeBlock
          code={`const DragDropReact = () => {
const [dropped, setDropped] = useState(false);

const handleDragStart = (e) => {
  e.dataTransfer.setData("text", "dropped-item");
};

const handleDrop = (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text");
  if (data === "dropped-item") setDropped(true);
};

const allowDrop = (e) => {
  e.preventDefault();
};

return (
  <Box>
    {!dropped ? (
      <Box
        id="draggable"
        draggable
        onDragStart={handleDragStart}
        sx={{
          p: 2,
          backgroundColor: "#90caf9",
          width: "fit-content",
          cursor: "grab",
          mb: 2,
        }}
      >
        Drag me!
      </Box>
    ) : null}

    <Box
      id="dropzone"
      onDrop={handleDrop}
      onDragOver={allowDrop}
      sx={{
        p: 4,
        border: "2px dashed #ccc",
        minHeight: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {dropped ? "Item Dropped!" : "Drop here"}
    </Box>
  </Box>
);
};`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={4}>
          ✅ <strong>Pro Tips:</strong> Always call{" "}
          <code>preventDefault()</code> on <code>dragover</code> to allow drop,
          and consider accessibility when implementing custom drag-and-drop
          interfaces.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "How does HTML5 support offline storage? (AppCache or Service Workers)",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🗂️ HTML5 Offline Storage: AppCache vs Service Workers
        </Typography>

        <Typography paragraph>
          HTML5 introduced powerful offline capabilities that allow websites to
          function without a network connection. While <strong>AppCache</strong>{" "}
          was the original solution, it's now deprecated and replaced by{" "}
          <strong>Service Workers</strong>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧱 Application Cache (AppCache) – ❌ Deprecated
        </Typography>
        <Typography paragraph>
          AppCache allowed developers to specify which files should be cached by
          the browser for offline use. However, it had many pitfalls and is now
          obsolete.
        </Typography>
        <Typography paragraph>
          Example of a <code>manifest.appcache</code>:
        </Typography>
        <CodeBlock
          code={`CACHE MANIFEST
# v1.0.0

CACHE:
index.html
styles.css
main.js

NETWORK:
*`}
        />

        <Typography paragraph>Then you reference it in your HTML:</Typography>
        <CodeBlock code={`<html manifest="manifest.appcache">`} />

        <Typography variant="body2" color="text.secondary">
          ⚠️ AppCache is deprecated and should not be used in modern
          applications.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Service Workers – ✅ Modern Way
        </Typography>
        <Typography paragraph>
          A Service Worker is a script that runs in the background and allows
          fine-grained control over caching and network requests.
        </Typography>
        <Typography paragraph>
          Here's how you register a service worker:
        </Typography>
        <CodeBlock
          code={`if ('serviceWorker' in navigator) {
window.addEventListener('load', () => {
  navigator.serviceWorker.register('/service-worker.js')
    .then(reg => console.log('Service Worker Registered:', reg))
    .catch(err => console.error('Registration failed:', err));
});
}`}
        />

        <Typography paragraph>
          A simple <code>service-worker.js</code> file to cache assets:
        </Typography>
        <CodeBlock
          code={`const CACHE_NAME = 'v1';
const urlsToCache = ['/', '/index.html', '/style.css', '/main.js'];

self.addEventListener('install', (event) => {
event.waitUntil(
  caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
);
});

self.addEventListener('fetch', (event) => {
event.respondWith(
  caches.match(event.request).then((response) => {
    return response || fetch(event.request);
  })
);
});`}
        />

        <Typography paragraph>
          📝 The service worker lifecycle includes:
          <ul>
            <li>
              <strong>Install</strong>: Caches assets
            </li>
            <li>
              <strong>Activate</strong>: Removes old caches
            </li>
            <li>
              <strong>Fetch</strong>: Intercepts network requests
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📋 Advantages of Service Workers over AppCache
        </Typography>
        <Typography component="ul">
          <li>Granular control over caching</li>
          <li>Ability to intercept and modify requests</li>
          <li>Supports push notifications</li>
          <li>Works well with modern tools like Workbox</li>
          <li>Progressive Web App (PWA) compatibility</li>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" mt={2}>
          💡 Pro Tip: Always keep your service worker scripts versioned and test
          thoroughly to avoid unexpected cache issues.
        </Typography>
      </Box>
    ),
  },
];
