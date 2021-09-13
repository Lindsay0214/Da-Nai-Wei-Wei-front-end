const OrderBoard = () => {
  return (
    <div className="h-auto">
      {/* progress bar  start */}
      <div className="pb-14 lg:p-20 bg-yellow-default">
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
      <div className="w-full h-auto bg-yellow-default">
        {/* board start */}
        <div className="w-5/6 h-auto pb-10 m-auto bg-white rounded-lg lg:w-8/12 lg:h-5/6">
          {/* div */}
          <div>
            <h1 className="flex justify-center w-4/5 py-6 m-auto text-xl text-black lg:py-10 lg:text-4xl border-opacity-40 font-seminole">
              訂購人
            </h1>
            <div className="flex w-4/5 m-auto border-b-2 border-black border-opacity-40">
              <div className="flex justify-start w-10 h-10 mt-6 rounded-full ml-9 lg:w-20 lg:h-20 lg:mt-24 lg:ml-32 bg-yellow-hover"></div>
              <p className="h-6 mt-8 ml-3.5 mb-10 text-base lg:mt-32 lg:ml-6 lg:text-xl lg:mb-28">
                王小明
              </p>
              <p className="h-6 mt-8 ml-3.5 mb-10 text-base lg:text-xl lg:mt-36 lg:-ml-14 lg:mb-28">
                0911-123-321
              </p>
            </div>
          </div>

          <div>
            <h1 className="flex justify-center w-4/5 py-6 m-auto text-xl text-black lg:py-10 lg:text-4xl border-opacity-40 font-seminole">
              付款方式
            </h1>
            <div className="flex w-8/12 h-48 mb-8 ml-20 rounded-lg lg:w-1/4 lg:mt-20 lg:mb-20 lg:ml-32 bg-yellow-hover">
              <p className="text-white space-around p-7">0000-0000-1111-1111</p>
            </div>
          </div>

          {/* div */}
          <div className="w-4/5 m-auto border-t-2 border-black border-opacity-40">
            <h1 className="flex justify-center w-4/5 py-6 m-auto text-xl text-black lg:py-10 lg:text-4xl border-opacity-40 font-seminole">
              最後確認
            </h1>
            <div className="w-10/12 lg:w-9/12 p-2.5 m-auto rounded-lg bg-yellow-hover h-1/5">
              <p className="m-auto text-white lg:p-7">鮮奶紅茶</p>
              <p className="text-white lg:pl-7">
                大杯熱 / 熱 / 標準甜 / $55 / 1 份
              </p>
            </div>
            {/* div end */}
          </div>
        </div>
        {/* board end */}
        {/* button */}
        <div className="flex justify-end pr-10 -my-14 lg:pr-40">
          <a
            className="block w-56 h-10 px-20 py-2 mt-20 text-center text-white rounded-lg lg:leading-3 lg:tracking-wide hover:order-hover ml-96 bg-yellow-hover"
            href="/order/pay"
          >
            下一步
          </a>
        </div>
        {/* button end */}
      </div>
    </div>
  );
};
export default OrderBoard;
