// Initialization for Animate On Scroll (AOS)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
    });

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize Theme Toggle
    initializeThemeToggle();

    // Initialize Modal Functionality for Projects AND Articles (Combined)
    initializeContentModal(); 

    // Initialize Contact Form
    initializeContactForm();

    // Initialize Chatbot Widget
    initializeChatbot();
});

// --- Theme Toggle Functionality ---
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'dark') {
        body.classList.add('dark');
        setThemeIcon('sun');
    } else {
        setThemeIcon('moon');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        let newTheme = 'light';
        if (body.classList.contains('dark')) {
            newTheme = 'dark';
            setThemeIcon('sun');
        } else {
            setThemeIcon('moon');
        }
        localStorage.setItem('theme', newTheme);
    });
}

function setThemeIcon(iconType) {
    const themeIcon = document.getElementById('theme-icon');
    if (iconType === 'sun') {
        // SVG for Sun (Light Mode)
        themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>`;
    } else {
        // SVG for Moon (Dark Mode)
        themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 10.043 10.043 0 0012 21a9.998 9.998 0 008.354-5.646z"></path>`;
    }
}

// --- Project Modal Data (From Resume) ---
const projectData = {
    readflow: {
        title: "ReadFlow - University Library Management System",
        content: `
            <p class="text-gray-300 mb-4">A complete full-stack library system for university management, focusing on security and data integrity.</p>
            <h5 class="text-xl font-semibold text-accent-purple mb-2">Key Features:</h5>
            <ul class="list-disc ml-5 text-gray-300 space-y-1">
                <li>Built full-stack system with **Auth.js** for authentication.</li>
                <li>Admin dashboard for **CRUD** operations (Books, Users).</li>
                <li>Created **PostgreSQL** schemas with **Drizzle ORM** and implemented migrations.</li>
                <li>Integrated **ImageKit** for optimized media management.</li>
            </ul>
        `,
        link: "https://github.com/shraddha524/ReadFlow"
    },
    voxinterview: {
        title: "VoxInterview AI - AI Voice Interviewer",
        content: `
            <p class="text-gray-300 mb-4">An advanced AI tool that simulates job interviews with real-time voice conversation and feedback using Google Gemini AI.</p>
            <h5 class="text-xl font-semibold text-accent-purple mb-2">Key Features:</h5>
            <ul class="list-disc ml-5 text-gray-300 space-y-1">
                <li>Developed real-time AI interviewer with **Gemini AI** and **VY Voice SDK**.</li>
                <li>Features voice conversation, transcript analysis, and instant feedback.</li>
                <li>Built dashboards, interview history, and **Firebase Authentication**.</li>
            </ul>
        `,
        link: "https://github.com/shraddha524/VoxInterview-AI"
    },
    shopsphere: {
        title: "ShopSphere - Multi-Vendor E-Commerce SaaS",
        content: `
            <p class="text-gray-300 mb-4">A scalable multi-vendor e-commerce platform built on a microservices architecture.</p>
            <h5 class="text-xl font-semibold text-accent-purple mb-2">Key Features:</h5>
            <ul class="list-disc ml-5 text-gray-300 space-y-1">
                <li>Developed vendor and product **microservices** using **Node.js/Express.js**.</li>
                <li>Used **MongoDB** for flexible product catalog storage.</li>
                <li>Integrated **ImageKit CDN** for faster media delivery.</li>
            </ul>
        `,
        link: "https://github.com/shraddha524/eshop"
    },
    iamsafe: {
        title: "I Am Safe - Women's Safety Android App",
        content: `
            <p class="text-gray-300 mb-4">An Android mobile application focused on personal safety, providing immediate help alerts.</p>
            <h5 class="text-xl font-semibold text-accent-purple mb-2">Key Features:</h5>
            <ul class="list-disc ml-5 text-gray-300 space-y-1">
                <li>Built using **Android Studio** and **Java**.</li>
                <li>SOS alerts with live location sharing and guardian notifications.</li>
                <li>Integrated **Google Maps API** for tracking, nearby hospitals, and speed detection.</li>
                <li>Used **SQLite** for local data persistence.</li>
            </ul>
        `,
        link: "https://github.com/shraddha524/womensafe"
    },
    finsight: {
        title: "FinSight AI - Live Stock Dashboard",
        content: `
            <p class="text-gray-300 mb-4">A financial data visualization dashboard for tracking real-time stock information and market fundamentals.</p>
            <h5 class="text-xl font-semibold text-accent-purple mb-2">Key Features:</h5>
            <ul class="list-disc ml-5 text-gray-300 space-y-1">
                <li>Real-time stock charts, fundamentals, insights and watchlist built with **Next.js**.</li>
                <li>Used **Alpha Vantage API** for live data.</li>
                <li>Implemented API caching for responsive UI.</li>
                
            </ul>
        `,
        link: "https://github.com/shraddha524/FinSight-AI-"
    },
    medilink: {
        title: "MediLink - Patient Management System",
        content: `
            <p class="text-gray-300 mb-4">A web application designed to streamline appointment booking and patient record management for clinics.</p>
            <h5 class="text-xl font-semibold text-accent-purple mb-2">Key Features:</h5>
            <ul class="list-disc ml-5 text-gray-300 space-y-1">
                <li>Appointment booking, patient record management, and role-based authentication.</li>
                <li>Implemented automated SMS reminders for appointments using the **Twilio API**.</li>
                <li>Used **Django REST Framework** for the backend API.</li>
            </ul>
        `,
        link: "https://github.com/shraddha524/medilink"
    }
};

