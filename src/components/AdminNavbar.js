const CMSHeader = ({ data }) => {
  return (
    <div className="relative flex flex-col lg:flex-row">
      <div className="flex ">
        <a
          className="flex w-40 h-20 mx-auto text-4xl leading-relaxed text-black bg-cover bg-logo lg:w-56 lg:h-24"
          href="/"
        >
          {/* 大奶薇薇 */}
        </a>
      </div>{' '}
      <div className="relative mx-auto mt-10 border-t border-white p-7 lg:absolute lg:invisible lg:mr-0 lg:mb-20 lg:flex lg:flex-row w-80 "></div>
      <div className="m-auto text-lg tracking-wider text-center w-36 lg:w-80 mb-7 lg:text-4xl ">
        {data}
      </div>
      <div className="relative w-20 mx-auto lg:w-auto lg:mx-0">
        <button className="absolute w-20 py-2 text-sm text-white duration-500 ease-in-out rounded-lg lg:ml-10 left-28 bottom-6 hover:hover lg:w-44 lg:text-xl lg:h-24 lg:p-7 lg:rounded-none lg:visible lg:static bg-yellow-deepYellow">
          返回前台
        </button>
      </div>
    </div>
  );
};

export default CMSHeader;
