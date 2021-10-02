import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';

const AdminNavbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/');
  };
  return (
    <div className="relative flex flex-col lg:flex-row">
      <div className="flex ">
        <Link
          className="flex w-40 h-20 mx-auto text-4xl leading-relaxed text-black bg-cover bg-logo lg:w-56 lg:h-24"
          to="/admin-update"
        >
          {/* 大奶薇薇 */}
        </Link>
      </div>{' '}
      <div className="relative mx-auto mt-10 border-t border-white p-7 lg:absolute lg:invisible lg:mr-0 lg:mb-20 lg:flex lg:flex-row w-80 "></div>
      <div className="m-auto text-lg tracking-wider text-center w-36 lg:absolute mb-7 lg:top-14 lg:left-1/2 lg:text-4xl lg:w-44 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transl">
        後台管理
      </div>
      <div className="relative w-20 mx-auto lg:absolute lg:w-56 lg:right-0 ">
        <Link
          className="items-center hidden px-12 tracking-wide text-leading-snug text-bl lg:inline-block py-9 bg-yellow-default hover:bg-yellow-deepYellow hover:text-white"
          to="/logout"
          onClick={(e) => handleLogout(e)}
        >
          登出
        </Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
