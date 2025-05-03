import React from 'react';
import '../style/About.css'; // Make sure to link the updated CSS file

const About = () => {
  return (
    <div className="about-page">
      <div className="about-box">
        <header className="about-header">
          <h1>Welcome to IntelliPartner</h1>
          <p>
            A newly established leader in Robotic Process Automation (RPA)
            specializing in UiPath solutions.
          </p>
        </header>
        
        <section className="mission-section">
          <div className="section-box">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower businesses to enhance efficiency and
              drive innovation by automating repetitive tasks and optimizing workflows.
            </p>
          </div>
        </section>

        <section className="services-section">
          <div className="section-box">
            <h2>Our Expertise</h2>
            <p>
              At IntelliPartner, we combine our expertise in RPA with the
              powerful capabilities of UiPath to deliver tailored automation
              solutions that meet the unique needs of each client. Our dedicated
              team is passionate about helping organizations unlock their full
              potential.
            </p>
          </div>
        </section>

        <section className="collaboration-section">
          <div className="section-box">
            <h2>Collaboration and Transparency</h2>
            <p>
              We believe in collaboration and transparency, working closely with
              our clients to ensure seamless integration and exceptional results.
            </p>
          </div>
        </section>

        <footer className="footer">
          <p>
            Join us at IntelliPartner as we redefine the future of work through
            intelligent automation.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default About;
