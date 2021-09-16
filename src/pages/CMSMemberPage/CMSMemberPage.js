const InputBar = ({ data }) => {
  return (
    <div className="relative mx-auto">
      <span className="absolute inline-flex invisible text-gray-400 top-12 -left-16 lg:visible ">
        {data}
      </span>
      <input
        className="py-1 pl-2 my-5 bg-gray-200 rounded-md lg:my-9 w-36 h-7 lg:w-80 lg:h-12"
        type="text"
        placeholder={data}
      />
    </div>
  );
};

const CMSMemberPage = () => {
  return (
    <div className="flex-col w-auto h-auto bg-yellow-light">
      <div className="flex-col items-center justify-center w-auto ">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-24 h-10 mx-auto mb-5 lg:w-40 lg:h-16 lg:mt-0 lg:relative lg:top-6 lg:mb-20 lg:mx-20 mt-14">
            <img src="./image/Da-Nai-Wei-Wei_logo.png" alt="" />
          </div>
          <div className="relative p-10 m-auto border-t border-white lg:p-0 lg:mr-0 lg:mb-10 lg:flex lg:flex-row w-80 ">
            <div className="m-auto text-xl tracking-wider text-center w-36 lg:invisible">
              修改會員資料
            </div>
            <button className="absolute invisible p-2 text-sm text-white rounded-lg lg:w-44 lg:h-24 lg:p-10 lg:rounded-none lg:visible top-9 left-56 lg:static bg-yellow-default">
              返回前台
            </button>
          </div>
        </div>
        <div className="flex-col w-64 p-2 m-auto bg-white rounded-md lg:w-160 ">
          <div className="flex flex-col mt-4 ">
            <div className="invisible mx-auto -my-5 text-4xl lg:my-0 lg:visible">
              修改會員資料
            </div>
            <InputBar data="暱稱"></InputBar>
            <InputBar data="信用卡"></InputBar>
            <InputBar data="密碼"></InputBar>
            <button className="w-16 px-4 py-1 mx-auto my-6 text-white rounded-md h-7 lg:h-12 bg-yellow-default">
              修改
            </button>
            <button className="w-24 px-4 py-2 mx-auto my-6 text-xs tracking-wider text-white bg-black rounded-md lg:w-24 lg:h-12 ">
              儲存成功!
            </button>
            <div className="mx-auto text-sm text-gray-font">
              請稍等，將會自行跳轉
            </div>
          </div>
        </div>
      </div>

      <div className="text-center h-28">footer</div>
    </div>
  );
};
export default CMSMemberPage;
