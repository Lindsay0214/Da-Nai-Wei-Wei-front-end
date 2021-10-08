/* eslint-disable  */
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  getSingleOrderItem,
  getDetailId,
  updateOrderItemDetail
} from '../../api';
import DetailBoard from '../../components/DetailBoard';

const OrderItemEditPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [data, setData] = useState({
    ice: '',
    order_item_id: 0,
    price: 0,
    productName: '',
    size: '',
    sweetness: '',
    quantity: 0
  });
  useEffect(async () => {
    const result = await getSingleOrderItem(id);
    setData(result.data.data);
  }, []);
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
    setData({ ...data, quantity: data.quantity - 1 });
  };
  const handleSubmit = async () => {
    const payload = {
      ice: data.ice,
      sweetness: data.sweetness,
      size: data.size
    };
    const result = await getDetailId(payload);
    const { detail_id } = result.data;
    const payload2 = {
      id: data.order_item_id,
      detail_id,
      quantity: data.quantity
    };
    await updateOrderItemDetail(payload2);
    history.push('/order');
  };
  return (
    <div className=" bg-yellow-lightYellow">
      <div className="flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center mb-20 ">
          <DetailBoard
            data={data}
            handleChangeSize={handleChangeSize}
            handleChangeSweetness={handleChangeSweetness}
            handleChangeIce={handleChangeIce}
            handlePlus={handlePlus}
            handleMinus={handleMinus}
            handleSubmit={handleSubmit}
          ></DetailBoard>
        </div>
      </div>
    </div>
  );
};

export default OrderItemEditPage;
