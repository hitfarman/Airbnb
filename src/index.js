import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import App from '@/App'
import 'antd/dist/reset.css'
import 'normalize.css'
import './assets/css/index.less'
import store from './store'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 这里要把Provider放到Suspense组件的外面,否则会出现异步懒加载完成切换页面时,Redux没法监听store数据变化
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
);


