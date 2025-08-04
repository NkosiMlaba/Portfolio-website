// Portfolio Data Configuration
const portfolioData = {
    personal: {
        name: "Nkosikhona Mlaba",
        title: "Software & DevOps Engineer",
        logo: "NM",
        description: "I am a high-performing developer with 90%+ academic achievement and proven leadership in delivering innovative software solutions. Passionate about deployment, continuous improvement, and creating impactful technology.",
        tagline: "Built with passion"
    },
    
    navigation: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" }
    ],
    
    heroButtons: [
        { text: "View My Work", href: "#projects", class: "btn-primary" },
        { text: "Get In Touch", href: "#contact", class: "btn-secondary" }
    ],
    
    about: [
        "I'm a dedicated <span class='highlight'>Software and DevOps Engineer</span> with an exceptional academic record and a passion for creating innovative solutions. Currently pursuing my Bachelor of Commerce in Information Systems and Technology at UKZN with a <span class='highlight'>94% first semester aggregate</span>.",
        "My journey in technology is marked by consistent excellence, from achieving <span class='highlight'>1st position</span> at WeThinkCode_ with a 90% aggregate to leading multiple successful projects. I thrive in challenging environments and excel at bringing teams together to achieve outstanding results.",
    ],
    
    stats: [
        { number: "90%", label: "Academic Average" },
        { number: "80%+", label: "Project Leadership Score" },
        { number: "1st", label: "Position Learner" },
        { number: "80+", label: "Hackathon Participants Supported" }
    ],
    
    education: [
        {
            degree: "Bachelor of Commerce in Information Systems and Technology",
            institution: "University of KwaZulu-Natal (UKZN)",
            date: "2025 - Present",
            grade: "94% First Semester Aggregate",
            description: "Specializing in software development, systems analysis, and technology management."
        },
        {
            degree: "Software Development Programme",
            institution: "WeThinkCode_",
            date: "2023 - 2024",
            grade: "90% Aggregate",
            description: "Intensive coding bootcamp focusing on practical software development skills and industry best practices."
        }
    ],
    
    experience: [
        {
            title: "DevOps Intern",
            company: "Future Foundation",
            date: "January 2025 - Present",
            description: "Successfully redesigned website for major company client with dark mode and responsive design. Documenting processes and managing virtual machines.",
            skills: ["WordPress", "PHP", "Bootstrap", "Sass", "Docker", "Linux"]
        },
        {
            title: "System Administrator (Volunteer)",
            company: "KZN Tech Horizons",
            date: "February 2025 - Present",
            description: "Managing IT infrastructure and leading tech support during hackathons. Successfully troubleshot hardware & software issues for 80+ participants while providing comprehensive technical support.",
            skills: ["Tech Support", "Troubleshooting", "Hardware Support", "Problem Solving"]
        },
        {
            title: "Academic Workshop Mentor (Volunteer)",
            company: "WeThinkCode_",
            date: "April 2024 - May 2024",
            description: "Prepared and delivered workshop materials including slides, coding examples and tutorials. Provided ongoing support by monitoring workshops and addressing challenges encountered by peers.",
            skills: ["Leadership", "Teaching", "Presentation", "Mentoring"]
        }
    ],
    
    projects: [
        {
            title: "Salon Appointment Management System",
            description: "A comprehensive system that allows both salon staff and clients to efficiently manage, save, and email appointment information. Features intuitive scheduling, automated notifications, and seamless communication.",
            skills: ["Java", "Database", "Email API"],
            link: "https://github.com/NkosiMlaba/SalonAppointmentManagement"
        },
        {
            title: "Facial Recognition Attendance System",
            description: "An innovative attendance tracking system using facial recognition technology. Provides accurate, contactless attendance monitoring with real-time processing and comprehensive reporting capabilities.",
            skills: ["Python", "OpenCV", "Machine Learning"],
            link: "https://github.com/NkosiMlaba/Facial-Recognition-Attendance-System"
        },
        {
            title: "AI Resume Builder",
            description: "A dynamic web application for creating ATS-friendly, job-specific resumes and generating tailored cover letters. Leverages AI to optimize content for specific job requirements and industries.",
            skills: ["JavaScript", "AI Integration", "Web Development"],
            link: "https://github.com/NkosiMlaba/Dynamic-Resume-Builder-with-AI"
        }
    ],
    
    skills: [
        {
            category: "Programming Languages",
            icon: "fas fa-code",
            items: ["Java", "C#", "Python", "JavaScript", "PHP", "SQL", "HTML", "CSS"]
        },
        {
            category: "Development Tools",
            icon: "fas fa-tools",
            items: ["Git", "Docker", "GitLab", "CI/CD", "Build Pipelines", "Testing", "Linux", "Virtual Machines"]
        },
        {
            category: "Frameworks & Technologies",
            icon: "fas fa-database",
            items: ["WordPress", "Bootstrap", "Sass", "Javalin", "REST APIs", "Databases", "UML", "SDLC"]
        },
        {
            category: "Soft Skills",
            icon: "fas fa-users",
            items: ["Team Leadership", "Problem Solving", "Adaptability", "Communication", "Attention to Detail", "Mentoring", "Project Management"]
        }
    ],
    
    contact: [
        {
            type: "LinkedIn",
            icon: "fab fa-linkedin",
            value: "nkosikhona-mlaba-1545a7273",
            link: "https://www.linkedin.com/in/nkosikhona-mlaba-1545a7273"
        },
        {
            type: "GitHub", 
            icon: "fab fa-github",
            value: "NkosiMlaba",
            link: "https://github.com/NkosiMlaba"
        },
        {
            type: "Portfolio",
            icon: "fas fa-globe",
            value: "nkosimlaba.github.io",
            link: "https://nkosimlaba.github.io/Portfolio-website"
        }
    ],
    
    social: [
        {
            platform: "LinkedIn",
            icon: "fab fa-linkedin-in",
            url: "https://www.linkedin.com/in/nkosikhona-mlaba-1545a7273"
        },
        {
            platform: "GitHub",
            icon: "fab fa-github", 
            url: "https://github.com/NkosiMlaba"
        },
        {
            platform: "Portfolio",
            icon: "fas fa-globe",
            url: "https://nkosimlaba.github.io/Portfolio-website"
        }
    ]
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
    createParticles();
    initSmoothScrolling();
    initNavbarEffects();
    initScrollAnimations();
    initTypingEffect();
    initFormHandler();
    initSkillInteractions();
    initParallaxEffect();
});

