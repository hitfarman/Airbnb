import React, { memo } from 'react'
import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  
  return (
    <LeftWrapper>
      <div className='logo' onClick={e => navigate("/home")}>
        <IconLogo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft