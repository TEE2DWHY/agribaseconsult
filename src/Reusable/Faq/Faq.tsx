import React, { useState } from 'react';
import styles from './Faq.module.scss';
import plus from '../../assets/images/plus.svg';
import minus from '../../assets/images/minus.svg';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    if (index === openIndex) {
      // Close the currently open answer
      setOpenIndex(null);
    } else {
      // Open the clicked answer
      setOpenIndex(index);
    }
  };

  return (
    <div className={styles.faq_head}>
      <p className={styles.faq_p1}>Frequently Asked Questions</p>

      <div className={styles.faq_section}>
        <div className={`${styles.faq_top} ${
              openIndex === 0 ? `${styles.open} ${styles.expanded}` : ''
            }`}
        >
          <div className={styles.faq_q1}>
            <p>What type of poultry services do you offer?</p>
            <div
              className={styles.faq_question}
              onClick={() => handleQuestionClick(0)}
            >
              <img
                src={openIndex === 0 ? minus : plus}
                alt={openIndex === 0 ? "collapse-icon" : "expand-icon"}
              />
            </div>
          </div>

          {openIndex === 0 && <hr className={styles.hr_line} />}

          <div
            className={`${styles.faq_answer} ${
              openIndex === 0 ? `${styles.open} ${styles.expanded}` : ''
            }`}
          >
            <p>Simply click on BUY NOW to order or you can reach us via our telephone number. You can also reach out to us from the contact page and send us a message. We assure you of swift delivery not later than 48 hours from when order was placed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
