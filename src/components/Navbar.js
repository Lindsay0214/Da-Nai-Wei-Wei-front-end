/* eslint-disable react/button-has-type */
const Navbar = () => {
  return (
    <nav className="flex items-center py-6 bg-yellow-default">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex px-4">
          <a
            className="w-56 py-2 text-4xl leading-relaxed text-black bg-cover h-28 bg-logo"
            href="/"
          >
            {/* 大奶薇薇 */}
          </a>
        </div>
        <ul className="flex -ml-16 space-x-8">
          <li className="nav-item">
            <a
              className="flex items-center px-3 py-2 text-xl leading-snug text-black hover:opacity-75"
              href="/store"
            >
              附近店家
            </a>
          </li>

          <li className="nav-item">
            <a
              className="flex items-center px-3 py-2 text-xl leading-snug text-black hover:opacity-75"
              href="/stores"
            >
              所有店家
            </a>
          </li>

          <li className="mx-4 nav-item">
            <a
              className="flex items-center px-3 py-2 text-xl leading-snug text-black hover:opacity-75"
              href="/cart"
            >
              購物車
            </a>
          </li>

          <li className="mx-4 nav-item">
            <a
              className="flex items-center px-3 py-2 text-xl leading-snug text-black hover:opacity-75"
              href="/order"
            >
              訂單
            </a>
          </li>
        </ul>
        <div className="mx-4 nav-item">
          {/* <button className="flex items-center px-12 py-3 text-lg leading-snug tracking-widest text-white rounded-lg bg-purple-default hover:opacity-75">
            登出
          </button> */}
          <button
            className="flex items-center px-12 py-3 text-lg leading-snug tracking-widest text-white rounded-lg bg-purple-default hover:opacity-75"
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
