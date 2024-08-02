import React from 'react'
import Admin2_asidebar from '../Admin2_asidebar'
import Admin2_nav from '../Admin2_nav'
import ProductsAdminList2 from './ProductAdminList2'

export default function ProdcutAdmin2() {
    return (
        <>

            <Admin2_asidebar />
            <div className="content">
                <Admin2_nav />

                <ProductsAdminList2 />

            </div>
        </>
    )
}