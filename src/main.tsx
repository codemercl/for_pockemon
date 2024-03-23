import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/app/App';
import 'src/app/style/global.scss';
import { Provider } from 'react-redux';
import { store } from 'src/app/providers/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);