import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllShop, deleteShop } from '../../api';

const AdminUpdatePage = () => {
  console.log(132);
  const [shops, setShops] = useState([]);

  useEffect(async () => {
    let result = await getAllShop();
    result = result.data.users.map((shop) => {
      return { ...shop, isEdit: false };
    });
    setShops([...result]);
  }, []);

  const Store = ({ brandName, nickName, id }) => {
    const handleOnClick = () => {
      setShops(
        shops.map((shop) => {
          if (shop.id !== id) return shop;
          return {
            ...shop,
            isEdit: true
          };
        })
      );
    };
    return (
      <div
        className="flex w-64 h-48 mb-10 bg-gray-default rounded-3xl"
        onClick={handleOnClick}
        role="button"
        tabIndex={0}
        aria-hidden="true"
      >
        <div className="flex flex-col m-auto space-y-10 ">
          <span className="inline-block mx-auto text-4xl my- h-ew">
            {brandName}
          </span>
          <span className="inline-block mx-auto text-4xl h-ew">{nickName}</span>
        </div>
      </div>
    );
  };

  const StoreClicked = ({ id }) => {
    const handleOnClick = () => {
      setShops(
        shops.map((shop) => {
          if (shop.id !== id) return shop;
          return {
            ...shop,
            isEdit: false
          };
        })
      );
    };

    const handleDelete = async () => {
      await deleteShop(id);
      await setShops(shops.filter((shop) => shop.id !== id));
    };

    return (
      <div
        className="flex w-64 h-48 mb-10 bg-gray-600 rounded-3xl"
        role="button"
        onClick={handleOnClick}
        tabIndex={0}
        aria-hidden="true"
      >
        <div className="flex flex-col m-auto space-y-5 ">
          <Link to={`/admin-edit/${id}`}>
            <button className="px-12 py-2 text-xl tracking-wide text-white rounded-lg bg-yellow-deepYellow">
              修改
            </button>
          </Link>
          <button
            className="px-12 py-2 text-xl tracking-wide text-red-500 bg-white rounded-lg"
            onClick={handleDelete}
          >
            刪除
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-col w-auto h-auto bg-yellow-lightYellow">
      <div className="flex-col items-center justify-center w-auto ">
        <div className="mx-auto mt-10 lg:mt-20 w-min md:w-160 lg:w-270">
          <div className="flex flex-wrap h-auto m-auto md:space-x-12 lg:space-x-12 bg-yellow-light">
            <div></div>
            {shops.map((shop) => {
              return shop.is_deleted || shop.isEdit ? (
                <StoreClicked key={shop.id} id={shop.id} />
              ) : (
                <Store
                  brandName={shop.brand_name}
                  nickName={shop.nickname}
                  key={shop.id}
                  id={shop.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminUpdatePage;
