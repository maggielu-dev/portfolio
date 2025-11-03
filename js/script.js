// ===== Mobile Navigation Menu =====
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Toggle menu
burger.addEventListener('click', () => {
    // Toggle navigation
    nav.classList.toggle('active');

    // Toggle burger icon animation
    burger.classList.toggle('active');
});

// Close menu after clicking navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow effect
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12)';
    }

    lastScroll = currentScroll;
});

// ===== Smooth Scroll to Target Section =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 70; // Offset for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Animation on Element Entering Viewport =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add initial styles and observe elements that need animation
const animateElements = document.querySelectorAll('.project-card, .contact-item, .about-content');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// ===== Project Card Click Effect =====
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // Add logic here to open project details
        // For example: open modal, navigate to detail page, etc.
        console.log('Project card clicked');
    });
});

// ===== Animation After Page Load =====
window.addEventListener('load', () => {
    // Hero section fade-in animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';

        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ===== Enhanced Skill Tag Hover Effect =====
const skillTags = document.querySelectorAll('.tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });

    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== Prevent Default Behavior When Clicking Non-Link Areas =====
document.addEventListener('click', (e) => {
    // Close mobile menu when clicking elsewhere on page
    if (!e.target.closest('.navbar') && nav.classList.contains('active')) {
        nav.classList.remove('active');
        burger.classList.remove('active');
    }
});

// ===== Console Welcome Message =====
console.log('%cWelcome to My Portfolio! ', 'color: #2D0C1A; font-size: 20px; font-weight: bold;');
console.log('%cIf you\'re interested in this website, feel free to contact me!', 'color: #D4AF37; font-size: 14px;');

// ===== Ocean Wave Effect =====
function createWave() {
    const waveContainer = document.querySelector('.ripple-container');
    if (!waveContainer) return;

    const wave = document.createElement('div');
    wave.classList.add('wave');

    // 随机高度
    const height = Math.random() * 50 + 100; // 100-150px
    wave.style.height = `${height}px`;

    // 随机速度（缓慢，模拟海浪）
    const duration = Math.random() * 4 + 8; // 8-12秒
    wave.style.animationDuration = `${duration}s`;

    // 随机延迟
    const delay = Math.random() * 2;
    wave.style.animationDelay = `${delay}s`;

    waveContainer.appendChild(wave);

    // 动画结束后移除元素
    setTimeout(() => {
        wave.remove();
    }, (duration + delay) * 1000);
}

// 定期创建新的海浪（不夸张的频率）
function startWaveEffect() {
    // 每6秒创建一个新海浪
    setInterval(() => {
        createWave();
    }, 6000);

    // 初始创建2个海浪
    createWave();
    setTimeout(createWave, 3000);
}

// 页面加载后开始海浪效果
window.addEventListener('load', startWaveEffect);
