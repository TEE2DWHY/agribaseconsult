import React from "react";

interface CustomButtonProps {
  text: string;
  styling: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, styling }) => {
  return (
    <>
      <button className={styling}>{text}</button>
    </>
  );
};

export default CustomButton;
