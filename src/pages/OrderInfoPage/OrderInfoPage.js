/* eslint-disable func-names */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTotalPriceAmount } from '../../api';

const OrderInfoPage = () => {
  const [data, setData] = useState(0);
  useEffect(() => {
    (async function() {
      const result = await getTotalPriceAmount();
      setData(result.data);
    })();
  }, []);
  return (
    <div className=" bg-yellow-lightYellow">
      <div className="flex justify-center py-20 text-3xl text-black ">
        訂單狀態
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center mb-20 ">
          <div className="flex">
            <div className="h-auto pb-10 mx-auto mb-10 bg-white rounded-lg w-76 md:w-160 lg:w-192 ">
              {/* div */}
              <div className="tracking-wider">
                <div className="flex justify-center w-4/5 py-6 m-auto text-xl text-black border-b-2 md:text-2xl border-gray-deepGray font-seminole">
                  訂購資訊
                </div>
                <div className="flex flex-col w-4/5 mx-auto mt-8 leading-8 md:leading-10 md:text-xl text-md ">
                  <div>訂購人：{data.nickname}</div>
                  <div>電子信箱：{data.email}</div>
                  <div>訂單編號: No.{data.order_id}</div>
                  <div>飲料總數量: {data.item_count} 杯</div>
                  <div>總金額: {data.total_price} 元</div>
                  <div>是否付款: {data.is_paid ? '已付款' : '未付款'} </div>
                </div>
              </div>

              <div className="flex justify-end mt-5 mr-6 md:mr-14 md:mt-10">
                <Link to="/">
                  <button className="w-24 h-10 p-2 tracking-wider text-center text-white duration-500 ease-in-out rounded-lg hover:hover bg-yellow-deepYellow ">
                    回首頁
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfoPage;
