/* ============================================
   GRODE — APP.JS
   Full curriculum, AI (Claude), rewards,
   CCV, notes, projects, analytics, control panel
============================================ */

// ── STATE ──
const state = {
  diamonds: 0,
  xp: 0,
  lessonIndex: 0,
  completedLessons: new Set(),
  completedProjects: new Set(),
  notes: [],
  activeNote: null,
  streak: [0,0,0,1,1,0,1],
  userName: 'G',
  chatHistory: [],
  ccvLang: 'html',
  featureToggles: { ccv: true, bot: true, anim: true, sound: false, particles: true }
};

// ── FULL CURRICULUM ──
const curriculum = [
  {
    module: "HTML Foundations",
    badge: "Module 1",
    lessons: [
      {
        id: 0, title: "Tags & Elements", diamonds: 10, xp: 20,
        breadcrumb: "HTML Foundations → Tags & Elements",
        content: `
          <div class="lesson-title-main">Tags & Elements</div>
          <div class="lesson-subtitle">The absolute building blocks of every website on Earth.</div>
          <div class="lesson-section">
            <h3>What is HTML?</h3>
            <p>HTML stands for <strong>HyperText Markup Language</strong>. It is the skeleton of every single website you have ever visited. It tells the browser: here is a heading, here is a paragraph, here is an image. Think of HTML as the bones — CSS dresses it up, JavaScript makes it move.</p>
          </div>
          <div class="lesson-section">
            <h3>Anatomy of an Element</h3>
            <p>Every HTML element follows this pattern:</p>
            <div class="code-example" data-lang="html"><span class="code-tag">&lt;p&gt;</span>This is my paragraph<span class="code-tag">&lt;/p&gt;</span>
<span class="code-comment">^ opening    ^ content        ^ closing</span></div>
            <p>The <strong>tag name</strong> tells the browser what type of element it is. The opening tag opens it, content goes in the middle, the closing tag (with a slash) closes it.</p>
          </div>
          <div class="lesson-section">
            <h3>Common Tags</h3>
            <div class="code-example" data-lang="html"><span class="code-tag">&lt;h1&gt;</span>Big Heading<span class="code-tag">&lt;/h1&gt;</span>
<span class="code-tag">&lt;h2&gt;</span>Medium Heading<span class="code-tag">&lt;/h2&gt;</span>
<span class="code-tag">&lt;p&gt;</span>A paragraph of text<span class="code-tag">&lt;/p&gt;</span>
<span class="code-tag">&lt;a href=</span><span class="code-str">"https://google.com"</span><span class="code-tag">&gt;</span>Click me<span class="code-tag">&lt;/a&gt;</span>
<span class="code-tag">&lt;img src=</span><span class="code-str">"photo.jpg"</span> <span class="code-attr">alt=</span><span class="code-str">"a photo"</span><span class="code-tag">/&gt;</span></div>
          </div>
          <div class="callout">Tags h1 to h6 give you 6 heading sizes. h1 is the biggest and most important. Never skip heading levels — search engines and screen readers depend on this order.</div>
          ${quiz(0, "What does the &lt;p&gt; tag create?", ["A big heading", "A paragraph of text", "A button", "An image"], 1, "Correct! &lt;p&gt; stands for paragraph. It creates a block of text on the page.")}
        `
      },
      {
        id: 1, title: "HTML Boilerplate", diamonds: 10, xp: 20,
        breadcrumb: "HTML Foundations → HTML Boilerplate",
        content: `
          <div class="lesson-title-main">HTML Boilerplate</div>
          <div class="lesson-subtitle">The starter code every HTML file needs before you write a single thing.</div>
          <div class="lesson-section">
            <h3>The Full Structure</h3>
            <p>Every HTML file must start with this exact structure. It is called the <strong>boilerplate</strong> — standard code you always write first:</p>
            <div class="code-example" data-lang="html"><span class="code-tag">&lt;!DOCTYPE html&gt;</span>
<span class="code-tag">&lt;html</span> <span class="code-attr">lang=</span><span class="code-str">"en"</span><span class="code-tag">&gt;</span>
  <span class="code-tag">&lt;head&gt;</span>
    <span class="code-tag">&lt;meta</span> <span class="code-attr">charset=</span><span class="code-str">"UTF-8"</span><span class="code-tag">/&gt;</span>
    <span class="code-tag">&lt;meta</span> <span class="code-attr">name=</span><span class="code-str">"viewport"</span> <span class="code-attr">content=</span><span class="code-str">"width=device-width, initial-scale=1.0"</span><span class="code-tag">/&gt;</span>
    <span class="code-tag">&lt;title&gt;</span>My Page<span class="code-tag">&lt;/title&gt;</span>
  <span class="code-tag">&lt;/head&gt;</span>
  <span class="code-tag">&lt;body&gt;</span>
    <span class="code-comment">&lt;!-- Your content goes here --&gt;</span>
  <span class="code-tag">&lt;/body&gt;</span>
<span class="code-tag">&lt;/html&gt;</span></div>
          </div>
          <div class="lesson-section">
            <h3>What Each Part Does</h3>
            <p><strong>&lt;!DOCTYPE html&gt;</strong> — tells the browser this is a modern HTML5 document.<br/>
            <strong>&lt;html&gt;</strong> — wraps everything. The root of your page.<br/>
            <strong>&lt;head&gt;</strong> — invisible settings: title, fonts, links to CSS.<br/>
            <strong>&lt;body&gt;</strong> — everything the user actually sees goes here.</p>
          </div>
          <div class="callout">In VS Code, type <strong>!</strong> and press Tab — it generates this entire boilerplate instantly.</div>
          ${quiz(1, "Where does all visible content go in HTML?", ["Inside &lt;head&gt;", "Inside &lt;body&gt;", "Inside &lt;html&gt;", "Inside &lt;meta&gt;"], 1, "Exactly! The &lt;body&gt; tag holds everything the user sees on the page.")}
        `
      },
      {
        id: 2, title: "Links & Images", diamonds: 10, xp: 20,
        breadcrumb: "HTML Foundations → Links & Images",
        content: `
          <div class="lesson-title-main">Links & Images</div>
          <div class="lesson-subtitle">Connect pages and add visuals — two of the most used HTML elements.</div>
          <div class="lesson-section">
            <h3>Links</h3>
            <p>Links use the <strong>&lt;a&gt;</strong> tag (anchor). The <strong>href</strong> attribute holds the URL:</p>
            <div class="code-example" data-lang="html"><span class="code-tag">&lt;a</span> <span class="code-attr">href=</span><span class="code-str">"https://google.com"</span><span class="code-tag">&gt;</span>Go to Google<span class="code-tag">&lt;/a&gt;</span>

<span class="code-comment">&lt;!-- Open in a new tab --&gt;</span>
<span class="code-tag">&lt;a</span> <span class="code-attr">href=</span><span class="code-str">"https://google.com"</span> <span class="code-attr">target=</span><span class="code-str">"_blank"</span><span class="code-tag">&gt;</span>New tab<span class="code-tag">&lt;/a&gt;</span></div>
          </div>
          <div class="lesson-section">
            <h3>Images</h3>
            <p>Images use the <strong>&lt;img&gt;</strong> tag. It is a <strong>self-closing</strong> tag — no closing tag needed. The <strong>src</strong> points to the image, <strong>alt</strong> describes it:</p>
            <div class="code-example" data-lang="html"><span class="code-tag">&lt;img</span> <span class="code-attr">src=</span><span class="code-str">"profile.jpg"</span> <span class="code-attr">alt=</span><span class="code-str">"My profile photo"</span> <span class="code-attr">width=</span><span class="code-str">"150"</span><span class="code-tag">/&gt;</span></div>
            <p>Note: in HTML attributes, you don't write <strong>px</strong> for width. In CSS you do: <strong>width: 150px;</strong></p>
          </div>
          ${quiz(2, "Which attribute in an &lt;img&gt; tag points to the image file?", ["alt", "href", "src", "link"], 2, "Correct! src (source) points to the image file. alt provides a text description for accessibility.")}
        `
      },
      {
        id: 3, title: "Lists & Tables", diamonds: 10, xp: 20,
        breadcrumb: "HTML Foundations → Lists & Tables",
        content: `
          <div class="lesson-title-main">Lists & Tables</div>
          <div class="lesson-subtitle">Organise content with bullets, numbers, and grids.</div>
          <div class="lesson-section">
            <h3>Unordered List (Bullets)</h3>
            <div class="code-example" data-lang="html"><span class="code-tag">&lt;ul&gt;</span>
  <span class="code-tag">&lt;li&gt;</span>HTML<span class="code-tag">&lt;/li&gt;</span>
  <span class="code-tag">&lt;li&gt;</span>CSS<span class="code-tag">&lt;/li&gt;</span>
  <span class="code-tag">&lt;li&gt;</span>JavaScript<span class="code-tag">&lt;/li&gt;</span>
<span class="code-tag">&lt;/ul&gt;</span></div>
          </div>
          <div class="lesson-section">
            <h3>Ordered List (Numbers)</h3>
            <div class="code-example" data-lang="html"><span class="code-tag">&lt;ol&gt;</span>
  <span class="code-tag">&lt;li&gt;</span>Learn HTML<span class="code-tag">&lt;/li&gt;</span>
  <span class="code-tag">&lt;li&gt;</span>Learn CSS<span class="code-tag">&lt;/li&gt;</span>
  <span class="code-tag">&lt;li&gt;</span>Build something<span class="code-tag">&lt;/li&gt;</span>
<span class="code-tag">&lt;/ol&gt;</span></div>
          </div>
          <div class="lesson-section">
            <h3>Tables</h3>
            <div class="code-example" data-lang="html"><span class="code-tag">&lt;table&gt;</span>
  <span class="code-tag">&lt;tr&gt;</span>
    <span class="code-tag">&lt;th&gt;</span>Name<span class="code-tag">&lt;/th&gt;</span>  <span class="code-tag">&lt;th&gt;</span>Age<span class="code-tag">&lt;/th&gt;</span>
  <span class="code-tag">&lt;/tr&gt;</span>
  <span class="code-tag">&lt;tr&gt;</span>
    <span class="code-tag">&lt;td&gt;</span>Grode<span class="code-tag">&lt;/td&gt;</span>  <span class="code-tag">&lt;td&gt;</span>18<span class="code-tag">&lt;/td&gt;</span>
  <span class="code-tag">&lt;/tr&gt;</span>
<span class="code-tag">&lt;/table&gt;</span></div>
            <p><strong>tr</strong> = table row. <strong>th</strong> = table heading. <strong>td</strong> = table data cell.</p>
          </div>
          ${quiz(3, "Which tag creates a numbered list in HTML?", ["&lt;ul&gt;", "&lt;nl&gt;", "&lt;ol&gt;", "&lt;list&gt;"], 2, "Correct! ol = ordered list (numbered). ul = unordered list (bullets).")}
        `
      },
      {
        id: 4, title: "Forms & Inputs", diamonds: 15, xp: 30,
        breadcrumb: "HTML Foundations → Forms & Inputs",
        content: `
          <div class="lesson-title-main">Forms & Inputs</div>
          <div class="lesson-subtitle">How websites collect information from users.</div>
          <div class="lesson-section">
            <h3>Basic Form</h3>
            <div class="code-example" data-lang="html"><span class="code-tag">&lt;form&gt;</span>
  <span class="code-tag">&lt;label</span> <span class="code-attr">for=</span><span class="code-str">"name"</span><span class="code-tag">&gt;</span>Your Name<span class="code-tag">&lt;/label&gt;</span>
  <span class="code-tag">&lt;input</span> <span class="code-attr">type=</span><span class="code-str">"text"</span> <span class="code-attr">id=</span><span class="code-str">"name"</span> <span class="code-attr">placeholder=</span><span class="code-str">"Enter name..."</span><span class="code-tag">/&gt;</span>

  <span class="code-tag">&lt;input</span> <span class="code-attr">type=</span><span class="code-str">"email"</span> <span class="code-attr">placeholder=</span><span class="code-str">"Email address"</span><span class="code-tag">/&gt;</span>
  <span class="code-tag">&lt;input</span> <span class="code-attr">type=</span><span class="code-str">"password"</span> <span class="code-attr">placeholder=</span><span class="code-str">"Password"</span><span class="code-tag">/&gt;</span>

  <span class="code-tag">&lt;button</span> <span class="code-attr">type=</span><span class="code-str">"submit"</span><span class="code-tag">&gt;</span>Submit<span class="code-tag">&lt;/button&gt;</span>
<span class="code-tag">&lt;/form&gt;</span></div>
          </div>
          <div class="lesson-section">
            <h3>Other Input Types</h3>
            <div class="code-example" data-lang="html"><span class="code-tag">&lt;input</span> <span class="code-attr">type=</span><span class="code-str">"checkbox"</span><span class="code-tag">/&gt;</span> Remember me
<span class="code-tag">&lt;input</span> <span class="code-attr">type=</span><span class="code-str">"radio"</span> <span class="code-attr">name=</span><span class="code-str">"choice"</span><span class="code-tag">/&gt;</span> Option A
<span class="code-tag">&lt;input</span> <span class="code-attr">type=</span><span class="code-str">"range"</span> <span class="code-attr">min=</span><span class="code-str">"0"</span> <span class="code-attr">max=</span><span class="code-str">"100"</span><span class="code-tag">/&gt;</span>
<span class="code-tag">&lt;textarea</span> <span class="code-attr">rows=</span><span class="code-str">"4"</span><span class="code-tag">&gt;&lt;/textarea&gt;</span></div>
          </div>
          ${quiz(4, "What input type is used for email addresses?", ['type="text"', 'type="mail"', 'type="email"', 'type="address"'], 2, "Correct! type='email' makes browsers validate that the input looks like an email address.")}
        `
      }
    ]
  },
  {
    module: "CSS Styling",
    badge: "Module 2",
    lessons: [
      {
        id: 5, title: "CSS Basics", diamonds: 10, xp: 20,
        breadcrumb: "CSS Styling → CSS Basics",
        content: `
          <div class="lesson-title-main">CSS Basics</div>
          <div class="lesson-subtitle">Give your HTML a personality. Colors, fonts, sizes, everything visual.</div>
          <div class="lesson-section">
            <h3>How CSS Works</h3>
            <p>CSS stands for <strong>Cascading Style Sheets</strong>. You select an HTML element and tell it how to look:</p>
            <div class="code-example" data-lang="css"><span class="code-kw">p</span> {
  <span class="code-attr">color</span>: <span class="code-str">purple</span>;
  <span class="code-attr">font-size</span>: <span class="code-str">18px</span>;
  <span class="code-attr">font-weight</span>: <span class="code-str">bold</span>;
}</div>
          </div>
          <div class="lesson-section">
            <h3>Where to Write CSS</h3>
            <div class="code-example" data-lang="html"><span class="code-comment">&lt;!-- 1. In a separate file (best practice) --&gt;</span>
<span class="code-tag">&lt;link</span> <span class="code-attr">rel=</span><span class="code-str">"stylesheet"</span> <span class="code-attr">href=</span><span class="code-str">"style.css"</span><span class="code-tag">/&gt;</span>

<span class="code-comment">&lt;!-- 2. In a style tag inside head --&gt;</span>
<span class="code-tag">&lt;style&gt;</span>
  <span class="code-kw">p</span> { <span class="code-attr">color</span>: <span class="code-str">red</span>; }
<span class="code-tag">&lt;/style&gt;</span>

<span class="code-comment">&lt;!-- 3. Inline (avoid for big projects) --&gt;</span>
<span class="code-tag">&lt;p</span> <span class="code-attr">style=</span><span class="code-str">"color: red;"</span><span class="code-tag">&gt;</span>Hello<span class="code-tag">&lt;/p&gt;</span></div>
          </div>
          ${quiz(5, "What does CSS stand for?", ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style System", "Coded Style Sheets"], 1, "Exactly! Cascading Style Sheets — cascading means styles flow down from parent to child elements.")}
        `
      },
      {
        id: 6, title: "Selectors & Properties", diamonds: 10, xp: 20,
        breadcrumb: "CSS Styling → Selectors & Properties",
        content: `
          <div class="lesson-title-main">Selectors & Properties</div>
          <div class="lesson-subtitle">Target exactly what you want to style — with surgical precision.</div>
          <div class="lesson-section">
            <h3>Types of Selectors</h3>
            <div class="code-example" data-lang="css"><span class="code-comment">/* Tag selector — targets ALL paragraphs */</span>
<span class="code-kw">p</span> { <span class="code-attr">color</span>: <span class="code-str">white</span>; }

<span class="code-comment">/* Class selector — targets elements with class="title" */</span>
<span class="code-kw">.title</span> { <span class="code-attr">font-size</span>: <span class="code-str">24px</span>; }

<span class="code-comment">/* ID selector — targets ONE specific element */</span>
<span class="code-kw">#header</span> { <span class="code-attr">background</span>: <span class="code-str">black</span>; }

<span class="code-comment">/* Combined — p tags inside .card */</span>
<span class="code-kw">.card p</span> { <span class="code-attr">font-size</span>: <span class="code-str">14px</span>; }</div>
          </div>
          <div class="lesson-section">
            <h3>Common Properties</h3>
            <div class="code-example" data-lang="css"><span class="code-kw">.box</span> {
  <span class="code-attr">color</span>: <span class="code-str">#ffffff</span>;          <span class="code-comment">/* text color */</span>
  <span class="code-attr">background</span>: <span class="code-str">#9933cc</span>;  <span class="code-comment">/* background */</span>
  <span class="code-attr">font-size</span>: <span class="code-str">16px</span>;       <span class="code-comment">/* text size */</span>
  <span class="code-attr">font-family</span>: <span class="code-str">Arial</span>;   <span class="code-comment">/* font */</span>
  <span class="code-attr">border</span>: <span class="code-str">1px solid red</span>; <span class="code-comment">/* border */</span>
  <span class="code-attr">border-radius</span>: <span class="code-str">10px</span>;  <span class="code-comment">/* rounded corners */</span>
  <span class="code-attr">padding</span>: <span class="code-str">20px</span>;         <span class="code-comment">/* inner space */</span>
  <span class="code-attr">margin</span>: <span class="code-str">10px</span>;          <span class="code-comment">/* outer space */</span>
}</div>
          </div>
          ${quiz(6, "Which selector targets an element with class='highlight'?", ["#highlight", ".highlight", "highlight", "*highlight"], 1, "Correct! Classes use a dot (.) prefix. IDs use a hash (#). This is one of the most fundamental CSS rules.")}
        `
      },
      {
        id: 7, title: "Box Model", diamonds: 10, xp: 20,
        breadcrumb: "CSS Styling → Box Model",
        content: `
          <div class="lesson-title-main">The Box Model</div>
          <div class="lesson-subtitle">Every element is a box. Master this and layouts will make sense.</div>
          <div class="lesson-section">
            <h3>The 4 Layers</h3>
            <p>Every HTML element is surrounded by 4 layers from inside to outside:</p>
            <div class="code-example" data-lang="css"><span class="code-kw">.card</span> {
  <span class="code-comment">/* 1. Content — the actual text or image */</span>
  <span class="code-attr">width</span>: <span class="code-str">200px</span>;
  <span class="code-attr">height</span>: <span class="code-str">100px</span>;

  <span class="code-comment">/* 2. Padding — space INSIDE the border */</span>
  <span class="code-attr">padding</span>: <span class="code-str">20px</span>;

  <span class="code-comment">/* 3. Border — the visible line */</span>
  <span class="code-attr">border</span>: <span class="code-str">2px solid purple</span>;

  <span class="code-comment">/* 4. Margin — space OUTSIDE the border */</span>
  <span class="code-attr">margin</span>: <span class="code-str">30px</span>;
}</div>
          </div>
          <div class="callout">Add <strong>box-sizing: border-box</strong> to every project. It makes width include padding and border, which prevents a lot of layout bugs.</div>
          ${quiz(7, "What does padding do?", ["Adds space outside the element", "Adds space inside the element between content and border", "Creates a visible border", "Sets the element width"], 1, "Exactly! Padding is the breathing room INSIDE the border. Margin is the space OUTSIDE.")}
        `
      },
      {
        id: 8, title: "Flexbox", diamonds: 15, xp: 30,
        breadcrumb: "CSS Styling → Flexbox",
        content: `
          <div class="lesson-title-main">Flexbox</div>
          <div class="lesson-subtitle">The most powerful layout tool in CSS. Align anything, anywhere.</div>
          <div class="lesson-section">
            <h3>Enabling Flexbox</h3>
            <div class="code-example" data-lang="css"><span class="code-kw">.container</span> {
  <span class="code-attr">display</span>: <span class="code-str">flex</span>;
}</div>
            <p>That single line turns the container into a flex container. All direct children become flex items that sit in a row.</p>
          </div>
          <div class="lesson-section">
            <h3>Key Flexbox Properties</h3>
            <div class="code-example" data-lang="css"><span class="code-kw">.container</span> {
  <span class="code-attr">display</span>: <span class="code-str">flex</span>;
  <span class="code-attr">flex-direction</span>: <span class="code-str">row</span>;         <span class="code-comment">/* row | column */</span>
  <span class="code-attr">justify-content</span>: <span class="code-str">center</span>;    <span class="code-comment">/* horizontal align */</span>
  <span class="code-attr">align-items</span>: <span class="code-str">center</span>;       <span class="code-comment">/* vertical align */</span>
  <span class="code-attr">gap</span>: <span class="code-str">16px</span>;                 <span class="code-comment">/* space between items */</span>
  <span class="code-attr">flex-wrap</span>: <span class="code-str">wrap</span>;           <span class="code-comment">/* allow wrapping */</span>
}</div>
          </div>
          <div class="callout">To perfectly center something horizontally AND vertically: display: flex + justify-content: center + align-items: center. Works every time.</div>
          ${quiz(8, "Which property centers items horizontally in a flex row?", ["align-items", "flex-center", "justify-content", "text-align"], 2, "Correct! justify-content handles the main axis (horizontal in a row). align-items handles the cross axis (vertical in a row).")}
        `
      },
      {
        id: 9, title: "CSS Grid", diamonds: 15, xp: 30,
        breadcrumb: "CSS Styling → CSS Grid",
        content: `
          <div class="lesson-title-main">CSS Grid</div>
          <div class="lesson-subtitle">Build two-dimensional layouts — rows AND columns at the same time.</div>
          <div class="lesson-section">
            <h3>Creating a Grid</h3>
            <div class="code-example" data-lang="css"><span class="code-kw">.grid</span> {
  <span class="code-attr">display</span>: <span class="code-str">grid</span>;
  <span class="code-attr">grid-template-columns</span>: <span class="code-str">repeat(3, 1fr)</span>;  <span class="code-comment">/* 3 equal columns */</span>
  <span class="code-attr">gap</span>: <span class="code-str">20px</span>;
}</div>
            <p><strong>1fr</strong> means one fraction of available space. <strong>repeat(3, 1fr)</strong> gives you 3 equal columns automatically.</p>
          </div>
          <div class="lesson-section">
            <h3>Your Calculator Layout</h3>
            <div class="code-example" data-lang="css"><span class="code-kw">.buttons</span> {
  <span class="code-attr">display</span>: <span class="code-str">grid</span>;
  <span class="code-attr">grid-template-columns</span>: <span class="code-str">repeat(4, 1fr)</span>;
  <span class="code-attr">gap</span>: <span class="code-str">10px</span>;
}</div>
            <p>This is exactly the layout for your calculator — 4 buttons per row, equal size, with gaps between them.</p>
          </div>
          ${quiz(9, "What does 1fr mean in CSS Grid?", ["1 fixed pixel", "1 font size unit", "1 fraction of available space", "1 frame per second"], 2, "Correct! fr is the fraction unit. 1fr takes up 1 equal share of whatever space is available.")}
        `
      },
      {
        id: 10, title: "Animations & Effects", diamonds: 20, xp: 40,
        breadcrumb: "CSS Styling → Animations & Effects",
        content: `
          <div class="lesson-title-main">Animations & Effects</div>
          <div class="lesson-subtitle">Make things move, glow, and feel alive — with pure CSS.</div>
          <div class="lesson-section">
            <h3>Transitions</h3>
            <div class="code-example" data-lang="css"><span class="code-kw">button</span> {
  <span class="code-attr">background</span>: <span class="code-str">purple</span>;
  <span class="code-attr">transition</span>: <span class="code-str">all 0.3s ease</span>;
}
<span class="code-kw">button:hover</span> {
  <span class="code-attr">background</span>: <span class="code-str">pink</span>;
  <span class="code-attr">transform</span>: <span class="code-str">scale(1.05)</span>;
}</div>
          </div>
          <div class="lesson-section">
            <h3>Keyframe Animations</h3>
            <div class="code-example" data-lang="css"><span class="code-kw">.glow-button</span> {
  <span class="code-attr">animation</span>: <span class="code-str">glowing 2s ease infinite</span>;
}

<span class="code-kw">@keyframes</span> glowing {
  <span class="code-kw">0%</span>   { <span class="code-attr">box-shadow</span>: <span class="code-str">0 0 5px purple</span>; }
  <span class="code-kw">50%</span>  { <span class="code-attr">box-shadow</span>: <span class="code-str">0 0 30px purple</span>; }
  <span class="code-kw">100%</span> { <span class="code-attr">box-shadow</span>: <span class="code-str">0 0 5px purple</span>; }
}</div>
          </div>
          ${quiz(10, "Which CSS property smoothly animates a change on hover?", ["animation", "transform", "transition", "effect"], 2, "Correct! transition makes property changes animate smoothly over time. animation is for keyframe animations.")}
        `
      }
    ]
  },
  {
    module: "JavaScript",
    badge: "Module 3",
    lessons: [
      {
        id: 11, title: "Variables & Data Types", diamonds: 15, xp: 30,
        breadcrumb: "JavaScript → Variables & Data Types",
        content: `
          <div class="lesson-title-main">Variables & Data Types</div>
          <div class="lesson-subtitle">How JavaScript stores and remembers information.</div>
          <div class="lesson-section">
            <h3>Declaring Variables</h3>
            <div class="code-example" data-lang="js"><span class="code-kw">let</span> name = <span class="code-str">"Grode"</span>;      <span class="code-comment">// can change</span>
<span class="code-kw">const</span> age = <span class="code-num">18</span>;         <span class="code-comment">// cannot change</span>
<span class="code-kw">var</span> old = <span class="code-str">"avoid this"</span>; <span class="code-comment">// old way, avoid</span></div>
          </div>
          <div class="lesson-section">
            <h3>Data Types</h3>
            <div class="code-example" data-lang="js"><span class="code-kw">let</span> text = <span class="code-str">"Hello"</span>;        <span class="code-comment">// String</span>
<span class="code-kw">let</span> number = <span class="code-num">42</span>;           <span class="code-comment">// Number</span>
<span class="code-kw">let</span> bool = <span class="code-kw">true</span>;           <span class="code-comment">// Boolean</span>
<span class="code-kw">let</span> nothing = <span class="code-kw">null</span>;        <span class="code-comment">// Null</span>
<span class="code-kw">let</span> arr = [<span class="code-num">1</span>, <span class="code-num">2</span>, <span class="code-num">3</span>];       <span class="code-comment">// Array</span>
<span class="code-kw">let</span> obj = { <span class="code-attr">name</span>: <span class="code-str">"Grode"</span> };  <span class="code-comment">// Object</span></div>
          </div>
          ${quiz(11, "Which keyword creates a variable that CANNOT be changed?", ["let", "var", "const", "fixed"], 2, "Correct! const means constant — the value is set once and cannot be reassigned. Use it by default, only use let when you need to change the value.")}
        `
      },
      {
        id: 12, title: "Functions", diamonds: 15, xp: 30,
        breadcrumb: "JavaScript → Functions",
        content: `
          <div class="lesson-title-main">Functions</div>
          <div class="lesson-subtitle">Reusable blocks of code. Write once, run anywhere.</div>
          <div class="lesson-section">
            <h3>Declaring Functions</h3>
            <div class="code-example" data-lang="js"><span class="code-comment">// Traditional function</span>
<span class="code-kw">function</span> <span class="code-fn">greet</span>(name) {
  <span class="code-kw">return</span> <span class="code-str">"Hello, "</span> + name + <span class="code-str">"!"</span>;
}

<span class="code-comment">// Arrow function (modern, cleaner)</span>
<span class="code-kw">const</span> <span class="code-fn">greet</span> = (name) => {
  <span class="code-kw">return</span> <span class="code-str">\`Hello, \${name}!\`</span>;
};

<span class="code-comment">// Calling a function</span>
<span class="code-fn">greet</span>(<span class="code-str">"Grode"</span>); <span class="code-comment">// → "Hello, Grode!"</span></div>
          </div>
          <div class="lesson-section">
            <h3>Calculator Function</h3>
            <div class="code-example" data-lang="js"><span class="code-kw">function</span> <span class="code-fn">calculate</span>() {
  <span class="code-kw">const</span> result = <span class="code-fn">eval</span>(display.value);
  display.value = result;
}

<span class="code-comment">// Call it when = button is clicked</span>
document.<span class="code-fn">querySelector</span>(<span class="code-str">'#equals'</span>)
  .<span class="code-fn">addEventListener</span>(<span class="code-str">'click'</span>, calculate);</div>
          </div>
          ${quiz(12, "What does the return keyword do inside a function?", ["Stops the function only", "Sends a value back to where the function was called", "Creates a new variable", "Loops through code"], 1, "Exactly! return sends a value back out of the function. Without return, a function does work but gives nothing back.")}
        `
      },
      {
        id: 13, title: "DOM Manipulation", diamonds: 20, xp: 40,
        breadcrumb: "JavaScript → DOM Manipulation",
        content: `
          <div class="lesson-title-main">DOM Manipulation</div>
          <div class="lesson-subtitle">Use JavaScript to change HTML and CSS in real time.</div>
          <div class="lesson-section">
            <h3>Selecting Elements</h3>
            <div class="code-example" data-lang="js"><span class="code-comment">// Select by ID</span>
<span class="code-kw">const</span> btn = document.<span class="code-fn">getElementById</span>(<span class="code-str">'myBtn'</span>);

<span class="code-comment">// Select by class or tag</span>
<span class="code-kw">const</span> items = document.<span class="code-fn">querySelectorAll</span>(<span class="code-str">'.item'</span>);
<span class="code-kw">const</span> first = document.<span class="code-fn">querySelector</span>(<span class="code-str">'h1'</span>);</div>
          </div>
          <div class="lesson-section">
            <h3>Changing Content & Style</h3>
            <div class="code-example" data-lang="js"><span class="code-comment">// Change text</span>
btn.textContent = <span class="code-str">"Clicked!"</span>;

<span class="code-comment">// Change HTML inside an element</span>
btn.innerHTML = <span class="code-str">"&lt;strong&gt;Bold!&lt;/strong&gt;"</span>;

<span class="code-comment">// Change CSS</span>
btn.style.background = <span class="code-str">"purple"</span>;
btn.style.color = <span class="code-str">"white"</span>;

<span class="code-comment">// Add/remove CSS classes</span>
btn.<span class="code-fn">classList.add</span>(<span class="code-str">"active"</span>);
btn.<span class="code-fn">classList.remove</span>(<span class="code-str">"hidden"</span>);</div>
          </div>
          <div class="lesson-section">
            <h3>Event Listeners</h3>
            <div class="code-example" data-lang="js">btn.<span class="code-fn">addEventListener</span>(<span class="code-str">'click'</span>, () => {
  btn.textContent = <span class="code-str">"You clicked me!"</span>;
  btn.style.background = <span class="code-str">"#9933cc"</span>;
});</div>
          </div>
          ${quiz(13, "Which method selects ONE element by its CSS selector?", ["getElementById", "querySelectorAll", "querySelector", "getElement"], 2, "Correct! querySelector returns the FIRST element matching the selector. querySelectorAll returns ALL matches as a list.")}
        `
      }
    ]
  },
  {
    module: "Projects",
    badge: "Build",
    lessons: [
      {
        id: 14, title: "Personal Website", diamonds: 50, xp: 100,
        breadcrumb: "Projects → Personal Website",
        content: `
          <div class="lesson-title-main">Project: Personal Website</div>
          <div class="lesson-subtitle">Apply everything from HTML & CSS modules. Build your real personal site.</div>
          <div class="lesson-section">
            <h3>Requirements</h3>
            <p>Your personal website must include:</p>
            <div class="code-example" data-lang="html"><span class="code-comment">&lt;!-- Required sections --&gt;</span>
1. A navigation bar with links
2. A hero section with your name &amp; tagline
3. An about section with a profile image
4. A skills section (use a list or grid)
5. A contact section with a form
6. Responsive design (works on mobile)
7. At least 3 CSS animations/effects
8. Linked to a separate CSS file</div>
          </div>
          <div class="callout">This is a mandatory project. You must submit before moving to JavaScript. Take your time — this goes on your portfolio.</div>
          <div class="lesson-section">
            <h3>Submit Your Project</h3>
            <p>When done, go to the <strong>Projects</strong> tab and click Submit on the Personal Website card.</p>
          </div>
        `
      }
    ]
  }
];

