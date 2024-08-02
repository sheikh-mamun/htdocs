import React from 'react'
import Admin2_asidebar from '../Admin2_asidebar'
import Admin2_nav from '../Admin2_nav'
import ListBlogAdmin from './ListBlogAdmin'

export default function BlogAdmin() {
  return (
    <>
    <Admin2_asidebar/>
    <div className='content'>
        <Admin2_nav/>
        <ListBlogAdmin/>

    </div>
    </>
  )
}
