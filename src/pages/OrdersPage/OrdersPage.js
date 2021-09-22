/* eslint-disable func-names */
import { useState, useEffect } from 'react';
import { getOrdersHistory } from '../../api';

const OrdersBlock = ({ data }) => {
  return (
    <div className="pb-3 mb-10 bg-white border-b-2 border-gray-300 rounded-lg w-72 h-86lg:w-124 lg:border-0">
      <div className="pb-2 mx-auto mt-8 text-xl border-b border-black w-44">
        <div className="flex items-center justify-center pt-4 md:pt-0">
          珍煮丹
        </div>
        <div className="flex items-center justify-center ">台北南京店</div>
      </div>
      <div className="flex flex-col w-4/5 mx-auto mt-8 leading-8 md:leading-10 md:text-xl text-md ">
        <div>訂單編號: No.{data.id}</div>
        <div>飲料總數量: {data.item_count} 杯</div>
        <div>總金額: {data.total_price} 元</div>
        {!data.is_paid && (
          <div>
            是否付款: <span className="text-red-500">未付款</span>{' '}
          </div>
        )}
        {!data.is_paid || (
          <div>
            是否付款: <span className="text-green-500">已付款</span>{' '}
          </div>
        )}
      </div>
    </div>
  );
};
const OrdersPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function() {
      const result = await getOrdersHistory();
      setData(result.data.data);
      // console.log(result.data.data);
    })();
  }, []);
  return (
    <div className="bg-yellow-lightYellow">
      <div className="flex justify-center py-20 text-3xl text-black">
        所有訂單
      </div>
      <div className="mx-auto mt-10 lg:mt-20 w-min md:w-176 lg:w-270">
        <div className="flex flex-wrap h-auto m-auto md:space-x-12 lg:space-x-12 bg-yellow-light">
          <div></div>
          {data.map((i) => {
            return <OrdersBlock data={i}></OrdersBlock>;
          })}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
