import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

import styles from "./Filter.module.css";
import styles2 from "./Button.module.css";

function Filter({ filterField, options, onSelectFilter, selectedFilter }) {
  const [searchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  useEffect(() => {
    onSelectFilter(currentFilter);
  }, [currentFilter, onSelectFilter]);

  // function handleChange(event) {
  //   const selectedValue = event.target.value;
  //   searchParams.set(filterField, selectedValue);
  //   setSearchParams(searchParams);
  // }

  return (
    <div className={styles.selectFilter}>
      {options.map(option => (
        <Link
          key={option.value}
          value={option.value}
          onClick={() => onSelectFilter(option.value)}
          // className={option.value === selectedFilter ? "active" : ""}
          className={styles2.button}
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
