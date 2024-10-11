
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Company Overview Section */}
      <section className="about-section">
        <h1>About Us</h1>
        <p>
          Welcome to our company! We are dedicated to providing the best services and products to our customers.
          Our goal is to offer high-quality solutions that cater to all your needs.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-list">
          <div className="value-item">
            <h3>Innovation</h3>
            <p>We strive to bring cutting-edge solutions to the market and continuously improve our offerings.</p>
          </div>
          <div className="value-item">
            <h3>Integrity</h3>
            <p>Honesty and transparency are at the core of everything we do, ensuring trust with our clients.</p>
          </div>
          <div className="value-item">
            <h3>Customer-Centric</h3>
            <p>Our customers come first, and we make every effort to meet and exceed their expectations.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-list">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>CTO  Co-Founder</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>David Lee</h3>
            <p>Lead Designer</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join Us Today</h2>
        <p>Be a part of our exciting journey. Explore opportunities to work with us or become a client.</p>
        <a href="/contact" className="cta-btn">Contact Us</a>
      </section>
    </div>
  );
};

export default AboutPage;
