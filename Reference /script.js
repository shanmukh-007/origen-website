// ===================================
// PREMIUM ORIGEN WEBSITE - JAVASCRIPT
// Advanced Animations with GSAP
// ===================================

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ===================================
// PAGE LOADER
// ===================================

window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    const loaderProgress = document.querySelector('.loader-progress');

    // Simulate loading
    gsap.to(loaderProgress, {
        width: '100%',
        duration: 2,
        ease: 'power2.inOut',
        onComplete: () => {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    loader.classList.add('hidden');
                    initAnimations();
                }
            });
        }
    });
});

// ===================================
// CUSTOM CURSOR
// ===================================

const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (cursor && cursorFollower) {
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.to(cursor, {
            x: mouseX,
            y: mouseY,
            duration: 0.1
        });
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;

        cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
        requestAnimationFrame(animateFollower);
    }

    animateFollower();

    // Cursor hover effects
    document.querySelectorAll('[data-cursor-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursorFollower, {
                scale: 1.5,
                duration: 0.3
            });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(cursorFollower, {
                scale: 1,
                duration: 0.3
            });
        });
    });
}

// ===================================
// PARTICLE BACKGROUND
// ===================================

const canvas = document.getElementById('particleCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = window.innerWidth < 768 ? 50 : 100;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(255, 107, 53, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.strokeStyle = `rgba(255, 107, 53, ${0.2 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        connectParticles();
        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===================================
// NAVIGATION
// ===================================

const navbar = document.getElementById('navbar');
const navProgress = document.querySelector('.nav-progress');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update progress bar
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    if (navProgress) {
        navProgress.style.width = scrolled + '%';
    }
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// GSAP ANIMATIONS
// ===================================

function initAnimations() {
    // Hero title animation
    const titleWords = document.querySelectorAll('.hero-title .title-word');
    if (titleWords.length > 0) {
        gsap.from(titleWords, {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out'
        });
    }

    // Hero description
    const descLines = document.querySelectorAll('.hero-description .desc-line');
    if (descLines.length > 0) {
        gsap.from(descLines, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.5,
            ease: 'power2.out'
        });
    }

    // Hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    if (heroButtons.length > 0) {
        gsap.from(heroButtons, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            delay: 0.8,
            ease: 'power2.out'
        });
    }

    // Stats animation
    const statItems = document.querySelectorAll('.hero-stats .stat-item');
    if (statItems.length > 0) {
        gsap.from(statItems, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            delay: 1,
            ease: 'power2.out'
        });
    }

    // Solar system
    const solarSystem = document.querySelector('.solar-system');
    if (solarSystem) {
        gsap.from(solarSystem, {
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            delay: 0.3,
            ease: 'power2.out'
        });
    }

    // Scroll-triggered animations
    gsap.utils.toArray('.reveal').forEach(element => {
        gsap.from(element, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Counter animation
    animateCounters();

    // Tilt effect for cards
    initTiltEffect();
}

// ===================================
// COUNTER ANIMATION
// ===================================

function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));

        ScrollTrigger.create({
            trigger: counter,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(counter, {
                    innerText: target,
                    duration: 2,
                    snap: { innerText: 1 },
                    ease: 'power1.out',
                    onUpdate: function() {
                        const value = Math.ceil(counter.innerText);
                        counter.innerText = value.toLocaleString() + '+';
                    }
                });
            },
            once: true
        });
    });
}

// ===================================
// MAGNETIC BUTTONS
// ===================================

document.querySelectorAll('.magnetic').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)'
        });
    });
});

// ===================================
// TILT EFFECT FOR CARDS
// ===================================

function initTiltEffect() {
    const tiltElements = document.querySelectorAll('[data-tilt]');

    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            gsap.to(element, {
                rotationX: rotateX,
                rotationY: rotateY,
                duration: 0.3,
                ease: 'power2.out',
                transformPerspective: 1000
            });
        });

        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
}

// ===================================
// ACTIVE NAV LINK ON SCROLL
// ===================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// PARALLAX EFFECT
// ===================================

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('.solar-system');

    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c🚀 Premium Origen Website Loaded Successfully!', 'color: #ff6b35; font-size: 16px; font-weight: bold;');
console.log('%cDeveloped with ❤️ using GSAP & Modern Web Technologies', 'color: #f7931e; font-size: 12px;');

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0.5);
}

// ===================================
// TEAM HORIZONTAL SCROLL
// ===================================

const teamScrollWrapper = document.getElementById('teamScrollWrapper');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

if (teamScrollWrapper && scrollLeftBtn && scrollRightBtn) {
    const scrollAmount = 370; // Card width + gap

    scrollLeftBtn.addEventListener('click', () => {
        teamScrollWrapper.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        teamScrollWrapper.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Mouse drag to scroll
    let isDown = false;
    let startX;
    let scrollLeft;

    teamScrollWrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        teamScrollWrapper.style.cursor = 'grabbing';
        startX = e.pageX - teamScrollWrapper.offsetLeft;
        scrollLeft = teamScrollWrapper.scrollLeft;
    });

    teamScrollWrapper.addEventListener('mouseleave', () => {
        isDown = false;
        teamScrollWrapper.style.cursor = 'grab';
    });

    teamScrollWrapper.addEventListener('mouseup', () => {
        isDown = false;
        teamScrollWrapper.style.cursor = 'grab';
    });

    teamScrollWrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - teamScrollWrapper.offsetLeft;
        const walk = (x - startX) * 2;
        teamScrollWrapper.scrollLeft = scrollLeft - walk;
    });

    // Set initial cursor
    teamScrollWrapper.style.cursor = 'grab';
}

// ===================================
// PROJECT FILTERING
// ===================================

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // Filter projects with animation
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                gsap.to(card, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                    onStart: () => {
                        card.classList.remove('hidden');
                        card.style.display = 'block';
                    }
                });
            } else {
                gsap.to(card, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.3,
                    ease: 'power2.in',
                    onComplete: () => {
                        card.classList.add('hidden');
                        card.style.display = 'none';
                    }
                });
            }
        });
    });
});

// ===================================
// ENHANCED COUNTER ANIMATION
// ===================================

function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const isSunCounter = counter.classList.contains('sun-text');

        ScrollTrigger.create({
            trigger: counter,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(counter, {
                    innerText: target,
                    duration: 2,
                    snap: { innerText: 1 },
                    ease: 'power1.out',
                    onUpdate: function() {
                        const value = Math.ceil(counter.innerText);
                        if (isSunCounter) {
                            counter.innerText = value.toLocaleString();
                        } else {
                            counter.innerText = value.toLocaleString();
                        }
                    }
                });
            },
            once: true
        });
    });
}

// ===================================
// CAREER APPLY BUTTON INTERACTIONS
// ===================================

const applyButtons = document.querySelectorAll('.career-apply-btn');

applyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.pointerEvents = 'none';

        button.appendChild(ripple);

        gsap.to(ripple, {
            scale: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
                ripple.remove();
            }
        });

        // Show alert (replace with actual form/modal in production)
        setTimeout(() => {
            alert('Thank you for your interest! Our HR team will contact you soon.');
        }, 300);
    });
});
