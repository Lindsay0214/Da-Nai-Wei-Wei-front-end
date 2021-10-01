/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GoogleMap from '../../components/GoogleMap';
import Carousel from '../../components/Carousel';

const HomePageInput = ({ data, setSearchShop }) => {
  return (
    <input
      placeholder={data}
      className="w-4/12 h-8 mx-1 text-xs text-center rounded md:mx-2 lg:w-60 md:w-44 lg:h-10 lg:rounded-md md:text-base"
      onChange={async (e) => {
        if (e.target.value === '') {
          setSearchShop(['嵐', '麻古', '迷']);
          return;
        }
        setSearchShop([e.target.value]);
      }}
    ></input>
  );
};
const HomePageShop = ({ shop }) => {
  return (
    <div className="pb-3 border-b-2 border-gray-300 w-72 h-86lg:w-124 lg:border-0">
      <div className="mb-2 overflow-hidden w-72 h-52 rounded-2xl">
        <img
          // className="flex-shrink m-auto "
          className="w-full h-full"
          src={shop.URL}
          alt="品牌 logo 圖片"
        ></img>
      </div>
      <p className="overflow-hidden text-lg tracking-wide break-all whitespace-nowrap w-72 overflow-ellipsis">
        {shop.brandName}
      </p>
      <div className="flex text-sm">
        <div className="w-auto h-auto px-2 py-1 my-3 bg-white rounded-lg">
          {shop.isOpen}
        </div>
        <div className="w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
          {shop.distance}
        </div>
        <div className="flex w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
          <FaStar className="mt-1 mr-1 text-yellow-deepYellow" />
          {shop.rating}
        </div>
      </div>
      <p>{shop.address} </p>
    </div>
  );
};

const HomePage = () => {
  const [shops, setShops] = useState([]);
  const [searchShop, setSearchShop] = useState(['嵐', '麻古', '迷']);
  const handleChange = (e) => {
    setShops(e);
  };

  return (
    <>
      <GoogleMap handleChange={handleChange} searchShop={searchShop} />
      <Carousel />
      <div className="flex items-center mx-auto mt-16 rounded-lg md:w-160 w-72 h-14 bg-yellow-deepYellow lg:w-234 lg:rounded-lg lg:h-24">
        <div className="flex justify-around mx-auto lg:items-center md:justify-around w-72 h-7 lg:w-full lg:h-14">
          <HomePageInput
            key="findBrand"
            data="找品牌..."
            setSearchShop={setSearchShop}
          ></HomePageInput>
          {/* <HomePageInput
            key="findCategory"
            data="找種類..."
            setSearchShop={setSearchShop}
          ></HomePageInput>
          <HomePageInput
            key="findComment"
            data="找評價..."
            setSearchShop={setSearchShop}
          ></HomePageInput> */}
        </div>
      </div>
      <div className="mx-auto mt-10 lg:mt-20 w-min md:w-176 lg:w-270">
        <div className="flex flex-wrap h-auto m-auto md:space-x-12 lg:space-x-12 bg-yellow-light">
          <div></div>
          {shops.map((shop) => {
            return (
              <Link
                to={`/menu/${shop.id}/${shop.brandName}/${shop.rating}/${shop.address}`}
                key={shop.key}
              >
                <HomePageShop shop={shop} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
