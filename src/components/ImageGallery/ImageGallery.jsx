import ImageItem from "../ImageItem/ImageItem";
import "./ImageGallery.css";

const ImageGallery = () => {
  const images = [
    "https://i.ibb.co/ns9rW3g/office-2.jpg",
    "https://i.ibb.co/vxQkNQF/office-3.jpg",
    "https://i.ibb.co/R7dCMVf/living-2.jpg",
    "https://i.ibb.co/0ZvXwt9/Living-1.jpg",
    "https://i.ibb.co/vxQkNQF/office-3.jpg",
    "https://i.ibb.co/b1cxN5c/door-1.png",
    "https://i.ibb.co/wQM0kWN/Dining-Set.jpg",
    "https://i.ibb.co/Wt1G0bq/Dining-2.jpg",
  ];
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "35px 30px" }}>
        React Image Gallery
      </h1>
      <div className="image-gallery">
        {images.map((image, index) => (
          <ImageItem key={index} src={image} isFeatured={index === 0} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
