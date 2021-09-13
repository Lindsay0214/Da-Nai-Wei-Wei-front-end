const Hamburger = () => {
  return (
    <div className="flex content-around w-full h-screen bg-yellow-hover">
      <div className="container flex flex-col items-center content-around h-auto pt-2 mx-auto pb-28">
        {/* logo */}
        <div className="flex mt-2 mb-20 nav-item">
          <a
            className="h-32 text-4xl leading-relaxed text-black bg-cover w-72 bg-logo"
            href="/"
          >
            {/* 大奶薇薇 */}
          </a>
        </div>
        {/* button */}
        <div className="mx-4 nav-item ">
          <div
            className="items-center block px-32 py-4 mt-6 text-lg leading-snug tracking-widest text-black bg-white rounded-lg hover:hover"
            href="/"
          >
            回首頁
          </div>
          <div
            className="items-center block px-32 py-4 mt-6 text-lg leading-snug tracking-widest text-black bg-white rounded-lg hover:hover"
            href="/cart"
          >
            購物車
          </div>
          <div
            className="items-center block px-32 py-4 mt-6 text-lg leading-snug tracking-widest text-black bg-white rounded-lg hover:hover"
            href="/order"
          >
            訂單
          </div>
          <div
            className="items-center block px-32 py-4 mt-6 text-lg leading-snug tracking-widest text-white bg-black rounded-lg hover:hover"
            href="/login"
          >
            登入
          </div>
          <div
            className="items-center block px-32 py-4 mt-6 text-lg leading-snug tracking-widest text-white bg-black rounded-lg hover:hover"
            href="/register"
          >
            註冊
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
