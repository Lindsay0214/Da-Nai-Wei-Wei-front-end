import { useState } from 'react';
import { register, login } from '../../api';

const RegisterPage = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async () => {
    const payload = {
      // nickname,
      email,
      password
    };
    const result = await login(payload);
    console.log(result);
  };
  return (
    <div className="bg-yellow-lightYellow">
      <div className="flex h-screen">
        <div className="pt-16 m-auto mt-8 bg-white rounded-lg pb-96 md:pt-20 w-80 md:w-3/6 mb-36 h-4/6">
          <div className="flex items-center justify-center text-2xl font-bold tracking-wider text-gray-deepGray">
            註冊訂飲料囉！
          </div>
          <div className="flex flex-col items-center justify-center m-auto my-10 w-80">
            <input
              placeholder="真實姓名"
              className="flex-col p-2 font-light rounded-lg w-60 bg-gray-input md:w-80"
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            ></input>
            <input
              placeholder="電子信箱"
              className="p-2 mt-4 font-light rounded-lg w-60 md:w-80 bg-gray-input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              placeholder="密碼"
              className="flex-col p-2 mt-4 font-light rounded-lg w-60 bg-gray-input md:w-80"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <input
              placeholder="密碼確認"
              className="flex-col p-2 mt-4 font-light rounded-lg w-60 bg-gray-input md:w-80"
            ></input>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-yellow-deepYellow m-2 text-white  md:px-4 px-4 py-1.5 rounded-lg hover:hover"
              type="button"
              onClick={handleClick}
            >
              登入
            </button>
            <button
              className=" m-2 text-black border-2 border-black md:px-4 px-2 py-1.5 rounded-lg hover:hover"
              type="button"
            >
              忘記密碼
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
