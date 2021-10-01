/* eslint-disable react/jsx-props-no-spreading */
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout } from '../features/userSlice';

export default function Ham() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/');
  };

  return (
    <div className="fixed z-10 w-full text-right top-2">
      <Menu
        as="div"
        className="relative content-around inline-block transition"
      >
        {/* 漢堡按鈕 */}
        <div>
          <Menu.Button className="block lg:hidden">
            <FaBars className="absolute top-9 right-20" aria-hidden="true" />
          </Menu.Button>
        </div>
        {/* 漢堡按鈕 */}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {/* Menu */}
          <Menu.Items className="absolute w-40 origin-top-right rounded-lg top-14 right-24 bg-yellow-deepYellow focus:outline-none">
            <div className="px-2 py-3">
              <Menu.Item>
                <Link
                  className="items-center inline-block px-12 py-2 mt-1 text-base leading-snug tracking-widest text-white rounded-lg bg-yellow-deepYellow hover:hover"
                  to="/"
                >
                  首頁
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  className="items-center inline-block px-12 py-2 mt-2 text-base leading-snug tracking-widest text-white rounded-lg hover:hover"
                  to="/order"
                >
                  購物
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  className="items-center inline-block px-12 py-2 mt-2 text-base leading-snug tracking-widest text-white rounded-lg bg-yellow-deepYellow hover:hover"
                  to="/orders"
                >
                  訂單
                </Link>
              </Menu.Item>
              {!user && (
                <Menu.Item>
                  <Link
                    className="items-center inline-block px-12 py-2 mt-2 text-base leading-snug tracking-widest text-white rounded-lg bg-yellow-deepYellow hover:hover"
                    to="/login"
                  >
                    登入
                  </Link>
                </Menu.Item>
              )}
              {!user && (
                <Menu.Item>
                  <Link
                    className="items-center inline-block px-12 py-2 mt-2 text-base leading-snug tracking-widest text-white rounded-lg bg-yellow-deepYellow hover:hover"
                    to="/register"
                  >
                    註冊
                  </Link>
                </Menu.Item>
              )}
              {user && (
                <Menu.Item>
                  <Link
                    className="items-center inline-block px-12 py-2 mt-2 text-base leading-snug tracking-widest text-white rounded-lg bg-yellow-deepYellow hover:hover"
                    to="/logout"
                    onClick={(e) => handleLogout(e)}
                  >
                    登出
                  </Link>
                </Menu.Item>
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