// ── FLAT LESSONS LIST ──
const allLessons = curriculum.flatMap(m => m.lessons);
const totalLessons = allLessons.length;

// ── QUIZ BUILDER ──
function quiz(id, question, options, correct, explanation) {
  const opts = options.map((o, i) =>
    `<button class="quiz-option" onclick="answerQuiz(${id},${i},${correct},this,'${explanation.replace(/'/g,"\\'")}')">
      <span>${String.fromCharCode(65+i)}.</span> ${o}
    </button>`
  ).join('');
  return `
    <div class="quiz-block" id="quiz-${id}">
      <span class="quiz-label-tag">Quick Quiz</span>
      <div class="quiz-question">${question}</div>
      <div class="quiz-options">${opts}</div>
      <div class="quiz-feedback" id="qf-${id}"></div>
      <div class="quiz-diamonds-reward" id="qdr-${id}" style="display:none">+5 💎 earned!</div>
    </div>`;
}

// ── BUILD CURRICULUM SIDEBAR ──
function buildCurriculumSidebar() {
  const list = document.getElementById('curriculum-list');
  list.innerHTML = '';
  curriculum.forEach((mod, mi) => {
    const group = document.createElement('div');
    group.className = 'module-group';
    let lessonHTML = '';
    mod.lessons.forEach((lesson, li) => {
      const isActive = lesson.id === state.lessonIndex;
      const isDone = state.completedLessons.has(lesson.id);
      const isLocked = !isDone && lesson.id !== state.lessonIndex && lesson.id > state.lessonIndex;
      lessonHTML += `
        <div class="lesson-item ${isActive?'active':''} ${isDone?'done':''} ${isLocked?'locked':''}"
          onclick="${isLocked?'':` loadLesson(${lesson.id})`}">
          <div class="li-dot"></div>
          <div class="li-label">${lesson.title}</div>
          <div class="li-diamonds">${isDone?'✓':lesson.diamonds+'💎'}</div>
        </div>`;
    });
    group.innerHTML = `
      <div class="module-header">
        <span>${mod.module}</span>
        <span class="module-badge">${mod.badge}</span>
      </div>
      ${lessonHTML}`;
    list.appendChild(group);
  });
}

