const EditButton = ({ data }) => {
  return (
    <div className="inline-block py-3 mt-10 text-sm text-center text-white duration-500 ease-in-out border rounded-md border-yellow-deepYellow px-7 lg:mt-14 bg-yellow-deepYellow lg:text-xl lg:tracking-widest lg:rounded-full lg:w-80 motion-reduce:transform-none lg:p-7 hover:hover">
      <a href="#/user-edit">{data}</a>
    </div>
  );
};

export default EditButton;
