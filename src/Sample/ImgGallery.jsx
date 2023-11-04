// ImageGallery.js
import React, { useState } from "react";
import ImgItem from "./ImgItem";
import img1 from "./../assets/images/image-1.webp";
import img2 from "./../assets/images/image-2.webp";
import img3 from "./../assets/images/image-3.webp";

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
];

const ImgGallery = () => {
  const [images, setImages] = useState(imagess);
  const [checked, setChecked] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

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

  const deleteSelectedImages = () => {
    if (checked.length > 0) {
      const updatedImages = images.filter(
        (image) => !checked.includes(image.id)
      );
      setImages(updatedImages);
      setChecked([]);
      setIsDeleting(false);
    }
  };

  const checkedItems =
    checked.length > 0 ? `${checked.length} Files Selected` : "";

  return (
    <div className="gallery-body">
      <div className="top-title-section">
        {!checkedItems ? (
          <h2>Gallery</h2>
        ) : (
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            <input type="checkbox" checked style={{ marginRight: "5px" }} />
            {`${checkedItems}`}
          </p>
        )}

        <div className="selected-count">
          {/* Selected Items: {selectedItems.length} */}
        </div>
        {checkedItems ? (
          <h3>
            <a href="#" onClick={deleteSelectedImages}>
              Delete Files
            </a>
          </h3>
        ) : (
          ""
        )}
      </div>
      <hr />
      <div className="image-gallery">
        {images.map((image) => (
          <ImgItem
            key={image.id}
            src={image}
            draggable
            setImage={image}
            handleCheck={handleCheck}
            checkedItems={checkedItems}
            isDeleting={isDeleting}
          />
        ))}
      </div>
    </div>
  );
};

export default ImgGallery;
