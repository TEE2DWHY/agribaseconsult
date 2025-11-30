import { useState } from 'react';
import styles from '../home.module.scss';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Adebayo Ogunleye',
    role: 'Customer',
    image:
      'https://images.unsplash.com/photo-1533108344127-a586d2b02479?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    review:
      "Finding poultry that's both healthy and delicious used to be a challenge, but not anymore. The birds are always so flavourful, and I appreciate their commitment to hormone-free, antibiotic-free products.",
    rating: 4,
  },
  {
    id: 2,
    name: 'Chioma Nwosu',
    role: 'Customer',
    image:
      'https://images.unsplash.com/photo-1644152993066-9b9ee687930d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    review:
      'The quality of poultry products here is unmatched. I love how fresh and tasty everything is. My family trusts only their products.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ibrahim Musa',
    role: 'Customer',
    image:
      'https://images.unsplash.com/photo-1594561009266-2dd5d830ae34?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    review:
      'Great service and even better products. My family and I have been loyal customers for years. The freshness is always guaranteed.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Funmilayo Adeyemi',
    role: 'Customer',
    image:
      'https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    review:
      'Exceptional quality and taste! The poultry is always fresh and the customer service is outstanding. Highly recommended.',
    rating: 5,
  },
];

const Feedback: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleDotClick = (index: number): void => {
    setCurrentIndex(index);
  };

  // Calculate which testimonials to show (2 at a time)
  const visibleTestimonials = [
    testimonialsData[currentIndex],
    testimonialsData[(currentIndex + 1) % testimonialsData.length],
  ];

  return (
    <div className={styles.feedback}>
      <div className={styles.feedbackHeader}>
        <h1>Our Customers Feedback</h1>
        <p>
          This is a testament to our commitment to quality, service, and ethical
          practices, inspiring us to continually deliver the best in poultry
          products.
        </p>
      </div>

      <div className={styles.testimonialsGrid}>
        {visibleTestimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <div className={styles.cardHeader}>
              <div className={styles.customerInfo}>
                <img src={testimonial.image} alt={testimonial.name} />
                <div className={styles.details}>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < testimonial.rating ? styles.filled : ''}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className={styles.review}>{testimonial.review}</p>
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {testimonialsData.slice(0, -1).map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ''
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to testimonial set ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
