import { useState } from "react";
import styles from "../home.module.scss";

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
    name: "Jess Santiago",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    review:
      "Finding poultry that’s both healthy and delicious used to be a challenge, but not anymore. The birds are always so flavourful, and I appreciate their commitment to hormone-free, antibiotic-free products.",
    rating: 4,
  },
  {
    id: 2,
    name: "Alex Johnson",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "The quality of poultry products here is unmatched. I love how fresh and tasty everything is.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mia Thompson",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    review:
      "Great service and even better products. My family and I have been loyal customers for years.",
    rating: 5,
  },
];

const Feedback: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleDotClick = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.feedback}>
      <h1>Our Customers Feedback</h1>
      <p>
        This is a testament to our commitment to quality, service, and ethical
        practices, inspiring us to continually deliver the best in poultry
        products.
      </p>
      <div className={styles.carousel}>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${styles.testimonial} ${
              currentIndex === index ? styles.active : ""
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <div className={styles.customerInfo}>
              <div className={styles.left}>
                <img src={testimonial.image} alt={testimonial.name} />
                <div className={styles.details}>
                  <h2>{testimonial.name}</h2>
                  <span>{testimonial.role}</span>
                </div>
              </div>
              <div className={styles.rating}>
                <span>{"★".repeat(testimonial.rating)}</span>
                <span>{"☆".repeat(5 - testimonial.rating)}</span>
              </div>
            </div>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