// --- Blog/Article Data (NEW CONTENT) ---
const articleData = {
    blog1: {
        title: "My Full-Stack Developer Roadmap for 2025",
        content: `
            <p class="text-gray-300 mb-4">Becoming a full-stack developer means balancing frontend, backend, databases, deployment, and soft skills. My roadmap for 2025 helped me become more efficient and industry-ready.</p>
            <h5 class="text-xl font-semibold text-accent-purple mb-2">Roadmap Highlights:</h5>
            <ul class="list-disc ml-5 text-gray-300 space-y-1">
                <li>**Frontend:** Next.js (App Router), React (Hooks, Context, State), TailwindCSS.</li>
                <li>**Backend:** Node.js + Express, Django REST API, Advanced Authentication.</li>
                <li>**Databases:** PostgreSQL, MongoDB, Prisma ORM.</li>
                <li>**DevOps:** Git/GitHub, CI/CD, Docker (beginner), Deployment (Vercel, Render).</li>
            </ul>
            <p class="text-md text-gray-400 mt-4 italic">📌 Key Lesson: “Don’t try to learn everything. Learn what helps you build real apps.”</p>
        `,
        link: "#" 
    },
    blog2: {
        title: "REST API vs GraphQL: Simple Explanation for Beginners",
        content: `
            <p class="text-gray-300 mb-4">Developers often get confused between REST and GraphQL. Here’s a clear comparison:</p>
            <h5 class="text-xl font-semibold text-accent-purple mb-2">Comparison Points:</h5>
            <ul class="list-disc ml-5 text-gray-300 space-y-1">
                <li>**REST:** Multiple endpoints, returns fixed data, can over-fetch, simple & widely used.</li>
                <li>**GraphQL:** One endpoint, client chooses fields, no under/over fetching, faster for dashboards.</li>
            </ul>
            <p class="text-md text-gray-400 mt-4 italic">📌 When to Use What: **REST** → Blogs, CRUD apps, small/medium apps. **GraphQL** → Dashboards, analytics apps, complex UIs.</p>
        `,
        link: "#" 
    },
    blog3: {
        title: "Understanding Web Authentication (JWT vs OAuth vs Session Auth)",
        content: `
            <p class="text-gray-300 mb-4">Security is a core skill for full-stack developers. This is how I understand the three main auth systems:</p>
            <h5 class="text-xl font-semibold text-accent-purple mb-2">Auth Systems:</h5>
            <ul class="list-disc ml-5 text-gray-300 space-y-1">
                <li>**JWT (Token Auth):** No server session, fast, used in SPAs + mobile apps.</li>
                <li>**Session Auth:** Server stores session, cookie-based, great for admin dashboards.</li>
                <li>**OAuth (Google, GitHub Login):** No password needed, secure, uses external identity providers.</li>
            </ul>
            <p class="text-md text-gray-400 mt-4 italic">📌 Real-world Uses: **JWT** → Public web apps. **Sessions** → Admin dashboards. **OAuth** → Consumer apps.</p>
        `,
        link: "#" 
    },
    blog4: {
        title: "Why I Prefer Next.js Over React for Production Apps",
        content: `
            <p class="text-gray-300 mb-4">React is amazing — but Next.js is the better production framework. It provides a comprehensive full-stack toolkit right out of the box.</p>
            <h5 class="text-xl font-semibold text-accent-purple mb-2">Next.js Advantages:</h5>
            <ul class="list-disc ml-5 text-gray-300 space-y-1">
                <li>**Built-in Routing:** No need for \`react-router\`.</li>
                <li>**Server Components:** Better performance, less JavaScript bundle size.</li>
                <li>**In-built API Routes:** Frontend + Backend in one codebase.</li>
                <li>**SEO-Friendly:** Perfect for portfolios, blogs, and e-commerce.</li>
                <li>**Lightning-fast Deployment:** Seamless integration with Vercel.</li>
            </ul>
            <p class="text-md text-gray-400 mt-4 italic">📌 Final Thought: Next.js is React + backend + deployment = a full-stack toolkit.</p>
        `,
        link: "#" 
    },
    blog5: {
        title: "System Design Basics for Beginners",
        content: `
            <p class="text-gray-300 mb-4">System Design is essential, even for freshers. This is the beginner version I use for understanding how to build scalable applications.</p>
            <h5 class="text-xl font-semibold text-accent-purple mb-2">Key Components:</h5>
            <ul class="list-disc ml-5 text-gray-300 space-y-1">
                <li>**Database Layer:** SQL (PostgreSQL) or NoSQL (MongoDB).</li>
                <li>**Caching Layer:** Use Redis to speed up database reads.</li>
                <li>**Load Balancer:** Ensures servers don’t get overloaded, distributing traffic.</li>
                <li>**CDN:** Delivers images and static files globally for faster access.</li>
            </ul>
            <p class="text-md text-gray-400 mt-4 italic">📌 Simple Rule: “Start with monolith. Scale with microservices.”</p>
        `,
        link: "#" 
    },
    blog6: {
        title: "My Top 10 Tools as a Full-Stack Developer",
        content: `
            <p class="text-gray-300 mb-4">The right tools make you faster and more efficient. Here are my favorites across different development stages:</p>
            <h5 class="text-xl font-semibold text-accent-purple mb-2">Top Tools:</h5>
            <ul class="list-disc ml-5 text-gray-300 space-y-1">
                <li>**Coding Tools:** VS Code, Prettier, ESLint.</li>
                <li>**API & Testing:** Postman, Thunder Client.</li>
                <li>**UI/UX:** TailwindCSS, ShadCN, Figma.</li>
                <li>**Databases:** Prisma Studio, MongoDB Compass.</li>
                <li>**Deployment:** Vercel, Render, Railway.</li>
            </ul>
        `,
        link: "#" 
    }
};

