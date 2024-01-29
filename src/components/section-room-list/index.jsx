import PropTypes from 'prop-types'
import React, { memo } from 'react'

import RoomItem from '../room-item'
import { RoomListWrapper } from './style'

const SectionRoomList = memo((props) => {
  const { roomList = [], itemWidth } = props

  return (
    <RoomListWrapper>
      {
        roomList.slice(0, 8).map(item => {
          return (
            <RoomItem itemData={item} itemWidth={itemWidth} key={item.id}/>
          )
        })
      }
    </RoomListWrapper>
  )
})

SectionRoomList.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string
}

export default SectionRoomList