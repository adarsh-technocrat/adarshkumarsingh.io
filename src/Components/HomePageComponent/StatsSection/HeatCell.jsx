import React from "react";

function HeatCell({ day, title, className }) {
  return (
    <div
      key={day}
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title={title}
      className={className}
    />
  );
}

export default HeatCell;
