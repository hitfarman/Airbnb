import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRoomList from '@/components/section-room-list'

const HomeSectionV1 = memo((props) => {
  const { infoData } = props

  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionRoomList roomList={infoData.list} itemWidth="25%" />
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1