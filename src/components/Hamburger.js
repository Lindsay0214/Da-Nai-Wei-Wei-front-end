import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts';

const Hamburger = ({ isOpen, toggle }) => {
  const [isActive, setActive] = useState(false);
  const { role, setRole } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    setRole(null);
    history.push('/');
  };

  return (
    <button
      className="absolute top-0 left-0 flex content-around w-full h-full transition duration-700 ease-in-out zIndex-default bg-yellow-deepYellow"
      isOpen={isOpen}
      onClick={toggle}
    >
      <button className="focus:bg-yellow-deepYellow" onClick={toggle}>
        <FaTimes className="absolute text-4xl text-white top-6 right-10" />
      </button>
      <div className="container flex flex-col items-center content-around h-auto pt-2 mx-auto pb-28">
        {/* logo */}
        <div className="flex mt-2 mb-20 nav-item">
          <Link
            className="h-32 text-4xl leading-relaxed text-black bg-cover w-72 bg-logo"
            to="/"
          >
            {/* 大奶薇薇 */}
          </Link>
        </div>
        {/* button */}
        <div className="mx-4 nav-item ">
          <Link
            className="items-center block py-4 mt-6 text-lg leading-snug tracking-widest text-black bg-white rounded-lg px-28 hover:hover"
            to="/"
            onClick={toggle}
          >
            回首頁
          </Link>
          <Link
            className="items-center block py-4 mt-6 text-lg leading-snug tracking-widest text-black bg-white rounded-lg px-28 hover:hover"
            to="/cart"
            onClick={toggle}
          >
            購物車
          </Link>
          <Link
            className="items-center block py-4 mt-6 text-lg leading-snug tracking-widest text-black bg-white rounded-lg px-28 hover:hover"
            to="/order"
            onClick={toggle}
          >
            訂單
          </Link>
          {!role && (
            <Link
              className="items-center block py-4 mt-6 text-lg leading-snug tracking-widest text-white bg-black rounded-lg px-28 hover:hover"
              to="/login"
            >
              登入
            </Link>
          )}
          {!role && (
            <Link
              className="items-center block py-4 mt-6 text-lg leading-snug tracking-widest text-white bg-black rounded-lg px-28 hover:hover"
              to="/register"
            >
              註冊
            </Link>
          )}
          {role && (
            <Link
              className="items-center block py-4 mt-6 text-lg leading-snug tracking-widest text-white bg-black rounded-lg px-28 hover:hover"
              to="/logout"
              onClick={handleLogout}
            >
              登出
            </Link>
          )}
        </div>
      </div>
    </button>
  );
};

export default Hamburger;
