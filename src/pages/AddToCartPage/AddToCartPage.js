/* eslint-disable  */
import { useState, useRef, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {
  getDetailId,
  addOrderItem,
  addShoppingCart,
  getProduct
} from '../../api';

const AddToCartPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    (async function() {
      const result = await getProduct(id);
      setProduct(result.data.product);
    })();
  }, []);
  const history = useHistory();
  const detail = useRef({
    size: '',
    sweetness: '',
    ice: ''
  });
  function handleChangeSize(size) {
    detail.current.size = size;
  }
  function handleChangeSweetness(sweetness) {
    detail.current.sweetness = sweetness;
  }
  function handleChangeIce(ice) {
    detail.current.ice = ice;
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
        const payload = {
          detail_id: detailId,
          quantity,
          product_id: id
        };
        await addOrderItem(payload);
        history.push('/order');
      } catch (err) {
        // console.log(err);
      }
    } else {
      setError(
        toast.error('檢查一下，看看大小、糖度或是冰度有地方沒有填寫到', {
          position: toast.POSITION.TOP_CENTER
        })
      );
    }
  }
  return (
    <div className="flex items-center justify-center bg-yellow-lightYellow">
      <div className="pb-10 mt-10 bg-white rounded-lg w-80 md:w-96">
        <div className="flex items-center mt-8 justify-evenly">
          <div className="h-20 bg-gray-200 w-28 md:w-32 md:h-24"></div>
          <div className="space-y-3">
            <div className="flex items-center text-sm md:text-base md:mr-10">
              品名：{product.name}
            </div>
            <div className="flex items-center text-sm md:text-base md:mr-10">
              價格：{product.price} 元 / 杯
            </div>
          </div>
        </div>
        <div className="m-10 mx-12 text-xs md:mx-12 md:text-base">
          <div className="flex flex-col pb-4 mb-4 border-b border-black">
            <label className="cursor-pointer">
              <input
                type="radio"
                className="mr-2 cursor-pointer"
                name="size"
                onChange={() => handleChangeSize('大杯')}
              ></input>
              大杯
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="mr-2 cursor-pointer"
                name="size"
                onChange={() => handleChangeSize('中杯')}
              ></input>
              中杯
            </label>
          </div>
          <div className="flex pb-4 mb-4 space-x-16 border-b border-black md:space-x-32">
            <div className="flex flex-col">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={() => handleChangeSweetness('正常糖')}
                  name="sweetness"
                  className="mr-2 cursor-pointer"
                ></input>
                正常糖
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={() => handleChangeSweetness('少糖')}
                  className="mr-2 cursor-pointer"
                  name="sweetness"
                ></input>
                少糖
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={() => handleChangeSweetness('半糖')}
                  className="mr-2 cursor-pointer"
                  name="sweetness"
                ></input>
                半糖
              </label>
            </div>
            <div className="flex flex-col md:ml-20">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={() => handleChangeSweetness('微糖')}
                  className="mr-2 cursor-pointer"
                  name="sweetness"
                ></input>
                微糖
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={() => handleChangeSweetness('無糖')}
                  className="mr-2 cursor-pointer"
                  name="sweetness"
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
                  onChange={() => handleChangeIce('正常冰')}
                  className="mr-2 cursor-pointer"
                  name="ice"
                ></input>
                正常冰
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={() => handleChangeIce('少冰')}
                  className="mr-2 cursor-pointer"
                  name="ice"
                ></input>
                少冰
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={() => handleChangeIce('微冰')}
                  className="mr-2 cursor-pointer"
                  name="ice"
                ></input>
                微冰
              </label>
            </div>
            <div className="flex flex-col md:ml-20">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={() => handleChangeIce('去冰')}
                  className="mr-2 cursor-pointer"
                  name="ice"
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
            {error && <ToastContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPage;
