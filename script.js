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
});

// --- Project Data (Case Studies and GitHub Links) ---
const projectData = {
    "readflow": {
        title: "ReadFlow - University Library Management System",
        tech: "Next.js, TypeScript, PostgreSQL, Redis, Drizzle ORM, Auth.js, ImageKit",
        github: "https://github.com/shraddha524/ReadFlow",
        content: `
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Problem Solved:</h4>
            <p class="mb-4">Traditional library systems often suffer from slow, inefficient book search and borrowing processes, leading to long wait times and poor user experience, especially during peak academic periods.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Key Features & Impact:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><span class="font-semibold text-accent-indigo">Performance Optimization:</span> Integrated Redis caching to store frequently accessed data, improving system performance by 40% and drastically reducing book search and query times.</li>
                <li><span class="font-semibold text-accent-indigo">Robust Data Layer:</span> Utilized PostgreSQL with Drizzle ORM to create a scalable database and 12+ REST APIs for book management, user profiles, and borrowing records.</li>
                <li><span class="font-semibold text-accent-indigo">Secure Access:</span> Implemented Auth.js for secure, role-based authentication, ensuring proper access for students, staff, and administrators.</li>
            </ul>
        `
    },
    "voxinterview": {
        title: "VoxInterview AI - AI Voice Mock Interview Platform",
        tech: "Next.js, Tailwind CSS, Vapi (Voice AI), Firebase (Auth & Storage)",
        github: "https://github.com/shraddha524/VoxInterview-AI",
        content: `
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Problem Solved:</h4>
            <p class="mb-4">Job seekers lack access to realistic, on-demand mock interviews that provide personalized, actionable, and real-time voice feedback, which is crucial for building interview confidence.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Key Features & Impact:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><span class="font-semibold text-accent-indigo">Lifelike Voice Agent:</span> Integrated Vapi to create a human-like voice agent capable of conducting real-time, dynamic interviews.</li>
                <li><span class="font-semibold text-accent-indigo">Personalized Feedback:</span> Developed a backend workflow to process the interview, generating a detailed feedback page that identifies areas for improvement.</li>
                <li><span class="font-semibold text-accent-indigo">Custom Interview Creation:</span> Implemented a feature where users can chat with the AI to customize interview topics before the session begins.</li>
            </ul>
        `
    },
    "shopsphere": {
        title: "ShopSphere - Multi-Vendor E-Commerce SaaS",
        tech: "Node.js, Express.js, Microservices, MongoDB, ImageKit",
        github: "https://github.com/shraddha524/eshop",
        content: `
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Problem Solved:</h4>
            <p class="mb-4">Building a complex e-commerce platform with diverse user roles (user, seller, admin) in a monolithic architecture leads to slow development cycles and poor scalability as the business grows.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Key Features & Impact:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><span class="font-semibold text-accent-indigo">Microservices Architecture:</span> Implemented separate Vendor and Product microservices using Node.js and Express.js, significantly improving modularity and allowing independent scaling.</li>
                <li><span class="font-semibold text-accent-indigo">Performance Improvement:</span> Achieved a 35% improvement in server performance by using a modular code architecture and integrating ImageKit CDN for accelerated media delivery.</li>
                <li><span class="font-semibold text-accent-indigo">API Development:</span> Built 20+ robust API endpoints to handle complex e-commerce operations like product CRUD, order processing, and authentication using MongoDB.</li>
            </ul>
        `
    },
    "iamsafe": {
        title: "I Am Safe - Women's Safety Android App",
        tech: "Android Studio, Java, Google Maps API, SQLite, Background Services",
        github: "https://github.com/shraddha524/womensafe",
        content: `
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Problem Solved:</h4>
            <p class="mb-4">Women require a discreet, reliable, and instantaneous emergency alert system that can function even when the user is unable to actively use their phone, especially in low-connectivity or high-stress situations.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Key Features & Impact:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><span class="font-semibold text-accent-indigo">Instant SOS Alerts:</span> Implemented a system to trigger SOS alerts (SMS) with the user's 3-second live GPS location updates to pre-selected contacts, activatable via a simple, discreet trigger (e.g., three power button presses).</li>
                <li><span class="font-semibold text-accent-indigo">Offline Persistence:</span> Utilized SQLite to build an offline emergency storage database, ensuring critical contact information and location history are available even without an active internet connection.</li>
                <li><span class="font-semibold text-accent-indigo">Critical Utility Integration:</span> Integrated the Google Maps API to display nearby essential services, such as hospitals and police stations, along with route tracking during an emergency.</li>
            </ul>
        `
    },
    "finsight": {
        title: "FinSight AI - Live Stock Dashboard",
        tech: "Next.js, Alpha Vantage API, Caching Mechanisms",
        github: "https://github.com/shraddha524/FinSight-AI-",
        content: `
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Problem Solved:</h4>
            <p class="mb-4">Real-time financial data is often slow and expensive to fetch, resulting in poor performance for stock dashboards and delayed data for users, impacting the trading experience.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Key Features & Impact:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><span class="font-semibold text-accent-indigo">45% Latency Reduction:</span> Applied caching strategies to reduce repetitive API calls, resulting in a 45% reduction in API latency, providing users with near real-time price updates.</li>
                <li><span class="font-semibold text-accent-indigo">Optimized Data Fetching:</span> Created a system to fetch live stock data using the Alpha Vantage API while applying efficient data-fetching pipeline.</li>
                <li><span class="font-semibold text-accent-indigo">Interactive Visualizations:</span> Built a stock dashboard featuring live, interactive candlestick charts and personalized watchlist functionality using Next.js.</li>
            </ul>
        `
    },
    "medilink": {
        title: "MediLink - Patient Management System",
        tech: "Next.js, Twilio, TypeScript, Tailwind CSS, ShadCN",
        github: "https://github.com/shraddha524/medilink",
        content: `
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Problem Solved:</h4>
            <p class="mb-4">Healthcare facilities often struggle with high no-show rates and inefficient communication regarding patient appointments, leading to revenue loss and wasted clinician time.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Key Features & Impact:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><span class="font-semibold text-accent-indigo">Automated SMS Reminders:</span> Integrated the Twilio API to send automated SMS appointment reminders, aiming to significantly reduce no-show rates.</li>
                <li><span class="font-semibold text-accent-indigo">Role-Based Dashboards:</span> Built separate, secure dashboards for patients (scheduling, viewing history) and administrators (managing appointments, patient data) with role-based authentication.</li>
                <li><span class="font-semibold text-accent-indigo">Robust UI/UX:</span> Used TypeScript and modern UI frameworks like Tailwind CSS and ShadCN to deliver a responsive, professional, and dark-themed user experience.</li>
            </ul>
        `
    },
    // Updated content for articles/blogs
    "blog1": { 
        title: "How I Improved ReadFlow Performance by 40% Using Redis Caching", 
        content: `
            <p class="mb-4">When I started building ReadFlow, a full-stack University Library Management System, the main requirement was simple: make book search and dashboard loading extremely fast—even with thousands of records.</p>
            <p class="mb-4">But as the database grew, I noticed slow page loads (2–3 seconds), repeated heavy queries hitting PostgreSQL, and slow admin actions. This was a classic “high read, low write” system — perfect for caching.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Why Redis?</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                <li>It stores data in-memory (super fast)</li>
                <li>Perfect for caching repetitive queries</li>
                <li>Integrates well with Next.js + Node.js</li>
                <li>Reduces DB cost + load</li>
            </ul>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">What I Cached & The Impact:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                <li>Book list (most requested), Book details by ID, User borrowing history, Dashboard stats (counts, charts).</li>
                <li>Achieved 40% faster response times and reduced PostgreSQL load by 60%.</li>
                <li>Book searches became butter smooth, directly enhancing the admin and student experience.</li>
            </ul>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Key Technical Decisions:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Used Redis JSON to store objects.</li>
                <li>Cache expiry: 5–20 minutes depending on use.</li>
                <li>Added cache invalidation** on create/update/delete actions.</li>
            </ul>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">What I Learned:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Caching is one of the easiest performance wins.</li>
                <li>Cache invalidation matters more than caching.</li>
                <li>Redis + Next.js + PostgreSQL is a powerful combination.</li>
            </ul>
        `
    },
    "blog2": { 
        title: "Why I Used Microservices for ShopSphere (E-Commerce SaaS)", 
        content: `
            <p class="mb-4">For ShopSphere, a multi-vendor E-Commerce SaaS, microservices were the best approach for **Independent Scaling**, **Faster Development**, and **Better Fault Isolation**. I created Vendor, Product, and Media services for modular architecture.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Why Microservices?</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                <li>Independent Deployment: Ship updates for the Vendor service without touching the Product service.</li>
                <li>Technology Diversity: Use Node.js for high-throughput APIs and maybe Python/Django for a complex administrative dashboard if needed.</li>
                <li>Fault Isolation: If the Vendor service fails, the Product service can still serve data.</li>
            </ul>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">ShopSphere Architecture:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                <li>Vendor Service (Node.js/Express.js, MongoDB): Handles vendor registration, profile management, and permissions.</li>
                <li>Product Service (Node.js/Express.js, MongoDB): Handles product CRUD, search, and categorization.</li>
                <li>Image Service (ImageKit CDN): Handles high-performance media delivery, offloading server work.</li>
            </ul>
            <p class="mb-4">This modularity led to a 35% improvement in development speed and server stability compared to my previous monolithic designs.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">What I Learned:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Microservices add complexity (Service Discovery, API Gateway), but pay off for large SaaS products.</li>
                <li>Decoupling the database (each service owns its data) is critical.</li>
                <li>Communication between services should be simple (REST or message queues).</li>
            </ul>
        `
    },
    "blog3": {
        title: "Lessons Learned from Building My First Real-Time AI App (VoxInterview)",
        content: `
            <p class="mb-4">VoxInterview, my AI Voice Mock Interview Platform, was one of the most challenging and exciting projects I built. It required a low-latency, real-time architecture to stream user audio, get AI responses, and provide post-interview analysis.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Core Technologies:</h4>
            <p class="text-gray-300 mb-4">Next.js, Firebase, Gemini AI, Vapi Voice SDK, Real-time data streaming.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Key Challenges:</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                <li><span class="font-semibold text-accent-indigo">Real-Time Voice Processing:</span> Required a stable connection, audio chunking, and low latency for the user-to-AI-to-text loop.</li>
                <li><span class="font-semibold text-accent-indigo">Transcript Accuracy:</span> Achieved 95% accuracy by tuning prompt engineering, timestamp alignment, and speaker mapping using Gemini AI.</li>
                <li><span class="font-semibold text-accent-indigo">Analytics Dashboard:</span> Visualized key metrics like words spoken, filler words, speaking speed, and the AI's final score.</li>
            </ul>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">Architecture Flow:</h4>
            <p class="font-mono text-sm text-gray-400">Frontend (Next.js) → Audio Streaming (Vapi SDK) → Gemini AI Processing → Firebase Storage (session data) → Dashboard Analytics UI</p>
            <p class="mt-4 text-gray-300">The biggest lesson was that integrating powerful AI tools requires robust error handling and fallback logic to maintain a smooth user experience when real-time latency fluctuates.</p>
        `
    },
    "blog4": {
        title: "The 5 Pillars of Designing a Scalable PostgreSQL Schema",
        content: `
            <p class="mb-4">A database schema is the blueprint of a full-stack application. Designing it incorrectly can lead to performance bottlenecks that even the best caching can't fix. Here are the 5 pillars I used on projects like ReadFlow and MediLink using PostgreSQL and Drizzle ORM.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">1. Proper Indexing:</h4>
            <p class="mb-4">Index all foreign keys and columns frequently used in WHERE clauses or ORDER BY. For example, indexing 'book_title' in ReadFlow was essential for fast search functionality.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">2. Relationships (Foreign Keys):</h4>
            <p class="mb-4">Always use foreign keys to maintain referential integrity. In MediLink, ensuring every 'appointment' links to a valid 'patient' prevents orphaned records and data corruption.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">3. Normalization (To 3NF):</h4>
            <p class="mb-4">Start with 3rd Normal Form to eliminate data redundancy. This makes updates easier and database size smaller, which is crucial for transactional systems.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">4. Strategic Denormalization:</h4>
            <p class="mb-4">For heavy read-systems (like the ReadFlow dashboard), strategically denormalize by adding frequently requested data (e.g., patient name) into the related table (e.g., appointment table) to avoid slow JOINs.</p>
            <h4 class="text-xl font-semibold text-accent-purple mb-2">5. Use UUIDs/GUIDs:</h4>
            <p class="mb-4">Using Universally Unique Identifiers (UUIDs) instead of sequential integer IDs prevents database enumeration attacks and is better for distributed systems, providing a layer of security and scalability.</p>
        `
    },
    "blog5": {
        title: "10 Lessons I Learned After Building 6 Full Stack Projects",
        content: `
            <p class="mb-4">After delivering 6+ real-world projects, I’ve refined my process. Here are the key non-coding lessons learned about building REAL, production-ready systems:</p>
            <ol class="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                <li><span class="font-semibold text-accent-indigo">System Design Matters from Day 1:</span> Building without planning causes problems later.</li>
                <li><span class="font-semibold text-accent-indigo">Database Schema Is the Heart of the App:</span> Good tables lead to fast APIs, bad tables lead to pain forever.</li>
                <li><span class="font-semibold text-accent-indigo">Caching Makes Apps FEEL Fast:</span> Redis taught me this lesson on performance.</li>
                <li><span class="font-semibold text-accent-indigo">Authentication Isn’t Just “Login/Signup”:</span> It includes sessions, JWTs, refresh tokens, role-based access, secure routes, and hashing.</li>
                <li><span class="font-semibold text-accent-indigo">UI/UX Makes or Breaks a Dashboard:</span> Using Tailwind + ShadCN made my UIs professional.</li>
                <li><span class="font-semibold text-accent-indigo">Microservices Are Not For All Apps:</span> But they are perfect for complex SaaS platforms (like ShopSphere).</li>
                <li><span class="font-semibold text-accent-indigo">AI Integration Requires Reliable Architecture:</span> Building VoxInterview taught me the needs of real-time systems.</li>
                <li><span class="font-semibold text-accent-indigo">Logs + Monitoring Save Lives:</span> Debugging becomes much easier with proper logging.</li>
                <li><span class="font-semibold text-accent-indigo">Deployment Is a Skill:</span> AWS, Vercel, and Docker aren't magic—they require careful setup.</li>
            </ol>
        `
    },
    "blog6": {
        title: "My Top 10 Tools as a Full-Stack Developer",
        content: `
            <p class="mb-4">The right tools are essential for efficiency, debugging, and productivity. These are the tools that are currently indispensable in my day-to-day full-stack workflow:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>VS Code: My primary editor for its extensions and integrated terminal.</li>
                <li>Postman: Essential for testing all my Node.js/Express.js REST API endpoints.</li>
                <li>Drizzle ORM: My preferred ORM for TypeScript and PostgreSQL due to its type safety.</li>
                <li>Tailwind CSS: For rapid, utility-first styling and component building.</li>
                <li>ShadCN UI: For pre-built, accessible, and easily customizable React components.</li>
                <li>Redis: For implementing fast, in-memory caching layers to boost performance.</li>
                <li>Figma: Used for creating the initial wireframes and high-fidelity UI/UX mockups.</li>
                <li>Git/GitHub: For version control, collaboration, and deployment workflows.</li>
                <li>Vercel: My go-to for deploying Next.js frontends and serverless functions.</li>
                <li>Docker (Basic): For containerizing my backend services for consistent deployment environments.</li>
            </ul>
        `
    }
};

