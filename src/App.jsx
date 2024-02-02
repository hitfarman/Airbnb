import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { useScrollTop } from './hooks'

const App = memo(() => {
  /** 看下有没有发生页面切换, 有页面切换时,就让 window滚动到顶部
   * Router里的useLocation,loaction里有个属性:pathname,它监听url路径有没有发生改变的,路径改变页面就会切换 
   * 如果不想放到这里, 也可以单独封装成一个hook
   * */
  // const loaction = useLocation()
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [loaction.pathname]) 

  useScrollTop()

  return (
    <div className='app'>
      <AppHeader/>
      <Suspense fallback=<h3>loading</h3>>
        <div className='page'>
          {
            useRoutes(routes)
          }
        </div>
      </Suspense>
      <AppFooter/>
    </div>
  )
})

export default App