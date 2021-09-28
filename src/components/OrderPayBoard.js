import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTotalPriceAmount } from '../api';

const OrderBoard = () => {
  const [data, setData] = useState(0);
  useEffect(async () => {
    const result = await getTotalPriceAmount();
    setData(result.data);
  }, []);
  return (
    <div className="h-auto">
      <div className="pb-14 lg:p-20 bg-yellow-lightYellow">
        <ul className="flex justify-around w-full mx-auto">
          <li className="relative w-1/3 text-xs text-center lg:text-base nav-item before:process-before text-brown-default">
            訂購明細
          </li>
          <li className="relative w-1/3 text-xs text-center nav-item lg:text-base before:process-before after:process-after text-brown-default">
            訂購資訊
          </li>
          <li className="relative w-1/3 text-xs text-center nav-item lg:text-base before:process-active after:process-after text-brown-default">
            訂單完成
          </li>
        </ul>
      </div>
      <div className="w-full h-auto bg-yellow-lightYellow">
        <div className="h-auto pb-10 mx-auto mb-10 bg-white rounded-lg w-76 md:w-160 lg:w-192 ">
          <div className="tracking-wider">
            <div className="flex justify-center w-4/5 py-6 m-auto text-xl text-black border-b-2 md:text-2xl border-gray-deepGray font-seminole">
              訂購完成
            </div>
            <div className="flex flex-col w-4/5 mx-auto mt-8 leading-8 md:leading-10 md:text-xl text-md ">
              <div>訂購人：{data.nickname}</div>
              <div>電子信箱：{data.email}</div>
              <div>訂單編號: No.{data.order_id}</div>
              <div>飲料總數量: {data.item_count} 杯</div>
              <div>總金額: {data.total_price} 元</div>
            </div>
          </div>
          <div className="flex flex-col "></div>
          <div className="flex justify-end mr-12 ">
            <Link to="/">
              <button className="w-24 h-10 p-2 tracking-wider text-center text-white duration-500 ease-in-out rounded-lg hover:hover bg-yellow-deepYellow ">
                回到首頁
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderBoard;
