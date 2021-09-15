import img from '../../../public/image/50lanlogotupian-38861279_3.jpg';

const HomePage = () => {
  return (
    <>
      <div>header</div>
      <div className="flex items-center w-3/4 mx-auto rounded-full h-14 md: bg-yellow-default lg:rounded-lg lg:h-36">
        <div className="flex justify-around w-64 mx-auto h-7 lg:w-full lg:h-14">
          <input
            placeholder="找品牌..."
            className="w-1/4 text-xs text-center rounded-full lg:rounded-md md:text-lg"
          ></input>
          <input
            placeholder="找種類..."
            className="w-1/4 text-xs text-center rounded-full lg:rounded-md md:text-lg"
          ></input>
          <input
            placeholder="找評價..."
            className="w-1/4 text-xs text-center rounded-full lg:rounded-md md:text-lg"
          ></input>
        </div>
      </div>
      <div className="flex flex-col w-3/4 mx-auto my-4 lg:flex-wrap lg:flex lg:flex-row lg:justify-between">
        <div className="pb-3 my-4 border-b-2 border-gray-300 lg:w-96 lg:border-0">
          <div className="mb-2 overflow-hidden rounded-xl">
            <img className="w-full" src={img} alt="123"></img>
          </div>
          <span className="text-xl font-black">珍煮丹 台北南京店</span>
          <div className="flex">
            <div className="w-auto h-auto bg-white rounded-full">
              {' '}
              10:00~18:00{' '}
            </div>
            <div className="w-auto h-auto ml-4 bg-white rounded-full">
              7公尺
            </div>
            <div className="w-auto h-auto ml-4 bg-white rounded-full">5.0</div>
          </div>
          <p>台北市松山區南京東路四段108號</p>
        </div>
        <div className="pb-3 my-4 border-b-2 border-yellow-default lg:w-96 lg:border-0">
          <div className="mb-2">
            <img
              className="w-full overflow-hidden rounded-xl"
              src={img}
              alt="123"
            ></img>
          </div>
          <span className="text-xl font-black">珍煮丹 台北南京店</span>
          <div className="flex">
            <div className="w-auto h-auto bg-white rounded-full">
              {' '}
              10:00~18:00{' '}
            </div>
            <div className="w-auto h-auto ml-4 bg-white rounded-full">
              7公尺
            </div>
            <div className="w-auto h-auto ml-4 bg-white rounded-full">5.0</div>
          </div>
          <p>台北市松山區南京東路四段108號</p>
        </div>
        <div className="pb-3 my-4 border-b-2 border-yellow-default lg:w-96 lg:border-0">
          <div className="mb-2">
            <img
              className="w-full overflow-hidden rounded-xl"
              src={img}
              alt="123"
            ></img>
          </div>
          <span className="text-xl font-black">珍煮丹 台北南京店</span>
          <div className="flex">
            <div className="w-auto h-auto bg-white rounded-full">
              {' '}
              10:00~18:00{' '}
            </div>
            <div className="w-auto h-auto ml-4 bg-white rounded-full">
              7公尺
            </div>
            <div className="w-auto h-auto ml-4 bg-white rounded-full">5.0</div>
          </div>
          <p>台北市松山區南京東路四段108號</p>
        </div>
        <div className="pb-3 my-4 border-b-2 border-yellow-default lg:w-96 lg:border-0">
          <div className="mb-2">
            <img
              className="w-full overflow-hidden rounded-xl"
              src={img}
              alt="123"
            ></img>
          </div>
          <span className="text-xl font-black ">珍煮丹 台北南京店</span>
          <div className="flex">
            <div className="w-auto h-auto bg-white rounded-full">
              {' '}
              10:00~18:00{' '}
            </div>
            <div className="w-auto h-auto ml-4 bg-white rounded-full">
              7公尺
            </div>
            <div className="w-auto h-auto ml-4 bg-white rounded-full">5.0</div>
          </div>
          <p>台北市松山區南京東路四段108號</p>
        </div>
        <div className="pb-3 my-4 border-b-2 border-yellow-default lg:w-96 lg:border-0">
          <div className="mb-2">
            <img
              className="w-full overflow-hidden rounded-xl"
              src={img}
              alt="123"
            ></img>
          </div>
          <span className="text-xl font-black">珍煮丹 台北南京店</span>
          <div className="flex">
            <div className="w-auto h-auto bg-white rounded-full">
              {' '}
              10:00~18:00{' '}
            </div>
            <div className="w-auto h-auto ml-4 bg-white rounded-full">
              7公尺
            </div>
            <div className="w-auto h-auto ml-4 bg-white rounded-full">5.0</div>
          </div>
          <p>台北市松山區南京東路四段108號</p>
        </div>
        <div className="pb-3 my-4 border-b-2 border-yellow-default lg:w-96 lg:border-0">
          <div className="mb-2">
            <img
              className="w-full overflow-hidden rounded-xl"
              src={img}
              alt="123"
            ></img>
          </div>
          <span className="text-xl font-black">珍煮丹 台北南京店</span>
          <div className="flex">
            <div className="w-auto h-auto bg-white rounded-full">
              {' '}
              10:00~18:00{' '}
            </div>
            <div className="w-auto h-auto ml-4 bg-white rounded-full">
              7公尺
            </div>
            <div className="w-auto h-auto ml-4 bg-white rounded-full">5.0</div>
          </div>
          <p>台北市松山區南京東路四段108號</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
