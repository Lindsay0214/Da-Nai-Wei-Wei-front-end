/* eslint-disable jsx-a11y/alt-text */
const ProgressBar = () => {
  return (
    <div className="pb-14 lg:p-20 bg-yellow-lightYellow">
      <ul className="flex justify-around w-full mx-auto">
        <li className="relative w-1/3 text-xs text-center lg:text-base nav-item before:process-active text-brown-default">
          訂購明細
        </li>
        <li className="relative w-1/3 text-xs text-center nav-item lg:text-base before:process-before after:process-after text-brown-default ">
          訂購資訊
        </li>
        <li className="relative w-1/3 text-xs text-center nav-item lg:text-base before:process-before after:process-after text-brown-default">
          訂單完成
        </li>
      </ul>
    </div>
  );
};

export default ProgressBar;
