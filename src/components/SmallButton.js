const SmallButton = ({ data }) => {
  return (
    <span className="inline-block w-16 h-6 py-1 mr-2 text-xs text-center text-white duration-500 ease-in-out rounded-md lg:pt-3 bg-yellow-deepYellow lg:h-16 lg:text-3xl lg:rounded-full motion-reduce:transform-none lg:hover:text-black hover:hover lg:w-36">
      {data}
    </span>
  );
};
export default SmallButton;
