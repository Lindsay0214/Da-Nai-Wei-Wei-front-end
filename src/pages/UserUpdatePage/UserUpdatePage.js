import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getMyInfo } from '../../api';
import EditButton from '../../components/EditButton';
import TitleArea from '../../components/TitleArea';

const UserUpdatePage = () => {
  const [nickname, setNickname] = useState('nickname');
  const [password, setPassword] = useState('password');
  const [creditCard, setCreditCard] = useState('creditCard');

  const handleClick = async () => {
    const payload = {
      nickname,
      password,
      creditCard
    };
    const result = await getMyInfo(payload);
    // console.log(result);
  };
  const handleUpload = async () => {
    const payload = {
      nickname,
      password,
      creditCard
    };
    const result = await getMyInfo(payload);
    // console.log(result);
  };
  return (
    <div className="flex-col h-screen bg-yellow-lightYellow">
      <div className="flex-col w-64 p-2 m-auto bg-white rounded-md lg:bg-yellow-lightYellow lg:w-176 ">
        <TitleArea data="修改資料"></TitleArea>
        <div className="flex flex-wrap w-48 pb-10 m-auto justify-evenly lg:w-176">
          <Link to="/user-edit">
            <EditButton data="修改姓名" onClick={handleClick}></EditButton>
          </Link>
          <Link to="/user-edit-password">
            <EditButton data="修改密碼" onClick={handleClick}></EditButton>
          </Link>
          <Link to="/user-edit-email">
            <EditButton data="修改信箱" onClick={handleClick}></EditButton>
          </Link>
          <Link to="/user-edit-creditcard">
            <EditButton data="修改信用卡" onClick={handleClick}></EditButton>
          </Link>
          <Link to="/user-upload-image">
            <EditButton data="上傳圖片" onClick={handleUpload}></EditButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UserUpdatePage;
