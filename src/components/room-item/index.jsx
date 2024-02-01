import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Rating } from '@mui/material'
import { Carousel } from 'antd';

import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { changeDetailInfoAction } from '@/store/modules/detail';
import { styled } from 'styled-components';

//Make a styled Rating component using styled API that overrides default style
const MyRating = styled(Rating)({
  '& .MuiRating-decimal': {
    marginRight: '-2px'
  }
})

const RoomItem = memo((props) => {
  /** 只有点击entire页面中的item才跳转到详情detail页面, 首页中点击item因为没有那么多picture,不跳转detail
   * 所以,这里可以把点击事件传递出去,由调用RoomItem的父组件传入
   * 然后,进入到RoomItem时, 判断一下,外面是否传入了 itemClick, 传入时才跳转到detail,为传入不跳转detail页面
   */
  const { itemData, itemWidth, itemClick } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const sliderRef = useRef()

  const dispatch = useDispatch()
  
  /** 事件处理的逻辑 */
  function controlClickHandle(event, isNext) {
    event.stopPropagation()
    // 1. 上一个面板/下一个面板
    isNext ? sliderRef.current.next() : sliderRef.current.prev()

    // 设置最新的索引
    const newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length
    setSelectIndex((length + newIndex) % length)
  }

  function itemClickHandle(id) {
    if (itemClick) {
      dispatch(changeDetailInfoAction(itemData))
      itemClick(itemData)
    }
  }

  /** 子元素的赋值 */
  const pictureElement = (
    <div className='cover'>
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  const sliderElement = (
    <div className='slider'>
      <div className="control">
        <div className="btn left" onClick={e => controlClickHandle(e, false)}>
          <IconArrowLeft width="30" height="30"/>
        </div>
        <div className="btn right" onClick={e => controlClickHandle(e, true)}>
          <IconArrowRight width={30} height={30}/>
        </div>
      </div>
      <div className='indicator'>
        <Indicator selectIndex={selectIndex}>
          {
            itemData.picture_urls?.map((item, index) => {
              return (
                <div className='item' key={index}>
                  <span className={classNames('dot', {active: index===selectIndex})}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          itemData.picture_urls?.map(item => {
            return (
              <div className='cover'key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )

  return (
    <ItemWrapper 
      itemWidth={itemWidth}
      onClick={e => itemClickHandle(itemData.id)}
      verifyColor={itemData.verify_info?.text_color ?? "#39576a"}
      extraColor={ itemData.bottom_info?.content_color ?? ((props) => props.theme.text.primaryColor) }
    >
      <div className='inner'>
        {
          itemData.picture_urls ? sliderElement : pictureElement
        }
        <div className='desc'>
          {
            itemData.verify_info.messages.join(" · ")
          }
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>￥{itemData.price}/晚</div>
        <div className='bottom'>
          <MyRating
            value={itemData.star_rating ?? 5} 
            precision={0.1}
            readOnly 
            sx={{ fontSize: "12px", color: itemData.star_rating_color }} 
          />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'>{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem