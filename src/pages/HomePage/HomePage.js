import { FaStar } from 'react-icons/fa';
import store1 from '../../image/store1.png';
import store2 from '../../image/store2.png';
import store3 from '../../image/store3.png';
import store4 from '../../image/store4.png';

const HomePage = () => {
  return (
    <>
      <div className="flex items-center w-3/4 mx-auto mt-24 rounded-lg h-14 bg-yellow-deepYellow lg:rounded-lg lg:h-36">
        <div className="flex justify-around w-64 mx-auto h-7 lg:w-full lg:h-14">
          <input
            placeholder="找品牌..."
            className="w-1/4 text-xs text-center rounded-lg lg:rounded-md md:text-lg"
          ></input>
          <input
            placeholder="找種類..."
            className="w-1/4 text-xs text-center rounded-lg lg:rounded-md md:text-lg"
          ></input>
          <input
            placeholder="找評價..."
            className="w-1/4 text-xs text-center rounded-lg lg:rounded-md md:text-lg"
          ></input>
        </div>
      </div>
      <div className="flex flex-col w-3/4 mx-auto my-4 lg:flex-wrap lg:flex lg:flex-row lg:justify-between">
        <div className="pb-3 my-6 border-b-2 border-gray-300 lg:w-124 lg:border-0">
          <div className="w-full mb-2 overflow-hidden rounded-lg">
            <img className="w-full lg:h-86" src={store1} alt="store1"></img>
          </div>
          <span className="text-xl font-black">摳口 台北南京店</span>
          <div className="flex">
            <div className="w-auto h-auto px-2 py-1 my-3 bg-white rounded-lg">
              {' '}
              10:00～18:00{' '}
            </div>
            <div className="w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
              7公尺
            </div>
            <div className="flex w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
              <FaStar className="mt-1 mr-1" />
              5.0
            </div>
          </div>
          <p>台北市松山區南京東路四段108號</p>
        </div>
        <div className="pb-3 my-6 border-b-2 border-gray-300 lg:w-124 lg:border-0">
          <div className="w-full mb-2 overflow-hidden rounded-lg">
            <img className="w-full lg:h-86" src={store2} alt="store2"></img>
          </div>
          <span className="text-xl font-black">綠豆沙 台北南京店</span>
          <div className="flex">
            <div className="w-auto h-auto px-2 py-1 my-3 bg-white rounded-lg">
              {' '}
              10:00～18:00{' '}
            </div>
            <div className="w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
              7公尺
            </div>
            <div className="flex w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
              <FaStar className="mt-1 mr-1" />
              5.0
            </div>
          </div>
          <p>台北市松山區南京東路四段108號</p>
        </div>
        <div className="pb-3 my-6 border-b-2 border-gray-300 lg:w-124 lg:border-0">
          <div className="w-full mb-2 overflow-hidden rounded-lg">
            <img className="w-full lg:h-86" src={store3} alt="store3"></img>
          </div>
          <span className="text-xl font-black">康敗 台北南京店</span>
          <div className="flex">
            <div className="w-auto h-auto px-2 py-1 my-3 bg-white rounded-lg">
              {' '}
              10:00～18:00{' '}
            </div>
            <div className="w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
              7公尺
            </div>
            <div className="flex w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
              <FaStar className="mt-1 mr-1" />
              5.0
            </div>
          </div>
          <p>台北市松山區南京東路四段108號</p>
        </div>
        <div className="pb-3 my-6 border-b-2 border-gray-300 lg:w-124 lg:border-0">
          <div className="mb-2 overflow-hidden rounded-lg">
            <img className="w-full lg:h-86" src={store4} alt="store4"></img>
          </div>
          <span className="text-xl font-black">魯伊撒 台北南京店</span>
          <div className="flex">
            <div className="w-auto h-auto px-2 py-1 my-3 bg-white rounded-lg">
              {' '}
              10:00～18:00{' '}
            </div>
            <div className="w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
              7公尺
            </div>
            <div className="flex w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
              <FaStar className="mt-1 mr-1" />
              5.0
            </div>
          </div>
          <p>台北市松山區南京東路四段108號</p>
        </div>
        <div className="pb-3 my-6 border-b-2 border-gray-300 lg:w-124 lg:border-0">
          <div className="mb-2 overflow-hidden rounded-lg">
            <img className="w-full lg:h-86" src={store1} alt="store1"></img>
          </div>
          <span className="text-xl font-black">摳口 台北南京店</span>
          <div className="flex">
            <div className="w-auto h-auto px-2 py-1 my-3 bg-white rounded-lg">
              {' '}
              10:00～18:00{' '}
            </div>
            <div className="w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
              7公尺
            </div>
            <div className="flex w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
              <FaStar className="mt-1 mr-1" />
              5.0
            </div>
          </div>
          <p>台北市松山區南京東路四段108號</p>
        </div>
        <div className="pb-3 my-6 border-b-2 border-gray-300 lg:w-124 lg:border-0">
          <div className="mb-2 overflow-hidden rounded-lg">
            <img className="w-full lg:h-86" src={store2} alt="store2"></img>
          </div>
          <span className="text-xl font-black">綠豆沙 台北南京店</span>
          <div className="flex">
            <div className="w-auto h-auto px-2 py-1 my-3 bg-white rounded-lg">
              {' '}
              10:00～18:00{' '}
            </div>
            <div className="w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
              7公尺
            </div>
            <div className="flex w-auto h-auto px-2 py-1 my-3 ml-4 bg-white rounded-lg">
              <FaStar className="mt-1 mr-1" />
              5.0
            </div>
          </div>
          <p>台北市松山區南京東路四段108號</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
