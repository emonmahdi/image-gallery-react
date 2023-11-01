import { useState } from "react";
import "./Test.css";

const Test = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const toggleImageSelection = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  const images = [
    {
      id: 1,
      src: "https://i.ibb.co/ns9rW3g/office-2.jpg",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://i.ibb.co/vxQkNQF/office-3.jpg",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://i.ibb.co/R7dCMVf/living-2.jpg",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://i.ibb.co/0ZvXwt9/Living-1.jpg",
      alt: "Image 4",
    },
  ];

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div
          key={image.id}
          className={`image-item ${
            selectedImages.includes(image.id) ? "selected" : ""
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            onClick={() => toggleImageSelection(image.id)}
          />
          <div className="image-overlay">
            <label>
              <input
                type="checkbox"
                checked={selectedImages.includes(image.id)}
                onChange={() => toggleImageSelection(image.id)}
              />
              <span>Selected</span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;
