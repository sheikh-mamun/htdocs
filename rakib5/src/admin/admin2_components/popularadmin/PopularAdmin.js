import React from 'react'
import Admin2_asidebar from '../Admin2_asidebar'
import Admin2_nav from '../Admin2_nav'
import ListPopularAdmin from './ListPopularAdmin'

export default function PopularAdmin() {
  return (
    <>
    <Admin2_asidebar/>
    <div className='content'>
        <Admin2_nav/>
        <ListPopularAdmin/>

    </div>
    </>
  )
}

