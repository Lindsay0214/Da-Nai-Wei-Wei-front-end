const EditInput = ({ data }) => {
  return (
    <div className="w-56 mx-auto my-1 lg:my-6 lg:w-96">
      <div className="relative invisible text-gray-400 lg:mb-2 left-2 lg:visible">
        {data}
      </div>
      <input
        className="py-1 pl-2 bg-gray-200 rounded-md lg:w-80 lg:h-12 w-36"
        type="text"
        placeholder={data}
      />
      <button className="px-4 py-1 ml-4 text-white rounded-md lg:ml-0 lg:h-12 bg-yellow-default">
        修改
      </button>
    </div>
  );
};
const CMSStorePage = () => {
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
        <div className="flex-col w-64 p-2 m-auto bg-white rounded-md lg:w-160 ">
          <div className="mt-4 text-center lg:text-4xl">珍煮丹</div>
          <div className="text-center lg:text-4xl">台北南京店</div>
          <div className="mx-auto my-6 border-b w-52 border-gray-default lg:invisible"></div>
          <div className="flex flex-col mt-4 ">
            <EditInput data="店家名稱"></EditInput>
            <EditInput data="營業時間"></EditInput>
            <EditInput data="店家地址"></EditInput>
            <div className="mb-10"></div>
          </div>
        </div>
      </div>

      <div className="text-center h-28">footer</div>
    </div>
  );
};
export default CMSStorePage;
