const OrderBoard = () => {
  return (
    <div className="absolute w-full h-full bg-yellow-default">
      <div className="w-8/12 m-auto bg-white rounded-lg h-5/6">
        <h1 className="flex justify-center w-4/5 py-10 m-auto text-4xl text-black border-b-2 border-black border-opacity-60 font-seminole">
          迷客夏 台北南京店
        </h1>
        <div className="flex">
          <div className="flex justify-start w-20 h-20 mt-24 ml-32 rounded-full bg-yellow-hover"></div>
          <p className="h-6 mt-32 ml-6 text-xl mb-28">王小明</p>
        </div>
        <div className="w-9/12 m-auto rounded-lg bg-yellow-hover h-1/5">
          <p className="m-auto text-white p-7">鮮奶紅茶</p>
          <p className="text-white pl-7">大杯熱 / 熱 / 標準甜 / $55 / 1 份</p>
        </div>
        <div className="flex justify-end pr-40">
          <a
            className="block w-40 h-6 p-6 pb-8 mt-20 leading-3 tracking-wide text-center text-white rounded-lg hover:bg-yellow-default hover:text-yellow-hover ml-96 bg-yellow-hover"
            href="/order/check"
          >
            餐點確認無誤
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderBoard;
