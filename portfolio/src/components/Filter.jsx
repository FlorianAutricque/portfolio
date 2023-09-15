import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Filter.module.css";
import styles2 from "./Button.module.css";

function Filter({ filterField, options, onSelectFilter }) {
  const [searchParams] = useSearchParams();
  const [activeOption, setActiveOption] = useState(
    searchParams.get(filterField) || options[0].value
  );

  useEffect(() => {
    onSelectFilter(activeOption);
  }, [activeOption, onSelectFilter]);

  const handleOptionClick = optionValue => {
    setActiveOption(optionValue);
  };

  return (
    <div className={styles.selectFilter}>
      {options.map(option => (
        <Link
          key={option.value}
          value={option.value}
          onClick={() => handleOptionClick(option.value)}
          className={`${styles2.button} ${
            activeOption === option.value ? styles.activeFilter : ""
          }`}
        >
          <span className={styles2.textLink}>
            {option.icon}
            {option.label}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default Filter;