// --- Theme Toggle Functionality ---
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Default to dark mode (as body class is primary-dark)
    document.documentElement.classList.add('dark');
    setThemeIcon('moon');

    // Function to set the icon (Sun for Light, Moon for Dark)
    function setThemeIcon(mode) {
        if (mode === 'light') {
            // Sun icon (for switching to dark mode)
            themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>`;
        } else {
            // Moon icon (for switching to light mode, although this portfolio is mostly dark-themed)
            themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>`;
        }
    }

    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        
        // This portfolio is a dark-only theme, but we keep the logic structure.
        if (document.documentElement.classList.contains('dark')) {
            setThemeIcon('moon');
        } else {
            setThemeIcon('light');
        }
    });
}

// --- Modal Functionality (For Projects and Articles) ---
function initializeContentModal() {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-project-title');
    const modalContent = document.getElementById('modal-project-content');
    const modalTech = document.getElementById('modal-project-tech'); 
    const modalActions = document.getElementById('modal-project-actions'); 
    const modalGithubLink = document.getElementById('modal-github-link'); 
    const closeButton = document.getElementById('project-modal-close');
    const contentButtons = document.querySelectorAll('[data-project-id], [data-article-id]');
    
    // The CSS transition duration is 300ms
    const transitionDuration = 300; 

    // Function to open the modal
    function openModal(id) {
        const data = projectData[id];
        if (data) {
            modalTitle.textContent = data.title;
            modalContent.innerHTML = data.content;
            
            // Handle Tech Stack & GitHub Link Visibility
            if (data.tech && data.github) {
                // Project Case Study
                modalTech.textContent = `Tech Stack: ${data.tech}`;
                modalGithubLink.href = data.github;
                modalGithubLink.classList.remove('hidden');
                modalActions.classList.remove('hidden');
            } else {
                // Article/Blog Content
                modalTech.textContent = "Engineering Insight";
                modalGithubLink.href = "#"; 
                modalGithubLink.classList.add('hidden');
                modalActions.classList.add('hidden'); // Hide the entire action bar if no link
            }
            
            // 1. Remove 'hidden' immediately to make it visible
            modal.classList.remove('hidden');

            // 2. Add classes on the next tick to trigger the CSS fade-in
            setTimeout(() => {
                modal.classList.remove('opacity-0', 'pointer-events-none');
                modal.classList.add('opacity-100');
            }, 10); // Small delay to ensure CSS registers 'hidden' removal first
            
            document.body.style.overflow = 'hidden'; // Prevent scrolling background
        }
    }

    // Function to close the modal
    function closeModal() {
        // 1. Start the fade-out transition
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0', 'pointer-events-none');
        
        // 2. After the transition completes (300ms), apply 'hidden'
        setTimeout(() => {
            modal.classList.add('hidden');
        }, transitionDuration); 

        document.body.style.overflow = ''; // Restore scrolling
    }

    // Event listeners for all buttons
    contentButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-project-id') || button.getAttribute('data-article-id');
            openModal(id);
        });
    });

    // Close listeners
    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        // Only close if the background/backdrop is clicked, not the content card itself
        if (e.target === modal) {
            closeModal();
        }
    });

    // Add CSS for the new GitHub link button styling (for consistency)
    const style = document.createElement('style');
    style.textContent = `
        .github-link-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem 1rem;
            background-color: #24292e; /* GitHub dark color */
            color: #ffffff;
            font-weight: 600;
            border-radius: 0.375rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .github-link-btn:hover {
            background-color: #000000;
            transform: scale(1.05);
        }
        .project-details-btn {
            /* Keep existing style, but ensure it sits next to the GitHub button */
            display: inline-block;
            padding: 0.5rem 1rem;
            background-color: var(--accent-purple);
            color: white;
            font-weight: 600;
            border-radius: 0.375rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(20, 184, 166, 0.4);
        }
        .project-details-btn:hover {
            background-color: var(--accent-indigo);
            transform: scale(1.05);
        }
    `;
    document.head.appendChild(style);
}

// --- Contact Form Functionality ---
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('contact-form-status');
    const submitButton = document.getElementById('submit-button');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Disable button and show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        status.textContent = '';
        status.className = 'text-center font-medium mt-3';

        const data = new FormData(form);
        const url = form.action;
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.textContent = 'Thank you! Your message has been sent successfully.';
                status.classList.add('text-accent-purple');
                form.reset();
            } else {
                const responseData = await response.json();
                if (responseData.errors) {
                    status.textContent = responseData.errors.map(error => error.message).join(', ');
                } else {
                    status.textContent = 'Oops! There was an error sending your message.';
                }
                status.classList.add('text-red-500');
            }
        } catch (error) {
            status.textContent = 'Oops! Network error or server issue.';
            status.classList.add('text-red-500');
        } finally {
            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
        }
    });
}