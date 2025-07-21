import React, { useState } from "react";
import styles from "./select.module.css";

const Select = ({ options = [], onSelect = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClick = (item) => {
    setInputValue(item);
    onSelect(item);
    setIsOpen(false)
  };

  const handleChange = (e) => {
    const { value } = e.target || {};
    setInputValue(value);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        readOnly
        onClick={() => setIsOpen((prev) => !prev)}
      />
{isOpen &&
      <div className={styles.dropdown}>
        {options.map((item, index) => {
          return (
            <div key={index} onClick={() => handleClick(item)}>
              {item}
            </div>
          );
        })}
      </div>}
    </div>
  );
};

export default Select;