// Initialize portfolio with data
function initializePortfolio() {
    // Update page title and basic info
    document.getElementById('page-title').textContent = `${portfolioData.personal.name} - ${portfolioData.personal.title}`;
    document.getElementById('nav-logo').textContent = portfolioData.personal.logo;
    document.getElementById('hero-name').textContent = portfolioData.personal.name;
    document.getElementById('hero-subtitle').textContent = portfolioData.personal.title;
    document.getElementById('hero-description').textContent = portfolioData.personal.description;
    document.getElementById('footer-tagline').textContent = portfolioData.personal.tagline;

    // Build navigation
    buildNavigation();
    
    // Build hero buttons
    buildHeroButtons();
    
    // Build about section
    buildAboutSection();
    
    // Build stats
    buildStats();
    
    // Build education section
    buildEducationSection();
    
    // Build experience section
    buildExperienceSection();
    
    // Build projects section
    buildProjectsSection();
    
    // Build skills section
    buildSkillsSection();
    
    // Build contact section
    buildContactSection();
    
    // Build social links
    buildSocialLinks();
}

function buildNavigation() {
    const navLinks = document.getElementById('nav-links');
    navLinks.innerHTML = portfolioData.navigation.map(link => 
        `<li><a href="${link.href}">${link.name}</a></li>`
    ).join('');
}

function buildHeroButtons() {
    const buttonsContainer = document.getElementById('hero-buttons');
    buttonsContainer.innerHTML = portfolioData.heroButtons.map(button => 
        `<a href="${button.href}" class="btn ${button.class}">${button.text}</a>`
    ).join('');
}

function buildAboutSection() {
    const aboutText = document.getElementById('about-text');
    aboutText.innerHTML = portfolioData.about.map(paragraph => 
        `<p>${paragraph}</p><br>`
    ).join('');
}

