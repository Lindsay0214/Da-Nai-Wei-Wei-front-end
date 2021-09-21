import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MenuDrink = ({ data }) => {
  return (
    <div className="w-64 p-2 mb-12 bg-white rounded-lg h-80">
      <h2 className="p-2 text-base tracking-wide">{data}</h2>
      <Link to="/add-to-cart">
        <FaShoppingCart className="pl-2 text-2xl"></FaShoppingCart>
      </Link>
      <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
      <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
      <div className="w-1/2 h-4 mt-2 ml-2 bg-gray-300"></div>
    </div>
  );
};
const MenuPage = () => {
  return (
    <>
      <div className="mx-auto mt-8 w-132">
        <div className="">
          <div className="p-2 mx-auto rounded-lg lg:p-6 lg:w-206 md:rounded-xl md:w-160 w-72 h-36 lg:h-48 bg-yellow-deepYellow ">
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
          <h1 className="mx-auto my-12 text-2xl font-black tracking-wide text-center md:w-160">
            菜單
          </h1>
          <div className="mx-auto mt-10 md:w-160 lg:mt-20 w-min lg:w-234">
            <div className="flex flex-wrap h-auto m-auto md:space-x-10 lg:space-x-12 bg-yellow-light">
              <div></div>
              <MenuDrink data="很奶的奶茶"></MenuDrink>
              <MenuDrink data="很綠的綠茶"></MenuDrink>
              <MenuDrink data="很紅的紅茶"></MenuDrink>
              <MenuDrink data="很奶的奶茶"></MenuDrink>
              <MenuDrink data="很綠的綠茶"></MenuDrink>
              <MenuDrink data="很紅的紅茶"></MenuDrink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
