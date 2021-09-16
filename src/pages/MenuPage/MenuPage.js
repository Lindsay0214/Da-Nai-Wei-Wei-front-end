import { FaStar } from 'react-icons/fa';

const MenuPage = () => {
  return (
    <>
      <div className="w-9/12 mx-auto mt-24 w-132">
        <div>
          <div className="p-2 mx-auto rounded-lg h-36 lg:h-48 bg-yellow-deepYellow ">
            <div className="flex mt-2">
              <div className="w-12 h-12 mx-5 bg-white rounded-full"></div>
              <div>
                <div className="font-black text-white lg:text-xl">
                  珍煮丹 南京店
                </div>
                <div className="flex text-white">
                  <FaStar className="mt-1 mr-1" />
                  <FaStar className="mt-1 mr-1" />
                  <FaStar className="mt-1 mr-1" />
                  <FaStar className="mt-1 mr-1" />
                  <FaStar className="mt-1 mr-1" />
                </div>
                <div className="mt-5 text-xs text-white lg:text-base ">
                  10:30 - 20:30
                </div>
                <div className="text-xs text-white lg:text-base ">
                  02-2747-5917
                </div>
                <div className="text-xs text-white lg:text-base ">
                  台北市松山區南京東路四段
                </div>
              </div>
            </div>
          </div>
          <h1 className="my-12 text-5xl font-black tracking-wide text-center">
            菜單
          </h1>
          <div className="flex flex-wrap justify-between mx-auto">
            <div className="w-full p-2 mb-12 bg-white rounded-lg w- lg:w-164 h-120">
              <h2 className="p-2 text-base tracking-wide">鮮奶茶系列</h2>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
            </div>
            <div className="w-full p-2 mb-12 bg-white rounded-lg lg:w-164 h-120">
              <h2 className="p-2 text-base tracking-wide">鮮奶茶系列</h2>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
            </div>
            <div className="w-full p-2 mb-12 bg-white rounded-lg lg:w-164 h-120">
              <h2 className="p-2 text-base tracking-wide">鮮奶茶系列</h2>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
            </div>
            <div className="w-full p-2 mb-12 bg-white rounded-lg lg:w-164 h-120">
              <h2 className="p-2 text-base tracking-wide">鮮奶茶系列</h2>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
