import PropTypes from 'prop-types'
import React, { memo } from 'react'

import RoomItem from '../room-item'
import { RoomListWrapper } from './style'

const SectionRoomList = memo((props) => {
  const { roomList = [] } = props

  return (
    <RoomListWrapper>
      {
        roomList.slice(0, 8).map(item => {
          return (
            <RoomItem itemData={item} key={item.id}/>
          )
        })
      }
    </RoomListWrapper>
  )
})

SectionRoomList.propTypes = {
  roomList: PropTypes.array
}

export default SectionRoomList