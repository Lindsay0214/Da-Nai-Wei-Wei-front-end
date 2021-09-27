import { FaStar, FaShoppingCart, FaHome, FaRoad } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getShopProducts, getShop } from '../../api';

const MenuDrink = ({ data }) => {
  return (
    <div className="w-64 p-2 mb-12 bg-white rounded-lg h-80">
      <h2 className="p-2 text-base tracking-wide">{data.name}</h2>
      <Link to={`/add-to-cart/${data.id}`}>
        <FaHome className="pl-2 text-2xl"></FaHome>
        <FaRoad className="pl-2 text-2xl"></FaRoad>
        <FaShoppingCart className="pl-2 text-2xl"></FaShoppingCart>
      </Link>
      <div>{data.price}</div>
    </div>
  );
};
const MenuPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [shop, setShop] = useState([]);
  useEffect(async () => {
    const result = await getShopProducts(id);
    await setData(result.data.products);
    const result2 = await getShop(id);
    await setShop(result2.data.user);
  }, []);

  return (
    <>
      <div className="mx-auto mt-8 w-132">
        <div className="">
          <div className="p-2 mx-auto rounded-lg lg:p-6 lg:w-206 md:rounded-xl md:w-160 w-72 h-36 lg:h-48 bg-yellow-deepYellow ">
            <div className="flex mt-2">
              <div className="w-12 h-12 mx-5 bg-white rounded-full">
                <img
                  className="w-full h-full rounded-full"
                  src={shop.URL}
                  alt=""
                />
              </div>
              <div>
                <div className="font-black text-black lg:text-xl">
                  {shop.brand_name} {shop.nickname}
                </div>
                <div className="flex text-yellow-deepYellow">
                  <FaStar className="mt-1 mr-1" />
                  <FaStar className="mt-1 mr-1" />
                  <FaStar className="mt-1 mr-1" />
                  <FaStar className="mt-1 mr-1" />
                  <FaStar className="mt-1 mr-1" />
                </div>
                <div className="mt-5 text-xs text-black lg:text-base ">
                  10:30 - 20:30
                </div>
                <div className="text-xs text-black lg:text-base ">
                  02-2747-5917
                </div>
                <div className="text-xs text-black lg:text-base ">
                  {shop.address}
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
              {data.map((product) => {
                return <MenuDrink key={product.id} data={product}></MenuDrink>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
