import { FaBars } from 'react-icons/fa';

const NavbarButton = ({ data }) => {
  return (
    <li className="nav-item">
      <a
        className="flex items-center px-8 text-lg leading-snug tracking-wide text-black py-9 hover:bg-yellow-deepYellow hover:text-white"
        href={data.url}
      >
        {data.name}
      </a>
    </li>
  );
};
const Navbar = () => {
  const data1 = { name: '附近店家', url: '#/' };
  const data2 = { name: '所有店家', url: '#/' };
  const data3 = { name: '購物車', url: '#/orders' };
  const data4 = { name: '訂單', url: '#/order' };

  return (
    <>
      <nav className="flex items-center h-24 py-16 md:py-20 lg:py-0 bg-yellow-lightYellow">
        {/* after:border lg:after:border-none */}
        <div className="container flex items-center justify-center mx-auto md: lg:justify-between">
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
            <NavbarButton data={data1}></NavbarButton>
            <NavbarButton data={data2}></NavbarButton>
            <NavbarButton data={data3}></NavbarButton>
            <NavbarButton data={data4}></NavbarButton>
          </ul>
          <div className="hidden mx-4 nav-item sm:flex">
            <a
              className="items-center block px-12 text-lg leading-snug tracking-wide text-black py-9 bg-yellow-default hover:bg-yellow-deepYellow hover:text-white"
              href="#/login"
            >
              登出
            </a>
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