// ── LOAD LESSON ──
function loadLesson(id) {
  const lesson = allLessons.find(l => l.id === id);
  if (!lesson) return;
  state.lessonIndex = id;
  document.getElementById('lesson-content').innerHTML = lesson.content;
  document.getElementById('lesson-breadcrumb').textContent = lesson.breadcrumb;
  document.getElementById('lesson-counter').textContent = `${allLessons.findIndex(l=>l.id===id)+1} / ${totalLessons}`;
  buildCurriculumSidebar();
  updateTutor(lesson);
  document.getElementById('lesson-area').scrollTop = 0;
  // Animate sections
  document.querySelectorAll('.lesson-section').forEach((s,i) => {
    s.style.animationDelay = `${i*0.08}s`;
  });
}

// ── NAVIGATE ──
function nextLesson() {
  const currentIdx = allLessons.findIndex(l => l.id === state.lessonIndex);
  if (currentIdx < allLessons.length - 1) {
    completeLesson(state.lessonIndex);
    loadLesson(allLessons[currentIdx + 1].id);
  }
}

function prevLesson() {
  const currentIdx = allLessons.findIndex(l => l.id === state.lessonIndex);
  if (currentIdx > 0) loadLesson(allLessons[currentIdx - 1].id);
}

// ── COMPLETE LESSON ──
function completeLesson(id) {
  if (state.completedLessons.has(id)) return;
  const lesson = allLessons.find(l => l.id === id);
  state.completedLessons.add(id);
  addDiamonds(lesson.diamonds);
  addXP(lesson.xp);
  showReward(`+${lesson.diamonds} Diamonds!`, lesson.title + ' Complete!');
  updateStats();
  updateProgressRing();
  saveState();
}

