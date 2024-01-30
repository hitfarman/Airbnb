// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  /** 定义内部的状态 */
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  // const [posIndex, setPosIndex] = useState(0)
  const posIndexRef = useRef(0)
  const distanceRef = useRef()

  /** 组件渲染完毕, 判断是否显示右侧的按钮 */
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth
    const totalDistance = scrollWidth - clientWidth
    distanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children]) // 一旦scroll-content的内容children发生了变化, 就要重新执行useEffect

  /** 事件处理逻辑 */
  function controlClickHandle(isright) {
    const newIndex = isright ? (posIndexRef.current + 1) : (posIndexRef.current - 1)
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    /** 恢复上一次的平移,所以,跟向左和向右平移 transform值是一样的 */ 
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    posIndexRef.current = newIndex
    // 判断是否继续显示左边的按钮
    setShowLeft(newOffsetLeft > 0)
    // 判断是否继续显示右边的按钮
    setShowRight(distanceRef.current > newOffsetLeft)
  }

  return (
    <ScrollViewWrapper>
      { showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft/>
        </div>
      ) }
      { showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight/>
        </div>
      ) }
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          { props.children }
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView