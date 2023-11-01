import ImageItem from "../ImageItem/ImageItem";
import img1 from "./../../assets/images/image-1.webp";
import img2 from "./../../assets/images/image-2.webp";
import img3 from "./../../assets/images/image-3.webp";
import img4 from "./../../assets/images/image-4.webp";
import img5 from "./../../assets/images/image-5.webp";
import img6 from "./../../assets/images/image-6.webp";
import img7 from "./../../assets/images/image-7.webp";
import img8 from "./../../assets/images/image-8.webp";
import img9 from "./../../assets/images/image-9.webp";
import img10 from "./../../assets/images/image-10.jpeg";
import img11 from "./../../assets/images/image-11.jpeg";

import "./ImageGallery.css";

const ImageGallery = () => {
  const images = [
    `${img1}`,
    `${img2}`,
    `${img3}`,
    `${img4}`,
    `${img5}`,
    `${img6}`,
    `${img7}`,
    `${img8}`,
    `${img9}`,
    `${img10}`,
    `${img11}`,
  ];
  return (
    <div className="gallery-body">
      <div className="top-title-section">
        <h2>Gallery</h2>
        <h3>
          <a href="">Delete Files</a>
        </h3>
      </div>
      <hr />
      <div className="image-gallery">
        {images.map((image, index) => (
          <ImageItem key={index} src={image} isFeatured={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
