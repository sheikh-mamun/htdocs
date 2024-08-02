import React from 'react'
import Admin2_asidebar from '../Admin2_asidebar'
import Admin2_nav from '../Admin2_nav'
import ChoosesAdminList from './ChoosesAdminList'

export default function ChoosesAdmin() {
    return (
        <>

            <Admin2_asidebar />
            <div className="content">
                <Admin2_nav />

                <ChoosesAdminList/>

            </div>
        </>
    )
}