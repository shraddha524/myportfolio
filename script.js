document.addEventListener('DOMContentLoaded', function() {
    // --- 1. Typed Text Effect for Home Section ---
    const typedTextElement = document.querySelector('.typed-text');
    if (typedTextElement) {
        const items = typedTextElement.getAttribute('data-typed-items').split(', ');
        let itemIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = items[itemIndex];
            
            if (isDeleting) {
                // Deleting phase
                charIndex--;
            } else {
                // Typing phase
                charIndex++;
            }

            typedTextElement.textContent = currentText.substring(0, charIndex);

            let typingSpeed = 100;

            if (isDeleting) {
                typingSpeed /= 2; // Faster deletion
            }

            if (!isDeleting && charIndex === currentText.length) {
                // Done typing, wait a moment, then start deleting
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Done deleting, move to next item
                isDeleting = false;
                itemIndex = (itemIndex + 1) % items.length;
                typingSpeed = 500; // Pause before new word starts
            }

            setTimeout(type, typingSpeed);
        }
        type();
    }


    // --- 2. Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // For non-looping animations like skills bars, stop observing once visible
                if (entry.target.id === 'skills') {
                    animateSkills();
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
    
    // Also apply observer to specific animated elements that are not full sections
    document.querySelectorAll('.animate-slide-up, .animate-slide-left, .animate-slide-right, .animate-fade-in, .animate-scale-up').forEach(element => {
        // Only observe elements that are NOT already children of a .section (to avoid double-observing)
        if (!element.closest('.section')) {
             observer.observe(element);
        }
    });

    // --- 3. Skills Progress Animation ---
    function animateSkills() {
        // Professional Skills
        document.querySelectorAll('.progress-fill').forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            // Animate only if it's within the visible section (which is handled by the main observer)
            bar.style.width = progress + '%';
        });

        // Soft Skills (Circle Progress)
        document.querySelectorAll('.skill-circle-progress').forEach(container => {
            const percent = container.getAttribute('data-percent');
            const circumference = 2 * Math.PI * 15.9155; // Calculated from R=15.9155
            const dashoffset = circumference - (percent / 100) * circumference;
            
            const circleFill = container.querySelector('.circle-fill');
            circleFill.style.strokeDasharray = `${circumference} ${circumference}`;
            circleFill.style.strokeDashoffset = dashoffset;
        });
    }


    // --- 4. Simple Chatbot Logic ---
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotBox = document.getElementById('chatbot-box');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Show/Hide Chatbot
    chatbotToggle.addEventListener('click', () => {
        chatbotBox.classList.toggle('open');
        // Initial bot message if opening for the first time
        if (chatbotBox.classList.contains('open') && chatbotMessages.children.length === 0) {
            setTimeout(() => {
                appendMessage('bot', 'Hi! I\'m Shraddha\'s portfolio assistant. Ask me about her skills, projects, or background.');
            }, 300);
        }
    });

    chatbotClose.addEventListener('click', () => {
        chatbotBox.classList.remove('open');
    });

    // Send Message
    chatbotForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const userMessage = chatbotInput.value.trim();
        if (userMessage === '') return;

        appendMessage('user', userMessage);
        chatbotInput.value = '';
        
        // Get bot response after a brief delay
        setTimeout(() => {
            getBotResponse(userMessage);
        }, 800);
    });

    function appendMessage(sender, text) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', `${sender}-message`);
        msgDiv.textContent = text;
        chatbotMessages.appendChild(msgDiv);
        // Scroll to the latest message
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getBotResponse(message) {
        const lowerCaseMsg = message.toLowerCase();
        let response = "I'm sorry, I can only answer questions related to Shraddha's portfolio (skills, projects, education). Can you try asking about her experience with React, Python, or the 'I Am Safe' project?";
        
        if (lowerCaseMsg.includes('hello') || lowerCaseMsg.includes('hi')) {
            response = "Hello! I'm happy to help. What would you like to know about Shraddha's technical skills or projects?";
        } else if (lowerCaseMsg.includes('skill') || lowerCaseMsg.includes('tech') || lowerCaseMsg.includes('language')) {
            response = "Shraddha's core skills are **React/Next.js**, **JavaScript**, **Python/Django**, **AWS/Docker**, and **SQL/NoSQL**. She is Meta-certified in Front-End Development.";
        } else if (lowerCaseMsg.includes('project') || lowerCaseMsg.includes('work')) {
            response = "Shraddha has built three major projects: **ShopSphere** (Multi-Vendor E-Commerce SaaS), **MediLink** (Patient Management System), and **I Am Safe** (Women's Safety App).";
        } else if (lowerCaseMsg.includes('react') || lowerCaseMsg.includes('frontend') || lowerCaseMsg.includes('meta')) {
            response = "She is Meta-certified and proficient in React, Next.js, and modern CSS frameworks like Tailwind CSS, focusing on clean, responsive UI/UX.";
        } else if (lowerCaseMsg.includes('python') || lowerCaseMsg.includes('django') || lowerCaseMsg.includes('backend')) {
             response = "Shraddha has hands-on experience with Python and Django for building robust backends, including setting up APIs and managing databases for scalable applications.";
        } else if (lowerCaseMsg.includes('safe') || lowerCaseMsg.includes('i am safe')) {
            response = "**I Am Safe** is a Women's Safety App she developed that uses real-time GPS tracking and SOS alerts, reportedly improving emergency response time by ~40%.";
        } else if (lowerCaseMsg.includes('education') || lowerCaseMsg.includes('college')) {
            response = "Shraddha holds a Bachelor of Computer Applications (BCA) from Alva's College, with a focus on DSA, DBMS, and Web Technologies.";
        } else if (lowerCaseMsg.includes('contact') || lowerCaseMsg.includes('email')) {
             response = "You can contact Shraddha via email at **shraddhamoily392@gmail.com** or phone at **+91-9945185153**.";
        }

        appendMessage('bot', response);
    }
});