/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ImageItem.css";

const ImageItem = ({ src, isFeatured, key }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const toggleImageSelection = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  return (
    <div className={`image-item ${isFeatured ? "featured" : ""}`}>
      <img src={src} alt="Image" />
      <div
        className={`image-overlay ${
          selectedImages.includes(key) ? "selected" : ""
        }`}
      >
        <input
          type="checkbox"
          checked={selectedImages.includes(key)}
          onChange={() => toggleImageSelection(key)}
          className="input-checkbox"
        />
      </div>
    </div>
  );
};

export default ImageItem;