// ── QUIZ ANSWER ──
function answerQuiz(id, chosen, correct, btn, explanation) {
  const container = document.getElementById(`quiz-${id}`);
  if (container.dataset.answered) return;
  container.dataset.answered = '1';
  const opts = container.querySelectorAll('.quiz-option');
  opts.forEach(o => o.disabled = true);
  btn.classList.add(chosen === correct ? 'correct' : 'wrong');
  opts[correct].classList.add('correct');
  const fb = document.getElementById(`qf-${id}`);
  fb.textContent = explanation;
  fb.className = `quiz-feedback show ${chosen === correct ? 'correct' : 'wrong'}`;
  if (chosen === correct) {
    document.getElementById(`qdr-${id}`).style.display = 'block';
    addDiamonds(5);
    setBotMood('happy');
    setCompanionBubble("Correct! " + explanation);
  } else {
    setBotMood('sad');
    setCompanionBubble("Not quite — the correct answer is highlighted. Read it again and it will stick!");
  }
  updateStats();
  saveState();
}

// ── DIAMONDS & XP ──
function addDiamonds(n) {
  state.diamonds += n;
  document.getElementById('diamond-display').textContent = state.diamonds;
  document.getElementById('stat-diamonds-total').textContent = state.diamonds;
  saveState();
}

