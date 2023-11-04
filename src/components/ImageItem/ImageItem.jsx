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
  const [selectedImages, setSelectedImages] = useState([]);
  // console.log("selected ", selectedImages);

  // const toggleImageSelection = (imageId) => {
  //   if (selectedImages.includes(imageId)) {
  //     setSelectedImages(selectedImages.filter((id) => id !== imageId));
  //   } else {
  //     setSelectedImages([...selectedImages, imageId]);
  //   }
  // };
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
              className={`input-checkbox ${
                isSelected ? "active-checkbox" : ""
              }`}
              readOnly
            />
          ) : (
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => toggleImageSelection(src.id)}
              className={`input-checkbox ${
                isSelected ? "active-checkbox" : ""
              }`}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ImageItem;
