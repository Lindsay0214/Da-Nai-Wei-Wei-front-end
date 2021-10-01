import { FaPlus, FaMinus } from 'react-icons/fa';

const DetailBoard = ({
  data,
  handleChangeSize,
  handleChangeSweetness,
  handleChangeIce,
  handlePlus,
  handleMinus,
  handleSubmit
}) => {
  return (
    <div className="flex">
      <div className="m-10 bg-white rounded-lg w-80 md:m-20 md:w-96">
        <div className="flex items-center justify-around mt-8 ">
          <div className="space-y-3">
            <div className="flex items-center text-md md:text-xl">
              品名：{data.productName}
            </div>
            <div className="flex items-center text-md md:text-xl">
              價格：{data.price} 元 / 杯
            </div>
          </div>
        </div>
        <div className="m-10 mx-12 text-xs md:mx-12 md:text-base">
          <div className="flex flex-col pb-4 mb-4 border-b border-black">
            <label className="cursor-pointer">
              <input
                type="radio"
                className="mr-2"
                name="size"
                checked={data.size === '大杯'}
                onChange={() => handleChangeSize('大杯')}
              ></input>
              大杯
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="mr-2"
                name="size"
                checked={data.size === '中杯'}
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
                  className="mr-2"
                  checked={data.sweetness === '正常糖'}
                ></input>
                正常糖
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={() => handleChangeSweetness('少糖')}
                  className="mr-2"
                  name="sweetness"
                  checked={data.sweetness === '少糖'}
                ></input>
                少糖
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={() => handleChangeSweetness('半糖')}
                  className="mr-2"
                  name="sweetness"
                  checked={data.sweetness === '半糖'}
                ></input>
                半糖
              </label>
            </div>
            <div className="flex flex-col md:ml-20">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={() => handleChangeSweetness('微糖')}
                  className="mr-2"
                  name="sweetness"
                  checked={data.sweetness === '微糖'}
                ></input>
                微糖
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={() => handleChangeSweetness('無糖')}
                  className="mr-2"
                  name="sweetness"
                  checked={data.sweetness === '無糖'}
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
                  value="正常冰"
                  checked={data.ice === '正常冰'}
                ></input>
                正常冰
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={() => handleChangeIce('少冰')}
                  className="mr-2"
                  name="ice"
                  checked={data.ice === '少冰'}
                ></input>
                少冰
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={() => handleChangeIce('微冰')}
                  className="mr-2"
                  name="ice"
                  checked={data.ice === '微冰'}
                ></input>
                微冰
              </label>
            </div>
            <div className="flex flex-col md:ml-20">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  onChange={() => handleChangeIce('去冰')}
                  className="mr-2"
                  name="ice"
                  checked={data.ice === '去冰'}
                ></input>
                去冰
              </label>
            </div>
          </div>
          <div className="flex items-center pb-4 ">
            <span className="inline-block my-auto ml-1 mr-5 ">數量</span>
            {data.quantity > 0 && (
              <FaMinus
                className="mx-2 cursor-pointer"
                onClick={handleMinus}
              ></FaMinus>
            )}
            {data.quantity <= 0 && (
              <FaMinus className="mx-2 cursor-pointer"></FaMinus>
            )}
            <span className="mx-2">{data.quantity}</span>
            <FaPlus
              className="mx-2 cursor-pointer"
              onClick={handlePlus}
            ></FaPlus>
          </div>
          <div className="flex items-center py-2 text-lg">
            <div className="ml-1">共計：{data.quantity * data.price} 元</div>
          </div>
          <div className="relative w-auto h-20">
            <button
              className="absolute bottom-0 right-0 w-24 h-10 p-2 text-lg text-center text-white duration-500 ease-in-out rounded-lg hover:hover bg-yellow-deepYellow "
              type="button"
              onClick={handleSubmit}
            >
              確 認
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailBoard;
