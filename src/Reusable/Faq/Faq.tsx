import { useState } from "react";
import styles from "./Faq.module.scss";
import plus from "../../assets/images/plus.svg";
import minus from "../../assets/images/minus.svg";

// Rename the array to avoid conflict with the type
const faqData = [
  { question: "What type of poultry services do you offer?", answer: "We offer a variety of poultry services..." },
  { question: "How do I place an order?", answer: "Simply click on BUY NOW to order or..." },
  { question: "Do you offer shipping or delivery services?", answer: "Yes, we offer delivery services with swift delivery..." },
  { question: "What should I do to ensure the best freshness and quality of the eggs I purchase from your farm?", answer: "Ensure proper refrigeration and consume the eggs before the expiration date." },
];

type FaqItemType = {
  question: string;
  answer: string;
};

type FaqProps = {
  faqItems: FaqItemType[];
};

const Faq = ({ faqItems }: FaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faq_head}>
      <h3 className={styles.faq_p1}>Frequently Asked Questions</h3>

      {faqItems.map((item, index) => (
        <div className={styles.faq_section} key={index}>
          <div
            className={`${styles.faq_top} ${
              openIndex === index ? `${styles.open} ${styles.expanded}` : ""
            }`}
          >
            <div className={styles.faq_q1}>
              <p>{item.question}</p>
              <div
                className={styles.faq_question}
                onClick={() => handleQuestionClick(index)}
              >
                <img
                  src={openIndex === index ? minus : plus}
                  alt={openIndex === index ? "collapse-icon" : "expand-icon"}
                />
              </div>
            </div>

            {openIndex === index && <hr className={styles.hr_line} />}

            <div
              className={`${styles.faq_answer} ${
                openIndex === index ? `${styles.open} ${styles.expanded}` : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Pass faqData as the default data to the Faq component
export default function App() {
  return <Faq faqItems={faqData} />;
}

