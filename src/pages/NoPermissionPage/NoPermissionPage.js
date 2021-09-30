import { Link } from 'react-router-dom';

const NoPermissionPage = () => {
  return (
    <div className="flex items-center justify-center h-full bg-yellow-lightYellow">
      <div className="px-16 py-8 mt-10 bg-white rounded w-80 lg:mt-36">
        <div className="flex items-center justify-center text-xl">
          趕緊登入下單！
        </div>
        <div className="mt-8">
          <Link
            className="bg-yellow-deepYellow m-2 text-white  md:px-20 px-14 py-1.5 rounded-lg hover:hover"
            type="button"
            to="/login"
          >
            登入
          </Link>
          <Link
            className="bg-yellow-deepYellow m-2 text-white  md:px-20 px-14 py-1.5 rounded-lg hover:hover"
            type="button"
            to="/register"
          >
            註冊
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoPermissionPage;
