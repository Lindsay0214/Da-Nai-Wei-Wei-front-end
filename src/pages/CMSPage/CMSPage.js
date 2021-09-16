const Store = ({ brandName, nickName }) => {
  return (
    <div className="flex mb-10 bg-gray-default w-72 h-52 rounded-3xl">
      <div className="flex flex-col m-auto space-y-10 ">
        <span className="inline-block mx-auto text-4xl my- h-ew">
          {brandName}
        </span>
        <span className="inline-block mx-auto text-4xl h-ew">{nickName}</span>
      </div>
    </div>
  );
};
const StoreClicked = () => {
  return (
    <div className="flex mb-10 bg-gray-600 w-72 h-52 rounded-3xl">
      <div className="flex flex-col m-auto space-y-5 ">
        <button className="px-12 py-2 text-xl tracking-wide text-white rounded-lg bg-yellow-default">
          修改
        </button>
        <button className="px-12 py-2 text-xl tracking-wide text-red-500 bg-white rounded-lg">
          刪除
        </button>
      </div>
    </div>
  );
};
const CMSPage = () => {
  return (
    <div className="flex-col w-auto h-auto bg-yellow-light">
      <div className="flex-col items-center justify-center w-auto ">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-24 h-10 mx-auto mb-10 lg:mt-8 lg:mb-20 lg:mx-20 mt-14">
            <img src="./image/Da-Nai-Wei-Wei_logo.png" alt="" />
          </div>
          <div className="relative p-10 m-auto border-t border-white lg:mr-0 lg:mb-20 lg:flex lg:flex-row w-80 ">
            <div className="m-auto text-xl tracking-wider text-center w-36">
              後台管理
            </div>
            <button className="absolute p-2 text-sm text-white rounded-lg top-9 left-56 lg:static bg-yellow-default">
              返回前台
            </button>
          </div>
        </div>
        <div className="flex flex-wrap h-auto m-auto space-x-12 bg-yellow-light">
          <div></div>
          <StoreClicked></StoreClicked>
          <Store brandName="麻雞" nickName="台北南京店"></Store>
          <Store brandName="六十嵐" nickName="台北南京店"></Store>
          <Store brandName="CaCa" nickName="台北南京店"></Store>
          <Store brandName="泥客夏" nickName="台北南京店"></Store>
        </div>
      </div>
      <div className="text-center h-28">footer</div>
    </div>
  );
};
export default CMSPage;
