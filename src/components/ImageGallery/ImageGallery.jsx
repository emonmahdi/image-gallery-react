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
import { useRef, useState } from "react";

const imagess = [
  {
    id: 1,
    img: `${img1}`,
  },
  {
    id: 2,
    img: `${img2}`,
  },
  {
    id: 3,
    img: `${img3}`,
  },
  {
    id: 4,
    img: `${img4}`,
  },
  {
    id: 5,
    img: `${img5}`,
  },
  {
    id: 6,
    img: `${img6}`,
  },
  {
    id: 7,
    img: `${img7}`,
  },
  {
    id: 8,
    img: `${img8}`,
  },
  {
    id: 9,
    img: `${img9}`,
  },
  {
    id: 10,
    img: `${img10}`,
  },
  {
    id: 11,
    img: `${img11}`,
  },
];

const ImageGallery = () => {
  const [images, setImages] = useState(imagess);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  // handle drag sorting
  const handleSort = () => {
    let imageItems = [...images];

    // remove and save the dragged item content
    const dragContentItem = imageItems.splice(dragItem.current, 1)[0];

    // switch the position
    imageItems.splice(dragOverItem.current, 0, dragContentItem);

    // reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    // update the actual array
    setImages(imageItems);
  };

  // new
  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    let updatedList = [...checked];

    if (event.target.checked) {
      updatedList.push(event.target.value);
    } else {
      const index = checked.indexOf(event.target.value);
      if (index !== -1) {
        updatedList.splice(index, 1);
      }
    }

    setChecked(updatedList);
  };
  const checkedItems = checked.length > 0 ? `${checked.length}` : "";

  return (
    <div className="gallery-body">
      <div className="top-title-section">
        {!checkedItems ? (
          <h2>Gallery</h2>
        ) : (
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            <input type="checkbox" checked style={{ marginRight: "5px" }} />
            {`${checkedItems} Files Selected`}
          </p>
        )}

        <div className="selected-count">
          {/* Selected Items: {selectedItems.length} */}
        </div>
        {checkedItems ? (
          <h3>
            {" "}
            <a href="">Delete Files</a>{" "}
          </h3>
        ) : (
          ""
        )}
      </div>
      <hr />
      <div className="image-gallery">
        {images?.map((image, index) => (
          <ImageItem
            key={image.id}
            src={image}
            isFeatured={index === 0}
            draggable
            onDragStart={() => (dragItem.current = index)}
            onDragEnter={() => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
            setImage={image}
            handleCheck={handleCheck}
            checkedItems={checkedItems}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
