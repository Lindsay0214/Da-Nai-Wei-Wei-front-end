/* eslint-disable */
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import CMSPage from '../pages/CMSPage';
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';
import LoginPage from '../pages/LoginPage';
import OrderPage from '../pages/OrderPage';
import OrderPayPage from '../pages/OrderPayPage';
import RegisterPage from '../pages/RegisterPage';
// import CMSStorePage from '../pages/CMSStorePage';
// import CMSMemberPage from '../pages/CMSMemberPage';
import OrderInfoPage from '../pages/OrderInfoPage';
import AddToCartPage from '../pages/AddToCartPage';
import OrderCheckPage from '../pages/OrderCheckPage';
import OrdersPage from '../pages/OrdersPage/OrdersPage';
import NoPermissionPage from '../pages/NoPermissionPage';
// import CreditCardStartPage from '../pages/CreditCardStartPage';
// import CreditCardDeletePage from '../pages/CreditCardDeletePage';
// import CreditCardUpdatePage from '../pages/CreditCardUpdatePage';
// import AdjustMemberDataPage from '../pages/AdjustMemberData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function App() {
  return (
    <div className=" bg-yellow-lightYellow">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/orders">
            <OrdersPage />
          </Route>
          <Route path="/order-info">
            <OrderInfoPage />
          </Route>
          <Route path="/add-to-cart">
            <AddToCartPage />
          </Route>
          <Route path="/no-permission">
            <NoPermissionPage />
          </Route>
          <Route path="/order">
            <OrderPage />
          </Route>
          <Route path="/order-check">
            <OrderCheckPage />
          </Route>
          <Route path="/order-pay">{/* <OrderPayPage /> */}</Route>
          <Route path="/menu" exact>
            <MenuPage />
          </Route>
          <Route path="/credit-card-start" exact>
            {/* <CreditCardStartPage /> */}
          </Route>
          <Route path="/credit-card-delete" exact>
            {/* <CreditCardDeletePage /> */}
          </Route>
          <Route path="/credit-card-update" exact>
            {/* <CreditCardUpdatePage /> */}
          </Route>
          <Route path="/adjust-member-data" exact>
            {/* <AdjustMemberDataPage /> */}
          </Route>
          <Route path="/CMS" exact>
            {/* <CMSPage /> */}
          </Route>
          <Route path="/CMS-store" exact>
            {/* <CMSStorePage /> */}
          </Route>
          <Route path="/CMS-member" exact>
            {/* <CMSMemberPage /> */}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
