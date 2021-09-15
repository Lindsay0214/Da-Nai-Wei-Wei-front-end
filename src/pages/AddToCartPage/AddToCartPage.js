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
        <div className="m-10 mx-5 text-xs md:mx-8 md:text-base">
          <div className="flex flex-col pb-4 mb-4 border-b border-black">
            <label>
              <input type="radio" className="mr-2" name="size"></input>
              大杯
            </label>
            <label>
              <input type="radio" className="mr-2" name="size"></input>
              小杯
            </label>
          </div>
          <div className="flex pb-4 mb-4 space-x-16 border-b border-black md:space-x-32">
            <div className="flex flex-col">
              <label>
                <input type="radio" name="sugar" className="mr-2"></input>
                正常甜
              </label>
              <label>
                <input type="radio" className="mr-2" name="sugar"></input>
                七分甜
              </label>
              <label>
                <input type="radio" className="mr-2" name="sugar"></input>
                五分甜
              </label>
            </div>
            <div className="flex flex-col md:ml-28">
              <label>
                <input type="radio" className="mr-2" name="sugar"></input>
                三分甜
              </label>
              <label>
                <input type="radio" className="mr-2" name="sugar"></input>
                一分甜
              </label>
              <label>
                <input type="radio" className="mr-2" name="sugar"></input>
                不要甜
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <label>
              <input type="radio" className="mr-2" name="temperature"></input>
              熱的
            </label>
            <label>
              <input type="radio" className="mr-2" name="temperature"></input>
              冰的
            </label>
          </div>
          <button
            className="bg-yellow-deepYellow m-2 text-white  md:px-4 px-4 py-1.5 rounded-lg hover:hover"
            type="button"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPage;
