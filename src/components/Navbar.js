import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { selectUser, logout } from '../features/userSlice';
import { init } from '../features/shoppingCartSlice';
import { getOrderItems } from '../api';

import Ham from './Ham';

const NavbarButton = ({ data }) => {
  return (
    <li className="nav-item">
      <Link
        className="items-center hidden text-lg leading-snug tracking-wide text-black transition duration-500 ease-in-out md:px-2 lg:px-8 py-9 hover:bg-yellow-deepYellow hover:text-white lg:inline-block md:mt-0"
        to={data.url}
      >
        {data.name}
      </Link>
    </li>
  );
};
const Navbar = () => {
  const data1 = { name: '附近店家', url: '/' };
  const data3 = { name: '購物車', url: '/order' };
  const data4 = { name: '歷史訂單', url: '/orders' };
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(init(0));
    history.push('/');
  };
  const itemCount = useSelector((state) => state.shoppingCart);
  useEffect(async () => {
    if (user) {
      const result = await getOrderItems();
      dispatch(init(result.data.count));
    }
  }, []);
  return (
    <>
      <nav className="sticky top-0 z-10 flex items-center w-full h-24 md:py-20 lg:py-0 bg-yellow-lightYellow">
        <div className="container flex items-center content-around justify-between mx-auto space-x-5">
          <div className="flex">
            <Link
              className="flex w-40 h-20 mr-6 text-4xl leading-relaxed text-black bg-cover bg-logo lg:w-56 lg:h-24"
              to="/"
            ></Link>
          </div>
          <Ham />
          <ul className="flex -ml-16 space-x-8 md:space-x-0">
            <NavbarButton data={data1}></NavbarButton>
            <NavbarButton data={data3}></NavbarButton>
            <NavbarButton data={data4}></NavbarButton>
          </ul>
          <div className="hidden mx-4 nav-item sm:flex">
            {!user && (
              <Link
                className="items-center hidden px-12 text-lg leading-snug tracking-wide text-black transition duration-500 ease-in-out lg:inline-block py-9 bg-yellow-default hover:bg-yellow-deepYellow hover:text-white"
                to="/register"
              >
                註冊
              </Link>
            )}
            {!user && (
              <Link
                className="items-center hidden px-12 text-lg leading-snug tracking-wide text-black transition duration-500 ease-in-out lg:inline-block py-9 bg-yellow-default hover:bg-yellow-deepYellow hover:text-white"
                to="/login"
              >
                登入
              </Link>
            )}
            {user && (
              <>
                <Link
                  to="/user-update"
                  className="items-center hidden px-12 text-lg leading-snug tracking-wide text-black transition duration-500 ease-in-out lg:inline-block py-9 bg-yellow-default hover:bg-yellow-deepYellow hover:text-white"
                >
                  Hi，{user.nickname}
                </Link>
                <Link
                  className="items-center hidden px-12 text-lg leading-snug tracking-wide text-black transition duration-500 ease-in-out lg:inline-block py-9 bg-yellow-default hover:bg-yellow-deepYellow hover:text-white"
                  to="/logout"
                  onClick={(e) => handleLogout(e)}
                >
                  登出
                </Link>
              </>
            )}
          </div>
        </div>
        {itemCount === 0 ? null : (
          <Link to="/order">
            <div className="fixed flex items-center text-white align-middle duration-500 ease-in-out bg-black rounded-full cursor-pointer w-15 h-15 md:w-20 md:h-20 hover:text-yellow-deepYellow hover:bg-white shadow-3xl md:bg-yellow-deepYellow md:bottom-10 md:right-10 bottom-7 right-9">
              <FaShoppingCart className="relative mx-auto text-4xl"></FaShoppingCart>
              <div className="absolute w-8 h-8 p-1 text-center bg-red-500 rounded-full -right-3 -top-3 md:-right-2 md:-top-2">
                {itemCount}
              </div>
            </div>
          </Link>
        )}
      </nav>
    </>
  );
};

export default Navbar;
