import { FaRegFlushed } from 'react-icons/fa';

const ErrorMessage = () => {
  return (
    <div className="flex items-center justify-between p-4 py-6 border-l-4 rounded shadow-lg border-yellow-deepYellow bg-grey-lightest">
      <FaRegFlushed className="text-5xl text-yellow-deepYellow"></FaRegFlushed>
      <div className="pl-5 mb-3 text-center sm:text-left sm:mb-0 w-60">
        <p className="mb-1 text-lg font-bold">Error</p>
        <p className="inline-block text-grey-dark">有錯，檢查一下。</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
