/* eslint-disable  */
import React, { useState, useMemo } from 'react';
import { FaStar, FaSearch } from 'react-icons/fa';
import GoogleMap from '../../components/GoogleMap';
import MyCarousel from '../../components/MyCarousel';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';

const HomePageInput = ({ data, setSearchShop }) => {
  const handleChange = (e) => {
    if (e.target.value === '') {
      setSearchShop(['嵐', '麻古', '迷']);
      return;
    }
    if (e.target.value.trim() === '') {
      return;
    }
    setSearchShop([e.target.value.trim()]);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex items-center bg-white rounded-full shadow-md">
          <input
            className="w-full px-6 py-4 leading-tight text-gray-700 rounded-l-full focus:outline-none"
            id="search"
            type="text"
            placeholder={data}
            onChange={handleChange}
          />
          <div className="p-4">
            <button className="flex items-center justify-center w-12 h-12 p-2 text-white duration-500 ease-in-out rounded-full bg-yellow-deepYellow hover:hover focus:outline-none">
              <FaSearch></FaSearch>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const HomePageShop = ({ shop }) => {
  return (
    <div className="pb-3 mb-10 w-72 h-86lg:w-124 lg:border-0">
      <div className="mb-2 overflow-hidden duration-500 ease-in-out transform rounded-xl hover:rotate-5 hover:border w-72 h-52 hover:shadow-xl">
        <img
          className="w-full h-full "
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
  const history = useHistory();
  const handleChange = (e) => {
    setShops(e);
  };
  const handleClick = (shop) => {
    sessionStorage.setItem('shop', JSON.stringify(shop));
    history.push('/menu');
  };

  return (
    <>
      <GoogleMap handleChange={handleChange} searchShop={searchShop} />
      {useMemo(
        () => (
          <MyCarousel />
        ),
        []
      )}
      <div className="flex items-center mx-auto mt-16 rounded-lg md:w-160 w-72 h-14 lg:w-234 lg:rounded-lg lg:h-24">
        <HomePageInput
          key="findBrand"
          data="找品牌"
          setSearchShop={setSearchShop}
        ></HomePageInput>
      </div>
      <div className="mx-auto mt-10 lg:mt-20 w-min md:w-176 lg:w-270">
        <div className="flex flex-wrap h-auto m-auto md:space-x-12 lg:space-x-12 bg-yellow-light">
          <div></div>
          {shops.map((shop) => {
            return (
              <div
                key={shop.key}
                className="cursor-pointer"
                onClick={() => handleClick(shop)}
              >
                <HomePageShop key={shop.key} shop={shop} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
