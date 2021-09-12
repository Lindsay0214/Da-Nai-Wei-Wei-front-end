/* eslint-disable jsx-a11y/alt-text */
const ProgressBar = () => {
  return (
    <div className="p-20 bg-yellow-default">
      <ul className="flex justify-between w-full mx-auto">
        <li className="relative w-1/3 text-center nav-item before:process-active">
          訂購明細
        </li>
        <li className="relative w-1/3 text-center nav-item before:process-before after:process-after">
          訂購資訊
        </li>
        <li className="relative w-1/3 text-center nav-item before:process-before after:process-after">
          訂單完成
        </li>
      </ul>
    </div>
  );
};

export default ProgressBar;