function addXP(n) {
  state.xp += n;
  document.getElementById('xp-display').textContent = state.xp;
  saveState();
}

// ── REWARD POPUP ──
function showReward(title, sub) {
  const pop = document.getElementById('reward-popup');
  document.getElementById('reward-title').textContent = title;
  document.getElementById('reward-sub').textContent = sub;
  pop.classList.remove('hidden');
  setTimeout(() => pop.classList.add('hidden'), 3000);
}

// ── BOT MOOD ──
function setBotMood(mood) {
  const mouth = document.getElementById('bot-mouth');
  if (!mouth) return;
  if (mood === 'happy') { mouth.style.borderRadius = '0 0 10px 10px'; mouth.style.height = '8px'; }
  else if (mood === 'sad') { mouth.style.borderRadius = '10px 10px 0 0'; mouth.style.height = '6px'; }
  else { mouth.style.borderRadius = '3px'; mouth.style.height = '5px'; }
}

function setCompanionBubble(msg) {
  const el = document.getElementById('companion-bubble');
  if (el) el.textContent = msg;
}

function updateTutor(lesson) {
  const messages = [
    `Starting "${lesson.title}" — pay close attention to the code examples, then hit that quiz!`,
    `"${lesson.title}" is a core concept. Understand this one deeply.`,
    `This is "${lesson.title}". Every professional developer uses this daily.`,
    `Let's do "${lesson.title}". Type the examples in the CCV panel to really feel it!`,
  ];
  setCompanionBubble(messages[lesson.id % messages.length]);
}

