import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { getMyInfo, updateMyInfo } from '../../api';
import InputBar from '../../components/InputBar';

const UserEmailPage = () => {
  // const [userInfo, setUserInfo] = useState({});
  const [email, setEmail] = useState('');
  const history = useHistory();

  useEffect(async () => {
    const result = await getMyInfo();
    if (result.data.ok !== 1) {
      console.log('失敗');
    } else {
      console.log('成功');
    }
    console.log('getResult', result.data.data.email);
    setEmail(result.data.data.email);
    // setUserInfo(result.data.data);
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const payload = {
  //     email
  //   };
  //   const result = await updateMyInfo(payload);
  //   history.push('/user-update');
  // };

  const handleOnClick = async () => {
    const payload = {
      email
    };
    const result = await updateMyInfo(payload);
    console.log('updateResult', result);
    history.push('/user-update');
  };

  return (
    <div className="flex-col w-auto h-auto mt-40 bg-yellow-lightYellow">
      <div className="flex-col items-center justify-center w-auto ">
        <div
          className="flex-col w-64 p-2 m-auto bg-white rounded-lg lg:mt-10 lg:w-160 "
          // onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex content-center justify-center mt-10 text-4xl">
            修改信箱
          </div>
          <div className="flex flex-col mt-10">
            <InputBar
              titleData="原信箱"
              data={email}
              disabled="disabled"
            ></InputBar>
            <InputBar
              titleData="新信箱"
              data="新信箱"
              value={email}
              // onChange={(e) => {
              //   handleSetEmail(e.target.value);
              // }}
            ></InputBar>
            <button
              className="px-4 py-1 mx-auto my-6 text-white rounded-md w-28 h-7 lg:h-12 bg-yellow-deepYellow"
              type="submit"
              onClick={handleOnClick}
            >
              發送認證信
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
export default UserEmailPage;
