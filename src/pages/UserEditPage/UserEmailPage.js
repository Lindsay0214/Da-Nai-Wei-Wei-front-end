import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { getMyInfo, updateMyInfo } from '../../api';
import InputBar from '../../components/InputBar';

const EditInput = ({ data, shopDetail = '', setInput }) => {
  return (
    <div className="w-56 mx-auto my-1 lg:my-6 lg:w-96">
      <div className="relative invisible text-gray-400 lg:mb-2 left-2 lg:visible">
        {data}
      </div>
      <input
        className="w-full py-1 pl-2 bg-gray-200 rounded-md lg:h-12"
        type="text"
        placeholder={data}
        value={shopDetail}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
};

const UserEmailPage = () => {
  // const [userInfo, setUserInfo] = useState({});
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const history = useHistory();

  useEffect(async () => {
    const result = await getMyInfo(id);
    if (result.data.ok !== 1) {
      // console.log('失敗');
    } else {
      // console.log('成功');
    }
    // console.log('getResult', result.data.data.email);
    setEmail(result.data.data.email);
    // setUserInfo(result.data.data);
  }, []);

  const handleSetEmail = (string) => {
    setEmail(string);
  };

  const handleOnClick = async () => {
    // console.log(123);
    const payload = {
      email
    };
    const result = await updateMyInfo(id, payload);
    // console.log('updateResult', result);
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
            <EditInput
              shopDetail={email}
              data="原信箱"
              setInput={handleSetEmail}
            ></EditInput>
            <InputBar
              titleData="新信箱"
              data="新信箱"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
