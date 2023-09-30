import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@Store';
import Theme from '@Theme';

import App from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Theme>
      <Provider store={store}>
        <PersistGate loading={<h1>Loading persist..</h1>} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Theme>
  </React.StrictMode>
);
