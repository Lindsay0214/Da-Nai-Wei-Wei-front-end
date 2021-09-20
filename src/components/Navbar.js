import { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { AuthContext } from '../contexts';

const NavbarButton = ({ data }) => {
  return (
    <li className="nav-item">
      <a
        className="items-center hidden px-8 text-lg leading-snug tracking-wide text-black py-9 hover:bg-yellow-deepYellow hover:text-white lg:inline-block lg:mt-0"
        href={data.url}
      >
        {data.name}
      </a>
    </li>
  );
};
// eslint-disable-next-line complexity
const Navbar = () => {
  const data1 = { name: '附近店家', url: '#/' };
  const data2 = { name: '所有店家', url: '#/' };
  const data3 = { name: '購物車', url: '#/orders' };
  const data4 = { name: '訂單', url: '#/order' };

  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);
  const [isActive, setActive] = useState(false);

  const handleLogout = () => {
    setUser(null);
    history.push('/');
  };

  return (
    <>
      <nav className="relative flex items-center h-24 py-16 md:py-20 lg:py-0 bg-yellow-lightYellow">
        {/* after:border lg:after:border-none */}
        <div className="container flex items-center content-around justify-around mx-auto lg:justify-between">
          {/* logo */}
          <div className="flex">
            <a
              className="flex w-40 h-20 mr-6 text-4xl leading-relaxed text-black bg-cover bg-logo lg:w-56 lg:h-24"
              href="#/"
            >
              {/* 大奶薇薇 */}
            </a>
          </div>
          {/* mobile */}
          <button
            className="block lg:hidden"
            onClick={() => setActive(!isActive)}
          >
            <FaBars className="absolute top-14 right-10" />
          </button>
          {/* <div
            className={`lg:flex flex-grow items-center
            ${navbarOpen ? ' flex' : ' hidden'}
            }
          > */}
          {/* list */}
          <ul className="flex -ml-16 space-x-8 md:space-x-0">
            <NavbarButton data={data1}></NavbarButton>
            <NavbarButton data={data2}></NavbarButton>
            <NavbarButton data={data3}></NavbarButton>
            <NavbarButton data={data4}></NavbarButton>
          </ul>
          <div className="hidden mx-4 nav-item sm:flex">
            {!user && (
              <a
                className="items-center hidden px-12 text-lg leading-snug tracking-wide text-black lg:inline-block py-9 bg-yellow-default hover:bg-yellow-deepYellow hover:text-white"
                href="#/register"
              >
                註冊
              </a>
            )}
            {!user && (
              <a
                className="items-center hidden px-12 text-lg leading-snug tracking-wide text-black lg:inline-block py-9 bg-yellow-default hover:bg-yellow-deepYellow hover:text-white"
                href="#/login"
              >
                登入
              </a>
            )}
            {user && (
              <a
                className="items-center hidden px-12 text-lg leading-snug tracking-wide text-black lg:inline-block py-9 bg-yellow-default hover:bg-yellow-deepYellow hover:text-white"
                href="#/logout"
                onClick={handleLogout}
              >
                登出
              </a>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
