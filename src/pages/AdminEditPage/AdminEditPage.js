import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getShop, updateShop } from '../../api';

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

const AdminEditPage = () => {
  const [shopInfo, setShopInfo] = useState({});
  const [brandName, setBrandName] = useState('');
  const [address, setAddress] = useState('');
  const { id } = useParams();
  const history = useHistory();
  useEffect(async () => {
    const result = await getShop(id);
    const { user } = result.data;
    setBrandName(user.brand_name);
    setAddress(user.address);
    setShopInfo(user);
  }, []);
  const handleSetBrandName = (string) => {
    setBrandName(string);
  };
  const handleSetAddress = (string) => {
    setAddress(string);
  };
  const handleOnClick = async () => {
    const payload = {
      brand_name: brandName,
      address
    };
    await updateShop(id, payload);
    history.push('/admin-update');
  };
  return (
    <div className="flex-col w-auto h-auto bg-yellow-lightYellow">
      <div className="flex-col items-center justify-center w-auto">
        <div className="flex-col p-2 m-auto bg-white rounded-md w-80 lg:w-160 ">
          <div className="mt-4 text-center lg:text-4xl">
            {shopInfo.brand_name}
          </div>
          <div className="text-center lg:text-4xl">{shopInfo.nickname}</div>
          <div className="w-48 mx-auto my-6 border-b border-gray-default lg:invisible"></div>
          <div className="flex flex-col mt-4 ">
            <EditInput
              shopDetail={brandName}
              data="店家名稱"
              setInput={handleSetBrandName}
            ></EditInput>
            <EditInput data="營業時間" shopDetail="10:00~20:00"></EditInput>
            <EditInput
              shopDetail={address}
              data="店家地址"
              setInput={handleSetAddress}
            ></EditInput>
            <div className="w-56 mx-auto my-6 lg:w-96">
              <button
                className="w-full py-1 text-white duration-500 ease-in-out border rounded-md hover:hover lg:h-12 bg-yellow-deepYellow"
                onClick={handleOnClick}
              >
                送出
              </button>
            </div>
            <div className="mb-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminEditPage;
