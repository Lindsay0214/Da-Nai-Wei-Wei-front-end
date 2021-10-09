import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getMyInfo, updateMyInfo } from '../../api';
import SubFooter from '../../components/SubFooter';

const UserUpdatePage = () => {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newCard, setNewCard] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);
  const [isWaitingBack, setIsWaitingBack] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      nickname: newName,
      email: newEmail,
      creditCard: newCard,
      address: newAddress
    };
    const result = await updateMyInfo(payload);
    if (result.data.ok === 1) {
      setIsUpdated(true);
      setIsWaitingBack(true);
      setTimeout(() => {
        history.push('/');
      }, 2000);
    }
  };

  useEffect(async () => {
    const result = await getMyInfo();
    const { nickname, email, creditCard, address } = result.data.data;
    setNewName(nickname);
    setNewEmail(email);
    setNewCard(creditCard);
    setNewAddress(address);
  }, []);

  return (
    <div className="bg-yellow-lightYellow">
      <div className="pt-16 pb-16 m-auto mt-16 bg-white rounded-lg md:pt-20 w-80 md:w-3/6">
        <div className="flex items-center justify-center text-2xl font-bold tracking-wider text-gray-deepGray">
          修改會員資料
        </div>
        <form className="flex flex-col items-center justify-center m-auto my-10 w-80">
          <label>
            <p className="pl-3 text-sm text-gray-500">
              姓名<span className="text-xl text-red-500">*</span>
            </p>
            <input
              onFocus={() => setIsUpdated(false)}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
              name="nickname"
              placeholder="欲修改名字"
              value={newName}
              className="flex-col p-2 m-2 font-light rounded-lg w-60 bg-gray-input md:w-80"
            ></input>
          </label>
          <label>
            <p className="pl-3 text-sm text-gray-500">
              信箱<span className="text-xl text-red-500">*</span>
            </p>
            <input
              onFocus={() => setIsUpdated(false)}
              onChange={(e) => {
                setNewEmail(e.target.value);
              }}
              name="email"
              placeholder="欲修改信箱"
              value={newEmail}
              className="flex-col p-2 m-2 font-light rounded-lg w-60 bg-gray-input md:w-80"
            ></input>
          </label>
          <label>
            <p className="pl-3 text-sm text-gray-500">
              信用卡<span className="text-xl text-red-500">*</span>
            </p>
            <input
              onFocus={() => setIsUpdated(false)}
              onChange={(e) => {
                setNewCard(e.target.value);
              }}
              name="creditCard"
              placeholder="ex. 1234-1234-1234-1234"
              value={newCard}
              className="flex-col p-2 m-2 font-light rounded-lg w-60 bg-gray-input md:w-80"
            ></input>
          </label>
          <label>
            <p className="pl-3 text-sm text-gray-500">
              地址<span className="text-xl text-red-500">*</span>
            </p>
            <input
              onFocus={() => setIsUpdated(false)}
              onChange={(e) => {
                setNewAddress(e.target.value);
              }}
              name="address"
              placeholder="ex. 台北市內湖區xxxxxx"
              value={newAddress}
              className="flex-col p-2 m-2 font-light rounded-lg w-60 bg-gray-input md:w-80"
            ></input>
          </label>
          {!isUpdated && (
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-yellow-deepYellow  text-white mt-12 md:px-24 px-16 py-1.5 border border-yellow-deepYellow  rounded-lg hover:hover"
            >
              修改
            </button>
          )}
          {isUpdated && (
            <button
              onClick={handleSubmit}
              className="bg-black text-white mt-12 md:px-20 px-16 py-1.5 border border-black rounded-lg"
            >
              修改成功！
            </button>
          )}
          {!isWaitingBack && (
            <div className="items-center justify-center invisible text-sm text-gray-400">
              準備跳轉頁面...請稍候
            </div>
          )}
          {isWaitingBack && (
            <div className="flex items-center justify-center text-sm text-gray-400">
              準備跳轉頁面...請稍候
            </div>
          )}
        </form>
      </div>
      <SubFooter />
    </div>
  );
};

export default UserUpdatePage;
