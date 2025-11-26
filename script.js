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
                <li>Built full-stack system with Auth.js for authentication.</li>
                <li>Admin dashboard for CRUD operations (Books, Users).</li>
                <li>Created PostgreSQL schemas with Drizzle ORM and implemented migrations.</li>
                <li>Integrated ImageKit for optimized media management.</li>
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
                <li>Developed real-time AI interviewer with Gemini AI and VY Voice SDK.</li>
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
                <li>Developed vendor and product microservices using Node.js/Express.js.</li>
                <li>Used MongoDB for flexible product catalog storage.</li>
                <li>Integrated ImageKit CDN for faster media delivery.</li>
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
                <li>Built using Android Studio and Java.</li>
                <li>SOS alerts with live location sharing and guardian notifications.</li>
                <li>Integrated Google Maps API for tracking, nearby hospitals, and speed detection.</li>
                <li>Used SQLite for local data persistence.</li>
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
                <li>Real-time stock charts, fundamentals, insights and watchlist built with Next.js.</li>
                <li>Used Alpha Vantage API for live data.</li>
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
                <li>Implemented automated SMS reminders for appointments using the Twilio API.</li>
                <li>Used Django REST Frameworkfor the backend API.</li>
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
                <li>Frontend: Next.js (App Router), React (Hooks, Context, State), TailwindCSS.</li>
                <li>Backend: Node.js + Express, Django REST API, Advanced Authentication.</li>
                <li>Databases: PostgreSQL, MongoDB, Prisma ORM.</li>
                <li>DevOps: Git/GitHub, CI/CD, Docker (beginner), Deployment (Vercel, Render).</li>
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
                <li>REST: Multiple endpoints, returns fixed data, can over-fetch, simple & widely used.</li>
                <li>GraphQL: One endpoint, client chooses fields, no under/over fetching, faster for dashboards.</li>
            </ul>
            <p class="text-md text-gray-400 mt-4 italic">📌 When to Use What: REST → Blogs, CRUD apps, small/medium apps. GraphQL → Dashboards, analytics apps, complex UIs.</p>
        `,
        link: "#" 
    },
    blog3: {
        title: "Understanding Web Authentication (JWT vs OAuth vs Session Auth)",
        content: `
            <p class="text-gray-300 mb-4">Security is a core skill for full-stack developers. This is how I understand the three main auth systems:</p>
            <h5 class="text-xl font-semibold text-accent-purple mb-2">Auth Systems:</h5>
            <ul class="list-disc ml-5 text-gray-300 space-y-1">
                <li>JWT (Token Auth): No server session, fast, used in SPAs + mobile apps.</li>
                <li>Session Auth: Server stores session, cookie-based, great for admin dashboards.</li>
                <li>OAuth (Google, GitHub Login):No password needed, secure, uses external identity providers.</li>
            </ul>
            <p class="text-md text-gray-400 mt-4 italic">📌 Real-world Uses: JWT → Public web apps. Sessions → Admin dashboards. OAuth → Consumer apps.</p>
        `,
        link: "#" 
    },
    blog4: {
        title: "Why I Prefer Next.js Over React for Production Apps",
        content: `
            <p class="text-gray-300 mb-4">React is amazing — but Next.js is the better production framework. It provides a comprehensive full-stack toolkit right out of the box.</p>
            <h5 class="text-xl font-semibold text-accent-purple mb-2">Next.js Advantages:</h5>
            <ul class="list-disc ml-5 text-gray-300 space-y-1">
                <li>Built-in Routing: No need for \`react-router\`.</li>
                <li>Server Components: Better performance, less JavaScript bundle size.</li>
                <li>In-built API Routes:Frontend + Backend in one codebase.</li>
                <li>SEO-Friendly:Perfect for portfolios, blogs, and e-commerce.</li>
                <li>Lightning-fast Deployment: Seamless integration with Vercel.</li>
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
                <li>Database Layer: SQL (PostgreSQL) or NoSQL (MongoDB).</li>
                <li>Caching Layer: Use Redis to speed up database reads.</li>
                <li>Load Balancer: Ensures servers don’t get overloaded, distributing traffic.</li>
                <li>CDN: Delivers images and static files globally for faster access.</li>
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
                <li>Coding Tools:VS Code, Prettier, ESLint.</li>
                <li>API & Testing: Postman, Thunder Client.</li>
                <li>UI/UX: TailwindCSS, ShadCN, Figma.</li>
                <li>Databases:Prisma Studio, MongoDB Compass.</li>
                <li>Deployment: Vercel, Render, Railway.</li>
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
    const submitButton = document.getElementById('submit-button');

    // Simple client-side form simulation for portfolio demo
    // In a real application, this would send an AJAX request to a backend/form service (e.g., Formspree, AWS Lambda, or a custom Express server)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'SENDING...';
        submitButton.classList.add('opacity-50');

        // Simulate network delay
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'SEND MESSAGE';
            submitButton.classList.remove('opacity-50');

            // Show success message
            message.textContent = "Your message was sent successfully. I will get back to you soon.";
            message.className = 'mt-4 text-center text-green-400 font-semibold';
            message.classList.remove('hidden');
            form.reset();

            // Hide message after a few seconds
            setTimeout(() => {
                message.classList.add('hidden');
            }, 5000);
        }, 2000); // 2 second delay
    });
}


// --- Chatbot Widget Functionality (Uses Resume Data) ---

// Knowledge base for the simulated developer guide bot
const chatbotKnowledge = {
    // Initial/Combined Intro Message
    combined_intro: "Hi, I’m Shraddha’s AI Developer Guide! I can help you quickly learn about her career. **Ask me about her skills, projects, experience, or education.** Try asking: 'What are her main skills?' or 'Tell me about the ReadFlow project.'",

    // Portfolio Guide Content
    shraddha: "Shraddha is a Full Stack Developer experienced in building production-ready web apps using React, Next.js, Node.js, Express, Django, PostgreSQL, MongoDB, Redis, and cloud tools. She has delivered 6+ real-world projects. 🔥 Next step: Ask me about her 'skills'.",
    
    contact: "You can reach Shraddha at shraddhamoily392@gmail.com or call 9945185153. The contact form is at the bottom of the page. 🔥 Next step: Ask me about her 'education'.",
    
    education: "Shraddha holds a Bachelor of Computer Applications (BCA) from Alva's College (2020-2023) with a CGPA of 8.05. 🔥 Next step: Ask me about her 'experience'.",
    
    experience: "Shraddha completed a Python Programming Intern role at YBI Foundation (Jul 2024), where she built automation scripts and improved modular code performance by 20%. 🔥 Next step: Ask me about her 'projects'.",
    
    skills: "Shraddha's key skills include **Frontend**: Next.js, React, TailwindCSS, TypeScript. **Backend**: Node.js/Express.js, Django REST. **Databases**: PostgreSQL, MongoDB, Redis. **Cloud**: AWS (EC2, S3), Firebase, Docker (Basic). 🔥 Next step: Ask me to perform a 'code review'.",
    
    projects: "Shraddha has delivered 6+ projects. Key projects include **ReadFlow** (Library System with Next.js/PostgreSQL), **VoxInterview AI** (AI Voice Interviewer with Gemini AI), and **ShopSphere** (E-Commerce microservices). 🔥 Next step: Ask me 'show link for ReadFlow'.",
    
    fallback: "I'm sorry, I don't have that specific information. Try asking about Shraddha's 'skills', 'projects', 'experience', or ask me to do a 'code review' or 'analyze resume'.",

    resume_analyzer_prompt: "Welcome to the Resume Analyzer Chatbot! Please paste the complete text content of your resume/CV into the input area below and hit send. I will provide a professional, multi-point analysis on missing skills, ATS readiness, and grammatical suggestions.",

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
            const features = featureMatch ? featureMatch[1].replace(/<\/?li>/g, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').split('•').filter(f => f.trim()).map(f => f.trim()) : ["Details unavailable for text output."];

            let response = `**Project Details: ${data.title}**\n\n`;
            response += `${data.content.match(/<p.*?>(.*?)<\/p>/s)[1].replace(/<\/?p>/g, '')}\n\n`;
            response += "**Key Features:**\n";
            features.forEach(f => {
                response += `* ${f}\n`;
            });
            response += `\n**GitHub Link**: [View Project](${data.link}). 🔥 Next step: Ask me about her 'skills'.`;
            return response;
        }
        return "I couldn't find details for that project. Try asking for 'ReadFlow' or 'ShopSphere'.";
    },

    // --- Simulated Analysis Functions ---

    // Simulated Resume Analyzer
    analyzeResumeContent: (content) => {
        const cleanContent = content.toLowerCase();
        let response = "### 🤖 Simulated Resume Analysis (Shraddha's Guide)\n\n";
        response += "This analysis demonstrates Shraddha's understanding of **ATS (Applicant Tracking Systems)** and recruiter best practices.\n\n";
        
        // 1. ATS & Format Check
        response += "#### 📄 ATS & Format Check\n";
        const lineCount = content.split('\n').filter(line => line.trim() !== '').length;

        if (lineCount < 30 || lineCount > 80) {
            response += "⚠️ Format Warning: Content length is unusual (Lines: " + lineCount + "). Ensure key **Action Verbs** and **keywords** are present.\n";
        } else {
            response += "✅ Format: Good use of clear section headers and bullet points (detected " + lineCount + " lines). Highly ATS-friendly.\n";
        }

        response += "\n#### 💡 Missing Skills & Suggestions\n";
        if (!cleanContent.includes('docker') || !cleanContent.includes('aws')) {
            response += "1. DevOps Gap: Missing depth in Docker, Kubernetes, or advanced AWS/Azure/GCP services. Suggestion: Elaborate on deployment experience.\n";
        } else {
            response += "1. Soft Skills: Recommend integrating more action-oriented soft skills (e.g., 'Mentored Junior Developers' or 'Improved Team Velocity').\n";
        }
        
        if (!cleanContent.includes('testing') || !cleanContent.includes('jest') || !cleanContent.includes('unit')) {
            response += "2. Testing: Missing specific mention of testing frameworks like Jest, Mocha, or Cypress. Suggestion:Quantify experience with Unit/Integration testing.\n";
        } else {
            response += "2. Technical Depth: Good mention of technical terms. Focus on quantifying results (e.g., 'Reduced latency by 15%').\n";
        }

        response += "\n#### 📝 Grammatical & Style Tips\n";
        if (content.match(/responsible for/i)) {
            response += "⚠️ Passive Voice: Avoid phrases like 'Responsible for X'. Suggestion: Start every bullet point with a strong Action Verb (e.g., 'Developed', 'Optimized', 'Architected').\n";
        } else {
            response += "✅ Action Verbs: Excellent use of strong action verbs (found: 'developed', 'integrated', 'built').\n";
        }
        
        response += "\nThis simulated analysis demonstrates Shraddha's deep knowledge of the hiring process. 🔥 Next step: Try asking me for a 'code review'.";
        return response;
    },

    // Simulated Code Reviewer
    generateSimulatedCodeReviewResponse: (code) => {
        const cleanInput = code.toLowerCase();
        let response = "### 💻 Simulated Code Review (Shraddha's Code Guide)\n\n";
        response += "This code review is designed to demonstrate Shraddha's ability to provide constructive feedback, enforce best practices, and improve code quality.\n\n";

        // Check for common JS issues
        if (cleanInput.includes('var ') || cleanInput.includes('==') || cleanInput.includes('array.length')) {
            response += "#### ⚠️ Critical Issues Found\n";
            if (cleanInput.includes('var ')) {
                response += "1. `var` usage: The `var` keyword should be replaced with `let` or `const` for proper block-scoping and modern JS practices. This prevents common hoisting bugs.\n";
            }
            if (cleanInput.includes('==')) {
                response += "2. Comparison: Favor the strict equality operator (`===`) over the abstract equality operator (`==`) to avoid unexpected type coercion issues.\n";
            }
            if (cleanInput.includes('array.length')) {
                response += "3. Array Size Check: `if (Array.length)` can lead to bugs. Use `if (Array && Array.length > 0)` for defensive programming.\n";
            }
            response += "\n";
        } else {
            response += "#### ✅ Initial Scan Results: Clean Code Metrics\n";
            response += "The code appears to follow modern conventions (no 'var', uses triple equals). No critical security flaws detected in the snippet.\n\n";
        }

        // Add general suggestions
        response += "#### 🚀 Best Practice & Scalability Suggestions\n";
        if (cleanInput.includes('for ')) {
            response += "1. Iteration: For array iteration, prefer modern methods like `map()`, `filter()`, or `reduce()`, which are more declarative and less prone to off-by-one errors than a traditional `for` loop.\n";
        } else {
             response += "1. Block Scoping: Ensure no global variables leak. All variables should be contained within a function or block scope.\n";
        }
        
        response += "2. Performance:If this function runs in a loop, watch for potential O(N²) complexity. Shraddha prefers O(N log N) or O(N) solutions using structures like HashMaps.\n\n";

        response += "#### ✨ Suggested Improvements\n";
        response += "1. Readability: Use descriptive variable names and comments for complex logic (e.g., explain the intent of a regex or complex calculation).\n";
        response += "2. Asynchronous Handling: Ensure all `await` calls are correctly wrapped in a `try...catch` block for resilient error handling in production environments.\n";
        response += "3. Type Safety: Consider migrating to TypeScript to catch these errors at compile-time, a practice Shraddha uses in her Next.js projects.\n\n";

        response += "#### 🧠 Architectural Insight\n";
        response += "The code's current structure hints at a tightly coupled module. For better scalability, consider abstracting complex logic into a separate Service Layer for easier unit testing and dependency management.\n";
        
        response += "\nThis simulated review demonstrates Shraddha's technical depth, a key reason why recruiters trust her work.🔥 Next step: Ask me about her 'skills'.";
        return response;
    },
    
    // Simulated Bug Detector
    generateSimulatedBugDetectorResponse: (input) => {
        const cleanInput = input.toLowerCase();
        let cause = "Uncategorized Error: This requires manual inspection. Check the browser console for stack trace.";
        let debugSteps = "1. Isolate: Comment out the suspected block of code and re-run to confirm the location.\n2. Console Log: Use aggressive `console.log()` statements to trace variable values right before the crash.";
        let intelligence = "The error description is vague, suggesting an issue that's not caught by basic validation. A full-stack developer knows to start with isolation and aggressive logging.";
        let codeFix = `// No specific fix for uncategorized errors.`;

        if (cleanInput.includes('referenceerror') || cleanInput.includes('is not defined') || cleanInput.includes('import')) {
            cause = "ReferenceError: Missing Import/Scope Issue: A variable or function is being used before it is declared, or the correct file path and name are imported and exported.";
            debugSteps = "1. Scope Check: Confirm the variable/function is accessible in the current scope (e.g., passed as a prop, not hidden inside a closure).\n2. Import Path: Verify the correct file path and name are imported and exported.";
            codeFix = `// Example Fix: Fixing a missing import\nimport { fetchData } from './apiService'; // Ensure import is present\n\nfunction initialize() {\n const data = fetchData();\n console.log(data);\n}`;
            intelligence = "A ReferenceError indicates an issue with the code's loading order or file structure. Shraddha's approach is to check the import/export chain first, a common issue in large projects.";
        } else if (cleanInput.includes('typeerror') || cleanInput.includes('is not a function') || cleanInput.includes('cannot read properties of undefined')) {
            cause = "TypeError: Null/Undefined Object: A method is being called on an object that is currently `null` or `undefined`. This often results from asynchronous data not being checked.";
            debugSteps = "1. Conditional Access: Use Optional Chaining (`obj?.property`) or a conditional check (`if (obj) { ... }`) before accessing nested properties.\n2. State Check: In frontend frameworks, ensure the state holding the API response is initialized to a safe default (e.g., `[]` or `{}`) before rendering.";
            codeFix = `// Example Fix: Defensive Programming\nconst user = API_RESPONSE?.data;\n\n// Check if user exists before accessing properties\nconst name = user?.profile?.name || 'Loading...';\nconsole.log(name);`;
            intelligence = "This is the most common bug from API calls. Shraddha immediately checks for defensive programming practices like optional chaining and safe state initialization.";
        } else if (cleanInput.includes('404') || cleanInput.includes('not found') || cleanInput.includes('endpoint')) {
            cause = "Backend API 404 Error: The client is requesting a resource/endpoint that is not defined on the server (i.e., wrong path or missing route registration).";
            debugSteps = "1. Verify Route Path: Check the Express/Django route definition to ensure the path exactly matches the client request, including case sensitivity.\n2. Middleware Order: Ensure the router or controller is loaded before the final error handler middleware in the server setup.";
            codeFix = `// Example Fix: Correcting a route definition in Express\n// BAD: app.get('/userprofile')\n// GOOD:\napp.get('/api/users/:id', (req, res) => {\n  // Handle logic\n});`;
            intelligence = "A 404 requires inspecting the server-side code (Node.js/Django). Shraddha knows the path, case sensitivity, and middleware order are the top three culprits.";
        } else if (cleanInput.includes('500') || cleanInput.includes('internal server error') || cleanInput.includes('database connection fail')) {
            cause = "Backend 500 Error: Database/Service Failure: The server is crashing, often due to an unhandled exception in database queries (e.g., connection timed out, invalid SQL syntax, or external service failure).";
            debugSteps = "1. Check Logs: Check the server/cloud logs (AWS CloudWatch, Vercel logs) for the full stack trace which names the file and line number.\n2. Try/Catch: Wrap the database interaction layer in a `try...catch` block to handle and log the specific database error gracefully.";
            codeFix = `// Example Fix: Using a try/catch for DB operations\nasync function getData() {\n  try {\n    const data = await db.query('SELECT * FROM users');\n    return data;\n  } catch (error) {\n    console.error('DB ERROR:', error.message);\n    // Return safe default or re-throw specific error\n    throw new Error('Failed to fetch data');\n  }\n}`;
            intelligence = "A 500 points to a server-side crash. Shraddha's immediate response is log inspection and implementing robust try/catch blocks for I/O operations, a sign of production-level backend thinking.";
        }

        let response = "### 🐛 Simulated Bug Detector Analysis (Full Stack Debugging)\n\n";
        response += "This is a simulated Bug Detector Chatbot response. It showcases Shraddha's debugging intelligence and backend reasoning abilities.\n\n";
        
        response += "#### 🔍 Predicted Cause\n";
        response += `${cause}\n\n`;

        response += "#### 🛠️ Suggested Debugging Steps\n";
        response += `${debugSteps}\n\n`;
        
        response += "#### 💡 Code Fix / Best Practice\n";
        response += "Applying the fix involves using a defensive coding pattern, which is a key clean code practice:\n";
        response += `<pre class="code-block"><code>${codeFix}</code></pre>`;

        response += "\n#### 🧠 Debugging Intelligence & Backend Reasoning\n";
        response += `${intelligence}\n\n`;
        
        response += "This simulated analysis demonstrates Shraddha's deep technical reasoning and expertise in fixing complex full-stack bugs.🔥 Next step: Ask me about her 'projects'.";
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
    const isBug = cleanMessage.includes('error') || cleanMessage.includes('fail') || cleanMessage.includes('undefined') || cleanMessage.includes('referenceerror') || cleanMessage.includes('typeerror') || cleanMessage.includes('404') || cleanMessage.includes('500');
    if (isBug) {
        return chatbotKnowledge.generateSimulatedBugDetectorResponse(cleanMessage);
    }
    
    // --- 3. CODE REVIEW MODE CHECK ---
    if (cleanMessage.includes('code review') && cleanMessage.length > 50) {
        return chatbotKnowledge.generateSimulatedCodeReviewResponse(userMessage);
    }

    // --- 4. PROJECT/LINK/DETAIL CHECK ---
    if (cleanMessage.includes('show link') || cleanMessage.includes('github link') || cleanMessage.includes('repo for')) {
        const match = cleanMessage.match(/(readflow|voxinterview|shopsphere|iamsafe|finsight|medilink)/);
        return match ? chatbotKnowledge.show_links(match[0]) : "Please specify a project name (e.g., 'ReadFlow') to get the link.";
    }
    
    if (cleanMessage.includes('tell me about') || cleanMessage.includes('details of') || cleanMessage.includes('features of')) {
        const match = cleanMessage.match(/(readflow|voxinterview|shopsphere|iamsafe|finsight|medilink)/);
        return match ? chatbotKnowledge.project_details(match[0]) : "Please specify a project name (e.g., 'ReadFlow') to get the details.";
    }

    // --- 5. KEYWORD CHECKS (General Info) ---
    if (cleanMessage.includes('who is shraddha') || cleanMessage.includes('about you') || cleanMessage.includes('start')) {
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


// --- Main Chatbot UI & Logic ---
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
                <textarea id="chatbot-input" placeholder="Ask a question, paste code, or a resume snippet..." rows="2" class="chatbot-input"></textarea>
                <button id="chatbot-send">Send</button>
            </div>
        </div>
    `;

    const toggleButton = document.getElementById('chatbot-toggle');
    const chatWindow = document.getElementById('chatbot-window');
    const inputField = document.getElementById('chatbot-input');
    const sendButton = document.getElementById('chatbot-send');
    const chatBody = document.getElementById('chatbot-body');

    const toggleChatbot = () => {
        chatWindow.classList.toggle('open');
        // Focus input when opening
        if (chatWindow.classList.contains('open')) {
            setTimeout(() => inputField.focus(), 300);
        }
    };
    
    toggleButton.addEventListener('click', toggleChatbot);


    const processUserMessage = (message) => {
        // User Message
        const userMessage = document.createElement('div');
        userMessage.className = 'text-right text-white mb-2 p-2 rounded-lg bg-accent-indigo max-w-[90%] ml-auto';
        
        // Check if message is a large block of text (likely code or a resume)
        if (message.length > 100 || message.includes('\n')) {
             userMessage.innerHTML = 'You: <pre class="code-block-user"><code>' + message + '</code></pre>';
        } else {
            userMessage.textContent = 'You: ' + message;
        }
        
        chatBody.appendChild(userMessage);

        // Bot Response
        const botText = getBotResponse(message);
        
        setTimeout(() => {
            const botMessage = document.createElement('div');
            // Use div for complex HTML output
            botMessage.className = 'text-left text-gray-300 mb-2 p-2 rounded-lg bg-card-dark max-w-[90%] mr-auto overflow-x-auto';
            
            // Simple markdown to HTML conversion for bot response
            const formattedBotText = botText
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
                .replace(/### (.*)/g, '<h3>$1</h3>') // Headers
                .replace(/#### (.*)/g, '<h4>$1</h4>') // Sub-headers
                .replace(/\[View on GitHub\]\((.*?)\)/g, '<a href="$1" target="_blank" class="text-accent-purple hover:text-accent-indigo underline">View on GitHub</a>') // Links
                .replace(/\* (.*)/g, '<li>$1</li>') // List items
                .replace(/(\n\s*<li>.*<\/li>)/gs, (match) => {
                    // Wrap block of list items in ul
                    return '<ul>' + match + '</ul>';
                })
                .replace(/\n/g, '<br>') // Convert single newlines to breaks
                .replace(/<pre class=\"code-block\"><code>(.*?)<\/code><\/pre>/gs, (match, p1) => {
                    // Re-format simulated code blocks, ensuring HTML is not double-escaped
                    // Remove <br> tags accidentally introduced inside the pre tag content
                    const codeContent = p1.replace(/<br>/g, '\n').replace(/<br\/>/g, '\n').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                    return `<pre class="code-block"><code class="language-javascript">${codeContent}</code></pre>`;
                });
            
            botMessage.innerHTML = 'AI: ' + formattedBotText;

            chatBody.appendChild(botMessage);
            
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000); // Simulate AI processing time
        
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