import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CodeBlock from "../../../components/UI/CodeBlock";

export const NEXT_BEGINNER_DATA = [
  {
    heading: "What is Next.js?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          ⚡ What is Next.js?
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          <strong>Next.js</strong> is a powerful{" "}
          <strong>React framework</strong> that enables developers to build
          fast, scalable, and user-friendly web applications with built-in
          support for <strong>server-side rendering (SSR)</strong>,{" "}
          <strong>static site generation (SSG)</strong>,{" "}
          <strong>API routes</strong>, and more. Developed by{" "}
          <strong>Vercel</strong>, Next.js helps developers focus on building
          features while handling performance and optimization out of the box.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Features */}
        <Typography variant="h5" gutterBottom>
          🚀 Key Features of Next.js
        </Typography>

        <ul>
          <li>
            <strong>File-based Routing</strong>: Pages are automatically routed
            based on the file system.
          </li>
          <li>
            <strong>Pre-rendering</strong>: Supports both SSR
            (getServerSideProps) and SSG (getStaticProps).
          </li>
          <li>
            <strong>API Routes</strong>: Build backend logic using serverless
            functions.
          </li>
          <li>
            <strong>Image Optimization</strong>: Built-in Image component for
            optimized image loading.
          </li>
          <li>
            <strong>Built-in CSS and Sass Support</strong>: Also supports CSS
            Modules.
          </li>
          <li>
            <strong>Fast Refresh</strong>: Provides instant feedback during
            development.
          </li>
          <li>
            <strong>Incremental Static Regeneration</strong>: Update static
            content after deployment.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Folder Structure */}
        <Typography variant="h5" gutterBottom>
          📁 Basic Folder Structure
        </Typography>

        <CodeBlock
          code={`my-next-app/
  ├── pages/               // Pages (routes) go here
  │   ├── index.tsx        // Home page
  │   └── about.tsx        // About page
  ├── public/              // Static assets
  ├── styles/              // CSS/Sass files
  ├── components/          // Shared React components
  ├── pages/api/           // API routes
  ├── next.config.js       // Configuration file
  └── tsconfig.json        // TypeScript configuration (if using TS)`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Routing */}
        <Typography variant="h5" gutterBottom>
          🧭 Routing in Next.js
        </Typography>

        <Typography paragraph>
          Next.js uses a file-based routing system. Any file created inside the{" "}
          <code>pages/</code> directory automatically becomes a route.
        </Typography>

        <CodeBlock
          code={`// pages/about.tsx
  export default function AboutPage() {
    return <h1>About Us</h1>;
  }
  
  // This will be accessible at /about`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Data Fetching */}
        <Typography variant="h5" gutterBottom>
          🔄 Data Fetching in Next.js
        </Typography>

        <Typography paragraph>
          Next.js supports multiple strategies for fetching data:
        </Typography>

        <ul>
          <li>
            <code>getStaticProps</code>: Static Generation (SSG) – runs at build
            time
          </li>
          <li>
            <code>getServerSideProps</code>: Server-side Rendering (SSR) – runs
            on every request
          </li>
          <li>
            <code>getStaticPaths</code>: For dynamic routes with SSG
          </li>
          <li>
            <code>useSWR</code>: Client-side fetching (React Hooks)
          </li>
        </ul>

        <CodeBlock
          code={`// Example: pages/posts.tsx using getStaticProps
  export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    return {
      props: {
        posts,
      },
    };
  }
  
  export default function Posts({ posts }) {
    return (
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    );
  }`}
        />

        <Divider sx={{ my: 3 }} />

        {/* API Routes */}
        <Typography variant="h5" gutterBottom>
          🔌 API Routes
        </Typography>

        <Typography paragraph>
          API routes in Next.js let you create backend endpoints in the{" "}
          <code>pages/api</code> folder.
        </Typography>

        <CodeBlock
          code={`// pages/api/hello.ts
  export default function handler(req, res) {
    res.status(200).json({ message: 'Hello from Next.js API!' });
  }
  
  // Access this at /api/hello`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Deployment */}
        <Typography variant="h5" gutterBottom>
          ☁️ Deployment with Vercel
        </Typography>

        <Typography paragraph>
          Next.js is developed by Vercel, and the easiest way to deploy a
          Next.js app is via the <strong>Vercel platform</strong>. Just connect
          your GitHub repo and deploy with zero configuration.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Best Practices */}
        <Typography variant="h5" gutterBottom>
          ✅ Best Practices
        </Typography>

        <ul>
          <li>
            Use <strong>TypeScript</strong> for type safety and better DX
          </li>
          <li>
            Organize code into <code>components</code>, <code>pages</code>, and{" "}
            <code>hooks</code> folders
          </li>
          <li>
            Prefer <code>getStaticProps</code> for faster performance whenever
            possible
          </li>
          <li>
            Use <code>Image</code> and <code>Head</code> components from Next.js
          </li>
          <li>
            Implement <strong>Incremental Static Regeneration</strong> for
            dynamic content
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Tip */}
        <Typography variant="body2" color="text.secondary">
          Pro Tip: Combine Next.js with <strong>Tailwind CSS</strong> and{" "}
          <strong>TypeScript</strong> for the best modern frontend developer
          experience.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How is Next.js different from React?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🔍 How is Next.js Different from React?
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          <strong>React</strong> is a JavaScript library for building user
          interfaces, while <strong>Next.js</strong> is a{" "}
          <strong>framework built on top of React</strong> that provides
          powerful tools and conventions for creating production-ready web
          applications. While both are used to build UI, their capabilities and
          responsibilities are different.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Comparison Table */}
        <Typography variant="h5" gutterBottom>
          📊 Key Differences at a Glance
        </Typography>

        <CodeBlock
          code={`| Feature                    | React (Library)                         | Next.js (Framework)                                    |
  |----------------------------|------------------------------------------|--------------------------------------------------------|
  | Type                       | Library                                   | Full-stack Framework                                   |
  | Routing                    | Requires external library (react-router) | Built-in file-system based routing                     |
  | Rendering Modes            | CSR only (by default)                    | SSR, SSG, ISR, CSR                                     |
  | Backend API Routes         | Not supported                            | Supported via /pages/api                               |
  | Code Splitting             | Manual or with tooling                   | Automatic                                               |
  | SEO Support                | Poor (CSR)                               | Excellent (SSR/SSG)                                    |
  | Deployment                 | Flexible                                 | Optimized for Vercel, supports other platforms         |
  | Image Optimization         | Not included                             | Built-in via next/image                                |
  | Configuration              | Manual                                   | Zero-config (with optional customization via config)   |`}
        />

        <Divider sx={{ my: 3 }} />

        {/* React Overview */}
        <Typography variant="h5" gutterBottom>
          ⚛️ React: A UI Library
        </Typography>

        <Typography paragraph>
          React is responsible only for building components and managing state.
          It does not enforce project structure or include routing, data
          fetching, or backend features.
        </Typography>

        <CodeBlock
          code={`// React App Component Example
  import React from 'react';
  
  function App() {
    return <h1>Hello from React</h1>;
  }
  
  export default App;
  `}
        />

        <Typography paragraph>
          To enable routing in React, you'd typically use a third-party library
          like <code>react-router-dom</code>.
        </Typography>

        <CodeBlock
          code={`// React Routing Example
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import Home from './Home';
  import About from './About';
  
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  }
  `}
        />

        <Divider sx={{ my: 3 }} />

        {/* Next.js Overview */}
        <Typography variant="h5" gutterBottom>
          🧭 Next.js: A Full-Stack Framework
        </Typography>

        <Typography paragraph>
          Next.js extends React's capabilities by offering routing, data
          fetching, server-side rendering, static generation, and even API
          endpoints — all with minimal configuration.
        </Typography>

        <CodeBlock
          code={`// File-based Routing in Next.js (pages/index.tsx)
  export default function HomePage() {
    return <h1>Welcome to Next.js</h1>;
  }
  
  // This is automatically available at route "/"
  `}
        />

        <Typography paragraph>
          Here's how you define an API route in Next.js:
        </Typography>

        <CodeBlock
          code={`// pages/api/hello.ts
  export default function handler(req, res) {
    res.status(200).json({ message: 'Hello from API!' });
  }
  
  // Access this at http://localhost:3000/api/hello
  `}
        />

        <Divider sx={{ my: 3 }} />

        {/* Rendering Differences */}
        <Typography variant="h5" gutterBottom>
          🌀 Rendering Modes
        </Typography>

        <Typography paragraph>
          React apps typically use <strong>Client-Side Rendering (CSR)</strong>,
          meaning content is generated in the browser after the JavaScript
          loads. Next.js supports:
        </Typography>

        <ul>
          <li>
            <strong>SSR</strong>: Server-Side Rendering using{" "}
            <code>getServerSideProps()</code>
          </li>
          <li>
            <strong>SSG</strong>: Static Site Generation using{" "}
            <code>getStaticProps()</code>
          </li>
          <li>
            <strong>ISR</strong>: Incremental Static Regeneration for updating
            content after deployment
          </li>
          <li>
            <strong>CSR</strong>: Client-side Rendering (like React)
          </li>
        </ul>

        <CodeBlock
          code={`// Server-Side Rendering in Next.js
  export async function getServerSideProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
  
    return { props: { data } };
  }
  
  export default function Page({ data }) {
    return <div>{data.message}</div>;
  }`}
        />

        <Divider sx={{ my: 3 }} />

        {/* SEO Advantage */}
        <Typography variant="h5" gutterBottom>
          🔎 SEO Capabilities
        </Typography>

        <Typography paragraph>
          Since React renders content on the client-side, it can negatively
          affect SEO. Next.js solves this problem by pre-rendering pages on the
          server or at build time, making content available to search engines
          immediately.
        </Typography>

        <CodeBlock
          code={`// Using Head for SEO in Next.js
  import Head from 'next/head';
  
  export default function SEOPage() {
    return (
      <>
        <Head>
          <title>My Awesome Page</title>
          <meta name="description" content="This is SEO optimized content." />
        </Head>
        <h1>Content that search engines can index!</h1>
      </>
    );
  }`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Summary */}
        <Typography variant="h5" gutterBottom>
          📝 Summary
        </Typography>

        <ul>
          <li>
            <strong>React</strong> is a library used for building UI components.
          </li>
          <li>
            <strong>Next.js</strong> is a framework that enhances React by
            adding routing, SSR, API handling, and optimization tools.
          </li>
          <li>
            Next.js is opinionated and production-ready out of the box, whereas
            React is flexible but needs more tooling to become a full-fledged
            app.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Pro Tip */}
        <Typography variant="body2" color="text.secondary">
          Pro Tip: Use <strong>Next.js</strong> when building scalable,
          SEO-friendly, and performance-optimized React applications — it saves
          you setup time and gives you flexibility across the full stack.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is Server-Side Rendering (SSR) in Next.js?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🖥️ What is Server-Side Rendering (SSR) in Next.js?
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          <strong>Server-Side Rendering (SSR)</strong> in Next.js is a technique
          where the HTML for a page is generated on the server at request time,
          rather than in the browser. This means when a user visits a page, the
          server renders the page with data and sends the fully populated HTML
          to the client.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Benefits */}
        <Typography variant="h5" gutterBottom>
          ✅ Benefits of SSR
        </Typography>
        <ul>
          <li>
            <strong>SEO Friendly</strong>: Since the full HTML is sent to the
            browser, search engines can easily crawl and index the content.
          </li>
          <li>
            <strong>Faster First Load</strong>: Users see meaningful content
            quicker as HTML is ready.
          </li>
          <li>
            <strong>Dynamic Data Support</strong>: Fetch fresh data on each
            request.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* How it works */}
        <Typography variant="h5" gutterBottom>
          ⚙️ How SSR Works in Next.js
        </Typography>

        <Typography paragraph>
          Next.js enables SSR using a special function called{" "}
          <code>getServerSideProps</code>. This function runs on the server for
          every request and provides props to your page component.
        </Typography>

        <CodeBlock
          code={`
  // pages/products.js
  
  export async function getServerSideProps(context) {
    // Fetch data from an external API
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
  
    return {
      props: {
        products, // passed to the page component as props
      },
    };
  }
  
  export default function Products({ products }) {
    return (
      <div>
        <h1>Product List</h1>
        <ul>
          {products.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  `}
        />

        <Typography paragraph>In the above example:</Typography>
        <ul>
          <li>
            <code>getServerSideProps</code> is executed on the server at request
            time.
          </li>
          <li>
            The fetched product list is passed as props to the{" "}
            <code>Products</code> component.
          </li>
          <li>
            The user receives a fully rendered HTML page with product data.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* SSR vs CSR vs SSG */}
        <Typography variant="h5" gutterBottom>
          🔄 SSR vs CSR vs SSG
        </Typography>

        <Typography paragraph>
          Here's how SSR compares to other rendering strategies in Next.js:
        </Typography>

        <ul>
          <li>
            <strong>SSR (Server-Side Rendering):</strong> Renders HTML on every
            request. Best for dynamic content.
          </li>
          <li>
            <strong>CSR (Client-Side Rendering):</strong> HTML is rendered in
            the browser after JavaScript loads.
          </li>
          <li>
            <strong>SSG (Static Site Generation):</strong> HTML is generated at
            build time and reused for every request. Great for static pages.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* When to use */}
        <Typography variant="h5" gutterBottom>
          📌 When Should You Use SSR?
        </Typography>

        <ul>
          <li>
            When the content must always be up to date (e.g., dashboards,
            personalized data).
          </li>
          <li>
            When SEO is critical and data is dynamic (e.g., e-commerce product
            pages).
          </li>
          <li>When user-specific data is needed on initial load.</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Performance Tips */}
        <Typography variant="h5" gutterBottom>
          🚀 SSR Performance Tips
        </Typography>
        <ul>
          <li>Cache responses when possible to reduce server load.</li>
          <li>
            Avoid heavy logic or database calls in{" "}
            <code>getServerSideProps</code>.
          </li>
          <li>Use CDN and HTTP caching headers smartly.</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Final Note */}
        <Typography variant="body2" color="text.secondary">
          Pro Tip: SSR adds server overhead, so consider whether Static
          Generation (SSG) or Client-Side Rendering (CSR) might be more
          appropriate for certain pages.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is Static Site Generation (SSG)?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          📦 What is Static Site Generation (SSG) in Next.js 15?
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          <strong>Static Site Generation (SSG)</strong> in{" "}
          <strong>Next.js 15</strong> is a pre-rendering method where the HTML
          is generated at build time, not on each request. It’s best suited for
          pages that can be built once and served to all users with little to no
          changes, such as blogs, documentation, marketing pages, etc.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Benefits */}
        <Typography variant="h5" gutterBottom>
          ✅ Benefits of Static Site Generation
        </Typography>
        <ul>
          <li>
            <strong>Performance:</strong> Pages load extremely fast because they
            are just static HTML files served via CDN.
          </li>
          <li>
            <strong>Scalability:</strong> Since pages are static, there's no
            server computation per request.
          </li>
          <li>
            <strong>Cost-Effective:</strong> Hosting static files is cheaper
            than maintaining a server-rendered app.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* getStaticProps Usage */}
        <Typography variant="h5" gutterBottom>
          🛠️ Using <code>getStaticProps</code> in Next.js 15
        </Typography>

        <Typography paragraph>
          Next.js provides a special function called <code>getStaticProps</code>{" "}
          that allows you to fetch data at build time and pass it to your
          component.
        </Typography>

        <CodeBlock
          code={`
  // app/blog/page.tsx
  
  export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
  
    return {
      props: {
        posts,
      },
    };
  }
  
  export default function Blog({ posts }) {
    return (
      <div>
        <h1>Blog Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  `}
        />

        <Typography paragraph>In this example:</Typography>
        <ul>
          <li>
            <code>getStaticProps</code> runs at build time and fetches blog
            data.
          </li>
          <li>
            The data is passed as props to the <code>Blog</code> component.
          </li>
          <li>
            The generated HTML is saved and served on every request with no
            computation.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* getStaticPaths Usage */}
        <Typography variant="h5" gutterBottom>
          🔁 Dynamic Routes with <code>getStaticPaths</code>
        </Typography>

        <Typography paragraph>
          When using dynamic routes (e.g., blog/[id]), you’ll also use{" "}
          <code>getStaticPaths</code> to pre-render pages for each path at build
          time.
        </Typography>

        <CodeBlock
          code={`
  // app/blog/[id]/page.tsx
  
  export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
  
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }));
  
    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    };
  }
  
  export async function getStaticProps({ params }) {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${params.id}\`);
    const post = await res.json();
  
    return {
      props: {
        post,
      },
    };
  }
  
  export default function Post({ post }) {
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
  `}
        />

        <Typography paragraph>This setup:</Typography>
        <ul>
          <li>Pre-generates pages for each post ID at build time.</li>
          <li>
            Uses <code>getStaticPaths</code> to define which paths to build.
          </li>
          <li>
            Combines with <code>getStaticProps</code> to fetch content for each
            page.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* ISR */}
        <Typography variant="h5" gutterBottom>
          ⏱️ Incremental Static Regeneration (ISR)
        </Typography>

        <Typography paragraph>
          With ISR, you can update static content without rebuilding the entire
          app. Simply use the <code>revalidate</code> key in{" "}
          <code>getStaticProps</code>.
        </Typography>

        <CodeBlock
          code={`
  // app/news/page.tsx
  
  export async function getStaticProps() {
    const res = await fetch('https://api.example.com/news');
    const news = await res.json();
  
    return {
      props: {
        news,
      },
      revalidate: 60, // Regenerate page every 60 seconds
    };
  }
  `}
        />

        <Typography paragraph>
          This enables a powerful hybrid model—performance of static pages with
          freshness of dynamic content.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* When to Use SSG */}
        <Typography variant="h5" gutterBottom>
          📌 When Should You Use SSG?
        </Typography>
        <ul>
          <li>Blog or documentation sites with rarely changing content.</li>
          <li>Marketing and landing pages optimized for speed and SEO.</li>
          <li>Product listings that update occasionally (use ISR).</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Final Note */}
        <Typography variant="body2" color="text.secondary">
          Pro Tip: Use <strong>SSG</strong> whenever your content can be
          pre-built and doesn’t require real-time data per user request. Combine
          with ISR to get the best of both worlds!
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is Client-Side Rendering (CSR)?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          ⚛️ What is Client-Side Rendering (CSR) in Next.js 15?
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          <strong>Client-Side Rendering (CSR)</strong> is a rendering method
          where the JavaScript bundle is loaded in the browser, and the content
          is rendered entirely on the client after the page is loaded. In
          Next.js 15, CSR is used when components do not need to be pre-rendered
          on the server and rely heavily on browser-specific APIs, user
          interactivity, or personalization.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* How it works */}
        <Typography variant="h5" gutterBottom>
          ⚙️ How CSR Works in Next.js
        </Typography>
        <Typography paragraph>
          With CSR, the HTML page served from the server is nearly empty or has
          minimal skeleton content. Once the browser loads the JavaScript
          bundle, React takes over and renders the actual content dynamically.
        </Typography>

        <CodeBlock
          code={`
  // app/dashboard/page.tsx (Client Component)
  
  'use client';
  
  import { useEffect, useState } from 'react';
  
  export default function Dashboard() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('/api/data')
        .then((res) => res.json())
        .then((json) => setData(json));
    }, []);
  
    return (
      <div>
        <h1>Client-Side Dashboard</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  `}
        />

        <Typography paragraph>🔍 In this example:</Typography>
        <ul>
          <li>
            The component is explicitly marked as a <code>'use client'</code>{" "}
            component.
          </li>
          <li>
            Data fetching occurs inside <code>useEffect</code> after the
            component mounts.
          </li>
          <li>
            Initial HTML sent from server is minimal; the content appears after
            client hydration.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* When to use CSR */}
        <Typography variant="h5" gutterBottom>
          🧠 When Should You Use Client-Side Rendering?
        </Typography>
        <Typography paragraph>
          CSR is ideal for use cases where SEO is not a priority and the content
          is user-specific or changes frequently.
        </Typography>

        <ul>
          <li>Authenticated dashboards</li>
          <li>User profiles or settings pages</li>
          <li>
            Widgets or tools that interact with browser APIs (e.g., geolocation,
            localStorage)
          </li>
          <li>Apps requiring real-time updates like chats or live feeds</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Trade-offs */}
        <Typography variant="h5" gutterBottom>
          ⚖️ Trade-offs of CSR
        </Typography>

        <Typography paragraph>
          While CSR has many benefits in terms of interactivity and
          personalization, there are some trade-offs:
        </Typography>

        <ul>
          <li>
            <strong>Slower First Paint:</strong> The user sees a blank or
            loading screen until JavaScript is downloaded and executed.
          </li>
          <li>
            <strong>SEO Limitations:</strong> Since content is rendered after
            the page loads, it's harder for search engines to index.
          </li>
          <li>
            <strong>JavaScript Heavy:</strong> If the JS bundle fails or is
            slow, the page might not load correctly.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Optimization Tip */}
        <Typography variant="h5" gutterBottom>
          🚀 Optimization Tip
        </Typography>
        <Typography paragraph>
          When using CSR in Next.js 15, always consider using a{" "}
          <code>Skeleton Loader</code> or placeholder to improve user experience
          while data is loading.
        </Typography>

        <CodeBlock
          code={`
  // Example with loading skeleton
  
  'use client';
  
  import { useEffect, useState } from 'react';
  import { Skeleton } from '@mui/material';
  
  export default function Dashboard() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch('/api/data')
        .then((res) => res.json())
        .then((json) => setData(json));
    }, []);
  
    if (!data) {
      return (
        <div>
          <h1>Loading Dashboard...</h1>
          <Skeleton variant="text" width={200} />
          <Skeleton variant="rectangular" height={100} />
        </div>
      );
    }
  
    return (
      <div>
        <h1>Client-Side Dashboard</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  `}
        />

        <Divider sx={{ my: 3 }} />

        {/* Summary */}
        <Typography variant="h6" gutterBottom>
          ✅ Summary
        </Typography>
        <Typography paragraph>
          <strong>Client-Side Rendering</strong> in Next.js 15 gives you full
          control over user interactivity and browser APIs but at the cost of
          slower initial loads and limited SEO. It’s a powerful choice for
          dynamic, personalized user experiences that don’t need to be
          pre-rendered.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is Incremental Static Regeneration (ISR)?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          ⚡ What is Incremental Static Regeneration (ISR) in Next.js 15?
        </Typography>

        {/* Intro */}
        <Typography paragraph>
          <strong>Incremental Static Regeneration (ISR)</strong> is a powerful
          feature in Next.js 15 that allows you to update static pages{" "}
          <strong>after deployment</strong> without rebuilding the entire site.
          It combines the performance of Static Site Generation (SSG) with the
          flexibility of Server-Side Rendering (SSR).
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* How ISR works */}
        <Typography variant="h5" gutterBottom>
          ⚙️ How ISR Works in Next.js
        </Typography>
        <Typography paragraph>
          When a request is made to a page using ISR:
        </Typography>
        <ul>
          <li>On first request, the static page is served and cached.</li>
          <li>
            After the specified <code>revalidate</code> time, Next.js
            regenerates the page in the background.
          </li>
          <li>The new page replaces the cached version automatically.</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Code Example */}
        <Typography variant="h5" gutterBottom>
          🧪 Example: Using ISR in <code>app/</code> Directory (Next.js 15)
        </Typography>

        <Typography paragraph>
          You can enable ISR using the <code>generateStaticParams</code> +{" "}
          <code>revalidate</code> export in the new <code>app/</code> directory:
        </Typography>

        <CodeBlock
          code={`
  // app/products/[id]/page.tsx
  
  import { fetchProduct } from '@/lib/api';
  
  export const revalidate = 60; // Regenerate page every 60 seconds
  
  export async function generateStaticParams() {
    const products = await fetch('https://api.example.com/products').then(res => res.json());
  
    return products.map((product: any) => ({
      id: product.id.toString(),
    }));
  }
  
  export default async function ProductPage({ params }: { params: { id: string } }) {
    const product = await fetchProduct(params.id);
  
    return (
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
    );
  }
  `}
        />

        <Typography paragraph>In this setup:</Typography>
        <ul>
          <li>
            <strong>generateStaticParams()</strong> statically generates paths
            at build time.
          </li>
          <li>
            <strong>revalidate</strong> tells Next.js to re-build the page in
            the background every 60 seconds.
          </li>
          <li>
            Users always see a fast static page, even if it’s being updated in
            the background.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Benefits of ISR */}
        <Typography variant="h5" gutterBottom>
          ✅ Benefits of Using ISR
        </Typography>

        <ul>
          <li>
            <strong>Fast performance:</strong> Static content is served
            instantly.
          </li>
          <li>
            <strong>Fresh data:</strong> Pages are kept up-to-date
            automatically.
          </li>
          <li>
            <strong>No rebuilds needed:</strong> No need to redeploy the whole
            site on data change.
          </li>
          <li>
            <strong>SEO-friendly:</strong> HTML is rendered ahead of time and
            cached.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* When to use ISR */}
        <Typography variant="h5" gutterBottom>
          📌 When Should You Use ISR?
        </Typography>

        <Typography paragraph>ISR is perfect for pages that:</Typography>
        <ul>
          <li>Have dynamic content that doesn’t need to update in real-time</li>
          <li>Receive high traffic and need to be served quickly</li>
          <li>Need good SEO with minimal server load</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Advanced Tips */}
        <Typography variant="h5" gutterBottom>
          🔧 Advanced Usage Tip: On-Demand Revalidation
        </Typography>

        <Typography paragraph>
          In addition to time-based regeneration, you can also use{" "}
          <strong>on-demand revalidation</strong> to programmatically revalidate
          pages:
        </Typography>

        <CodeBlock
          code={`
  // app/api/revalidate/route.ts
  
  import { NextResponse } from 'next/server';
  import { revalidatePath } from 'next/cache';
  
  export async function POST(request: Request) {
    const body = await request.json();
    const { path } = body;
  
    revalidatePath(path); // e.g. "/products/123"
    return NextResponse.json({ revalidated: true });
  }
  `}
        />

        <Typography paragraph>
          This is useful when content is updated via a CMS or admin panel and
          you want to immediately revalidate a specific route.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Summary */}
        <Typography variant="h6" gutterBottom>
          🧾 Summary
        </Typography>
        <Typography paragraph>
          <strong>Incremental Static Regeneration (ISR)</strong> gives you the
          best of both worlds: static performance and dynamic flexibility. It’s
          a key feature in Next.js 15 for modern, scalable applications with
          content that changes over time but doesn’t require instant updates.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "Explain the folder structure of a default Next.js project.",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          📁 Folder Structure in Next.js 15: App Router vs Pages Router
        </Typography>

        {/* Intro */}
        <Typography paragraph>
          Next.js 15 supports two routing systems: <strong>App Router</strong>{" "}
          (using the <code>app/</code> directory) and{" "}
          <strong>Pages Router</strong> (using the <code>pages/</code>{" "}
          directory). Each approach has its own folder structure, conventions,
          and best-use cases.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* App Router */}
        <Typography variant="h5" gutterBottom>
          🧭 App Router (New Architecture - Preferred in Next.js 15)
        </Typography>
        <Typography paragraph>
          The <code>app/</code> directory is the recommended way to build apps
          in Next.js 15. It offers powerful features like layouts, server
          components, loading states, and parallel routing.
        </Typography>

        <Typography variant="h6" gutterBottom>
          📂 Typical Folder Structure (App Router)
        </Typography>

        <CodeBlock
          code={`.
  ├── app/
  │   ├── layout.tsx         # Root layout for all pages
  │   ├── page.tsx           # Default homepage
  │   ├── about/
  │   │   ├── page.tsx       # Renders /about route
  │   ├── dashboard/
  │   │   ├── layout.tsx     # Nested layout for /dashboard/*
  │   │   ├── page.tsx       # Renders /dashboard route
  │   │   └── settings/
  │   │       ├── page.tsx   # Renders /dashboard/settings
  │   ├── loading.tsx        # Global loading UI (optional)
  │   ├── error.tsx          # Global error UI (optional)
  ├── public/                # Static assets
  ├── styles/                # CSS / SCSS / Tailwind styles
  ├── next.config.js         # Configuration file
  ├── tsconfig.json          # TypeScript config
  └── package.json           # Dependencies and scripts
  `}
        />

        <Typography paragraph>
          <strong>Key Features:</strong>
        </Typography>
        <ul>
          <li>
            <code>layout.tsx</code> — wraps pages with shared UI (headers,
            footers, etc).
          </li>
          <li>
            <code>page.tsx</code> — used for rendering individual routes.
          </li>
          <li>
            <code>loading.tsx</code> — optional loading skeleton during route
            transition.
          </li>
          <li>
            <code>error.tsx</code> — optional error boundary for route-level
            errors.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Pages Router */}
        <Typography variant="h5" gutterBottom>
          🗂️ Pages Router (Legacy Approach)
        </Typography>
        <Typography paragraph>
          The <code>pages/</code> directory uses file-based routing. It's
          simple, stable, and widely adopted — great for smaller apps or those
          upgrading from older versions.
        </Typography>

        <Typography variant="h6" gutterBottom>
          📂 Typical Folder Structure (Pages Router)
        </Typography>

        <CodeBlock
          code={`.
  ├── pages/
  │   ├── index.tsx          # Home page route (/)
  │   ├── about.tsx          # About route (/about)
  │   ├── dashboard/
  │   │   ├── index.tsx      # Dashboard route (/dashboard)
  │   │   └── settings.tsx   # Nested route (/dashboard/settings)
  │   ├── _app.tsx           # Custom App component (global context, layouts)
  │   ├── _document.tsx      # Custom Document (used to augment <html>)
  │   ├── 404.tsx            # Custom 404 page
  ├── public/                # Static assets
  ├── styles/                # Global and module CSS
  ├── next.config.js         # Configuration
  ├── tsconfig.json          # TypeScript config
  └── package.json           # Project dependencies
  `}
        />

        <Typography paragraph>
          <strong>Key Files:</strong>
        </Typography>
        <ul>
          <li>
            <code>_app.tsx</code> — wraps every page (like global layouts or
            context).
          </li>
          <li>
            <code>_document.tsx</code> — customizes HTML structure (e.g., fonts,
            lang).
          </li>
          <li>
            <code>404.tsx</code> — custom "Page Not Found" component.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Comparison */}
        <Typography variant="h5" gutterBottom>
          🔍 Comparison: App Router vs Pages Router
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Feature</strong>
                </TableCell>
                <TableCell>
                  <strong>App Router</strong>
                </TableCell>
                <TableCell>
                  <strong>Pages Router</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Routing System</TableCell>
                <TableCell>File + Folder-based</TableCell>
                <TableCell>File-based only</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Server Components</TableCell>
                <TableCell>✅ Supported</TableCell>
                <TableCell>❌ Not supported</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Layouts per route</TableCell>
                <TableCell>
                  ✅ Built-in via <code>layout.tsx</code>
                </TableCell>
                <TableCell>
                  Manual via <code>_app.tsx</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Loading/Error states</TableCell>
                <TableCell>
                  ✅ Built-in via <code>loading.tsx</code>,{" "}
                  <code>error.tsx</code>
                </TableCell>
                <TableCell>Manual</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Stability</TableCell>
                <TableCell>✅ Modern, actively developed</TableCell>
                <TableCell>✅ Stable, widely used</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 3 }} />

        {/* Conclusion */}
        <Typography variant="h6" gutterBottom>
          🧾 Summary
        </Typography>
        <Typography paragraph>
          The <strong>App Router</strong> in Next.js 15 is the future —
          providing modular layouts, server components, and enhanced routing
          control. The <strong>Pages Router</strong> is still supported and
          great for simple or legacy applications. You can even use{" "}
          <strong>both side-by-side</strong> in one project as you migrate!
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How do you create dynamic routes in Next.js?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🔄 Creating Dynamic Routes in Next.js 15
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          Dynamic routes in Next.js allow you to create pages that are generated
          based on the URL path parameters. For example, you can display a blog
          post based on its <code>slug</code> or a product detail page based on
          its <code>id</code>. Next.js 15 supports this functionality in both
          the <strong>App Router</strong> and <strong>Pages Router</strong>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* App Router Section */}
        <Typography variant="h5" gutterBottom>
          🧭 App Router: Creating Dynamic Routes
        </Typography>

        <Typography paragraph>
          In the <code>app/</code> directory, dynamic segments are defined using
          square brackets <code>[]</code>.
        </Typography>

        <Typography variant="h6" gutterBottom>
          📂 Folder Structure
        </Typography>

        <CodeBlock
          code={`.
  ├── app/
  │   ├── blog/
  │   │   ├── [slug]/
  │   │   │   └── page.tsx      # Dynamic route for /blog/:slug
  │   │   └── page.tsx          # Static route for /blog
  `}
        />

        <Typography variant="h6" gutterBottom>
          📄 Example: <code>app/blog/[slug]/page.tsx</code>
        </Typography>

        <CodeBlock
          code={`// app/blog/[slug]/page.tsx
  import { use } from 'react';
  
  interface PageProps {
    params: { slug: string };
  }
  
  export default function BlogPost({ params }: PageProps) {
    return (
      <div>
        <h1>Blog Post: {params.slug}</h1>
        <p>This is a dynamically rendered blog post.</p>
      </div>
    );
  }
  `}
        />

        <Typography variant="body2" color="textSecondary" paragraph>
          Here, <code>{"{ params }"}</code> is automatically injected by Next.js
          and contains the dynamic route parameters (e.g., <code>slug</code>).
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Optional Catch-All Routes
        </Typography>

        <Typography paragraph>
          Use <code>[...slug]</code> to capture multiple segments like{" "}
          <code>/docs/intro/getting-started</code>.
        </Typography>

        <CodeBlock
          code={`// app/docs/[...slug]/page.tsx
  export default function DocsPage({ params }: { params: { slug?: string[] } }) {
    return <pre>{JSON.stringify(params.slug)}</pre>;
  }
  `}
        />

        <Divider sx={{ my: 3 }} />

        {/* Pages Router Section */}
        <Typography variant="h5" gutterBottom>
          📄 Pages Router: Creating Dynamic Routes
        </Typography>

        <Typography paragraph>
          In the <code>pages/</code> directory, dynamic routes are created using
          the same square bracket syntax.
        </Typography>

        <Typography variant="h6" gutterBottom>
          📂 Folder Structure
        </Typography>

        <CodeBlock
          code={`.
  ├── pages/
  │   ├── blog/
  │   │   ├── [slug].tsx       # Dynamic route: /blog/:slug
  │   │   └── index.tsx        # Static route: /blog
  `}
        />

        <Typography variant="h6" gutterBottom>
          📄 Example: <code>pages/blog/[slug].tsx</code>
        </Typography>

        <CodeBlock
          code={`// pages/blog/[slug].tsx
  import { useRouter } from 'next/router';
  
  export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;
  
    return (
      <div>
        <h1>Blog Post: {slug}</h1>
      </div>
    );
  }
  `}
        />

        <Typography variant="body2" color="textSecondary" paragraph>
          In the Pages Router, you use the <code>useRouter()</code> hook from{" "}
          <code>next/router</code> to access route parameters.
        </Typography>

        <Typography variant="h6" gutterBottom>
          ✅ Optional Catch-All in Pages Router
        </Typography>

        <CodeBlock
          code={`// pages/docs/[...slug].tsx
  import { useRouter } from 'next/router';
  
  export default function DocsPage() {
    const { slug } = useRouter().query;
  
    return <pre>{JSON.stringify(slug)}</pre>;
  }
  `}
        />

        <Divider sx={{ my: 3 }} />

        {/* Comparison Table */}
        <Typography variant="h5" gutterBottom>
          🔍 Comparison: App Router vs Pages Router for Dynamic Routes
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Aspect</strong>
                </TableCell>
                <TableCell>
                  <strong>App Router</strong>
                </TableCell>
                <TableCell>
                  <strong>Pages Router</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Routing Syntax</TableCell>
                <TableCell>
                  <code>app/blog/[slug]/page.tsx</code>
                </TableCell>
                <TableCell>
                  <code>pages/blog/[slug].tsx</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Access Route Params</TableCell>
                <TableCell>
                  <code>params.slug</code> via props
                </TableCell>
                <TableCell>
                  <code>useRouter().query.slug</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Catch-all Route</TableCell>
                <TableCell>
                  <code>[...slug]/page.tsx</code>
                </TableCell>
                <TableCell>
                  <code>[...slug].tsx</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Optional Catch-all</TableCell>
                <TableCell>
                  <code>[[...slug]]/page.tsx</code>
                </TableCell>
                <TableCell>
                  <code>[[...slug]].tsx</code>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 3 }} />

        {/* Summary */}
        <Typography variant="h6" gutterBottom>
          🧾 Summary
        </Typography>
        <Typography paragraph>
          Dynamic routing in Next.js 15 is extremely flexible and works
          seamlessly in both the App and Pages Routers. The App Router provides
          a more structured and component-driven approach with automatic
          parameter injection, while the Pages Router gives a simpler,
          React-based API via <code>useRouter()</code>.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is getStaticProps?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          📦 What is <code>getStaticProps</code> in Next.js 15?
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          <strong>
            <code>getStaticProps</code>
          </strong>{" "}
          is a special asynchronous function used in the{" "}
          <strong>Pages Router</strong> of Next.js. It allows you to{" "}
          <strong>fetch data at build time</strong> and pass it as props to your
          page component. This enables{" "}
          <strong>Static Site Generation (SSG)</strong> with dynamic data —
          perfect for performance and SEO.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* When to Use */}
        <Typography variant="h5" gutterBottom>
          ⏰ When Should You Use <code>getStaticProps</code>?
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="When the data needed is available at build time" />
          </ListItem>
          <ListItem>
            <ListItemText primary="When the data doesn't need to change frequently" />
          </ListItem>
          <ListItem>
            <ListItemText primary="For better SEO and performance (pre-rendered HTML)" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        {/* Syntax */}
        <Typography variant="h5" gutterBottom>
          🧪 Basic Syntax
        </Typography>

        <CodeBlock
          code={`// pages/index.tsx
  import type { GetStaticProps } from 'next';
  
  type Props = {
    message: string;
  };
  
  export const getStaticProps: GetStaticProps<Props> = async () => {
    // Fetch data at build time
    return {
      props: {
        message: "Hello from getStaticProps!",
      },
    };
  };
  
  export default function Home({ message }: Props) {
    return <h1>{message}</h1>;
  }
  `}
        />

        <Typography paragraph>
          This example will statically generate the HTML at build time. The
          message will be embedded into the final HTML.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* API Fetching Example */}
        <Typography variant="h5" gutterBottom>
          🌐 Example: Fetching Data from an API
        </Typography>

        <CodeBlock
          code={`// pages/posts.tsx
  import type { GetStaticProps } from 'next';
  
  type Post = {
    id: number;
    title: string;
  };
  
  type Props = {
    posts: Post[];
  };
  
  export const getStaticProps: GetStaticProps<Props> = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await res.json();
  
    return {
      props: {
        posts,
      },
    };
  };
  
  export default function PostsPage({ posts }: Props) {
    return (
      <div>
        <h1>Top 5 Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  `}
        />

        <Typography paragraph>
          This page fetches data from an external API at build time and
          generates a static HTML file with the data.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Revalidate Section */}
        <Typography variant="h5" gutterBottom>
          🔁 Revalidating with <code>revalidate</code>
        </Typography>

        <Typography paragraph>
          You can add a <code>revalidate</code> property to enable{" "}
          <strong>Incremental Static Regeneration (ISR)</strong>, which rebuilds
          the page after a certain time:
        </Typography>

        <CodeBlock
          code={`export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
  
    return {
      props: { data },
      revalidate: 60, // revalidate every 60 seconds
    };
  };`}
        />

        <Typography variant="body2" color="textSecondary" paragraph>
          This tells Next.js to regenerate the page in the background on the
          first request after 60 seconds.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Not Found and Redirects */}
        <Typography variant="h5" gutterBottom>
          ❌ Handling Not Found and Redirects
        </Typography>

        <Typography paragraph>
          You can return a 404 or redirect directly from{" "}
          <code>getStaticProps</code>:
        </Typography>

        <CodeBlock
          code={`export const getStaticProps: GetStaticProps = async () => {
    const data = await fetchData();
  
    if (!data) {
      return { notFound: true };
    }
  
    if (data.shouldRedirect) {
      return {
        redirect: {
          destination: '/another-page',
          permanent: false,
        },
      };
    }
  
    return {
      props: { data },
    };
  };`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Summary Table */}
        <Typography variant="h5" gutterBottom>
          📊 Summary Table
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Feature</strong>
                </TableCell>
                <TableCell>
                  <strong>Description</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Runs</TableCell>
                <TableCell>Only at build time (unless using ISR)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Used In</TableCell>
                <TableCell>
                  <code>pages/</code> directory only
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Supports</TableCell>
                <TableCell>Static generation, ISR, 404, Redirect</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Not Supported In</TableCell>
                <TableCell>
                  <code>app/</code> directory (use{" "}
                  <code>generateStaticParams</code>)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 3 }} />

        {/* Final Note */}
        <Typography variant="h6" gutterBottom>
          📝 Final Note
        </Typography>
        <Typography paragraph>
          <code>getStaticProps</code> is essential for generating fast,
          SEO-friendly static pages from dynamic data. It’s a powerful tool when
          you know your data won’t change often, and it pairs beautifully with
          features like ISR for flexibility.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is getServerSideProps?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🌐 What is <code>getServerSideProps</code> in Next.js 15?
        </Typography>

        {/* Intro */}
        <Typography paragraph>
          <strong>
            <code>getServerSideProps</code>
          </strong>{" "}
          is a Next.js data fetching method used in the{" "}
          <strong>Pages Router</strong> to fetch data{" "}
          <strong>on each request</strong>. Unlike <code>getStaticProps</code>,
          which runs only at build time, <code>getServerSideProps</code> runs{" "}
          <strong>on the server at request time</strong>, enabling real-time and
          personalized content.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* When to Use */}
        <Typography variant="h5" gutterBottom>
          🔍 When Should You Use <code>getServerSideProps</code>?
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="When you need to fetch data that changes frequently" />
          </ListItem>
          <ListItem>
            <ListItemText primary="When the content is user-specific (like authenticated dashboards)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="When SEO is important and content must be up-to-date" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        {/* Syntax */}
        <Typography variant="h5" gutterBottom>
          🧪 Basic Syntax
        </Typography>
        <CodeBlock
          code={`// pages/index.tsx
  import type { GetServerSideProps } from 'next';
  
  type Props = {
    message: string;
  };
  
  export const getServerSideProps: GetServerSideProps<Props> = async () => {
    return {
      props: {
        message: 'Hello from Server Side!',
      },
    };
  };
  
  export default function Home({ message }: Props) {
    return <h1>{message}</h1>;
  }
  `}
        />

        <Typography paragraph>
          This example runs the function on every request, and the returned data
          is passed as props to the page component.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* API Example */}
        <Typography variant="h5" gutterBottom>
          🌐 Example: Fetching Data from an API
        </Typography>
        <CodeBlock
          code={`// pages/posts.tsx
  import type { GetServerSideProps } from 'next';
  
  type Post = {
    id: number;
    title: string;
  };
  
  type Props = {
    posts: Post[];
  };
  
  export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    const posts = await res.json();
  
    return {
      props: {
        posts,
      },
    };
  };
  
  export default function PostsPage({ posts }: Props) {
    return (
      <div>
        <h1>Server-Fetched Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  `}
        />

        <Typography paragraph>
          This example fetches the top 3 posts from an external API{" "}
          <strong>every time the page is requested</strong>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Context Usage */}
        <Typography variant="h5" gutterBottom>
          📦 Accessing Context in <code>getServerSideProps</code>
        </Typography>
        <Typography paragraph>
          You can use the <code>context</code> parameter to access:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="query – URL query string" />
          </ListItem>
          <ListItem>
            <ListItemText primary="params – Route parameters" />
          </ListItem>
          <ListItem>
            <ListItemText primary="req – HTTP request object" />
          </ListItem>
          <ListItem>
            <ListItemText primary="res – HTTP response object" />
          </ListItem>
        </List>

        <CodeBlock
          code={`export const getServerSideProps: GetServerSideProps = async (context) => {
    const userAgent = context.req.headers['user-agent'] || 'unknown';
    
    return {
      props: {
        userAgent,
      },
    };
  };`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Conditional Redirect or 404 */}
        <Typography variant="h5" gutterBottom>
          🚦 Redirecting or Returning 404
        </Typography>
        <Typography paragraph>
          You can perform redirects or return 404s in{" "}
          <code>getServerSideProps</code>:
        </Typography>

        <CodeBlock
          code={`export const getServerSideProps: GetServerSideProps = async (context) => {
    const shouldRedirect = true;
    if (shouldRedirect) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  
    const data = await fetchData();
    if (!data) {
      return { notFound: true };
    }
  
    return {
      props: { data },
    };
  };`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Comparison Table */}
        <Typography variant="h5" gutterBottom>
          🔄 Comparison with Other Data Fetching
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Feature</strong>
                </TableCell>
                <TableCell>
                  <strong>
                    <code>getStaticProps</code>
                  </strong>
                </TableCell>
                <TableCell>
                  <strong>
                    <code>getServerSideProps</code>
                  </strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Runs</TableCell>
                <TableCell>At build time</TableCell>
                <TableCell>On every request</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Best For</TableCell>
                <TableCell>Static pages with rarely changing data</TableCell>
                <TableCell>Real-time dynamic data or personalization</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SEO</TableCell>
                <TableCell>Excellent</TableCell>
                <TableCell>Excellent</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Performance</TableCell>
                <TableCell>Very fast (pre-rendered)</TableCell>
                <TableCell>Slower (runs per request)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 3 }} />

        {/* Final Note */}
        <Typography variant="h6" gutterBottom>
          📌 Final Note
        </Typography>
        <Typography paragraph>
          <code>getServerSideProps</code> is your go-to solution when you need
          fresh, personalized, or sensitive content rendered securely on the
          server. It's perfect for use cases like dashboards, authenticated
          pages, and real-time feeds — all while preserving SEO and hydration.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is getStaticPaths?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🧭 What is <code>getStaticPaths</code> in Next.js 15?
        </Typography>

        {/* Intro */}
        <Typography paragraph>
          <strong>
            <code>getStaticPaths</code>
          </strong>{" "}
          is used alongside <code>getStaticProps</code> to enable{" "}
          <strong>dynamic routes</strong> with{" "}
          <strong>Static Site Generation (SSG)</strong> in the{" "}
          <strong>Pages Router</strong>. It allows you to specify which dynamic
          paths should be generated at build time.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* When to Use */}
        <Typography variant="h5" gutterBottom>
          🧠 When Should You Use <code>getStaticPaths</code>?
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="When you have dynamic routes (e.g., [id].tsx)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="And you want to statically generate them at build time" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Typically used with blog posts, product pages, etc." />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        {/* Folder Structure */}
        <Typography variant="h5" gutterBottom>
          🗂️ Folder Structure for Dynamic Route
        </Typography>
        <CodeBlock
          code={`pages/
  ├── posts/
  │   └── [id].tsx`}
        />

        <Typography paragraph>
          The file name <code>[id].tsx</code> indicates a dynamic route for
          pages like <code>/posts/1</code>, <code>/posts/2</code>, etc.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Basic Syntax */}
        <Typography variant="h5" gutterBottom>
          🧪 Basic Usage of <code>getStaticPaths</code> with{" "}
          <code>getStaticProps</code>
        </Typography>
        <CodeBlock
          code={`// pages/posts/[id].tsx
  
  import type { GetStaticProps, GetStaticPaths } from 'next';
  
  type Post = {
    id: string;
    title: string;
  };
  
  type Props = {
    post: Post;
  };
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await res.json();
  
    const paths = posts.map((post: Post) => ({
      params: { id: post.id.toString() },
    }));
  
    return {
      paths,
      fallback: false, // See fallback section below
    };
  };
  
  export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${params?.id}\`);
    const post = await res.json();
  
    return {
      props: {
        post,
      },
    };
  };
  
  export default function PostPage({ post }: Props) {
    return (
      <div>
        <h1>{post.title}</h1>
        <p>ID: {post.id}</p>
      </div>
    );
  }
  `}
        />

        <Typography paragraph>
          In this example, <code>getStaticPaths</code> defines which{" "}
          <code>/posts/[id]</code> pages to pre-render. The corresponding data
          is fetched in <code>getStaticProps</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Fallback */}
        <Typography variant="h5" gutterBottom>
          ⏳ Fallback Behavior
        </Typography>
        <Typography paragraph>
          The <code>fallback</code> key in <code>getStaticPaths</code> controls
          what happens for paths not returned by <code>paths</code>:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="fallback: false"
              secondary="Only the specified paths will be rendered. Others show 404."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="fallback: true"
              secondary="Other paths will be rendered on-demand and cached (blocking or loading state shown)."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="fallback: 'blocking'"
              secondary="Other paths are server-rendered on request (no loading state) and cached."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        {/* Example with fallback: 'blocking' */}
        <Typography variant="h5" gutterBottom>
          ⚙️ Example with <code>fallback: 'blocking'</code>
        </Typography>
        <CodeBlock
          code={`export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await res.json();
  
    const paths = posts.map((post: any) => ({
      params: { id: post.id.toString() },
    }));
  
    return {
      paths,
      fallback: 'blocking', // dynamic fallback support
    };
  };`}
        />
        <Typography paragraph>
          This setup means that if a user visits a route not in the initial
          list, the server will generate it on-the-fly during the first request
          and cache it for future.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Summary */}
        <Typography variant="h6" gutterBottom>
          📌 Summary
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Use getStaticPaths for dynamic routes with getStaticProps" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Define which paths to pre-render at build time" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Choose fallback mode for on-demand behavior" />
          </ListItem>
        </List>

        <Typography variant="body1" color="text.secondary">
          💡 Note: <code>getStaticPaths</code> is only available in the{" "}
          <strong>Pages Router</strong>. The App Router uses{" "}
          <code>generateStaticParams</code> instead.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the public folder used for?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          📁 What is the <code>public</code> Folder Used For in Next.js 15?
        </Typography>

        {/* Intro */}
        <Typography paragraph>
          The{" "}
          <strong>
            <code>public</code>
          </strong>{" "}
          folder in <strong>Next.js 15</strong> is used to store static assets
          like images, fonts, or other files that you want to serve directly
          from the root of your website. Files inside this folder are accessible
          through the base URL and are not processed by Webpack.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Key Characteristics */}
        <Typography variant="h5" gutterBottom>
          🌟 Key Features of the <code>public</code> Folder
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Accessible from the root URL"
              secondary="e.g., /public/logo.png → http://localhost:3000/logo.png"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="No Webpack Processing"
              secondary="Files are served as-is, not bundled."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Useful for static assets"
              secondary="Ideal for images, robots.txt, favicon.ico, etc."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        {/* Directory Structure */}
        <Typography variant="h5" gutterBottom>
          📂 Example Folder Structure
        </Typography>
        <CodeBlock
          code={`my-next-app/
  ├── public/
  │   ├── logo.png
  │   ├── favicon.ico
  │   └── robots.txt
  ├── app/
  ├── pages/
  ├── components/
  └── next.config.js`}
        />

        <Typography paragraph>
          Files like <code>logo.png</code> and <code>favicon.ico</code> inside
          the <code>public</code> folder are available at <code>/logo.png</code>{" "}
          and <code>/favicon.ico</code> in the browser.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* How to Use */}
        <Typography variant="h5" gutterBottom>
          🛠️ How to Use Assets from <code>public</code> Folder
        </Typography>

        <Typography variant="h6" gutterBottom>
          👉 Using an Image (without Next.js <code>Image</code> component)
        </Typography>
        <CodeBlock
          code={`<img src="/logo.png" alt="Company Logo" width="200" height="100" />`}
        />

        <Typography variant="h6" gutterBottom>
          👉 Using with Next.js <code>Image</code> Component
        </Typography>
        <CodeBlock
          code={`import Image from 'next/image';
  
  export default function Home() {
    return (
      <Image src="/logo.png" alt="Logo" width={200} height={100} />
    );
  }`}
        />

        <Typography variant="body2" color="text.secondary">
          ✅ Note: You don't need to import images from the <code>public</code>{" "}
          folder — just reference them by path.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Use Cases */}
        <Typography variant="h5" gutterBottom>
          📌 Common Use Cases
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Logos and brand images" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Favicon and app icons" />
          </ListItem>
          <ListItem>
            <ListItemText primary="robots.txt or sitemap.xml for SEO" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Downloadable files like PDFs" />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        {/* Don't Do */}
        <Typography variant="h5" gutterBottom>
          ⚠️ Things to Avoid
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Don't import from 'public' in JS/TS files"
              secondary="Use static paths instead of imports."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Don't use it for files that need bundling"
              secondary="Use the /src folder or imports for JS, CSS, and modules."
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 3 }} />

        {/* Summary */}
        <Typography variant="h6" gutterBottom>
          🧾 Summary
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Files in /public are served statically from the root" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Best for images, documents, favicons, and non-processed assets" />
          </ListItem>
          <ListItem>
            <ListItemText primary="You can reference them directly by URL (e.g., /logo.png)" />
          </ListItem>
        </List>
      </Box>
    ),
  },
  {
    heading: "How do you perform routing in Next.js?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🚦 How Do You Perform Routing in Next.js 15?
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          In <strong>Next.js 15</strong>, routing is handled using either the{" "}
          <strong>App Router</strong> (introduced in Next.js 13) or the
          traditional <strong>Pages Router</strong>. Both systems enable
          navigation between pages, but they differ in structure, flexibility,
          and underlying behavior.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* App Router Overview */}
        <Typography variant="h5" gutterBottom>
          📁 App Router (New Architecture)
        </Typography>

        <Typography paragraph>
          The App Router uses the <code>app/</code> directory. Each folder
          becomes a route segment. It supports layouts, server components,
          loading UI, and enhanced routing capabilities.
        </Typography>

        <CodeBlock
          code={`
  // Example structure
  /app
    /about
      page.tsx        --> /about
    /dashboard
      /settings
        page.tsx      --> /dashboard/settings
    layout.tsx        --> Shared layout for all routes
    page.tsx          --> /
  `}
        />

        <Typography paragraph>To create a link between routes:</Typography>

        <CodeBlock
          code={`
  // using next/link
  'use client';
  import Link from 'next/link';
  
  export default function Navigation() {
    return (
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    );
  }
  `}
        />

        <Divider sx={{ my: 3 }} />

        {/* Pages Router Overview */}
        <Typography variant="h5" gutterBottom>
          📄 Pages Router (Legacy & Still Supported)
        </Typography>

        <Typography paragraph>
          The Pages Router uses the <code>pages/</code> directory. Files and
          folders in this directory automatically map to route paths.
        </Typography>

        <CodeBlock
          code={`
  // Example structure
  /pages
    index.tsx       --> /
    about.tsx       --> /about
    contact.tsx     --> /contact
    dashboard/
      settings.tsx  --> /dashboard/settings
  `}
        />

        <Typography paragraph>Navigation in Pages Router:</Typography>

        <CodeBlock
          code={`
  // using next/link
  import Link from 'next/link';
  
  export default function Nav() {
    return (
      <nav>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    );
  }
  `}
        />

        <Divider sx={{ my: 3 }} />

        {/* Dynamic Routing */}
        <Typography variant="h5" gutterBottom>
          🧩 Dynamic Routing
        </Typography>

        <Typography paragraph>
          You can create dynamic routes by using square brackets in both routing
          systems.
        </Typography>

        <Typography variant="subtitle1">App Router:</Typography>
        <CodeBlock
          code={`
  // app/blog/[slug]/page.tsx --> /blog/my-post
  export default function BlogPost({ params }) {
    return <h1>Post: {params.slug}</h1>;
  }
  `}
        />

        <Typography variant="subtitle1">Pages Router:</Typography>
        <CodeBlock
          code={`
  // pages/blog/[slug].tsx
  import { useRouter } from 'next/router';
  
  export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;
    return <h1>Post: {slug}</h1>;
  }
  `}
        />

        <Divider sx={{ my: 3 }} />

        {/* Navigating Programmatically */}
        <Typography variant="h5" gutterBottom>
          🧭 Navigating Programmatically
        </Typography>

        <Typography paragraph>
          You can navigate programmatically using <code>useRouter</code> hook.
        </Typography>

        <Typography variant="subtitle1">
          App Router (Client Component Only):
        </Typography>
        <CodeBlock
          code={`
  // app/some-client-component.tsx
  'use client';
  import { useRouter } from 'next/navigation';
  
  export default function Button() {
    const router = useRouter();
    return <button onClick={() => router.push('/dashboard')}>Go</button>;
  }
  `}
        />

        <Typography variant="subtitle1">Pages Router:</Typography>
        <CodeBlock
          code={`
  // pages/some-page.tsx
  import { useRouter } from 'next/router';
  
  export default function Button() {
    const router = useRouter();
    return <button onClick={() => router.push('/dashboard')}>Go</button>;
  }
  `}
        />

        <Divider sx={{ my: 3 }} />

        {/* Summary */}
        <Typography variant="h5" gutterBottom>
          📝 Summary
        </Typography>
        <ul>
          <li>
            <strong>App Router</strong>: Uses <code>app/</code> directory,
            supports layouts, server components, and nested routing.
          </li>
          <li>
            <strong>Pages Router</strong>: Uses <code>pages/</code> directory,
            simpler and mature, but lacks some of the newer capabilities.
          </li>
          <li>
            Routing in both systems supports static, dynamic, and programmatic
            navigation.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          Pro Tip: For new projects in Next.js 15, prefer the App Router unless
          you need quick migration or legacy compatibility.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "What is the difference between Link and a normal <a> tag in Next.js?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🔗 Difference Between <code>Link</code> and a Normal{" "}
          <code>&lt;a&gt;</code> Tag in Next.js 15
        </Typography>

        <Typography paragraph>
          In <strong>Next.js 15</strong>, routing between pages is optimized for
          performance using the <code>Link</code> component from{" "}
          <code>next/link</code>. While the traditional <code>&lt;a&gt;</code>{" "}
          tag can also navigate between pages, it lacks the key benefits
          provided by Next.js routing.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧠 Core Difference
        </Typography>
        <ul>
          <li>
            <strong>Link (next/link):</strong> Enables{" "}
            <em>client-side navigation</em> without reloading the entire page.
          </li>
          <li>
            <strong>&lt;a&gt; Tag:</strong> Causes a <em>full-page reload</em>{" "}
            by default, losing application state and defeating SPA benefits.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ✅ Using <code>Link</code> (Recommended)
        </Typography>

        <CodeBlock
          code={`
// Using next/link in App Router or Pages Router
'use client';
import Link from 'next/link';

export default function Navigation() {
return (
  <nav>
    <Link href="/about">About Us</Link>
    <Link href="/contact">Contact</Link>
  </nav>
);
}
`}
        />

        <Typography paragraph>
          The <code>Link</code> component wraps the navigation and enables
          client-side transitions—meaning no full reload, keeping React state,
          faster transitions, and better user experience.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ❌ Using a Plain <code>&lt;a&gt;</code> Tag
        </Typography>

        <CodeBlock
          code={`
// This triggers a full page reload
export default function Nav() {
return (
  <nav>
    <a href="/about">About Us</a>
    <a href="/contact">Contact</a>
  </nav>
);
}
`}
        />

        <Typography paragraph>
          This approach forces the browser to fetch the page from the server and
          reload the entire document, which is slower and resets your React
          state, making it unsuitable for SPA-like experiences.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Under the Hood
        </Typography>

        <Typography paragraph>
          The <code>Link</code> component uses the HTML5 History API (via{" "}
          <code>pushState</code>) for seamless transitions and also prefetches
          routes in the background for faster navigation.
        </Typography>

        <CodeBlock
          code={`
// Example of how Link prefetches automatically
<Link href="/dashboard">Dashboard</Link>

// You can also disable it:
<Link href="/dashboard" prefetch={false}>Dashboard</Link>
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ Common Mistake: Forgetting the <code>href</code> Inside{" "}
          <code>Link</code>
        </Typography>

        <CodeBlock
          code={`
// ❌ This won't work as expected
<Link>Click Here</Link>

// ✅ Correct usage
<Link href="/services">Click Here</Link>
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧾 Summary Table
        </Typography>

        <Box
          sx={{ border: "1px solid #ccc", borderRadius: 2, overflow: "hidden" }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f5f5f5" }}>
                <th style={{ padding: "12px", textAlign: "left" }}>Feature</th>
                <th style={{ padding: "12px", textAlign: "left" }}>
                  &lt;a&gt; Tag
                </th>
                <th style={{ padding: "12px", textAlign: "left" }}>
                  Link Component
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "12px" }}>Page Reload</td>
                <td style={{ padding: "12px" }}>Yes</td>
                <td style={{ padding: "12px" }}>No</td>
              </tr>
              <tr>
                <td style={{ padding: "12px" }}>Client-side Routing</td>
                <td style={{ padding: "12px" }}>No</td>
                <td style={{ padding: "12px" }}>Yes</td>
              </tr>
              <tr>
                <td style={{ padding: "12px" }}>State Persistence</td>
                <td style={{ padding: "12px" }}>Lost</td>
                <td style={{ padding: "12px" }}>Preserved</td>
              </tr>
              <tr>
                <td style={{ padding: "12px" }}>Prefetching</td>
                <td style={{ padding: "12px" }}>No</td>
                <td style={{ padding: "12px" }}>Yes</td>
              </tr>
            </tbody>
          </table>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          📌 Always prefer <code>Link</code> for internal navigation in Next.js.
          Use <code>&lt;a&gt;</code> tags only for external links or when
          absolutely needed (like mailto: or tel:).
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is API Routes in Next.js?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🚀 What are API Routes in Next.js 15?
        </Typography>

        <Typography paragraph>
          API Routes in <strong>Next.js 15</strong> allow you to build your
          backend (serverless functions) alongside your frontend. These routes
          can be used to handle requests like <code>GET</code>,{" "}
          <code>POST</code>, <code>PUT</code>, and <code>DELETE</code> —
          enabling full-stack development within the same Next.js app.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📁 File Structure (Pages Router)
        </Typography>
        <CodeBlock
          code={`
/pages
/api
  hello.js  // This becomes /api/hello
`}
        />

        <Typography paragraph>
          Any file inside the <code>pages/api</code> directory is treated as an
          API endpoint instead of a page.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🧑‍💻 Basic API Route Example
        </Typography>
        <CodeBlock
          code={`
// File: pages/api/hello.js

export default function handler(req, res) {
if (req.method === 'GET') {
  res.status(200).json({ message: 'Hello from API!' });
} else {
  res.status(405).json({ message: 'Method Not Allowed' });
}
}
`}
        />

        <Typography paragraph>
          This route is accessible at <code>/api/hello</code> and responds with
          JSON on GET requests.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🗂️ File-based Routing
        </Typography>
        <Typography paragraph>
          The filename and folder structure determine the API endpoint path:
        </Typography>

        <CodeBlock
          code={`
/pages/api/user/profile.js ➝ /api/user/profile
/pages/api/posts/[id].js  ➝ /api/posts/:id (dynamic route)
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚙️ Dynamic API Routes
        </Typography>
        <CodeBlock
          code={`
// File: pages/api/posts/[id].js

export default function handler(req, res) {
const {
  query: { id },
  method,
} = req;

if (method === 'GET') {
  res.status(200).json({ postId: id });
} else {
  res.status(405).end('Method $'{method} Not Allowed');
}
}
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          📦 Request Body & Query
        </Typography>
        <CodeBlock
          code={`
// req.query ➝ URL parameters
// req.body  ➝ POST data (use middleware to parse JSON)
// req.method ➝ HTTP method
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          🔐 Middleware & Authentication
        </Typography>
        <Typography paragraph>
          You can build middlewares manually or use third-party libraries (like{" "}
          <code>next-auth</code>) to protect API routes.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom>
          ⚠️ Limitations in App Router
        </Typography>
        <Typography paragraph>
          In the <strong>App Router</strong>, API Routes (as in Pages Router)
          are not supported directly. Instead, you must use:
        </Typography>

        <CodeBlock
          code={`
// Use Route Handlers in App Router
// File: app/api/hello/route.js

export async function GET() {
return Response.json({ message: 'Hello from App Router API' });
}
`}
        />

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          📌 Use <code>pages/api</code> for traditional API routes in Pages
          Router. Use <code>app/api</code> route handlers in the App Router
          context.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is pre-rendering?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          ⚙️ What is Pre-rendering in Next.js 15?
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          <strong>Pre-rendering</strong> is a technique used by Next.js to
          generate HTML for each page in advance, instead of relying entirely on
          client-side JavaScript to build the page in the browser. This leads to
          faster page loads and better SEO. It is one of the core features that
          makes Next.js powerful and developer-friendly.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Types of Pre-rendering */}
        <Typography variant="h5" gutterBottom>
          🧠 Types of Pre-rendering in Next.js
        </Typography>

        <Typography paragraph>
          Next.js 15 supports two main types of pre-rendering:
        </Typography>

        <ul>
          <li>
            <strong>Static Generation (SSG)</strong> – HTML is generated at{" "}
            <em>build time</em>.
          </li>
          <li>
            <strong>Server-Side Rendering (SSR)</strong> – HTML is generated at{" "}
            <em>request time</em>.
          </li>
        </ul>

        <Typography paragraph>
          You choose the pre-rendering method per page based on your data needs.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Static Generation Example */}
        <Typography variant="h5" gutterBottom>
          🗂️ Example: Static Generation using <code>getStaticProps</code>
        </Typography>

        <Typography paragraph>
          This generates the page at build time.
        </Typography>

        <CodeBlock
          code={`// pages/index.tsx (Pages Router)
  export async function getStaticProps() {
    return {
      props: {
        message: "Hello from Static Generation!",
      },
    };
  }
  
  export default function Home({ message }) {
    return <h1>{message}</h1>;
  }`}
        />

        <Typography paragraph>
          Use this method for pages with content that doesn’t change often
          (e.g., marketing pages, blogs).
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Server-Side Rendering Example */}
        <Typography variant="h5" gutterBottom>
          🧩 Example: Server-Side Rendering using{" "}
          <code>getServerSideProps</code>
        </Typography>

        <Typography paragraph>
          This generates the HTML on each request.
        </Typography>

        <CodeBlock
          code={`// pages/about.tsx (Pages Router)
  export async function getServerSideProps() {
    return {
      props: {
        time: new Date().toISOString(),
      },
    };
  }
  
  export default function About({ time }) {
    return <p>Server time: {time}</p>;
  }`}
        />

        <Typography paragraph>
          SSR is useful when your page content changes frequently or is
          user-specific.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* App Router Example with Pre-rendering */}
        <Typography variant="h5" gutterBottom>
          🧱 Pre-rendering in App Router (Next.js 15)
        </Typography>

        <Typography paragraph>
          In the <code>app/</code> directory, all pages are pre-rendered by
          default. You use asynchronous functions inside server components to
          fetch data.
        </Typography>

        <CodeBlock
          code={`// app/page.tsx
  async function getData() {
    const res = await fetch('https://api.example.com/posts', {
      cache: 'force-cache', // or 'no-store' for SSR
    });
    return res.json();
  }
  
  export default async function Page() {
    const data = await getData();
    return (
      <div>
        <h1>Pre-rendered Posts</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }`}
        />

        <Typography paragraph>
          Using <code>cache: 'force-cache'</code> results in Static Generation,
          while <code>cache: 'no-store'</code> enables SSR.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Benefits */}
        <Typography variant="h5" gutterBottom>
          ✅ Benefits of Pre-rendering
        </Typography>

        <ul>
          <li>Improved performance and faster Time to First Byte (TTFB)</li>
          <li>Better SEO because HTML is available to crawlers</li>
          <li>Predictable and consistent UI behavior</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* When to Use What */}
        <Typography variant="h5" gutterBottom>
          🧭 When to Use SSG vs SSR?
        </Typography>

        <ul>
          <li>
            <strong>Use SSG</strong> for static content like blog posts,
            documentation, marketing pages.
          </li>
          <li>
            <strong>Use SSR</strong> for pages that show dynamic or
            user-specific content (e.g., dashboards, admin panels).
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Final Tip */}
        <Typography variant="body2" color="text.secondary">
          💡 Pro Tip: In Next.js 15’s App Router, every server component is
          pre-rendered by default — choose caching wisely to control when and
          how data is fetched.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How do you handle redirects in Next.js?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🔁 Handling Redirects in Next.js 15
        </Typography>

        {/* Intro */}
        <Typography paragraph>
          In <strong>Next.js 15</strong>, you can handle redirects both at the
          framework level and programmatically. Redirects can happen during:
        </Typography>
        <ul>
          <li>
            Build time (via <code>next.config.js</code>)
          </li>
          <li>
            Server-side functions like <code>getServerSideProps</code>
          </li>
          <li>Middleware</li>
          <li>
            Client-side navigation using the <code>useRouter</code> hook
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* 1. Redirects in next.config.js */}
        <Typography variant="h5" gutterBottom>
          🛠️ 1. Redirects using <code>next.config.js</code>
        </Typography>

        <Typography paragraph>
          This approach is used for static or permanent redirects at the config
          level (build-time).
        </Typography>

        <CodeBlock
          code={`// next.config.js
  module.exports = {
    async redirects() {
      return [
        {
          source: '/old-blog/:slug*',
          destination: '/new-blog/:slug*',
          permanent: true, // 308 redirect
        },
      ];
    },
  };`}
        />

        <Typography paragraph>
          - <code>permanent: true</code> means it's a 308 (permanent) redirect.
          <br />- <code>:slug*</code> allows dynamic path segments.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 2. Redirects in getServerSideProps */}
        <Typography variant="h5" gutterBottom>
          ⚙️ 2. Redirects using <code>getServerSideProps</code>
        </Typography>

        <Typography paragraph>
          This is used when you want to redirect conditionally based on data
          fetched at request time.
        </Typography>

        <CodeBlock
          code={`// pages/profile.tsx
  export async function getServerSideProps(context) {
    const { req } = context;
    const user = checkAuth(req);
  
    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  
    return {
      props: { user },
    };
  }
  
  export default function Profile({ user }) {
    return <div>Welcome, {user.name}</div>;
  }`}
        />

        <Typography paragraph>
          - <code>permanent: false</code> sends a 307 redirect.
          <br />- Use this pattern for authentication, A/B testing, or locale
          redirects.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 3. Redirects using Middleware */}
        <Typography variant="h5" gutterBottom>
          🚦 3. Redirects using Middleware (Edge)
        </Typography>

        <Typography paragraph>
          Middleware runs before a request is completed and can redirect based
          on logic.
        </Typography>

        <CodeBlock
          code={`// middleware.ts
  import { NextResponse } from 'next/server';
  
  export function middleware(request) {
    const token = request.cookies.get('token')?.value;
  
    if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  
    return NextResponse.next();
  }
  
  export const config = {
    matcher: ['/dashboard/:path*'],
  };`}
        />

        <Typography paragraph>
          - Runs at the edge (before rendering). - Great for auth guards or
          geolocation-based redirection.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 4. Redirects on the Client Side */}
        <Typography variant="h5" gutterBottom>
          🧭 4. Redirects using <code>useRouter()</code> (Client-side)
        </Typography>

        <Typography paragraph>
          Redirects on the client after user interaction or certain events (like
          login).
        </Typography>

        <CodeBlock
          code={`// app/login/page.tsx or pages/login.tsx
  'use client';
  
  import { useRouter } from 'next/navigation';
  import { useEffect } from 'react';
  
  export default function LoginPage() {
    const router = useRouter();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        router.push('/dashboard');
      }
    }, []);
  
    return <div>Please log in...</div>;
  }`}
        />

        <Typography paragraph>
          - Use this for redirects after client-side checks (like localStorage,
          session).
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Summary Table */}
        <Typography variant="h5" gutterBottom>
          📋 Summary: Redirect Techniques in Next.js 15
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Method</strong>
                </TableCell>
                <TableCell>
                  <strong>Use Case</strong>
                </TableCell>
                <TableCell>
                  <strong>Runs On</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>next.config.js</TableCell>
                <TableCell>Permanent/static redirects</TableCell>
                <TableCell>Build time</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>getServerSideProps</TableCell>
                <TableCell>Dynamic, conditional redirects</TableCell>
                <TableCell>Server</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Middleware</TableCell>
                <TableCell>Edge-based logic (auth, geo)</TableCell>
                <TableCell>Edge / before rendering</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>useRouter</TableCell>
                <TableCell>Client-side after actions</TableCell>
                <TableCell>Browser</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 3 }} />

        {/* Final Note */}
        <Typography variant="body2" color="text.secondary">
          🧠 Note: Use server or middleware redirects for SEO-sensitive pages.
          Use client-side redirects only when necessary post-interaction.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is the purpose of _app.js and _document.js?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          📦 Purpose of <code>_app.js</code> and <code>_document.js</code> in
          Next.js 15
        </Typography>

        <Typography paragraph>
          In Next.js (specifically when using the <strong>Pages Router</strong>
          ), <code>_app.js</code> and <code>_document.js</code> are two special
          files that allow you to customize the default behavior of your
          application. They are placed inside the <code>pages/</code> directory
          and help in extending the app's functionality at different levels.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* _app.js */}
        <Typography variant="h5" gutterBottom>
          🔧 What is <code>_app.js</code>?
        </Typography>

        <Typography paragraph>
          The <code>_app.js</code> file is used to initialize pages. It allows
          you to:
        </Typography>
        <ul>
          <li>Wrap every page with layout components</li>
          <li>Inject global styles or state providers (like Redux, Context)</li>
          <li>Persist layout between page changes</li>
        </ul>

        <Typography variant="subtitle1" gutterBottom>
          📁 File location: <code>pages/_app.js</code> or{" "}
          <code>pages/_app.tsx</code>
        </Typography>

        <CodeBlock
          code={`// pages/_app.js
  import '@/styles/globals.css';
  import { ThemeProvider } from '@mui/material/styles';
  import theme from '@/theme';
  
  export default function MyApp({ Component, pageProps }) {
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }`}
        />

        <Typography paragraph>
          In this example, every page is wrapped with a Material UI{" "}
          <code>ThemeProvider</code>. This makes the MUI theme available
          throughout the app.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* _document.js */}
        <Typography variant="h5" gutterBottom>
          🧾 What is <code>_document.js</code>?
        </Typography>

        <Typography paragraph>
          The <code>_document.js</code> file is only rendered on the server and
          is used to augment the HTML and <code>&lt;body&gt;</code> structure of
          the page. It’s ideal for:
        </Typography>
        <ul>
          <li>
            Adding language attributes to <code>&lt;html&gt;</code>
          </li>
          <li>
            Customizing the initial <code>&lt;head&gt;</code> tags
          </li>
          <li>Injecting fonts, global meta tags, favicons, etc.</li>
        </ul>

        <Typography variant="subtitle1" gutterBottom>
          📁 File location: <code>pages/_document.js</code> or{" "}
          <code>pages/_document.tsx</code>
        </Typography>

        <CodeBlock
          code={`// pages/_document.js
  import Document, { Html, Head, Main, NextScript } from 'next/document';
  
  export default class MyDocument extends Document {
    render() {
      return (
        <Html lang="en">
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }`}
        />

        <Typography paragraph>
          This file is only loaded on the server. The{" "}
          <code>&lt;Main /&gt;</code> component renders the actual page content,
          and <code>&lt;NextScript /&gt;</code> includes Next.js scripts.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Summary Table */}
        <Typography variant="h5" gutterBottom>
          📋 Summary: <code>_app.js</code> vs <code>_document.js</code>
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Feature</strong>
                </TableCell>
                <TableCell>
                  <strong>_app.js</strong>
                </TableCell>
                <TableCell>
                  <strong>_document.js</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Execution</TableCell>
                <TableCell>Client & Server</TableCell>
                <TableCell>Server Only</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Purpose</TableCell>
                <TableCell>Wrap pages with providers/layouts</TableCell>
                <TableCell>Customize HTML shell (html, head, body)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Use Case</TableCell>
                <TableCell>Theme, Redux, Auth Wrappers</TableCell>
                <TableCell>Inject fonts, lang attr, meta tags</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Required?</TableCell>
                <TableCell>Optional but very common</TableCell>
                <TableCell>Optional and rarely customized</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 3 }} />

        {/* Final Note */}
        <Typography variant="body2" color="text.secondary">
          🧠 Note: You generally use <code>_app.js</code> to wrap your app with
          shared state or styles, and use <code>_document.js</code> when you
          need to customize the server-rendered HTML document.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How do you fetch data in Next.js?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🔄 How Do You Fetch Data in Next.js 15?
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          In <strong>Next.js 15</strong>, data fetching can be performed using
          several methods depending on whether you're using the{" "}
          <strong>App Router</strong> or the <strong>Pages Router</strong>.
          Next.js supports both pre-rendering techniques (SSR, SSG, ISR) and
          client-side fetching with <code>fetch</code> or libraries like Axios
          or SWR.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* App Router */}
        <Typography variant="h5" gutterBottom>
          🗂️ Data Fetching in App Router
        </Typography>

        <Typography paragraph>
          The App Router uses <code>async</code> server components by default.
          You can fetch data directly in the component using the native{" "}
          <code>fetch()</code> API or call external APIs, databases, etc.
        </Typography>

        <CodeBlock
          code={`// app/products/page.tsx
  async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
  }
  
  export default async function ProductsPage() {
    const products = await getProducts();
  
    return (
      <div>
        <h1>Products</h1>
        {products.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    );
  }`}
        />

        <Typography paragraph>
          This is a <strong>server component</strong>, meaning the data is
          fetched on the server and HTML is sent to the client.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Pages Router */}
        <Typography variant="h5" gutterBottom>
          📄 Data Fetching in Pages Router
        </Typography>

        <Typography paragraph>
          In the Pages Router, data can be fetched using built-in Next.js
          functions like:
        </Typography>

        <ul>
          <li>
            <code>getStaticProps</code> – for static generation
          </li>
          <li>
            <code>getServerSideProps</code> – for server-side rendering
          </li>
          <li>
            <code>getInitialProps</code> – legacy method used with custom App
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* getStaticProps Example */}
        <Typography variant="h6" gutterBottom>
          🧊 Using getStaticProps (SSG)
        </Typography>

        <CodeBlock
          code={`// pages/products.js
  export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
  
    return {
      props: { products },
    };
  }
  
  export default function Products({ products }) {
    return (
      <div>
        <h1>Products</h1>
        {products.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    );
  }`}
        />

        <Divider sx={{ my: 3 }} />

        {/* getServerSideProps Example */}
        <Typography variant="h6" gutterBottom>
          🌐 Using getServerSideProps (SSR)
        </Typography>

        <CodeBlock
          code={`// pages/products.js
  export async function getServerSideProps() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
  
    return {
      props: { products },
    };
  }
  
  export default function Products({ products }) {
    return (
      <div>
        <h1>Products (SSR)</h1>
        {products.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    );
  }`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Client Side Fetching */}
        <Typography variant="h5" gutterBottom>
          👩‍💻 Client-Side Data Fetching
        </Typography>

        <Typography paragraph>
          You can also fetch data client-side using <code>useEffect</code> with{" "}
          <code>fetch</code> or any data-fetching library.
        </Typography>

        <CodeBlock
          code={`import { useEffect, useState } from 'react';
  
  export default function Products() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
  
    return (
      <div>
        <h1>Products (CSR)</h1>
        {products.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    );
  }`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Tips */}
        <Typography variant="h5" gutterBottom>
          💡 Tips & Best Practices
        </Typography>

        <ul>
          <li>
            Use <strong>App Router</strong> for modern, server-centric
            applications.
          </li>
          <li>
            Prefer <code>fetch()</code> in server components (App Router) for
            better performance.
          </li>
          <li>
            Use <code>getStaticProps</code> or <code>getServerSideProps</code>{" "}
            in Pages Router based on your rendering strategy.
          </li>
          <li>
            Use client-side fetching for interactive or user-specific data
            (e.g., auth tokens).
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary">
          Pro Tip: Combine static and dynamic strategies using{" "}
          <strong>Incremental Static Regeneration (ISR)</strong> in the Pages
          Router or caching strategies in the App Router.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is middleware in Next.js?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🧩 What is Middleware in Next.js 15?
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          In <strong>Next.js 15</strong>, <strong>Middleware</strong> is a
          powerful feature that allows you to run code before a request is
          completed. It sits between a request and the response — enabling you
          to perform tasks like authentication, redirects, rewrites, logging,
          geolocation-based routing, and more.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Where it runs */}
        <Typography variant="h5" gutterBottom>
          🌍 Where Does Middleware Run?
        </Typography>
        <Typography paragraph>
          Middleware in Next.js runs on the <strong>Edge Runtime</strong> — a
          lightweight JavaScript environment that executes code as close to the
          user as possible for minimal latency.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* File location */}
        <Typography variant="h5" gutterBottom>
          📁 Where to Create Middleware
        </Typography>
        <Typography paragraph>
          To add Middleware, create a <code>middleware.ts</code> or{" "}
          <code>middleware.js</code> file in the root of your project (same
          level as <code>app/</code> or <code>pages/</code>).
        </Typography>

        <CodeBlock
          code={`// middleware.ts
  import { NextResponse } from 'next/server';
  import type { NextRequest } from 'next/server';
  
  export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
  
    // Example: Redirect users not logged in
    const isLoggedIn = request.cookies.has('token');
  
    if (!isLoggedIn && pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  
    return NextResponse.next();
  }`}
        />

        <Typography paragraph>
          In the example above, the middleware checks if a user is authenticated
          before accessing routes like <code>/dashboard</code>. If not, it
          redirects them to <code>/login</code>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Configuration */}
        <Typography variant="h5" gutterBottom>
          ⚙️ Matching Specific Routes
        </Typography>
        <Typography paragraph>
          You can control which routes the middleware applies to using a{" "}
          <code>matcher</code> config in <code>middleware.ts</code>.
        </Typography>

        <CodeBlock
          code={`export const config = {
    matcher: ['/dashboard/:path*', '/settings/:path*'],
  };`}
        />

        <Typography paragraph>
          This matcher ensures the middleware only runs on{" "}
          <code>/dashboard</code> and <code>/settings</code> routes (and their
          subpaths).
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Use Cases */}
        <Typography variant="h5" gutterBottom>
          🛠️ Common Use Cases
        </Typography>
        <ul>
          <li>🔒 Authentication / Access Control</li>
          <li>🌐 Localization (Redirect to language-specific content)</li>
          <li>📦 A/B Testing</li>
          <li>🧭 Custom Redirects / Rewrites</li>
          <li>📈 Logging & Analytics</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Limitations */}
        <Typography variant="h5" gutterBottom>
          🚫 Limitations of Middleware
        </Typography>
        <Typography paragraph>
          Middleware runs in a restricted environment (Edge Runtime), which
          means:
        </Typography>
        <ul>
          <li>
            No access to Node.js APIs like <code>fs</code> or{" "}
            <code>process</code>
          </li>
          <li>
            Only Web APIs and <code>fetch()</code> are available
          </li>
          <li>Must complete within a short time (performance focused)</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Pro Tip */}
        <Typography variant="body2" color="text.secondary">
          💡 <strong>Pro Tip:</strong> Combine middleware with route handlers
          and cookies for secure, flexible access control in both App Router and
          Pages Router!
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What are Server Components and Client Components?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🧩 Server Components vs Client Components in Next.js 15
        </Typography>

        {/* Intro */}
        <Typography paragraph>
          Next.js 15 introduced a new paradigm for React apps with the{" "}
          <strong>App Router</strong>. It uses{" "}
          <strong>React Server Components (RSC)</strong> by default, allowing a
          clear separation between components that run on the{" "}
          <strong>server</strong> and those that run on the{" "}
          <strong>client</strong>.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Server Components */}
        <Typography variant="h5" gutterBottom>
          🌐 Server Components
        </Typography>
        <Typography paragraph>
          Server Components are rendered on the server. They do not include any
          client-side JavaScript in the final bundle, making them faster and
          more efficient.
        </Typography>
        <Typography paragraph>They are ideal for:</Typography>
        <ul>
          <li>Fetching data from databases or APIs</li>
          <li>Rendering static or dynamic content</li>
          <li>Improving performance and reducing bundle size</li>
        </ul>

        {/* Server Component Code */}
        <CodeBlock
          code={`// app/posts/page.tsx (Server Component by default)
import { getAllPosts } from '@/lib/api';

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Client Components */}
        <Typography variant="h5" gutterBottom>
          💻 Client Components
        </Typography>
        <Typography paragraph>
          Client Components are rendered in the browser and support interactive
          behavior (e.g., state, effects, event handlers). You must explicitly
          mark them using <code>'use client'</code>.
        </Typography>

        <Typography paragraph>Use Client Components when you need:</Typography>
        <ul>
          <li>Interactivity (e.g., onClick, onChange)</li>
          <li>
            Hooks like <code>useState</code>, <code>useEffect</code>
          </li>
          <li>Access to browser-only APIs</li>
        </ul>

        {/* Client Component Code */}
        <CodeBlock
          code={`// app/components/Counter.tsx
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Clicked: {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* How to Use Them Together */}
        <Typography variant="h5" gutterBottom>
          🔗 Combining Server and Client Components
        </Typography>
        <Typography paragraph>
          You can compose Client Components inside Server Components, but not
          the other way around.
        </Typography>

        {/* Nested Example */}
        <CodeBlock
          code={`// app/page.tsx (Server Component)
import Counter from './components/Counter'; // client component

export default function HomePage() {
  return (
    <div>
      <h1>Welcome</h1>
      <Counter />
    </div>
  );
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Key Differences */}
        <Typography variant="h5" gutterBottom>
          ⚖️ Key Differences
        </Typography>

        <Box>
          <Typography variant="subtitle1">
            <strong>Server Component</strong>
          </Typography>
          <ul>
            <li>Runs on the server</li>
            <li>No access to browser APIs</li>
            <li>Better performance and SEO</li>
            <li>No client-side JavaScript needed</li>
          </ul>

          <Typography variant="subtitle1">
            <strong>Client Component</strong>
          </Typography>
          <ul>
            <li>Runs in the browser</li>
            <li>Supports interactivity and hooks</li>
            <li>
              Needs to be explicitly marked with <code>'use client'</code>
            </li>
            <li>Included in JS bundle</li>
          </ul>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Final Note */}
        <Typography variant="body2" color="text.secondary">
          ⚠️ <strong>Note:</strong> Server Components are the default in the App
          Router, and you should prefer them unless you need interactivity.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How does routing work in the App Router?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🚦 How Routing Works in the App Router – Next.js 15
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          With the introduction of the <strong>App Router</strong> in Next.js
          13+ (including Next.js 15), routing has moved away from the
          traditional <code>pages</code> directory and now uses the{" "}
          <code>app</code> directory.
        </Typography>
        <Typography paragraph>
          Each folder inside the <code>app</code> directory represents a route.
          It uses **file-based routing** similar to the Pages Router, but with
          powerful additions like layouts, templates, server components, and
          more.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Basic Routing */}
        <Typography variant="h5" gutterBottom>
          📁 Basic Routing Structure
        </Typography>
        <CodeBlock
          code={`// File structure
/app
  ├── page.tsx         // renders on /
  ├── about
  │   └── page.tsx     // renders on /about
  └── contact
      └── page.tsx     // renders on /contact`}
        />
        <Typography paragraph>
          - A folder inside <code>app/</code> becomes a route. - A{" "}
          <code>page.tsx</code> inside the folder defines the content for that
          route.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Nested Routes */}
        <Typography variant="h5" gutterBottom>
          🪜 Nested Routes
        </Typography>
        <Typography paragraph>
          Nested folders define nested routes. For example:
        </Typography>
        <CodeBlock
          code={`// app/blog/page.tsx  →  /blog
// app/blog/post/page.tsx  →  /blog/post`}
        />
        <Typography paragraph>
          This allows clean and hierarchical routing by folder structure alone.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Dynamic Routes */}
        <Typography variant="h5" gutterBottom>
          🔁 Dynamic Routes
        </Typography>
        <Typography paragraph>
          You can define dynamic routes using square brackets{" "}
          <code>[param]</code>.
        </Typography>
        <CodeBlock
          code={`// File: app/products/[id]/page.tsx
// URL: /products/123`}
        />
        <Typography paragraph>
          Inside the component, you can access the route parameter using{" "}
          <code>params</code>:
        </Typography>
        <CodeBlock
          code={`// app/products/[id]/page.tsx
type Props = {
  params: { id: string }
};

export default function Product({ params }: Props) {
  return <h1>Product ID: {params.id}</h1>;
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Layouts */}
        <Typography variant="h5" gutterBottom>
          🧩 Shared Layouts
        </Typography>
        <Typography paragraph>
          You can create shared layouts for multiple pages using the{" "}
          <code>layout.tsx</code> file.
        </Typography>
        <CodeBlock
          code={`// app/layout.tsx (applies to all pages)
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Loading UI */}
        <Typography variant="h5" gutterBottom>
          ⏳ Route-Level Loading UI
        </Typography>
        <Typography paragraph>
          Add a <code>loading.tsx</code> file inside any route folder to show a
          loading indicator while the route loads.
        </Typography>
        <CodeBlock
          code={`// app/blog/loading.tsx
export default function Loading() {
  return <p>Loading blog posts...</p>;
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Error Boundaries */}
        <Typography variant="h5" gutterBottom>
          ❌ Route-Level Error Handling
        </Typography>
        <Typography paragraph>
          You can define an <code>error.tsx</code> file for route-specific error
          boundaries.
        </Typography>
        <CodeBlock
          code={`// app/blog/error.tsx
'use client';

export default function Error({ error }) {
  return <p>Error loading blog: {error.message}</p>;
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Not Found */}
        <Typography variant="h5" gutterBottom>
          🔍 Custom 404 for Routes
        </Typography>
        <Typography paragraph>
          Add a <code>not-found.tsx</code> file to customize the 404 behavior
          for that route.
        </Typography>
        <CodeBlock
          code={`// app/blog/not-found.tsx
export default function NotFound() {
  return <h2>This blog post was not found.</h2>;
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Link Navigation */}
        <Typography variant="h5" gutterBottom>
          🔗 Navigating Between Routes
        </Typography>
        <Typography paragraph>
          Use the <code>Link</code> component from <code>next/link</code> to
          perform client-side transitions between routes:
        </Typography>
        <CodeBlock
          code={`// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return <Link href="/about">Go to About</Link>;
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Summary */}
        <Typography variant="h5" gutterBottom>
          📌 Summary
        </Typography>
        <ul>
          <li>📁 Folder = Route</li>
          <li>
            📄 <code>page.tsx</code> = Page UI
          </li>
          <li>
            📦 <code>layout.tsx</code> = Persistent UI across child routes
          </li>
          <li>
            🔁 <code>[param]</code> = Dynamic route
          </li>
          <li>
            ⏳ <code>loading.tsx</code> = Route loading fallback
          </li>
          <li>
            ❌ <code>error.tsx</code>, <code>not-found.tsx</code> = Custom error
            and 404 handling
          </li>
        </ul>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          ✅ The App Router in Next.js 15 makes routing declarative, composable,
          and powerful using just folders and convention.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "How do you use metadata in Next.js 15?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🧠 Using Metadata in Next.js 15 with App Router
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          In Next.js 15 (using the App Router), you can define metadata such as
          page titles, descriptions, and Open Graph tags using the special{" "}
          <code>metadata</code> object or the <code>generateMetadata</code>{" "}
          function in each route.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 1. Static Metadata */}
        <Typography variant="h5" gutterBottom>
          🏷️ 1. Static Metadata
        </Typography>
        <Typography paragraph>
          You can export a <code>metadata</code> object directly from your{" "}
          <code>page.tsx</code> file. This is used when the metadata is known at
          build time.
        </Typography>

        <CodeBlock
          code={`// app/about/page.tsx
export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company.',
  openGraph: {
    title: 'About Us - MySite',
    description: 'All about our team and mission.',
    url: 'https://mysite.com/about',
    siteName: 'MySite',
    images: [
      {
        url: 'https://mysite.com/og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function AboutPage() {
  return <h1>About Us</h1>;
}`}
        />

        <Typography paragraph>
          ✅ This is great for pages where metadata doesn't depend on dynamic
          data.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 2. Dynamic Metadata using generateMetadata */}
        <Typography variant="h5" gutterBottom>
          ⚙️ 2. Dynamic Metadata with <code>generateMetadata()</code>
        </Typography>
        <Typography paragraph>
          If metadata needs to be generated based on route params or fetched
          data, you can use the <code>generateMetadata</code> function.
        </Typography>

        <CodeBlock
          code={`// app/blog/[slug]/page.tsx
type Props = {
  params: { slug: string }
};

export async function generateMetadata({ params }: Props) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`).then(res => res.json());

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: \`https://mysite.com/blog/\${params.slug}\`,
      images: post.coverImage ? [ { url: post.coverImage } ] : [],
    },
  };
}

export default function BlogPost({ params }: Props) {
  return <h1>Blog Post: {params.slug}</h1>;
}`}
        />

        <Typography paragraph>
          🔁 This allows for dynamic content-specific metadata during rendering
          on the server.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 3. Supported Metadata Fields */}
        <Typography variant="h5" gutterBottom>
          📚 3. Supported Metadata Fields
        </Typography>

        <Typography paragraph>
          Next.js supports many metadata fields including:
        </Typography>

        <ul>
          <li>
            <code>title</code>
          </li>
          <li>
            <code>description</code>
          </li>
          <li>
            <code>keywords</code>
          </li>
          <li>
            <code>authors</code>
          </li>
          <li>
            <code>openGraph</code>
          </li>
          <li>
            <code>twitter</code>
          </li>
          <li>
            <code>robots</code>
          </li>
          <li>
            <code>icons</code>
          </li>
          <li>
            <code>themeColor</code>
          </li>
          <li>
            <code>viewport</code>
          </li>
        </ul>

        <Typography paragraph>
          These fields are used to auto-generate appropriate HTML{" "}
          <code>&lt;meta&gt;</code> tags in the document head.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* 4. Metadata inside Layouts */}
        <Typography variant="h5" gutterBottom>
          🧱 4. Metadata in Layouts
        </Typography>
        <Typography paragraph>
          You can also define global metadata in <code>app/layout.tsx</code>.
          This will apply to all routes under that layout.
        </Typography>

        <CodeBlock
          code={`// app/layout.tsx
export const metadata = {
  title: {
    default: 'MySite',
    template: '%s | MySite',
  },
  description: 'The best site in the world.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* 5. SEO & Social Media Optimization */}
        <Typography variant="h5" gutterBottom>
          🔍 5. SEO & Social Metadata Optimization
        </Typography>
        <Typography paragraph>
          The metadata system helps automatically improve SEO and create rich
          social previews for platforms like Twitter and Facebook using Open
          Graph and Twitter metadata.
        </Typography>

        <CodeBlock
          code={`export const metadata = {
  twitter: {
    card: 'summary_large_image',
    title: 'MySite - Best Tools for Devs',
    description: 'A modern platform for developers.',
    creator: '@mysite',
    images: ['https://mysite.com/banner.png'],
  },
};`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Summary */}
        <Typography variant="h5" gutterBottom>
          ✅ Summary
        </Typography>

        <ul>
          <li>
            <strong>Static Metadata</strong>: Export a constant{" "}
            <code>metadata</code> object.
          </li>
          <li>
            <strong>Dynamic Metadata</strong>: Use{" "}
            <code>generateMetadata()</code> for dynamic routes.
          </li>
          <li>
            <strong>Layouts</strong>: Add metadata to layouts to apply globally.
          </li>
          <li>
            <strong>SEO</strong>: Use <code>openGraph</code> and{" "}
            <code>twitter</code> keys for social sharing cards.
          </li>
        </ul>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          🧠 Tip: Metadata is automatically injected into the HTML head using
          the React Server Components model in Next.js 15.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is a catch-all route in Next.js 15?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🧩 Catch-All Routes in Next.js 15 (App Router)
        </Typography>

        {/* Introduction */}
        <Typography paragraph>
          Catch-all routes allow you to match multiple path segments using a
          single file in your file-based routing system. They are useful when
          the number of path segments is unknown or when dynamic nested routes
          are needed.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* What is a catch-all route? */}
        <Typography variant="h5" gutterBottom>
          🔎 What is a Catch-All Route?
        </Typography>
        <Typography paragraph>
          A catch-all route in Next.js is defined using square brackets and
          three dots: <code>[...slug]</code>. It captures all parts of the URL
          that match the folder it is placed in, including nested paths.
        </Typography>

        <CodeBlock
          code={`// File: app/docs/[...slug]/page.tsx

type Props = {
  params: {
    slug: string[]; // Array of segments like ['guide', 'install']
  };
};

export default function DocsPage({ params }: Props) {
  return (
    <div>
      <h1>Docs Slug: {params.slug.join(' / ')}</h1>
    </div>
  );
}`}
        />

        <Typography paragraph>
          If a user visits <code>/docs/guide/install</code>, the route will
          match and <code>params.slug</code> will be:
        </Typography>

        <CodeBlock code={`["guide", "install"]`} />

        <Divider sx={{ my: 3 }} />

        {/* Optional Catch-All */}
        <Typography variant="h5" gutterBottom>
          ❓ Optional Catch-All Route
        </Typography>
        <Typography paragraph>
          You can make the catch-all route optional by adding an extra pair of
          brackets like this: <code>[[...slug]]</code>. This means the route
          will also match the base path like <code>/docs</code> with an empty
          array.
        </Typography>

        <CodeBlock
          code={`// File: app/docs/[[...slug]]/page.tsx

type Props = {
  params: {
    slug?: string[]; // Optional array
  };
};

export default function DocsPage({ params }: Props) {
  return (
    <div>
      <h1>Docs Page</h1>
      <p>Slug: {params.slug?.join(" / ") || "root"}</p>
    </div>
  );
}`}
        />

        <Typography paragraph>
          This will handle:
          <ul>
            <li>
              <code>/docs</code> → <code>slug</code> is <code>undefined</code>
            </li>
            <li>
              <code>/docs/getting-started</code> → <code>slug</code> is{" "}
              <code>["getting-started"]</code>
            </li>
          </ul>
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Use Cases */}
        <Typography variant="h5" gutterBottom>
          🧠 Use Cases for Catch-All Routes
        </Typography>
        <ul>
          <li>Documentation pages with deeply nested topics</li>
          <li>Multi-level categories or breadcrumbs</li>
          <li>Dynamic file system-like navigation (e.g. folder explorer)</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Important Notes */}
        <Typography variant="h5" gutterBottom>
          ⚠️ Things to Keep in Mind
        </Typography>
        <ul>
          <li>
            <strong>Catch-all routes should not conflict</strong> with other
            static or dynamic routes.
          </li>
          <li>
            Use <code>params.slug?.length</code> checks to distinguish between
            root and nested paths.
          </li>
          <li>
            You can use <code>generateStaticParams()</code> with catch-all
            routes for static generation.
          </li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Static Params Example */}
        <Typography variant="h5" gutterBottom>
          📦 Static Generation with generateStaticParams
        </Typography>

        <CodeBlock
          code={`// File: app/docs/[...slug]/page.tsx

export async function generateStaticParams() {
  return [
    { slug: ['getting-started'] },
    { slug: ['getting-started', 'installation'] },
  ];
}

export default function DocsPage({ params }: { params: { slug: string[] } }) {
  return <h1>{params.slug.join(' / ')}</h1>;
}`}
        />

        <Divider sx={{ my: 3 }} />

        {/* Summary */}
        <Typography variant="h5" gutterBottom>
          ✅ Summary
        </Typography>

        <ul>
          <li>
            <strong>Catch-all route:</strong> <code>[...slug]</code> – captures
            multiple segments as an array.
          </li>
          <li>
            <strong>Optional catch-all:</strong> <code>[[...slug]]</code> –
            allows matching the root and nested paths.
          </li>
          <li>Useful for creating flexible, deeply nested dynamic routes.</li>
          <li>
            Integrates well with <code>generateStaticParams</code> for static
            site generation.
          </li>
        </ul>

        <Typography variant="body2" color="text.secondary" mt={3}>
          🧩 Catch-all routes provide power and flexibility for building dynamic
          content-driven apps in Next.js 15.
        </Typography>
      </Box>
    ),
  },
  {
    heading: "What is shallow routing and is it supported in App Router?",
    content: (
      <Box p={4}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          🔄 Shallow Routing in Next.js 15 (App Router)
        </Typography>

        {/* What is Shallow Routing? */}
        <Typography paragraph>
          Shallow routing allows you to change the URL without running data
          fetching methods again, such as <code>useEffect</code> or{" "}
          <code>generateMetadata()</code>, or triggering a new server request
          for a new route.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Key Characteristics */}
        <Typography variant="h5" gutterBottom>
          🧠 What Does Shallow Routing Do?
        </Typography>
        <ul>
          <li>Updates the URL without triggering a full route transition.</li>
          <li>Preserves component state and avoids re-running server code.</li>
          <li>Helpful for query params, tabs, filters, or paginated UI.</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Is Shallow Routing Supported in App Router? */}
        <Typography variant="h5" gutterBottom>
          ✅ Is Shallow Routing Supported in the App Router?
        </Typography>
        <Typography paragraph>
          Yes, **shallow routing is supported in the App Router** of Next.js 15.
          However, it works a bit differently compared to the Pages Router. In
          the App Router, you use the <code>useRouter()</code> hook from{" "}
          <code>next/navigation</code>, and it doesn't expose a direct{" "}
          <code>shallow</code> option like in the Pages Router.
        </Typography>

        <Typography paragraph>
          But you can achieve shallow behavior by using{" "}
          <code>router.replace()</code> with updated URL params. Since the App
          Router uses React Server Components (RSC), this action doesn’t trigger
          a full reload unless the segment that changed is a layout boundary.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Example */}
        <Typography variant="h5" gutterBottom>
          🧪 Example: Updating Query Params with Shallow Routing
        </Typography>

        <CodeBlock
          code={`// File: app/products/page.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') || '1');

  const updatePage = (newPage: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage);

    router.replace(\`/products?\${params.toString()}\`); // behaves like shallow routing
    setPage(newPage); // update local state without full reload
  };

  return (
    <div>
      <h1>Products - Page {page}</h1>
      <button onClick={() => updatePage(String(Number(page) + 1))}>
        Next Page
      </button>
    </div>
  );
}`}
        />

        <Typography paragraph>In the above example:</Typography>
        <ul>
          <li>
            Clicking the button updates the URL{" "}
            <strong>without reloading</strong> the whole page.
          </li>
          <li>
            No network request is made unless the segment changes layout
            boundaries.
          </li>
          <li>This mimics shallow routing effectively in the App Router.</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Pages Router Comparison */}
        <Typography variant="h5" gutterBottom>
          📚 How Does It Differ from Pages Router?
        </Typography>
        <Typography paragraph>
          In the Pages Router, you would explicitly set{" "}
          <code>shallow: true</code> like this:
        </Typography>

        <CodeBlock
          code={`// Pages Router shallow routing example
router.push('/products?page=2', undefined, { shallow: true });`}
        />

        <Typography paragraph>
          This kind of API is not directly available in the App Router. Instead,
          you rely on the fact that <code>router.replace()</code> or{" "}
          <code>router.push()</code> won’t refetch layouts unless you navigate
          across boundaries.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* When to Use */}
        <Typography variant="h5" gutterBottom>
          🎯 When Should You Use Shallow Routing?
        </Typography>
        <ul>
          <li>Pagination without full page reloads</li>
          <li>Tab switching within the same page</li>
          <li>Filtering or sorting data</li>
          <li>Updating query params without resetting component state</li>
        </ul>

        <Divider sx={{ my: 3 }} />

        {/* Summary */}
        <Typography variant="h5" gutterBottom>
          📝 Summary
        </Typography>
        <ul>
          <li>
            <strong>Shallow routing</strong> lets you update the URL without a
            full page transition.
          </li>
          <li>
            <strong>In Next.js 15 App Router</strong>, it's achieved using{" "}
            <code>router.replace()</code> from <code>next/navigation</code>.
          </li>
          <li>
            It helps maintain component state and avoids re-running server-side
            logic when possible.
          </li>
        </ul>

        <Typography variant="body2" color="text.secondary" mt={3}>
          🚀 Use shallow routing for smoother UX and optimized client-side
          transitions in modern Next.js apps.
        </Typography>
      </Box>
    ),
  },
  {
    heading:
      "What is the difference between useEffect and useServerInsertedHTML()?",
    content: (
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
          🧠 Difference Between <code>useEffect()</code> and{" "}
          <code>useServerInsertedHTML()</code> in Next.js 15
        </Typography>

        <Typography paragraph>
          In Next.js 15, both <code>useEffect</code> and{" "}
          <code>useServerInsertedHTML</code> are used in **React Server
          Components (RSC)** context, but they solve **very different
          problems**. Let’s break down each one in detail with usage and
          examples.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* useEffect */}
        <Typography variant="h5" gutterBottom>
          🔁 What is <code>useEffect()</code>?
        </Typography>
        <Typography paragraph>
          <code>useEffect</code> is a **Client Component hook** in React used to
          run side effects on the **client-side only** after a component has
          been rendered.
        </Typography>

        <Typography variant="body1" gutterBottom>
          ✅ Common Use Cases:
        </Typography>
        <ul>
          <li>Fetching data from APIs after render</li>
          <li>Subscribing to events (e.g., scroll, resize)</li>
          <li>Setting up timers or intervals</li>
        </ul>

        <CodeBlock
          code={`'use client';
import { useEffect, useState } from 'react';

export default function ClientComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('This ran on the client side!');
  }, []);

  return <p>{message}</p>;
}`}
        />

        <Divider sx={{ my: 4 }} />

        {/* useServerInsertedHTML */}
        <Typography variant="h5" gutterBottom>
          🧩 What is <code>useServerInsertedHTML()</code>?
        </Typography>
        <Typography paragraph>
          <code>useServerInsertedHTML</code> is a **Server Component hook** that
          allows developers to inject HTML **directly into the server-rendered
          HTML stream** during SSR (Server-Side Rendering).
        </Typography>

        <Typography paragraph>
          It is primarily used for injecting critical styles into the head —
          especially useful for **CSS-in-JS libraries** (like Emotion or
          styled-components) that require styles to be inserted at render time.
        </Typography>

        <Typography variant="body1" gutterBottom>
          ✅ Common Use Cases:
        </Typography>
        <ul>
          <li>Injecting critical CSS during SSR</li>
          <li>Inserting raw HTML into the server stream</li>
          <li>
            Ensuring styles are available immediately without FOUC (Flash of
            Unstyled Content)
          </li>
        </ul>

        <CodeBlock
          code={`// app/emotion-provider.tsx
'use client';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import React from 'react';

const cache = createCache({ key: 'css' });

export function EmotionProvider({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => (
    <style
      data-emotion-css={cache.key}
      dangerouslySetInnerHTML={{ __html: cache.sheet.tags.join('') }}
    />
  ));

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}`}
        />

        <Divider sx={{ my: 4 }} />

        {/* Key Differences */}
        <Typography variant="h5" gutterBottom>
          🆚 Key Differences
        </Typography>

        <Box
          component="table"
          sx={{ width: "100%", borderCollapse: "collapse", mt: 2 }}
        >
          <Box component="thead" sx={{ backgroundColor: "#f0f0f0" }}>
            <Box component="tr">
              <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                Aspect
              </Box>
              <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                useEffect
              </Box>
              <Box component="th" sx={{ border: "1px solid #ccc", p: 1 }}>
                useServerInsertedHTML
              </Box>
            </Box>
          </Box>
          <Box component="tbody">
            <Box component="tr">
              <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                Execution Time
              </Box>
              <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                After render on client
              </Box>
              <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                During server render
              </Box>
            </Box>
            <Box component="tr">
              <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                Component Type
              </Box>
              <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                Client Component
              </Box>
              <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                Server Component
              </Box>
            </Box>
            <Box component="tr">
              <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                Use Case
              </Box>
              <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                Browser side effects
              </Box>
              <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                Inject server HTML (e.g. styles)
              </Box>
            </Box>
            <Box component="tr">
              <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                Runs on Server?
              </Box>
              <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                ❌
              </Box>
              <Box component="td" sx={{ border: "1px solid #ccc", p: 1 }}>
                ✅
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Summary */}
        <Typography variant="h5" gutterBottom>
          📝 Summary
        </Typography>
        <ul>
          <li>
            <code>useEffect</code> is for client-side lifecycle effects (like
            fetching, DOM events, etc.).
          </li>
          <li>
            <code>useServerInsertedHTML</code> is for injecting HTML (like
            styles) during server rendering.
          </li>
          <li>
            They operate in **different lifecycles** and are used for **very
            different problems** in Next.js 15.
          </li>
        </ul>

        <Typography variant="body2" color="text.secondary" mt={2}>
          🚀 Use <code>useEffect</code> for browser logic, and{" "}
          <code>useServerInsertedHTML</code> for optimizing SSR with custom HTML
          injections like CSS.
        </Typography>
      </Box>
    ),
  },
];
