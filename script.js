// =========================================
// 1. Intersection Observer for Animations
// =========================================
const animateElements = document.querySelectorAll(
    '.animate-fade-in, .animate-slide-up, .animate-slide-right, .animate-slide-left, .animate-scale-up'
);

const observerOptions = {
    root: null, // viewport
    threshold: 0.1, // 10% of element visible
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// FIX APPLIED: Simplified the observer loop to observe all animated elements
animateElements.forEach(element => {
    observer.observe(element);
});


// =========================================
// 2. Typing Effect for Home Section
// =========================================
document.addEventListener('DOMContentLoaded', function() {
    const typedTextElement = document.querySelector('.typed-text');
    if (!typedTextElement) return;

    const items = typedTextElement.getAttribute('data-typed-items').split(',').map(item => item.trim());
    let itemIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // milliseconds
    const deletingSpeed = 50; // milliseconds
    const pauseBeforeDelete = 1500; // milliseconds
    const pauseBeforeType = 500; // milliseconds

    function type() {
        const currentItem = items[itemIndex];

        if (isDeleting) {
            // Deleting phase
            typedTextElement.textContent = currentItem.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing phase
            typedTextElement.textContent = currentItem.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentItem.length) {
            // End of typing, start deleting after a pause
            speed = pauseBeforeDelete;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // End of deleting, move to next item
            isDeleting = false;
            itemIndex = (itemIndex + 1) % items.length;
            speed = pauseBeforeType;
        }

        setTimeout(type, speed);
    }

    // Start the typing effect
    setTimeout(type, 500);
});

// =========================================
// 3. Progress Bar Animations (Skills)
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-fill');

    const progressObserverOptions = {
        root: null,
        threshold: 0.5 // Trigger when 50% of the bar is visible
    };

    const progressObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const percentage = entry.target.getAttribute('data-progress');
                entry.target.style.width = percentage + '%';
                observer.unobserve(entry.target);
            }
        });
    }, progressObserverOptions);

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
});

// =========================================
// 4. Soft Skills Circle Progress Animation
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const skillContainers = document.querySelectorAll('.skill-circle-progress');

    const circleObserverOptions = {
        root: null,
        threshold: 0.7 // Trigger when 70% of the circle is visible
    };

    const circleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const percent = entry.target.getAttribute('data-percent');
                const circleFill = entry.target.querySelector('.circle-fill');

                // Circumference is 2 * pi * radius. For r=15.9155, C is approx 100.
                const circumference = 100; 
                const offset = circumference - (percent / 100) * circumference;
                
                circleFill.style.strokeDashoffset = offset;
                observer.unobserve(entry.target);
            }
        });
    }, circleObserverOptions);

    skillContainers.forEach(container => {
        circleObserver.observe(container);
    });
});

