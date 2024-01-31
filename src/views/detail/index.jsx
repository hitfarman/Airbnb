import React, { memo } from 'react'
import { DetailWrapper } from './style'
import { useParams } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'

const Detail = memo(() => {
  const { detailInfo } = useSelector(state => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)
  const params = useParams()
  
  return (
    <DetailWrapper>
      { params.id }
      { detailInfo.name }
    </DetailWrapper>
  )
})

export default Detail