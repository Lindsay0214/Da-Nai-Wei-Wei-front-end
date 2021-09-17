import AdminNavbar from '../../components/AdminNavbar';

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
      <button className="px-4 py-1 ml-4 text-white duration-500 ease-in-out rounded-md hover:hover lg:ml-0 lg:h-12 bg-yellow-deepYellow">
        修改
      </button>
    </div>
  );
};

const AdminEditPage = () => {
  return (
    <div className="flex-col w-auto h-auto bg-yellow-lightYellow">
      <div className="flex-col items-center justify-center w-auto ">
        <AdminNavbar data="後台管理"></AdminNavbar>
        <div className="flex-col p-2 m-auto bg-white rounded-md w-80 lg:w-160 ">
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
    </div>
  );
};
export default AdminEditPage;
