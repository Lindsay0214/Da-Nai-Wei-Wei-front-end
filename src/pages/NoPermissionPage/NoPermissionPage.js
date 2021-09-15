const NoPermissionPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-yellow-lightYellow">
      <div className="flex flex-col items-center justify-center px-16 py-8 bg-white rounded">
        <div className="text-xl">趕緊登入，才能下單喔！</div>
        <div className="flex flex-col items-center justify-center mt-8">
          <button
            className="bg-yellow-deepYellow m-2 text-white  md:px-4 px-4 py-1.5 rounded-lg hover:hover"
            type="button"
          >
            登入
          </button>
          <button
            className="bg-yellow-deepYellow m-2 text-white  md:px-4 px-4 py-1.5 rounded-lg hover:hover"
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
