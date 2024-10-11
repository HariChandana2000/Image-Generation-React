import React from "react";

const Images = ({ imagesData }) => {
  return (
    <div className='images-container'>
      {imagesData.map((image) => (
        <div className='image-card'>
          <img src={image.urls.regular} alt={image.description} />
          <a href={image.links.download} target='_blank'>
            Download Image
          </a>
          <p>{image.alt_description}</p>
          <p className='details'>
            <span style={{ fontSize: "14px" }}>Credits:&nbsp;&nbsp;</span>
            {image.user.social.instagram_username ? (
              <a
                href={`https://www.instagram.com/${image.user.social.instagram_username}/`}
                target='_blank'
              >
                {image.user.instagram_username}
              </a>
            ) : (
              <a
                href={`https://x.com/${image.user.social.twitter_username}/`}
                target='_blank'
              >
                {image.user.social.twitter_username}
              </a>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Images;
