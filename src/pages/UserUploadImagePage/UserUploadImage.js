/* eslint-disable */
import React from 'react';
// import ImageUploading from 'react-images-uploading';
import { useHistory } from 'react-router';
import { updateURL } from '../../api';
import axios from 'axios';

const UserUpdatePage = () => {
  // const imgurKey = process.env.REACT_APP_IMGUR_KEY;
  const [images, setImages] = React.useState([]);
  const maxNumber = 1; // 可以傳幾張圖片
  const onChange = async (imageList, addUpdateIndex) => {
    let base64 = imageList[0].data_url.replace(/^data:.*?;base64,/, ''); // 去除編碼後的開頭，data:image/png;base64,
    let formData = new FormData();
    formData.append('image', base64); //required
    try {
      const result = await axios({
        method: 'POST',
        url: 'https://api.imgur.com/3/image',
        data: formData,
        headers: {
          Authorization: `Client-ID ${imgurKey}`
        },
        mimeType: 'multipart/form-data',
        onUploadProgress: function(progressEvent) {
          if (progressEvent.lengthComputable) {
            let percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            document.getElementById('progress').innerHTML =
              percent.toFixed(2) + '%'; //设置进度显示百分比
            document.getElementById('progress').style.width =
              percent.toFixed(2) + '%'; //设置完成的进度条宽度
          } else {
            document.getElementById('progress').innerHTML = 'unable to compute';
          }
        }
      });
      await (async function() {
        const payload = { URL: result.data.data.link };
        console.log(payload);
        await updateURL(payload);
      })();
    } catch (error) {
      console.log(error);
    }
    setImages(imageList);
  };

  return (
    <div className="flex-col w-auto h-auto mt-40 bg-yellow-lightYellow">
      <div className="flex-col items-center justify-center w-auto ">
        <div
          className="flex-col w-64 p-2 m-auto bg-white rounded-lg lg:mt-10 lg:w-160 "
          // onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex content-center justify-center mt-10 text-4xl">
            上傳圖片
          </div>{' '}
          <div className="App">
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps
              }) => (
                // write your building UI
                <div className="text-center upload__image-wrapper">
                  <button
                    className="p-2 my-8 mb-10 duration-500 ease-in-out border hover:hover border-yellow-deepYellow bg-yellow-deepYellow rounded-xl"
                    style={isDragging ? { color: 'red' } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                  &nbsp;
                  {imageList.map((image, index) => (
                    <div key={index} className="w-64 mx-auto image-item">
                      <img src={image['data_url']} alt="" />
                    </div>
                  ))}
                  <div className="w-64 h-20 mx-auto mt-10 bg-white">
                    <div
                      id="progress"
                      className="tracking-wide rounded-xl bg-yellow-deepYellow"
                    ></div>
                  </div>
                </div>
              )}
            </ImageUploading>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserUpdatePage;
