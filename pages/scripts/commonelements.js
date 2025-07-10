const currentYear = new Date().getFullYear();

var contactSection = document.getElementById('contact');
contactSection.innerHTML = `<p class="section__text__p1">Get in Touch</p>
                            <h1 class="title">Contact Me</h1>
                            <div class="contact-info-upper-container">
                                <!-- modify this form HTML and place wherever you want your form -->
                                <form
                                action="https://formspree.io/f/xwpbgvag"
                                method="POST"
                                >
                                <label>
                                    Your email:
                                    <input type="email" name="email">
                                </label>
                                <label>
                                    Your message:
                                    <textarea name="message"></textarea>
                                </label>
                                <!-- your other form fields go here -->
                                <button type="submit">Send</button>
                                </form>
                            </div>`

var desktopNavSection = document.getElementById('desktop-nav');
desktopNavSection.innerHTML = `<div class="logo">
                                    <a href="home.html" onclick="toggleMenu()">Nkosikhona Mlaba</a>
                                </div>
                                <div>
                                    <ul class="nav-links">
                                        <li><a href="home.html">Home</a></li>
                                        <li><a href="projects.html">Projects</a></li>
                                        <li><a href="#contact">Contact</a></li>
                                    </ul>
                                </div>`
                                // <li><a href="about.html">About</a></li>

var hamBurgerNavSection = document.getElementById('hamburger-nav');
hamBurgerNavSection.innerHTML = `<div class="logo">
                                    <a href="home.html" onclick="toggleMenu()">Nkosikhona Mlaba</a>
                                </div>
                                <div class="hamburger-menu">
                                    <div class="hamburger-icon" onclick="toggleMenu()">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div class="menu-links">
                                        <li><a href="home.html" onclick="toggleMenu()">Home</a></li>
                                        <li><a href="projects.html" onclick="toggleMenu()">Projects</a></li>
                                        <li><a href="about.html" onclick="toggleMenu()">About</a></li>
                                        <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
                                    </div>
                                </div>`

var footerElement = document.querySelector('footer');
footerElement.innerHTML = `<nav>
                                <div class="nav-links-container">
                                    <ul class="nav-links">
                                        <li><a href="home.html">Home</a></li>
                                        <li><a href="projects.html">Projects</a></li>
                                        <li><a href="#contact">Contact</a></li>
                                    </ul>
                                </div>
                            </nav>
                            <p style="margin-bottom: 50px">
                                © Copyright ${currentYear} | Nkosikhona Mlaba | All rights reserved
                                <br><br>
                            </p>`
