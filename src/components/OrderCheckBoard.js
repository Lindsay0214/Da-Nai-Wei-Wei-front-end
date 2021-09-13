const OrderBoard = () => {
  return (
    <div className="h-auto">
      {/* progress bar  start */}
      <div className="p-20 bg-yellow-default ">
        <ul className="flex justify-between w-full mx-auto">
          <li className="relative w-1/3 text-center nav-item before:process-before">
            訂購明細
          </li>
          <li className="relative w-1/3 text-center nav-item before:process-active after:process-after">
            訂購資訊
          </li>
          <li className="relative w-1/3 text-center nav-item before:process-before after:process-after">
            訂單完成
          </li>
        </ul>
      </div>
      {/* container start */}
      <div className="w-full h-auto bg-yellow-default">
        {/* board start */}
        <div className="w-8/12 h-auto pb-10 ml-auto mr-auto bg-white rounded-lg ">
          {/* div */}
          <div>
            <h1 className="flex justify-center w-4/5 pt-10 m-auto text-4xl text-black font-seminole">
              訂購人
            </h1>
            <div className="flex w-4/5 m-auto border-b-2 border-black border-opacity-60">
              <div className="flex justify-start w-20 h-20 mt-24 ml-32 rounded-full bg-yellow-hover"></div>
              <p className="h-6 ml-6 text-xl mt-28 mb-28">王小明</p>
              <p className="h-6 text-xl mt-36 -ml-14 mb-28">0911-123-321</p>
            </div>
          </div>

          <div>
            <h1 className="flex justify-center w-4/5 pt-10 m-auto text-4xl text-black font-seminole">
              付款方式
            </h1>
            <div className="flex w-1/4 h-48 mt-20 mb-20 ml-32 rounded-lg bg-yellow-hover">
              <p className="text-white space-around p-7">0000-0000-1111-1111</p>
            </div>
          </div>

          {/* div */}
          <div className="w-4/5 m-auto border-t-2 border-black border-opacity-60">
            <h1 className="flex justify-center w-4/5 pt-10 m-auto text-4xl text-black font-seminole">
              最後確認
            </h1>
            <div className="pb-10 m-auto mt-20 mb-20 rounded-lg w-12/12 bg-yellow-hover h-1/5">
              <p className="m-auto text-white p-7">鮮奶紅茶</p>
              <p className="text-white pl-7">
                大杯熱 / 熱 / 標準甜 / $55 / 1 份
              </p>
            </div>
            {/* div end */}
          </div>
          {/* button */}
          <div className="flex justify-end pr-40">
            <a
              className="block w-40 h-6 p-6 pb-8 mt-20 leading-3 tracking-wide text-center text-white rounded-lg hover:bg-yellow-default hover:text-yellow-hover ml-96 bg-yellow-hover"
              href="/order/pay"
            >
              前往付款
            </a>
          </div>
          {/* button end */}
        </div>
        {/* board end */}
      </div>
    </div>
  );
};
export default OrderBoard;
