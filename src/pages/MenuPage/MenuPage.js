/* eslint-disable */
import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getShopProducts, getShop, logoutApi } from '../../api';
import { useSelector } from 'react-redux';

const MenuDrink = ({ drinkData, title }) => {
  return (
    <div className="w-64 p-2 mb-12 bg-white rounded-lg h-80">
      <h2 className="px-2 py-4 text-2xl tracking-wide text-center border-b-2 border-gray-deepGray ">
        {title} 系列
      </h2>
      {drinkData.map((drink) => {
        return drink.categories === title ? (
          <Link key={drink.id} to={`/add-to-cart/${drink.id}`}>
            <div className="flex justify-between w-56 px-5 mx-auto my-4">
              <span className="inline-block">{drink.name}</span>
              <span className="inline-block">{drink.price}</span>
            </div>
          </Link>
        ) : null; // 不要顯示要用 null 還是 ''
      })}
    </div>
  );
};
const MenuPage = () => {
  const { id, brandName, rating, address } = useSelector(
    (state) => state.chosenShop
  );
  const ratingArray = new Array(Math.floor(rating)).fill('star');
  const [drinkData, setDrinkData] = useState([]);
  const [shop, setShop] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    const result = await getShopProducts(id);
    await setDrinkData(result.data.products);
    const tempArray = [];
    for (let i = 0; i < result.data.products.length; i += 1) {
      if (!tempArray.includes(result.data.products[i].categories)) {
        tempArray.push(result.data.products[i].categories);
      }
    }
    setCategories(tempArray);
    const result2 = await getShop(id);
    await setShop(result2.data.user);
  }, []);

  return (
    <>
      <div className="mx-auto mt-8 w-132">
        <div className="">
          <div className="p-2 mx-auto rounded-lg h-44 lg:p-6 lg:mt-15 lg:w-206 md:rounded-xl md:w-160 w-72 lg:h-48 bg-yellow-deepYellow ">
            <div className="flex mt-2">
              <div className="w-12 h-12 mx-5 mt-2 bg-white rounded-full">
                <img
                  className="w-full h-full rounded-full"
                  src={shop.URL}
                  alt=""
                />
              </div>
              <div>
                <div className="font-black text-black md:mt-5 lg:text-xl">
                  {brandName}
                </div>
                <div className="flex my-3 text-2xl text-white">
                  {ratingArray.map((item, index) => {
                    return <FaStar key={index} className="mt-1 mr-1 " />;
                  })}
                </div>
                <div className="mt-2 text-black text-md lg:text-base">
                  {address}
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
              {categories.map((title) => {
                return (
                  <MenuDrink drinkData={drinkData} title={title}></MenuDrink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
