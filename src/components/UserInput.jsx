import React, { useRef, useState } from "react";
import Images from "./Images";

const UserInput = () => {
  const [imagesData, setImagesData] = useState([]);
  const userText = useRef("");

  const handleGetImages = async () => {
    const query = userText.current.value;
    const CLIENT_ID = "cVjfSOQpZoZYUORc3HIZXgFB0Df_QGI5AvIoWdXE_VM";
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${CLIENT_ID}&query=${query}`
    );
    const data = await response.json();
    setImagesData(data.results);
  };

  return (
    <>
      <h1>Image Generation App</h1>
      <div className='input-area'>
        <input
          type='text'
          name='user-input'
          ref={userText}
          placeholder='Enter text...'
        />
        <button onClick={handleGetImages}>Get Images</button>
      </div>
      {imagesData.length > 0 ? (
        <Images imagesData={imagesData} />
      ) : (
        <h1>No Images Found!</h1>
      )}
    </>
  );
};

export default UserInput;
