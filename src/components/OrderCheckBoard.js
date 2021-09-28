/* eslint-disable func-names */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getTotalPriceAmount, getIsPaid } from '../api';
import { setLoading } from '../features/loadingSlice';

const OrderBoard = () => {
  const [orderData, setOrderData] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const { data, isSuccess, refetch } = useQuery(
    'isPaid',
    getIsPaid,
    { retry: 10, enabled: false } // 在顯示錯誤前，將重試 10 次
  );

  // 取得 is_paid 結果
  const handleGetIsPaidClick = () => {
    refetch();
    dispatch(setLoading(true));
  };

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      console.log(isSuccess);
      history.push('/order-pay');
      dispatch(setLoading(false));
    }
    // eslint-disable-next-line prettier/prettier
    (async function() {
      const result = await getTotalPriceAmount();
      setOrderData(result.data);
      // console.log(result.data);
    })();
  }, [data, isSuccess]);
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
            <div className="flex flex-col-reverse m-auto text-left rounded-md md:w-72 md:h-36 h-28 w-52 bg-yellow-deepYellow my-11">
              <span className="pb-2 pl-4 text-sm">XXXX-XXXX-XXXX-XXXX</span>
            </div>
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
export default OrderBoard;
