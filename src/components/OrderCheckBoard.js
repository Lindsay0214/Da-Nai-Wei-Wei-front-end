const OrderBoard = () => {
  return (
    <div className="h-auto">
      {/* progress bar  start */}
      <div className="pb-14 lg:p-20 bg-yellow-lightYellow">
        <ul className="flex justify-around w-full mx-auto">
          <li className="relative w-1/3 text-xs text-center lg:text-base nav-item before:process-before text-brown-default">
            訂購明細
          </li>
          <li className="relative w-1/3 text-xs text-center nav-item lg:text-base before:process-active after:process-after text-brown-default">
            訂購資訊
          </li>
          <li className="relative w-1/3 text-xs text-center nav-item lg:text-base before:process-before after:process-after text-brown-default">
            訂單完成
          </li>
        </ul>
      </div>
      {/* container start */}
      <div className="w-full h-auto bg-yellow-lightYellow">
        {/* board start */}
        <div className="w-5/6 h-auto pb-10 m-auto bg-white rounded-lg lg:w-8/12 lg:h-5/6">
          {/* div */}
          <div>
            <h1 className="flex justify-center w-4/5 py-6 m-auto text-xl text-black lg:py-10 lg:text-4xl border-opacity-40 font-seminole">
              訂購人
            </h1>
            <div className="flex w-4/5 m-auto border-b-2 border-black border-opacity-40">
              <div className="flex justify-start w-10 h-10 ml-5 bg-cover rounded-full lg:w-20 lg:h-20 lg:mt-24 lg:ml-32 bg-logo"></div>
              <p className="h-6 mt-2 mb-8 ml-3 text-sm lg:mt-28 lg:ml-6 lg:text-xl">
                王小明
              </p>
              <p className="h-6 mt-2 mb-8 text-sm lg:text-lg lg:mt-36 lg:-ml-14 lg:mb-14">
                0911-123-321
              </p>
            </div>
          </div>

          <div>
            <h1 className="flex justify-center w-4/5 py-6 m-auto text-xl text-black lg:py-10 lg:text-4xl border-opacity-40 font-seminole">
              付款方式
            </h1>
            <div className="flex w-9/12 mb-8 ml-12 rounded-lg h-36 lg:w-1/4 lg:mt-20 lg:mb-14 lg:h-48 lg:ml-32 bg-yellow-deepYellow">
              <p className="text-white space-around p-7">0000-0000-1111-1111</p>
            </div>
          </div>

          {/* div */}
          <div className="w-4/5 m-auto border-t-2 border-black border-opacity-40">
            <h1 className="flex justify-center w-4/5 py-6 m-auto text-xl text-black lg:py-10 lg:text-4xl border-opacity-40 font-seminole">
              最後確認
            </h1>
            <div className="w-10/12 lg:w-9/12 p-2.5 m-auto rounded-lg bg-yellow-deepYellow h-1/5 lg:p-7">
              <p className="m-auto text-white lg:pb-5">鮮奶紅茶</p>
              <p className="text-white">大杯熱 / 熱 / 標準甜 / $55 / 1 份</p>
            </div>
            {/* div end */}
          </div>
        </div>
        {/* board end */}
        {/* button */}
        <div className="flex justify-end pr-10 -my-14 lg:pr-40">
          <a
            className="block w-56 h-10 px-2 py-2 mt-20 ml-56 text-center text-white rounded-lg hover:hover bg-yellow-deepYellow md:w-28 md:mr-8 lg:mr-40"
            href="#/order-pay"
          >
            付款去
          </a>
        </div>
        {/* button end */}
      </div>
    </div>
  );
};
export default OrderBoard;
