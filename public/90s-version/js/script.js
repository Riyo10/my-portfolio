// 90s JAVASCRIPT - TOTALLY AWESOME!

// Show welcome alert when page loads
window.addEventListener('load', function() {
    // Annoying alert popup (classic 90s!)
    // welcome alert removed
    
    // Update last modified date
    updateLastModified();
    
    // visitor counter removed
    
    // Random background color change (optional - uncomment to enable)
    // setInterval(randomBgColor, 5000);
});

// Visitor counter logic removed

// Update last modified date
function updateLastModified() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        lastModifiedElement.textContent = now.toLocaleDateString('en-US', options);
    }
}

// Contact form submission
function submitForm() {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    
    if (!name || !email || !subject || !message) {
        alert('⚠️ OOPS! ⚠️\n\nPlease fill out ALL fields before submitting!\n\nThanks! 😊');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('⚠️ INVALID EMAIL! ⚠️\n\nPlease enter a valid email address!\n\nExample: your.name@email.com');
        return false;
    }
    
    // Show success message
    alert('✉️ MESSAGE SENT! ✉️\n\nThank you ' + name + '!\n\nYour message has been received!\n\nI\'ll get back to you ASAP! 🚀');
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    // Add to guestbook (in a real app, this would save to a database)
    addGuestbookEntry(name, message);
    
    return false; // Prevent actual form submission
}

// Add entry to guestbook
function addGuestbookEntry(name, message) {
    console.log('📝 New Guestbook Entry:');
    console.log('Name:', name);
    console.log('Message:', message);
    console.log('Date:', new Date().toLocaleString());
}

// Random background color (commented out by default)
function randomBgColor() {
    const colors = ['#000080', '#800080', '#008080', '#808000', '#800000'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
    
    if (konamiCode.join('').includes(konamiSequence.join(''))) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    alert('🎮 KONAMI CODE ACTIVATED! 🎮\n\nYou found the secret!\n\n🌟 YOU ARE A TRUE 90s KID! 🌟');
    document.body.style.animation = 'rainbow 2s infinite';
}

// Right-click protection (very 90s!)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('⛔ NO RIGHT-CLICKING! ⛔\n\nThis content is protected!\n\n© 1999-2026 Supriyo Maity');
    return false;
});

// Fun cursor trail effect (optional)
let cursorTrail = [];
const maxTrail = 10;

document.addEventListener('mousemove', function(e) {
    cursorTrail.push({ x: e.pageX, y: e.pageY, time: Date.now() });
    
    // Keep only last maxTrail positions
    if (cursorTrail.length > maxTrail) {
        cursorTrail.shift();
    }
});

// Random sparkle on click
document.addEventListener('click', function(e) {
    createSparkle(e.pageX, e.pageY);
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'absolute';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '20px';
    sparkle.style.height = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.textContent = '✨';
    sparkle.style.animation = 'float 1s ease-out forwards';
    sparkle.style.zIndex = '9999';
    
    document.body.appendChild(sparkle);
    
    setTimeout(function() {
        sparkle.remove();
    }, 1000);
}

// Current date and time display
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const dateTimeElements = document.querySelectorAll('.current-datetime');
    dateTimeElements.forEach(function(element) {
        element.textContent = dateTimeString;
    });
}

// Update time every second
setInterval(updateDateTime, 1000);

// Status bar messages (like old browsers)
const statusMessages = [
    '🌟 Welcome to my homepage!',
    '💻 Best viewed in Netscape Navigator',
    '🚀 Loading awesome content...',
    '✨ Thank you for visiting!',
    '🎮 Don\'t forget to sign my guestbook!',
    '🔥 This site is 🔥!',
    '⭐ Thanks for visiting!'
];

let messageIndex = 0;

function rotateStatusMessage() {
    window.status = statusMessages[messageIndex];
    messageIndex = (messageIndex + 1) % statusMessages.length;
}

// Rotate status messages
setInterval(rotateStatusMessage, 3000);

// Console message for fellow developers
console.log('%c🌈 WELCOME TO THE 90s! 🌈', 'font-size: 20px; color: #FF00FF; font-weight: bold; text-shadow: 2px 2px #FFFF00;');
console.log('%cIf you\'re reading this, you\'re a TRUE web developer! 💻', 'font-size: 14px; color: #00FFFF;');
console.log('%cBuilt with ❤️ and nostalgia by Supriyo Maity', 'font-size: 12px; color: #00FF00;');
console.log('%c© 1999-2026 | All Rights Reserved', 'font-size: 10px; color: #FFFFFF;');

// Browser detection (very 90s!)
function detectBrowser() {
    const userAgent = navigator.userAgent;
    let browserName = 'Unknown Browser';
    
    if (userAgent.indexOf('Firefox') > -1) {
        browserName = 'Firefox';
    } else if (userAgent.indexOf('Chrome') > -1) {
        browserName = 'Chrome';
    } else if (userAgent.indexOf('Safari') > -1) {
        browserName = 'Safari';
    } else if (userAgent.indexOf('Edge') > -1) {
        browserName = 'Edge';
    } else if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1) {
        browserName = 'Internet Explorer';
    }
    
    console.log('👀 Detected browser:', browserName);
}

detectBrowser();

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 90s Website Initialized!');
    updateDateTime();
});
