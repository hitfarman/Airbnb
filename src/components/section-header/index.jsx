import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const [showArrow, setShowArrow] = useState(false)
  const { title, subtitle } = props

  return (
    <HeaderWrapper>
      <div className='main-header' 
        onMouseOver={e => setShowArrow(true)}
        onMouseLeave={e => setShowArrow(false)}
      >
        <h2 className='title'>{title}</h2>
        { subtitle && <div className='subtitle'>{subtitle}</div> }
      </div>
      {
        showArrow && (<div className='arrow'>&gt;</div>)
      }
    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader