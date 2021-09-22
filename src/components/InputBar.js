const InputBar = ({ titleData, data }) => {
  return (
    <div className="relative mx-auto">
      <span className="absolute inline-flex justify-around invisible text-gray-400 top-12 -left-16 lg:visible ">
        {titleData}
      </span>
      <input
        className="py-1 pl-2 my-5 bg-gray-200 rounded-md lg:ml-3 lg:my-9 w-36 h-7 lg:w-80 lg:h-12"
        type="text"
        placeholder={data}
      />
    </div>
  );
};

export default InputBar;
