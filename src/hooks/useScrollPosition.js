import { useEffect, useState } from "react";
import { throttle } from "underscore";

export default function useScrollPosition() {
  // 两个状态记录位置
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // 监听window滚动
  useEffect(() => {
    const handleScroll = throttle(function() {
      setScrollX(Math.round(window.scrollX))
      setScrollY(Math.round(window.scrollY))
    }, 100)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // 拿到 scrollX scrollY,不是在这里用,要返回出去,给别人用
  // 返回对象,在拿到时,结构更好用
  return { scrollX, scrollY }
}