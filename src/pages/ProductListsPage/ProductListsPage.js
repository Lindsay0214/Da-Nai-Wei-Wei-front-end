import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';

const ProductListsPage = () => {
  const shopInfo = JSON.parse(localStorage.getItem('shop'));
  const { id } = shopInfo;
  const [shop, setShop] = useState([]);

  return (
    <div className="bg-yellow-lightYellow">
      <div className="flex items-center justify-center mt-20 mb-12 text-2xl font-bold tracking-wider text-gray-deepGray">
        訂單資訊
      </div>
      <div className="mx-12 bg-white rounded-lg pb-15 p-7 md:w-1/2 md:pl-12 md:mx-auto">
        <div className="m-auto mt-2">
          <div className="flex">
            <div className="w-10 h-10 mr-3 bg-white rounded-full">
              <img
                className="w-full h-full rounded-full"
                src={shop.URL}
                alt=""
              />
            </div>
            <div className="px-4 py-2 font-bold bg-gray-100 rounded-lg">
              {shopInfo.brandName}
            </div>
          </div>
          <div>
            <div className="flex mt-2 text-black text-md lg:text-base">
              <FaPhone className="m-2 text-gray-700" />
              <p className="m-1 text-yellow-deepYellow">02-2222-2222</p>
            </div>
            <div className="flex mt-6 text-black border-b border-gray-200 text-md lg:text-base">
              <p className="m-2">訂單編號</p>
              <p className="m-2">0000000000</p>
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
              <p className="m-2">$100</p>
            </div>
            <div className="flex mt-2 text-black border-b border-gray-200 text-md lg:text-base">
              <p className="m-2">訂單建立時間</p>
              <p className="m-2">2021-10-10 10:10:10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListsPage;
