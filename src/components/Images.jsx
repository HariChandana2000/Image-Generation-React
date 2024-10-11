import React from "react";

const Images = ({ imagesData }) => {
  return (
    <div className='images-container'>
      {imagesData.map((image) => (
        <img src={image.urls.regular} alt={image.description} />
      ))}
    </div>
  );
};

export default Images;
