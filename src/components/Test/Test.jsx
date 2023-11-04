import React, { useState } from "react";
import img1 from "./../../assets/images/image-1.webp";
import img2 from "./../../assets/images/image-2.webp";
import img3 from "./../../assets/images/image-3.webp";

function Test() {
  const [images, setImages] = useState([
    { id: 1, src: `${img1}` },
    { id: 2, src: `${img2}` },
    { id: 3, src: `${img3}` },
    // Add more image objects as needed
  ]);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleCheckboxChange = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  const handleDeleteSelected = () => {
    const updatedImages = images.filter(
      (image) => !selectedImages.includes(image.id)
    );
    setImages(updatedImages);
    setSelectedImages([]);
  };

  return (
    <div>
      <button onClick={handleDeleteSelected}>Delete Selected</button>
      <ul>
        {images.map((image) => (
          <li
            key={image.id}
            style={{ display: "flex", alignItems: "center", margin: "5px" }}
          >
            <input
              type="checkbox"
              checked={selectedImages.includes(image.id)}
              onChange={() => handleCheckboxChange(image.id)}
            />
            <img
              src={image.src}
              style={{ width: "300px", height: "auto" }}
              alt={`Image ${image.id}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
