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

// FIX: Simplified the observer loop to ensure all animated elements (like the Internship card) are observed.
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