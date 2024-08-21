import { ReactNode } from "react";
import styles from "../index.module.scss";

interface ParentWrapper {
  children: ReactNode;
}

const ParentWrapper: React.FC<ParentWrapper> = ({ children }) => {
  return <div className={styles.body}>{children}</div>;
};

export default ParentWrapper;
