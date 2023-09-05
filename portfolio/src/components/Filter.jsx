import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

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
    <div>
      {options.map(option => (
        <button
          key={option.value}
          value={option.value}
          onClick={() => onSelectFilter(option.value)}
          className={option.value === selectedFilter ? "active" : ""}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
