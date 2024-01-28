import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import 'antd/dist/reset.css'
import App from '@/App'
import 'normalize.css'
import './assets/css/index.less'
import store from './store'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback=<h3>loading</h3>>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
);


