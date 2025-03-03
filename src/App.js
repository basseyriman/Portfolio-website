import React from "react";
import "./App.css";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      {/* Navigation/Logo */}
      <nav className="nav-container">
        <Logo />
        <div className="nav-right">
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-social">
            <a href="mailto:basseyriman@gmail.com" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/basseyriman/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <video className="hero-video" autoPlay muted loop>
          <source src="/9860820-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>
            Hello, I'm <span className="highlight">Bassey Riman</span>
          </h1>
          <p className="subtitle">AI & Machine Learning Engineer</p>
          <div className="cta-container">
            <div className="animated-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </div>
            <button
              className="cta-button"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              About Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="profile-image">
            <img
              src="/Riman.jpg"
              alt="Bassey Riman"
              className="profile-photo"
            />
          </div>
          <div className="about-text">
            <p className="about-description">
              Highly experienced and results-driven AI/ML Engineer with 2+ years
              of experience developing innovative AI solutions across sectors
              like healthcare, national security, and sports analytics. Eager to
              support companies in delivering cutting-edge AI solutions by
              leveraging expertise in machine learning, deep learning, computer
              vision, and data analysis to build impactful and scalable systems.
            </p>
          </div>
        </div>
        <div className="section-nav">
          <div className="animated-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </div>
          <button
            className="section-button"
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card featured">
            <div className="project-content">
              <div className="project-header">
                <div className="project-logo">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                      fill="#2563eb"
                    />
                    <path
                      d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                      fill="#2563eb"
                    />
                  </svg>
                  <h3>AlzDetect</h3>
                </div>
              </div>
              <p>
                An AI-powered web application for early Alzheimer's Disease
                detection through MRI analysis. Achieved 99% accuracy using
                Vision Transformer (ViT-B32) model.
              </p>
              <div className="project-links">
                <a
                  href="https://dissertation-7btvsdelz-bassey-rimans-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-preview">
              <img
                src="/Screenshot 2025-02-26 021013.jpg"
                alt="AlzDetect Project Interface"
                className="preview-image"
              />
            </div>
          </div>

          <div className="project-card featured">
            <div className="project-content">
              <div className="project-header">
                <div className="project-logo">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
                      fill="#2563eb"
                    />
                  </svg>
                  <h3>PhotoCap</h3>
                </div>
              </div>
              <p>
                An AI-powered caption generator that helps users create engaging
                captions for their photos based on location, outfit colors, and
                time of day. Simplifies social media content creation.
              </p>
              <div className="project-links">
                <a
                  href="https://photo-cap.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/basseyriman/PhotoCap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-preview">
              <img
                src="/Screenshot 2025-02-26 235749.jpg"
                alt="PhotoCap Project Interface"
                className="preview-image"
              />
            </div>
          </div>

          <div className="project-card featured">
            <div className="project-content">
              <div className="project-header">
                <div className="project-logo">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="#2563eb"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6l-10 7L2 6"
                      stroke="#2563eb"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3>Portfolio Website</h3>
                </div>
              </div>
              <p>
                A modern, responsive portfolio website built with React,
                showcasing my expertise in AI and Machine Learning. Features
                include project showcases, interactive UI elements, skills
                visualization, and a contact system for potential
                collaborations.
              </p>
              <div className="project-links">
                <a
                  href="https://portfolio-website-five-amber.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/basseyriman/portfolio-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-preview">
              <img
                src="/Screenshot 2025-03-03 115045.jpg"
                alt="Portfolio Website Interface"
                className="preview-image"
              />
            </div>
          </div>
        </div>
        <div className="section-nav">
          <div className="animated-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </div>
          <button
            className="section-button"
            onClick={() =>
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            My Skills
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>Skills</h2>
        <div className="skills-content">
          <div className="skills-bars-container">
            <div className="skill-item">
              <span className="skill-name">Programming & Scripting</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Machine Learning & AI</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">
                Data Processing & Visualization
              </span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">MLOps & Deployment</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Research & Development</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-nav">
          <div className="animated-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </div>
          <button
            className="section-button"
            onClick={() =>
              document
                .getElementById("experience")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            My Experience
          </button>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience">
        <h2>My Experience</h2>
        <div className="experience-grid">
          <div className="experience-item">
            <div className="experience-header">
              <h3>MSc in Artificial Intelligence with Advanced Practice</h3>
              <div className="experience-meta">
                <span className="company">Teesside University</span>
                <span className="duration">January 2023 - January 2025</span>
              </div>
            </div>
            <p>
              Gained a strong foundation in artificial intelligence and its
              applications, supported by a range of advanced coursework. Studies
              provided hands-on experience in AI technologies and methodologies,
              preparing me to tackle complex, real-world challenges.
            </p>
            <div className="key-modules">
              <h4>Key Modules:</h4>
              <ul>
                <li>Research Methodology</li>
                <li>Machine Learning</li>
                <li>Artificial Intelligence Ethics and Application</li>
                <li>Statistical Methods for Data Analysis</li>
                <li>Intelligent Decision Support Systems</li>
                <li>Artificial Intelligence Foundations</li>
                <li>Advanced Practice</li>
                <li>Computing Masters Project</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3>Machine Learning Engineer</h3>
              <div className="experience-meta">
                <span className="company">
                  Middlesbrough Football Club (Intern)
                </span>
                <span className="duration">January 2024 - May 2024</span>
              </div>
            </div>
            <p>
              Developed machine learning models to classify players and predict
              performance outcomes based on physical profiling data. Leveraged
              gradient boosting techniques for accurate predictions, using
              regularization to prevent overfitting and identify key performance
              indicators.
            </p>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3>Founder and Tech Lead</h3>
              <div className="experience-meta">
                <span className="company">The Legitimate Store</span>
                <span className="duration">January 2017 - January 2023</span>
              </div>
            </div>
            <p>
              I spearheaded a dynamic team in developing and overseeing an
              e-commerce platform, leveraging data-driven insights to enhance
              operations and deliver personalized product experiences. Built
              predictive models for inventory forecasting, reducing overstock by
              12%. Integrated AI-powered fraud detection systems, cutting
              fraudulent transactions by 7%. Optimized dynamic pricing
              strategies using deep learning, increasing revenue by 20%.
            </p>
          </div>
        </div>

        {/* Navigation before Education */}
        <div className="section-nav">
          <div className="animated-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </div>
          <button
            className="section-button"
            onClick={() =>
              document
                .getElementById("education")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Education
          </button>
        </div>

        {/* Education Section */}
        <div className="education" id="education">
          <h2>Education</h2>
          <div className="education-items">
            <div className="education-item">
              <h3>MSc Artificial Intelligence with Advanced Practice</h3>
              <p className="education-meta">
                Grade: Distinction | Teesside University | Jan 2025
              </p>
            </div>

            <div className="education-item">
              <h3>BSc Computer Science</h3>
              <p className="education-meta">
                Grade: 2.1 | Cross River University of Technology | Dec 2014
              </p>
            </div>
          </div>
          <div className="section-nav">
            <div className="animated-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </div>
            <button
              className="section-button"
              onClick={() =>
                document
                  .getElementById("publications")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Publications
            </button>
          </div>
        </div>

        {/* Publications Section */}
        <div className="publications" id="publications">
          <h2>Publications</h2>
          <div className="publication-items">
            <div className="publication-item">
              <h3>
                Utilizing Vision Transformers (ViT) for Early Diagnosis of
                Alzheimer's Disease through MRI Analysis
              </h3>
              <p className="publication-status">Paper Under Review</p>
            </div>
          </div>
          <div className="section-nav">
            <div className="animated-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
              </svg>
            </div>
            <button
              className="section-button"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-header">
              <h2>Get In Touch</h2>
              <div className="contact-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12h16M12 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
            <p className="contact-description">
              Interested in learning more about my projects or exploring how my
              AI and Machine Learning expertise can benefit your team? Fill out
              the form, and I'll get back to you shortly!
            </p>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="name-row">
              <div className="input-group">
                <label>
                  Name <span>*</span>
                </label>
                <input type="text" placeholder="First" required />
              </div>
              <div className="input-group">
                <label>
                  Last <span>*</span>
                </label>
                <input type="text" placeholder="Last" required />
              </div>
            </div>
            <div className="input-group">
              <label>
                Email <span>*</span>
              </label>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <label>
                Message <span>*</span>
              </label>
              <textarea placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-social-links">
          <a
            href="https://www.linkedin.com/in/basseyriman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </span>
          </a>
          <a
            href="https://github.com/basseyriman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </span>
          </a>
          <a
            href="https://www.kaggle.com/basseyriman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
              </svg>
              Kaggle
            </span>
          </a>
        </div>
        <p>&copy; 2025 Bassey Riman. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
