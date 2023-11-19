import React from "react";
import ReactSelect from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const Select = () => {
  return (
    <div>
      <ReactSelect options={options} />
    </div>
  );
};

export default Select;
