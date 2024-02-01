import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
/** 如果只是一个东西,只是做显示和隐藏之间的切换,这时候, 可以直接用: CSSTransition组件包裹它即可.
 CSSTransition里有一个in 属性,给in属性传入一个bool类型, 那么它就可以在显示和隐藏之间给它做一个过渡动画的效果了
 但是,这次不是在显示和隐藏之间切换,而是切换它里面的内容:
 内容发生改变,(以前时一个登录和注册按钮,来实现内容的切换), 
 
 这时, 可以使用SwitchTransition, SwitchTransition可以在内容切换的时候, 在两个内容之间给它做一个对应的过度动画的效果的

 另外, 如果有一组数据需要做动画,是个动画组的话,可以使用 TransitionGroup

 目前,这里使用SwitchTransition更合适,因为它可以帮助我们完成在两个内容之间切换的时候, 给它做对应动画
 */
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { BrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon_close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleArrowDown from '@/assets/svg/icon-triangle-arrow-down'
import Indicator from '../indicator'
import classNames from 'classnames'
import IconTriangleArrowUp from '@/assets/svg/icon-triangle-arrow-up'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showDesc, setShowDesc] = useState(true)

  /** 当图片浏览器展示出来时, 不管之前有没有滚动条, 应该让滚动(条)的功能消失 
   * 也就是: 当这个组件渲染出来以后, 额外配置的操作: 让滚动功能消失 ---- 属于副作用
  */
  useEffect(() => {
    document.body.style.overflow = "hidden" // 它的默认值是auto,auto在内容变多时就会滚动
    return () => {
      document.body.style.overflow = "auto" // 当图片浏览器关闭时, 恢复滚动
    }
  }, [])

  /** 事件监听的逻辑 */
  function closeBtnClickHandle(params) {
    if (closeClick) closeClick()
  }

  const isNextRef = useRef(true)
  const controlClickHandle = useCallback((isNext) => {
    const newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    const length = pictureUrls.length
    setCurrentIndex((newIndex + length) % length)
    isNextRef.current = isNext
  }, [currentIndex, pictureUrls])

  function bottomItemClickHandle(index) {
    if (index > currentIndex) {
      isNextRef.current = true 
    } else {
      isNextRef.current = false
    }
    setCurrentIndex(index)
  }
  return (
    <BrowserWrapper isNext={isNextRef.current} showDesc={showDesc}>
      <div className='top'>
        <div className='close-btn' onClick={closeBtnClickHandle}>
          <IconClose/>
        </div>
      </div>
      <div className='slider'>
        <div className='control'>
          <div className="btn left" onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width={77} height={77}/>
          </div>
          <div className="btn right" onClick={e => controlClickHandle(true)}>
            <IconArrowRight width={77} height={77}/>
          </div>
        </div>
        <div className='picture'>
          <SwitchTransition mode='in-out'>
            <CSSTransition 
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={500}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className='preview'>
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex+1}/{pictureUrls.length}:</span>
              <span>room apartment picture{currentIndex+1}</span>
            </div>
            <div className="toggle" onClick={e => setShowDesc(!showDesc)}>
              <span>{showDesc? "hide" : "show"} picture list</span>
              { showDesc ? <IconTriangleArrowDown/> : <IconTriangleArrowUp/> }
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div 
                      key={item}
                      onClick={e => bottomItemClickHandle(index)}
                      className={classNames('item', {active: index===currentIndex})} 
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func
}

export default PictureBrowser