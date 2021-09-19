import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import store1 from '../../image/store1.png';
import store2 from '../../image/store2.png';
import store3 from '../../image/store3.png';
import store4 from '../../image/store4.png';

const HomePageInput = ({ data }) => {
  return (
    <input
      placeholder={data}
      className="w-20 text-xs text-center rounded-full lg:w-48 md:w-28 lg:h-10 md:mx-16 h-7 lg:rounded-md md:text-lg"
    ></input>
  );
};
const HomePageStore = ({ data }) => {
  return (
    <div className="pb-3 border-b-2 border-gray-300 w-72 h-86lg:w-124 lg:border-0">
      <div className="mb-2 overflow-hidden w-72 h-52 rounded-2xl">
        <img className="w-full " src={data.image} alt="store1"></img>
      </div>
      <span className="text-lg ">{data.nickname}</span>
      <div className="flex text-sm">
        <div className="w-auto h-auto px-2 py-1 my-3 bg-white rounded-lg">
          {data.time}
        </div>
        <div className="w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
          {data.distance}
        </div>
        <div className="flex w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
          <FaStar className="mt-1 mr-1 text-yellow-deepYellow" />
          {data.star}
        </div>
      </div>
      <p>{data.address} </p>
    </div>
  );
};
const HomePage = () => {
  const data1 = {
    nickname: '摳口 台北南京店',
    time: '10:00～18:00',
    distance: '7公尺',
    star: '5.0',
    address: '台北市松山區南京東路四段108號',
    image: store1
  };
  const data2 = {
    nickname: '綠豆沙 台北南京店',
    time: '10:00～18:00',
    distance: '7公尺',
    star: '5.0',
    address: '台北市松山區南京東路四段108號',
    image: store2
  };
  const data3 = {
    nickname: '康敗 台北南京店',
    time: '10:00～18:00',
    distance: '7公尺',
    star: '5.0',
    address: '台北市松山區南京東路四段108號',
    image: store3
  };
  const data4 = {
    nickname: '魯伊撒 台北南京店',
    time: '10:00～18:00',
    distance: '7公尺',
    star: '5.0',
    address: '台北市松山區南京東路四段108號',
    image: store4
  };
  return (
    <>
      <div className="flex items-center mx-auto mt-6 rounded-full md:w-176 w-80 h-14 bg-yellow-deepYellow lg:w-270 lg:rounded-lg lg:h-24">
        <div className="flex justify-between mx-auto lg:items-center md:justify-around w-72 h-7 lg:w-full lg:h-14">
          <HomePageInput data="找品牌..."></HomePageInput>
          <HomePageInput data="找種類..."></HomePageInput>
          <HomePageInput data="找評價..."></HomePageInput>
        </div>
      </div>
      <div className="mx-auto mt-10 lg:mt-20 w-min md:w-176 lg:w-270">
        <div className="flex flex-wrap h-auto m-auto md:space-x-12 lg:space-x-12 bg-yellow-light">
          <div></div>
          <HomePageStore data={data1}></HomePageStore>
          <HomePageStore data={data2}></HomePageStore>
          <HomePageStore data={data3}></HomePageStore>
          <HomePageStore data={data4}></HomePageStore>
          <HomePageStore data={data1}></HomePageStore>
          <HomePageStore data={data2}></HomePageStore>
          <HomePageStore data={data3}></HomePageStore>
          <HomePageStore data={data4}></HomePageStore>
          <HomePageStore data={data1}></HomePageStore>
          <HomePageStore data={data2}></HomePageStore>
          <HomePageStore data={data3}></HomePageStore>
          <HomePageStore data={data4}></HomePageStore>
        </div>
      </div>
    </>
  );
};

export default HomePage;
