/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GoogleMap from '../../components/GoogleMap';
import store1 from '../../image/store1.png';
// import useGeolocation from '../../components/useGeolocation';

const HomePageInput = ({ data }) => {
  return (
    <input
      placeholder={data}
      className="w-3/12 text-xs text-center rounded-lg lg:w-60 md:w-48 lg:h-10 md:mx-2 h-7 lg:rounded-md md:text-lg"
    ></input>
  );
};
const HomePageStore = ({ data, store }) => {
  return (
    <div className="pb-3 border-b-2 border-gray-300 w-72 h-86lg:w-124 lg:border-0">
      <div className="mb-2 overflow-hidden w-72 h-52 rounded-2xl">
        <img className="w-full " src={data.image} alt="store1"></img>
      </div>
      <span className="text-lg ">{store.brandName}</span>
      <div className="flex text-sm">
        <div className="w-auto h-auto px-2 py-1 my-3 bg-white rounded-lg">
          {store.isOpen}
        </div>
        <div className="w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
          {data.distance}
        </div>
        <div className="flex w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
          <FaStar className="mt-1 mr-1 text-yellow-deepYellow" />
          {store.rating}
        </div>
      </div>
      <p>{store.address} </p>
    </div>
  );
};

const HomePage = () => {
  const [stores, setStores] = useState([]);

  const handleChange = (e) => {
    setStores(e);
    console.log('Event:', e);
  };

  const data = {
    time: '10:00～18:00',
    distance: '7公尺',
    image: store1
  };

  // const state = useGeolocation();
  return (
    <>
      <GoogleMap handleChange={handleChange} />
      <div className="flex items-center mx-auto mt-16 rounded-lg md:w-160 w-72 h-14 bg-yellow-deepYellow lg:w-234 lg:rounded-lg lg:h-24">
        <div className="flex justify-around mx-auto lg:items-center md:justify-around w-72 h-7 lg:w-full lg:h-14">
          <HomePageInput data="找品牌..."></HomePageInput>
          <HomePageInput data="找種類..."></HomePageInput>
          <HomePageInput data="找評價..."></HomePageInput>
        </div>
        {/* {console.log(state)} */}
      </div>
      <div className="mx-auto mt-10 lg:mt-20 w-min md:w-176 lg:w-270">
        <div className="flex flex-wrap h-auto m-auto md:space-x-12 lg:space-x-12 bg-yellow-light">
          <div></div>
          {stores.map((store) => {
            return <HomePageStore data={data} store={store} />;
          })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
