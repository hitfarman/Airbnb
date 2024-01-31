import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { shallowEqual, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const EntireRooms = memo((props) => {
  const { totalCount, roomList, isLoading } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    roomList: state.entire.roomList,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  /** 事件处理 */
  const navigate = useNavigate()
  const itemClickHandle = useCallback((item) => {
    navigate(`/detail/${item.id}`)
  }, [navigate])

  return (
    <RoomsWrapper>
      <h2 className='title'>{totalCount} available rooms</h2>
      <div className='room-list'>
      {
        roomList.map(item => {
          return (
            <RoomItem 
              itemData={item} 
              itemWidth="20%" 
              key={item._id} 
              itemClick={itemClickHandle}
            />
          )
        })
      }
      </div>
      { isLoading && <div className="cover"></div> }
    </RoomsWrapper>
  )
})

export default EntireRooms
