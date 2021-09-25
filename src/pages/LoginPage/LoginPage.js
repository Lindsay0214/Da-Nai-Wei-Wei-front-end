import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setLogin } from '../../features/userSlice';
import { setLoading } from '../../features/loadingSlice';
import { login } from '../../api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password
    };
    try {
      const result = await login(payload);
      if (result.data.role === 'consumer') {
        dispatch(
          setLogin({
            email,
            role: 'consumer'
          })
        );
        history.push('/');
      } else if (result.data.role === 'admin') {
        dispatch(
          setLogin({
            email,
            role: 'admin'
          })
        );
        history.push('/admin-update');
      } else if (result.data.role === 'shop') {
        dispatch(
          setLogin({
            email,
            role: 'shop'
          })
        );
        history.push('/products');
      }
      toast.success('登入成功', {
        position: toast.POSITION.TOP_CENTER
      });
    } catch (err) {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="bg-yellow-lightYellow">
      <form className="flex h-screen" onSubmit={(e) => handleSubmit(e)}>
        <div className="pt-16 m-auto bg-white rounded-lg md:pt-20 w-80 md:w-3/6 mb-36 h-4/6">
          <div className="flex items-center justify-center text-2xl font-bold tracking-wider text-gray-deepGray">
            登入訂飲料囉！
          </div>
          <div className="flex flex-col items-center justify-center m-auto my-10 w-80">
            <input
              placeholder="電子信箱"
              className="flex-col p-2 font-light rounded-lg w-60 bg-gray-input md:w-80"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              placeholder="密碼"
              className="p-2 mt-4 font-light rounded-lg w-60 md:w-80 bg-gray-input"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <div className="flex m-12">
              <button
                className="bg-yellow-deepYellow m-2 text-white  md:px-4 px-4 py-1.5 border border-yellow-deepYellow rounded-lg hover:hover"
                type="submit"
              >
                登入
              </button>
              <Link
                className=" m-2 border border-gray-200 text-gray-500 md:px-4 px-2 py-1.5 rounded-lg bg-gray-200 hover:hover"
                type="button"
                to="/register"
              >
                還沒註冊？
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
