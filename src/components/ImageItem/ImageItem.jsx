/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ImageItem.css";

const ImageItem = ({ src, isFeatured, key, draggable, onDragStart, onDragEnter, onDragEnd, setImage }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const toggleImageSelection = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  return (
    <div draggable={draggable} 
    className={`image-item ${isFeatured ? "featured" : ""}`}
    onDragStart={onDragStart}
    onDragEnter={onDragEnter}
    onDragEnd={onDragEnd}
    setSelectedImages={setImage}
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
        />
      </div>
    </div>
  );
};

export default ImageItem;
