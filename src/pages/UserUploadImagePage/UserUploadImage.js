/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ImageUploading from 'react-images-uploading';
import { useHistory } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import { updateURL } from '../../api';

const UserUpdatePage = () => {
  const imgurKey = process.env.REACT_APP_IMGUR_KEY;
  const [images, setImages] = React.useState([]);
  const maxNumber = 1; // 最多可以傳幾張圖片
  const onChange = async (imageList, addUpdateIndex) => {
    const base64 = imageList[0].data_url.replace(/^data:.*?;base64,/, ''); // 去除編碼後的開頭，data:image/png;base64,
    const formData = new FormData();
    formData.append('image', base64); // required
    try {
      const result = await axios({
        method: 'POST',
        url: 'https://api.imgur.com/3/image',
        data: formData,
        headers: {
          Authorization: `Client-ID ${imgurKey}`
        },
        mimeType: 'multipart/form-data',
        onUploadProgress: (progressEvent) => {
          if (progressEvent.lengthComputable) {
            const percent = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            document.getElementById('progress').innerHTML = `${percent.toFixed(
              2
            )}%`; // 設定進度顯示百分比
            document.getElementById(
              'progress'
            ).style.width = `${percent.toFixed(2)}%`; // 設定完成的進度長度
          } else {
            document.getElementById('progress').innerHTML = 'unable to compute';
          }
        }
      });
      const payload = { URL: result.data.data.link };
      await updateURL(payload);
    } catch (error) {
      toast.error('上傳失敗', {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored'
      });
    }
    setImages(imageList);
  };

  return (
    <div className="flex-col w-auto h-auto mt-40 bg-yellow-lightYellow">
      <div className="flex-col items-center justify-center w-auto ">
        <div className="flex-col w-64 p-2 m-auto bg-white rounded-lg lg:mt-10 lg:w-160 ">
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
              {({ imageList, onImageUpload, isDragging, dragProps }) => (
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
                    // 只有傳一張圖片所以 key 直接設定為 1
                    <div key="1" className="w-64 mx-auto image-item">
                      <img src={image.data_url} alt="" />
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
