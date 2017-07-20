import './index.css';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
          <App />
    </Provider>,document.getElementById('root'));
registerServiceWorker();
