import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addProduct } from '../../api';

const AddProductPage = () => {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');
  const [renderIsOk, setRenderIsoK] = useState(false);
  const [isWaitingBack, setIsWaitingBack] = useState(false);
  const history = useHistory();
  const handleAddProductClick = async () => {
    const payload = {
      name,
      categories,
      price,
      status
    };
    const result = await addProduct(payload);
    if (result.data.ok === 1) {
      setRenderIsoK(true);
      setIsWaitingBack(true);
      setTimeout(() => {
        history.push('/products');
      }, 2000);
    }
  };

  return (
    <div className="bg-yellow-lightYellow">
      <div className="flex h-screen">
        <div className="pt-16 pb-16 m-auto mt-16 bg-white rounded-lg md:pt-20 w-80 md:w-3/6">
          <div className="flex items-center justify-center text-2xl font-bold tracking-wider text-gray-deepGray">
            新增商品資料
          </div>
          <form className="flex flex-col items-center justify-center m-auto my-10 w-80">
            <input
              onFocus={(e) => setRenderIsoK(false)}
              onChange={(e) => setName(e.target.value)}
              placeholder="商品名稱"
              className="flex-col p-2 font-light rounded-lg w-60 bg-gray-input md:w-80"
            ></input>
            <input
              onFocus={(e) => setRenderIsoK(false)}
              onChange={(e) => setCategories(e.target.value)}
              placeholder="商品分類"
              className="p-2 mt-4 font-light rounded-lg w-60 md:w-80 bg-gray-input"
            ></input>
            <input
              onFocus={(e) => setRenderIsoK(false)}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="商品價錢"
              className="flex-col p-2 mt-4 font-light rounded-lg w-60 bg-gray-input md:w-80"
            ></input>
            <input
              onFocus={(e) => setRenderIsoK(false)}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="商品狀態"
              className="flex-col p-2 mt-4 font-light rounded-lg w-60 bg-gray-input md:w-80"
            ></input>
            {!renderIsOk && (
              <button
                onClick={handleAddProductClick}
                className="bg-yellow-deepYellow m-2 text-white mt-12 md:px-24 px-16 py-1.5 border border-yellow-deepYellow  rounded-lg hover:hover"
                type="button"
              >
                新增
              </button>
            )}
            {renderIsOk && (
              <button className="bg-black m-2 text-white mt-12 md:px-20 px-16 py-1.5 border border-black  rounded-lg">
                新增成功！
              </button>
            )}
            {isWaitingBack && (
              <div className="flex items-center justify-center text-sm text-gray-400">
                準備跳轉頁面...請稍候
              </div>
            )}
            {!isWaitingBack && (
              <div className="items-center justify-center invisible text-sm text-gray-400">
                準備跳轉頁面...請稍候
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
