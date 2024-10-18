import './ServicesPage.css';
import { useAuth } from '../../store/auth';

const ServicesPage = () => {
  const { service } = useAuth();

  return (
    <div className="services-container">
      {service && service.length > 0 ? (
        service.map((currentElem, index) => {
          const { services, description, price, product } = currentElem;
          return (
            <section className="services-header" key={index}>
              <h1>{services}</h1>
              <p>{description}</p>
              <p>{price}</p>
              <p>{product}</p>
            </section>
          );
        })
      ) : (
        <p>No services available.</p>
      )}
    </div>
  );
};

export default ServicesPage;