function buildStats() {
    const statsContainer = document.getElementById('stats');
    statsContainer.innerHTML = portfolioData.stats.map(stat => 
        `<div class="stat-card">
            <div class="stat-number">${stat.number}</div>
            <div class="stat-label">${stat.label}</div>
        </div>`
    ).join('');
}

function buildEducationSection() {
    const educationGrid = document.getElementById('education-grid');
    educationGrid.innerHTML = portfolioData.education.map(edu => 
        `<div class="education-card">
            <div class="education-title">${edu.degree}</div>
            <div class="education-institution">${edu.institution}</div>
            <div class="education-date">${edu.date}</div>
            <div class="education-grade">${edu.grade}</div>
            <p>${edu.description}</p>
        </div>`
    ).join('');
}

function buildExperienceSection() {
    const timeline = document.getElementById('experience-timeline');
    timeline.innerHTML = portfolioData.experience.map(exp => 
        `<div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-title">${exp.title}</div>
                <div class="timeline-company">${exp.company}</div>
                <div class="timeline-date">${exp.date}</div>
                <p>${exp.description}</p>
                <div class="timeline-skills">
                    ${exp.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        </div>`
    ).join('');
}

function buildProjectsSection() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = portfolioData.projects.map(project => 
        `<div class="project-card">
            <div class="project-header">
                <div class="project-title">${project.title}</div>
                <p class="project-description">${project.description}</p>
            </div>
            <div class="project-footer">
                <div class="timeline-skills">
                    ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link" target="_blank">
                    View Project <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>`
    ).join('');
}

function buildSkillsSection() {
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = portfolioData.skills.map(skillCategory => 
        `<div class="skill-category">
            <h3><i class="${skillCategory.icon}"></i> ${skillCategory.category}</h3>
            <div class="skill-list">
                ${skillCategory.items.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
            </div>
        </div>`
    ).join('');
}
// <div class="contact-icon">
            //     <i class="${contact.icon}"></i>
            // </div>
function buildContactSection() {
    const contactInfo = document.getElementById('contact-info-items');
    contactInfo.innerHTML = portfolioData.contact.map(contact => 
        `<div class="contact-item">
            
            
            <a href="${contact.link}" target="_blank" class="social-link" title="${contact.type}">
                <i class="${contact.icon}"></i>
            </a>
            
            <div>
                <h4>${contact.type}</h4>
                <p>${contact.value}</p>
            </div>
        </div>`
    ).join('');
}

function buildSocialLinks() {
    const socialLinks = document.getElementById('social-links');
    socialLinks.innerHTML = portfolioData.social.map(social => 
        `<a href="${social.url}" target="_blank" class="social-link" title="${social.platform}">
            <i class="${social.icon}"></i>
        </a>`
    ).join('');
}

// All other functions remain the same as in original code
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initNavbarEffects() {
    const navbar = document.getElementById('navbar');
    const scrollIndicator = document.getElementById('scrollIndicator');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrolled / maxScroll) * 100;

        scrollIndicator.style.width = scrollPercent + '%';

        if (scrolled > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach((el) => {
        observer.observe(el);
    });
}

function initTypingEffect() {
    const subtitle = document.querySelector('.hero .subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 1000);
}

function initFormHandler() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;

        // Let Formspree handle the actual submission
        setTimeout(() => {
            submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitButton.style.background = 'var(--chart-2)';
            
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                submitButton.style.background = 'var(--primary)';
            }, 2000);
        }, 1000);
    });
}

function initSkillInteractions() {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.10;
        hero.style.transform = `translateY(${parallax}px)`;
    });
}

// Interactive cursor effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.style.position = 'fixed';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.width = '5px';
    cursor.style.height = '5px';
    cursor.style.background = 'var(--primary)';
    cursor.style.borderRadius = '50%';
    cursor.style.pointerEvents = 'none';
    cursor.style.opacity = '0.6';
    cursor.style.zIndex = '9999';
    cursor.style.transition = 'opacity 0.5s ease';
    
    document.body.appendChild(cursor);
    
    setTimeout(() => {
        cursor.style.opacity = '0';
        setTimeout(() => {
            if (cursor.parentNode) {
                cursor.parentNode.removeChild(cursor);
            }
        }, 500);
    }, 100);
});