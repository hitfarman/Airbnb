import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { fetchEntireRoomListAction } from '@/store/modules/entire/actionCreators'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

const Entire = memo(() => {
  const { roomList, totalCount } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount
  }), shallowEqual)

  // send network request to acquire entire page data
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireRoomListAction())
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms roomList={roomList} totalCount={totalCount} />
      <EntirePagination totalCount={totalCount}/>
    </EntireWrapper>
  )
})

export default Entire