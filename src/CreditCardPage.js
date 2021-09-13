const creditCard = () => {
  return (
    <div className="flex-col bg-yellow-default">
      <div className="text-center h-28">header</div>
      <div className="flex-col h-96">
        <div className="p-4 m-auto text-2xl text-center border-b border-black w-96">
          已綁定信用卡
        </div>
        <div className="flex-col-reverse w-64 h-32 m-auto text-left bg-white rounded-md bg-opacity-60 my-11">
          <span className="p-2">XXXX-XXXX-XXXX-XXXX</span>
        </div>
        <div className="w-64 m-auto ">
          <span className="inline-block w-20 py-1 mr-2 text-center bg-white rounded-3xl">
            + 新增
          </span>
          <span className="inline-block w-20 py-1 mr-2 text-center bg-white rounded-3xl ">
            - 刪除
          </span>
        </div>
      </div>
      <div className="text-center h-28">footer</div>
    </div>
  );
};
export default creditCard;
