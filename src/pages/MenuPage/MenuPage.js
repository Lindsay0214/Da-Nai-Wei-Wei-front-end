import { FaStar } from 'react-icons/fa';

const MenuPage = () => {
  return (
    <div className=" bg-yellow-lightYellow">
      <div className="w-9/12 p-20 mx-auto w-132">
        <div>
          <div className="h-48 p-2 mx-auto bg-yellow-400 rounded-lg ">
            <div className="flex mt-3">
              <div className="w-12 h-12 mx-5 bg-white rounded-full"></div>
              <div>
                <div className="text-xl font-black text-white">
                  珍煮丹 南京店
                </div>
                <div className="flex">
                  <FaStar className="mt-1 mr-1" />
                  <FaStar className="mt-1 mr-1" />
                  <FaStar className="mt-1 mr-1" />
                  <FaStar className="mt-1 mr-1" />
                  <FaStar className="mt-1 mr-1" />
                </div>
                <div className="mt-5 text-base text-white ">10:30 - 20:30</div>
                <div className="text-base text-white ">02-2747-5917</div>
                <div className="text-base text-white ">
                  台北市松山區南京東路四段
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <h1 className="my-8 text-3xl text-center">菜單</h1>
          <div className="flex flex-wrap justify-between mx-auto">
            <div className="w-5/12 p-2 mb-10 bg-white rounded-lg h-96">
              <h2 className="p-2 text-base">鮮奶茶系列</h2>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
            </div>
            <div className="w-5/12 p-2 mb-10 bg-white rounded-lg h-96 ">
              <h2 className="p-2 text-base">鮮奶茶系列</h2>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
            </div>
            <div className="w-5/12 p-2 mb-10 bg-white rounded-lg h-96 ">
              <h2 className="p-2 text-base">鮮奶茶系列</h2>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
            </div>
            <div className="w-5/12 p-2 mb-10 bg-white rounded-lg h-96 ">
              <h2 className="p-2 text-base">鮮奶茶系列</h2>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
              <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
