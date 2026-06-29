/* ==========================================================================
   INTERACTIVE LOGIC: AYUSH PANGAONKAR'S PORTFOLIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. STICKY HEADER & ACTIVE SCROLL LINK HIGHLIGHTING ---
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
        // Sticky Header toggle
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }

        // Active Nav Link Highlight based on viewport scroll
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // offset to compensate header height
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });

        // Toggle back-to-top button visibility
        const backToTopBtn = document.getElementById('back-to-top');
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial scroll check

    // Back to top scroll functionality
    document.getElementById('back-to-top').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // --- 2. MOBILE DRAWER NAVIGATION MENU ---
    const mobileToggle = document.getElementById('mobile-toggle-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileDrawerLinks = document.querySelectorAll('.mobile-link');

    const toggleMobileMenu = () => {
        mobileToggle.classList.toggle('active');
        mobileDrawer.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Prevent body scrolling when mobile drawer is open
        if (document.body.classList.contains('menu-open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    mobileToggle.addEventListener('click', toggleMobileMenu);

    mobileDrawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileDrawer.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });


    // --- 3. DYNAMIC TYPEWRITER EFFECT ---
    const typewriterElement = document.getElementById('typewriter');
    const rolesList = [
        "B.Tech Graduate 2026", 
        "Software Engineer", 
        "Full Stack Developer"
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const runTypewriter = () => {
        const currentWord = rolesList[wordIndex];
        
        if (isDeleting) {
            // Delete characters
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // faster deletion
        } else {
            // Write characters
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120; // normal typing speed
        }

        // Word completed typing
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 1500; // pause at full word
        } 
        // Word completed deleting
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % rolesList.length; // cycle to next role
            typingSpeed = 500; // brief pause before writing next
        }

        setTimeout(runTypewriter, typingSpeed);
    };

    if (typewriterElement) {
        setTimeout(runTypewriter, 1000); // initial delay
    }


    // --- 4. THEME SWAPPER: DARK / LIGHT MODE ---
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    // Check local storage or system preferences
    const currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
    
    if (currentTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('portfolio-theme', 'light');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('portfolio-theme', 'dark');
        }
    });


    // --- 5. INTERACTIVE SCROLL REVEAL & SKILLS PROGRESS ANIMATION ---
    const revealElements = document.querySelectorAll('.reveal-up');
    const skillBars = document.querySelectorAll('.progress-bar');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it's a skills section card, trigger bar expansion
                if (entry.target.classList.contains('skills-card')) {
                    const bars = entry.target.querySelectorAll('.progress-bar');
                    bars.forEach(bar => {
                        const width = bar.style.width; // retrieves width defined in style tag
                        // For display, we first empty then re-apply width to animate
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 100);
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px' // offset to reveal slightly before element reaches view
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    // --- 6. DYNAMIC PROJECTS GRID FILTER ENGINE ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Adjust active filter class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.classList.remove('hide');
                    // Add micro fade-in delay
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transition = 'opacity var(--transition-fast)';
                    }, 50);
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });


    // --- 7. MOUSE CURSOR TRAILER (DESKTOP ONLY) ---
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');
    
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    
    // Check if device supports hover events (typically desktop)
    const isDesktop = window.matchMedia('(pointer: fine)').matches;

    if (isDesktop && cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Instantly place dot
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        // Smoothly interpolate outline cursor position
        const animateCursorOutline = () => {
            const easeFactor = 0.15; // lower is slower trailing
            outlineX += (mouseX - outlineX) * easeFactor;
            outlineY += (mouseY - outlineY) * easeFactor;
            
            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;
            
            requestAnimationFrame(animateCursorOutline);
        };
        
        requestAnimationFrame(animateCursorOutline);

        // Hover expansions on interactive elements
        const hoverables = document.querySelectorAll('a, button, .filter-btn, .project-card, .info-card');
        
        hoverables.forEach(elem => {
            elem.addEventListener('mouseenter', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1.8)';
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.borderColor = 'rgba(var(--text-highlight-rgb), 0.6)';
                cursorOutline.style.backgroundColor = 'rgba(var(--text-highlight-rgb), 0.05)';
            });
            
            elem.addEventListener('mouseleave', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.borderColor = 'var(--text-highlight)';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });
    }


    // --- 8. CONTACT FORM HANDLER & VALIDATION ---
    const contactForm = document.getElementById('contact-form');
    const formToast = document.getElementById('form-toast');
    const toastMessage = document.getElementById('toast-message');

    const showToastAlert = (message, isSuccess = true) => {
        toastMessage.textContent = message;
        if (isSuccess) {
            formToast.style.borderColor = 'var(--toast-border)';
            formToast.querySelector('i').className = 'fa-solid fa-circle-check';
        } else {
            formToast.style.borderColor = '#ff5f56';
            formToast.querySelector('i').className = 'fa-solid fa-triangle-exclamation';
            formToast.querySelector('i').style.color = '#ff5f56';
        }
        
        formToast.classList.add('show');
        
        // Hide after 4 seconds
        setTimeout(() => {
            formToast.classList.remove('show');
        }, 4000);
    };

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('form-name');
            const emailInput = document.getElementById('form-email');
            const subjectInput = document.getElementById('form-subject');
            const messageInput = document.getElementById('form-message');
            const submitBtn = contactForm.querySelector('.btn-submit');

            // Quick validation checks
            if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
                showToastAlert('Please fill in all required fields.', false);
                return;
            }

            // Disable button during loading simulation
            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';

            // Simulate form submission API latency
            setTimeout(() => {
                // Success path
                showToastAlert('Thank you! Your message was sent successfully.', true);
                
                // Clear inputs and trigger label floating resets
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
                
                // Explicitly blur inputs to reset labels
                document.querySelectorAll('.form-control').forEach(input => {
                    input.blur();
                });
            }, 1800);
        });
    }

    // Set active year in footer automatically
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
