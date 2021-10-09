import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import toastConfig from '../../constant';
import {
  getOrderItems,
  deleteOrderItem,
  updateTotalPriceAmount,
  addShoppingCart
} from '../../api';
import ProgressBar from '../../components/ProgressBar';
import { selectUser, getMe } from '../../features/userSlice';
import { decrement } from '../../features/shoppingCartSlice';
import SubFooter from '../../components/SubFooter';

const DrinkDetail = ({ handleDelete, drink }) => {
  return (
    <div className="relative w-10/12 mb-8 p-2.5 mx-auto rounded-lg bg-yellow-deepYellow h-1/5">
      <div className="flex flex-col justify-start leading-6 md:pl-3 md:leading-7">
        <p className="tracking-wide text-white">{drink.name}</p>
        <p className="inline-flex tracking-wide text-white">
          {drink.size} | {drink.ice} | {drink.sweetness}
        </p>
        <p className="inline-flex w-40 pl-1 tracking-wide text-white">
          $ {drink.price} | {drink.quantity} 份
        </p>
        <p className="inline-flex w-40 tracking-wide text-white whitespace-nowrap overflow-ellipsis">
          共 {drink.price * drink.quantity} 元
        </p>
      </div>
      <div>
        <Link
          className="absolute cursor-pointer top-5 right-3"
          to={`/order-item-edit/${drink.order_item_id}`}
        >
          <FaEdit className="text-2xl text-white"></FaEdit>
        </Link>
        <FaTrashAlt
          onClick={() => handleDelete(drink.order_item_id)}
          className="absolute mt-10 text-xl text-red-500 cursor-pointer top-5 right-4 "
        ></FaTrashAlt>
      </div>
    </div>
  );
};
const OrderPage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const [change, setChange] = useState(0);
  const [drinks, setDrinks] = useState([]);
  useEffect(async () => {
    await addShoppingCart();
    const result = await getOrderItems();
    setDrinks(result.data.productInfo);
    dispatch(getMe());
  }, [change]);
  const handleDelete = async (id) => {
    const payload = { id };
    await deleteOrderItem(payload);
    await updateTotalPriceAmount();
    dispatch(decrement());
    setChange(change + 1);
  };
  // eslint-disable-next-line consistent-return
  const handleClick = async () => {
    if (drinks.length === 0) {
      return toast.error('唉呦！買杯飲料吧', toastConfig);
    }
    await updateTotalPriceAmount();
    history.push('/order-check');
  };
  const handleContinue = () => {
    history.push('/menu');
  };
  return (
    <>
      <ProgressBar />
      <div className="h-auto pb-16 mx-auto mb-10 bg-white rounded-lg w-76 md:w-160 lg:w-192 ">
        <h1 className="flex justify-center w-4/5 py-6 m-auto text-xl text-black border-b-2 border-black lg:py-10 lg:text-4xl border-opacity-60 font-seminole">
          在購物車內的所有飲料
        </h1>
        <div className="relative">
          <div className="flex my-4 md:ml-7">
            <div className="flex justify-start w-10 h-10 mt-4 bg-cover rounded-full ml-9 bg-logo"></div>
            <p className="h-6 pt-6 ml-3.5 mb-10 text-base ">{user.nickname}</p>
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
            <div>
              <button
                onClick={handleContinue}
                className="absolute w-24 h-10 p-2 text-center text-white duration-500 ease-in-out rounded-lg lg:right-52 right-46 md:right-44 hover:hover bg-yellow-deepYellow"
              >
                繼續選購
              </button>
            </div>
            <div>
              <button
                onClick={handleClick}
                className="absolute w-24 h-10 p-2 text-center text-white duration-500 ease-in-out rounded-lg lg:right-20 right-6 md:right-15 hover:hover bg-yellow-deepYellow"
              >
                下一步
              </button>
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
    </>
  );
};

export default OrderPage;
