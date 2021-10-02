/* eslint-disable func-names */
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTotalPriceAmount, getIsPaid } from '../../api';
import { setLoading } from '../../features/loadingSlice';

const OrderCheckPage = () => {
  const [orderData, setOrderData] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const getIsPaidResponse = async () => {
    const result = await getIsPaid(orderData.order_id);
    return result;
  };

  const { data, refetch, isSuccess, isError } = useQuery(
    'isPaid',
    getIsPaidResponse,
    { retry: 3, enabled: false, cacheTime: 5000 } // 在顯示錯誤前，將重試 10 次
  );

  // 取得 is_paid 結果
  const handleGetIsPaidClick = async () => {
    window.open('https://da-nai-wei-wei.herokuapp.com/paymenys');
    refetch();
    dispatch(setLoading(true));
  };
  useEffect(() => {
    if (isSuccess) {
      history.push(`/order-pay/${orderData.order_id}`);
      dispatch(setLoading(false));
    }
    if (isError) {
      toast.error('唉呦!結帳失敗', {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored'
      });
      dispatch(setLoading(false));
    }
  }, [data, isSuccess, isError]);
  useEffect(async () => {
    const result = await getTotalPriceAmount();
    setOrderData(result.data);
  }, []);
  return (
    <div className="h-auto">
      {/* progress bar  start */}
      <div className="pb-14 lg:p-20 bg-yellow-lightYellow">
        <ul className="flex justify-around w-full mx-auto">
          <li className="relative w-1/3 text-xs text-center lg:text-base nav-item before:process-before text-brown-default">
            訂購明細
          </li>
          <li className="relative w-1/3 text-xs text-center nav-item lg:text-base before:process-active after:process-after text-brown-default">
            訂購資訊
          </li>
          <li className="relative w-1/3 text-xs text-center nav-item lg:text-base before:process-before after:process-after text-brown-default">
            訂單完成
          </li>
        </ul>
      </div>
      <div className="w-full h-auto bg-yellow-lightYellow">
        <div className="h-auto pb-10 mx-auto mb-10 bg-white rounded-lg w-76 md:w-160 lg:w-192 ">
          <div className="tracking-wider">
            <div className="flex justify-center w-4/5 py-6 m-auto text-xl text-black border-b-2 md:text-2xl border-gray-deepGray font-seminole">
              訂購資訊
            </div>
            <div className="flex flex-col w-4/5 mx-auto mt-8 leading-8 md:leading-10 md:text-xl text-md ">
              <div>訂購人：{orderData.nickname}</div>
              <div>電子信箱：{orderData.email}</div>
              <div>訂單編號: No.{orderData.order_id}</div>
              <div>飲料總數量: {orderData.item_count} 杯</div>
              <div>總金額: {orderData.total_price} 元</div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-center w-4/5 py-6 m-auto text-xl text-black border-b-2 md:text-2xl border-gray-deepGray font-seminole">
              付款方式
            </div>
            <div className="flex flex-col-reverse m-auto text-left bg-cover rounded-md bg-creditCard md:w-72 md:h-44 h-28 w-52 my-11"></div>
          </div>
          <div className="flex justify-end mr-12 ">
            <button
              onClick={handleGetIsPaidClick}
              className="w-24 h-10 p-2 tracking-wider text-center text-white duration-500 ease-in-out rounded-lg hover:hover bg-yellow-deepYellow "
            >
              結帳
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCheckPage;
