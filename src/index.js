import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from '@/App'
import 'normalize.css'
import './assets/css/index.less'
import store from './store'

// @ configue => src : configure in webpack
// solution: craco

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Suspense fallback=<h3>loading</h3>>
          <App />
        </Suspense>
      </HashRouter>
    </Provider>
  // </React.StrictMode>
);


