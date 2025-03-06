// Single Page Application Functionality
export const singlePageApp = () => {
    // Define routes and their corresponding content
    const routes = {
        '': `
          <h1 id="hero-heading" class="slider"></h1>
          <p class="hero-paragraph">
            Be part of an exclusive network of elite professionals, visionaries, and high achievers, driven by a billionaire’s mindset to create success, wealth, and lasting impact while shaping the future together.
          </p>
          <div id="button-container"></div>
        `,
        '#/about': '<h1 class="hero-heading-route highlight">About Us</h1><p class="hero-paragraph">The Biggies Club unites ambitious professionals for growth, success, impact.</p>',
        '#/membership': '<h1 class="hero-heading-route">Welcome to The Biggies Club (TBC) <span class="highlightTwo"></span></h2><p class="hero-paragraph">An arena for Visionaries, High Achievers, and Impact-Driven Professionals.</p>'
    };

    const secoundRoute = {
        '': `
          <div>
            <div class="objective" style="margin: 4em 0; display: flex; align-items: center; gap: 2em;">
                <div>
                    <img src="assets/membership.webp" style="border-radius: 50px; width: 600px; height: 350px;">
                </div>

                <div>
                    <div class="obj-con" style="display: flex; margin-bottom: 1.5em; align-items: center; justify-content: center; gap: 1em;">
                        <p style="border-top: 1.5px solid gold; width: 26%"></p>
                        <h3 class="core-objecives">ABOUT US</h3>
                        <p style="border-top: 1.5px solid gold; width: 26%"></p>
                    </div>

                    <div class="objectives-container">
                        <span class="objectives-feature">
                            The Biggies Club (TBC) is a professional network designed to bring together ambitious, thriving professionals with a shared goal of achieving exceptional growth and success, rooted in a billionaire mindset. TBC’s platform allows members to collaborate, exchange ideas, and propel one another toward remarkable achievements while making lasting social impact.
                        </span>
                    </div>

                    <div id="about-button-container"></div>
                </div>
            </div>

            <div class="objective" style="margin: 4em 0; display: flex; align-items: center; gap: 2em;">
                <div>
                    <div class="obj-con" style="display: flex; margin-bottom: 1.5em; align-items: center; justify-content: center; gap: 1em;">
                        <p style="border-top: 1.5px solid gold; width: 26%"></p>
                        <h3 class="core-objecives">MEMBERSHIP</h3>
                        <p style="border-top: 1.5px solid gold; width: 26%"></p>
                    </div>

                    <div class="objectives-container">
                        <span class="objectives-feature">
                            At The Biggies Club (TBC), we bring together thriving professionals who share a billionaire’s mindset, a drive for exceptional success, and a passion for creating impact. As a member, you gain access to an exclusive network of elite professionals, business leaders, and innovators dedicated to shaping the future.
                        </span>
                    </div>

                    <div id="membership-button-container"></div>
                </div>

                <div>
                    <img src="assets/about-us.jpg" style="border-radius: 50px; width: 600px; height: 350px;">
                </div>
            </div>
          </div>
        `,
        '#/about': `
            <div>
                <p class="mainIntro">The Biggies Club (TBC) is a professional network designed to bring together ambitious, thriving professionals with a shared goal of achieving exceptional growth and success, rooted in a billionaire mindset. TBC’s platform allows members to collaborate, exchange ideas, and propel one another toward remarkable achievements while making lasting social impact.</p>
        
                <div style="display: flex; align-items: center; gap: 1em;">
                    <div>
                        <img src="assets/core-objectives-removebg-preview.png" style="border-radius: 50px; width: 600px; height: 400px;">
                    </div>

                    <div class="objectives">
                        <div class="obj-con" style="display: flex; margin-bottom: 1.5em; align-items: center; justify-content: center; gap: 1em;">
                            <p style="border-top: 1.5px solid gold; width: 26%"></p>
                            <h3 class="core-objecives">Core Objectives</h3>
                            <p style="border-top: 1.5px solid gold; width: 26%"></p>
                        </div>

                        <div class="objectives-container">
                            <span class="objectives-feature">
                                Fostering Professional Growth: Empower members to scale their careers and businesses through knowledge sharing, mentorship, and strategic partnerships.
                            </span>

                            <span class="objectives-feature">
                                Building Wealth: Helping each other with the mindset, resources, and networks necessary to achieve financial independence and billionaire-level success.
                            </span>

                            <span class="objectives-feature">
                                Driving Social Impact: Commit to making a difference by spearheading impactful community projects that foster sustainable development and meaningful change.
                            </span>
                        </div>
                    </div>
                </div>

                <div style="display: flex; align-items: center; flex-direction: row-reverse; gap: 1em; margin-top: 3em;">
                    <div>
                        <img src="assets/code-of-conduct.avif" style="border-radius: 50px; width: 600px; height: 400px;">
                    </div>

                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                            <div class="obj-con" style="display: flex; margin-bottom: 1.5em; align-items: center;">
                                <p style="border-top: 1.5px solid gold;"></p>
                                <h3 class="core-objecives">Code of Conduct</h3>
                                <p style="border-top: 1.5px solid gold;"></p>
                            </div>

                        <div class="objectives-container">
                                <span class="objectives-feature">
                                    Respect : Treat all members with respect and professionalism.
                                </span>

                                <span class="objectives-feature">
                                    Integrity : Maintain honesty and transparency in all dealings.
                                </span>

                                <span class="objectives-feature">
                                    Confidentiality : Safeguard the privacy of club discussions and initiatives.
                                </span>

                                <span class="objectives-feature">
                                    Accountability : Fulfill responsibilities within the club and uphold its reputation.
                                </span>
                        </div>
                    </div>
                </div>

                <div style="display: flex; align-items: center; gap: 3em; margin-top: 3em;">
                    <div>
                        <img src="assets/core-values.avif" style="border-radius: 50px; width: 600px; height: 400px;">
                    </div>

                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                        <div class="obj-con" style="display: flex; margin-bottom: 1.5em; align-items: center;">
                            <p style="border-top: 1.5px solid gold;"></p>
                            <h3 class="core-objecives">Core Values</h3>
                            <p style="border-top: 1.5px solid gold;"></p>
                        </div>

                        <div class="objectives-container">
                            <span class="objectives-feature">
                                Ambition
                            </span>

                            <span class="objectives-feature">
                                Excellence
                            </span>

                            <span class="objectives-feature">
                                Integrity
                            </span>

                            <span class="objectives-feature">
                                Impact
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        '#/membership': `
            <div>
                <p class="mainIntro">At The Biggies Club (TBC), we bring together thriving professionals who share a billionaire’s mindset, a drive for exceptional success, and a passion for creating impact. As a member, you gain access to an exclusive network of elite professionals, business leaders, and innovators dedicated to shaping the future.</p>

                <div style="display: flex; align-items: center; gap: 1em; flex-direction: row-reverse;">
                    <div>
                        <img src="assets/why-join.avif" style="border-radius: 50px; width: 600px; height: 400px;">
                    </div>

                    <div class="objectives">
                        <div class="obj-con" style="display: flex; margin-bottom: 1.5em; align-items: center; justify-content: center; gap: 1em;">
                            <p style="border-top: 1.5px solid gold; width: 26%"></p>
                            <h3 class="core-objecives">Why Join TBC?</h3>
                            <p style="border-top: 1.5px solid gold; width: 26%"></p>
                        </div>

                        <div class="objectives-container">
                            <span class="objectives-feature">
                                Elite Networking: Connect with high-level professionals, entrepreneurs, and industry leaders.
                            </span>

                            <span class="objectives-feature">
                                Business Growth & Investment Opportunities: Gain access to collaborations, funding, and mentorship.
                            </span>

                            <span class="objectives-feature">
                                Wealth Creation & Financial Intelligence: Learn and apply strategies that elevate your financial success.
                            </span>

                            <span class="objectives-feature">
                                Personal & Professional Development: Engage in mentorship programs, leadership training, and skill-building sessions.
                            </span>

                            <span class="objectives-feature">
                                Exclusive Events & Retreats: Attend high-profile summits, networking mixers, and impact-driven projects.
                            </span>

                            <span class="objectives-feature">
                                Social Impact Initiatives: Be part of meaningful community projects that create lasting change.
                            </span>
                        </div>
                    </div>
                </div>

                <div style="display: flex; align-items: center; gap: 1em; margin-top: 1.5em;">
                    <div>
                        <img src="assets/about-us.jpg" style="border-radius: 50px; width: 600px; height: 400px;">
                    </div>

                    <div class="objectives">
                        <div class="obj-con" style="display: flex; margin-bottom: 1.5em; align-items: center; justify-content: center; gap: 1em;">
                            <p style="border-top: 1.5px solid gold; width: 26%"></p>
                            <h3 class="core-objecives">TBC Membership Tiers</h3>
                            <p style="border-top: 1.5px solid gold; width: 26%"></p>
                        </div>

                        <p style="margin-bottom: 1em;">
                            We offer multiple membership tiers tailored to fit different levels of engagement and influence:
                        </p>

                        <div class="objectives-container">
                            <span class="objectives-feature">
                                Biggy – Core members embodying the billionaire’s mindset and actively contributing to the network.
                            </span>

                            <span class="objectives-feature">
                                Biggy Star – High-achievers recognized for outstanding success and contributions.
                            </span>

                            <span class="objectives-feature">
                                Biggy Impact – Members deeply involved in social and economic impact projects.
                            </span>
                        </div>
                    </div>
                </div>

                <div style="display: flex; align-items: center; flex-direction: row-reverse; gap: 1em; margin-top: 3em;">
                    <div>
                        <img src="assets/how-to-join.avif" style="border-radius: 50px; width: 600px; height: 400px;">
                    </div>

                    <div class="objectives">
                        <div class="obj-con" style="display: flex; margin-bottom: 1.5em; align-items: center; justify-content: center; gap: 1em;">
                            <p style="border-top: 1.5px solid gold; width: 26%"></p>
                            <h3 class="core-objecives">How to Join</h3>
                            <p style="border-top: 1.5px solid gold; width: 26%"></p>
                        </div>

                        <p style="margin-bottom: 1em;">
                            Becoming a part of TBC is an opportunity to elevate your career, business, and impact. Follow these simple steps:
                        </p>

                        <div class="objectives-container">
                            <span class="objectives-feature">
                                Submit Your Application – Fill out the online membership form and provide details about your professional background.
                            </span>

                            <span class="objectives-feature">
                                Screening & Approval – Our team reviews applications to ensure alignment with TBC’s vision and values.
                            </span>

                            <span class="objectives-feature">
                                Welcome to TBC! – Once approved, you’ll receive access to exclusive benefits, networking events, and growth opportunities.
                            </span>
                        </div>
                    </div>
                </div>

                <div class="next-level-container">
                    <h2>
                        Ready to take your success to the next level?
                    </h2>

                    <p>
                        Submit your application and start your journey with TBC!
                    </p>

                    <a href="" class="join-now">Join Now</a>
                </div>
            </div>
        `
    };

    // Handles navigation with or without page reload
    function navigate(event, path) {
        event.preventDefault();
        if (path === '/index.html' || path === '/') {
            window.location.href = '/'; // Navigate to root URL
        } else {
            window.location.hash = path; // SPA behavior for other routes
            render();
        }
    }

    // Renders content based on current route
    function render() {
        const path = window.location.hash || ''; // Default to home
        const heroSection = document.querySelector('.hero-section'); // Grab hero section
        const heroContents = document.querySelector('.hero-contents-container')
    
        // Remove any previous page-specific classes
        heroSection.classList.remove('about', 'membership');
        heroContents.classList.remove('about', 'membership');
    
        // Dynamically updatehero-contents-container hero section style based on route
        if (path === '#/about') {
            heroSection.classList.add('about');
            heroContents.classList.add('about');
        } else if (path === '#/membership') {
            heroSection.classList.add('membership');
            heroContents.classList.add('membership');
        }
    
        // Render the page content
        document.getElementById('app').innerHTML = routes[path] || '<h1>404 Not Found</h1>';

        document.getElementById('main').innerHTML = secoundRoute[path] || '<h1>404 Not Found</h1>';
    }    

    // Manage active link state
    function initActiveLink() {
        const links = document.querySelectorAll('.link');

        function setActiveLink() {
            const currentHash = window.location.hash || '/'; // '/' for home route without hash
        
            links.forEach(link => {
                let hrefHash = link.getAttribute('href');
                if (hrefHash === '' || hrefHash === '#/') hrefHash = '/'; // Normalize home path
        
                if (hrefHash === currentHash) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }        

        // Set on page load and hash change
        setActiveLink();
        window.addEventListener('hashchange', setActiveLink);

        // Set on manual click
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-link]')) {
                setTimeout(setActiveLink, 100); // Delay to allow hash update
            }
        });
    }

    // Create reusable button elements
    function createButton(text, type, route) {
        const button = document.createElement("button");
        button.className = `btn ${type}`; // Apply styles dynamically
        button.textContent = text;
        button.addEventListener("click", () => {
            window.location.hash = route; // Updates the hash, triggering the SPA router
        });
        return button;
    }

    // Handle sliding text in the hero section
    function mainSlideText() {
        const texts = [
            "Experience the convergence of success, wealth, and impact at TBC",
            "Powerhouse of elite professionals, shaping the future with a billionaire’s mindset",
            "A united force of thriving professionals, shaping the future"
        ];

        let index = 0;
        const textElement = document.getElementById("hero-heading");

        if (!textElement) {
            console.error("Error: Element with ID 'hero-heading' not found!");
            return;
        }

        // Set the initial text
        textElement.innerText = texts[index];

        function slideText() {
            index = (index + 1) % texts.length;

            textElement.style.animation = "none"; // Reset animation
            void textElement.offsetWidth; // Trigger reflow

            textElement.innerText = texts[index]; // Update text
            textElement.style.animation = "slideText 1s ease-in-out"; // Apply animation
        }

        setInterval(slideText, 5000); // Change text every 5 seconds
    }

    // Initialize all functionalities when the page loads
    document.addEventListener('DOMContentLoaded', () => {
        // Event listener for SPA link navigation
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-link]')) {
                navigate(e, e.target.getAttribute('href'));
            }
        });

        // Handle back/forward browser buttons
        window.addEventListener('hashchange', render);

        // Initial page render and setup
        render();
        initActiveLink();
        mainSlideText();
        scrollToTop();
        handleToggleHeaderStatic();

        // button creation
        (function() {
            // Button Containers
            const buttonContainer = document.getElementById("button-container");
            const aboutButtonContainer = document.getElementById("about-button-container");
            const membershipButtonContainer = document.getElementById("membership-button-container");
        
            // Create and append buttons
            buttonContainer.appendChild(createButton("Get Involved", "primary"));
            buttonContainer.appendChild(createButton("Contribute", "secondary"));
            aboutButtonContainer.appendChild(createButton("Read more", "read-more", "#/about"));
            membershipButtonContainer.appendChild(createButton("Read more", "read-more", "#/membership"));
        })();
    });

    // ========================================================
    // Scroll to top functionality using higher-order functions
    // ========================================================
    
    function createScrollHandler(threshold, action) {
        return () => {
            if (document.body.scrollTop > threshold || document.documentElement.scrollTop > threshold) {
                action(true);
            } else {
                action(false);
            }
        };
    }
    
    function scrollToTop() {
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
        // Function to toggle button visibility
        const toggleVisibility = (isVisible) => {
            scrollToTopBtn.style.display = isVisible ? 'block' : 'none';
        };
    
        // Attach event listener using higher-order function
        window.addEventListener('scroll', createScrollHandler(500, toggleVisibility));
    
        // Smooth scroll to top function
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }   
    
    // ====================================
    // Function to make the header static on scroll
    // ====================================

    const handleToggleHeaderStatic = () => {
        const headerElement = document.getElementById('header');

        /**
         * Function to toggle the header's fixed position
         */
        const toggleHeaderFixed = () => {
            if (window.scrollY > 670) {
                headerElement.classList.add('fixed-header'); // Add a class when scrolling
            } else {
                headerElement.classList.remove('fixed-header'); // Remove the class when at the top
            }
        };

        // Event listener for scrolling
        window.addEventListener('scroll', toggleHeaderFixed);
    }
}
