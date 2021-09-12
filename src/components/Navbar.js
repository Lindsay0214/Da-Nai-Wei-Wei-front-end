/* eslint-disable react/button-has-type */
const Navbar = () => {
  return (
    <nav className="flex items-center h-24 bg-yellow-default">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex">
          <a
            className="w-56 h-24 text-4xl leading-relaxed text-black bg-cover bg-logo"
            href="/"
          >
            {/* 大奶薇薇 */}
          </a>
        </div>
        <ul className="flex -ml-16 space-x-8">
          <li className="nav-item">
            <a
              className="flex items-center px-8 text-lg leading-snug text-black py-9 hover:bg-yellow-hover hover:text-white"
              href="/store"
            >
              附近店家
            </a>
          </li>

          <li className="nav-item">
            <a
              className="flex items-center px-8 text-lg leading-snug text-black py-9 hover:bg-yellow-hover hover:text-white"
              href="/stores"
            >
              所有店家
            </a>
          </li>

          <li className="mx-4 nav-item">
            <a
              className="flex items-center text-lg leading-snug text-black px-9 py-9 hover:bg-yellow-hover hover:text-white"
              href="/cart"
            >
              購物車
            </a>
          </li>

          <li className="mx-4 nav-item">
            <a
              className="flex items-center text-lg leading-snug text-black px-11 py-9 hover:bg-yellow-hover hover:text-white"
              href="/order"
            >
              訂單
            </a>
          </li>
        </ul>
        <div className="mx-4 nav-item">
          {/* <button className="flex items-center px-12 text-lg leading-snug tracking-widest text-black rounded-lg py-9 bg-yellow-default hover:bg-yellow-hover hover:text-white">
            登出
          </button> */}
          <button
            className="items-center block px-12 text-lg leading-snug tracking-widest text-black py-9 bg-yellow-default hover:bg-yellow-hover hover:text-white"
            href="/login"
          >
            登入
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
