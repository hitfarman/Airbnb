import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  /** 定义组件内部状态 */
  const [showPanel, setIShowPanel] = useState(false)

  /** 副作用代码 - 事件处理采用事件捕获 */
  useEffect(() => {
    function windowHandleClick() {
      setIShowPanel(false)
    }
    window.addEventListener("click", windowHandleClick, true)
    return () => {
      window.removeEventListener("click", windowHandleClick, true)
    }
  }, [])

  /** 事件处理函数 */
  function profileCilckHandle(event) {
    // 阻止事件冒泡
    // event.stopPropagation()
    setIShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>Log in</span>
        <span className='btn'>Sign up</span>
        <span className='btn glb'>
          <IconGlobal/>
        </span>
      </div>

      <div className='profile' onClick={e => profileCilckHandle(e)}>
        <IconMenu/>
        <IconAvatar/>

        { showPanel && (
          <div className='panel'>
            <div className="top">
              <div className="item login">Log in</div>
              <div className="item register">Sign up</div>
            </div>
            <div className="bottom">
              <div className="item">Gift cards</div>
              <div className="item">Airbnb you home</div>
              <div className="item">Help centre</div>
            </div>
          </div>
        ) }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight