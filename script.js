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

// Observe all animated elements
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
    const deletingSpeed = 50;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

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
            // Finished typing, start pause before deleting
            speed = pauseBeforeDelete;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, move to next item
            isDeleting = false;
            itemIndex = (itemIndex + 1) % items.length;
            speed = pauseBeforeType;
        }

        setTimeout(type, speed);
    }

    type();
});


// =========================================
// 3. Progress Bar Logic for Skills Section
// =========================================
const skillsSection = document.getElementById('skills');
const progressFills = document.querySelectorAll('.progress-fill');

const skillObserverOptions = {
    root: null,
    threshold: 0.2, // Trigger when 20% of the section is visible
};

const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progressFills.forEach(fill => {
                const progress = fill.getAttribute('data-progress');
                fill.style.width = progress + '%';
            });
            
            // Soft Skill Circle Progress
            const circleProgresses = document.querySelectorAll('.skill-circle-progress');
            circleProgresses.forEach(progressContainer => {
                const percent = parseInt(progressContainer.getAttribute('data-percent'));
                // Calculation for circumference and offset for a circle with radius 15.9155
                const circumference = 2 * Math.PI * 15.9155; 
                const offset = circumference - (percent / 100) * circumference;
                
                const circleFill = progressContainer.querySelector('.circle-fill');
                circleFill.style.strokeDasharray = `${circumference} ${circumference}`;
                circleFill.style.strokeDashoffset = offset;

                // Set text percentage
                progressContainer.querySelector('.percent-text').textContent = `${percent}%`;
            });

            observer.unobserve(entry.target);
        }
    });
}, skillObserverOptions);

if (skillsSection) {
    skillObserver.observe(skillsSection);
}


// =========================================
// 4. Chatbot Functionality
// =========================================
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotBox = document.getElementById('chatbot-box');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotForm = document.getElementById('chatbot-form');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotMessages = document.getElementById('chatbot-messages');

if (chatbotToggle && chatbotBox && chatbotClose && chatbotForm) {
    
    chatbotToggle.addEventListener('click', () => {
        chatbotBox.classList.toggle('open');
        chatbotBox.setAttribute('aria-hidden', chatbotBox.classList.contains('open') ? 'false' : 'true');
        // Initial bot greeting
        if (chatbotBox.classList.contains('open') && chatbotMessages.children.length === 0) {
            setTimeout(() => {
                appendMessage("Hello! I'm Shraddha's AI Assistant. Ask me about her skills, projects, or contact info!", 'bot');
            }, 500);
        }
    });

    chatbotClose.addEventListener('click', () => {
        chatbotBox.classList.remove('open');
        chatbotBox.setAttribute('aria-hidden', 'true');
    });

    chatbotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            appendMessage(userMessage, 'user');
            chatbotInput.value = '';
            
            // Get and display bot response after a short delay
            setTimeout(() => {
                const botResponse = getBotResponse(userMessage);
                appendMessage(botResponse, 'bot');
            }, 800);
        }
    });

    function appendMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        messageElement.innerHTML = text; // Use innerHTML to allow bold tags
        chatbotMessages.appendChild(messageElement);
        // Scroll to the latest message
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Simple keyword-based response logic
    function getBotResponse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes('skill') || lowerCaseMessage.includes('tech')) {
            return "Shraddha is proficient in **React/Next.js (Frontend)**, **Python/Django (Backend)**, and technologies like **AWS, Docker, and JavaScript**. She's also certified in Meta Front-End Development.";
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
        } else if (lowerCaseMessage.includes('color') || lowerCaseMessage.includes('theme') || lowerCaseMessage.includes('design')) {
            // UPDATED: New color description
            return "The portfolio uses a **professional dark-mode** theme with deep navy backgrounds and a vibrant **coral accent** for a sleek, modern look.";
        } else if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
            return "Hello there! How can I assist you with Shraddha's portfolio today?";
        } else {
            return "I'm sorry, I can only provide information about Shraddha's portfolio (Skills, Projects, Education, Contact). Can you rephrase your question?";
        }
    }
}