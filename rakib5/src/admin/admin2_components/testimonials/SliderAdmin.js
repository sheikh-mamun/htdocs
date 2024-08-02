import React from 'react'
import Admin2_asidebar from '../Admin2_asidebar'
import Admin2_nav from '../Admin2_nav'
import ListSliderAdmin from './ListSliderAdmin'

export default function SliderAdmin() {
  return (
    <>
    <Admin2_asidebar/>
    <div className='content'>
        <Admin2_nav/>
<ListSliderAdmin/>
    </div>
    </>
  )
}