// --- Consolidated Modal Initialization (For Projects and Articles) ---
function initializeContentModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('project-modal-close');
    const overlay = document.getElementById('project-modal-overlay');
    const titleEl = document.getElementById('modal-project-title');
    const contentEl = document.getElementById('modal-project-content');
    
    // Select all buttons for both projects and articles
    const contentButtons = document.querySelectorAll('.project-details-btn');

    const closeModal = () => {
        modal.classList.add('hidden');
    };
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    const openContentModal = (id, type) => {
        let data = null;
        if (type === 'project') {
            data = projectData[id];
        } else if (type === 'article') {
            data = articleData[id];
        }

        if (data) {
            titleEl.textContent = data.title;
            let linkHtml = '';
            
            if (type === 'project' && data.link) {
                // For projects, display the GitHub link button
                linkHtml = `<p class="mt-6 text-center"><a href="${data.link}" target="_blank" class="inline-block px-4 py-2 bg-accent-purple hover:bg-accent-indigo rounded-lg font-semibold transition">View on GitHub</a></p>`;
            } else if (type === 'article') {
                 // For articles, display a generic close message
                 linkHtml = `<p class="mt-6 text-center"><span class="inline-block px-4 py-2 bg-gray-600 rounded-lg font-semibold text-gray-200">Thanks for reading!</span></p>`;
            }

            contentEl.innerHTML = data.content + linkHtml;
            modal.classList.remove('hidden');
        }
    };

    // Attach click listeners to all project/article buttons
    contentButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project-id');
            const articleId = button.getAttribute('data-article-id');
            
            if (projectId) {
                openContentModal(projectId, 'project');
            } else if (articleId) {
                openContentModal(articleId, 'article');
            }
        });
    });
}


// --- Contact Form Functionality ---
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    const message = document.getElementById('form-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission success
        message.textContent = "Thank you! Your message has been sent successfully. I will get back to you soon.";
        message.className = 'mt-4 text-center text-green-400 font-semibold';
        message.classList.remove('hidden');
        
        form.reset();
        
        setTimeout(() => {
            message.classList.add('hidden');
        }, 5000);
    });
}

