import { useState } from 'react';
import { getMyInfo, updateMyInfo } from '../../api';
import InputBar from '../../components/InputBar';

const UserCreditCardPage = () => {
  const [creditCard, setCreditCard] = useState('creditCard');

  const handleChange = async () => {
    const payload = {
      creditCard
    };
    const result = await getMyInfo(payload);
    console.log(result);
  };
  return (
    <div className="flex-col w-auto h-auto mt-40 bg-yellow-lightYellow">
      <div className="flex-col items-center justify-center w-auto ">
        <div className="flex-col w-64 p-2 m-auto bg-white rounded-lg lg:mt-10 lg:w-160 ">
          <div className="flex content-center justify-center mt-10 text-4xl">
            修改信用卡
          </div>
          <div className="flex flex-col mt-10">
            <InputBar data="原信用卡"></InputBar>
            <InputBar data="重新綁定"></InputBar>
            <button
              className="px-4 py-1 mx-auto my-6 text-white rounded-md w-28 h-7 lg:h-12 bg-yellow-deepYellow"
              onChange={handleChange}
            >
              確認綁定
            </button>
            {/* <button className="w-24 px-4 py-2 mx-auto my-6 text-xs tracking-wider text-white bg-black rounded-md lg:w-24 lg:h-12 ">
              儲存成功!
            </button>
            <div className="mx-auto text-sm text-gray-font">
              請稍等，將會自行跳轉
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCreditCardPage;
