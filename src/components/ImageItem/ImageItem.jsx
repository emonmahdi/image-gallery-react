/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ImageItem.css";

const ImageItem = ({
  src,
  isFeatured,
  key,
  draggable,
  onDragStart,
  onDragEnter,
  onDragEnd,
  setImage,
  checkedItems,
  handleCheck,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  // Toggle the selected state
  const toggleImageSelection = (imageId) => {
    setIsSelected(!isSelected);
    handleCheck({
      target: {
        checked: !isSelected,
        value: imageId,
      },
    });
  };

  return (
    <>
      <div
        draggable={draggable}
        className={`image-item ${isFeatured ? "featured" : ""}`}
        onDragStart={onDragStart}
        onDragEnter={onDragEnter}
        onDragEnd={onDragEnd}
        setSelectedImages={setImage}
        key={key}
      >
        <img
          src={src.img}
          alt="Image"
          style={{
            opacity: isSelected ? 0.6 : 1, // Reduce opacity when selected
          }}
        />
        <div className={`image-overlay ${isSelected ? `selected` : ""}`}>
          {checkedItems ? (
            <input
              type="checkbox"
              checked={isSelected}
              onClick={() => toggleImageSelection(src.id)}
              className="input-checkbox"
              readOnly
            />
          ) : (
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => toggleImageSelection(src.id)}
              className="input-checkbox"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ImageItem;