// --- Chatbot Widget Functionality (Uses Resume Data) ---
const chatbotKnowledge = {
    // Portfolio Guide Content
    shraddha: "Shraddha is a Full Stack Developer experienced in building production-ready web apps using React, Next.js, Node.js, Express, Django, PostgreSQL, MongoDB, Redis, and cloud tools. She has delivered 6+ real-world projects. **🔥 Next step: Ask me about her 'skills'.**",
    contact: "You can reach Shraddha at **shraddhamoily392@gmail.com** or call **9945185153**. The contact form is at the bottom of the page. **🔥 Next step: Ask me about her 'education'.**",
    education: "Shraddha holds a Bachelor of Computer Applications (BCA) from Alva's College (2020-2023) with a CGPA of 8.05. **🔥 Next step: Ask me about her 'experience'.**",
    experience: "Shraddha completed a Python Programming Intern role at YBI Foundation (Jul 2024), where she built automation scripts and improved modular code performance by 20%. **🔥 Next step: Ask me for her 'best project'.**",
    fallback: "I'm sorry, I don't have information on that topic. Try asking about 'skills', 'projects', or ask for her 'best project' for a guided tour!",
    
    // Guided Portfolio Responses
    combined_intro: "Welcome to the **AI Developer Guide**! I offer a guided tour of Shraddha's portfolio, skills, and projects. You can ask for 'skills', 'best project', or try my **Bug Detector** mode by pasting an error log! *To use the Resume Analyzer, type 'analyze resume'.*",
    skills: "Shraddha's core skills are organized for full-stack excellence: <strong>Frontend:</strong> React.js, Next.js, TailwindCSS. <strong>Backend:</strong> Node.js, Express.js, Django REST Framework, REST APIs. <strong>Databases:</strong> PostgreSQL, MongoDB, Redis. She always prioritizes the right tool for the job. **🔥 Next step: Ask me about her 'best project'.**",
    projects: "Shraddha has delivered 6+ projects. Key projects include **ReadFlow** (Library System - Next.js/PostgreSQL) and **VoxInterview AI** (AI Platform - Gemini AI). I can provide links for any project. **🔥 Next step: Ask me to 'show links' or about 'ReadFlow'.**",
    best_project: "I highly recommend checking out the **ReadFlow - University Library Management System**. It showcases her full-stack capabilities: **Next.js** frontend, **PostgreSQL** database with **Drizzle ORM**, and secure **Auth.js** integration. **🔥 Next step: Ask me to 'show link for ReadFlow'.**",
    resume_analyzer_prompt: "Welcome to the **Resume Analyzer Chatbot**! Please **paste the complete text content of your resume/CV** into the input area below and hit send. I will provide a professional, multi-point analysis on missing skills, ATS readiness, and grammatical suggestions.",

    // Helper functions for links and project details
    show_links: (projectName) => {
        const projectKey = projectName.toLowerCase().replace(/[^a-z0-9]/g, '');
        const data = projectData[projectKey];
        if (data) {
            return `The GitHub link for **${data.title}** is: [View on GitHub](${data.link}). **🔥 Next step: Ask me about another project like 'VoxInterview AI'.**`;
        }
        return "I need a project name to show the link for. Try asking: 'show link for ReadFlow'.";
    },

    project_details: (projectName) => {
        const projectKey = projectName.toLowerCase().replace(/[^a-z0-9]/g, '');
        const data = projectData[projectKey];
        if (data) {
            // Extract features from HTML content for a text response
            const featureMatch = data.content.match(/<ul.*?>(.*?)<\/ul>/s);
            const features = featureMatch ? featureMatch[1].replace(/<\/?li>/g, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').split('•').filter(f => f.trim()).map(f => f.trim()).join('; ') : 'Details available in the Projects section.';
            
            return `**Project: ${data.title}**\n\n**Key Stack:** ${data.title.includes('Library') ? 'Next.js, Auth.js, PostgreSQL/Drizzle' : data.title.includes('AI Voice') ? 'Gemini AI, VY Voice SDK, Firebase' : 'Node.js, MongoDB, Microservices'}\n\n**Key Features:** ${features} **🔥 Next step: Ask me for the 'link for ${data.title.split(' - ')[0]}' or the 'best project'.**`;
        }
        return `I couldn't find details for a project named "${projectName}". Try asking about 'ReadFlow' or 'ShopSphere'.`;
    },

    // --- Resume Analyzer Logic (NEW FEATURE) ---
    analyzeResumeContent: (content) => {
        const wordCount = content.split(/\s+/).length;
        const lineCount = content.split('\n').filter(line => line.trim().length > 0).length;
        const cleanContent = content.toLowerCase();

        let response = "### 📄 Resume Analyzer Report (Simulated)\n\n";
        response += "This report showcases Shraddha's ability to use AI for professional document analysis, a skill valuable in data processing and HR tech.\n\n";

        response += "#### 📊 ATS Readiness Check\n";
        if (wordCount < 100 || wordCount > 800) {
            response += "❌ **Word Count:** Too long or too short. Ideal professional length is 250-500 words. **Suggestion:** Be more concise in descriptions.\n";
        } else {
            response += "✅ **Word Count:** Optimal length detected (approx. **" + wordCount + "** words). This helps with ATS processing.\n";
        }
        if (!cleanContent.includes('react') && !cleanContent.includes('python')) {
            response += "⚠️ **Keyword Density:** Missing high-value keywords like 'React', 'Python', or 'Cloud'. **Suggestion:** Ensure the job description keywords are present.\n";
        } else {
            response += "✅ **Format:** Good use of clear section headers and bullet points (detected **" + lineCount + "** lines). Highly ATS-friendly.\n";
        }

        response += "\n#### 💡 Missing Skills & Suggestions\n";
        if (!cleanContent.includes('docker') || !cleanContent.includes('aws')) {
            response += "1. **DevOps Gap:** Missing depth in **Docker**, **Kubernetes**, or advanced **AWS/Azure/GCP** services. **Suggestion:** Elaborate on deployment experience.\n";
        } else {
            response += "1. **Soft Skills:** Recommend integrating more action-oriented soft skills (e.g., 'Mentored Junior Developers' or 'Improved Team Velocity').\n";
        }
        if (!cleanContent.includes('testing') || !cleanContent.includes('jest') || !cleanContent.includes('unit')) {
             response += "2. **Testing:** Missing specific mention of testing frameworks like **Jest, Mocha, or Cypress**. **Suggestion:** Quantify experience with Unit/Integration testing.\n";
        } else {
             response += "2. **Technical Depth:** Good mention of technical terms. Focus on quantifying results (e.g., 'Reduced latency by 15%').\n";
        }
        

        response += "\n#### 📝 Grammatical & Style Tips\n";
        if (content.match(/responsible for/i)) {
            response += "⚠️ **Passive Voice:** Avoid phrases like 'Responsible for X'. **Suggestion:** Start every bullet point with a strong **Action Verb** (e.g., 'Developed', 'Engineered', 'Optimized').\n";
        } else {
            response += "✅ **Action Verbs:** Strong use of active voice detected, which increases impact.\n";
        }
        response += "2. **Consistency:** Ensure dates and titles are consistently formatted throughout the document.\n";
        
        response += "\n*This detailed analysis demonstrates professional diligence and understanding of recruitment best practices.* **🔥 Next step: Ask me about her 'skills'.**";
        return response;
    },

    // --- Bug Detector Logic (from Step 2) ---
    generateSimulatedCodeReview: (code) => {
        const lines = code.split('\n').filter(line => line.trim().length > 0);
        
        let response = "### 🤖 Code Review Summary\n\n";
        response += "This is a **Code Reviewer Guide** response. It showcases Shraddha's ability to analyze and improve code architecture.\n\n";

        if (lines.length < 5) {
            response += "⚠️ **Submission Too Short:** The submitted code fragment is very short. While the structure looks fine, a more substantial block is needed for deep analysis.\n\n";
        } else {
            response += "✅ **General Impression:** The code is readable and follows basic conventions. However, the AI has identified several areas for potential improvement to enhance performance and maintainability.\n\n";
            
            response += "#### 🚨 Detected Issues (Simulated)\n";
            response += `<pre class="code-block"><code>${code}</code></pre>`;
            response += "1. **Modern JavaScript:** The usage of `var` (if present) should be replaced with `let` or `const` for proper block-scoping and modern JS practices. *This prevents common hoisting bugs.*\n";
            response += "2. **Performance:** If this function runs in a loop, watch for potential **O(N²)** complexity. Shraddha prefers **O(N log N)** or **O(N)** solutions using structures like HashMaps.\n\n";

            response += "#### ✨ Suggested Improvements\n";
            response += "1. **Readability:** Use **descriptive variable names** and comments for complex logic (e.g., explain the intent of a regex or complex calculation).\n";
            response += "2. **Asynchronous Handling:** Ensure all `await` calls are correctly wrapped in a `try...catch` block for resilient error handling in production environments.\n";
            response += "3. **Type Safety:** Consider migrating to **TypeScript** to catch these errors at compile-time, a practice Shraddha uses in her Next.js projects.\n\n";
            
            response += "#### 🧠 Architectural Insight\n";
            response += "The code's current structure hints at a tightly coupled module. For better scalability, consider abstracting complex logic into a separate **Service Layer** for easier unit testing and dependency management.\n";
        }

        response += "\n*This simulated review demonstrates Shraddha's technical depth, a key reason why recruiters trust her work.* **🔥 Next step: Ask me about her 'skills'.**";
        return response;
    },
    
    generateSimulatedBugDetectorResponse: (input) => {
        const cleanInput = input.toLowerCase();
        let cause = "Uncategorized Server/Backend Exception";
        let debugSteps = "Review the full server logs for the uncaught exception stack trace. Verify the database connection pool status and check for recent schema migrations that might have failed.";
        let codeFix = `// Backend API Resilience Fix Example\ntry {\n  const data = await database.query(safeQuery);\n  res.json(data);\n} catch (error) {\n  // Log detailed error and return a generic 500\n  console.error('CRITICAL DB FAILURE:', error.message);\n  res.status(500).send('Internal Server Error: Database Down');\n}`;
        let intelligence = "This indicates a critical failure likely within the **database or network layer**. Shraddha's expertise in **PostgreSQL** and **Node.js** allows her to identify performance bottlenecks and security vulnerabilities that often lead to these severe failures. **🔥 Next step: Ask me about her 'projects'.**";

        if (cleanInput.includes('referenceerror') || cleanInput.includes('is not defined') || cleanInput.includes('variable')) {
            cause = "**Frontend ReferenceError:** An undeclared variable or a missing import/library is being used. This is an ES6 scope issue.";
            debugSteps = "1. **Check Scope:** Ensure the variable is declared (`const`, `let`) within the functional scope.\n2. **Verify Imports:** Confirm the correct file path and name are imported and exported.";
            codeFix = `// Example Fix: Fixing a missing import\nimport { fetchData } from './apiService'; // Ensure import is present\n\nfunction initialize() {\n  const data = fetchData();\n  console.log(data);\n}`;
        } else if (cleanInput.includes('typeerror') || cleanInput.includes('is not a function') || cleanInput.includes('cannot read properties of undefined')) {
            cause = "**TypeError: Null/Undefined Object:** A method is being called on an object that is currently `null` or `undefined`. This often results from asynchronous data not being checked.";
            debugSteps = "1. **Conditional Access:** Use **Optional Chaining** (`obj?.property`) or a conditional check (`if (obj) { ... }`) before accessing nested properties.\n2. **State Check:** In frontend frameworks, ensure the state holding the API response is initialized to a safe default (e.g., `[]` or `{}`) before rendering.";
            codeFix = `// Example Fix: Defensive Programming\nconst user = API_RESPONSE?.data;\n\n// Check if user exists before accessing properties\nconst name = user?.profile?.name || 'Loading...';\nconsole.log(name);`;
        } else if (cleanInput.includes('404') || cleanInput.includes('not found') || cleanInput.includes('endpoint')) {
            cause = "**Backend API 404 Error:** The client is requesting a resource/endpoint that is not defined on the server (i.e., wrong path or missing route registration).";
            debugSteps = "1. **Verify Route Path:** Check the Express/Django route definition to ensure the path exactly matches the client request, including case sensitivity.\n2. **Middleware Order:** Ensure the router or controller is loaded before the final error handler middleware in the server setup.";
            codeFix = `// Example Fix: Server-side Route Definition\n// Ensure the route path is correct:\n// app.get('/api/v1/users/list', userController.getUsers); \n\n// If using versioning, ensure it is applied consistently:\n// router.use('/v1', v1Routes);`;
        } else if (cleanInput.includes('500') || cleanInput.includes('internal server error')) {
            cause = "**HTTP 500 Internal Server Error:** A severe, unhandled exception occurred on the backend, likely due to a database failure, network timeout, or configuration error.";
            debugSteps = "1. **Check Backend Logs:** Immediately inspect the server console for the full exception stack trace.\n2. **Health Check:** Run a database connection check script to confirm the server can communicate with the database (e.g., PostgreSQL/MongoDB).";
            codeFix = `// Example Fix: Global Error Handler\n// In Express/Node.js, implement a global error middleware:\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send('Something broke!');\n});`;
        }

        let response = "### 🐛 Bug Detector Analysis\n\n";
        response += "This is a **Bug Detector Chatbot** response. It showcases Shraddha's debugging intelligence and backend reasoning abilities.\n\n";
        response += "#### 🔍 Predicted Cause\n";
        response += `${cause}\n\n`;

        response += "#### 🛠️ Suggested Debugging Steps\n";
        response += `${debugSteps}\n\n`;

        response += "#### 💡 Code Fix / Best Practice\n";
        response += "Applying the fix involves using a defensive coding pattern, which is a key clean code practice:\n";
        response += `<pre class="code-block"><code>${codeFix}</code></pre>`;

        response += "\n#### 🧠 Debugging Intelligence & Backend Reasoning\n";
        response += `${intelligence}\n\n`;

        response += "*This simulated analysis demonstrates Shraddha's deep technical reasoning and expertise in fixing complex full-stack bugs.* **🔥 Next step: Ask me about her 'projects'.**";
        return response;
    }
};

function getBotResponse(userMessage) {
    const cleanMessage = userMessage.toLowerCase().trim();

    // --- 1. RESUME ANALYZER MODE CHECK ---
    if (cleanMessage.includes('analyze resume') || cleanMessage.includes('review my resume')) {
        return chatbotKnowledge.resume_analyzer_prompt;
    }

    // Check if the input is a long block of text (likely pasted resume text)
    if (cleanMessage.length > 500 && !cleanMessage.includes('error') && !cleanMessage.includes('function') && !cleanMessage.includes('code review')) {
         // Long text that doesn't look like code or an error is treated as a resume
         if (cleanMessage.includes('education') || cleanMessage.includes('experience') || cleanMessage.includes('skills')) {
            return chatbotKnowledge.analyzeResumeContent(userMessage);
         }
    }


    // --- 2. BUG DETECTOR MODE CHECK ---
    const isBug = cleanMessage.includes('error') || cleanMessage.includes('fail') || cleanMessage.includes('undefined') || cleanMessage.includes('referenceerror') || cleanMessage.includes('typeerror') || cleanMessage.includes('404') || cleanMessage.includes('500') || cleanMessage.includes('exception') || (cleanMessage.includes('debug') && cleanMessage.length < 50) || (cleanMessage.includes('bug') && cleanMessage.length < 50) || (cleanMessage.includes('fix') && cleanMessage.length < 50);
    
    if (isBug) {
        return chatbotKnowledge.generateSimulatedBugDetectorResponse(userMessage);
    }
    
    // --- 3. CODE REVIEWER MODE CHECK ---
    // A message that is long, but not classified as a resume or an error
    const isCode = userMessage.length > 50 || cleanMessage.includes('{') || cleanMessage.includes('(') || cleanMessage.includes('function') || cleanMessage.includes('const') || cleanMessage.includes('def') || cleanMessage.includes('import');

    if (isCode) {
        return chatbotKnowledge.generateSimulatedCodeReview(userMessage);
    }
    
    // --- 4. PORTFOLIO GUIDE MODE ---
    if (cleanMessage.includes('hi') || cleanMessage.includes('hello') || cleanMessage.includes('hey')) {
        return chatbotKnowledge.combined_intro;
    }
    if (cleanMessage.includes('best project') || cleanMessage.includes('start tour') || cleanMessage.includes('recommend')) {
        return chatbotKnowledge.best_project;
    }
    if (cleanMessage.includes('show link') || cleanMessage.includes('github') || cleanMessage.includes('repository')) {
        const match = userMessage.match(/(readflow|voxinterview|shopsphere|iamsafe|finsight|medilink)/i);
        if (match) {
            return chatbotKnowledge.show_links(match[0]);
        }
        return chatbotKnowledge.show_links('');
    }
    
    // Check for specific project details
    const projectMatch = cleanMessage.match(/(readflow|voxinterview|shopsphere|iamsafe|finsight|medilink)/i);
    if (projectMatch && !cleanMessage.includes('link')) {
        return chatbotKnowledge.project_details(projectMatch[0]);
    }

    if (cleanMessage.includes('shraddha') || cleanMessage.includes('who are you')) {
        return chatbotKnowledge.shraddha;
    }
    if (cleanMessage.includes('skills') || cleanMessage.includes('technologies') || cleanMessage.includes('stack')) {
        return chatbotKnowledge.skills;
    }
    if (cleanMessage.includes('projects') || cleanMessage.includes('work') || cleanMessage.includes('build')) {
        return chatbotKnowledge.projects;
    }
    if (cleanMessage.includes('education') || cleanMessage.includes('degree') || cleanMessage.includes('college')) {
        return chatbotKnowledge.education;
    }
    if (cleanMessage.includes('experience') || cleanMessage.includes('intern') || cleanMessage.includes('job')) {
        return chatbotKnowledge.experience;
    }
    if (cleanMessage.includes('contact') || cleanMessage.includes('email') || cleanMessage.includes('phone')) {
        return chatbotKnowledge.contact;
    }
    if (cleanMessage.includes('code review')) {
        return "I'm the Code Reviewer! Please paste the code block directly into the input area and press send.";
    }

    return chatbotKnowledge.fallback;
}

function initializeChatbot() {
    const container = document.getElementById('chatbot-container');
    
    // Inject the new Chatbot HTML structure with a TEXTAREA for code/log input
    container.innerHTML = `
        <div id="chatbot-window" class="chatbot-window">
            <div class="chatbot-header">
                AI Developer Guide 🧠
            </div>
            <div id="chatbot-body" class="chatbot-body">
                <p class="text-gray-400 mb-3">${chatbotKnowledge.combined_intro.replace(/\*\*/g, '<strong>')}</p>
            </div>
            <div class="chatbot-input-area">
                <textarea id="chatbot-input" placeholder="Paste code, error logs, portfolio question, or type 'analyze resume'..."></textarea>
                <button id="chatbot-send-btn">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
            </div>
        </div>
        <button id="chatbot-toggle-btn" class="chatbot-toggle-btn">
            <svg id="chatbot-open-icon" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z"></path>
            </svg>
            <svg id="chatbot-close-icon" class="w-7 h-7 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    `;

    const toggleButton = document.getElementById('chatbot-toggle-btn');
    const chatWindow = document.getElementById('chatbot-window');
    const openIcon = document.getElementById('chatbot-open-icon');
    const closeIcon = document.getElementById('chatbot-close-icon');
    const inputField = document.getElementById('chatbot-input');
    const sendButton = document.getElementById('chatbot-send-btn');
    const chatBody = document.getElementById('chatbot-body');

    // Toggle Chat Window
    toggleButton.addEventListener('click', () => {
        const isOpen = chatWindow.classList.toggle('open');
        openIcon.classList.toggle('hidden', isOpen);
        closeIcon.classList.toggle('hidden', !isOpen);
        if (isOpen) {
            chatBody.scrollTop = chatBody.scrollHeight;
            inputField.focus(); // Focus input when opened
        }
    });

    const processUserMessage = (message) => {
        const userMessage = document.createElement('p');
        
        // Determine if the input should be displayed as a code/text block or simple text
        const cleanMessage = message.toLowerCase().trim();
        const isCodeOrLogOrResume = message.length > 50 || cleanMessage.includes('{') || cleanMessage.includes('function') || cleanMessage.includes('error') || cleanMessage.includes('skills') || cleanMessage.includes('experience');
        
        userMessage.className = 'text-right text-accent-purple mb-2 p-2 rounded-lg bg-indigo-900/50 max-w-[90%] ml-auto overflow-x-auto';
        
        if (isCodeOrLogOrResume) {
             // For long text (code, log, or resume), display it inside a <pre> tag
             userMessage.innerHTML = `You submitted: <pre class="code-block-user"><code>${message}</code></pre>`;
        } else {
             userMessage.innerHTML = 'You: ' + message;
        }
        
        chatBody.appendChild(userMessage);
        
        // Bot Response
        const botText = getBotResponse(message);

        setTimeout(() => {
            const botMessage = document.createElement('div'); // Use div for complex HTML output
            botMessage.className = 'text-left text-gray-300 mb-2 p-2 rounded-lg bg-card-dark max-w-[90%] mr-auto overflow-x-auto';
            // Simple markdown to HTML conversion for headers, bold text, and code blocks
            const formattedBotText = botText
                .replace(/###\s*(.*)/g, '<h4 class="text-xl font-bold text-accent-purple mt-4">$1</h4>')
                .replace(/####\s*(.*)/g, '<h5 class="text-lg font-semibold text-accent-purple mt-3">$1</h5>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n\n/g, '<br><br>') // Convert double newlines to breaks for readability
                .replace(/\n/g, '<br>') // Convert single newlines to breaks
                .replace(/<pre class="code-block"><code>(.*?)<\/code><\/pre>/gs, (match, p1) => {
                    // Re-format simulated code blocks, ensuring HTML is not double-escaped
                    // Remove <br> tags accidentally introduced inside the pre tag content
                    const codeContent = p1.replace(/<br>/g, '\n').replace(/<br\/>/g, '\n').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                    return `<pre class="code-block"><code class="language-javascript">${codeContent}</code></pre>`;
                });
            
            botMessage.innerHTML = 'AI: ' + formattedBotText;

            chatBody.appendChild(botMessage);
            
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
        
        chatBody.scrollTop = chatBody.scrollHeight;
        inputField.value = '';
    };

    const handleSend = () => {
        const message = inputField.value.trim();
        if (message) {
            processUserMessage(message);
        }
    };

    // Send button click listener
    sendButton.addEventListener('click', handleSend);

    // Enter key listener on input field (Shift+Enter for new line, Enter to submit)
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); 
            handleSend();
        }
    });
}