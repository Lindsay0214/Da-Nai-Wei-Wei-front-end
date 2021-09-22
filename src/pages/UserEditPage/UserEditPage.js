import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getMyInfo, updateMyInfo, getMe, newNickName } from '../../api';
import InputBar from '../../components/InputBar';

const UserEditPage = () => {
  const [nickname, setNickname] = useState('nickname');
  const history = useHistory();

  useEffect(async () => {
    const result = await getMyInfo();
    // console.log('getResult', result.data.data.nickname);
    setNickname(result.data.data.nickname);
    // setUserInfo(result.data.data);
  }, []);

  const handleInputChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await newNickName(nickname);
    history.push('/user-update');
  };

  const handleChange = async () => {
    const payload = {
      nickname
    };
    const result = await getMyInfo(payload);

    // console.log(result.user_id);
    const user = result.user_id;
    console.log(user);
    return user;
  };

  return (
    <div
      className="flex-col w-auto h-auto mt-40 bg-yellow-lightYellow"
      onSubmit={handleSubmit}
    >
      <div className="flex-col items-center justify-center w-auto ">
        <div className="flex-col w-64 p-2 m-auto bg-white rounded-lg lg:mt-10 lg:w-160 ">
          <div className="flex content-center justify-center mt-10 lg:text-4xl">
            修改暱稱
          </div>
          <div className="flex flex-col mt-10">
            <InputBar data={nickname}></InputBar>
            <InputBar
              data="新暱稱"
              value={nickname}
              onChange={handleInputChange}
            ></InputBar>
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
