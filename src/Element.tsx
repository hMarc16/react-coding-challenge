
type ElementProps = {
  element: { title: string };
};


function Element({ element }: ElementProps) {
  const handleDragStart = (e: React.DragEvent) => {
    // Set the data to be transfered
    e.dataTransfer.setData("text/plain", element.title);
  };

  return (
    <div
      className="element-box"
      draggable
      onDragStart={handleDragStart}
    >
      {element.title}
    </div>
  );
}

export default Element