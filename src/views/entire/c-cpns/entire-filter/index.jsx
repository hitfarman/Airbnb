import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([])

  function itemClickHandle(clickItem) {
    /** 注意: 拿到item后,不能直接放到selectItems中: selectItems.push(item)
      而是应该创建一个新的items数组,同时对原来selectItems数组做解构,把原数组内容放到新的数组中
      最后, 再调用setSelectItems
     */
    const newItems = [...selectItems]
    if (newItems.includes(clickItem)) { // remove 
      const itemIndex = newItems.findIndex(item => item === clickItem)
      newItems.splice(itemIndex, 1)
    } else { // add
      newItems.push(clickItem)
    }

    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className='filter'>
      {
        filterData.map((item, index) => {
          return (
            <div 
              className={classNames('item', {active: selectItems.includes(item)})}
              onClick={e => itemClickHandle(item)}
              key={item}
            >
              {item}
            </div>
          )
        })
      }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter