const ErrorMessage = ({ data }) => {
  return (
    <div className="inline-block py-3 mt-10 text-sm text-center text-red">
      <span>{data}</span>
    </div>
  );
};

export default ErrorMessage;
