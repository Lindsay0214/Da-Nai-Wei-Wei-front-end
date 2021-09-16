import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center h-24 py-16 md:py-20 lg:py-0 bg-yellow-lightYellow">
        {/* after:border lg:after:border-none */}
        <div className="container flex items-center justify-center mx-auto lg:justify-between">
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
          <div className="sm:hidden">
            <FaBars className="absolute top-14 right-10" />
          </div>
          {/* list */}
          <ul className="hidden -ml-16 space-x-8 md:flex md:space-x-0">
            <li className="nav-item">
              <a
                className="flex items-center px-8 text-lg leading-snug tracking-wide text-black py-9 hover:bg-yellow-deepYellow hover:text-white"
                href="#/register"
              >
                附近店家
              </a>
            </li>

            <li className="nav-item">
              <a
                className="flex items-center px-8 text-lg leading-snug tracking-wide text-black py-9 hover:bg-yellow-deepYellow hover:text-white"
                href="#/menu"
              >
                所有店家
              </a>
            </li>

            <li className="mx-4 nav-item">
              <a
                className="flex items-center text-lg leading-snug tracking-wide text-black px-9 py-9 hover:bg-yellow-deepYellow hover:text-white"
                href="#/orders"
              >
                購物車
              </a>
            </li>

            <li className="mx-4 nav-item">
              <a
                className="flex items-center text-lg leading-snug tracking-wide text-black px-11 py-9 hover:bg-yellow-deepYellow hover:text-white"
                href="#/order"
              >
                訂單
              </a>
            </li>
          </ul>
          <div className="hidden mx-4 nav-item sm:flex">
            {/* <a className="flex items-center px-12 text-lg leading-snug tracking-wide text-black rounded-lg py-9 bg-yellow-default hover:bg-yellow-deepYellow hover:text-white">
      登出
    </a> */}
            <a
              className="items-center block px-12 text-lg leading-snug tracking-wide text-black py-9 bg-yellow-default hover:bg-yellow-deepYellow hover:text-white"
              href="#/login"
            >
              登入
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
