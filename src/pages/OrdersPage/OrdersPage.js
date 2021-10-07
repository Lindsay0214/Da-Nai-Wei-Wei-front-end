/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable func-names */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getOrdersHistory } from '../../api';

const OrdersBlock = ({ data }) => {
  return (
    <div className="pb-3 mb-10 bg-white border-b-2 border-gray-300 rounded-lg w-72 h-86lg:w-124 lg:border-0">
      <div className="pb-2 mx-auto mt-8 text-xl border-b border-black w-44">
        <div className="flex items-center justify-center pt-4 md:pt-0">
          訂單編號
        </div>
        <div className="flex items-center justify-center ">No.{data.id}</div>
      </div>
      <div className="flex flex-col px-2 mx-auto mt-5 leading-8 w-44 md:leading-10 md:text-xl text-md ">
        <div>飲料總數量: {data.item_count} 杯</div>
        <div className="w-40 overflow-hidden overflow-ellipsis">
          總金額: {data.total_price} 元
        </div>
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
  useEffect(async () => {
    const result = await getOrdersHistory();
    setData(result.data.data);
  }, []);

  return (
    <div className="min-h-screen bg-yellow-lightYellow">
      <div className="flex justify-center py-20 text-3xl text-black">
        所有訂單
      </div>
      <div className="mx-auto mt-10 lg:mt-20 w-min md:w-176 lg:w-270">
        <div className="flex flex-wrap h-auto m-auto md:space-x-12 lg:space-x-12 bg-yellow-light">
          <div></div>
          {data.length === 0 ? (
            <>
              <div className="flex flex-col w-48 p-5 m-5 bg-white rounded-lg h-1/2">
                <Link to="/product-list">
                  <p className="flex content-center justify-center h-24 m-auto text-xl">
                    尚無訂單
                  </p>
                </Link>
              </div>
            </>
          ) : (
            data.map((i) => {
              return <OrdersBlock data={i}></OrdersBlock>;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
