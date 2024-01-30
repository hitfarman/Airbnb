import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'
import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'
import LongForItem from '@/components/long-for-item'

const HomeLongFor = memo((props) => {
  const { infoData } = props

  return (
    <LongForWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className='longfor-list'>
        <ScrollView>
        {
          infoData.list.map(item => {
            return <LongForItem itemData={item} key={item.city} />
          })
        }
        </ScrollView>
      </div>
      <SectionFooter/>
    </LongForWrapper>
  )
})

HomeLongFor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongFor