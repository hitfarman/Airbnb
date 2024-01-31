import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constants'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE, 
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchEntireRoomListAction = (page = 0) => {
  // return a new function, which receive two func parameters: dispatch & getState
  return async (dispatch) => {
    // 0. 修改 currentPage
    dispatch(changeCurrentPageAction(page))
    dispatch(changeIsLoadingAction(true))

    // 1. 根据store中过的当前页码, 获取最新的roomList数据
    // const currentPage = getState().entire.currentPage
    const res = await getEntireRoomList(page * 20)
    
    // 2. 获取到最新的数据, 保存到redux的store中
    dispatch(changeRoomListAction(res.list))
    dispatch(changeTotalCountAction(res.totalCount))
    dispatch(changeIsLoadingAction(false))
  }
}