// =========================================
// 5. Chatbot Functionality
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('chatbot-toggle');
    const closeButton = document.getElementById('chatbot-close');
    const chatbox = document.getElementById('chatbot-box');
    const form = document.getElementById('chatbot-form');
    const input = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');

    if (!toggleButton || !closeButton || !chatbox || !form || !messagesContainer) return;

    // Toggle Chatbot visibility
    toggleButton.addEventListener('click', () => {
        const isOpen = chatbox.classList.toggle('open');
        chatbox.setAttribute('aria-hidden', !isOpen);
        toggleButton.setAttribute('aria-label', isOpen ? 'Close chat' : 'Open chat');
    });

    closeButton.addEventListener('click', () => {
        chatbox.classList.remove('open');
        chatbox.setAttribute('aria-hidden', true);
        toggleButton.setAttribute('aria-label', 'Open chat');
    });

    // Helper function to display a message
    function displayMessage(text, sender) {
        const messageElement = document.createElement('p');
        messageElement.classList.add('message', sender === 'bot' ? 'bot-message' : 'user-message');
        
        // Simple markdown parsing for bold text
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        messageElement.innerHTML = text;

        messagesContainer.appendChild(messageElement);
        // Scroll to the latest message
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Initial greeting from the bot
    displayMessage("Hi! I'm Shraddha's portfolio assistant. I can answer questions about her skills, projects, and experience. What would you like to know?", 'bot');

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userMessage = input.value.trim();

        if (userMessage) {
            displayMessage(userMessage, 'user');
            input.value = ''; // Clear input

            // Simulate bot response
            setTimeout(() => {
                const botResponse = getBotResponse(userMessage);
                displayMessage(botResponse, 'bot');
            }, 1000);
        }
    });

    // Simple Bot Response Logic
    function getBotResponse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes('skill') || lowerCaseMessage.includes('tech') || lowerCaseMessage.includes('framework')) {
            return "Shraddha is strong in **Front-End (React, Next.js, JavaScript, HTML/CSS/TailwindCSS)** and has experience in **Back-End (Python/Django)** and **Cloud (AWS/Docker)**. She also excels at Problem Solving and Creativity.";
        } else if (lowerCaseMessage.includes('project')) {
            return "Shraddha's key projects include **ShopSphere** (E-Commerce SaaS), **MediLink** (Patient Management System), and **I Am Safe** (Women's Safety App). You can find them under the 'Projects' section.";
        } else if (lowerCaseMessage.includes('behind the scenes') || lowerCaseMessage.includes('architecture') || lowerCaseMessage.includes('challenge')) {
            return "The 'Behind the Scenes' section details the development of **ShopSphere**, covering the **Microservice Architecture**, the challenges of **real-time updates** and **CDN optimization**, and the lessons learned in **Resilience Engineering**.";
        } else if (lowerCaseMessage.includes('contact')) {
            return "You can reach Shraddha at **shraddhamoily392@gmail.com** or call her at **+91-9945185153**.";
        } else if (lowerCaseMessage.includes('education') || lowerCaseMessage.includes('college')) {
            return "Shraddha holds a **Bachelor of Computer Applications (BCA)** from Alva's College, Moodbidri (2023).";
        } else if (lowerCaseMessage.includes('internship') || lowerCaseMessage.includes('experience')) {
            return "She completed an internship as a **Python Programming Intern** at YBI Foundation, automating workflows and optimizing code.";
        } else if (lowerCaseMessage.includes('certif')) {
            return "Shraddha is **Meta Front-End Developer Certified** and holds certifications in **CSPE, JavaScript Algorithms, and Machine Learning with Python**.";
        } else if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
            return "Hello there! How can I assist you with Shraddha's portfolio today?";
        } else {
            return "I'm sorry, I can only provide information about Shraddha's portfolio (Skills, Projects, Education, Contact). Can you rephrase your question?";
        }
    }
});


// =========================================
// 6. Tech Stack Visualizer (Mind Map)
// =========================================

const techStackData = [
    { name: 'React/Next.js', icon: 'fab fa-react', usedIn: 'MediLink, ShopSphere (Front-End)', skill: '85% (High)', micro: 'Scalable state management, SSR/Routing in Next.js' },
    { name: 'Python/Django', icon: 'fab fa-python', usedIn: 'ShopSphere (Back-End)', skill: '80% (Mid-High)', micro: 'Microservice APIs, Complex data modeling, Debugging' },
    { name: 'JavaScript/TS', icon: 'fab fa-js', usedIn: 'All Projects', skill: '90% (Expert)', micro: 'DOM manipulation, API calls, TypeScript type safety' },
    { name: 'AWS/Docker', icon: 'fab fa-aws', usedIn: 'ShopSphere Deployment', skill: '70% (Intermediate)', micro: 'Containerization, Deployment on Fargate/ECS concepts' },
    { name: 'PostgreSQL/SQL', icon: 'fas fa-database', usedIn: 'MediLink, ShopSphere', skill: '75% (Intermediate)', micro: 'Complex schema design, Performance optimization' },
    { name: 'HTML/CSS/Tailwind', icon: 'fas fa-laptop-code', usedIn: 'All Projects', skill: '95% (Expert)', micro: 'Responsive design, Component styling with TailwindCSS' }
];

