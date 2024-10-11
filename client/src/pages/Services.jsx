
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-container">
      {/* Header Section */}
      <section className="services-header">
        <h1>Our Services</h1>
        <p>We offer a wide range of services tailored to meet your needs. Explore our services below and discover how we can help  achieve your goals.</p>
      </section>

      {/* Services List Section */}
      <section className="services-list">
        <div className="service-card">
          <h2>Web Development</h2>
          <p>
            Build responsive, modern, and high-performing websites. We specialize in both front-end and back-end development.
          </p>
        </div>

        <div className="service-card">
          <h2>Mobile App Development</h2>
          <p>
            Design and develop mobile applications for iOS and Android platforms that provide seamless user experiences.
          </p>
        </div>

        <div className="service-card">
          <h2>UI/UX Design</h2>
          <p>
            Create user-friendly designs that combine aesthetics with functionality, ensuring a great user experience.
          </p>
        </div>

        <div className="service-card">
          <h2>SEO & Digital Marketing</h2>
          <p>
            Boost your online presence with our tailored SEO strategies, content marketing, and social media management services.
          </p>
        </div>

        <div className="service-card">
          <h2>Cloud Solutions</h2>
          <p>
            Implement secure and scalable cloud solutions that fit your business needs, from cloud storage to server management.
          </p>
        </div>

        <div className="service-card">
          <h2>E-commerce Solutions</h2>
          <p>
            Develop complete e-commerce platforms with seamless payment integration and inventory management systems.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
