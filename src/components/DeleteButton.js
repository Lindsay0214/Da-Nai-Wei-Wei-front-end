const DeleteButton = ({ data }) => {
  return (
    <div className="inline-block py-3 mt-10 ml-2 text-sm text-center text-red-500 duration-500 ease-in-out bg-white border border-red-500 rounded-md px-7 lg:mt-14 lg:text-xl lg:tracking-widest lg:rounded-full lg:w-80 motion-reduce:transform-none lg:p-7 hover:text-white hover:bg-red-500">
      <a href="#/user-edit">{data}</a>
    </div>
  );
};

export default DeleteButton;
