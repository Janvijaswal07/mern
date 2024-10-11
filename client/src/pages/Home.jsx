
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Our Website!</h1>
        <p>Your one-stop solution for all your needs. Discover amazing products and services.</p>
        <a href="/services" className="hero-btn">Explore Our Services</a>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h3>Product 1</h3>
            <p>Amazing product description goes here.</p>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h3>Product 2</h3>
            <p>Amazing product description goes here.</p>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>Amazing product description goes here.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            {/* <p>"This website has transformed the way I shop online. Highly recommended!"</p> */}
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial-item">
            {/* <p>"Amazing services and fantastic customer support. I'm very satisfied!"</p> */}
            <h4>- Jane Smith</h4>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <h2>Latest Blog Posts</h2>
        <div className="blog-list">
          <div className="blog-item">
            <h3>Blog Post Title 1</h3>
            <p>Snippet of blog post 1...</p>
            <a href="/blog/1" className="read-more">Read more</a>
          </div>
          <div className="blog-item">
            <h3>Blog Post Title 2</h3>
            <p>Snippet of blog post 2...</p>
            <a href="/blog/2" className="read-more">Read more</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
