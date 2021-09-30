import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { interceptor } from './api';
import store from './store';

const queryClient = new QueryClient();
interceptor(store);
ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root')
);
