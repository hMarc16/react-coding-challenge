// https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData

import { useState } from "react";

type FieldProps = {
  input: string;
};

function Fields({ input }: FieldProps) {
  const [fieldInput, setFieldInput] = useState(input);  // To update the input fields
  const [hovered, setHovered] = useState(false); // To check the hovered state for highlighting

  const handleDrop = (e: React.DragEvent) => {
    // Prevent default behaviour
    e.preventDefault();
    // Get the data
    const data = e.dataTransfer.getData("text/plain");
    setFieldInput(data); // Re-render the existing input field to the dragged data
    setHovered(false);  // Set the Hovered state to false
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setHovered(true);   // Set Hoeered to true for highlight
  };

  const handleDragLeave = () => {
    setHovered(false);  // Set Hovered to false as dragging leaves
  }

  return (
    <div className={`input-box ${hovered ? "highlight" : ""}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {fieldInput}
    </div>
  );
}

export default Fields;
