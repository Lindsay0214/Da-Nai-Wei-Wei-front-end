import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getMe } from '../api';
import { selectUser } from '../features/userSlice';

import AdminUpdatePage from '../pages/AdminUpdatePage';
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';
import LoginPage from '../pages/LoginPage';
import OrderPage from '../pages/OrderPage';
import OrderPayPage from '../pages/OrderPayPage';
import RegisterPage from '../pages/RegisterPage';
import AdminEditPage from '../pages/AdminEditPage';
import UserEditPage from '../pages/UserEditPage';
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
import UserPasswordPage from '../pages/UserEditPage/UserPasswordPage';
import UserEmailPage from '../pages/UserEditPage/UserEmailPage';
import UserCreditCardPage from '../pages/UserEditPage/UserCreditCardPage';
// import Hamburger from '../components/Hamburger';
import AdminNavbar from '../components/AdminNavbar';

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   getMe().then((response) => {
  //     if (response.ok) {
  //       setUser(response.data);
  //     }
  //   });
  // }, []);
  const user = useSelector(selectUser);

  return (
    <>
      <Router>
        {console.log('首頁：', user)}
        {user && user.role === 'admin' ? (
          <>
            <AdminNavbar />
            <Route path="/admin-update" component={AdminUpdatePage} />
            <Route path="/admin-edit/:id" component={AdminEditPage} />
          </>
        ) : (
          <>
            <Navbar />
            {/* <Hamburger /> */}
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/menu" component={MenuPage} />
              {/* <Route path="*" component={NoFoundPage} /> */}
              {/* user */}
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/no-permission" component={NoPermissionPage} />
              <Route path="/user-update" component={UserUpdatePage} />
              <Route path="/user-edit" component={UserEditPage} />
              <Route path="/user-edit-password" component={UserPasswordPage} />
              <Route path="/user-edit-email" component={UserEmailPage} />
              <Route
                path="/user-edit-creditcard"
                component={UserCreditCardPage}
              />
              <Route
                path="/credit-card-start"
                component={CreditCardStartPage}
              />
              <Route
                path="/credit-card-delete"
                component={CreditCardDeletePage}
              />
              <Route
                path="/credit-card-update"
                component={CreditCardUpdatePage}
              />
              {/* order */}
              <Route path="/order" component={OrderPage} />
              <Route path="/orders" component={OrdersPage} />
              <Route path="/order-pay" component={OrderPayPage} />
              <Route path="/order-info" component={OrderInfoPage} />
              <Route path="/add-to-cart" component={AddToCartPage} />
              <Route path="/order-check" component={OrderCheckPage} />
            </Switch>
          </>
        )}
        <Footer />
      </Router>
    </>
  );
}

export default App;
