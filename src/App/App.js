/* eslint-disable complexity */
import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from '../components/ScrollToTop';
import { selectUser, getMe } from '../features/userSlice';
import { selectLoading } from '../features/loadingSlice';

import AdminUpdatePage from '../pages/AdminUpdatePage';
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';
import LoginPage from '../pages/LoginPage';
import OrderPage from '../pages/OrderPage';
import OrderPayPage from '../pages/OrderPayPage';
import RegisterPage from '../pages/RegisterPage';
import AdminEditPage from '../pages/AdminEditPage';
import OrderInfoPage from '../pages/OrderInfoPage';
import OrderItemEditPage from '../pages/OrderItemEditPage';
import AddToCartPage from '../pages/AddToCartPage';
import OrderCheckPage from '../pages/OrderCheckPage';
import OrdersPage from '../pages/OrdersPage';
import NoPermissionPage from '../pages/NoPermissionPage';
import CreditCardStartPage from '../pages/CreditCardStartPage';
import CreditCardDeletePage from '../pages/CreditCardDeletePage';
import CreditCardUpdatePage from '../pages/CreditCardUpdatePage';
import UserUpdatePage from '../pages/UserUpdatePage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import ProductsPage from '../pages/ProductsPage';
import UpdateProductPage from '../pages/UpdateProductPage';
import AddProductPage from '../pages/AddProductPage';
import UserPasswordPage from '../pages/UserEditPage/UserPasswordPage';
import UserEmailPage from '../pages/UserEditPage/UserEmailPage';
import UserCreditCardPage from '../pages/UserEditPage/UserCreditCardPage';
import UserUploadImage from '../pages/UserUploadImagePage';

import AdminNavbar from '../components/AdminNavbar';

function App() {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    // 應該要有 cookie 才做
    if (document.cookie) {
      dispatch(getMe());
    }
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <Router>
        <ToastContainer autoClose={2000} />
        <ScrollToTop />
        <>
          {user.role === 'admin' ? <AdminNavbar /> : <Navbar />}
          {/* <Hamburger /> */}
          <Switch>
            {user.role === 'admin' && (
              <Route path="/admin-update" component={AdminUpdatePage} />
            )}
            {user.role === 'admin' && (
              <Route path="/admin-edit/:id" component={AdminEditPage} />
            )}
            {/* products */}
            {user.role === 'shop' && (
              <Route path="/products" exact component={ProductsPage} />
            )}
            {user.role === 'shop' && (
              <Route path="/product" component={AddProductPage} />
            )}
            {user.role === 'shop' && (
              <Route path="/products/:id" component={UpdateProductPage} />
            )}
            <Route path="/" exact component={HomePage} />
            <Route
              path="/menu/:id/:brandName/:rating/:address"
              component={MenuPage}
            />
            {/* <Route path="*" component={NoFoundPage} /> */}
            {/* user */}
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/user-update" component={UserUpdatePage} />
            <Route path="/user-edit-password" component={UserPasswordPage} />
            <Route path="/user-edit-email" component={UserEmailPage} />
            <Route path="/user-upload-image" component={UserUploadImage} />
            <Route
              path="/user-edit-creditcard"
              component={UserCreditCardPage}
            />
            <Route path="/user-edit-creditors" component={UserCreditCardPage} />
            <Route path="/credit-card-start" component={CreditCardStartPage} />
            <Route
              path="/credit-card-delete"
              component={CreditCardDeletePage}
            />
            <Route
              path="/credit-card-update"
              component={CreditCardUpdatePage}
            />
            {/* order */}
            {user ? (
              <Route path="/order" component={OrderPage} />
            ) : (
              <Route path="/order" component={NoPermissionPage} />
            )}
            {user ? (
              <Route path="/orders" component={OrdersPage} />
            ) : (
              <Route path="/orders" component={NoPermissionPage} />
            )}
            <Route path="/orders" component={OrdersPage} />
            <Route path="/order-pay/:id" component={OrderPayPage} />
            <Route path="/order-info" component={OrderInfoPage} />
            <Route path="/add-to-cart/:id" component={AddToCartPage} />
            <Route path="/order-check" component={OrderCheckPage} />
            <Route path="/order-item-edit/:id" component={OrderItemEditPage} />
            <Redirect to="/" component={HomePage} />
          </Switch>
        </>
        <Footer />
      </Router>
    </>
  );
}

export default App;
