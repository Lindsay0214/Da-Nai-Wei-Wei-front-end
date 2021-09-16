const SmallButton = ({ data }) => {
  return (
    <span className="inline-block w-16 h-6 py-1 mr-2 text-xs text-center text-white transition duration-500 ease-in-out rounded-md lg:pt-3 bg-yellow-default lg:h-16 lg:text-3xl lg:bg-white lg:text-black lg:rounded-full motion-reduce:transform-none lg:hover:text-black hover:bg-yellow-default hover:text-white lg:w-36">
      {data}
    </span>
  );
};
export default SmallButton;
