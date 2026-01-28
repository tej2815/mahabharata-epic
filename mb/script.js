/**
 * Mahabharata Epic Website - Interactive JavaScript
 * Smooth animations, scroll effects, and interactivity
 */

// ========== Preloader ==========
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500);
});

// ========== Navbar Scroll Effect ==========
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========== Smooth Scroll for Navigation ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== Parallax Effect on Hero Image ==========
const heroImage = document.querySelector('.parallax-image');
const hero = document.querySelector('.hero');

if (heroImage && hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBottom = hero.offsetTop + hero.offsetHeight;

        if (scrolled < heroBottom) {
            const parallaxValue = scrolled * 0.5;
            heroImage.style.transform = `translateY(${parallaxValue}px) scale(1.1)`;
        }
    });
}

// ========== Reveal on Scroll Animation ==========
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

// Initial check on page load
revealOnScroll();

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// ========== Parva Cards Hover Effect ==========
const parvaCards = document.querySelectorAll('.parva-card');

parvaCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ========== Family Tree Interactive Nodes ==========
const treeNodes = document.querySelectorAll('.tree-node');

treeNodes.forEach(node => {
    node.addEventListener('click', function () {
        // Remove active class from all nodes
        treeNodes.forEach(n => n.classList.remove('node-active'));

        // Add active class to clicked node
        this.classList.add('node-active');

        // Get character data
        const charData = this.getAttribute('data-char');
        const nodeName = this.querySelector('.node-name').textContent;
        const nodeTitle = this.querySelector('.node-title').textContent;

        // Create a subtle pulse effect
        this.style.animation = 'node-pulse 0.6s ease-out';
        setTimeout(() => {
            this.style.animation = '';
        }, 600);

        // Log for demonstration (can be expanded for modal/tooltip)
        console.log(`Selected: ${nodeName} - ${nodeTitle}`);
    });

    // Hover effect with glow
    node.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s ease';
    });
});

// ========== Add CSS animation for node pulse ==========
const style = document.createElement('style');
style.textContent = `
    @keyframes node-pulse {
        0% { transform: translateY(-5px) scale(1.05); }
        50% { transform: translateY(-8px) scale(1.1); }
        100% { transform: translateY(-5px) scale(1.05); }
    }
    
    .node-active {
        background: linear-gradient(135deg, rgba(255, 182, 39, 0.2), rgba(79, 195, 247, 0.2)) !important;
        border-width: 3px !important;
    }
`;
document.head.appendChild(style);

// ========== Scroll Progress Indicator (Optional Enhancement) ==========
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--divine-gold), var(--saffron), var(--celestial-blue));
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.pageYOffset;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = progress + '%';
    });
};

createScrollProgress();

// ========== Dynamic Parva Counter Animation ==========
const animateParvaNumbers = () => {
    const parvaNumbers = document.querySelectorAll('.parva-number');

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                entry.target.style.transform = 'scale(1)';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    parvaNumbers.forEach((number, index) => {
        number.style.transform = 'scale(0.8)';
        number.style.opacity = '0.5';
        observer.observe(number);
    });
};

animateParvaNumbers();

// ========== Enhanced Cursor Effect for Premium Feel ==========
const createCursorEffect = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(255, 182, 39, 0.3);
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.2s ease, opacity 0.3s ease;
        opacity: 0;
        mix-blend-mode: screen;
    `;
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    // Smooth cursor follow
    const animateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';

        requestAnimationFrame(animateCursor);
    };

    animateCursor();

    // Expand cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .tree-node, .parva-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'rgba(255, 182, 39, 0.5)';
        });

        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'rgba(255, 182, 39, 0.3)';
        });
    });
};

// Only create custom cursor on desktop devices
if (window.innerWidth > 768) {
    createCursorEffect();
}

// ========== Floating Particles Background (Optional Enhancement) ==========
const createFloatingParticles = () => {
    const particleCount = 30;
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
    `;

    document.body.insertBefore(particleContainer, document.body.firstChild);

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 3 + 1;
        const startX = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(255, 182, 39, 0.6), transparent);
            border-radius: 50%;
            left: ${startX}%;
            bottom: -10%;
            animation: float-up ${duration}s linear ${delay}s infinite;
            opacity: ${Math.random() * 0.5 + 0.2};
        `;

        particleContainer.appendChild(particle);
    }

    // Add animation
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes float-up {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 40 - 20}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);
};

// Create particles for enhanced atmosphere
createFloatingParticles();

// ========== Quote Rotation Effect (Future Enhancement) ==========
const geetaQuotes = [
    {
        text: "You have the right to work, but never to the fruit of work.",
        chapter: "2.47"
    },
    {
        text: "The soul is neither born, and nor does it die.",
        chapter: "2.20"
    },
    {
        text: "Change is the law of the universe.",
        chapter: "2.22"
    },
    {
        text: "One who sees inaction in action, and action in inaction, is intelligent among men.",
        chapter: "4.18"
    }
];

// Log quotes for potential future use
console.log('Bhagavad Gita Quotes Loaded:', geetaQuotes.length);

// ========== Performance Optimization ==========
// Debounce scroll events for better performance
let scrollTimeout;
const optimizedScrollHandler = () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(() => {
        // Scroll-dependent animations run here
    });
};

window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

// ========== Accessibility Enhancements ==========
// Keyboard navigation for family tree
treeNodes.forEach((node, index) => {
    node.setAttribute('tabindex', '0');
    node.setAttribute('role', 'button');
    node.setAttribute('aria-label', `${node.querySelector('.node-name').textContent} - ${node.querySelector('.node-title').textContent}`);

    node.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            node.click();
        }
    });
});

// ========== Console Easter Egg ==========
console.log(`
%c
महाभारतम्
MAHABHARATA
`, 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #ffb627, #ff6b35); -webkit-background-clip: text; color: transparent;');

console.log('%cWelcome to the greatest epic ever told!', 'font-size: 14px; color: #4fc3f7;');
console.log('%c"यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।"', 'font-size: 12px; color: #ffb627; font-style: italic;');
console.log('%cWhenever there is a decline of dharma, O Bharata... - Bhagavad Gita 4.7', 'font-size: 11px; color: #888;');

// ========== Ready State ==========
console.log('%c✓ Website fully loaded and interactive', 'color: #4fc3f7; font-weight: bold;');
