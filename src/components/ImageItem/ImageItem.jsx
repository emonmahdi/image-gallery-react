/* eslint-disable react/prop-types */
import "./ImageItem.css";

const ImageItem = ({ src, isFeatured }) => {
  return (
    <div className={`image-item ${isFeatured ? "featured" : ""}`}>
      <img src={src} alt="Image" />
      <div className="image-overlay">
        <input type="checkbox" className="input-checkbox" />
      </div>
    </div>
  );
};

export default ImageItem;
