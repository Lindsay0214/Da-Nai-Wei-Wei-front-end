const EditButton = ({ data }) => {
  return (
    <span className="inline-block m-8 text-xl tracking-widest text-center transition duration-500 ease-in-out bg-white rounded-full motion-reduce:transform-none my-7 w-80 p-7 hover:bg-yellow-default hover:text-white">
      {data}
    </span>
  );
};

export default EditButton;
