import { useState } from 'react';
import { getMyInfo, updateMyInfo } from '../../api';

const InputBar = ({ data }) => {
  return (
    <div className="relative mx-auto">
      <span className="absolute inline-flex invisible text-gray-400 top-12 -left-16 lg:visible ">
        {data}
      </span>
      <input
        className="py-1 pl-2 my-5 bg-gray-200 rounded-md lg:my-9 w-36 h-7 lg:w-80 lg:h-12"
        type="text"
        placeholder={data}
      />
    </div>
  );
};

const UserEditPage = () => {
  const [nickname, setNickname] = useState('nickname');
  const [password, setPassword] = useState('password');
  const [creditCard, setCreditCard] = useState('creditCard');

  const handleChange = async () => {
    const payload = {
      nickname,
      password,
      creditCard
    };
    const result = await getMyInfo(payload);
  };
  return (
    <div className="flex-col w-auto h-auto bg-yellow-lightYellow">
      <div className="flex-col items-center justify-center w-auto ">
        <div className="flex-col w-64 p-2 m-auto bg-white rounded-md lg:mt-10 lg:w-160 ">
          <div className="flex flex-col mt-4 ">
            <InputBar data="暱稱"></InputBar>
            <InputBar data="信用卡"></InputBar>
            <InputBar data="密碼"></InputBar>
            <button
              className="w-16 px-4 py-1 mx-auto my-6 text-white rounded-md h-7 lg:h-12 bg-yellow-deepYellow"
              onChange={handleChange}
            >
              修改
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
export default UserEditPage;
