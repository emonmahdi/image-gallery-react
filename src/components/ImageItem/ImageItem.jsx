/* eslint-disable react/prop-types */
import "./ImageItem.css";

const ImageItem = ({ src, isFeatured }) => {
  return (
    <div className={`image-item ${isFeatured ? "featured" : ""}`}>
      <img src={src} alt="Image" />
    </div>
  );
};

export default ImageItem;