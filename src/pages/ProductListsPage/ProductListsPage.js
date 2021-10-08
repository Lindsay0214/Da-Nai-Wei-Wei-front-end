import React, { useState, useEffect } from 'react';
import SubFooter from '../../components/SubFooter';
import { getItemsByOrderId, getOrderPaid } from '../../api';

const DrinkItem = ({ data }) => {
  return (
    <div className="p-2.5 mt-5 mx-auto rounded-lg bg-yellow-deepYellow">
      <div className="flex flex-col justify-start m-2">
        <p className="tracking-wide text-white">{data.history_name} </p>
        <p className="inline-flex tracking-wide text-white">
          {data.productDetail.size} | {data.productDetail.ice} |{' '}
          {data.productDetail.sweetness}
        </p>
        <p className="inline-flex w-40 pl-1 tracking-wide text-white ">
          $ {data.history_price} | {data.quantity} 份
        </p>
        <p className="inline-flex w-40 tracking-wide text-white whitespace-nowrap overflow-ellipsis">
          共 {data.history_price * data.quantity} 元
        </p>
      </div>
    </div>
  );
};
const ProductListsPage = () => {
  const shopInfo = JSON.parse(localStorage.getItem('shop'));
  const { id } = shopInfo;
  const [shop, setShop] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [orderInformation, setOrderInformation] = useState({});
  useEffect(async () => {
    const orderId = localStorage.getItem('order_id');
    const response = await getItemsByOrderId(orderId);
    setDrinks(response.data.targetProductArr);
    const OrderPaidResult = await getOrderPaid(orderId);
    console.log(OrderPaidResult.data);
    setOrderInformation(OrderPaidResult.data);
    // console.log(data);
  }, []);
  return (
    <div className="bg-yellow-lightYellow">
      <div className="mx-12 mt-20 bg-white rounded-lg pb-15 p-7 md:w-1/2 md:pl-12 md:mx-auto">
        <div className="m-auto mt-2">
          <div>
            <div className="flex items-center justify-center mt-2 mb-12 text-2xl font-bold tracking-wider text-gray-deepGray">
              訂單資訊
            </div>
            <div className="flex mt-6 text-black border-b border-gray-200 text-md lg:text-base">
              <p className="m-2">訂單編號</p>
              <p className="m-2"> No. {orderInformation.order_id} </p>
            </div>
            <div className="flex mt-2 text-black border-b border-gray-200 text-md lg:text-base">
              <p className="pt-1 m-2">訂單狀態</p>
              <p className="px-2 py-1 m-2 text-white rounded-md bg-yellow-deepYellow">
                完成
              </p>
            </div>
            <div className="flex mt-2 text-black border-b border-gray-200 text-md lg:text-base">
              <p className="m-2">付款方式</p>
              <p className="m-2">信用卡</p>
            </div>
            <div className="flex mt-2 text-black border-b border-gray-200 text-md lg:text-base">
              <p className="m-2">付款金額</p>
              <p className="m-2">$ {orderInformation.total_price} </p>
            </div>
            <div className="flex mt-2 text-black border-b border-gray-200 text-md lg:text-base">
              <p className="m-2">訂單建立時間</p>
              <p className="m-2">{orderInformation.updatedAt}</p>
            </div>
          </div>
          <div className="mt-20">
            <div className="flex items-center justify-center mt-2 mb-12 text-2xl font-bold tracking-wider text-gray-deepGray">
              飲料品項
            </div>
            {drinks.map((item) => {
              return <DrinkItem data={item}></DrinkItem>;
            })}
          </div>
        </div>
      </div>
      <SubFooter />
    </div>
  );
};

export default ProductListsPage;
