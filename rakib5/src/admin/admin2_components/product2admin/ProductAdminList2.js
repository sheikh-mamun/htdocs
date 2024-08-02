import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function ProductsAdminList2() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost/rakib5/Backend/product2/listProduct.php")
            .then((res) => setData(res.data))
    }, [])
    const deletNews = (id) => {
        axios.get(`http://localhost/rakib5/Backend/product2/deleteProduct.php?id=${id}`)
            .then((res) => {
                console.log(res.data)
                axios.get("http://localhost/rakib5/Backend/product2/listProduct.php")
                    .then((res) => setData(res.data))
            })
    }
    return (
        <main>
            <div className='card card-body'>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h1 className="bg-dark text-white text-center text-bold">Products2 List</h1>

                            <NavLink to={'/admin/addproducts2'} className="btn btn bg-primary">Add New</NavLink><br />
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <table className='table table-bordered ' >
                                <thead className=' bg-secondary text-white text-center font-weight-bold position-sticky'>
                                    <tr>
                                        <th>SL</th>
                                        <th>Photo</th>
                                        <th>Name</th>
                                        <th>price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-light text-dark text-center font-weight-bold'>
                                    {data.map((d, i) => {
                                        return (
                                            <tr key={i}>


                                                <td>{i + 1}</td>
                                                <td><img src={`http://localhost/rakib5/Backend/images/${d.photo}`} alt={d.name} height={100} /></td>
                                                <td>{d.name}</td>
                                                <td>{d.price}</td>
                                                <td className='d-sm-flex '>

                                                    <NavLink to={`/admin/updateproducts2/${d.id}`} className='btn bg-success'>Update</NavLink>


                                                    <button className='btn xs bg-danger' onClick={() => deletNews(d.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}