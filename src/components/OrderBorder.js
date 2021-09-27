/* eslint-disable */
import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { getOrderItem, deleteOrderItem, updateTotalPriceAmount } from '../api';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const DrinkDetail = ({ handleDelete, drink }) => {
  return (
    <div className="relative w-10/12 mb-8 p-2.5 mx-auto rounded-lg bg-yellow-deepYellow h-1/5">
      <div className="flex flex-col justify-start leading-6 md:pl-3 md:leading-7 lg:leading-10">
        <p className="tracking-wide text-white lg:text-xl md:w-56 md:text-lg">
          {drink.name}{' '}
        </p>
        <p className="inline-flex w-48 tracking-wide text-white lg:text-xl md:w-56 md:text-lg">
          {drink.size} / {drink.ice} / {drink.sweetness}
        </p>
        <p className="inline-flex w-40 tracking-wide text-white lg:text-xl md:w-56 md:text-lg">
          $ {drink.price} / {drink.quantity} 份
        </p>
      </div>
      <div>
        <Link to={`/order-item-edit/${drink.order_item_id}`}>
          <FaEdit className="absolute text-xl cursor-pointer md:top-5 top-4 right-3 text-gray-lightGray"></FaEdit>
        </Link>
        <FaTrashAlt
          onClick={() => handleDelete(drink.order_item_id)}
          className="absolute text-red-500 cursor-pointer md:top-17 top-15 right-4 "
        ></FaTrashAlt>
      </div>
    </div>
  );
};
const OrderBoard = () => {
  const history = useHistory();
  const [change, setChange] = useState(0);
  const [drinks, setDrinks] = useState([]);
  useEffect(async () => {
    const result = await getOrderItem();
    setDrinks(result.data.productInfo);
  }, [change]);
  const handleDelete = async (id) => {
    const payload = { id };
    await deleteOrderItem(payload);
    setChange(change + 1);
  };
  const handleClick = async () => {
    await updateTotalPriceAmount();
    history.push('/order-check');
  };
  return (
    <>
      <div className="absolute w-full h-auto min-h-screen bg-yellow-lightYellow">
        <div className="h-auto pb-16 mx-auto mb-10 bg-white rounded-lg w-76 md:w-160 lg:w-192 ">
          <h1 className="flex justify-center w-4/5 py-6 m-auto text-xl text-black border-b-2 border-black lg:py-10 lg:text-4xl border-opacity-60 font-seminole">
            在購物車內的所有飲料
          </h1>
          <div className="flex md:ml-7">
            <div className="flex justify-start w-10 h-10 mt-4 bg-cover rounded-full ml-9 bg-logo"></div>
            <p className="h-6 pt-6 ml-3.5 mb-10 text-base ">王小明</p>
          </div>
          <div className="relative">
            {drinks.map((drink) => {
              return (
                <DrinkDetail
                  handleDelete={handleDelete}
                  drink={drink}
                  key={drink.order_item_id}
                ></DrinkDetail>
              );
            })}
            <div className="absolute -bottom-16 right-6 md:right-14 lg:right-16">
              <button
                onClick={handleClick}
                className="w-24 h-10 p-2 text-center text-white duration-500 ease-in-out rounded-lg hover:hover bg-yellow-deepYellow "
              >
                下一步
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderBoard;
