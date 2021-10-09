/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable func-names */
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import toastConfig from '../../constant';
import { getOrdersHistory } from '../../api';

const OrdersBlock = ({ data, handleClick }) => {
  return (
    <div
      key={data.id}
      aria-hidden="true"
      onClick={() => handleClick(data.id)}
      className="pt-2 pb-3 mb-10 bg-white border-b-2 border-gray-300 rounded-lg cursor-pointer w-72 h-86lg:w-124 lg:border-0"
    >
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
  const history = useHistory();
  const [data, setData] = useState([]);
  useEffect(async () => {
    const result = await getOrdersHistory();
    if (result.data.data.length === 0) toast.error('尚無訂單喔', toastConfig);
    setData(result.data.data);
  }, []);
  const handleClick = (orderId) => {
    sessionStorage.setItem('order_id', orderId);
    history.push('/product-list');
  };
  return (
    <div className="min-h-screen bg-yellow-lightYellow">
      <div className="flex justify-center py-20 text-3xl text-black">
        所有訂單
      </div>
      <div className="mx-auto mt-10 lg:mt-20 w-min md:w-176 lg:w-270">
        <div className="flex flex-wrap h-auto m-auto md:space-x-12 lg:space-x-12 bg-yellow-light">
          <div></div>
          {data.length !== 0 &&
            data.map((i) => {
              return (
                <OrdersBlock
                  key={i.id}
                  handleClick={handleClick}
                  data={i}
                ></OrdersBlock>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
