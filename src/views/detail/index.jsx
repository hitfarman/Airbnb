import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import DetailInfos from './c-cpns/detail-infos'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed: true, topAlpha: false}))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPictures/>
      <DetailInfos/>
    </DetailWrapper>
  )
})

export default Detail