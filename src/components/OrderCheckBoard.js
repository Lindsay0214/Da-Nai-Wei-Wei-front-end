const OrderBoard = () => {
  return (
    <>
      <div className="p-20 bg-yellow-default">
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
      <div className="absolute flex w-full h-full bg-yellow-default">
        <div className="w-8/12 m-auto bg-white rounded-lg h-5/6">
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
            <div className="flex w-4/5 m-auto border-b-2 border-black border-opacity-60">
              <p className="h-6 ml-6 text-xl">信用卡</p>
              <ul>
                <li>卡片一</li>
                <li>卡片一</li>
                <li>卡片一</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="flex justify-center w-4/5 pt-10 m-auto text-4xl text-black font-seminole">
              最後確認
            </h1>
          </div>
          <div className="w-9/12 m-auto rounded-lg bg-yellow-hover h-1/5">
            <p className="m-auto text-white p-7">鮮奶紅茶</p>
            <p className="text-white pl-7">大杯熱 / 熱 / 標準甜 / $55 / 1 份</p>
          </div>
          <a
            className="block w-40 h-6 p-6 pb-8 mt-20 leading-3 tracking-wide text-center text-white rounded-lg hover:bg-yellow-default hover:text-yellow-hover ml-96 bg-yellow-hover"
            href="/order/pay"
          >
            付款去
          </a>
        </div>
      </div>
    </>
  );
};
export default OrderBoard;
