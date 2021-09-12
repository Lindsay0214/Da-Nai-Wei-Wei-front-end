import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import OrderCheckPage from './pages/OrderCheckPage';
import OrderPayPage from './pages/OrderPayPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/order" component={OrderPage} exact />
        <Route path="/order/check" component={OrderCheckPage} exact />
        <Route path="/order/pay" component={OrderPayPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
