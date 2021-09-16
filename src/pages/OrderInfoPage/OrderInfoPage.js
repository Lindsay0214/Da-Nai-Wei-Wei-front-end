/* eslint-disable jsx-a11y/anchor-is-valid */
const OrderInfoPage = () => {
  return (
    <div className=" bg-yellow-lightYellow">
      <div className="flex justify-center py-10 text-5xl font-black tracking-wide">
        訂單狀態
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center mb-20 ">
          <div className="flex">
            <div className="bg-white rounded">
              <div className="pb-2 m-4 mt-8 text-xl border-b border-black sm:mx-2 md:mx-12 w-80">
                <div className="flex items-center justify-center ">珍煮丹</div>
                <div className="flex items-center justify-center ">
                  台北南京店
                </div>
              </div>
              <div className="flex mt-8 mb-40 ml-6 space-x-6 text-xs font-semibold md:ml-14 md:space-x-12">
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <div>訂單建立</div>
                    <div>2020-10-10 10:10</div>
                  </div>
                  <div className="flex flex-col mt-8">
                    <div>聯絡電話</div>
                    <div>0912345678</div>
                  </div>
                  <div className="flex flex-col mt-8">
                    <div>取餐時間</div>
                    <div>10 分鐘</div>
                  </div>
                  <div className="flex flex-col mt-8">
                    <div>取餐人</div>
                    <div>小明</div>
                  </div>
                </div>
                <div className="flex flex-col sm:ml-4 md:ml-16">
                  <div>鮮奶紅茶</div>
                  <div>大杯 / 熱 / 標準甜 / $55 / 1 份</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-56 md:ml-72">
            <a
              className="bg-yellow-deepYellow m-2 text-white  md:px-4 px-4 py-1.5 rounded-lg hover:hover"
              type="button"
              href="#/"
            >
              回首頁
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfoPage;
