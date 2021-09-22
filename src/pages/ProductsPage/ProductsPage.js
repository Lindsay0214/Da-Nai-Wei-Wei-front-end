import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, deleteProduct } from '../../api';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const handleDeleteProductClick = async (id) => {
    const result = await deleteProduct(id);
    getProducts().then((allProducts) => {
      setProducts(allProducts.data.products);
    });
  };

  useEffect(() => {
    getProducts().then((allProducts) => {
      setProducts(allProducts.data.products);
    });
  }, []);

  return (
    <div className="bg-yellow-lightYellow">
      <div className="flex items-center justify-center mt-20 mb-12 text-2xl font-bold tracking-wider text-gray-deepGray">
        店家後台管理
      </div>
      <div className="mx-12 bg-white rounded-lg md:w-2/5 md:pl-12 md:mx-auto">
        <div className="flex justify-center pt-8 md:mr-12">
          <Link to="/product">
            <button className="px-6 py-1 text-white border rounded-lg bg-yellow-deepYellow border-yellow-deepYellow hover:hover">
              新增商品
            </button>
          </Link>
        </div>

        <ul className="px-8 py-8 no-underline ">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex items-center justify-between px-2 py-1 mb-2 rounded hover:bg-gray-100"
            >
              <span className="">{product.name}</span>
              <div className="">
                <Link to={`/products/${product.id}`}>
                  <button className="px-6 py-1 text-white border rounded-lg bg-yellow-deepYellow border-yellow-deepYellow hover:hover">
                    修改
                  </button>
                </Link>

                <button
                  onClick={() => handleDeleteProductClick(product.id)}
                  className="px-6 py-1 ml-2 text-red-500 border border-red-500 rounded-lg hover:text-white hover:bg-red-500"
                >
                  刪除
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsPage;
