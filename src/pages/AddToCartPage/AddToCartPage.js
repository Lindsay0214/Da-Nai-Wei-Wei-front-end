/* eslint-disable  */
import { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { getDetailId, addOrderItem, addShoppingCart } from '../../api';

const AddToCartPage = () => {
  const history = useHistory();
  const detail = useRef({
    size: '',
    sweetness: '',
    ice: ''
  });
  function handleChangeSize(e) {
    detail.current.size = e.target.value;
  }
  function handleChangeSweetness(e) {
    detail.current.sweetness = e.target.value;
  }
  function handleChangeIce(e) {
    detail.current.ice = e.target.value;
  }
  const [quantity, setQuantity] = useState(1);
  const handlePlus = () => {
    setQuantity((pre) => pre + 1);
  };
  const handleMinus = () => {
    setQuantity((pre) => pre - 1);
  };
  async function handleClick() {
    (async function() {
      await addShoppingCart(); // 確保有購物車可以裝商品
    })();
    if (quantity <= 0) return alert('數量不能是 0 或是負數');
    if (detail.current.size && detail.current.sweetness && detail.current.ice) {
      try {
        const result = await getDetailId(detail.current);
        const detailId = result.data.detail_id;
        const productId = 1;
        const payload = {
          detail_id: detailId,
          quantity,
          product_id: productId
        };
        const result2 = await addOrderItem(payload);
        history.push('/order');
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('檢查一下，看看大小、糖度或是冰度有地方沒有填寫到');
    }
  }
  return (
    <div className="flex items-center justify-center bg-yellow-lightYellow">
      <div className="pb-10 bg-white rounded-lg w-80 md:w-96">
        <div className="flex items-center justify-around mt-8 ">
          <div className="h-20 bg-gray-200 w-28 md:w-32 md:h-24"></div>
          <div className="flex items-center justify-center mr-2 text-sm md:text-base md:mr-10">
            烏龍奶綠
          </div>
        </div>
        <div className="m-10 mx-12 text-xs md:mx-12 md:text-base">
          <div className="flex flex-col pb-4 mb-4 border-b border-black">
            <label className="cursor-pointer">
              <input
                type="radio"
                className="mr-2 cursor-pointer"
                value="大杯"
                name="size"
                onChange={handleChangeSize}
              ></input>
              大杯
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="mr-2 cursor-pointer"
                name="size"
                value="中杯"
                onChange={handleChangeSize}
              ></input>
              中杯
            </label>
          </div>
          <div className="flex pb-4 mb-4 space-x-16 border-b border-black md:space-x-32">
            <div className="flex flex-col">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={handleChangeSweetness}
                  name="sweetness"
                  className="mr-2 cursor-pointer"
                  value="正常糖"
                ></input>
                正常糖
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={handleChangeSweetness}
                  className="mr-2 cursor-pointer"
                  name="sweetness"
                  value="少糖"
                ></input>
                少糖
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={handleChangeSweetness}
                  className="mr-2 cursor-pointer"
                  name="sweetness"
                  value="半糖"
                ></input>
                半糖
              </label>
            </div>
            <div className="flex flex-col md:ml-20">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={handleChangeSweetness}
                  className="mr-2 cursor-pointer"
                  name="sweetness"
                  value="微糖"
                ></input>
                微糖
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={handleChangeSweetness}
                  className="mr-2 cursor-pointer"
                  name="sweetness"
                  value="無糖"
                ></input>
                無糖
              </label>
            </div>
          </div>
          <div className="flex pb-4 mb-4 space-x-16 border-b border-black md:space-x-32">
            <div className="flex flex-col">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={handleChangeIce}
                  className="mr-2 cursor-pointer"
                  name="ice"
                  value="正常冰"
                ></input>
                正常冰
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={handleChangeIce}
                  className="mr-2 cursor-pointer"
                  name="ice"
                  value="少冰"
                ></input>
                少冰
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={handleChangeIce}
                  className="mr-2 cursor-pointer"
                  name="ice"
                  value="微冰"
                ></input>
                微冰
              </label>
            </div>
            <div className="flex flex-col md:ml-20">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={handleChangeIce}
                  className="mr-2 cursor-pointer"
                  name="ice"
                  value="去冰"
                ></input>
                去冰
              </label>
            </div>
          </div>
          <div className="flex items-center pb-4 border-b border-black">
            <span className="inline-block my-auto ml-1 mr-5 ">數量</span>
            {quantity > 0 && (
              <FaMinus
                className="mx-2 cursor-pointer"
                onClick={handleMinus}
              ></FaMinus>
            )}
            {quantity <= 0 && (
              <FaMinus className="mx-2 cursor-pointer"></FaMinus>
            )}
            <span className="mx-2">{quantity}</span>
            <FaPlus
              className="mx-2 cursor-pointer"
              onClick={handlePlus}
            ></FaPlus>
          </div>
          <div className="relative">
            <button
              className="absolute right-0 w-20 px-4 py-2 text-white duration-500 ease-in-out border rounded-lg top-6 border-yellow-deepYellow bg-yellow-deepYellow hover:hover"
              type="button"
              onClick={handleClick}
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPage;
