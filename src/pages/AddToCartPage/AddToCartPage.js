/* eslint-disable  */
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import DetailBoard from '../../components/DetailBoard';
import {
  getDetailId,
  addOrderItem,
  addShoppingCart,
  getProduct
} from '../../api';

const AddToCartPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(async () => {
    const result = await getProduct(id);
    setData({
      ...result.data.product,
      productName: result.data.product.name,
      quantity: 1,
      size: '',
      sweetness: '',
      ice: ''
    });
  }, []);
  const history = useHistory();
  function handleChangeSize(size) {
    setData(() => {
      return { ...data, size };
    });
  }
  function handleChangeSweetness(sweetness) {
    setData(() => {
      return { ...data, sweetness };
    });
  }
  function handleChangeIce(ice) {
    setData(() => {
      return { ...data, ice };
    });
  }
  const handlePlus = () => {
    setData({ ...data, quantity: data.quantity + 1 });
  };
  const handleMinus = () => {
    if (data.quantity === 1) return;
    setData({ ...data, quantity: data.quantity - 1 });
  };
  async function handleClick() {
    (async function() {
      await addShoppingCart(); // 確保有購物車可以裝商品
    })();
    if (data.quantity <= 0)
      return toast.error('數量不能是 0 或是負數', {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored'
      });

    if (data.size && data.sweetness && data.ice) {
      const result = await getDetailId({
        size: data.size,
        sweetness: data.sweetness,
        ice: data.ice
      });
      const detailId = result.data.detail_id;
      const payload = {
        detail_id: detailId,
        quantity: data.quantity,
        product_id: id
      };
      await addOrderItem(payload);
      history.push('/order');
    } else {
      toast.error('檢查一下，看看大小、糖度或是冰度有地方沒有填寫到', {
        position: toast.POSITION.TOP_CENTER,
        theme: 'colored'
      });
    }
  }
  return (
    <div className="flex items-center justify-center bg-yellow-lightYellow">
      <DetailBoard
        data={data}
        handleChangeSize={handleChangeSize}
        handleChangeSweetness={handleChangeSweetness}
        handleChangeIce={handleChangeIce}
        handlePlus={handlePlus}
        handleMinus={handleMinus}
        handleSubmit={handleClick}
      ></DetailBoard>
    </div>
  );
};

export default AddToCartPage;
