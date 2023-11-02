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

  const toggleImageSelection = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
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
        <img src={src} onChange={() => toggleImageSelection(key)} alt="Image" />
        <div
          className={`image-overlay ${
            selectedImages.includes(key) ? `selected` : ""
          }`}
        >
          <input
            type="checkbox"
            checked={selectedImages.includes(key)}
            onClick={() => toggleImageSelection(key)}
            className="input-checkbox"
            // onChange={() => handleOnChange(index)}
            onChange={handleCheck}
            readOnly
          />
        </div>
      </div>
    </>
  );
};

export default ImageItem;
