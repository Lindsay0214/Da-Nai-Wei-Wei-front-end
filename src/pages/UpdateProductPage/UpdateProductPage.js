import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getProduct, updateProduct } from '../../api';

const UpdateProductPage = () => {
  const { id } = useParams();
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStatus, setProductStatus] = useState('');

  const [isUpdated, setIsUpdated] = useState(false);
  const [isWaitingBack, setIsWaitingBack] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      categories: productCategory,
      name: productName,
      price: productPrice,
      status: productStatus
    };
    const result = await updateProduct(id, payload);
    if (result.data.ok === 1) {
      setIsUpdated(true);
      setIsWaitingBack(true);
      setTimeout(() => {
        history.push('/products');
      }, 2000);
    }
  };

  useEffect(async function fetchProductApi() {
    const result = await getProduct(id);
    const { product } = result.data;
    setProductName(product.name);
    setProductCategory(product.categories);
    setProductPrice(product.price);
    setProductStatus(product.status);
  }, []);

  return (
    <div className="bg-yellow-lightYellow">
      <div className="pt-16 pb-16 m-auto mt-16 bg-white rounded-lg md:pt-20 w-80 md:w-3/6">
        <div className="flex items-center justify-center text-2xl font-bold tracking-wider text-gray-deepGray">
          修改商品資料
        </div>
        <form className="flex flex-col items-center justify-center m-auto my-10 w-80">
          <input
            onFocus={() => setIsUpdated(false)}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
            name="name"
            placeholder="商品名稱"
            value={productName}
            className="flex-col p-2 font-light rounded-lg w-60 bg-gray-input md:w-80"
          ></input>
          <input
            name="category"
            placeholder="商品分類"
            onFocus={() => setIsUpdated(false)}
            onChange={(e) => {
              setProductCategory(e.target.value);
            }}
            value={productCategory}
            className="p-2 mt-4 font-light rounded-lg w-60 md:w-80 bg-gray-input"
          ></input>
          <input
            name="price"
            placeholder="商品價錢"
            onFocus={() => setIsUpdated(false)}
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
            value={productPrice}
            className="flex-col p-2 mt-4 font-light rounded-lg w-60 bg-gray-input md:w-80"
          ></input>
          <input
            name="status"
            placeholder="商品狀態"
            onFocus={() => setIsUpdated(false)}
            onChange={(e) => {
              setProductStatus(e.target.value);
            }}
            value={productStatus}
            className="flex-col p-2 mt-4 font-light rounded-lg w-60 bg-gray-input md:w-80"
          ></input>
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
    </div>
  );
};

export default UpdateProductPage;
