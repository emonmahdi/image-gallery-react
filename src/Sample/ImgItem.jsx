// ImageItem.js
import React, { useState } from "react";

const ImgItem = ({
  src,
  draggable,
  setImage,
  checkedItems,
  handleCheck,
  isDeleting,
}) => {
  const [isSelected, setIsSelected] = useState(false);

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
    <div
      draggable={draggable}
      className={`image-item ${isSelected ? "selected" : ""}`}
    >
      <img src={src.img} alt="Image" />
      <div className="image-overlay">
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
  );
};

export default ImgItem;
