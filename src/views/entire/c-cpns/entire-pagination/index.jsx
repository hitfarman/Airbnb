import React, { memo } from 'react'
import { styled } from 'styled-components';
import { Pagination } from '@mui/material'

import { PaginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchEntireRoomListAction } from '@/store/modules/entire/actionCreators';

//Make a styled pagination component using styled API that overrides default style
const MyPagination = styled(Pagination)({
  '& .MuiPaginationItem-page': {
    margin: '0 8px'
  },
  '& .MuiPaginationItem-page:hover': {
    textDecoration: 'underline'
  },
  '& .MuiPaginationItem-page.Mui-selected:hover': {
    backgroundColor: '#222',
  },
  '& .Mui-selected': {
    backgroundColor: '#222',
    color:'#fff',
  },
  "& .MuiPaginationItem-icon": {
      fontSize: "24px"
  }
  //There has a lot of Global classes. you have to use it according to your requirement
  //Some classes are MuiPaginationItem-root, MuiPaginationItem-page and Mui-selected
});

const EntirePagination = memo((props) => {
  const { currentPage, totalCount, roomList } = useSelector((state) => ({
    currentPage: state.entire.currentPage,
    totalCount: state.entire.totalCount,
    roomList: state.entire.roomList
  }), shallowEqual)
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  /** 事件处理逻辑 */
  const dispatch = useDispatch()
  function handleChange(event, pageCount) {
    window.scrollTo(0, 0) // 回到顶部

    // 更新最新的当前页码: redux => currentPage
    // dispatch(changeCurrentPageAction(pageCount - 1))
    dispatch(fetchEntireRoomListAction(pageCount - 1)) // 合二为一
  }

  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className="info">
            <MyPagination count={totalPage} onChange={handleChange} />
            <div className="desc">
              第 {startCount} - {endCount} 个房源, 共 {totalCount} 个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  )
})

export default EntirePagination