document.addEventListener('DOMContentLoaded', () => {
    const visualizerContainer = document.querySelector('.visualizer-container');
    const nodesContainer = document.getElementById('tech-map-nodes');
    const svg = document.getElementById('tech-map-svg');
    const centerNode = document.getElementById('tech-map-center');
    const detailsBox = document.getElementById('tech-details-box');
    
    if (!visualizerContainer || !nodesContainer || !svg || !centerNode || !detailsBox) return;

    // Get the computed size of the container (needed for dynamic positioning)
    const containerSize = visualizerContainer.clientWidth;
    const center = containerSize / 2;
    const radius = center * 0.7; // Radius for the circular arrangement

    // Function to calculate node position
    function calculatePosition(index, total) {
        const angle = (index / total) * 2 * Math.PI;
        // Adjust angle to start from the top
        const x = center + radius * Math.sin(angle);
        const y = center - radius * Math.cos(angle); 
        return { x: x - 50, y: y - 50 }; // Adjust for node size (100px width/height in CSS)
    }

    // 1. Render Nodes and Lines
    techStackData.forEach((tech, index) => {
        const total = techStackData.length;
        const pos = calculatePosition(index, total);

        // Create Node Element
        const node = document.createElement('div');
        node.className = 'map-node tech-node animate-scale-up';
        node.id = `tech-node-${index}`;
        node.style.left = `${pos.x}px`;
        node.style.top = `${pos.y}px`;
        // Use only the first name for the label if there's a slash
        const displayName = tech.name.split('/')[0]; 
        node.innerHTML = `<i class="${tech.icon}"></i><span>${displayName}</span>`;
        node.setAttribute('data-index', index);
        // Add delayed animation for staggered effect
        node.style.transitionDelay = `${index * 0.1}s`; 
        nodesContainer.appendChild(node);
    });

    // We must wait for the DOM to settle before getting positions for SVG lines
    // This is done in a minimal setTimeout after the loop finishes.
    setTimeout(() => {
        const techNodes = document.querySelectorAll('.tech-node');
        const containerRect = visualizerContainer.getBoundingClientRect();
        const centerNodeRect = centerNode.getBoundingClientRect();

        const cX = centerNodeRect.left + centerNodeRect.width / 2 - containerRect.left;
        const cY = centerNodeRect.top + centerNodeRect.height / 2 - containerRect.top;

        svg.setAttribute('width', containerSize);
        svg.setAttribute('height', containerSize);

        techNodes.forEach((node, index) => {
            const nodeRect = node.getBoundingClientRect();
            
            const nX = nodeRect.left + nodeRect.width / 2 - containerRect.left;
            const nY = nodeRect.top + nodeRect.height / 2 - containerRect.top;

            const line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
            line.setAttribute('x1', cX);
            line.setAttribute('y1', cY);
            line.setAttribute('x2', nX);
            line.setAttribute('y2', nY);
            line.classList.add('connection-line');
            line.id = `line-${index}`;
            svg.appendChild(line);
        });

        // 2. Add Hover/Click Interaction
        function updateDetails(index) {
            const data = techStackData[index];
            document.getElementById('detail-tech-name').textContent = data.name;
            document.getElementById('detail-used-in').textContent = data.usedIn;
            document.getElementById('detail-expertise').textContent = data.skill;
            document.getElementById('detail-micro-tasks').textContent = data.micro;
        }

        function handleHover(event, isEntering) {
            const targetNode = event.currentTarget;
            const index = parseInt(targetNode.getAttribute('data-index'));
            const line = document.getElementById(`line-${index}`);

            // Clear active state from all
            document.querySelectorAll('.tech-node').forEach(n => n.classList.remove('active'));
            document.querySelectorAll('.connection-line').forEach(l => l.classList.remove('active'));

            if (isEntering) {
                targetNode.classList.add('active');
                line.classList.add('active');
                updateDetails(index);
                detailsBox.classList.add('visible');
            } else {
                 // Use setTimeout to allow smooth transition between nodes
                 setTimeout(() => {
                    // Check if the cursor is still over any node
                    if (!document.querySelector('.tech-node:hover')) { 
                        detailsBox.classList.remove('visible');
                        document.getElementById('detail-tech-name').textContent = 'Hover over a node';
                        document.getElementById('detail-used-in').textContent = 'View project context.';
                        document.getElementById('detail-expertise').textContent = 'See skill level and proficiency.';
                        document.getElementById('detail-micro-tasks').textContent = 'Specific tasks or small projects.';
                    }
                 }, 100);
            }
        }
        
        // Initial detail box setup (for default state)
        detailsBox.classList.add('visible'); // Start visible with instructions

        techNodes.forEach(node => {
            node.addEventListener('mouseenter', (e) => handleHover(e, true));
            node.addEventListener('mouseleave', (e) => handleHover(e, false));
        });

        // 3. Animate the Visualizer on scroll (using a dedicated observer if needed)
        const mapObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // The 'animate-scale-up' classes already on centerNode and techNodes handle the initial appearance
                    centerNode.classList.add('animated');
                    techNodes.forEach(node => node.classList.add('animated'));
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        mapObserver.observe(visualizerContainer);

    }, 500); // 500ms delay to ensure all DOM elements are rendered and positioned correctly
});