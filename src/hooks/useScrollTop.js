import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function useScrollTop() {
  /** 看下有没有发生页面切换, 有页面切换时,就让 window滚动到顶部
 * Router里的useLocation,loaction里有个属性:pathname,它监听url路径有没有发生改变的,路径改变页面就会切换  */
  const loaction = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [loaction.pathname]) 
}