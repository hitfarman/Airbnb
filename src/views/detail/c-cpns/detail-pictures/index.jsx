import React, { memo, useCallback, useState } from 'react'
import { PicturesWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import PictureBrowser from '@/base-ui/picture_browser'

const DetailPictures = memo(() => {
  /** 定义组件内部状态 */
  const [showBrowser, setShowBrowser] = useState(false)

  /** 从redux获取数据 */
  const { detailInfo } = useSelector(state => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  /** */
  const closeClick = useCallback(() => {
    setShowBrowser(false)
  }, [])

  return (
    <PicturesWrapper>
      <div className='pictures'>
        <div className='left'>
          <div className="item" onClick={e => setShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className='right'>
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className="item"  onClick={e => setShowBrowser(true)} key={item}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='show-btn' onClick={e => setShowBrowser(true)}>show picture</div>
      { showBrowser && <PictureBrowser pictureUrls={detailInfo.picture_urls} closeClick={closeClick}/> }
    </PicturesWrapper>
  )
})

export default DetailPictures