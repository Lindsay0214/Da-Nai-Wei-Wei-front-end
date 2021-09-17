import AdminNavbar from '../../components/AdminNavbar';

const Store = ({ brandName, nickName }) => {
  return (
    <div className="flex w-64 h-48 mb-10 bg-gray-default rounded-3xl">
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
    <div className="flex w-64 h-48 mb-10 bg-gray-600 rounded-3xl">
      <div className="flex flex-col m-auto space-y-5 ">
        <button className="px-12 py-2 text-xl tracking-wide text-white rounded-lg bg-yellow-deepYellow">
          修改
        </button>
        <button className="px-12 py-2 text-xl tracking-wide text-red-500 bg-white rounded-lg">
          刪除
        </button>
      </div>
    </div>
  );
};
const AdminUpdatePage = () => {
  return (
    <div className="flex-col w-auto h-auto bg-yellow-lightYellow">
      <div className="flex-col items-center justify-center w-auto ">
        <AdminNavbar data="後台管理"></AdminNavbar>
        <div className="mx-auto mt-10 lg:mt-20 w-min md:w-160 lg:w-270">
          <div className="flex flex-wrap h-auto m-auto md:space-x-12 lg:space-x-12 bg-yellow-light">
            <div></div>
            <StoreClicked></StoreClicked>
            <Store brandName="麻雞" nickName="台北南京店"></Store>
            <Store brandName="六十嵐" nickName="台北南京店"></Store>
            <Store brandName="CaCa" nickName="台北南京店"></Store>
            <Store brandName="泥客夏" nickName="台北南京店"></Store>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminUpdatePage;
