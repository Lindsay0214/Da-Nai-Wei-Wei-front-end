const NoPermissionPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-yellow-default">
      <div className="flex flex-col items-center justify-center px-16 py-8 bg-white rounded">
        <div className="text-xl ">趕緊登入，才能下單喔！</div>
        <div className="flex flex-col items-center justify-center mt-8">
          <button
            className="hover:bg-yellow-noted hover:text-white hover:border-white  py-1.5 rounded border border-gray-default px-16"
            type="button"
          >
            登入
          </button>
          <button
            className="hover:bg-yellow-noted hover:text-white hover:border-white  py-1.5 rounded border border-gray-default mt-4 px-16"
            type="button"
          >
            註冊
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoPermissionPage;
