const EditButton = ({ data }) => {
  return (
    <span className="inline-block py-3 mt-10 text-sm text-center text-white transition duration-500 ease-in-out rounded-md px-14 lg:mt-14 lg:text-black lg:bg-white bg-yellow-default lg:text-xl lg:tracking-widest lg:rounded-full lg:w-80 motion-reduce:transform-none lg:p-7 hover:bg-yellow-default hover:text-white">
      {data}
    </span>
  );
};

export default EditButton;
