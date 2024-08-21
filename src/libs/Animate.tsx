import React, { useEffect, ReactNode } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Define the type for props
interface AnimateProps {
  children: ReactNode;
}

const Animate: React.FC<AnimateProps> = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return <>{children}</>;
};

export default Animate;
