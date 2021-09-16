const OrderBoard = () => {
  return (
    <div className="absolute w-full h-full bg-yellow-lightYellow">
      <div className="w-5/6 h-auto pb-10 m-auto bg-white rounded-lg lg:w-8/12 lg:h-5/6">
        <h1 className="flex justify-center w-4/5 py-6 m-auto text-xl text-black border-b-2 border-black lg:py-10 lg:text-4xl border-opacity-60 font-seminole">
          迷客夏 台北南京店
        </h1>
        <div className="flex">
          <div className="flex justify-start w-10 h-10 mt-6 bg-cover rounded-full ml-9 lg:w-20 lg:h-20 lg:mt-24 lg:ml-32 bg-logo"></div>
          <p className="h-6 mt-8 ml-3.5 mb-10 text-base lg:mt-32 lg:ml-6 lg:text-xl lg:mb-28">
            王小明
          </p>
        </div>
        <div className="w-10/12 lg:w-9/12 p-2.5 m-auto rounded-lg bg-yellow-deepYellow h-1/5">
          <p className="m-auto text-white lg:p-7">鮮奶紅茶</p>
          <p className="text-white lg:pl-7">
            大杯熱 / 熱 / 標準甜 / $55 / 1 份
          </p>
        </div>
      </div>
      <div className="flex justify-end pr-10 -my-14 lg:pr-40">
        <a
          className="block w-56 h-10 px-2 py-2 mt-20 ml-56 text-center text-white rounded-lg hover:hover bg-yellow-deepYellow md:w-28 md:mr-8 lg:mr-40"
          href="#/order-check"
        >
          下一步
        </a>
      </div>
    </div>
  );
};

export default OrderBoard;
