import { useState } from "react";
import styles from "./subscribe.module.scss";

interface SubscribeProps {}

const Subscribe: React.FC<SubscribeProps> = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`${email} is subscribed successfully`);
    setEmail("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.subscribe}>
        <div className={styles.left}>
          <h1>Subscribe to our newsletter</h1>
          <p>
            Our fresh poultry products are carefully sourced from our farms,
            ensuring that each chicken and egg is delivered at peak freshness,
            packed with nutrients, and free from harmful additives, so be the
            first to be informed about our fresh produce and enjoy the
            wholesome, natural goodness of farm-to-table quality every time.
          </p>
        </div>
        <form className={styles.right} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