// ── PROGRESS RING ──
function updateProgressRing() {
  const pct = Math.round((state.completedLessons.size / totalLessons) * 100);
  const ring = document.getElementById('progress-ring');
  const pctEl = document.getElementById('progress-pct-ring');
  if (ring) {
    ring.setAttribute('stroke-dasharray', `${pct} ${100-pct}`);
  }
  if (pctEl) pctEl.textContent = pct + '%';
}

// ── STATS ──
function updateStats() {
  document.getElementById('stat-lessons').textContent = state.completedLessons.size;
  document.getElementById('stat-streak').textContent = state.streak.filter(Boolean).length + '🔥';
  document.getElementById('stat-diamonds-total').textContent = state.diamonds;
  document.getElementById('stat-projects').textContent = state.completedProjects.size;
  buildStreakBars();
  buildModuleProgressBars();
}

function buildStreakBars() {
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const container = document.getElementById('streak-bars');
  if (!container) return;
  container.innerHTML = state.streak.map((active, i) => `
    <div class="streak-bar-wrap">
      <div class="streak-bar ${active?'active':''}" style="height:${active?Math.random()*60+20:8}px"></div>
      <span class="streak-day">${days[i]}</span>
    </div>`).join('');
}

function buildModuleProgressBars() {
  const container = document.getElementById('module-progress-bars');
  if (!container) return;
  container.innerHTML = curriculum.map(mod => {
    const done = mod.lessons.filter(l => state.completedLessons.has(l.id)).length;
    const pct = Math.round((done / mod.lessons.length) * 100);
    return `<div class="module-prog-item">
      <div class="module-prog-label"><span>${mod.module}</span><span>${pct}%</span></div>
      <div class="module-prog-bar"><div class="module-prog-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');
}

// ── PROJECTS ──
const projects = [
  { id: 0, title: "Personal Website", module: "HTML & CSS", desc: "Build a complete personal site with nav, hero, about, skills, and contact sections.", diamonds: 100, xp: 200, unlockAfter: 4 },
  { id: 1, title: "Calculator App", module: "JavaScript", desc: "Build a fully working calculator with all operations, keyboard support, and glow effects.", diamonds: 100, xp: 200, unlockAfter: 13 },
  { id: 2, title: "Weather App", module: "APIs", desc: "Fetch real weather data from an API and display it with animations.", diamonds: 150, xp: 300, unlockAfter: 13 },
];

function buildProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.map(p => {
    const unlocked = state.completedLessons.size >= p.unlockAfter;
    const done = state.completedProjects.has(p.id);
    const badgeClass = done ? 'done' : unlocked ? 'pending' : 'locked';
    const badgeText = done ? '✓ Completed' : unlocked ? 'Ready to submit' : '🔒 Locked';
    return `<div class="project-card ${unlocked?'':'locked'} ${done?'completed':''}">
      <span class="project-badge ${badgeClass}">${badgeText}</span>
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-rewards">
        <span class="proj-reward d">💎 ${p.diamonds}</span>
        <span class="proj-reward x">⚡ ${p.xp} XP</span>
      </div>
      ${unlocked && !done ? `<button class="project-submit-btn" onclick="submitProject(${p.id})">Submit Project</button>` : ''}
    </div>`;
  }).join('');
}

function submitProject(id) {
  const project = projects.find(p => p.id === id);
  state.completedProjects.add(id);
  addDiamonds(project.diamonds);
  addXP(project.xp);
  showReward(`+${project.diamonds} Diamonds!`, project.title + ' Submitted!');
  setCompanionBubble(`Amazing work on "${project.title}"! You just levelled up. Keep building! 🔥`);
  buildProjects();
  updateStats();
  saveState();
}

// ── NOTES ──
function buildNotesList() {
  const list = document.getElementById('notes-list');
  if (!list) return;
  list.innerHTML = state.notes.map((n, i) => `
    <div class="note-list-item ${state.activeNote===i?'active':''}" onclick="openNote(${i})">
      <div class="note-item-title">${n.title || 'Untitled'}</div>
      <div class="note-item-preview">${(n.body||'').substring(0,40)}...</div>
    </div>`).join('') || '<div style="padding:16px;font-size:12px;color:var(--text3)">No notes yet. Click + New to start.</div>';
}

function newNote() {
  state.notes.unshift({ title: 'New Note', body: '', date: new Date().toISOString() });
  state.activeNote = 0;
  buildNotesList();
  openNote(0);
}

function openNote(i) {
  state.activeNote = i;
  const n = state.notes[i];
  document.getElementById('note-title').value = n.title;
  document.getElementById('note-body').value = n.body;
  buildNotesList();
}

function saveNote() {
  if (state.activeNote === null) return;
  state.notes[state.activeNote].title = document.getElementById('note-title').value || 'Untitled';
  state.notes[state.activeNote].body = document.getElementById('note-body').value;
  buildNotesList();
  saveState();
  showReward('Note Saved!', '');
}

async function summarizeNote() {
  const body = document.getElementById('note-body').value;
  if (!body.trim()) return;
  await sendToAI(`Summarize these coding notes in 3 bullet points:\n\n${body}`);
  openAI();
}

// ── CCV ──
function toggleCCV() {
  const panel = document.getElementById('ccv-panel');
  panel.classList.toggle('hidden');
}

function setCCVLang(lang, btn) {
  state.ccvLang = lang;
  document.querySelectorAll('.ccv-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const editor = document.getElementById('ccv-editor');
  editor.value = '';
  updatePreview();
}

function updatePreview() {
  const editor = document.getElementById('ccv-editor');
  const preview = document.getElementById('ccv-preview');
  if (!preview || !editor) return;
  const code = editor.value;
  let html = '';
  if (state.ccvLang === 'html') html = code;
  else if (state.ccvLang === 'css') html = `<style>${code}</style><div style="padding:10px;font-family:sans-serif">Preview: style a &lt;p&gt; tag</div><p class="test">Sample paragraph text</p>`;
  else if (state.ccvLang === 'js') html = `<script>try{${code}}catch(e){document.body.innerHTML='<p style="color:red;font-family:monospace;padding:10px">'+e.message+'</p>'}<\/script>`;
  try {
    const doc = preview.contentDocument || preview.contentWindow.document;
    doc.open(); doc.write(html); doc.close();
  } catch(e) {}
}

// ── AI MODAL ──
function openAI() { document.getElementById('ai-modal').classList.remove('hidden'); }
function closeAI() { document.getElementById('ai-modal').classList.add('hidden'); }

async function sendAI() {
  const input = document.getElementById('ai-input');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';
  addChatMessage('user', msg);
  const typingEl = addTypingIndicator();
  const context = `You are Grode AI, an expert coding tutor inside the GRODE learning platform. The student is currently on lesson: "${allLessons.find(l=>l.id===state.lessonIndex)?.title}". Be encouraging, precise, and explain like you are teaching someone who is 18 and brand new to coding. Keep responses concise and clear.`;
  await sendToAI(msg, context, typingEl);
}

async function sendToAI(msg, systemContext, typingEl) {
  const systemMsg = systemContext || `You are Grode AI, an expert coding tutor. Be encouraging, concise, and clear.`;
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: systemMsg,
        messages: [
          ...state.chatHistory.slice(-6),
          { role: "user", content: msg }
        ]
      })
    });
    const data = await response.json();
    const reply = data.content?.[0]?.text || "I'm here! Ask me anything about coding.";
    if (typingEl) typingEl.remove();
    addChatMessage('grode', reply);
    state.chatHistory.push({ role: "user", content: msg });
    state.chatHistory.push({ role: "assistant", content: reply });
    setCompanionBubble(reply.substring(0, 100) + (reply.length > 100 ? '...' : ''));
  } catch (e) {
    if (typingEl) typingEl.remove();
    addChatMessage('grode', "I'm Grode AI — powered by Claude. Ask me anything about HTML, CSS, JavaScript, or your projects!");
  }
}

function addChatMessage(role, text) {
  const history = document.getElementById('ai-chat-history');
  const div = document.createElement('div');
  div.className = `chat-msg ${role}`;
  div.innerHTML = `
    <div class="chat-avatar ${role}">${role==='grode'?'G':'U'}</div>
    <div class="chat-bubble">${text.replace(/\n/g,'<br>').replace(/`([^`]+)`/g,'<code style="background:rgba(192,132,252,0.1);padding:1px 5px;border-radius:3px;font-family:monospace;font-size:12px">$1</code>')}</div>`;
  history.appendChild(div);
  history.scrollTop = history.scrollHeight;
  return div;
}

function addTypingIndicator() {
  const history = document.getElementById('ai-chat-history');
  const div = document.createElement('div');
  div.className = 'chat-msg grode';
  div.innerHTML = `<div class="chat-avatar grode">G</div><div class="chat-typing"><div class="chat-dot"></div><div class="chat-dot"></div><div class="chat-dot"></div></div>`;
  history.appendChild(div);
  history.scrollTop = history.scrollHeight;
  return div;
}

// ── TABS ──
function switchTab(tab, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`tab-${tab}`).classList.remove('hidden');
  if (btn) btn.classList.add('active');
  if (tab === 'projects') buildProjects();
  if (tab === 'notes') buildNotesList();
  if (tab === 'analytics') updateStats();
}

// ── CONTROL PANEL ──
function applyControl() {
  const console_el = document.getElementById('control-console');
  const output = document.getElementById('control-output');
  const lines = console_el.value.split('\n');
  let results = [];
  lines.forEach(line => {
    line = line.trim();
    if (line.startsWith('#change ')) {
      const parts = line.replace('#change ', '').split(' ');
      const prop = parts[0]; const val = parts.slice(1).join(' ');
      const map = { background: '--bg', accent: '--accent', gold: '--gold', text: '--text' };
      if (map[prop]) {
        document.documentElement.style.setProperty(map[prop], val);
        results.push(`✓ Changed ${prop} to ${val}`);
      } else { results.push(`? Unknown property: ${prop}`); }
    } else if (line.startsWith('#remove ')) {
      const what = line.replace('#remove ', '').trim();
      if (what === 'ccv') { document.getElementById('ccv-panel').classList.add('hidden'); results.push('✓ CCV removed'); }
      else if (what === 'bot') { document.getElementById('companion-card').classList.add('hidden'); results.push('✓ Bot hidden'); }
      else { results.push(`? Cannot remove: ${what}`); }
    } else if (line) { results.push(`? Unknown command: ${line}`); }
  });
  output.innerHTML = results.join('<br>');
}

function applyTheme() {
  document.documentElement.style.setProperty('--bg', document.getElementById('tw-bg').value);
  document.documentElement.style.setProperty('--accent', document.getElementById('tw-accent').value);
  document.documentElement.style.setProperty('--gold', document.getElementById('tw-gold').value);
  document.documentElement.style.setProperty('--text', document.getElementById('tw-text').value);
}

function toggleFeature(feature, checkbox) {
  state.featureToggles[feature] = checkbox.checked;
  if (feature === 'ccv') {
    const btn = document.querySelector('[onclick="toggleCCV()"]');
    if (btn) btn.style.display = checkbox.checked ? '' : 'none';
  }
  if (feature === 'bot') {
    const card = document.getElementById('companion-card');
    if (card) card.style.display = checkbox.checked ? '' : 'none';
  }
  if (feature === 'anim') {
    document.body.style.setProperty('--transition', checkbox.checked ? 'all 0.3s ease' : 'none');
  }
}

// ── SIGN IN ──
function signIn() {
  const name = prompt("Enter your name to get started:") || "Coder";
  state.userName = name.charAt(0).toUpperCase();
  document.getElementById('user-avatar').textContent = state.userName;
  launchApp();
}

function enterAsGuest() { launchApp(); }

function launchApp() {
  const splash = document.getElementById('splash-screen');
  splash.classList.add('splash-exit');
  setTimeout(() => {
    splash.classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    initApp();
  }, 500);
}

// ── SAVE / LOAD ──
function saveState() {
  try {
    const save = {
      diamonds: state.diamonds, xp: state.xp,
      lessonIndex: state.lessonIndex,
      completedLessons: [...state.completedLessons],
      completedProjects: [...state.completedProjects],
      notes: state.notes, userName: state.userName
    };
    localStorage.setItem('grode_state', JSON.stringify(save));
  } catch(e) {}
}

function loadState() {
  try {
    const save = JSON.parse(localStorage.getItem('grode_state'));
    if (!save) return;
    state.diamonds = save.diamonds || 0;
    state.xp = save.xp || 0;
    state.lessonIndex = save.lessonIndex || 0;
    state.completedLessons = new Set(save.completedLessons || []);
    state.completedProjects = new Set(save.completedProjects || []);
    state.notes = save.notes || [];
    state.userName = save.userName || 'G';
  } catch(e) {}
}

// ── PARTICLES ──
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;animation-duration:${Math.random()*8+6}s;animation-delay:${Math.random()*6}s;`;
    container.appendChild(p);
  }
}

// ── INIT ──
function initApp() {
  loadState();
  buildCurriculumSidebar();
  loadLesson(state.lessonIndex);
  document.getElementById('diamond-display').textContent = state.diamonds;
  document.getElementById('xp-display').textContent = state.xp;
  document.getElementById('user-avatar').textContent = state.userName;
  updateProgressRing();
  updateStats();
  // Initial AI greeting
  addChatMessage('grode', `Welcome to GRODE! I'm Grode AI — powered by Claude. I know everything about HTML, CSS, JavaScript, and more. Ask me anything! 🔥`);
}

createParticles();
