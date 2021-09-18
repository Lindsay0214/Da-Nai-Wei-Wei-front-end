/* eslint-disable jsx-a11y/label-has-associated-control */
const AddToCartPage = () => {
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
              <input type="radio" className="mr-2" name="size"></input>
              大杯
            </label>
            <label>
              <input type="radio" className="mr-2" name="size"></input>
              中杯
            </label>
          </div>
          <div className="flex pb-4 mb-4 space-x-16 border-b border-black md:space-x-32">
            <div className="flex flex-col">
              <label>
                <input type="radio" name="sweetness" className="mr-2"></input>
                正常糖
              </label>
              <label>
                <input type="radio" className="mr-2" name="sweetness"></input>
                少糖
              </label>
              <label>
                <input type="radio" className="mr-2" name="sweetness"></input>
                半糖
              </label>
            </div>
            <div className="flex flex-col md:ml-20">
              <label>
                <input type="radio" className="mr-2" name="sweetness"></input>
                微糖
              </label>
              <label>
                <input type="radio" className="mr-2" name="sweetness"></input>
                無糖
              </label>
            </div>
          </div>
          <div className="flex pb-4 mb-4 space-x-16 border-b border-black md:space-x-32">
            <div className="flex flex-col">
              <label>
                <input type="radio" className="mr-2" name="ice"></input>
                正常冰
              </label>
              <label>
                <input type="radio" className="mr-2" name="ice"></input>
                少冰
              </label>
              <label>
                <input type="radio" className="mr-2" name="ice"></input>
                微冰
              </label>
            </div>
            <div className="flex flex-col md:ml-20">
              <label>
                <input type="radio" className="mr-2" name="ice"></input>
                去冰
              </label>
            </div>
          </div>
          <button
            className="px-8 py-2 m-2 mt-12 ml-20 text-white duration-500 ease-in-out border rounded-lg border-yellow-deepYellow md:ml-24 bg-yellow-deepYellow md:px-8 hover:hover "
            type="button"
          >
            <a href="#/order">確認</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPage;
