// Data Store
        const skillsData = [
            { name: "HTML5", percent: 90, category: "frontend" },
            { name: "CSS3", percent: 85, category: "frontend" },
            { name: "JavaScript", percent: 80, category: "frontend" },
            { name: "UI/UX", percent: 75, category: "frontend" },
            { name: "Python", percent: 80, category: "backend" },
            { name: "Java", percent: 75, category: "backend" },
            { name: "C & C++", percent: 70, category: "backend" },
            { name: "Claude", percent: 90, category: "tools" },
            { name: "Figma", percent: 85, category: "tools" },
            { name: "Antigravity", percent: 95, category: "tools" },
            { name: "Kaggle", percent: 70, category: "tools" }
        ];

        const projectsData = [
            {
                title: "Movie Suggestion Web Page",
                category: "website",
                tech: ["HTML", "CSS", "API Keys"],
                desc: "Movie Suggestion Web page By using Html,CSS and API keys.",
                github: "#",
                live: "#",
                gradient: "linear-gradient(135deg, #e52d27, #b31217)"
            },
            {
                title: "Weather Prediction",
                category: "application",
                tech: ["Python", "Tkinter"],
                desc: "Weather Prediction system by using Python (tKinter).",
                github: "#",
                live: "#",
                gradient: "linear-gradient(135deg, #2b5876, #4e4376)"
            },
            {
                title: "Number Guessing Game",
                category: "other",
                tech: ["C Language"],
                desc: "Number Guessing Game By using C.",
                github: "#",
                live: "#",
                gradient: "linear-gradient(135deg, #f857a6, #ff5858)"
            },
            {
                title: "Campus360",
                category: "application",
                tech: ["HTML", "CSS", "JS", "PHP", "MySQL", "Bootstrap"],
                desc: "A centralized web application designed for Arts & Science colleges to manage students, staff, attendance, marks, and timetables.",
                github: "#",
                live: "#",
                status: "Future Project",
                gradient: "linear-gradient(135deg, #7c3aed, #00ffff)"
            },
            {
                title: "Senior-to-Junior Knowledge Hub",
                category: "website",
                tech: ["HTML", "CSS", "JavaScript"],
                desc: "A platform where college seniors can upload notes, previous question papers, project reports, and interview tips for juniors.",
                github: "#",
                live: "#",
                status: "Future Project",
                gradient: "linear-gradient(135deg, #11998e, #38ef7d)"
            },
            {
                title: "Skill Swap Platform",
                category: "website",
                tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
                desc: "A platform where students exchange skills with each other, featuring a skill marketplace, chat system, and ratings.",
                github: "#",
                live: "#",
                status: "Future Project",
                gradient: "linear-gradient(135deg, #2563eb, #06b6d4)"
            },
            {
                title: "AI Interview Coach",
                category: "application",
                tech: ["Python", "NLP", "Flask"],
                desc: "Conduct mock interviews and evaluate answers for technical/HR questions with performance scores and suggestions.",
                github: "#",
                live: "#",
                status: "Future Project",
                gradient: "linear-gradient(135deg, #2b5876, #4e4376)"
            },
            {
                title: "AI Poster & Certificate Generator",
                category: "application",
                tech: ["HTML", "CSS", "JS", "Canvas"],
                desc: "Generate event posters and certificates automatically from user inputs with templates and PDF export.",
                github: "#",
                live: "#",
                status: "Future Project",
                gradient: "linear-gradient(135deg, #f857a6, #ff5858)"
            }
        ];

        // Global variables for scroll reveal observer (defined early to prevent TDZ ReferenceErrors)
        let revealElements;
        let revealObserver;



        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navLinksItems = document.querySelectorAll('.nav-link');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinksItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Typing Effect for Hero Section
        const typingText = document.querySelector('.typing-text');
        const words = ["Developer", "Designer", "Coder"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            typingText.innerHTML = words[wordIndex].substring(0, charIndex);
            
            if (!isDeleting && charIndex < words[wordIndex].length) {
                charIndex++;
                setTimeout(typeEffect, 150);
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                setTimeout(typeEffect, 100);
            } else {
                isDeleting = !isDeleting;
                if (!isDeleting) {
                    wordIndex = (wordIndex + 1) % words.length;
                }
                setTimeout(typeEffect, isDeleting ? 2000 : 500);
            }
        }
        setTimeout(typeEffect, 1000);

        // Render & Animate Skills
        const skillsContainer = document.getElementById('skills-grid-container');
        const skillFilterButtons = document.querySelectorAll('.filter-btn:not(.project-filter-btn)');
        
        const skillIcons = {
            "HTML5": "🌐",
            "CSS3": "🎨",
            "JavaScript": "⚡",
            "UI/UX": "✨",
            "Python": "🐍",
            "Java": "☕",
            "C & C++": "💻",
            "MySQL": "🗄️",
            "MongoDB": "💾",
            "Flutter": "📱",
            "Figma": "📐",
            "Claude": "🤖",
            "Kaggle": "📊",
            "Antigravity": "🚀"
        };

        function renderSkills(filter = "all") {
            skillsContainer.innerHTML = "";
            const filteredSkills = filter === "all" 
                ? skillsData 
                : skillsData.filter(s => s.category === filter);

            filteredSkills.forEach(skill => {
                const card = document.createElement('div');
                card.className = "skill-card glass-panel reveal-up";
                
                const skillId = skill.name.replace(/\s+/g, '-');
                const radius = 24;
                const circumference = 2 * Math.PI * radius;
                const strokeDashoffset = circumference - (skill.percent / 100) * circumference;
                const icon = skillIcons[skill.name] || "🔥";

                card.innerHTML = `
                    <!-- Left: Circular Progress -->
                    <div class="skill-circle-wrapper">
                        <svg width="64" height="64" viewBox="0 0 64 64" style="transform: rotate(-90deg);">
                            <circle cx="32" cy="32" r="${radius}" stroke="rgba(255, 255, 255, 0.05)" stroke-width="4.5" fill="transparent" />
                            <circle id="circle-${skillId}" cx="32" cy="32" r="${radius}" stroke="url(#cyan-purple-grad)" stroke-width="4.5" fill="transparent" 
                                stroke-dasharray="${circumference}" stroke-dashoffset="${circumference}" stroke-linecap="round" style="transition: stroke-dashoffset 1s ease-out;" />
                        </svg>
                        <div class="skill-circle-percent">
                            ${skill.percent}%
                        </div>
                    </div>
                    <!-- Right: Content & Progress Bar -->
                    <div class="skill-right-content">
                        <div class="skill-top-row">
                            <div class="skill-title-block">
                                <span style="font-size: 1.1rem;">${icon}</span>
                                <span>${skill.name}</span>
                            </div>
                            <span class="skill-category-badge">
                                ${skill.category}
                            </span>
                        </div>
                        <div class="skill-bar-track">
                            <div id="bar-${skillId}" class="skill-bar-fill"></div>
                        </div>
                    </div>
                `;
                skillsContainer.appendChild(card);
                
                // Animate circular meter and horizontal progress bar
                setTimeout(() => {
                    const circle = document.getElementById(`circle-${skillId}`);
                    const bar = document.getElementById(`bar-${skillId}`);
                    if(circle) circle.style.strokeDashoffset = strokeDashoffset;
                    if(bar) bar.style.width = `${skill.percent}%`;
                }, 50);
            });

            // Re-trigger scroll observer for new items
            if (typeof revealObserver !== 'undefined') {
                revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
                revealElements.forEach(el => revealObserver.observe(el));
            }
        }

        // Skill Filters Event
        skillFilterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                skillFilterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderSkills(btn.dataset.filter);
            });
        });

        // Render Projects
        const projectsContainer = document.getElementById('projects-grid-container');
        const projectFilterButtons = document.querySelectorAll('.project-filter-btn');

        function renderProjects(filter = "all") {
            projectsContainer.innerHTML = "";
            const filteredProjects = filter === "all" 
                ? projectsData 
                : projectsData.filter(p => p.category === filter);

            filteredProjects.forEach(proj => {
                const card = document.createElement('div');
                card.className = "project-card glass-panel reveal-up";
                card.innerHTML = `
                    <div class="project-image">
                        <div class="img-placeholder" style="background: ${proj.gradient}">${proj.title}</div>
                        <div class="project-overlay">
                            <a href="${proj.github}" class="btn btn-primary" style="padding: 0.6rem 1.2rem; font-size:0.75rem;">GitHub</a>
                            <a href="${proj.live}" class="btn btn-outline" style="padding: 0.6rem 1.2rem; font-size:0.75rem;">Live</a>
                        </div>
                    </div>
                    <div class="project-info">
                        <h3 style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
                            <span>${proj.title}</span>
                            ${proj.status ? `<span style="font-size: 0.65rem; padding: 0.2rem 0.5rem; border-radius: 4px; background: rgba(0, 255, 255, 0.1); border: 1px solid var(--accent-2); color: var(--accent-2); font-family: var(--font-mono); text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">${proj.status}</span>` : ''}
                        </h3>
                        <p>${proj.desc}</p>
                        <div class="project-tech">
                            ${proj.tech.map(t => `<span>${t}</span>`).join('')}
                        </div>
                        <div class="project-links-mobile">
                            <a href="${proj.github}" class="btn btn-primary">GitHub</a>
                            <a href="${proj.live}" class="btn btn-outline">Live</a>
                        </div>
                    </div>
                `;
                projectsContainer.appendChild(card);
            });
            
            // Re-trigger scroll observer for new items
            revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
            revealElements.forEach(el => revealObserver.observe(el));
        }

        // Project Filters Event
        projectFilterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                projectFilterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProjects(btn.dataset.filter);
            });
        });

        // Scroll Reveal Animation (Intersection Observer)
        revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
        const revealCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        };
        revealObserver = new IntersectionObserver(revealCallback, {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });
        revealElements.forEach(el => revealObserver.observe(el));

        // Initialize Render
        renderSkills();
        renderProjects();

        // Active Navigation update on Scroll
        const sections = document.querySelectorAll('.section');
        const navLinkItems = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            // Update Header Nav
            navLinkItems.forEach(li => {
                li.classList.remove('active');
                if (li.getAttribute('href').includes(current)) {
                    li.classList.add('active');
                }
            });



            // Scroll-to-top button visibility
            const scrollTopBtn = document.getElementById('scroll-to-top');
            if (window.pageYOffset > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        // Scroll to Top action
        document.getElementById('scroll-to-top').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Cosmic Orbiting Particles (Gravity Cursor) Effect
        const numParticles = 4;
        const particles = [];
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let cursorX = mouseX;
        let cursorY = mouseY;

        // Initialize particles
        for (let i = 0; i < numParticles; i++) {
            const particleEl = document.createElement('div');
            particleEl.className = 'cursor-particle';
            
            // Alternate colors (Cyan & Violet)
            if (i % 2 === 0) {
                particleEl.style.background = 'var(--accent-2)';
                particleEl.style.boxShadow = '0 0 10px var(--accent-2), 0 0 20px var(--accent-2)';
            }
            
            document.body.appendChild(particleEl);
            
            particles.push({
                x: mouseX,
                y: mouseY,
                angle: (i * Math.PI * 2) / numParticles,
                distance: 22 + i * 6,
                speed: 0.04 + i * 0.008,
                element: particleEl
            });
        }

        // Central Cursor Dot
        const cursorDot = document.createElement('div');
        cursorDot.className = 'custom-cursor';
        document.body.appendChild(cursorDot);

        // Tracking mouse movement
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Animation Loop
        function animateCursor() {
            // Smoothly interpolate the cursor dot position (Lerp)
            cursorX += (mouseX - cursorX) * 0.16;
            cursorY += (mouseY - cursorY) * 0.16;
            
            cursorDot.style.left = `${cursorX}px`;
            cursorDot.style.top = `${cursorY}px`;
            
            // Orbit particles around the cursor dot position
            particles.forEach((p) => {
                p.angle += p.speed;
                const targetX = cursorX + Math.cos(p.angle) * p.distance;
                const targetY = cursorY + Math.sin(p.angle) * p.distance;
                
                // Add follow inertia to each particle
                p.x += (targetX - p.x) * 0.12;
                p.y += (targetY - p.y) * 0.12;
                
                p.element.style.left = `${p.x}px`;
                p.element.style.top = `${p.y}px`;
            });
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Gravity Attraction / Pull on Interactive Elements
        function setupCursorInteractions() {
            const interactables = document.querySelectorAll('a, button, .btn, .social-btn, .nav-link, .filter-btn, .hamburger, .timeline-card, .project-card, .skill-card');
            
            interactables.forEach((el) => {
                // If it already has listeners, avoid duplicate actions
                if (el.dataset.cursorBound) return;
                el.dataset.cursorBound = "true";

                el.addEventListener('mouseenter', () => {
                    cursorDot.style.transform = 'translate(-50%, -50%) scale(2.8)';
                    cursorDot.style.backgroundColor = 'rgba(0, 255, 255, 0.15)';
                    cursorDot.style.border = '1.5px solid var(--accent-2)';
                    
                    // Pull particles closer and speed up the orbit
                    particles.forEach((p, idx) => {
                        p.distance = 12; 
                        p.speed *= 2.2;
                    });
                });
                
                el.addEventListener('mouseleave', () => {
                    cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                    cursorDot.style.backgroundColor = 'var(--accent-2)';
                    cursorDot.style.border = 'none';
                    
                    // Reset to default orbit distances and speeds
                    particles.forEach((p, idx) => {
                        p.distance = 22 + idx * 6;
                        p.speed = 0.04 + idx * 0.008;
                    });
                });
            });
        }

        // Initialize interactions and run again when dynamic lists render
        setupCursorInteractions();

        // Observe elements rendering inside container to bind cursor hover
        const observer = new MutationObserver(() => {
            setupCursorInteractions();
        });
        observer.observe(document.body, { childList: true, subtree: true });
