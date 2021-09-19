/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { getDetailId, addOrderItem } from '../../api';

const AddToCartPage = () => {
  const detail = useRef({
    size: null,
    sweetness: null,
    ice: null
  });
  const [quantity, setQuantity] = useState(1);
  function handleChangeSize(e) {
    detail.current.size = e.target.value;
  }
  function handleChangeSweetness(e) {
    detail.current.sweetness = e.target.value;
  }
  function handleChangeIce(e) {
    detail.current.ice = e.target.value;
  }
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    setQuantity(quantity - 1);
  };
  async function handleClick() {
    if (detail.current.size && detail.current.sweetness && detail.current.ice) {
      // console.log(typeof detail.current);
      // console.log(detail.current);
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
        // console.log(result2.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div className="flex items-center justify-center bg-yellow-lightYellow">
      <div className="w-screen m-20 bg-white rounded-lg md:w-96">
        <div className="flex items-center justify-around mt-8 ">
          <div className="h-20 bg-gray-200 w-28 md:w-32 md:h-24"></div>
          <div className="flex items-center justify-center mr-2 text-sm md:text-base md:mr-10">
            烏龍奶綠
          </div>
        </div>
        <div className="m-10 mx-12 text-xs md:mx-12 md:text-base">
          <div className="flex flex-col pb-4 mb-4 border-b border-black">
            <label>
              <input
                type="radio"
                className="mr-2"
                value="大杯"
                name="size"
                onChange={handleChangeSize}
              ></input>
              大杯
            </label>
            <label>
              <input
                type="radio"
                className="mr-2"
                name="size"
                value="中杯"
                onChange={handleChangeSize}
              ></input>
              中杯
            </label>
          </div>
          <div className="flex pb-4 mb-4 space-x-16 border-b border-black md:space-x-32">
            <div className="flex flex-col">
              <label>
                <input
                  type="radio"
                  onChange={handleChangeSweetness}
                  name="sweetness"
                  className="mr-2"
                  value="正常糖"
                ></input>
                正常糖
              </label>
              <label>
                <input
                  type="radio"
                  onChange={handleChangeSweetness}
                  className="mr-2"
                  name="sweetness"
                  value="少糖"
                ></input>
                少糖
              </label>
              <label>
                <input
                  type="radio"
                  onChange={handleChangeSweetness}
                  className="mr-2"
                  name="sweetness"
                  value="半糖"
                ></input>
                半糖
              </label>
            </div>
            <div className="flex flex-col md:ml-20">
              <label>
                <input
                  type="radio"
                  onChange={handleChangeSweetness}
                  className="mr-2"
                  name="sweetness"
                  value="微糖"
                ></input>
                微糖
              </label>
              <label>
                <input
                  type="radio"
                  onChange={handleChangeSweetness}
                  className="mr-2"
                  name="sweetness"
                  value="無糖"
                ></input>
                無糖
              </label>
            </div>
          </div>
          <div className="flex pb-4 mb-4 space-x-16 border-b border-black md:space-x-32">
            <div className="flex flex-col">
              <label>
                <input
                  type="radio"
                  onChange={handleChangeIce}
                  className="mr-2"
                  name="ice"
                  value="正常冰"
                ></input>
                正常冰
              </label>
              <label>
                <input
                  type="radio"
                  onChange={handleChangeIce}
                  className="mr-2"
                  name="ice"
                  value="少冰"
                ></input>
                少冰
              </label>
              <label>
                <input
                  type="radio"
                  onChange={handleChangeIce}
                  className="mr-2"
                  name="ice"
                  value="微冰"
                ></input>
                微冰
              </label>
            </div>
            <div className="flex flex-col md:ml-20">
              <label>
                <input
                  type="radio"
                  onChange={handleChangeIce}
                  className="mr-2"
                  name="ice"
                  value="去冰"
                ></input>
                去冰
              </label>
            </div>
          </div>
          <div className="flex items-center pb-4 border-b border-black">
            <span className="inline-block my-auto ml-1 mr-5 ">數量</span>
            <FaMinus
              className="mx-2 cursor-pointer"
              onClick={handleMinus}
            ></FaMinus>
            <span className="mx-2">{quantity}</span>
            <FaPlus
              className="mx-2 cursor-pointer"
              onClick={handlePlus}
            ></FaPlus>
          </div>
          <button
            className="px-8 py-2 m-2 mt-12 ml-20 text-white duration-500 ease-in-out border rounded-lg border-yellow-deepYellow md:ml-24 bg-yellow-deepYellow md:px-8 hover:hover "
            type="button"
            onClick={handleClick}
          >
            確認
            <a href="#/order">確認</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPage;
